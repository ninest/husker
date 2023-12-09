import { LinksNavbar } from "@/app/(links)/_components/navbar";
import { LinksSidebar } from "@/app/(links)/_components/sidebar";
import { getLinkCategories } from "@/modules/content/category";
import { getLinks } from "@/modules/content/link";
import { ComponentProps } from "react";

export default async function LinksLayout({ children }: ComponentProps<"div">) {
  const [linkCategories, links] = await Promise.all([getLinkCategories(), getLinks()]);

  return (
    <main className="md:flex h-full">
      <div className="hidden md:block">
        <aside className="flex-none sticky top-0 h-screen w-[16rem] lg:w-[22rem] border-r p-4 overflow-y-scroll">
          <LinksSidebar categories={linkCategories} links={links} />
        </aside>
      </div>

      <div className="block md:hidden sticky top-0">
        <LinksNavbar categories={linkCategories} links={links} />
      </div>

      <div className="w-full">{children}</div>
    </main>
  );
}
