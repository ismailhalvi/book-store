import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme;
    }

    const preferDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    return preferDark ? "dark" : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem("theme", theme);
}, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";

      localStorage.setItem("theme", newTheme);

      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};