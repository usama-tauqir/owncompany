"use client";

import NavbarCTA from "./NavbarCTA";
import styles from "./Navbar.module.css";

export interface NavbarActionsProps {
  onNavigate?: () => void;
}

export default function NavbarActions({
  onNavigate,
}: NavbarActionsProps) {
  return (
    <div className={styles.navbarActions}>
      <NavbarCTA
        href="/careers"
        variant="primary"
        onClick={onNavigate}
      >
        Explore Careers
      </NavbarCTA>

      <NavbarCTA
        href="/contact"
        variant="secondary"
        onClick={onNavigate}
      >
        Let&apos;s Talk Business
      </NavbarCTA>
    </div>
  );
}