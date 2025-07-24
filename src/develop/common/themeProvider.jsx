import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Invert the logic here:
    // return true if theme is light or system prefers light
    return (
      localStorage.getItem("theme") === "light" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: light)").matches)
    );
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      // When isDark=true, add light mode class (remove dark)
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      // When isDark=false, add dark mode class
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
