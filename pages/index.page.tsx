import { ClientOnly } from "@/components/util/ClientOnly";
import { LinkSet } from "@/components/link/LinkSet";
import { NoFavorites } from "@/components/ui/NoFavorites";
import { Spacer } from "@/components/util/Spacer";
import { contentMap } from "@/content/map";
import { useSettings } from "@/hooks/settings";
import { favoritesToLinks } from "@/lib/favorites";
import { MarkdocLinkButtonGrid } from "@/components/markdoc/MarkdocLinkButtonGrid";
import { Icon } from "@/components/Icon";
import { SmartLink } from "@/components/SmartLink";

const IndexPage = () => {
  const {
    settings: { favoritesEnabled, favorites },
  } = useSettings();

  const favoriteLinks = favoritesToLinks(favorites);

  return (
    <>
      <article className=" mt-base wrapper">
        <MarkdocLinkButtonGrid>
          <ul>
            <li>
              <Icon id="filealt" />
              <SmartLink href={"/"}>One</SmartLink>: A
            </li>
            <li>
              <Icon id="filealt" />
              <SmartLink href={"/house"}>Two</SmartLink>: B
            </li>
          </ul>
        </MarkdocLinkButtonGrid>
        <Spacer />

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

        <div className="space-y-xl" suppressHydrationWarning>
          <ClientOnly>
            {favoritesEnabled && (
              <div>
                <LinkSet
                  showTitle
                  title={"Favorites"}
                  moreInfoHref={`/favorites`}
                  links={favoriteLinks}
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
