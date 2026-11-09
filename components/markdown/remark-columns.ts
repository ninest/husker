// Columns, written with remark-directive's container syntax:
//
//   ::::columns
//   :::column
//   ### Double
//
//   ![](/content/a.webp)
//   :::
//   :::column
//   ...
//   :::
//   ::::
//
// become <div data-columns> and <div data-column>. remark-directive also reads
// text like "3:30pm" or "Note:Students" as a directive, so every other
// directive is put back as the text it was written as.

type Point = { offset?: number };
type Node = {
  type: string;
  name?: string;
  value?: string;
  children?: Node[];
  position?: { start: Point; end: Point };
  data?: { hName?: string; hProperties?: Record<string, string> };
};

const CONTAINERS: Record<string, string> = { columns: "dataColumns", column: "dataColumn" };

export function remarkColumns() {
  return (tree: Node, file: { value: unknown }) => visit(tree, String(file.value));
}

function visit(node: Node, source: string) {
  node.children = node.children?.map((child) => {
    if (child.type === "textDirective" || child.type === "leafDirective") {
      const { start, end } = child.position ?? { start: {}, end: {} };
      const text: Node = { type: "text", value: source.slice(start.offset ?? 0, end.offset ?? 0) };
      return child.type === "leafDirective" ? { type: "paragraph", children: [text] } : text;
    }
    if (child.type === "containerDirective") {
      const property = CONTAINERS[child.name ?? ""];
      child.data = { hName: "div", hProperties: property ? { [property]: "" } : {} };
    }
    visit(child, source);
    return child;
  });
}
