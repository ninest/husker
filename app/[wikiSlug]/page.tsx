import { createOgImageUrl } from "@/app/api/og/og-functions";
import { ContentPageLayout } from "@/components/content-page-layout";
import { FullNotionPageContent } from "@/components/notion/full-notion-page-content";
import { Spacer } from "@/components/spacer";
import { Title } from "@/components/typography/title";
import { getArticleBySlug } from "@/modules/content/article";
import { redirect } from "next/navigation";

export const revalidate = 60;

interface WikiTopLevelPageProps {
  params: { wikiSlug: string };
}

export async function generateMetadata({ params }: WikiTopLevelPageProps) {
  const page = await getArticleBySlug(params.wikiSlug);
  return {
    title: page.title,
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

export default async function AboutPage({ params, searchParams }: { params: Params; searchParams: SearchParams }) {
  const backButton = searchParams.from === "wiki" ? { text: "Wiki", href: "/wiki" } : { text: "Home", href: "/" };

  const article = await getArticleBySlug(params.wikiSlug);
  console.log(article.link);
  if (!article.link && article.link !== params.wikiSlug) {
    return redirect(`/wiki/${article.slug}`);
  }

  return (
    <ContentPageLayout title="Husker" showMobileNav backButton={backButton} contributeInfo={{ pageTitle: "About" }}>
      <>
        <Title level={1}>About</Title>
        <Spacer className="h-4" />
        {/* @ts-ignore */}
        <FullNotionPageContent pageId={article.id} />
      </>
    </ContentPageLayout>
  );
}
