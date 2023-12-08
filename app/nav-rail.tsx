"use client";

import { cn } from "@/utils/style";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";
import { FaPaw, FaListUl } from "react-icons/fa6";
import { LuLayoutDashboard, LuBook } from "react-icons/lu";

export function NavRail() {
  return (
    <>
      <div className="flex-none w-[4rem] h-screen border-r">
        <div className="p-4 flex items-center justify-center font-display font-black text-lg">
          {/* <FaPaw className="text-lg" /> */}H
        </div>

        <hr />

        <div className="space-y-0">
          <LinkButton href="/" title="Links">
            <LuLayoutDashboard />
          </LinkButton>
          <LinkButton href="/courses" title="Courses">
            <LuBook />
          </LinkButton>
        </div>
      </div>
    </>
  );
}

function LinkButton({ title, href, children }: { title: string; href: string } & ComponentProps<"div">) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={cn("w-full flex items-center justify-center py-3 text-lg", {
        "bg-gray-200": isActive,
        "hover:bg-gray-100": !isActive,
      })}
    >
      {children}
    </Link>
  );
}
