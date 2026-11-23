import articles from "@/content/articles.json";

export interface Article {
  id: string;
  slug: string;
  title: string;
  description: string;
  categoryIds: string[];
  link?: string;
  featured: boolean;
  metadata?: ArticleMetadata;
}

interface ArticleMetadata {
  createdAt: Date;
  lastEditedAt: Date;
}

function toArticle({ createdAt, lastEditedAt, ...article }: (typeof articles)[number]): Article {
  return { ...article, metadata: { createdAt: new Date(createdAt), lastEditedAt: new Date(lastEditedAt) } };
}

/** All wiki articles, sorted by title (content/articles.json is kept sorted). */
export async function getArticles() {
  return articles.map(toArticle);
}

export async function getArticleBySlug(slug: string) {
  const article = articles.find((article) => article.slug === slug);
  if (!article) throw new Error(`No wiki article with slug "${slug}"`);
  return toArticle(article);
}

export async function getArticleById(id: string) {
  const article = articles.find((article) => article.id === id);
  if (!article) throw new Error(`No wiki article with id "${id}"`);
  return toArticle(article);
}
