"use client";

import { createContext, useState } from "react";

type ThemeContextType = {
    isDarkMode: Boolean;
    toggleDarkMode: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ( { children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);

        document.documentElement.classList.toggle("dark", !isDarkMode);
    };
    
    return (
        <ThemeContext.Provider value={{isDarkMode, toggleDarkMode}}>
            { children }
        </ThemeContext.Provider>
    )
}