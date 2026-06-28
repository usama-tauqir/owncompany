"use client";

import type { ReactNode } from "react";
import styles from "../Navbar.module.css";

export interface MobileDrawerProps {
  id: string;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function MobileDrawer({
  id,
  open,
  onClose,
  children,
}: MobileDrawerProps) {
  return (
    <div
      className={[
        styles.mobileDrawerRoot,
        open ? styles.mobileDrawerRootOpen : "",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-hidden={!open}
    >
      <button
        type="button"
        className={styles.mobileDrawerBackdrop}
        aria-label="Close mobile navigation"
        onClick={onClose}
      />

      <aside
        id={id}
        className={[
          styles.mobileDrawer,
          open ? styles.mobileDrawerOpen : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {children}
      </aside>
    </div>
  );
}