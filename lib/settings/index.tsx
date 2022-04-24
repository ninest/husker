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
  setColors: () => void;
  setOpenLinksInNewTab: (openInNewTab: boolean) => void;
}

interface Settings {
  // colors: Object;
  openLinksInNewTab: boolean;
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
};

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<Settings>({} as Settings);

  useEffect(() => {
    // Get initial settings from local storage
    const loadedSettings = storage.get<Settings>("settings", defaultSettings);
    setSettings(loadedSettings);
  });

  const saveSettings = () => {
    storage.save<Settings>("settings", settings);
  };

  const setColors = () => {
    // TODO: implement
  };

  const setOpenLinksInNewTab = (openInNewTab: boolean) => {
    setSettings({
      ...settings,
      openLinksInNewTab: openInNewTab,
    });
    saveSettings();
  };

  return (
    <SettingsContext.Provider value={{ setColors, setOpenLinksInNewTab }}>
      {children}
    </SettingsContext.Provider>
  );
};
export const useSettings = () => useContext(SettingsContext);
