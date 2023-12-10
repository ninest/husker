"use client";

import { SearchInput } from "@/app/(links)/_components/search-input";
import { useSearch } from "@/app/(links)/use-search";
import { useCommandMenu } from "@/app/use-command-menu";
import { SimpleSidebarLinkButton } from "@/components/simple-sidebar-link-button";
import { Spacer } from "@/components/spacer";
import { Category } from "@/modules/content/category";
import { HuskerLink } from "@/modules/content/link";
import { useFavorites } from "@/modules/favorites/use-favorites";
import Link from "next/link";

interface LinksSidebarProps {
  categories: Category[];
  links: HuskerLink[];
}

export function LinksSidebar({ categories, links }: LinksSidebarProps) {
  const { favoritesEnabled } = useFavorites();
  const { setIsCommandMenuOpen } = useCommandMenu();

  return (
    <>
      <Link href="/" className="block font-display font-black text-lg">
        Husker
      </Link>

      <Spacer className="h-3" />

      <SearchInput placeholder="Search" onClick={() => setIsCommandMenuOpen(true)} />

      <Spacer className="h-5" />

      <div className="space-y-2">
        {favoritesEnabled && (
          <div>ss
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
