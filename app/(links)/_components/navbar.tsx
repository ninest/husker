"use client";

import { MobileSidebar } from "@/app/(links)/_components/mobile-sidebar";
import { SearchInput } from "@/app/(links)/_components/search-input";
import { useSearch } from "@/app/(links)/use-search";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LuChevronLeft, LuPanelRight, LuSearch, LuX } from "react-icons/lu";

interface LinksNavbarProps {
  backButtonHref?: string;
}

export function LinksNavbar({ backButtonHref }: LinksNavbarProps) {
  const router = useRouter();
  const [isSearching, setIsSearching] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { searchQuery, setSearchQuery } = useSearch();

  return (
    <>
      <header className="bg-background p-4 border-b">
        <div className="flex items-center space-x-4 justify-between">
          <div className="flex items-center justify-between space-x-4">
            <Button onClick={() => setIsSidebarOpen(!isSidebarOpen)} variant={"outline"} size={"icon"}>
              {isSidebarOpen ? <LuX /> : <LuPanelRight />}
            </Button>
            {!!backButtonHref && (
              <Button variant={"outline"} size={"icon"} asChild>
                <Link href={backButtonHref}>
                  <LuChevronLeft />
                </Link>
              </Button>
            )}
            <div className="font-display font-black text-lg">Husker</div>
          </div>

          <Button
            onClick={() => {
              if (isSearching) setIsSearching(false);
              else {
                router.push("/");
                setIsSearching(true);
              }
            }}
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
        {isSidebarOpen && (
          <div className="mt-4">
            <MobileSidebar />
          </div>
        )}
      </header>
    </>
  );
}
