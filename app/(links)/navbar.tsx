"use client";

import { SearchInput } from "@/app/(links)/search-input";
import { useSearch } from "@/app/(links)/use-search";
import { Button } from "@/components/ui/button";
import { Category } from "@/modules/content/category";
import { HuskerLink } from "@/modules/content/link";
import { useState } from "react";
import { LuSearch, LuX, LuPanelRight } from "react-icons/lu";

interface LinksNavbarProps {
  categories: Category[];
  links: HuskerLink[];
}

export function LinksNavbar({ categories, links }: LinksNavbarProps) {
  const [isSearching, setIsSearching] = useState(false);
  const { searchQuery, setSearchQuery } = useSearch();

  return (
    <>
      <header className="p-4 border-b">
        <div className="flex items-center space-x-4 justify-between">
          <div className="flex items-center justify-between space-x-4">
            <Button
              onClick={() => setIsSearching(!isSearching)}
              variant={"outline"}
              size={"icon"}

            >
              <LuPanelRight />
            </Button>
            <div className="font-display font-black text-lg">Husker</div>
          </div>

          <Button
            onClick={() => setIsSearching(!isSearching)}
            variant={"outline"}
            size={"icon"}
            className="rounded-full"
          >
            {isSearching ? <LuX /> : <LuSearch />}
          </Button>
        </div>
        {isSearching && (
          <div className="mt-2">
            <SearchInput placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          </div>
        )}
      </header>
    </>
  );
}
