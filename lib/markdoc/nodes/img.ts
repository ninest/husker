import { Tag } from "@markdoc/markdoc";
import sizeOf from "image-size";

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

    try {
      const result = sizeOf(`public/${attributes.src}`);
      const { width, height } = result;
      return new Tag(this.render, { ...attributes, width, height }, children);
    } catch {
      return new Tag(this.render, attributes, children);
    }
  },
};
