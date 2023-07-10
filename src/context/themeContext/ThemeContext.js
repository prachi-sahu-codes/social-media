import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(
    localStorage.getItem("theme mode") === "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme mode", darkTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", darkTheme);
  }, [darkTheme]);

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
