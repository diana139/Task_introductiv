"use client";

import { useTheme } from "next-themes";
import Button from "./components/button";

export function ThemeToggle(){
    const{theme, setTheme} = useTheme();

    return(
        <div className="fixed bottom-4 right-4 z-50 ">
        <Button onClick={() => setTheme(theme === "light" ? "dark":"light" )} >
            {theme === "light" ? '\u263C' : '\u263D'}
        </Button>
        </div>
    )
}