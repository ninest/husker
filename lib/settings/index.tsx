import { createContext, ReactNode, useState } from "react";

const SettingsContext = createContext<SettingsContextValue>(
  {} as SettingsContextValue
);

interface SettingsContextValue {
  setColors: () => void;
}

interface Settings {
  colors: Object;
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

const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<Settings>({} as Settings);

  const setColors = () => {};

  return (
    // <SettingsContext.Provider value={{}}>{children}</SettingsContext.Provider>
  );
};
