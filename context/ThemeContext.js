import { createContext } from "react";

export const themes = {
  light: {
    type: "light",
    foreground: "#212529",
    background: "#f4f7f9"
  },
  dark: {
    type: "dark",
    foreground: "#dcdcdc",
    background: "#2b2c38"
  }
};

export const ThemeContext = createContext({});
