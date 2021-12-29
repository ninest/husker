import { contentMap } from "@/content/map";
import { CategorySet } from "@/components/CategorySet";

const IndexPage = () => {
  return (
    <>
      {contentMap.map((category) => {
        return (
          <CategorySet key={category.slug} category={category}></CategorySet>
        );
      })}
    </>
  );
};

export default IndexPage;
