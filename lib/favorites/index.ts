import { Link } from "@/types/category";
import { Favorite } from "@/types/favorites";
import { IconId } from "@/types/icon";

// TODO: we shouldn't need this function, icon should be IconId in favorites, not string
// Favorite[] -> Link[]
export const favoritesToLinks = (favorites: Favorite[]): Link[] =>
  favorites?.map((favorite) => ({
    ...favorite,
    // TODO: if the icon is not in IconId, use filealt as the default
    icon: favorite.icon as IconId,
    description: favorite.description ?? "",
  })) ?? [];
