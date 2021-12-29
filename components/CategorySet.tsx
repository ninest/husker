import { Spacer } from "@/components/Spacer";
import { Title } from "@/components/title";
import { Category } from "@/types/category";
import { LinkButton } from "@/components/LinkButton";
import { SmartLink } from "./SmartLinks";
import { Icon } from "./Icon";

interface CategorySetProps {
  category: Category;
  showTitle?: boolean;
  showDescription?: boolean;
  showPages?: boolean;
}
export const CategorySet = ({
  category,
  showTitle = true,
  showDescription = false,
  showPages = false,
}: CategorySetProps) => {
  return (
    <section key={category.slug} className="mb-xl">
      {showTitle && (
        <>
          <SmartLink
            href={`/${category.slug}`}
            className="flex items-center space-x-xs"
          >
            <Title level={2}>{category.title}</Title>

            <Icon id="caretright" className="text-xl"></Icon>
          </SmartLink>
          <Spacer size="sm"></Spacer>
        </>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-md">
        {category.links.map((link) => {
          return (
            <LinkButton
              link={link}
              showDescription={showDescription}
            ></LinkButton>
          );
        })}
      </div>

      {showPages && category.pages && (
        <>
          <Spacer size="lg"></Spacer>
          <hr />
          <Spacer size="lg"></Spacer>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-md">
            {category.pages?.map((link) => {
              return (
                <LinkButton
                  link={link}
                  showDescription={showDescription}
                ></LinkButton>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
};
