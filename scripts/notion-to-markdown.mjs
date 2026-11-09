// Convert exported Notion blocks (with children inlined, as cleanBlock in
// export-notion.mjs produces them) to the Markdown in content/pages/.
//
// Notion features map to Markdown the site renders like this:
// - callouts become GitHub-style alerts: > [!NOTE], > [!WARNING], > [!CAUTION]
// - videos become a link on its own line, which the site embeds
// - columns that each hold one image become images on consecutive lines,
//   shown in a row; other columns become ::::columns / :::column blocks
// - page mentions become links to the page; mentions of pages that aren't on
//   the site become plain text
// - synced blocks are replaced by their content, and a toggle by its title
//   followed by its content

const CALLOUT_TYPES = { "⚠️": "WARNING", "🔴": "CAUTION" };

/**
 * `hrefById` maps a page id without dashes to `{ href }` for the pages that
 * mentions can link to.
 */
export function blocksToMarkdown(blocks, hrefById) {
  return renderBlocks(blocks, hrefById).trim() + "\n";
}

function renderBlocks(blocks, hrefById) {
  let markdown = "";
  let previous = null;
  for (const block of blocks) {
    const text = renderBlock(block, hrefById);
    if (!text) continue;
    // List items in a row stay one list; everything else is its own paragraph.
    const sameList = previous && isListItem(block) && previous.type === block.type;
    if (markdown) markdown += sameList ? "\n" : "\n\n";
    markdown += text;
    previous = block;
  }
  return markdown;
}

const isListItem = (block) => block.type === "bulleted_list_item" || block.type === "numbered_list_item";

function renderBlock(block, hrefById) {
  const { type } = block;
  const value = block[type] ?? {};
  const text = renderRichText(value.rich_text ?? [], hrefById);
  const children = block.children ?? [];

  switch (type) {
    case "paragraph":
      return withChildren(escapeLineStart(text), children, hrefById, "");
    case "heading_1": // The site shows heading 1 and heading 2 alike.
    case "heading_2":
      return text && `## ${text}`;
    case "heading_3":
      return text && `### ${text}`;
    case "bulleted_list_item":
      return withChildren(`- ${text}`, children, hrefById, "  ");
    case "numbered_list_item":
      return withChildren(`1. ${text}`, children, hrefById, "   ");
    case "to_do":
      return withChildren(`- [${value.checked ? "x" : " "}] ${text}`, children, hrefById, "  ");
    case "quote":
      return quote([text, renderBlocks(children, hrefById)].filter(Boolean).join("\n\n"));
    case "callout": {
      const emoji = value.icon?.type === "emoji" ? value.icon.emoji : null;
      const body = [text, renderBlocks(children, hrefById)].filter(Boolean).join("\n\n");
      return quote(`[!${CALLOUT_TYPES[emoji] ?? "NOTE"}]\n${body}`);
    }
    case "toggle":
      return [escapeLineStart(text), renderBlocks(children, hrefById)].filter(Boolean).join("\n\n");
    case "synced_block":
      return renderBlocks(children, hrefById);
    case "column":
      return `:::column\n${renderBlocks(children, hrefById)}\n:::`;
    case "column_list": {
      // Images on consecutive lines form one paragraph, which the site shows as a row.
      const oneImageEach = children.every((column) => column.children?.length === 1 && column.children[0].type === "image");
      if (children.length && oneImageEach) {
        return children.map((column) => renderBlock(column.children[0], hrefById)).join("\n");
      }
      return `::::columns\n${children.map((column) => renderBlock(column, hrefById)).join("\n")}\n::::`;
    }
    case "image":
      return `![${plainCaption(value)}](${linkDestination(mediaUrl(value))})`;
    case "video":
      return value.type === "external" ? mediaUrl(value) : `[Video](${linkDestination(mediaUrl(value))})`;
    case "file":
    case "pdf":
    case "audio":
      return `[${plainCaption(value) || "File"}](${linkDestination(mediaUrl(value))})`;
    case "divider":
      return "---";
    case "code": {
      const code = value.rich_text.map((part) => part.plain_text).join("");
      const fence = "`".repeat(Math.max(3, longestRun(code, "`") + 1));
      return `${fence}${value.language === "plain text" ? "" : value.language}\n${code}\n${fence}`;
    }
    default:
      console.warn(`Skipping unsupported Notion block type "${type}" (${block.id})`);
      return "";
  }
}

function withChildren(line, children, hrefById, indent) {
  const nested = renderBlocks(children, hrefById);
  if (!nested) return line;
  return `${line}\n${indent ? "" : "\n"}${nested.replace(/^(?=.)/gm, indent)}`;
}

const quote = (markdown) => markdown.replace(/^/gm, "> ").replace(/^> $/gm, ">");

const mediaUrl = (value) => (value.type === "external" ? value.external.url : value.file.url);
const plainCaption = (value) => escapeText((value.caption ?? []).map((part) => part.plain_text).join(""));
const linkDestination = (url) => (/[\s()<>]/.test(url) ? `<${url.replaceAll(">", "%3E")}>` : url);

// --- rich text --------------------------------------------------------------

function renderRichText(parts, hrefById) {
  // Merge neighbouring parts that look the same, so "**a****b**" can't happen.
  const runs = [];
  for (const part of parts) {
    const run = toRun(part, hrefById);
    const last = runs.at(-1);
    if (last && last.key === run.key) last.text += run.text;
    else runs.push(run);
  }
  // Spaces at either end of a paragraph or list item mean nothing in Markdown.
  return runs.map(renderRun).join("").trim().replaceAll("\n", "\\\n");
}

function toRun(part, hrefById) {
  const { bold, italic, strikethrough, code } = part.annotations;
  let href = part.type === "text" ? part.text.link?.url ?? null : null;
  if (part.type === "mention" && part.mention.type === "page") {
    href = hrefById.get(part.mention.page.id.replaceAll("-", ""))?.href ?? null;
  }
  const text = part.type === "text" ? part.text.content : part.plain_text;
  return { text, bold, italic, strikethrough, code, href, key: JSON.stringify([bold, italic, strikethrough, code, href]) };
}

function renderRun({ text, bold, italic, strikethrough, code, href }) {
  // Emphasis can't start or end with a space, so keep spaces outside it.
  const [, before, core, after] = text.match(/^(\s*)([\s\S]*?)(\s*)$/);
  if (!core) return text;

  let markdown = code ? inlineCode(core) : escapeText(core);
  if (strikethrough) markdown = `~~${markdown}~~`;
  if (italic) markdown = `_${markdown}_`;
  if (bold) markdown = `**${markdown}**`;
  if (href) markdown = `[${markdown}](${linkDestination(href)})`;
  return before + markdown + after;
}

function inlineCode(text) {
  const ticks = "`".repeat(longestRun(text, "`") + 1);
  const pad = text.startsWith("`") || text.endsWith("`") ? " " : "";
  return `${ticks}${pad}${text}${pad}${ticks}`;
}

const escapeText = (text) => text.replace(/[\\`*_[\]<>~|]/g, "\\$&").replace(/&(?=#?\w+;)/g, "&amp;");

/** Escape what would otherwise make a paragraph a heading, list, quote, or columns. */
const escapeLineStart = (text) => text.replace(/^(\s*)([#>+:-])/, "$1\\$2").replace(/^(\s*\d+)([.)])/, "$1\\$2");

function longestRun(text, char) {
  let longest = 0;
  for (const match of text.matchAll(new RegExp(`\\${char}+`, "g"))) longest = Math.max(longest, match[0].length);
  return longest;
}
