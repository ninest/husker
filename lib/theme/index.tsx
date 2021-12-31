import {
  ReactNode,
  useState,
  createContext,
  useContext,
  useEffect,
} from "react";

const ThemeContext = createContext<ThemeContextValue>({} as ThemeContextValue);

interface ThemeContextValue {
  toggleTheme: () => void;
  isLightTheme: boolean;
  isDarkTheme: boolean;
}

type Theme = "light" | "dark";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    window.localStorage.setItem("theme", newTheme);
    document.body.dataset.theme = newTheme;
  };

  const isLightTheme = theme === "light";
  const isDarkTheme = theme === "dark";

  useEffect(() => {
    // Get and set initial theme from local storage
    const currentTheme =
      (window.localStorage.getItem("theme") as Theme) || "light";
    setTheme(currentTheme);
    document.body.dataset.theme = currentTheme;
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme,
        isLightTheme,
        isDarkTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
