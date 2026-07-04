"use client";

import Link from "next/link";

import type { IndustriesMegaMenuData } from "@/data/megaMenuData";

import styles from "../MegaMenu.module.css";

interface IndustriesMenuProps {
  data?: IndustriesMegaMenuData;
}

export default function IndustriesMenu({
  data,
}: IndustriesMenuProps) {
  if (!data?.links) {
    return null;
  }

  return (
    <div className={styles.megaMenuPanel}>
      <div className={styles.megaMenuInner}>
        <h2 className={styles.megaMenuTitle}>Industries</h2>

        <div className={styles.industriesLayout}>
          {data.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.industryLink}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}