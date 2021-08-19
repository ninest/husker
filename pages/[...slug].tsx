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
import { FaChevronDown, FaHighlighter } from "react-icons/fa";
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
          {breadcrumb?.length > 0 && (
            <>
              {/* {JSON.stringify(breadcrumb)} */}
              <div className="-mb-2 flex space-x-sm text-gray text-sm font-bold">
                {breadcrumb.map((crumb) => (
                  <>
                    <SmartLink key={crumb.href} href={crumb.href}>
                      {crumb.title}
                    </SmartLink>
                    <div>{"/"}</div>
                  </>
                ))}
              </div>
            </>
          )}

          <div className="mb-base">
            <h1 className="font-bold text-5xl leading-normal">
              {frontmatter.title}
            </h1>
          </div>

          {/* In this section */}
          {frontmatter.inSection && (
            <div className="mb-md">
              <RelatedLinks>
                <ul>
                  {frontmatter.inSection.map((link) => (
                    <li className="underline">
                      <SmartLink key={link.href} href={link.href}>
                        {link.title}
                      </SmartLink>
                    </li>
                  ))}
                </ul>
              </RelatedLinks>
            </div>
          )}

          <p className="mb-base text-lg text-gray">{frontmatter.description}</p>

          {/* Mobile TOC */}
          {frontmatter.toc && (
            <div className="mb-base lg:hidden">
              <MobileContents frontmatter={frontmatter}></MobileContents>
            </div>
          )}

          <article className="mt-base prose">
            <Markdown components={substitutedComponents}></Markdown>
          </article>

          <div className=" text-gray text-sm font-medium">
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
    // for (const higherSlug of slug.slice(0, -1)) {
    //   console.log(higherSlug);
    // }
    console.log(slug.length);
    for (let i = 1; i < slug.length; i++) {
      const filepath = slug.slice(0, i).join("/");
      const { frontmatter } = await getMDX<Guide>(filepath);
      breadcrumb.push({
        title: frontmatter.title,
        href: `/${filepath}`,
      });
    }
  }

  console.log(breadcrumb);

  return {
    props: {
      slug,
      guide: { code, frontmatter },
      breadcrumb,
    },
  };
};
