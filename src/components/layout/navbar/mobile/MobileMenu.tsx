"use client";

import Link from "next/link";
import MobileAccordion, {
  type MobileAccordionItem,
} from "./MobileAccordion";
import styles from "../Navbar.module.css";

export interface MobileMenuProps {
  onNavigate: () => void;
  onClose: () => void;
}

export default function MobileMenu({
  onNavigate,
  onClose,
}: MobileMenuProps) {
  const handleNavigate = () => {
    onClose();
    onNavigate();
  };

  const accordionItems: MobileAccordionItem[] = [
    {
      id: "what-we-do",
      label: "What we do",
      content: (
        <div className={styles.mobileAccordionLinks}>
          <Link href="/services" onClick={handleNavigate}>
            Services
          </Link>

          <Link
            href="/services/web-development"
            onClick={handleNavigate}
          >
            Web Development
          </Link>

          <Link
            href="/services/mobile-development"
            onClick={handleNavigate}
          >
            App Development
          </Link>

          <Link
            href="/services/custom-development"
            onClick={handleNavigate}
          >
            Custom Software Development
          </Link>
        </div>
      ),
    },
    {
      id: "who-we-help",
      label: "Who we help",
      content: (
        <div className={styles.mobileAccordionLinks}>
          <Link href="/industries" onClick={handleNavigate}>
            Industries
          </Link>

          <Link
            href="/industry/banking-fintech"
            onClick={handleNavigate}
          >
            Banking &amp; Fintech
          </Link>

          <Link
            href="/industry/healthcare-pharmaceuticals"
            onClick={handleNavigate}
          >
            Healthcare &amp; Pharmaceuticals
          </Link>

          <Link
            href="/industry/travel-hospitality"
            onClick={handleNavigate}
          >
            Travel &amp; Hospitality
          </Link>
        </div>
      ),
    },
    {
      id: "who-we-are",
      label: "Who We Are",
      content: (
        <div className={styles.mobileAccordionLinks}>
          <Link href="/about" onClick={handleNavigate}>
            About
          </Link>

          <Link href="/about#leadership" onClick={handleNavigate}>
            Leadership
          </Link>

          <Link href="/about#geographies" onClick={handleNavigate}>
            Geographies
          </Link>

          <Link href="/about#values" onClick={handleNavigate}>
            Code of Conduct &amp; Values
          </Link>
        </div>
      ),
    },
    {
      id: "how-we-deliver",
      label: "How we deliver",
      content: (
        <div className={styles.mobileAccordionLinks}>
          <Link href="/learning" onClick={handleNavigate}>
            Blogs
          </Link>

          <Link href="/case-studies" onClick={handleNavigate}>
            Case Studies
          </Link>

          <Link href="/news" onClick={handleNavigate}>
            News
          </Link>
        </div>
      ),
    },
    {
      id: "join-devsinc",
      label: "Join devsinc",
      content: (
        <div className={styles.mobileAccordionLinks}>
          <Link href="/careers" onClick={handleNavigate}>
            Careers
          </Link>

          <Link href="/careers#culture" onClick={handleNavigate}>
            Culture
          </Link>

          <Link href="/careers#benefits" onClick={handleNavigate}>
            Benefits
          </Link>
        </div>
      ),
    },
  ];

  return (
    <nav
      className={styles.mobileMenu}
      aria-label="Mobile navigation"
    >
      <MobileAccordion
        items={accordionItems}
        className={styles.mobileAccordion}
      />

      <div className={styles.mobileMenuActions}>
        <Link
          href="/careers"
          className={styles.mobilePrimaryButton}
          onClick={handleNavigate}
        >
          Explore Careers
        </Link>

        <Link
          href="/contact"
          className={styles.mobileSecondaryButton}
          onClick={handleNavigate}
        >
          Let&apos;s Talk Business
        </Link>
      </div>
    </nav>
  );
}