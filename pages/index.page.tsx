import { contentMap } from "@/content/map";

import { LinkSet } from "@/components/LinkSet";
import { Expandable } from "@/components/Expandable";
import { Button } from "@/components/Button";
import { useSettings } from "@/lib/settings";
import { Link } from "@/types/category";
import { IconId } from "@/types/icon";
import { useEffect } from "react";

const IndexPage = () => {
  const {
    settings: { favoritesEnabled, favorites },
  } = useSettings();

  useEffect(() => {
    console.log(favoritesEnabled);
    console.log(favorites);
  }, []);

  // Favorite[] -> Link[]
  const favoriteLinks: Link[] = favorites?.map((favorite) => ({
    ...favorite,
    // TODO: if the icon is not in IconId, use filealt as the default
    icon: favorite.icon as IconId,
    description: favorite.description ?? "",
  }));

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
                moreInfoHref={`/favorites`}
                links={favoriteLinks}
              />
              {favoriteLinks.length == 0 && (
                <div className="border-2 border-dashed rounded-md text-gray p-base">You haven't added any favorites yet!</div>
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
