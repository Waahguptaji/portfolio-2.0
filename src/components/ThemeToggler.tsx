"use client";

import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  // Ensure component is mounted before rendering to handle hydration errors
  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Prevents rendering until after mount

  return (
    <label className="swap swap-rotate mr-3">
      <input
        type="checkbox"
        checked={resolvedTheme === "dark"}
        onChange={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      />

      <FiSun className="swap-off h-10 w-10 cursor-pointer text-yellow-500" />

      <FiMoon className="swap-on h-10 w-10 cursor-pointer text-gray-600" />
    </label>
  );
}
