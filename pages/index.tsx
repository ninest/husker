import { LandingLayout } from "@/layouts/Landing";
import { Resource } from "@/components/Resource";
import { GetStaticProps } from "next";
import { getResources, getSheets } from "@/lib/sheet";
import { Category } from "@/types/resource";

export default function Index({ categories }: { categories: Category[] }) {
  return (
    <>
      <LandingLayout>
        <h1 className="font-bold text-4xl leading-normal">
          Useful NEU resources
        </h1>

        <section className="mt-xl space-y-lg">
          {categories.map((category) => (
            <Resource key={category.slug} {...category} />
          ))}
        </section>
      </LandingLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const categories = await getSheets();
  for (let i = 0; i < categories.length; i++) {
    categories[i].resources = await getResources(categories[i].sheetId);
  }

  return { props: { categories } };
};
