"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export function ThemeSynchronizer() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!resolvedTheme) return;

    // Save choice to cookie for flawless Next.js SSR on next load
    document.cookie = `theme=${resolvedTheme}; path=/; max-age=31536000`;

    // Synchronize the favicon with the active Next-Themes resolved theme
    const favicon = document.querySelector("link[type='image/svg+xml']");
    if (favicon) {
      favicon.setAttribute("href", resolvedTheme === "dark" ? "/favicon-dark.svg" : "/favicon-light.svg");
    }

    // Synchronize the theme-color meta tag
    let metaTheme = document.querySelector("meta[name='theme-color']");
    if (!metaTheme) {
      metaTheme = document.createElement("meta");
      metaTheme.setAttribute("name", "theme-color");
      document.head.appendChild(metaTheme);
    }
    metaTheme.setAttribute("content", resolvedTheme === "dark" ? "#111111" : "#ffffff");
  }, [resolvedTheme]);

  return null;
}
