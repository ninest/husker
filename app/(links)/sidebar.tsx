"use client";

import { SearchInput } from "@/app/(links)/search-input";
import { useSearch } from "@/app/(links)/use-search";
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
            <SidebarButton href={`/#favorites`} title={"Favorites"} />
          </div>
        )}
        {categories.map((category) => (
          <SidebarButton key={category.id} href={`/#${category.slug}`} title={category.title} />
        ))}
      </div>

      <Spacer className="h-5" />
      <hr />
      <Spacer className="h-5" />

      <div className="space-y-2">
        <SidebarButton href={`/`} title={"About"} />
        <SidebarButton href={`/`} title={"Contribute"} />
        <SidebarButton href={`/`} title={"Settings"} />
      </div>
    </>
  );
}

interface SidebarButtonProps {
  href: string;
  title: string;
}

export function SidebarButton({ href, title }: SidebarButtonProps) {
  return (
    <>
      <div>
        <Link
          href={href}
          className="py-1 -m-1 px-2 block font-medium rounded-md text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {title}
        </Link>
      </div>
    </>
  );
}
