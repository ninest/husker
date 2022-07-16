import { Tag } from "@markdoc/markdoc";

export const iconTag = {
  render: "Icon",
  children: ["inline"],
  attributes: {
    id: { type: String, required: true },
    // Most icons are with text, so have them inline by default
    className: { type: String, default: "inline" },
  },
  transform(node: any, config: any) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);

    return new Tag(this.render, { ...attributes }, children);
  },
};
