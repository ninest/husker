import { Icon } from "@/components/Icon";
import { SmartLink } from "@/components/SmartLinks";
import Spacer from "@/components/Spacer";
import Title from "@/components/title";
import { contentMap } from "@/content/map";

const IndexPage = () => {
  return (
    <>
      {contentMap.map((category) => {
        return (
          <section key={category.slug} className="mb-xl">
            <Title level={2}>{category.title}</Title>
            <Spacer size="sm"></Spacer>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-md">
              {category.links.map((link) => {
                return (
                  <SmartLink
                    className="flex items-center space-x-base rounded p-md bg-gray-50 hover:bg-gray-100 font-semibold text-sm text-gray"
                    href={link.href}
                  >
                    <Icon></Icon>
                    <div>{link.name}</div>
                  </SmartLink>
                );
              })}
            </div>
          </section>
        );
      })}
    </>
  );
};

export default IndexPage;
