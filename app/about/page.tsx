import { FullNotionPageContent } from "@/components/notion/full-notion-page-content";
import { PageLayout } from "@/components/page-layout";
import { Spacer } from "@/components/spacer";
import { Title } from "@/components/title";
import { getBlock, getBlocksChildrenList, retrieveComments } from "@/modules/notion/apis";

export default async function AboutPage() {
  const aboutPageId = "17ecc6fdea344c7ab00c52c33f54b3f0";

  // const comments = await retrieveComments(aboutPageId);
  return (
    <PageLayout showMobileNav desktopBackButton={{ text: "Home", href: "/" }}>
      <Title level={1}>About</Title>
      <Spacer className="h-4" />
      <FullNotionPageContent pageId={aboutPageId} />
    </PageLayout>
  );
}
