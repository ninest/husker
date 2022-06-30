import { showToast } from "@/components/Toast";

export const favoriteAddedToast = () => {
  showToast({ text: "A favorite has been added!", type: "error" });
};

export const favoriteRemovedToast = () => {
  showToast({ text: "A favorite has been removed" });
};
