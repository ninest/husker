import { ArticleHead } from "@/components/ArticleHead";
import { Button } from "@/components/Button";
import { ClientOnly } from "@/components/ClientOnly";
import { LinkSet } from "@/components/link/LinkSet";
import { NoFavorites } from "@/components/NoFavorites";
import { Spacer } from "@/components/Spacer";
import { useFavorites, useSettings } from "@/hooks/settings";
import { favoritesToLinks } from "@/lib/favorites";

import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect } from "react";

const FavoritesPage = () => {
  const {
    settings: { favoritesEnabled, favorites },
  } = useSettings();
  const router = useRouter();

  useEffect(() => {
    // No need to be here if favorites aren't enabled
    if (!favoritesEnabled) router.push("/settings");
  }, []);

  const favoriteLinks = favoritesToLinks(favorites);

  return (
    <>
      <NextSeo title={"Favorites"} description={"All your favorites"} />
      <ArticleHead title={"Favorites"} />

      <article className="wrapper" suppressHydrationWarning>
        <ClientOnly>
          {favoriteLinks.length == 0 && (
            <>
              <NoFavorites />
              <Spacer size="md" />
            </>
          )}
          <div className="flex">
            <Button icon="pen" href="/settings" size="sm">
              Edit
            </Button>
          </div>
          <Spacer size="md" />
          <LinkSet showTitle={false} showFull links={favoriteLinks} />
        </ClientOnly>
      </article>
    </>
  );
};

export default FavoritesPage;
