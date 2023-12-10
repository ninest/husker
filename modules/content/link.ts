import { queryNotionDatabase } from "@/modules/notion/apis";
import { notionConstants } from "@/modules/notion/constants";
import { IconSlug } from "@/utils/icon";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import invariant from "tiny-invariant";

export type HuskerLink = {
  id: string;
  iconSlug: IconSlug | string;
  title: string;
  categoryIds: string[];
  description: string;
  url: string;
  filterIds: string[];
};

export const huskerLinkFilterMap = {
  graduateOnly: "ukCx",
  undergraduateOnly: "nT[|",
};

export async function getLinks() {
  const response = await queryNotionDatabase(notionConstants.LINKS_DATABASE_ID, {
    sorts: [{ property: "Order", direction: "ascending" }],
  });
  const links: HuskerLink[] = [];

  const rows = response.results.filter((result): result is PageObjectResponse => "properties" in result);

  // TODO: move to helper function
  rows.forEach((row) => {
    const properties = row.properties;
    const id = row.id;

    invariant(properties["Title"].type === "title");
    const title = properties["Title"].title[0].plain_text;

    invariant(properties["Categories"].type === "relation");
    const categoryIds = properties["Categories"].relation.map((relation) => relation.id);

    invariant(properties["Filters"].type === "multi_select");
    const filterIds = properties["Filters"].multi_select.map((multi_select) => multi_select.id);

    invariant(properties["URL"].type === "url");
    const url = properties["URL"].url ?? "";

    invariant(properties["Short Description"].type === "rich_text");
    const description = properties["Short Description"].rich_text[0].plain_text;

    // let icon = undefined;
    // if (row.icon) {
    //   if (row.icon.type === "external") icon = row.icon;
    // }
    invariant(properties["Icon"].type === "rich_text");
    const iconSlug = properties["Icon"].rich_text.length > 0 ? properties["Icon"].rich_text[0].plain_text : "FaFile";

    links.push({ id, iconSlug, title, url, description, categoryIds, filterIds });
  });

  return links;
}
