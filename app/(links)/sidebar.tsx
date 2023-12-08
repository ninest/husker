"use client";

import { SearchInput } from "@/app/(links)/search-input";
import { useSearch } from "@/app/(links)/use-search";
import { Spacer } from "@/components/spacer";
import { Category } from "@/modules/content/category";
import { HuskerLink } from "@/modules/content/link";
import Link from "next/link";

interface LinksSidebarProps {
  categories: Category[];
  links: HuskerLink[];
}

export function LinksSidebar({ categories }: LinksSidebarProps) {
  const { searchQuery, setSearchQuery } = useSearch();

  return (
    <>
      <aside className="flex-none sticky top-0 h-screen w-[16rem] lg:w-[22rem] bg-gray-50d border-r p-4 overflow-y-scroll">
        <div className="font-display font-black text-lg">Husker</div>

        <Spacer className="h-3" />

        <SearchInput placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

        <Spacer className="h-8" />

        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id}>
              <Link
                href={`/#${category.slug}`}
                className="py-1 -m-1 px-2 block font-medium rounded-md text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {category.title}
              </Link>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
