import { Tag } from "@markdoc/markdoc";

export const imageNode = {
  render: "MarkdocImage",
  attributes: {
    src: { type: String, required: true },
    alt: { type: String },
    width: { type: Number, required: false },
    height: { type: Number, required: false },
  },
  transform(node: any, config: any) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);

    console.log(attributes)

    return new Tag(this.render, { ...attributes }, children);
  },
};
