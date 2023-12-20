import { ContentPageLayout } from "@/components/content-page-layout";
import { FullNotionPageContent } from "@/components/notion/full-notion-page-content";
import { Spacer } from "@/components/spacer";
import { Title } from "@/components/typography/title";
import { getArticleBySlug } from "@/modules/content/article";
import { redirect } from "next/navigation";
import { Suspense } from "react";

interface WikiPageProps {
  params: { slug: string };
  searchParams: Record<string, string>;
}
export default async function WikiPage({ params, searchParams }: WikiPageProps) {
  const page = await getArticleBySlug(params.slug);
  if (page.link) return redirect(`/${page.link}?from=wiki`);

  return (
    <ContentPageLayout
      title="Husker"
      backButton={{
        text: "Wiki",

        href: `/wiki?${new URLSearchParams(searchParams).toString()}`,
      }}
      contributeInfo={{ pageTitle: page.title }}
    >
      <Suspense fallback={<>Loading ...</>}>
        <Title level={1}>{page.title}</Title>
        <Spacer className="h-4" />
        <FullNotionPageContent pageId={page.id} />
      </Suspense>
    </ContentPageLayout>
  );
}
