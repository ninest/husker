import { LandingLayout } from "@/layouts/Landing";
import data from "@/content/data";
import { NewResource } from "@/components/NewResource";

export default function NewIndex({}) {
  const { sections } = data;
  return (
    <>
      <LandingLayout>
        <h1 className="font-bold text-4xl leading-normal mb-xs">Huskinfo</h1>

        <div className="space-y-md">
          {sections.map((section) => (
            <>
              <NewResource
                title={section.title}
                slug={section.slug}
                bricks={section.bricks}
                list={section.list}
                info={section.info ?? null}
                moreInfoLink={section.moreInfoLink ?? null}
              ></NewResource>
            </>
          ))}
        </div>
      </LandingLayout>
    </>
  );
}
