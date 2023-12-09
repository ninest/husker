"use client";

import { SearchInput } from "@/app/(links)/_components/search-input";
import { useSearch } from "@/app/(links)/use-search";
import { SimpleSidebarLinkButton } from "@/components/simple-sidebar-link-button";
import { Spacer } from "@/components/spacer";
import { Category } from "@/modules/content/category";
import { HuskerLink } from "@/modules/content/link";
import { useFavorites } from "@/modules/favorites/use-favorites";

interface LinksSidebarProps {
  categories: Category[];
  links: HuskerLink[];
}

export function LinksSidebar({ categories, links }: LinksSidebarProps) {
  const { searchQuery, setSearchQuery } = useSearch();
  const { favoritesEnabled } = useFavorites();

  return (
    <>
      <div className="font-display font-black text-lg">Husker</div>

      <Spacer className="h-3" />

      <SearchInput placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

      <Spacer className="h-5" />

      <div className="space-y-2">
        {favoritesEnabled && (
          <div>
            <SimpleSidebarLinkButton href={`/#favorites`} title={"Favorites"} />
          </div>
        )}
        {categories.map((category) => (
          <SimpleSidebarLinkButton key={category.id} href={`/#${category.slug}`} title={category.title} />
        ))}
      </div>

      <Spacer className="h-5" />
      <hr />
      <Spacer className="h-5" />

      <div className="space-y-2">
        <SimpleSidebarLinkButton href={`/about`} title={"About"} />
        <SimpleSidebarLinkButton href={`/contribute`} title={"Contribute"} />
        <SimpleSidebarLinkButton href={`/settings`} title={"Settings"} />
      </div>
    </>
  );
}
