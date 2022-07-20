import { Tag } from "@markdoc/markdoc";

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

    return new Tag(this.render, { ...attributes, hash: true }, children);
  },
};
