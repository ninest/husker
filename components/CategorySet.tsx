import { Spacer } from "@/components/Spacer";
import { Title } from "@/components/title";
import { Category } from "@/types/category";
import { LinkButton } from "@/components/LinkButton";
import { SmartLink } from "./SmartLink";
import { Icon } from "./Icon";

interface CategorySetProps {
  category: Category;
  showTitle?: boolean;
  showFull?: boolean;
}
export const CategorySet = ({
  category,
  showTitle = false,
  showFull = false,
}: CategorySetProps) => {
  return (
    <section key={category.slug} className="mb-xl">
      {showTitle && (
        <>
          <SmartLink
            href={`/${category.slug}`}
            className="flex items-center space-x-xs"
          >
            <Title level={3}>{category.title}</Title>

            <Icon id="caretright" className="text-xl"></Icon>
          </SmartLink>
          <Spacer size="xs"></Spacer>
        </>
      )}

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-md">
        {category.links.map((link) => {
          return (
            <LinkButton
              key={link.href}
              link={link}
              showDescription={showFull}
            ></LinkButton>
          );
        })}
      </div>

      {showFull && category.pages && (
        <>
          <Spacer size="lg"></Spacer>
          <hr />
          <Spacer size="lg"></Spacer>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-md">
            {category.pages?.map((link) => {
              return (
                <LinkButton
                  key={link.href}
                  link={link}
                  showDescription={showFull}
                ></LinkButton>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
};
