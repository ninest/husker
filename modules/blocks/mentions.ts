import { getBlocksChildrenList, retrieveNotionPage } from "@/modules/notion/apis";
import {
  BlockObjectResponse,
  PartialBlockObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import invariant from "tiny-invariant";

export type PageMention = {
  id: string;
  type: "course-link" | "wiki-link";
  title: string;
  href: string;
};

export async function getNotionPageMentions(pageId: string) {
  const pageMentions: PageMention[] = [];

  const blocks = await getBlocksChildrenList(pageId);
  const mentions = await getMentionsFromBlocks(blocks.results);
  mentions.forEach((m) => pageMentions.push(m));

  return pageMentions;
}

async function getMentionsFromBlocks(blocks: (PartialBlockObjectResponse | BlockObjectResponse)[]) {
  const pageMentions: PageMention[] = [];
  for await (const block of blocks) {
    // TODO: improve this code
    if ("paragraph" in block || "bulleted_list_item" in block) {
      let parts: null | RichTextItemResponse[] = [];
      if ("paragraph" in block) {
        parts = block.paragraph.rich_text;
      } else if ("bulleted_list_item" in block) {
        parts = block.bulleted_list_item.rich_text;
        // More parts in block children
        if (block.has_children) {
          const childBlocks = await getBlocksChildrenList(block.id);
          childBlocks.results.forEach((childBlock) => {
            if ("bulleted_list_item" in childBlock) {
              parts?.push(...childBlock.bulleted_list_item.rich_text);
            }
          });
        }
      }
      for await (const part of parts!) {
        const mentions = await getMentionsFromPart(part);
        pageMentions.push(...mentions);
      }
    } else if ("synced_block" in block) {
      let blockId: string;
      if (block.synced_block.synced_from?.block_id) {
        blockId = block.synced_block.synced_from?.block_id;
      } else {
        blockId = block.id;
      }

      const blocks = await getBlocksChildrenList(blockId);
      const mentions = await getMentionsFromBlocks(blocks.results);
      pageMentions.push(...mentions);
    }
  }
  return pageMentions;
}

async function getMentionsFromPart(part: RichTextItemResponse) {
  const pageMentions: PageMention[] = [];
  if (part.type === "mention" && part.href !== null) {
    const mentionedPageId = part.href.split("notion.so/")[1];
    const mentionedPageTitle = part.plain_text;

    const fullNotionPage = await retrieveNotionPage(mentionedPageId);

    if (
      "properties" in fullNotionPage &&
      "Subject" in fullNotionPage.properties &&
      "Number" in fullNotionPage.properties
    ) {
      invariant(fullNotionPage.properties["Subject"].type === "rich_text");
      const subject = fullNotionPage.properties["Subject"].rich_text[0].plain_text;

      invariant(fullNotionPage.properties["Number"].type === "number");
      const number = fullNotionPage.properties["Number"].number;
      pageMentions.push({
        id: mentionedPageId,
        type: "course-link",
        title: mentionedPageTitle,
        href: `/${subject}${number}`,
      });
    } else if (
      "properties" in fullNotionPage &&
      "Slug" in fullNotionPage.properties &&
      "Categories" in fullNotionPage.properties &&
      "Description" in fullNotionPage.properties
    ) {
      // @ts-ignore
      const slug = fullNotionPage.properties["Slug"].rich_text[0].plain_text;
      pageMentions.push({
        id: mentionedPageId,
        type: "wiki-link",
        title: mentionedPageTitle,
        href: `/wiki/${slug}`,
      });
    }
  }
  return pageMentions;
}
