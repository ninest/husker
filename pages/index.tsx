import { LandingLayout } from "@/layouts/Landing";
import data from "@/content/data";
import { Resource } from "@/components/Resource";
import Masonry from "react-masonry-css";

export default function NewIndex({}) {
  const { sections } = data;
  return (
    <>
      <LandingLayout>
        <h1 className="font-bold text-4xl leading-normal mb-sm">
          Useful NEU links and resources
        </h1>

        <Masonry
          breakpointCols={{ 840: 1, 1536: 2, default: 3 }}
          className="masonry-grid"
          columnClassName="masonry-grid-item"
        >
          {sections.map((section) => (
            <Resource
              key={section.slug}
              slug={section.slug}
              title={section.title}
              bricks={section.bricks}
              list={section.list}
              info={section.info ?? null}
              moreInfoLink={section.moreInfoLink ?? null}
            ></Resource>
          ))}
        </Masonry>
      </LandingLayout>
    </>
  );
}
