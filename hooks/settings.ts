import { showToast } from "@/components/util/Toast";
import { Favorite } from "@/types/favorites";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const themes = ["light", "dark"] as const;
type Theme = typeof themes[number];

interface Settings {
  theme: Theme;
  openLinksInNewTab: boolean;
  favoritesEnabled: boolean;
  favorites: Favorite[];
  secretSettingsEnabled?: boolean;
  secretSettings?: {
    augmentedTitle?: string;
  };
}

const settingsAtom = atomWithStorage<Settings>("settings", {
  theme: "dark",
  openLinksInNewTab: false,
  favoritesEnabled: false,
  favorites: [],
  secretSettingsEnabled: false,
  secretSettings: {},
});

export const useSettings = () => {
  const [settings, setSettings] = useAtom(settingsAtom);

  const mergeSettings = (newSettings: Partial<Settings>) => {
    setSettings({ ...settings, ...newSettings });
  };

  return { settings, setSettings, mergeSettings };
};

export const useTheme = () => {
  const { settings, mergeSettings } = useSettings();

  const setTheme = (theme: Theme) => {
    mergeSettings({ theme });
    document.documentElement.className = theme;
  };

  const toggleTheme = () => {
    if (settings.theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const isLightTheme = settings.theme == "light";
  const isDarkTheme = settings.theme == "dark";

  return {
    setTheme,
    toggleTheme,
    isLightTheme,
    isDarkTheme,
  };
};

export const useFavorites = () => {
  const { settings, mergeSettings } = useSettings();

  const setFavoritesEnabled = (favoritesEnabled: boolean) => {
    mergeSettings({ favoritesEnabled });
  };

  const setFavorites = (favorites: Favorite[]) => mergeSettings({ favorites });

  const addFavorite = (newFavorite: Favorite) => {
    mergeSettings({
      favoritesEnabled: true,
      favorites: [...settings.favorites, newFavorite],
    });
    showToast({ text: "Favorite added" });
  };

  const isFavorited = (favorite: Pick<Favorite, "href">) =>
    !!settings?.favorites?.find(
      (existingFavorite) => existingFavorite.href === favorite.href
    );

  const removeFavorite = (favorite: Pick<Favorite, "href">) => {
    mergeSettings({
      favorites: settings.favorites.filter(
        (existingFavorite) => existingFavorite.href !== favorite.href
      ),
    });
    showToast({ text: "Favorite removed" });
  };

  return {
    setFavoritesEnabled,
    setFavorites,
    addFavorite,
    isFavorited,
    removeFavorite,
  };
};

export const useSecretSettings = () => {
  const { settings, mergeSettings } = useSettings();
  const secretSettings = settings.secretSettings;

  const mergeSecretSettings = (
    newSecretSettings: Partial<Settings["secretSettings"]>
  ) => {
    mergeSettings({
      secretSettings: {
        ...settings.secretSettings,
        ...newSecretSettings,
      },
    });
  };

  const setSecretSettingsEnabled = (secretSettingsEnabled: boolean) => {
    mergeSettings({ secretSettingsEnabled });
    if (secretSettingsEnabled) showToast({ text: "Secret settings enabled" });
    else showToast({ text: "Secret settings disabled" });
  };

  const setAugmentedTitle = (augmentedTitle: string) => {
    mergeSecretSettings({
      augmentedTitle,
    });
  };

  return {
    secretSettingsEnabled: settings.secretSettingsEnabled,
    secretSettings,
    setSecretSettingsEnabled,
    setAugmentedTitle,
  };
};
