import { LandingLayout } from "@/layouts/Landing";
import { Resource } from "@/components/Resource";
import { GetStaticProps } from "next";
import { getResources, getSheets } from "@/lib/sheet";
import { Category } from "@/types/resource";
import { SmartLink } from "@/components/SmartLink";

export default function Index({ categories }: { categories: Category[] }) {
  return (
    <>
      <LandingLayout>
        <h1 className="font-bold text-4xl leading-normal mb-xs">
          Useful NEU resources
        </h1>

        <p>
          Hover on a link to see for more information about it (if there is). If
          you would like to add a useful link to this list, check out the{" "}
          <SmartLink href="/contribute" className="underline">
            contribution
          </SmartLink>{" "}
          guide.
        </p>

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

  return {
    props: { categories },
    revalidate: 3600 * 3, // Rebuild every 3 hours
  };
};
