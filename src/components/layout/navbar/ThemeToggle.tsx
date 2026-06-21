"use client";

import { useState } from "react";


export default function ThemeToggle() {

  const [dark, setDark] = useState(false);


  const toggleTheme = () => {

    setDark(!dark);

    document.documentElement.classList.toggle(
      "dark"
    );

  };


  return (

    <button
      id="dark-light-mode"
      onClick={toggleTheme}
      aria-label="View Dark Mode"
      aria-pressed={dark}
      className="
      relative
      flex
      items-center
      w-11
      h-6
      rounded-full
      bg-black
      p-[2px]
      transition-all
      duration-300
      "
    >


      <span

        className={`
        h-5
        w-5
        rounded-full
        bg-white
        transition-transform
        duration-300

        ${
          dark
          ? "translate-x-5"
          : "translate-x-0"
        }

        `}
      />


    </button>

  );
}