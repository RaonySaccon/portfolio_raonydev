import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const isLight = theme === "light";

  function alternateTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme, alternateTheme, setTheme, isLight }}>
      {children}
    </ThemeContext.Provider>
  );
}