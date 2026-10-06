"use client";

import Link from "next/link";

import { siteConfig } from "@/config/site";
import { megaMenuData, type MegaMenuLink } from "@/data/megaMenuData";
import { useLocale } from "@/i18n/useLocale";

import MobileAccordion, { type MobileAccordionItem } from "./MobileAccordion";
import styles from "../Navbar.module.css";

export interface MobileMenuProps {
  onNavigate: () => void;
  onClose: () => void;
}

/** Flattens a mega menu entry into a single list of links. */
function linksFor(menuId: string): MegaMenuLink[] {
  const data = megaMenuData[menuId];
  if (!data) return [];
  if (data.type === "industries") return data.links;
  return data.sections.flatMap((section) => section.links);
}

export default function MobileMenu({ onNavigate, onClose }: MobileMenuProps) {
  const { dict } = useLocale();

  const handleNavigate = () => {
    onClose();
    onNavigate();
  };

  const groups: Array<{ id: string; label: string; overview?: MegaMenuLink }> = [
    {
      id: "what-we-do",
      label: dict.nav.whatWeDo,
      overview: { label: dict.menuSections.viewAllServices, href: "/services" },
    },
    {
      id: "who-we-help",
      label: dict.nav.whoWeHelp,
      overview: { label: dict.menuSections.viewAllIndustries, href: "/industry" },
    },
    { id: "who-we-are", label: dict.nav.whoWeAre },
    { id: "how-we-deliver", label: dict.nav.howWeDeliver },
    { id: "join", label: `${dict.nav.join} ${siteConfig.shortName}` },
    { id: "global", label: dict.nav.region },
  ];

  const accordionItems: MobileAccordionItem[] = groups.map((group) => ({
    id: group.id,
    label: group.label,
    content: (
      <div className={styles.mobileAccordionLinks}>
        {group.overview && (
          <Link href={group.overview.href} onClick={handleNavigate}>
            <strong>{group.overview.label}</strong>
          </Link>
        )}
        {linksFor(group.id).map((link) => (
          <Link key={link.href + link.label} href={link.href} onClick={handleNavigate}>
            {link.label}
          </Link>
        ))}
      </div>
    ),
  }));

  return (
    <nav className={styles.mobileMenu} aria-label="Mobile navigation">
      <MobileAccordion items={accordionItems} className={styles.mobileAccordion} />

      <div className={styles.mobileMenuActions}>
        <Link href="/career" className={styles.mobilePrimaryButton} onClick={handleNavigate}>
          {dict.footer.careers}
        </Link>

        <Link href="/contact" className={styles.mobileSecondaryButton} onClick={handleNavigate}>
          {dict.nav.letsTalkBusiness}
        </Link>
      </div>
    </nav>
  );
}
