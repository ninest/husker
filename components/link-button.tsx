"use client";

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import Link from "next/link";

interface LinkButtonProps {
  title: string;
  href: string;
}

export function LinkButton({ title, href }: LinkButtonProps) {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <Link
          href={href}
          target="_blank"
          className="block rounded-md bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-200 border font-medium p-3"
        >
          {title}
        </Link>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem inset asChild>
          <a href={href} target="_blank">
            Open in new tab
          </a>
        </ContextMenuItem>
        <ContextMenuItem inset asChild>
          <a href={href}>Open in current tab</a>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem inset>Copy link</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked={false}>Favorite</ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
