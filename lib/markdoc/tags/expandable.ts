import { Tag } from "@markdoc/markdoc";

export const expandableTag = {
  render: "Expandable",
  children: ["paragraph", "tag", "list", "title", "heading"],
  attributes: {
    icon: { type: String },
    title: { type: String, required: true },
    open: { type: Boolean, default: false },
    containsProse: { type: Boolean, default: false },
    variant: { type: String },
  },
};
