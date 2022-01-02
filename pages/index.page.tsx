import { contentMap } from "@/content/map";
import { CategorySet } from "@/components/CategorySet";
import { Icon } from "@/components/Icon";

const IndexPage = () => {
  return (
    <>
      <article className="wrapper">
        <div className="space-y-lg">
          {contentMap.map((category) => {
            return (
              <CategorySet
                key={category.slug}
                showTitle
                category={category}
              ></CategorySet>
            );
          })}
        </div>
      </article>
    </>
  );
};

export default IndexPage;
