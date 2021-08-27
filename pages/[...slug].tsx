import { GetStaticProps, GetStaticPaths } from "next";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";
import { getMDXComponent } from "mdx-bundler/client";

import { getAllFiles } from "@/lib/file";
import { getMDX } from "@/lib/mdx";
import { Breadcrumb, Guide, GuideFrontmatter } from "@/types/guide";
import { substitutedComponents } from "@/components/substituted";
import { GuideLayout } from "@/layouts/Guide";
import { formatDate, relativeDate } from "@/utils/date";
import { SmartLink } from "@/components/SmartLink";
import { useState } from "react";
import clsx from "clsx";
import { FaChevronDown, FaChevronLeft, FaHighlighter } from "react-icons/fa";
import { RelatedLinks } from "@/components/RelatedLinks";

const DynamicTOC = dynamic(
  () => import("../components/DynamicTOC").then((mod) => mod.DynamicTOC) as any,
  {
    ssr: false,
    loading: () => (
      <>
        <div className="w-full h-10 rounded-full animate-pulse">
          Loading TOC
        </div>
      </>
    ),
  }
);

interface Props {
  slug: string[];
  guide: Guide;
  breadcrumb: Breadcrumb;
}
export default function GuidePage({
  slug,
  guide: { frontmatter, code },
  breadcrumb,
}: Props) {
  const Markdown = getMDXComponent(code);
  const path = slug.join("/");
  const editLink = `https://github.com/ninest/huskinfo/tree/main/content/guides/${path}/index.md`;

  return (
    <>
      <NextSeo
        title={frontmatter.title}
        description={frontmatter.description}
      ></NextSeo>
      <GuideLayout
        side={
          <>
            {/* TOC */}
            {frontmatter.toc && (
              <div suppressHydrationWarning={true} className="mt-base">
                {typeof window !== "undefined" && <DynamicTOC></DynamicTOC>}
              </div>
            )}
          </>
        }
      >
        <div>
          <div className="-mb-1 flex items-center space-x-sm text-gray text-sm font-bold">
            <SmartLink
              href="/"
              className="inline-ghost flex items-center space-x-sm"
            >
              {/* Show back chevron if no sub breadcrumbs */}
              {breadcrumb.length == 0 && (
                <div className="text-xs">
                  <FaChevronLeft></FaChevronLeft>
                </div>
              )}
              <div>Home</div>
            </SmartLink>
            {breadcrumb.map((crumb) => (
              <div key={crumb.href} className="flex items-center space-x-sm">
                <div>{"/"}</div>
                <div>
                  <SmartLink
                    key={crumb.href}
                    href={crumb.href}
                    className="inline-ghost"
                  >
                    {crumb.title}
                  </SmartLink>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-xs">
            <h1 className="font-bold text-5xl leading-normal">
              {frontmatter.title}
            </h1>
          </div>

          <p className="mb-base text-lg text-gray">{frontmatter.description}</p>

          {/* In this section */}
          {frontmatter.related && (
            <div className="mt-base mb-md">
              <RelatedLinks>
                <ul>
                  {frontmatter.related.map((link) => (
                    <li key={link.href} className="underline">
                      <SmartLink href={link.href}>{link.title}</SmartLink>
                    </li>
                  ))}
                </ul>
              </RelatedLinks>
            </div>
          )}

          {/* Mobile TOC */}
          {frontmatter.toc && (
            <div className="mb-lg lg:hidden">
              <MobileContents frontmatter={frontmatter}></MobileContents>
            </div>
          )}

          <article className="mt-base prose">
            <Markdown components={substitutedComponents}></Markdown>
          </article>

          <div className="mt-lg text-gray text-sm font-medium">
            Last updated{" "}
            <span className="group">
              <span className="group-hover:hidden">
                {relativeDate(new Date(frontmatter.lastUpdated))} ago
              </span>
              <span className="hidden group-hover:inline">
                on {formatDate(new Date(frontmatter.lastUpdated))}
              </span>
            </span>{" "}
            –{" "}
            <SmartLink href={editLink} className="underline">
              Edit
            </SmartLink>
          </div>
        </div>
      </GuideLayout>
    </>
  );
}

function MobileContents({ frontmatter }: { frontmatter: GuideFrontmatter }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {frontmatter.toc && (
        <div
          suppressHydrationWarning={true}
          className={clsx("rounded border-2", {
            "md:w-3/4": !isOpen,
            "md:w-4/4": isOpen,
          })}
          // Apply padding on inner divs and not outer one so that the full first div can be clicked
          // to open/close TOC. Without inner divs having their own padding, only the text of the
          // first div can be clicked to open/close the TOC
        >
          <div
            className="p-base flex items-center justify-between space-x-lg text-gray-darker text-lg font-bold"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>Contents</span>

            <FaChevronDown
              className={clsx("transition", { "transform rotate-180": isOpen })}
            ></FaChevronDown>
          </div>

          {isOpen && (
            <div className="p-base pt-0">
              {typeof window !== "undefined" && <DynamicTOC></DynamicTOC>}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllFiles("guides", "md");

  return {
    paths: paths.map((path) => {
      if (path[path.length - 1] === "index") {
        // Remove last element, because no need for "index" in url
        return {
          params: {
            slug: path.slice(0, -1),
          },
        };
      } else
        return {
          params: {
            slug: path,
          },
        };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params.slug as string[];
  const filepath = slug.join("/");

  const { code, frontmatter } = await getMDX<Guide>(filepath);

  const breadcrumb: Breadcrumb = [];
  if (slug.length > 1) {
    /* Not a top level page, so show breadcrumbs on top */
    // Use .slice(0, -1) to remove the current page slug from breadcrumb

    for (let i = 1; i < slug.length; i++) {
      const filepath = slug.slice(0, i).join("/");
      try {
        // If the page doesn't exist, no breadcrump. This only applies to deeply
        // nested pages like one/two/deep/nest where pages in certain folders
        // (like `two` or `deep` don't have an index.md inside)
        const { frontmatter } = await getMDX<Guide>(filepath);
        breadcrumb.push({
          title: frontmatter.title,
          href: `/${filepath}`,
        });
      } catch (e) {}
    }
  }

  return {
    props: {
      slug,
      guide: { code, frontmatter },
      breadcrumb,
    },
  };
};
