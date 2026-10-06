"use client";

import { siteConfig } from "@/config/site";
import { useLocale } from "@/i18n/useLocale";

import type { MenuId } from "./mega-menu/types";
import MegaMenuTrigger from "./mega-menu/MegaMenuTrigger";
import styles from "./Navbar.module.css";

export interface NavbarLinksProps {
  activeMenu: MenuId | null;
  onMenuToggle: (menuId: MenuId) => void;
  onMenuOpen: (menuId: MenuId) => void;
  onMenuClose: () => void;
}

export default function NavbarLinks({
  activeMenu,
  onMenuToggle,
  onMenuOpen,
  onMenuClose,
}: NavbarLinksProps) {
  const { dict } = useLocale();

  const navigationItems: Array<{ id: MenuId; label: string }> = [
    { id: "what-we-do", label: dict.nav.whatWeDo },
    { id: "who-we-help", label: dict.nav.whoWeHelp },
    { id: "who-we-are", label: dict.nav.whoWeAre },
    { id: "how-we-deliver", label: dict.nav.howWeDeliver },
    { id: "join", label: `${dict.nav.join} ${siteConfig.shortName}` },
  ];

  return (
    <nav
      className={styles.navbarLinks}
      aria-label="Primary navigation"
    >
      {navigationItems.map((item) => (
        <MegaMenuTrigger
          key={item.id}
          menuId={item.id}
          label={item.label}
          active={activeMenu === item.id}
          onToggle={() => onMenuToggle(item.id)}
          onOpen={() => onMenuOpen(item.id)}
          onClose={onMenuClose}
        />
      ))}
    </nav>
  );
}