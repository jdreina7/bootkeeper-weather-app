import { createContext } from "react";

type ThemeContextType = {
    theme: string;
    setTheme: (theme: string) => void;
};

export const ThemeContext = createContext({} as ThemeContextType);