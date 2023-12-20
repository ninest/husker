import { queryNotionDatabase, retrieveNotionPage } from "@/modules/notion/apis";
import { notionConstants } from "@/modules/notion/constants";
import { GetPageResponse, PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import invariant from "tiny-invariant";

export interface Article {
  id: string;
  slug: string;
  title: string;
  description: string;
  categoryIds: string;
  link?: string;
  featured: boolean;
  metadata?: ArticleMetadata;
}

interface ArticleMetadata {
  createdAt: Date;
  lastEditedAt: Date;
}

export async function getArticles() {
  const response = await queryNotionDatabase(notionConstants.WIKI_DATABASE_ID);

  const rows = response.results.filter((result): result is PageObjectResponse => "properties" in result);

  const articles = rows.map(transformNotionPageToArticle);

  articles.sort((a, b) => a.title.localeCompare(b.title));

  return articles;
}

export async function getArticleBySlug(slug: string) {
  const response = await queryNotionDatabase(notionConstants.WIKI_DATABASE_ID, {
    filter: { property: "Slug", rich_text: { equals: slug } },
  });
  const page = response.results[0];

  return transformNotionPageToArticle(page as PageObjectResponse);
}

export async function getArticleById(id: string) {
  const response = await retrieveNotionPage(id);
  return transformNotionPageToArticle(response);
}

function transformNotionPageToArticle(page: GetPageResponse) {
  if (!("properties" in page)) throw new Error(`In properties in page provided for transform`);

  const metadata: ArticleMetadata = {
    createdAt: new Date(page.created_time),
    lastEditedAt: new Date(page.last_edited_time),
  };

  // TODO: add all invariants
  invariant(page.properties["Slug"].type === "rich_text");

  const article: Article = {
    id: page.id,
    slug: page.properties["Slug"].rich_text[0].plain_text,
    // @ts-ignore
    title: page.properties["Title"].title[0].plain_text,
    // @ts-ignore
    categoryIds: page.properties["Categories"].relation.map((relation) => relation.id),
    // @ts-ignore
    description: page.properties["Description"].rich_text[0].plain_text,
    // @ts-ignore
    featured: !!page.properties["Featured"] ? page.properties["Featured"].checkbox : false,
    metadata,
  };

  if (page.properties["Link"]) {
    // @ts-ignore
    if (page.properties["Link"].rich_text.length > 0) {
      // @ts-ignore
      article.link = page.properties["Link"].rich_text[0].plain_text;
    }
  }

  return article;
}
