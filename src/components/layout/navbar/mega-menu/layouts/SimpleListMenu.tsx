"use client";

import Link from "next/link";

import type { SimpleMegaMenuData } from "@/data/megaMenuData";

import styles from "../MegaMenu.module.css";

interface SimpleListMenuProps {
  data?: SimpleMegaMenuData;
}

export default function SimpleListMenu({
  data,
}: SimpleListMenuProps) {
  if (!data?.sections) {
    return null;
  }

  return (
    <div className={styles.megaMenuPanel}>
      <div className={styles.megaMenuInner}>
        <h2 className={styles.megaMenuTitle}>{data.title}</h2>

        <div className={styles.simpleLayout}>
          {data.sections.map((section) => (
            <div
              key={section.title}
              className={styles.megaMenuSection}
            >
              <h3 className={styles.sectionTitle}>
                {section.title}
              </h3>

              <ul className={styles.linkList}>
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={styles.menuLink}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}