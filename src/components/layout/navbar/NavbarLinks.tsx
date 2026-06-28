"use client";

import type { MenuId } from "./mega-menu/types";
import MegaMenuTrigger from "./mega-menu/MegaMenuTrigger";
import styles from "./Navbar.module.css";

export interface NavbarLinksProps {
  activeMenu: MenuId | null;
  onMenuToggle: (menuId: MenuId) => void;
  onMenuOpen: (menuId: MenuId) => void;
  onMenuClose: () => void;
}

const navigationItems: Array<{
  id: MenuId;
  label: string;
}> = [
  {
    id: "what-we-do",
    label: "What we do",
  },
  {
    id: "who-we-help",
    label: "Who we help",
  },
  {
    id: "who-we-are",
    label: "Who We Are",
  },
  {
    id: "how-we-deliver",
    label: "How we deliver",
  },
  {
    id: "join-devsinc",
    label: "Join devsinc",
  },
];

export default function NavbarLinks({
  activeMenu,
  onMenuToggle,
  onMenuOpen,
  onMenuClose,
}: NavbarLinksProps) {
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