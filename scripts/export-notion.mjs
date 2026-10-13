// Export Husker's Notion databases into the JSON files in content/, which
// the site reads instead of calling Notion.
//
//   pnpm export-notion     (needs NOTION_API_KEY in .env.local)
//
// Writes content/{links,categories,articles,courses}.json, one
// content/pages/<slug>.json per wiki page, and content/pages/index.ts (its blocks, with children
// inlined and page mentions already resolved). Files hosted by Notion
// (images, videos) are downloaded to public/content/, because Notion's
// links to them expire after an hour. Images are resized and saved as WebP:
// Notion keeps uploads as multi-megabyte PNGs, far bigger than the site shows.

import { mkdir, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const DATABASES = {
  courses: "efa10c1e8f5e432aa0e393b435c68a67",
  links: "b2389f2e689647208200abc26b44c137",
  wiki: "ac7bbf9bc11343ad90fe028fb371b112",
  categories: "fa1f1ea3064040cb80dd18c63a7b6dac",
};
const CONTENT_DIR = "content";
const FILES_DIR = path.join("public", "content");
// Wiki images display at most ~34rem wide; this keeps them sharp at 2x and up.
const IMAGE_WIDTH = 1600;
const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".tif", ".tiff", ".heic"]);

const key = process.env.NOTION_API_KEY;
if (!key) throw new Error("Missing NOTION_API_KEY; see the README.");

async function notion(apiPath, body, attempt = 0) {
  const response = await fetch(`https://api.notion.com/v1/${apiPath}`, {
    method: body ? "POST" : "GET",
    headers: {
      Authorization: `Bearer ${key}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  // Notion allows about three requests a second; wait as long as it asks.
  if (response.status === 429 && attempt < 5) {
    const seconds = Number(response.headers.get("retry-after")) || 2 ** attempt;
    await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
    return notion(apiPath, body, attempt + 1);
  }
  if (!response.ok) throw new Error(`Notion ${apiPath}: HTTP ${response.status} ${await response.text()}`);
  return response.json();
}

/** Every page of a paginated Notion list. */
async function paginate(fetchPage) {
  const results = [];
  let cursor;
  do {
    const page = await fetchPage(cursor);
    results.push(...page.results);
    cursor = page.has_more ? page.next_cursor : undefined;
  } while (cursor);
  return results;
}

const queryDatabase = (id, sorts = [], filter) =>
  paginate((cursor) =>
    notion(`databases/${id}/query`, {
      page_size: 100,
      sorts,
      ...(filter && { filter }),
      ...(cursor && { start_cursor: cursor }),
    }),
  );

const listChildren = (id) =>
  paginate((cursor) =>
    notion(`blocks/${id}/children?page_size=100${cursor ? `&start_cursor=${cursor}` : ""}`),
  );

// --- property helpers -------------------------------------------------------

const plain = (property) =>
  (property?.title ?? property?.rich_text ?? []).map((part) => part.plain_text).join("") || null;
const relationIds = (property) => (property?.relation ?? []).map((relation) => relation.id);
const compactId = (id) => id.replaceAll("-", "");

// --- databases --------------------------------------------------------------

function toLink(row) {
  const p = row.properties;
  return {
    id: row.id,
    title: plain(p["Title"]),
    url: p["URL"].url ?? "",
    description: plain(p["Short Description"]) ?? "",
    iconSlug: plain(p["Icon"]) ?? "FaFile",
    categoryIds: relationIds(p["Categories"]),
    filterIds: p["Filters"].multi_select.map((option) => option.id),
  };
}

/**
 * `linksOrder` is the category's position on the links page as Notion sorts
 * it, which settles ties between equal "Links Order" values for good.
 */
function toCategory(row, linksPosition) {
  const p = row.properties;
  return {
    id: row.id,
    title: plain(p["Title"]),
    slug: plain(p["Slug"]),
    order: p["Order"]?.number ?? null,
    isLinksCategory: p["Is Links Category"]?.checkbox ?? false,
    linksOrder: linksPosition.get(row.id) ?? null,
    wikiPageId: relationIds(p["Wiki Page"])[0] ?? null,
    parentCategoryId: relationIds(p["Parent Category"])[0] ?? null,
  };
}

function toArticle(row) {
  const p = row.properties;
  return {
    id: row.id,
    slug: plain(p["Slug"]),
    title: plain(p["Title"]),
    description: plain(p["Description"]) ?? "",
    categoryIds: relationIds(p["Categories"]),
    featured: p["Featured"]?.checkbox ?? false,
    ...(plain(p["Link"]) && { link: plain(p["Link"]) }),
    createdAt: row.created_time,
    lastEditedAt: row.last_edited_time,
  };
}

function toCourse(row) {
  const p = row.properties;
  return { id: row.id, subject: plain(p["Subject"]), number: p["Number"].number, name: plain(p["Name"]) };
}

// --- page content -----------------------------------------------------------

const MEDIA_TYPES = new Set(["image", "video", "file", "pdf", "audio"]);

/** Download a Notion-hosted file and return its public path. */
async function saveFile(blockId, url) {
  const extension = (path.extname(new URL(url).pathname) || ".bin").toLowerCase();
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Download for block ${blockId}: HTTP ${response.status}`);
  let data = Buffer.from(await response.arrayBuffer());
  let name = `${compactId(blockId)}${extension}`;
  if (IMAGE_EXTENSIONS.has(extension)) {
    data = await sharp(data)
      .rotate() // Apply the photo's orientation before metadata is dropped.
      .resize({ width: IMAGE_WIDTH, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toBuffer();
    name = `${compactId(blockId)}.webp`;
  }
  await writeFile(path.join(FILES_DIR, name), data);
  return `/content/${name}`;
}

/**
 * A block reduced to what the renderer reads: id, type, has_children, the
 * type's payload, and its children inlined. Synced blocks carry their
 * source's children, so nothing points back into Notion.
 */
async function cleanBlock(block) {
  const { id, type, has_children } = block;
  const payload = structuredClone(block[type]);

  if (MEDIA_TYPES.has(type) && payload.type === "file") {
    payload.file = { url: await saveFile(id, payload.file.url) };
  }

  let childrenOf = has_children ? id : null;
  if (type === "synced_block" && payload.synced_from) {
    childrenOf = payload.synced_from.block_id;
    payload.synced_from = null;
  }
  if (type === "child_page" || type === "child_database") childrenOf = null;

  const children = childrenOf ? await cleanBlocks(await listChildren(childrenOf)) : [];
  return { id, type, has_children: children.length > 0, [type]: payload, ...(children.length && { children }) };
}

/** Clean blocks one at a time, to stay within Notion's rate limit. */
async function cleanBlocks(blocks) {
  const cleaned = [];
  for (const block of blocks) cleaned.push(await cleanBlock(block));
  return cleaned;
}

/** The pages a page mentions, as links the site can follow. */
function resolveMentions(blocks, hrefById) {
  const mentions = new Map();
  const visit = (block) => {
    for (const part of block[block.type]?.rich_text ?? []) {
      if (part.type !== "mention" || part.mention.type !== "page") continue;
      const id = compactId(part.mention.page.id);
      const target = hrefById.get(id);
      if (target) mentions.set(id, { id, title: part.plain_text, ...target });
    }
    block.children?.forEach(visit);
  };
  blocks.forEach(visit);
  return [...mentions.values()];
}

// --- main -------------------------------------------------------------------

async function writeJson(file, data) {
  await writeFile(path.join(CONTENT_DIR, file), JSON.stringify(data, null, 2) + "\n");
}

async function main() {
  // Start clean, so pages and files deleted in Notion disappear here too.
  await rm(path.join(CONTENT_DIR, "pages"), { recursive: true, force: true });
  await rm(FILES_DIR, { recursive: true, force: true });
  await mkdir(path.join(CONTENT_DIR, "pages"), { recursive: true });
  await mkdir(FILES_DIR, { recursive: true });

  const [linkRows, categoryRows, linkCategoryRows, wikiRows, courseRows] = await Promise.all([
    queryDatabase(DATABASES.links, [{ property: "Order", direction: "ascending" }]),
    queryDatabase(DATABASES.categories, [{ property: "Order", direction: "ascending" }]),
    queryDatabase(
      DATABASES.categories,
      [{ property: "Links Order", direction: "ascending" }],
      { property: "Is Links Category", checkbox: { equals: true } },
    ),
    queryDatabase(DATABASES.wiki),
    queryDatabase(DATABASES.courses),
  ]);

  const articles = wikiRows.map(toArticle).sort((a, b) => a.title.localeCompare(b.title));
  const courses = courseRows
    .map(toCourse)
    .filter((course) => course.subject && course.number != null)
    .sort((a, b) => a.subject.localeCompare(b.subject) || a.number - b.number);

  await writeJson("links.json", linkRows.map(toLink));
  const linksPosition = new Map(linkCategoryRows.map((row, position) => [row.id, position]));
  await writeJson("categories.json", categoryRows.map((row) => toCategory(row, linksPosition)));
  await writeJson("articles.json", articles);
  await writeJson("courses.json", courses);

  const hrefById = new Map([
    ...courses.map((c) => [compactId(c.id), { type: "course-link", href: `/${c.subject}${c.number}` }]),
    ...articles.map((a) => [compactId(a.id), { type: "wiki-link", href: `/wiki/${a.slug}` }]),
  ]);

  for (const article of articles) {
    const blocks = await cleanBlocks(await listChildren(article.id));
    await writeJson(`pages/${article.slug}.json`, { id: article.id, blocks, mentions: resolveMentions(blocks, hrefById) });
  }
  // Static imports, so every page ships with the server build (files read
  // from disk at runtime can be left out of a Vercel deployment).
  const index = [
    "// Generated by scripts/export-notion.mjs: one import per page in this folder.",
    ...articles.map((a, i) => `import page${i} from "./${a.slug}.json";`),
    "",
    "export const pages = [" + articles.map((_, i) => `page${i}`).join(", ") + "];",
    "",
  ];
  await writeFile(path.join(CONTENT_DIR, "pages", "index.ts"), index.join("\n"));

  const files = await readdir(FILES_DIR);
  console.log(
    `Exported ${linkRows.length} links, ${categoryRows.length} categories, ${articles.length} wiki pages, ` +
      `${courses.length} courses, and ${files.length} files.`,
  );
}

await main();
