import { MobileNavbar } from "@/components/mobile-navbar";
import { WikiSideBarContent } from "@/app/wiki/_components/wiki-sidebar-content";
import { getWikiCategories } from "@/modules/content/category";
import { ComponentProps } from "react";

export default async function WikiLayout({ children }: ComponentProps<"div">) {
  const categories = await getWikiCategories();

  return (
    <main className="md:flex h-full">
      <div className="hidden md:block">
        <aside className="flex-none sticky top-0 h-screen w-[16rem] lg:w-[22rem] border-r p-4 overflow-y-scroll">
          <WikiSideBarContent categories={categories} />
        </aside>
      </div>

      {/* Mobile navbar and sidebar content */}
      <div className="block md:hidden sticky top-0">
        <MobileNavbar title="Husker Wiki">
          <WikiSideBarContent categories={categories} />
        </MobileNavbar>
      </div>

      <div className="w-full">{children}</div>
    </main>
  );
}
