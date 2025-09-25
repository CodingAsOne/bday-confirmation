import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface Theme {
  primary: string;
  pageBg: string;
  navbarBg: string;
  navButton: string;
  hover: string;
  mobileMenuBg: string;
}

const defaultTheme: Theme = {
  primary: "#c47dffe1",
  pageBg: "white",
  navbarBg: "white",
  navButton: "black",
  hover: "#c47dffe1",
  mobileMenuBg: "white",
};

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({
  theme: defaultTheme,
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
