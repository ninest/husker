import { GetStaticPaths, GetStaticProps } from "next";
import { getMDXComponent } from "mdx-bundler/client";
import { CategorySet } from "@/components/CategorySet";
import { Spacer } from "@/components/Spacer";
import { Title } from "@/components/title";
import { contentMap, pages } from "@/content/map";
import { listToFilepath } from "@/lib/file/list-to-file";
import { getPage } from "@/lib/pages";
import { Category } from "@/types/category";
import { Page } from "@/types/page";
import { Icon } from "@/components/Icon";
import { SmartLink } from "@/components/SmartLinks";
import { BackButton } from "@/components/BackButton";
import { NextSeo } from "next-seo";
import { Block } from "@/components/Block";

export const getStaticPaths: GetStaticPaths = async () => {
  const categoryPaths = contentMap.map((category) => `/${category.slug}`);
  const otherPagePaths = pages;
  return {
    paths: [...categoryPaths, ...otherPagePaths],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = listToFilepath(params?.slug! as string[]);

  // Check if there is a category with the slug
  const category =
    contentMap.find((category) => category.slug === slug) ?? null;

  // Get page
  const page = await getPage(slug);

  return {
    props: {
      category,
      page,
    },
  };
};

interface ContentPageProps {
  category?: Category;
  page: Page;
}

const ContentPage = ({ category, page }: ContentPageProps) => {
  const Markdown = getMDXComponent(page.code);
  const { title, description, updatedAt } = page.frontmatter;

  return (
    <>
      <NextSeo
        title={category?.title ?? title}
        description={description}
      ></NextSeo>

      <Spacer></Spacer>
      <BackButton></BackButton>
      <Spacer size="sm"></Spacer>
      <Title>{category?.title ?? title}</Title>
      <Spacer></Spacer>
      {category && (
        <CategorySet
          category={category!}
          showTitle={false}
          showFull
        ></CategorySet>
      )}

      <article className="prose">
        <Markdown
          components={{
            Block,
            a: (props) => {
              return <a {...props} className="underline"></a>;
            },
          }}
        ></Markdown>
      </article>
    </>
  );
};

export default ContentPage;
