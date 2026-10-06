"use client";

import Link from "next/link";

import type { IndustriesMegaMenuData } from "@/data/megaMenuData";

import { useLocale } from "@/i18n/useLocale";

import styles from "../MegaMenu.module.css";

interface IndustriesMenuProps {
  data?: IndustriesMegaMenuData;
}

export default function IndustriesMenu({
  data,
}: IndustriesMenuProps) {
  const { dict } = useLocale();

  if (!data?.links) {
    return null;
  }

  return (
    <div className={styles.megaMenuPanel}>
      <div className={styles.megaMenuInner}>
        <h2 className={styles.megaMenuTitle}>{dict.menuSections.industries}</h2>

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

        <Link href="/industry" className={styles.featuredMenuLink}>
          {dict.menuSections.viewAllIndustries} →
        </Link>
      </div>
    </div>
  );
}