import { LinksSidebar } from "@/app/(links)/sidebar";
import { Spacer } from "@/components/spacer";
import { Input } from "@/components/ui/input";
import { getLinkCategories } from "@/modules/content/category";
import Link from "next/link";
import { ComponentProps } from "react";
import { LuSearch } from "react-icons/lu";

export default async function LinksLayout({ children }: ComponentProps<"div">) {
  const linkCategories = await getLinkCategories();

  return (
    <main className="flex h-full">
      <LinksSidebar categories={linkCategories} />
      <div className="w-full p-4">{children}</div>
    </main>
  );
}
