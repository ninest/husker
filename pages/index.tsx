import { LandingLayout } from "@/layouts/Landing";
import { Resource } from "@/components/Resource";
import { categories } from "@/content/links";

export default function Index() {
  return (
    <>
      <LandingLayout>
        <h1 className="font-bold text-4xl leading-normal">
          All your links in one place
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
