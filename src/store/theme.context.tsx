import React, { createContext, useContext, useState, ReactNode } from "react";
import { Theme } from "../interfaces/Theme";
type themeContextType = {
  theme: string;
  toggleTheme: (theme: string) => void;
};

const themeContext = createContext<themeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  if (!localStorage.getItem("theme")) localStorage.setItem("theme", Theme.light);

  const [theme, setTheme] = useState<string>(localStorage.getItem("theme")!);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === Theme.light ? Theme.dark : Theme.light));
  };

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export const useTheme = (): themeContextType => {
  const context = useContext(themeContext);
  if (!context) {
    throw new Error("useTheme must be used within a themeProvider");
  }
  return context;
};
