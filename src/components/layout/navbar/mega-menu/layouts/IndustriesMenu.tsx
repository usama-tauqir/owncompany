"use client";

import Link from "next/link";
import styles from "../../Navbar.module.css";

interface IndustryLink {
  label: string;
  href: string;
}

export interface IndustriesMenuProps {
  onNavigate: () => void;
}

const industries: IndustryLink[] = [
  {
    label: "Shopify",
    href: "/industry/shopify",
  },
  {
    label: "Travel & Hospitality",
    href: "/industry/travel-hospitality",
  },
  {
    label: "Public Sector",
    href: "/industry/public-sector",
  },
  {
    label: "Telecommunication",
    href: "/industry/telecommunication",
  },
  {
    label: "Retail & CPG",
    href: "/industry/retail-and-cpg",
  },
  {
    label: "Oil, Gas, and Energy",
    href: "/industry/oil-gas-and-energy",
  },
  {
    label: "Startups",
    href: "/industry/startups",
  },
  {
    label: "E-commerce",
    href: "/industry/e-commerce-software-development",
  },
  {
    label: "Banking & Fintech",
    href: "/industry/banking-fintech",
  },
  {
    label: "Healthcare & Pharmaceuticals",
    href: "/industry/healthcare-pharmaceuticals",
  },
  {
    label: "Gaming",
    href: "/industry/gaming",
  },
];

export default function IndustriesMenu({
  onNavigate,
}: IndustriesMenuProps) {
  return (
    <div className={styles.industriesMenu}>
      <h2 className={styles.megaMenuTitle}>Industries</h2>

      <div className={styles.industriesGrid}>
        {industries.map((industry) => (
          <Link
            key={industry.href}
            href={industry.href}
            className={styles.industryLink}
            onClick={onNavigate}
          >
            {industry.label}
          </Link>
        ))}
      </div>
    </div>
  );
}