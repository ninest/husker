export const iframeTag = {
  render: "IFrame",
  attributes: {
    src: { type: String, required: true },
    border: { type: Boolean, required: false, default: false },
  },
};
