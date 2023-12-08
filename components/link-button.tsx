"use client";

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { HuskerLink } from "@/modules/content/link";
import { useFavorites } from "@/modules/favorites/use-favorites";
import { IconSlug, getIcon } from "@/utils/icon";
import Link from "next/link";

interface LinkButtonProps {
  huskerLink: Pick<HuskerLink, "id" | "iconSlug" | "title" | "url" | "description">;
}

export function LinkButton({ huskerLink }: LinkButtonProps) {
  const Icon = getIcon(huskerLink.iconSlug);
  const { addToFavorite, removeFromFavorites, isFavorited } = useFavorites();
  const isFavorite = isFavorited(huskerLink.id);

  return (
    <ContextMenu >
      <ContextMenuTrigger asChild>
        <Link
          href={huskerLink.url}
          target="_blank"
          className="flex items-center space-x-4 rounded-md bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-3 select-none"
        >
          <div>
            <Icon className="text-sm text-gray-500 dark:text-gray-500" />
          </div>

          <div className="text-gray-500 dark:text-gray-400 font-semibold text-sm">{huskerLink.title}</div>
        </Link>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem inset asChild>
          <a href={huskerLink.url} target="_blank">
            Open in new tab
          </a>
        </ContextMenuItem>
        <ContextMenuItem inset asChild>
          <a href={huskerLink.url}>Open in current tab</a>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem inset>Copy link</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem
          checked={isFavorite}
          onClick={() => {
            if (isFavorite) removeFromFavorites(huskerLink.id);
            else addToFavorite(huskerLink);
          }}
        >
          Favorite
        </ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
