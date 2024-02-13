import { NotionContent } from "@/components/notion/notion-content";
import { getNotionPageMentions } from "@/modules/blocks/mentions";
import { getBlocksChildrenList } from "@/modules/notion/apis";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

interface FullNotionPageContentProps {
  pageId: string;
}

export async function FullNotionPageContent({ pageId }: FullNotionPageContentProps) {
  const [blocksResponse, mentions] = await Promise.all([getBlocksChildrenList(pageId), getNotionPageMentions(pageId)]);
  const blocks = blocksResponse.results as BlockObjectResponse[];

  return (
    <>
      {/* @ts-ignore */}
      <NotionContent blocks={blocks} mentions={mentions} />
    </>
  );
}
