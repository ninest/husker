export const blockTag = {
  render: "Block",
  children: ["paragraph", "tag", "list", "title", "heading"],
  attributes: {
    title: { type: String, required: true },
    children: { type: String, required: false },
    href: { type: String, default: false },
  },
};
