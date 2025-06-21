"use client";
import { useTheme } from "@/contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative inline-flex h-10 w-10 items-center justify-center rounded-full
        transition-all duration-300 ease-in-out
        ${
          isDark
            ? "bg-gray-800 hover:bg-gray-700 text-gray-400"
            : "bg-gray-200 hover:bg-gray-300 text-gray-800"
        }
        hover:scale-110 active:scale-95
        border-2 ${isDark ? "border-gray-600" : "border-gray-400"}
      `}
      aria-label="Toggle theme"
    >
      <div className="relative w-[18px] h-[18px] flex items-center justify-center">
        <Sun
          size={18}
          className={`
            absolute transition-all duration-300 ease-in-out
            ${
              isDark
                ? "opacity-0 rotate-90 scale-0"
                : "opacity-100 rotate-0 scale-100"
            }
          `}
        />
        <Moon
          size={18}
          className={`
            absolute transition-all duration-300 ease-in-out
            ${
              isDark
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 -rotate-90 scale-0"
            }
          `}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
