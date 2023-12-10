"use client";

import { useIsActive } from "@/hooks/use-is-active";
import { siteMap } from "@/map";
import { getIcon } from "@/utils/icon";
import { cn } from "@/utils/style";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";
import { LuBook, LuDumbbell, LuInfo, LuLayoutDashboard, LuNewspaper, LuPlus, LuSettings2 } from "react-icons/lu";

export function NavRail() {
  return (
    <>
      <div className="sticky top-0 flex-none w-[4rem] h-screen border-r flex flex-col justify-between">
        <Link href="/" className="p-4 flex items-center justify-center font-display font-black text-lg">
          H
        </Link>

        <div className="p-2 space-y-2">
          {siteMap.topLevel.map((link) => {
            const Icon = getIcon(link.icon);
            return (
              <LinkButton key={link.href} href={link.href} title={link.title}>
                <Icon />
              </LinkButton>
            );
          })}
        </div>

        <div className="p-2 space-y-2">
          {siteMap.utility.map((link) => {
            const Icon = getIcon(link.icon);
            return (
              <LinkButton key={link.href} href={link.href} title={link.title}>
                <Icon />
              </LinkButton>
            );
          })}
        </div>
      </div>
    </>
  );
}

function LinkButton({ title, href, children }: { title: string; href: string } & ComponentProps<"div">) {
  const isActive = useIsActive({ href, parent: true });

  return (
    <Link
      href={href}
      className={cn("w-full flex items-center justify-center rounded-md py-3 text-lg", {
        "bg-gray-100 dark:bg-gray-800": isActive,
        "hover:bg-gray-200 dark:hover:bg-gray-700": !isActive,
      })}
    >
      {children}
    </Link>
  );
}
