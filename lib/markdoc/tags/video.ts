import { string } from "zod";

export const videoTag = {
  render: "Video",
  attributes: {
    src: { type: String, required: true },
    type: { type: String, required: false },
  },
};
