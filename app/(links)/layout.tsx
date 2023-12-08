import { LinksNavbar } from "@/app/(links)/navbar";
import { LinksSidebar } from "@/app/(links)/sidebar";
import { Spacer } from "@/components/spacer";
import { Input } from "@/components/ui/input";
import { getLinkCategories } from "@/modules/content/category";
import { getLinks } from "@/modules/content/link";
import Link from "next/link";
import { ComponentProps } from "react";
import { LuSearch } from "react-icons/lu";

export default async function LinksLayout({ children }: ComponentProps<"div">) {
  const [linkCategories, links] = await Promise.all([getLinkCategories(), getLinks()]);

  return (
    <main className="md:flex h-full">
      <div className="hidden md:block">
        <LinksSidebar categories={linkCategories} links={links} />
      </div>

      <div className="block md:hidden">
        <LinksNavbar categories={linkCategories} links={links} />
      </div>

      <div className="w-full">{children}</div>
    </main>
  );
}
