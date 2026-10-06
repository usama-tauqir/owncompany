"use client";

import Link from "next/link";

import type {
  CapabilitiesMegaMenuData,
  MegaMenuSection,
} from "@/data/megaMenuData";

import { useLocale } from "@/i18n/useLocale";

import styles from "../MegaMenu.module.css";

interface CapabilitiesMenuProps {
  data?: CapabilitiesMegaMenuData;
}

export default function CapabilitiesMenu({
  data,
}: CapabilitiesMenuProps) {
  const { dict } = useLocale();

  if (!data?.sections) {
    return null;
  }

  const titles = dict.menuSections as Record<string, string>;

  const find = (id: string) => {
    const section = data.sections.find((item) => item.id === id);
    return section ? { ...section, title: titles[id] ?? section.title } : undefined;
  };

  const digitalTransformation = find("digitalTransformation");
  const businessApplications = find("businessApplications");
  const shopify = find("shopify");
  const emergingTechnologies = find("emergingTechnologies");
  const gaming = find("gaming");
  const cloud = find("cloud");
  const studiosAdvisory = find("studiosAdvisory");

  const emergingNormalLinks =
    emergingTechnologies?.links.slice(0, 6) ?? [];

  const emergingBoldLinks =
    emergingTechnologies?.links.slice(6) ?? [];

  return (
    <section className={styles.megaMenuPanel}>
      <div className={styles.megaMenuInner}>
        <h2 className={styles.megaMenuTitle}>{dict.nav.whatWeDo}</h2>

        <div className={styles.capabilitiesGrid}>
          {digitalTransformation && (
            <MenuSection section={digitalTransformation} />
          )}

          {businessApplications && (
            <MenuSection section={businessApplications} />
          )}

          {shopify && <MenuSection section={shopify} />}

          {emergingTechnologies && (
            <MenuSection
              section={{
                ...emergingTechnologies,
                links: emergingNormalLinks,
              }}
            />
          )}

          <div className={styles.featuredColumn}>
            {emergingBoldLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.featuredMenuLink}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {gaming && <MenuSection section={gaming} />}

          {cloud && <MenuSection section={cloud} />}

          {studiosAdvisory && <MenuSection section={studiosAdvisory} />}
        </div>

        <Link href="/services" className={styles.featuredMenuLink}>
          {dict.menuSections.viewAllServices} →
        </Link>
      </div>
    </section>
  );
}

function MenuSection({
  section,
}: {
  section: MegaMenuSection;
}) {
  return (
    <div className={styles.megaMenuSection}>
      <h3 className={styles.sectionTitle}>
        {section.title}
      </h3>

      <ul className={styles.linkList}>
        {section.links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={styles.menuLink}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}