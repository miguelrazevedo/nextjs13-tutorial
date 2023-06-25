"use client";

import { createContext, useState, ReactNode } from "react";
import { ThemeContextType } from "../@types/themeContext";

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [mode, setMode] = useState("dark");

    const toggle = () => {
        setMode((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ toggle, mode }}>
            {/* class com o nome theme de modo a que se consiga adicionar transicao 
                o mode é para o tema em si
            */}
            <div className={`theme ${mode}`}>{children}</div>
        </ThemeContext.Provider>
    );
};
