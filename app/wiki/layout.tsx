import { MobileNavbar } from "@/components/mobile-navbar";
import { WikiSideBarContent } from "@/app/wiki/_components/wiki-sidebar-content";
import { getWikiCategories } from "@/modules/content/category";
import { ComponentProps } from "react";
import { getArticles } from "@/modules/content/article";
import Link from "next/link";

export default async function WikiLayout({ children }: ComponentProps<"div">) {
  // const categories = await getWikiCategories();
  // const articles = await getArticles(

  const [categories, articles] = await Promise.all([getWikiCategories(), getArticles()]);

  return (
    <main className="md:flex h-full">
      <div className="hidden md:block">
        <aside className="flex-none sticky top-0 h-screen w-[16rem] lg:w-[22rem] border-r p-4 overflow-y-scroll">
          <Link href="/" className="block font-display font-black text-lg">
            Husker Wiki
          </Link>
          <WikiSideBarContent categories={categories} articles={articles} />
        </aside>
      </div>

      {/* Mobile navbar and sidebar content */}
      <div className="block md:hidden sticky top-0">
        <MobileNavbar
          title="Husker Wiki"
          expandedContent={<WikiSideBarContent categories={categories} articles={articles} />}
        ></MobileNavbar>
      </div>

      <div className="w-full">{children}</div>
    </main>
  );
}
