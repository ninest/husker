import { HuskerLink } from "@/modules/content/link";
import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export type FavoriteLink = Pick<HuskerLink, "iconSlug" | "title" | "description" | "url">;

const favoritesEnabledAtom = atomWithStorage("favoritesEnabled", false);
const favoritesAtom = atomWithStorage<FavoriteLink[]>("favorites", []);

export function useFavorites() {
  const [favoritesEnabled, setFavoritesEnabled] = useAtom(favoritesEnabledAtom);
  const [favorites, setFavorites] = useAtom(favoritesAtom);

  const toggleFavoritesEnabled = () => setFavoritesEnabled(!favoritesEnabled);

  return { favoritesEnabled, toggleFavoritesEnabled };
}
