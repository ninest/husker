import { Tag } from "@markdoc/markdoc";

export const divTag = {
  render: "MarkdocDiv",
  children: ["paragraph", "tag", "list", "title"],
  attributes: {
    className: { type: String, required: false },
  },
};
