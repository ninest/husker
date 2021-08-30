import { LandingLayout } from "@/layouts/Landing";
import data from "@/content/data";
import { Resource } from "@/components/Resource";

export default function NewIndex({}) {
  const { sections } = data;
  return (
    <>
      <LandingLayout>
        <h1 className="font-bold text-4xl leading-normal mb-sm">
          Useful NEU links and resources
        </h1>

        <div className="space-y-md">
          {sections.map((section) => (
            <>
              <Resource
                key={section.slug}
                slug={section.slug}
                title={section.title}
                bricks={section.bricks}
                list={section.list}
                info={section.info ?? null}
                moreInfoLink={section.moreInfoLink ?? null}
              ></Resource>
            </>
          ))}
        </div>
      </LandingLayout>
    </>
  );
}
