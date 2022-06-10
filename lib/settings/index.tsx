import { IconId } from "@/types/icon";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { storage } from "../storage";

const SettingsContext = createContext<SettingsContextValue>(
  {} as SettingsContextValue
);

interface SettingsContextValue {
  settings: Settings;
  setColors: () => void;
  setOpenLinksInNewTab: (openInNewTab: boolean) => void;
  setFavorites: (favorites: Favorite[]) => void;
}

interface Favorite {
  icon: string;
  name: string;
  href: string;
  description?: string;
}

interface Settings {
  // colors: Object;
  openLinksInNewTab: boolean;
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

  const setFavorites = (favorites: Favorite[]) => {
    setSettings({
      ...settings,
      favorites,
    });
  };

  return (
    <SettingsContext.Provider
      value={{ settings, setColors, setOpenLinksInNewTab, setFavorites }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
export const useSettings = () => useContext(SettingsContext);
