import { contentMap } from "@/content/map";

import { LinkSet } from "@/components/LinkSet";
import { Expandable } from "@/components/Expandable";
import { Button } from "@/components/Button";
import { useSettings } from "@/lib/settings";
import { Link } from "@/types/category";
import { IconId } from "@/types/icon";
import { useEffect } from "react";
import { Icon } from "@/components/Icon";
import { favoritesToLinks } from "@/lib/favorites";

const IndexPage = () => {
  const {
    settings: { favoritesEnabled, favorites },
  } = useSettings();

  const favoriteLinks = favoritesToLinks(favorites);

  return (
    <>
      <article className="mt-base wrapper">
        {/* <Expandable
          title="Would you like to contribute to Husker?"
          containsProse
        >
          <p>
            We are looking to add more content to Husker! Would you like to
            write guides? Do you think your knowledge on the school can help
            others? Click the button below to contribute!
          </p>

          <div className="flex gap-base">
            <Button href="/contribute">Contribute</Button>
            <Button href="https://discord.gg/j7WkFct2rY" icon="discord">
              Discord
            </Button>
          </div>
        </Expandable> */}

        <div className="space-y-xl">
          {favoritesEnabled && (
            <section>
              <LinkSet
                showTitle
                title={"Favorites"}
                moreInfoHref={
                  favoriteLinks.length == 0 ? `/settings` : `/favorites`
                }
                links={favoriteLinks}
              />
              {favoriteLinks.length == 0 && (
                <div className="border-2 border-dashed rounded-md text-gray text-sm p-base space-y-sm">
                  <p className="font-bold">
                    You haven't added any favorites yet! To add favorites, open
                    the settings page.
                  </p>
                  <p>
                    On mobile, open the menu by pressing the{" "}
                    <Icon id="griplines" className="inline" /> button on the top
                    right, then find the <Icon id="cog" className="inline" />{" "}
                    button on the bottom.
                  </p>
                  <p>
                    On desktop, click the <Icon id="cog" className="inline" />{" "}
                    button at the bottom of the sidebar.
                  </p>
                </div>
              )}
            </section>
          )}
          {contentMap.map((category) => {
            return (
              <LinkSet
                key={category.slug}
                showTitle
                title={category.title}
                moreInfoHref={`/${category.slug}`}
                links={category.links}
              />
            );
          })}
        </div>
      </article>
    </>
  );
};

export default IndexPage;
