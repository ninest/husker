import { createOgImageUrl } from "@/app/api/og/og-functions";
import { ContentPageLayout } from "@/components/content-page-layout";
import { MarkdownContent } from "@/components/markdown/markdown-content";
import { Spacer } from "@/components/spacer";
import { Title } from "@/components/typography/title";
import { getArticleBySlug } from "@/modules/content/article";
import { getPageMarkdown } from "@/modules/content/page";
import { redirect } from "next/navigation";

export const revalidate = 60;

interface WikiTopLevelPageProps {
  params: Promise<{ wikiSlug: string }>;
}

export async function generateMetadata({ params }: WikiTopLevelPageProps) {
  const page = await getArticleBySlug((await params).wikiSlug);
  return {
    title: page.title,
    description: page.description,
    openGraph: {
      images: [{ url: createOgImageUrl({ title: page.title }) }],
    },
  };
}

interface SearchParams {
  from?: "wiki";
}

interface Params {
  wikiSlug: string;
}

export default async function AboutPage(props: { params: Promise<Params>; searchParams: Promise<SearchParams> }) {
  const [params, searchParams] = await Promise.all([props.params, props.searchParams]);
  const backButton = searchParams.from === "wiki" ? { text: "Wiki", href: "/wiki" } : { text: "Home", href: "/" };

  const article = await getArticleBySlug(params.wikiSlug);
  if (!article.link && article.link !== params.wikiSlug) {
    return redirect(`/wiki/${article.slug}`);
  }

  return (
    <ContentPageLayout title="Husker" showMobileNav backButton={backButton} contributeInfo={{ pageTitle: "About" }}>
      <>
        <Title level={1}>{article.title}</Title>
        <Spacer className="h-4" />
        <MarkdownContent markdown={(await getPageMarkdown(article.slug)) ?? ""} />
      </>
    </ContentPageLayout>
  );
}
