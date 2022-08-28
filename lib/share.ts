import { showToast } from "@/components/util/Toast";

interface ShareLinkParams {
  text: string;
  url: string;
}
export const shareLink = async (params: ShareLinkParams) => {
  try {
    await navigator.share(params);
  } catch (e) {
    copyLink(params.url);
  }
};

export const copyLink = (url: string) => {
  navigator.clipboard.writeText(url);
  showToast({ text: "Link copied!" });
};
