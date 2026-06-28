"use client";

import Link from "next/link";
import styles from "../../Navbar.module.css";

interface CapabilityLink {
  label: string;
  href: string;
}

interface CapabilityGroup {
  title: string;
  links: CapabilityLink[];
}

export interface CapabilitiesMenuProps {
  onNavigate: () => void;
}

const capabilityGroups: CapabilityGroup[] = [
  {
    title: "Digital Transformation",
    links: [
      {
        label: "Web Development",
        href: "/services/website-development",
      },
      {
        label: "App Development",
        href: "/services/mobile-development",
      },
      {
        label: "Custom Software Development",
        href: "/services/custom-development",
      },
      {
        label: "UX/UI Design",
        href: "/services/ui-ux-design",
      },
    ],
  },
  {
    title: "Business Applications",
    links: [
      {
        label: "Dynamics 365 ERP",
        href: "/services/d365-erp",
      },
      {
        label: "Dynamics 365 CRM",
        href: "/services/d365-crm",
      },
      {
        label: "Power Apps",
        href: "/services/power-apps",
      },
      {
        label: "Salesforce",
        href: "/services/salesforce",
      },
    ],
  },
  {
    title: "Shopify",
    links: [
      {
        label: "Design & Development",
        href: "/services/design-development",
      },
      {
        label: "Maintenance & Support",
        href: "/services/maintenance-support",
      },
      {
        label: "Automation & Apps",
        href: "/services/automation-apps",
      },
    ],
  },
  {
    title: "Emerging Technologies",
    links: [
      {
        label: "Metaverse",
        href: "/services/metaverse",
      },
      {
        label: "Augmented Reality",
        href: "/services/augmented-reality",
      },
      {
        label: "Blockchain & Cryptography",
        href: "/services/blockchain-cryptography",
      },
      {
        label: "Gen AI",
        href: "/services/genai",
      },
      {
        label: "Data Analytics",
        href: "/services/data-analytics-and-insights",
      },
    ],
  },
  {
    title: "Engineering Services",
    links: [
      {
        label: "Staff Augmentation",
        href: "/services/staff-augmentation",
      },
      {
        label: "Quality Assurance",
        href: "/services/quality-assurance",
      },
      {
        label: "DevOps",
        href: "/services/devops",
      },
      {
        label: "Cybersecurity",
        href: "/services/cybersecurity-solutions",
      },
      {
        label: "SaaS",
        href: "/services/saas",
      },
    ],
  },
  {
    title: "Gaming",
    links: [
      {
        label: "Art & Design",
        href: "/services/gaming-art-design",
      },
      {
        label: "Web3",
        href: "/services/web3-gaming",
      },
      {
        label: "AR/VR/XR",
        href: "/services/ar-vr-xr-gaming",
      },
    ],
  },
  {
    title: "Cloud",
    links: [
      {
        label: "Cloud Application",
        href: "/services/cloud-application",
      },
      {
        label: "Cloud Ops & Migration",
        href: "/services/cloud-migration-cloud-ops",
      },
      {
        label: "Cloud Maintenance & Integration",
        href: "/services/cloud-maintenance-integration",
      },
    ],
  },
];

export default function CapabilitiesMenu({
  onNavigate,
}: CapabilitiesMenuProps) {
  return (
    <div className={styles.capabilitiesMenu}>
      <h2 className={styles.megaMenuTitle}>Capabilities</h2>

      <div className={styles.capabilitiesGrid}>
        {capabilityGroups.map((group) => (
          <section
            key={group.title}
            className={styles.capabilityGroup}
          >
            <h3 className={styles.capabilityGroupTitle}>
              {group.title}
            </h3>

            <div className={styles.megaMenuLinkList}>
              {group.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={styles.megaMenuLink}
                  onClick={onNavigate}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}