import { createOgImageUrl } from "@/app/api/og/og-functions";
import { ContentPageLayout } from "@/components/content-page-layout";
import { Loading } from "@/components/loading";
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

export async function generateMetadata({ params }: WikiPageProps) {
  const page = await getArticleBySlug(params.slug);
  return {
    title: "Wiki",
    openGraph: {
      images: [{ url: createOgImageUrl({ title: page.title }) }],
    },
  };
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
      <Suspense
        fallback={
          <>
            <Loading heights={[3, { type: "spacer", height: 1 }, 1, 1]} />
          </>
        }
      >
        <Title level={1}>{page.title}</Title>
        <Spacer className="h-4" />
        {/* @ts-ignore */}
        <FullNotionPageContent pageId={page.id} />
      </Suspense>
    </ContentPageLayout>
  );
}
