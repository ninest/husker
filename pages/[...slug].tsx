import { GetStaticProps, GetStaticPaths } from "next";
import { NextSeo } from "next-seo";
import { getMDXComponent } from "mdx-bundler/client";

import { getAllFiles } from "@/lib/file";
import { getMDX } from "@/lib/mdx";
import { Guide } from "@/types/guide";
import { substitutedComponents } from "@/components/substituted";
import { GuideLayout } from "@/layouts/Guide";
import { formatDate, relativeDate } from "@/utils/date";
import { SmartLink } from "@/components/SmartLink";

interface Props {
  slug: string[];
  guide: Guide;
}
export default function GuidePage({
  slug,
  guide: { frontmatter, code },
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
      <GuideLayout side={<></>}>
        <article className="space-y-lg">
          <h1 className="font-bold text-4xl leading-normal">
            {frontmatter.title}
          </h1>
          <div className="prose">
            <Markdown components={substitutedComponents}></Markdown>
          </div>
          <div className=" text-gray text-sm font-medium">
            Last updated{" "}
            <span className="group">
              <span className="group-hover:hidden">
                {relativeDate(new Date(frontmatter.lastUpdated))} ago
              </span>
              <span className="hidden group-hover:inline">
                on {formatDate(new Date(frontmatter.lastUpdated))}
              </span>
            </span>
            {" "}– <SmartLink href={editLink} className="underline">Edit</SmartLink>
          </div>
        </article>
      </GuideLayout>
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

  return { props: { slug, guide: { code, frontmatter } } };
};
