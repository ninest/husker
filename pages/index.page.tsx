import { LinkSet } from "@/components/link/LinkSet";
import { MiniAlert } from "@/components/MiniAlert";
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
      <article className="mt-base wrapper">
        <MiniAlert title="Moving in or out?" href="/contribute">
          Share images of your dorm!
        </MiniAlert>
        <Spacer size="md" />
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
