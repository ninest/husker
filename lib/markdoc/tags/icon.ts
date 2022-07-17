import { Tag } from "@markdoc/markdoc";

export const iconTag = {
  render: "Icon",
  children: ["inline"],
  attributes: {
    id: { type: String, required: true },
    // Most icons are with text, so have them inline by default
    className: { type: String, default: "inline" },
  },
};
