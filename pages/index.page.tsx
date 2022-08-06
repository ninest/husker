import { LinkSet } from "@/components/link/LinkSet";
import { NoFavorites } from "@/components/ui/NoFavorites";
import { ClientOnly } from "@/components/util/ClientOnly";
import { Spacer } from "@/components/util/Spacer";
import { contentMap } from "@/content/map";
import { useSettings } from "@/hooks/settings";
import { favoritesToLinks } from "@/lib/favorites";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const IndexPage = () => {
  const {
    settings: { favoritesEnabled, favorites },
  } = useSettings();

  const favoriteLinks = favoritesToLinks(favorites);

  const [parent] = useAutoAnimate<HTMLDivElement>();

  return (
    <>
      <article className=" mt-base wrapper">
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

        <div ref={parent} className="space-y-xl" suppressHydrationWarning>
          <ClientOnly>
            {favoritesEnabled && (
              <div>
                <LinkSet
                  showTitle
                  title={"Favorites"}
                  moreInfoHref={`/favorites`}
                  links={favoriteLinks}
                  animate
                />
                {favoriteLinks.length == 0 && <NoFavorites />}
              </div>
            )}
          </ClientOnly>

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

        <Spacer />
      </article>
    </>
  );
};

export default IndexPage;
