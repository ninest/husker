import { HuskerLink } from "@/modules/content/link";
import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export type FavoriteLink = Pick<HuskerLink, "id" | "iconSlug" | "title" | "description" | "url">;

const favoritesEnabledAtom = atomWithStorage("favoritesEnabled", false);
const favoritesAtom = atomWithStorage<FavoriteLink[]>("favorites", []);

export function useFavorites() {
  const [favoritesEnabled, setFavoritesEnabled] = useAtom(favoritesEnabledAtom);
  const [favorites, setFavorites] = useAtom(favoritesAtom);

  const toggleFavoritesEnabled = () => setFavoritesEnabled(!favoritesEnabled);

  const addToFavorite = (link: FavoriteLink) => {
    setFavorites([...favorites, link]);
  };

  const removeFromFavorites = (id: string) => {
    setFavorites(favorites.filter((favorite) => favorite.id !== id));
  };

  const isFavorited = (id: string) => !!favorites.find((favorite) => favorite.id === id);

  return { favoritesEnabled, toggleFavoritesEnabled, favorites, addToFavorite, removeFromFavorites, isFavorited };
}
