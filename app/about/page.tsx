import { FullNotionPageContent } from "@/components/notion/full-notion-page-content";
import { ContentPageLayout } from "@/components/content-page-layout";
import { Spacer } from "@/components/spacer";
import { Title } from "@/components/title";
import { Button } from "@/components/ui/button";
import { getBlock, getBlocksChildrenList, retrieveComments } from "@/modules/notion/apis";
import { LuFileEdit } from "react-icons/lu";

export default async function AboutPage() {
  const aboutPageId = "17ecc6fdea344c7ab00c52c33f54b3f0";

  // const comments = await retrieveComments(aboutPageId);
  return (
    <ContentPageLayout showMobileNav backButton={{ text: "Home", href: "/" }} contributeInfo={{ pageTitle: "About" }}>
      <>
        <Title level={1}>About</Title>
        <Spacer className="h-4" />
        <FullNotionPageContent pageId={aboutPageId} />
      </>
    </ContentPageLayout>
  );
}
