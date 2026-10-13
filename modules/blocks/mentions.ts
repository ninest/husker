import { getPageMentions } from "@/modules/content/blocks";

export type PageMention = {
  id: string;
  type: "course-link" | "wiki-link";
  title: string;
  href: string;
};

/** Pages mentioned on a wiki page, as links (resolved by the Notion export). */
export async function getNotionPageMentions(pageId: string) {
  return getPageMentions(pageId);
}
