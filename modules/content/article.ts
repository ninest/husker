import { queryNotionDatabase } from "@/modules/notion/apis";
import { notionConstants } from "@/modules/notion/constants";
import { GetPageResponse, PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export interface Article {
  id: string;
  slug: string;
  title: string;
  description: string;
  categoryIds: string;
  metadata?: ArticleMetadata;
}

interface ArticleMetadata {
  createdAt: Date;
  lastEditedAt: Date;
}

export async function getArticles() {
  const response = await queryNotionDatabase(notionConstants.WIKI_DATABASE_ID);
  const articles: Article[] = [];

  const rows = response.results.filter((result): result is PageObjectResponse => "properties" in result);

  rows.forEach((row) => {
    // @ts-ignore
    const slug = row.properties["Slug"].rich_text[0].plain_text;
    // @ts-ignore
    const title = row.properties["Title"].title[0].plain_text;
    // @ts-ignore
    const categoryIds = row.properties["Categories"].relation.map((relation) => relation.id);
    // @ts-ignore
    const description = row.properties["Description"].rich_text[0].plain_text;
    articles.push({ id: row.id, slug, title, categoryIds, description });
  });

  articles.sort((a, b) => a.title.localeCompare(b.title));

  return articles;
}

function transformNotionPageToArticle(page: GetPageResponse) {
  if (!("properties" in page)) throw new Error(`In properties in page provided for transform`);

  const metadata: ArticleMetadata = {
    createdAt: new Date(page.created_time),
    lastEditedAt: new Date(page.last_edited_time),
  };

  const article: Article = {
    id: page.id,
    // @ts-ignore
    slug: page.properties["Slug"].rich_text[0].plain_text,
    // @ts-ignore
    title: page.properties["Title"].title[0].plain_text,
    // @ts-ignore
    categoryIds: page.properties["Categories"].relation.map((relation) => relation.id),
    // @ts-ignore
    description: page.properties["Description"].rich_text[0].plain_text,
    metadata,
  };

  return article;
}
