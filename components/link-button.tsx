"use client";

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { IconSlug, getIcon } from "@/utils/icon";
import Link from "next/link";

interface LinkButtonProps {
  iconSlug: IconSlug | string;
  title: string;
  href: string;
}

export function LinkButton({ iconSlug, title, href }: LinkButtonProps) {
  const Icon = getIcon(iconSlug);
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <Link
          href={href}
          target="_blank"
          className="flex items-center space-x-4 rounded-md bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-3"
        >
          <div>
            <Icon className="text-sm text-gray-500 dark:text-gray-500" />
          </div>

          <div className="text-gray-500 dark:text-gray-400 font-semibold text-sm">{title}</div>
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
