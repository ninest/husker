import { showToast } from "@/components/Toast";
import { Favorite } from "@/types/favorites";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";
import { storage } from "../storage";

const SettingsContext = createContext<SettingsContextValue>(
  {} as SettingsContextValue
);

interface SettingsContextValue {
  settings: Settings;
  setColors: () => void;
  setOpenLinksInNewTab: (openInNewTab: boolean) => void;
  setFavoritesEnabled: (enabled: boolean) => void;
  setFavorites: (favorites: Favorite[]) => void;
  setSettings: (settings: Settings) => void;
  addFavorite: (favorite: Favorite) => void;
  isFavorited: (favorite: Pick<Favorite, "href">) => boolean;
  removeFromFavorites: (favorite: Pick<Favorite, "href">) => void;
}

interface Settings {
  // colors: Object;
  openLinksInNewTab: boolean;
  favoritesEnabled: boolean;
  favorites: Favorite[];
}

// For link sets
type Color =
  | "transparent"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "pink";

const defaultSettings: Settings = {
  // colors: {
  openLinksInNewTab: false,
  favoritesEnabled: false,
  favorites: [],
};

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<Settings>({} as Settings);

  useEffect(() => {
    // Get initial settings from local storage
    const loadedSettings = storage.get<Settings>("settings", defaultSettings);
    setSettings(loadedSettings);
  }, []);

  const saveSettings = () => {
    storage.save<Settings>("settings", settings);
  };

  // Auto save settings on change
  useEffect(() => {
    saveSettings();
  }, [settings]);

  const setColors = () => {
    // TODO: implement
  };

  const setOpenLinksInNewTab = (openInNewTab: boolean) => {
    setSettings({
      ...settings,
      openLinksInNewTab: openInNewTab,
    });
  };

  const setFavoritesEnabled = (enabled: boolean) => {
    setSettings({
      ...settings,
      favoritesEnabled: enabled,
    });
  };

  const setFavorites = (favorites: Favorite[]) => {
    setSettings({
      ...settings,
      favorites,
    });
  };

  const addFavorite = (favorite: Favorite) => {
    setFavoritesEnabled(true);
    setSettings((settings) => ({
      ...settings,
      favorites: [...settings.favorites, favorite],
    }));

    showToast({ text: "A favorite has been added!" });
  };

  const isFavorited = (favorite: Pick<Favorite, "href">): boolean => {
    return !!settings.favorites?.find(
      (exisitngFavorite) => exisitngFavorite.href == favorite.href
    );
  };

  const removeFromFavorites = (favorite: Pick<Favorite, "href">) => {
    const newFavorites = settings.favorites.filter(
      (existingFavorite) => existingFavorite.href !== favorite.href
    );

    setSettings((settings) => ({
      ...settings,
      favorites: newFavorites,
    }));

    showToast({ text: "A favorite has been removed" });
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        setColors,
        setOpenLinksInNewTab,
        setFavoritesEnabled,
        setFavorites,
        setSettings,
        addFavorite,
        isFavorited,
        removeFromFavorites,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
export const useSettings = () => useContext(SettingsContext);
