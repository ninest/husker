import { contentMap } from "@/content/map";

import { LinkSet } from "@/components/LinkSet";

const IndexPage = () => {
  return (
    <>
      <article className="mt-base wrapper">
        <div className="space-y-xl">
          {contentMap.map((category) => {
            return (
              <LinkSet
                key={category.slug}
                showTitle
                title={category.title}
                moreInfoHref={`/${category.slug}`}
                links={category.links}
              ></LinkSet>
            );
          })}
        </div>
      </article>
    </>
  );
};

export default IndexPage;
