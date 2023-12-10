"use client";

import { HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { cn } from "@/utils/style";
import { HoverCard } from "@radix-ui/react-hover-card";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";
import {
  LuHome,
  LuBook,
  LuDumbbell,
  LuInfo,
  LuLayoutDashboard,
  LuNewspaper,
  LuSettings2,
  LuPlus,
  LuPlusCircle,
  LuPlusSquare,
} from "react-icons/lu";

export function NavRail() {
  return (
    <>
      <div className="sticky top-0 flex-none w-[4rem] h-screen border-r flex flex-col justify-between">
        <Link href="/" className="p-4 flex items-center justify-center font-display font-black text-lg">
          H
        </Link>

        <div className="p-2 space-y-2">
          <LinkButton href="/" title="Links">
            {/* Which one looks better? LuHome or LuLayoutDashboard? */}
            <LuLayoutDashboard />
          </LinkButton>
          <LinkButton href="/courses" title="Courses">
            <LuBook />
          </LinkButton>
          <LinkButton href="/wiki" title="Wiki">
            <LuNewspaper />
          </LinkButton>
          <LinkButton href="/gym" title="Gym">
            <LuDumbbell />
          </LinkButton>
        </div>

        <div className="p-2 space-y-2">
          <LinkButton href="/contribute" title="Contribute">
            <LuPlus />
          </LinkButton>
          <LinkButton href="/about" title="About">
            <LuInfo />
          </LinkButton>
          <LinkButton href="/settings" title="Settings">
            <LuSettings2 />
          </LinkButton>
        </div>
      </div>
    </>
  );
}

function LinkButton({ title, href, children }: { title: string; href: string } & ComponentProps<"div">) {
  const pathname = usePathname();
  const isActive = pathname.split("?")[0].split("#")[0] === href;

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
