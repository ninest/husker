import { Blockquote } from "@/components/typography/blockquote";
import { FaFile } from "react-icons/fa6";
import { Callout } from "@/components/callout";
import { Loading } from "@/components/loading";
import { Title } from "@/components/typography/title";
import { PageMention } from "@/modules/blocks/mentions";
import { getBlocksChildrenList, getBlock } from "@/modules/notion/apis";
import { cn } from "@/utils/style";
import {
  BlockObjectResponse,
  ListBlockChildrenResponse,
  TextRichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { ComponentProps, Suspense } from "react";
import { NotionText } from "@/components/notion/notion-text";

interface NotionContentProps {
  blocks: BlockObjectResponse[];
  mentions: PageMention[];
}

export async function NotionContent({ blocks, mentions }: NotionContentProps) {
  if (!blocks) return <></>;

  return (
    <article className="leading-relaxed">
      {blocks.map((block, i) => {
        const isListItem = block.type === "bulleted_list_item" || block.type === "numbered_list_item";
        const isTitle = block.type === "heading_1" || block.type === "heading_2" || block.type === "heading_3";
        const noSpaceBelow =
          (block.type === "bulleted_list_item" && blocks[i + 1]?.type === "bulleted_list_item") ||
          (block.type === "numbered_list_item" && blocks[i + 1]?.type === "numbered_list_item");

        const notionBlock = (
          <Suspense fallback={<Loading heights={[4]} />}>
            {/* @ts-ignore */}
            <NotionBlock block={block} mentions={mentions} />
          </Suspense>
        );

        return (
          <div key={block.id} className={cn({ "mb-4": !noSpaceBelow && !isTitle, "mb-2": isTitle })}>
            {isListItem ? <ul className="list-disc list-outside ml-6">{notionBlock}</ul> : notionBlock}
          </div>
        );
      })}
    </article>
  );
}

export async function NotionBlock({ block, mentions }: { block: BlockObjectResponse; mentions: PageMention[] }) {
  const { type, id } = block;
  // @ts-ignore
  const value = block[type];

  const notionText = <NotionText text={value} mentions={mentions} />;

  switch (type) {
    case "paragraph": {
      return <p>{notionText}</p>;
    }
    case "heading_1":
    case "heading_2": {
      return <Title level={2}>{notionText}</Title>;
    }
    case "heading_3": {
      return <Title level={3}>{notionText}</Title>;
    }
    case "bulleted_list_item":
    case "numbered_list_item": {
      let children: null | ListBlockChildrenResponse = null;
      if (block.has_children) {
        children = await getBlocksChildrenList(block.id);
      }
      return (
        <>
          <li>{notionText}</li>
          <div className="ml-6">
            {children &&
              children.results.map((block) => {
                // @ts-ignore
                return <NotionBlock block={block as BlockObjectResponse} mentions={mentions} />;
              })}
          </div>
        </>
      );
    }
    case "callout": {
      // TODO: check emoji for other callout types
      const emoji = block.callout.icon?.type === "emoji" ? block.callout.icon.emoji : null;
      let calloutType: ComponentProps<typeof Callout>["type"] = "default";
      if (emoji === "⚠️") calloutType = "warning";
      if (emoji === "🔴") calloutType = "error";
      return <Callout type={calloutType}>{notionText}</Callout>;
    }
    case "toggle": {
      // TODO: need to get block children
      return <></>;
    }
    case "quote": {
      return <Blockquote>{notionText}</Blockquote>;
    }
    case "image": {
      // @ts-ignore
      const b = await getBlock(block.id);
      // @ts-ignore
      const src = b.image.file.url;
      return (
        <figure>
          <img src={src} alt={"Image"} />
        </figure>
      );
    }
    case "synced_block": {
      let sb: null | ListBlockChildrenResponse;
      if (block.synced_block.synced_from?.block_id) {
        sb = await getBlocksChildrenList(block.synced_block.synced_from?.block_id!);
      } else {
        sb = await getBlocksChildrenList(block.id);
      }
      const blocks = sb.results as BlockObjectResponse[];

      // @ts-ignore
      return <NotionPage blocks={blocks} mentions={mentions} />;
    }
    case "file": {
      let fileUrl: string;
      let captionRichTexts: TextRichTextItemResponse[];

      if (block.file.type === "file") {
        const fileBlock = await getBlock(block.id);
        // @ts-ignore
        fileUrl = fileBlock.file.file.url;
        // @ts-ignore
        captionRichTexts = fileBlock.file.caption;
      }

      return (
        <a
          // @ts-ignore
          href={fileUrl}
          target="_blank"
          className="flex p-3 bg-gray-100 dark:bg-gray-900 rounded-md items-center space-x-3"
        >
          <FaFile />

          {/* @ts-ignore */}
          {captionRichTexts ? (
            // @ts-ignore
            <NotionText text={{ rich_text: captionRichTexts }} mentions={mentions} />
          ) : (
            <div>File</div>
          )}
        </a>
      );
    }
    default:
      return <p className="text-red-500">Warning: {type} is unsupported.</p>;
  }
}
