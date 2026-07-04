"use client";

import Link from "next/link";

import type {
  CapabilitiesMegaMenuData,
  MegaMenuSection,
} from "@/data/megaMenuData";

import styles from "../MegaMenu.module.css";

interface CapabilitiesMenuProps {
  data?: CapabilitiesMegaMenuData;
}

export default function CapabilitiesMenu({
  data,
}: CapabilitiesMenuProps) {
  if (!data?.sections) {
    return null;
  }

  const digitalTransformation = data.sections.find(
    (section) => section.title === "Digital Transformation",
  );

  const businessApplications = data.sections.find(
    (section) => section.title === "Business Applications",
  );

  const shopify = data.sections.find(
    (section) => section.title === "Shopify",
  );

  const emergingTechnologies = data.sections.find(
    (section) => section.title === "Emerging Technologies",
  );

  const gaming = data.sections.find(
    (section) => section.title === "Gaming",
  );

  const cloud = data.sections.find(
    (section) => section.title === "Cloud",
  );

  const emergingNormalLinks =
    emergingTechnologies?.links.slice(0, 6) ?? [];

  const emergingBoldLinks =
    emergingTechnologies?.links.slice(6) ?? [];

  return (
    <section className={styles.megaMenuPanel}>
      <div className={styles.megaMenuInner}>
        <h2 className={styles.megaMenuTitle}>Capabilities</h2>

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
        </div>
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