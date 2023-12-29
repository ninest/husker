import { Spacer } from "@/components/spacer";
import { Article } from "@/modules/content/article";
import { formatDate } from "@/utils/date";
import { cn } from "@/utils/style";
import Link from "next/link";

type WikiBlockLinkProps = {
  article: Article;
  className?: string;
};

export function WikiBlockLink({ article, className }: WikiBlockLinkProps) {
  return (
    <Link
      href={`/wiki/${article.slug}`}
      className={cn("flex flex-col justify-between border rounded-md p-2", className)}
    >
      <div>
        <b className="text-sm">{article.title}</b>
        <Spacer className="h-1" />
        <p className="text-sm text-muted-foreground line-clamp-2">{article.description}</p>
      </div>

      {article.metadata?.createdAt && (
        <div>
          <Spacer className="h-1" />
          <p className="text-sm text-muted-foreground">{formatDate(article.metadata?.createdAt)}</p>
        </div>
      )}
    </Link>
  );
}
