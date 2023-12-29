import { PageMention } from "@/modules/blocks/mentions";
import { TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import clsx from "clsx";
import Link from "next/link";

export function NotionText({ text, mentions }: { text: any; mentions: PageMention[] }) {
  if (!text) return <></>;

  const richText: TextRichTextItemResponse[] = text["rich_text"];

  return richText.map((value) => {
    const {
      type,
      annotations: { bold, code, color, italic, strikethrough, underline },
    } = value;
    const classes = clsx({
      "font-bold": bold,
      "font-mono bg-gray-100 dark:bg-gray-800 text-sm rounded -mx-0.5 px-0.5": code,
      italic: italic,
      strikethrough: strikethrough,
      underline: underline,
    });

    switch (type) {
      case "text": {
        const text = value.text;
        return (
          <span className={classes}>
            {text.link ? (
              <a href={text.link.url} className="underline">
                {text.content}
              </a>
            ) : (
              text.content
            )}
          </span>
        );
      }
      // @ts-ignore
      case "mention": {
        const text = value.plain_text;
        // @ts-ignore
        const linkedToPageId = value.mention.page.id.replaceAll("-", "");
        const mention = mentions.find((mention) => mention.id === linkedToPageId)!;
        return (
          <span className={classes}>
            <Link href={mention?.href} className="underline">
              {text}
            </Link>
          </span>
        );
      }
    }
  });
}
