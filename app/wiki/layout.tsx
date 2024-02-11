import { MobileNavbar } from "@/components/mobile-navbar";
import { WikiSideBarContent } from "@/app/wiki/_components/wiki-sidebar-content";
import { getWikiCategories } from "@/modules/content/category";
import { ComponentProps } from "react";
import { getArticles } from "@/modules/content/article";
import Link from "next/link";
import { Metadata } from "next";
import { createOgImageUrl } from "@/app/api/og/og-functions";

export const metadata: Metadata = {
  title: "Wiki",
  openGraph: {
    images: [{ url: createOgImageUrl({ title: "Wiki" }) }],
  },
};

export default async function WikiLayout({ children }: ComponentProps<"div">) {
  const [categories, articles] = await Promise.all([getWikiCategories(), getArticles()]);

  return (
    <main className="md:flex h-full">
      <div className="hidden md:block">
        <aside className="flex-none sticky top-0 h-screen w-[16rem] lg:w-[22rem] border-r overflow-y-scroll">
          <div className="px-4 pt-4">
            <Link href="/" className="block font-display font-black text-lg">
              Husker Wiki
            </Link>
          </div>
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
