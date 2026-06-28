"use client";

import type { KeyboardEvent } from "react";
import type { MenuId } from "./types";
import styles from "../Navbar.module.css";

export interface MegaMenuTriggerProps {
  menuId: MenuId;
  label: string;
  active: boolean;
  onToggle: () => void;
  onOpen: () => void;
  onClose: () => void;
}

export default function MegaMenuTrigger({
  menuId,
  label,
  active,
  onToggle,
  onClose,
}: MegaMenuTriggerProps) {
  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
  ) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
    }

    if (event.key === "ArrowDown" && !active) {
      event.preventDefault();
      onToggle();
    }
  };

  return (
    <button
      id={`mega-menu-trigger-${menuId}`}
      type="button"
      className={[
        styles.megaMenuTrigger,
        active ? styles.megaMenuTriggerActive : "",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-expanded={active}
      aria-controls={`mega-menu-${menuId}`}
      aria-haspopup="true"
      onClick={onToggle}
      onKeyDown={handleKeyDown}
    >
      <span>{label}</span>

      <svg
        className={styles.megaMenuTriggerIcon}
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3 6L8 11L13 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}