import { contentMap } from "@/content/map";

import { LinkSet } from "@/components/LinkSet";
import { Expandable } from "@/components/Expandable";
import { SmartLink } from "@/components/SmartLink";

const IndexPage = () => {
  return (
    <>
      <article className="mt-base wrapper">
        <Expandable title="What's new?" containsProse>
          <ul>
            <li>  
              One extra meal exchange Monday-Thursday 4-7PM: see more on the{" "}
              <SmartLink href="/husky-card/dining" className="underline">
                {" "}
                dining info page
              </SmartLink>{" "}
              and on{" "}
              <SmartLink
                href="https://nudining.com/public/meal-plans"
                className="underline"
              >
                nudining
              </SmartLink>
            </li>
            <li>Use this site's search bar to find relevant links related to courses: try searching for <i>CS 4500</i></li>
          </ul>
        </Expandable>

        <div className="mt-lg space-y-xl">
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
