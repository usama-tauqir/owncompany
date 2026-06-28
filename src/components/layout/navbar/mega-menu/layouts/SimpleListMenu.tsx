"use client";

import Link from "next/link";
import styles from "../../Navbar.module.css";

export interface SimpleListMenuLink {
  label: string;
  href: string;
}

export interface SimpleListMenuProps {
  links: SimpleListMenuLink[];
  onNavigate: () => void;
  title?: string;
}

export default function SimpleListMenu({
  links,
  onNavigate,
  title,
}: SimpleListMenuProps) {
  return (
    <div className={styles.simpleListMenu}>
      {title ? (
        <h2 className={styles.megaMenuTitle}>{title}</h2>
      ) : null}

      <div className={styles.simpleListLinks}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={styles.simpleListLink}
            onClick={onNavigate}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}