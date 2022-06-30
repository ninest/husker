import { showToast } from "@/components/Toast";

export const favoriteAddedToast = () => {
  showToast({ content: "A favorite has been added!" });
};

export const favoriteRemovedToast = () => {
  showToast({ content: "A favorite has been removed" });
};
