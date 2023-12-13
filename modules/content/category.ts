import { queryNotionDatabase } from "@/modules/notion/apis";
import { notionConstants } from "@/modules/notion/constants";
import { QueryDatabaseResponse, PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import invariant from "tiny-invariant";

export type Category = {
  id: string;
  title: string;
  slug: string;
};

export async function getLinkCategories() {
  const response = await queryNotionDatabase(notionConstants.CATEGORIES_DATABASE_ID, {
    filter: { property: "Is Links Category", checkbox: { equals: true } },
    sorts: [{ property: "Links Order", direction: "ascending" }],
  });

  return await transformNotionResponseToCategories(response);
}

export async function getWikiCategories() {
  const response = await queryNotionDatabase(notionConstants.CATEGORIES_DATABASE_ID, {
    sorts: [{ property: "Order", direction: "ascending" }],
  });

  const categories = await transformNotionResponseToCategories(response);
  return categories;
}

async function transformNotionResponseToCategories(response: QueryDatabaseResponse) {
  const categories: Category[] = [];
  const results = response.results.filter((result): result is PageObjectResponse => "properties" in result);
  for await (const row of results) {
    const { properties } = row;

    const id = row.id;
    invariant(properties["Title"].type === "title", "Title property should be type title");
    const title = properties["Title"].title[0].plain_text;

    invariant(properties["Slug"].type === "rich_text", "Slug property should be rich text");
    const slug = properties["Slug"].rich_text[0].plain_text;

    // let article: undefined | WikiArticle = undefined;
    // invariant(
    //   properties["Wiki Page"].type === "relation",
    //   "Expected Wiki Page property to be a relation to categories@ts"
    // );
    // if (properties["Wiki Page"].relation.length > 0) {
    //   const wikiArticleId = properties["Wiki Page"].relation[0].id;
    //   article = await getWikiArticle(wikiArticleId);
    // }

    categories.push({ id, slug, title /* wikiArticle: article */ });
  }

  return categories;
}
