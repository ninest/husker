"use client";

import { useCommandMenu } from "@/app/use-command-menu";
import { SimpleSidebarLinkButton } from "@/components/simple-sidebar-link-button";
import { Button } from "@/components/ui/button";
import { siteMap } from "@/map";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { LuChevronLeft, LuPanelRight, LuSearch, LuX } from "react-icons/lu";
import kaleidoscopeLogo from "../public/kaleidoscope-logo.png";
import Image from "next/image";

type LinksNavbarProps = {
  title: string;
  backButtonHref?: string;
  expandedContent?: ReactNode;
};

export function MobileNavbar({ title, backButtonHref, expandedContent }: LinksNavbarProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { setIsCommandMenuOpen } = useCommandMenu();

  return (
    <>
      <header className="bg-background border-b">
        {/* Navbar that is always shown */}
        <div className="p-4 flex items-center space-x-4 justify-between">
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

        {/* Only shown when expanded */}
        {isSidebarOpen && (
          // <div className="pt-2 px-4 pb-6 max-h-[50vh] overflow-y-scroll">
          <div className="max-h-[50vh] overflow-y-scroll">
            <div className="pt-1 px-4 space-x-2 flex items-center">
              {siteMap.topLevel.map((link) => {
                return <SimpleSidebarLinkButton key={link.href} href={link.href} title={link.title} />;
              })}
            </div>
            {expandedContent ? (
              <>
                <hr className="mx-4 mt-4 mb-2" />
                {expandedContent}
                <hr className="mx-4 mt-2 mb-4" />
              </>
            ) : (
              <>
                <hr className="my-3" />
              </>
            )}
            <div className="px-4 pb-4 space-x-2 flex items-center">
              {siteMap.utility.map((link) => {
                return <SimpleSidebarLinkButton key={link.href} href={link.href} title={link.title} />;
              })}
            </div>
            <div className="px-4 pb-4">
              <Link
                href={
                  "https://markefontenot.notion.site/Sponsored-by-Kaleidoscope-4016a87fbd8c4ef182041269c6288ee5?pvs=74"
                }
                className="flex items-center gap-2"
              >
                <Image src={kaleidoscopeLogo} alt="Kaleidoscope logo" className="w-6 h-6" />{" "}
                <div>Sponsored by Kaleidoscope</div>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
