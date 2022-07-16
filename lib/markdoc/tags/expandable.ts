import { Tag } from "@markdoc/markdoc";

export const expandableTag = {
  render: "Expandable",
  children: ["paragraph", "tag", "list", "title"],
  attributes: {
    icon: { type: String },
    title: { type: String, required: true },
    open: { type: Boolean, default: false },
    containsProse: { type: Boolean, default: false },
    variant: { type: String },
  },
  transform(node: any, config: any) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);

    return new Tag(this.render, { ...attributes }, children);
  },
};
