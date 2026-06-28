"use client";

import { useState } from "react";
import styles from "./Navbar.module.css";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    const nextDark = !dark;

    document.documentElement.classList.toggle(
      "dark",
      nextDark,
    );

    setDark(nextDark);
  };

  return (
    <button
      id="dark-light-mode"
      type="button"
      className={styles.themeToggle}
      onClick={toggleTheme}
      aria-label={
        dark
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      aria-pressed={dark}
    >
      <span
        className={[
          styles.themeToggleKnob,
          dark ? styles.themeToggleKnobDark : "",
        ]
          .filter(Boolean)
          .join(" ")}
      />
    </button>
  );
}