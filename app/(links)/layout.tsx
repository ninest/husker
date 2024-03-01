import { DesktopLinksSidebarContent } from "@/app/(links)/_components/desktop-links-sidebar-content";
import { MobileNavbar } from "@/components/mobile-navbar";
import { getLinkCategories } from "@/modules/content/category";
import { getLinks } from "@/modules/content/link";
import { ReactNode } from "react";

export default async function LinksLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [linkCategories, links] = await Promise.all([
    getLinkCategories(),
    getLinks(),
  ]);

  return (
    <main className="md:flex h-full">
      <div className="hidden md:block">
        <aside className="flex-none sticky top-0 h-screen w-[16rem] lg:w-[22rem] border-r p-4 overflow-auto">
          <DesktopLinksSidebarContent
            categories={linkCategories}
            links={links}
          />
        </aside>
      </div>

      <div className="block md:hidden sticky top-0 z-50">
        <MobileNavbar title="Husker" />
      </div>

      <div className="w-full">{children}</div>
    </main>
  );
}
