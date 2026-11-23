import { createOgImageUrl } from "@/app/api/og/og-functions";
import { ContentPageLayout } from "@/components/content-page-layout";
import { Loading } from "@/components/loading";
import { MarkdownContent } from "@/components/markdown/markdown-content";
import { Spacer } from "@/components/spacer";
import { Title } from "@/components/typography/title";
import { getArticleBySlug } from "@/modules/content/article";
import { getPageMarkdown } from "@/modules/content/page";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export const revalidate = 60;

export interface WikiPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string>>;
}

export async function generateMetadata({ params }: WikiPageProps): Promise<Metadata> {
  const page = await getArticleBySlug((await params).slug);
  return {
    title: page.title,
    description: page.description,
    openGraph: {
      images: [{ url: createOgImageUrl({ title: page.title }) }],
    },
  };
}

export default async function WikiPage(props: WikiPageProps) {
  const [{ slug }, searchParams] = await Promise.all([props.params, props.searchParams]);
  const page = await getArticleBySlug(slug);
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
        <MarkdownContent markdown={(await getPageMarkdown(page.slug)) ?? ""} />
      </Suspense>
    </ContentPageLayout>
  );
}
