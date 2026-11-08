import { Callout } from "@/components/callout";
import { Blockquote } from "@/components/typography/blockquote";
import { Title } from "@/components/typography/title";
import { remarkCallouts } from "@/components/markdown/remark-callouts";
import { remarkColumns } from "@/components/markdown/remark-columns";
import Link from "next/link";
import { ComponentProps } from "react";
import Markdown, { Components, ExtraProps } from "react-markdown";
import remarkDirective from "remark-directive";
import remarkGfm from "remark-gfm";

type HastNode = NonNullable<ExtraProps["node"]>["children"][number];
type HastElement = Extract<HastNode, { type: "element" }>;

// Space below every block except the last one in its container (a list
// item, callout, or the page).
const block = "mb-4 last:mb-0";

const CALLOUT_TYPES: Record<string, ComponentProps<typeof Callout>["type"]> = {
  warning: "warning",
  caution: "error",
};

const components: Components = {
  h1: ({ children }) => <Title level={2} className="mb-2">{children}</Title>,
  h2: ({ children }) => <Title level={2} className="mb-2">{children}</Title>,
  h3: ({ children }) => <Title level={3} className="mb-2">{children}</Title>,
  h4: ({ children }) => <Title level={3} className="mb-2">{children}</Title>,
  p: ({ node, children }) => {
    const content = (node?.children ?? []).filter((child) => !(child.type === "text" && !child.value.trim()));
    const elements = content.filter((child): child is HastElement => child.type === "element");

    // A paragraph of only images: one image, or several shown in a row.
    if (content.length > 0 && elements.length === content.length && elements.every((e) => e.tagName === "img")) {
      if (elements.length === 1) return <Figure image={elements[0]} className={block} />;
      return (
        <div className={`flex items-start gap-4 ${block}`}>
          {elements.map((image, i) => (
            <Figure key={i} image={image} className="flex-1 min-w-0" />
          ))}
        </div>
      );
    }

    // A link to a video on its own line is embedded.
    if (content.length === 1 && elements[0]?.tagName === "a") {
      const embed = videoEmbed(String(elements[0].properties.href ?? ""));
      if (embed) return <div className={block}>{embed}</div>;
    }

    return <p className={block}>{children}</p>;
  },
  ul: ({ children, className }) => (
    <ul className={className?.includes("contains-task-list") ? `list-none ${block}` : `list-disc list-outside ml-6 ${block}`}>
      {children}
    </ul>
  ),
  ol: ({ children, start }) => (
    <ol start={start} className={`list-decimal list-outside ml-6 ${block}`}>
      {children}
    </ol>
  ),
  blockquote: ({ children }) => (
    <div className={block}>
      <Blockquote>{children}</Blockquote>
    </div>
  ),
  div: ({ node, children }) => {
    if (node?.properties.dataColumns !== undefined) return <div className={`flex gap-4 ${block}`}>{children}</div>;
    if (node?.properties.dataColumn !== undefined) return <div className="flex-1 min-w-0">{children}</div>;
    return <div className={block}>{children}</div>;
  },
  aside: ({ node, children }) => (
    <div className={block}>
      <Callout type={CALLOUT_TYPES[String(node?.properties.dataCallout)] ?? "default"}>{children}</Callout>
    </div>
  ),
  a: ({ href = "", children }) =>
    href.startsWith("/") || href.startsWith("#") ? (
      <Link href={href} className="underline">
        {children}
      </Link>
    ) : (
      <a href={href} className="underline">
        {children}
      </a>
    ),
  img: ({ src, alt }) => <img src={typeof src === "string" ? src : undefined} alt={alt ?? ""} className="inline" />,
  strong: ({ children }) => <span className="font-bold">{children}</span>,
  em: ({ children }) => <span className="italic">{children}</span>,
  del: ({ children }) => <span className="line-through">{children}</span>,
  code: ({ children }) => (
    <code className="font-mono bg-gray-100 dark:bg-gray-800 text-sm rounded -mx-0.5 px-0.5">{children}</code>
  ),
  pre: ({ children }) => (
    <pre className={`overflow-x-auto bg-gray-100 dark:bg-gray-800 rounded-md p-3 ${block}`}>{children}</pre>
  ),
  hr: () => <hr className={`border-gray-200 dark:border-gray-800 ${block}`} />,
};

function Figure({ image, className }: { image: HastElement; className?: string }) {
  const { src, alt } = image.properties;
  return (
    <figure className={`bg-gray-50 dark:bg-gray-950 max-w-[30rem] xl:max-w-[34rem] ${className ?? ""}`}>
      <img src={String(src)} alt={alt ? String(alt) : ""} />
    </figure>
  );
}

function videoEmbed(href: string) {
  const youtubeId = getYoutubeId(href);
  if (youtubeId) {
    return (
      <iframe
        sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
        src={`https://www.youtube.com/embed/${encodeURIComponent(youtubeId)}`}
        className="w-full aspect-video"
      ></iframe>
    );
  }
  if (/\.(mp4|webm|mov)$/i.test(href)) return <video src={href} controls></video>;
  return null;
}

function getYoutubeId(href: string) {
  let url: URL;
  try {
    url = new URL(href);
  } catch {
    return null;
  }
  const host = url.hostname.replace(/^(www|m)\./, "");
  if (host === "youtu.be") return url.pathname.slice(1) || null;
  if (host !== "youtube.com") return null;
  if (url.pathname === "/watch") return url.searchParams.get("v");
  return url.pathname.match(/^\/(shorts|embed|live)\/([\w-]+)/)?.[2] ?? null;
}

export function MarkdownContent({ markdown }: { markdown: string }) {
  return (
    <article className="leading-relaxed">
      <Markdown remarkPlugins={[remarkGfm, remarkDirective, remarkColumns, remarkCallouts]} components={components}>
        {markdown}
      </Markdown>
    </article>
  );
}
