// components/DarkModeToggle.jsx
import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <Button
      onClick={() => setDarkMode(!darkMode)}
      className="flex items-center gap-4 shadow-none px-3 py-3 bg-white dark:bg-blue-gray-900 text-black dark:text-white transition-colors duration-300"
      role="button"
      tabIndex={0}
    >
      {darkMode ? (
        <>
          <SunIcon className="h-5 w-5" />
          <span>Light</span>
        </>
      ) : (
        <>
          <MoonIcon className="h-5 w-5" />
            <span>Dark</span>
        </>
      )}
    </Button>
  );
}
