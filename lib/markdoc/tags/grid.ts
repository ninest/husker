export const gridTag = {
  render: "Grid",
  children: ["paragraph", "tag", "list", "title"],
  attributes: {
    className: { type: String, required: false },
    containsProse: { type: Boolean, default: false },
  },
};
