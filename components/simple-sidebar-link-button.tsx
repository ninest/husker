"use client";

import { useIsActive } from "@/hooks/use-is-active";
import { cn } from "@/utils/style";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SimpleSidebarLinkButtonProps {
  href: string;
  title: string;
}

export function SimpleSidebarLinkButton({ href, title }: SimpleSidebarLinkButtonProps) {
  const isActive = useIsActive({ href });

  return (
    <>
      <div>
        <Link
          href={href}
          className={cn("py-1 -m-1 px-2 block font-medium rounded-md text-sm", {
            "hover:bg-gray-200 dark:hover:bg-gray-700": !isActive,
            "bg-gray-100 dark:bg-gray-800": isActive,
          })}
        >
          {title}
        </Link>
      </div>
    </>
  );
}
