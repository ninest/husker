"use client";

import { useIsActive } from "@/hooks/use-is-active";
import { siteMap } from "@/map";
import { getIcon } from "@/utils/icon";
import { cn } from "@/utils/style";
import Link from "next/link";
import { ComponentProps } from "react";

export function NavRail() {
  return (
    <>
      <div className="sticky top-0 flex-none w-[4rem] h-screen border-r flex flex-col justify-between">
        <Link
          href="/"
          className="p-4 flex items-center justify-center font-display font-black text-lg text-gray-700 dark:text-gray-300"
        >
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
          {siteMap.utility
            .filter((link) => link.inSidebar !== false)
            .map((link) => {
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
        // "bg-gray-100 dark:bg-gray-800": isActive,
        "text-gray-800 dark:text-gray-200": isActive,
        "text-gray-400 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800": !isActive,
      })}
    >
      {children}
    </Link>
  );
}
