import { Article } from "@/modules/content/article";
import { cn } from "@/utils/style";
import Link from "next/link";

interface WikiSimpleLinkProps {
  article: Article;
  showDescription?: boolean;
  className?: string;
}

export function WikiSimpleLink({ article, showDescription = false, className }: WikiSimpleLinkProps) {
  return (
    <Link href={`/wiki/${article.slug}`} className={cn("block", className)}>
      <span className="underline">{article.title}</span>
      {showDescription && <span className="text-muted-foreground">: {article.description}</span>}
    </Link>
  );
}

interface WikiSimpleLinksListProps {
  type: "list" | "grid";
  articles: Article[];
  showDescription?: boolean;
  className?: string;
}

export function WikiSimpleLinksList({ type, articles, showDescription = false, className }: WikiSimpleLinksListProps) {
  return (
    <div
      className={cn(
        { "space-y-1": type === "list", "grid grid-cols-2 md:grid-cols-3 gap-3": type === "grid" },
        className
      )}
    >
      {articles.map((article) => (
        <WikiSimpleLink key={article.slug} article={article} showDescription={showDescription} />
      ))}
    </div>
  );
}
