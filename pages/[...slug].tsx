import path from "path";
import { GetStaticProps, GetStaticPaths } from "next";
import { getMDXComponent } from "mdx-bundler/client";

import { getAllFiles } from "@/lib/file";
import { getMDX } from "@/lib/mdx";
import { Guide } from "@/types/guide";
import { substitutedComponents } from "@/components/substituted";
import { GuideLayout } from "@/layouts/Guide";
import { relativeDate } from "@/utils/date";

export default function GuidePage({ code, frontmatter }: Guide) {
  const Markdown = getMDXComponent(code);

  return (
    <>
      <GuideLayout side={<></>}>
        <article className="space-y-lg">
          <h1 className="font-bold text-4xl leading-normal">
            {frontmatter.title}
          </h1>
          <div className="prose">
            <Markdown components={substitutedComponents}></Markdown>
          </div>
          <div className="text-gray text-sm font-medium">
            Last updated {relativeDate(new Date(frontmatter.lastUpdated))} ago
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

  return { props: { code, frontmatter } };
};
