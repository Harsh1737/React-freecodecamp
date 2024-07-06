import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode : "light",
    darkTheme : () => {},
    lightTheme : () => {},
});

export const ThemeProvider = ThemeContext.Provider;
// This is the provider of the context i.e stores the data
//Exporting a variable

export default function useTheme() {
    return useContext(ThemeContext)
}
// avoids the need to import ThemeContext in every component that uses it 