import { CategorySet } from "@/components/CategorySet";
import { Spacer } from "@/components/Spacer";
import { Title } from "@/components/title";
import { contentMap } from "@/content/map";
import { Category } from "@/types/category";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = contentMap.map((category) => `/${category.slug}`);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug![0] as string;
  const category = contentMap.find((category) => category.slug === slug);

  return {
    props: {
      category,
    },
  };
};

interface ContentPageProps {
  category?: Category;
}

const ContentPage = ({ category }: ContentPageProps) => {
  return (
    <>
      <Title>{category?.title}</Title>
      <Spacer></Spacer>
      <CategorySet
        category={category!}
        showTitle={false}
        showDescription
        showPages
      ></CategorySet>
    </>
  );
};

export default ContentPage;
