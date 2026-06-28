"use client";

import styles from "../Navbar.module.css";

export interface MegaMenuBackdropProps {
  open: boolean;
  onClick: () => void;
}

export default function MegaMenuBackdrop({
  open,
  onClick,
}: MegaMenuBackdropProps) {
  return (
    <button
      type="button"
      className={`${styles.megaMenuBackdrop} ${
        open ? styles.megaMenuBackdropOpen : ""
      }`}
      aria-label="Close navigation menu"
      aria-hidden={!open}
      tabIndex={open ? 0 : -1}
      onClick={onClick}
    />
  );
}