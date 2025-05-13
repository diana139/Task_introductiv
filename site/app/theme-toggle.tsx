
"use client";

import { useTheme } from "next-themes";
import Button from "./components/button";

interface ThemeToggleProps {
  fixed?: boolean;
  variant?: "navbar" | "mode";
}

export function ThemeToggle({ fixed = false, variant = "mode" }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  const icon = theme === "light" ? '\u263C' : '\u263D';

  const className =
    variant === "mode"
      ? "px-4 py-2 text-xl rounded-full shadow-md bg-white dark:bg-gray-800"
      : "text-lg hover:text-yellow-400 dark:hover:text-blue-300";

  return (
    <div className={fixed ? "fixed bottom-4 right-4 z-50" : ""}>
      <Button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={className}
      >
        {icon}
      </Button>
    </div>
  );
}
