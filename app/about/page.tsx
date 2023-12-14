import { ContentPageLayout } from "@/components/content-page-layout";
import { FullNotionPageContent } from "@/components/notion/full-notion-page-content";
import { Spacer } from "@/components/spacer";
import { Title } from "@/components/typography/title";

interface SearchParams {
  from?: "wiki";
}

export default async function AboutPage({ searchParams }: { searchParams: SearchParams }) {
  const backButton = searchParams.from === "wiki" ? { text: "Wiki", href: "/wiki" } : { text: "Home", href: "/" };
  const aboutPageId = "17ecc6fdea344c7ab00c52c33f54b3f0";

  // const comments = await retrieveComments(aboutPageId);
  return (
    <ContentPageLayout title="Husker" showMobileNav backButton={backButton} contributeInfo={{ pageTitle: "About" }}>
      <>
        <Title level={1}>About</Title>
        <Spacer className="h-4" />
        <FullNotionPageContent pageId={aboutPageId} />
      </>
    </ContentPageLayout>
  );
}
