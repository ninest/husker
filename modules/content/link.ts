import links from "@/content/links.json";
import { IconSlug } from "@/utils/icon";

export type HuskerLink = {
  id: string;
  iconSlug: IconSlug | string;
  title: string;
  categoryIds: string[];
  description: string;
  url: string;
  filterIds: string[];
  isMinor: boolean;
};

export const huskerLinkFilterMap = {
  graduateOnly: "ukCx",
  undergraduateOnly: "nT[|",
};

/** All links, in display order (content/links.json is kept sorted). */
export async function getLinks(): Promise<HuskerLink[]> {
  return links;
}
