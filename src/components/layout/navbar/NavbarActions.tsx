"use client";

import { useLocale } from "@/i18n/useLocale";

import NavbarCTA from "./NavbarCTA";
import styles from "./Navbar.module.css";

export interface NavbarActionsProps {
  onNavigate?: () => void;
}

export default function NavbarActions({ onNavigate }: NavbarActionsProps) {
  const { dict } = useLocale();

  return (
    <div className={styles.navbarActions}>
      <NavbarCTA href="/career" variant="primary" onClick={onNavigate}>
        {dict.footer.careers}
      </NavbarCTA>

      <NavbarCTA href="/contact" variant="secondary" onClick={onNavigate}>
        {dict.nav.letsTalkBusiness}
      </NavbarCTA>
    </div>
  );
}
