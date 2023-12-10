"use client";

import { filterResults, useSearch } from "@/app/(links)/use-search";
import { Empty, NoElementsEmpty } from "@/components/empty";
import { LinkButton } from "@/components/link-button";
import { Spacer } from "@/components/spacer";
import { Title } from "@/components/typography/title";
import { Category } from "@/modules/content/category";
import { HuskerLink } from "@/modules/content/link";
import { useFavorites } from "@/modules/favorites/use-favorites";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Link from "next/link";

interface LinksGridProps {
  categories: Category[];
  links: HuskerLink[];
}

export function LinksGrid({ categories, links }: LinksGridProps) {
  const { searchQuery } = useSearch();
  const filteredLinks = !!searchQuery ? filterResults(searchQuery, links) : links;
  const containsLinks = filteredLinks.length > 0;

  const { favoritesEnabled, favorites } = useFavorites();
  const [animationParent] = useAutoAnimate();

  return (
    <>
      {!containsLinks && <NoElementsEmpty children="No links found. Add one?" />}

      {favoritesEnabled && (
        <div>
          <Title level={2} className="font-extrabold text-xl">
            Favorites
          </Title>
          <Spacer className="h-3" />

          {favorites.length === 0 && (
            <Empty>
              No favorites added. Go to{" "}
              <Link href="/settings" className="underline">
                settings
              </Link>{" "}
              and disable favorites or right-click a link to add to favorites.
            </Empty>
          )}
          <div ref={animationParent} className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {favorites.map((favoriteLink) => (
              <LinkButton key={favoriteLink.id} huskerLink={favoriteLink} />
            ))}
          </div>
        </div>
      )}

      {categories.map((category) => {
        const filteredLinksInCategory = filteredLinks.filter((link) => link.categoryIds.includes(category.id));
        if (filteredLinksInCategory.length === 0) return <></>;
        return (
          <div key={category.slug}>
            <Title level={2} id={category.slug} className="font-extrabold text-xl">
              {category.title}
            </Title>
            <Spacer className="h-3" />

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {filteredLinksInCategory.map((link) => (
                <LinkButton key={link.id} huskerLink={link} />
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}
