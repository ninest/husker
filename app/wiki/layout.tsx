import { MobileNavbar } from "@/app/(links)/_components/mobile-navbar";
import { DesktopLinksSidebar } from "@/app/(links)/_components/desktop-sidebar";
import { getLinkCategories } from "@/modules/content/category";
import { getLinks } from "@/modules/content/link";
import { ComponentProps } from "react";

export default async function LinksLayout({ children }: ComponentProps<"div">) {

  return (
    <main className="md:flex h-full">
      <div className="hidden md:block">
        <aside className="flex-none sticky top-0 h-screen w-[16rem] lg:w-[22rem] border-r p-4 overflow-y-scroll">
          wiki sidebar
        </aside>
      </div>

      <div className="block md:hidden sticky top-0">
        <MobileNavbar title="Husker Wiki" />
      </div>

      <div className="w-full">{children}</div>
    </main>
  );
}
