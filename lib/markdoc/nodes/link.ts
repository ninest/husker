import { Tag } from "@markdoc/markdoc";

export const linkNode = {
  render: "SmartLink",
  children: ["text"],
  attributes: {
    href: { type: String, required: true },
  },
  transform(node: any, config: any) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);

    return new Tag(this.render, { ...attributes, underline: true }, children);
  },
};
