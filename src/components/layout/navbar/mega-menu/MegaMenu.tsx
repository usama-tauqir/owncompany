"use client";

import type { MenuId } from "./types";
import CapabilitiesMenu from "./layouts/CapabilitiesMenu";
import IndustriesMenu from "./layouts/IndustriesMenu";
import SimpleListMenu from "./layouts/SimpleListMenu";
import styles from "../Navbar.module.css";

export interface MegaMenuProps {
  activeMenu: MenuId | null;
  open: boolean;
  onMenuOpen: (menuId: MenuId) => void;
  onMenuClose: () => void;
  onNavigate: () => void;
}

const companyLinks = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Leadership",
    href: "/about#leadership",
  },
  {
    label: "Geographies",
    href: "/about#geographies",
  },
  {
    label: "Code of Conduct & Values",
    href: "/about#values",
  },
];

const resourceLinks = [
  {
    label: "Blogs",
    href: "/learning",
  },
  {
    label: "Case Studies",
    href: "/case-studies",
  },
  {
    label: "News",
    href: "/news",
  },
];

const careerLinks = [
  {
    label: "Careers",
    href: "/careers",
  },
  {
    label: "Culture",
    href: "/careers#culture",
  },
  {
    label: "Diversity, Equity and Inclusion",
    href: "/careers#diversity",
  },
  {
    label: "Employee Success",
    href: "/careers#employee-success",
  },
  {
    label: "Benefits",
    href: "/careers#benefits",
  },
];

export default function MegaMenu({
  activeMenu,
  open,
  onMenuOpen,
  onMenuClose,
  onNavigate,
}: MegaMenuProps) {
  if (!activeMenu) {
    return null;
  }

  const renderMenuContent = () => {
    switch (activeMenu) {
      case "what-we-do":
        return (
          <CapabilitiesMenu
            onNavigate={onNavigate}
          />
        );

      case "who-we-help":
        return (
          <IndustriesMenu
            onNavigate={onNavigate}
          />
        );

      case "who-we-are":
        return (
          <SimpleListMenu
            links={companyLinks}
            onNavigate={onNavigate}
          />
        );

      case "how-we-deliver":
        return (
          <SimpleListMenu
            links={resourceLinks}
            onNavigate={onNavigate}
          />
        );

      case "join-devsinc":
        return (
          <SimpleListMenu
            links={careerLinks}
            onNavigate={onNavigate}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div
      id={`mega-menu-${activeMenu}`}
      className={[
        styles.megaMenu,
        open ? styles.megaMenuOpen : "",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-hidden={!open}
      aria-labelledby={`mega-menu-trigger-${activeMenu}`}
      onMouseEnter={() => onMenuOpen(activeMenu)}
      onMouseLeave={onMenuClose}
    >
      <div className={styles.megaMenuInner}>
        {renderMenuContent()}
      </div>
    </div>
  );
}