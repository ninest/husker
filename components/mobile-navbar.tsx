"use client";

import { MobileSidebar } from "@/components/mobile-sidebar";
import { useCommandMenu } from "@/app/use-command-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ComponentProps, useState } from "react";
import { LuChevronLeft, LuPanelRight, LuSearch, LuX } from "react-icons/lu";

type LinksNavbarProps = ComponentProps<"div"> & {
  title: string;
  backButtonHref?: string;
};

export function MobileNavbar({ title, backButtonHref, children }: LinksNavbarProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { setIsCommandMenuOpen } = useCommandMenu();

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
            <Link href="/" className="block font-display font-black text-lg">
              {title}
            </Link>
          </div>

          <Button onClick={() => setIsCommandMenuOpen(true)} variant={"outline"} size={"icon"} className="rounded-full">
            <LuSearch />
          </Button>
        </div>

        {isSidebarOpen && (
          <div className="mt-4">
            <MobileSidebar>{children}</MobileSidebar>
          </div>
        )}
      </header>
    </>
  );
}
