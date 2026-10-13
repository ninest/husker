// Wiki page content from content/pages/*.json (exported from Notion by
// scripts/export-notion.mjs). Blocks keep Notion's shape, with each block's
// children inlined under `children`, so the renderer works unchanged.
import { pages } from "@/content/pages";
import type { PageMention } from "@/modules/blocks/mentions";
import type { BlockObjectResponse, ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints";

type ContentBlock = BlockObjectResponse & { children?: ContentBlock[] };
type ContentPage = { id: string; blocks: ContentBlock[]; mentions: PageMention[] };

// Every block, and every page's top-level blocks, by id.
const blocksById = new Map<string, ContentBlock>();
const childrenById = new Map<string, ContentBlock[]>();
const mentionsByPageId = new Map<string, PageMention[]>();

function index(blocks: ContentBlock[]) {
  for (const block of blocks) {
    blocksById.set(block.id, block);
    childrenById.set(block.id, block.children ?? []);
    index(block.children ?? []);
  }
}

for (const page of pages as unknown as ContentPage[]) {
  childrenById.set(page.id, page.blocks);
  mentionsByPageId.set(page.id, page.mentions);
  index(page.blocks);
}

/** The child blocks of a page or block, in Notion's list-response shape. */
export async function getBlocksChildrenList(blockId: string): Promise<ListBlockChildrenResponse> {
  return {
    object: "list",
    type: "block",
    block: {},
    results: childrenById.get(blockId) ?? [],
    next_cursor: null,
    has_more: false,
  };
}

/** One block by id. */
export async function getBlock(blockId: string) {
  const block = blocksById.get(blockId);
  if (!block) throw new Error(`No block ${blockId} in content/pages`);
  return block;
}

/** The pages a page links to by mention, resolved at export time. */
export function getPageMentions(pageId: string): PageMention[] {
  return mentionsByPageId.get(pageId) ?? [];
}
