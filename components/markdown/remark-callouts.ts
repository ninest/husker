// GitHub-style alerts: a quote starting with [!NOTE], [!TIP], [!IMPORTANT],
// [!WARNING], or [!CAUTION] becomes an <aside data-callout="note">, which
// MarkdownContent renders as a Callout.

type Node = {
  type: string;
  value?: string;
  children?: Node[];
  data?: { hName?: string; hProperties?: Record<string, string> };
};

const MARKER = /^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\][ \t]*(\r?\n)?/i;

export function remarkCallouts() {
  return (tree: Node) => visit(tree);
}

function visit(node: Node) {
  if (node.type === "blockquote") convert(node);
  node.children?.forEach(visit);
}

function convert(quote: Node) {
  const paragraph = quote.children?.[0];
  if (paragraph?.type !== "paragraph") return;
  const first = paragraph.children?.[0];
  const match = first?.type === "text" ? first.value!.match(MARKER) : null;
  if (!first || !match) return;

  first.value = first.value!.slice(match[0].length);
  if (!first.value) paragraph.children!.shift();
  // The marker may sit on its own line, followed by a line break.
  if (paragraph.children![0]?.type === "break") paragraph.children!.shift();
  if (paragraph.children!.length === 0) quote.children!.shift();

  quote.data = { hName: "aside", hProperties: { dataCallout: match[1].toLowerCase() } };
}
