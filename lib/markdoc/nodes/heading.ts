import { Title } from "@/components/Title";
import { Tag } from "@markdoc/markdoc";

const generateId = (children: any, attributes: any) => {
  if (attributes.id && typeof attributes.id === "string") {
    return attributes.id;
  }

  return children
    .filter((child: any) => typeof child === "string")
    .join(" ")
    .replace(/[?]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
};

export const headingNode = {
  render: "Title",
  children: ["inline"],
  attributes: {
    level: { type: Number, required: true, default: 2 },
    className: { type: String },
  },
  transform(node: any, config: any) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);

    // const id = generateID(children, attributes);

    return new Tag(this.render, { ...attributes, hash: true }, children);
    // return new Tag(`h${node.attributes["level"]}`, { ...attributes }, children);
  },
};
