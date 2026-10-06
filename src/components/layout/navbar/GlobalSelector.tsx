"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { currentRegionLabel, regions } from "./data/regions";
import styles from "./Navbar.module.css";

export interface GlobalSelectorProps {
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
  onNavigate: () => void;
}

export default function GlobalSelector({
  open,
  onToggle,
  onClose,
  onNavigate,
}: GlobalSelectorProps) {
  const pathname = usePathname();

  const handleNavigate = () => {
    onClose();
    onNavigate();
  };

  return (
    <div className={styles.globalSelector}>
      <button
        type="button"
        className={styles.globalSelectorTrigger}
        aria-expanded={open}
        aria-controls="global-region-menu"
        onClick={onToggle}
      >
        <span>{currentRegionLabel(pathname)}</span>

        <span
          className={open ? styles.chevronOpen : styles.chevron}
          aria-hidden="true"
        >
          ↓
        </span>
      </button>

      <div
  id="global-region-menu"
  className={[
    styles.globalSelectorMenu,
    open ? styles.globalSelectorMenuOpen : "",
  ]
    .filter(Boolean)
    .join(" ")}
>
        {regions.map((region) => (
          <Link
            key={region.href}
            href={region.href}
            hrefLang={region.lang}
            aria-current={pathname === region.href ? "page" : undefined}
            className={styles.globalSelectorLink}
            onClick={handleNavigate}
          >
            {region.label}
          </Link>
        ))}
      </div>
    </div>
  );
}