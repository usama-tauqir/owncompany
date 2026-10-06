import { siteConfig } from "@/config/site";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterMenu {
  id: string;
  title: string;
  links: FooterLink[];
  columns?: 1 | 2 | 3;
  align?: "left" | "right";
}

export interface FooterOfficeData {
  country: string;
  officeType: string;
  addressLines: string[];
  flag: string;
}

export const footerMenus: FooterMenu[] = [
  {
    id: "company",
    title: "Company",
    columns: 1,
    links: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "About",
        href: "/about-us",
      },
      {
        label: "Leadership",
        href: "/leadership",
      },
      {
        label: "Geographies",
        href: "/geographies",
      },
      {
        label: "Careers",
        href: "/career",
      },
      {
        label: "Contact",
        href: "/contact",
      },
    ],
  },
  {
    id: "industries",
    title: "Industries We Serve",
    columns: 2,
    links: [
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
      {
        label: "Real Estate",
        href: "/industry/real-estate",
      },
      {
        label: "Education",
        href: "/industry/education",
      },
    ],
  },
  {
    id: "services",
    title: "Services and Solutions",
    columns: 3,
    links: [
      {
        label: "Salesforce",
        href: "/services/salesforce",
      },
      {
        label: "Automation & Apps",
        href: "/services/automation-apps",
      },
      {
        label: "Maintenance & Support",
        href: "/services/maintenance-support",
      },
      {
        label: "Design & Development",
        href: "/services/design-development",
      },
      {
        label: "Shopify",
        href: "/services/shopify",
      },
      {
        label: "Cloud Migration & Cloud Ops",
        href: "/services/cloud-migration-cloud-ops",
      },
      {
        label: "SaaS",
        href: "/services/saas",
      },
      {
        label: "Quality Assurance",
        href: "/services/quality-assurance",
      },
      {
        label: "Staff Augmentation",
        href: "/services/staff-augmentation",
      },
      {
        label: "Gaming Art & Design",
        href: "/services/gaming-art-design",
      },
      {
        label: "AR/VR/XR Gaming",
        href: "/services/ar-vr-xr-gaming",
      },
      {
        label: "Web3 Gaming",
        href: "/services/web3-gaming",
      },
      {
        label: "Game Development",
        href: "/services/game-development",
      },
      {
        label: "Blockchain & Cryptography",
        href: "/services/blockchain-cryptography",
      },
      {
        label: "Augmented Reality",
        href: "/services/augmented-reality",
      },
      {
        label: "Metaverse",
        href: "/services/metaverse",
      },
      {
        label: "Cloud Maintenance & Integration",
        href: "/services/cloud-maintenance-integration",
      },
      {
        label: "Cloud Application",
        href: "/services/cloud-application",
      },
      {
        label: "Power Apps",
        href: "/services/power-apps",
      },
      {
        label: "MS D365 CRM",
        href: "/services/d365-crm",
      },
      {
        label: "Dynamics 365 ERP",
        href: "/services/d365-erp",
      },
      {
        label: "Data Analytics & Insights",
        href: "/services/data-analytics-and-insights",
      },
      {
        label: "Mobile App Development",
        href: "/services/mobile-development",
      },
      {
        label: "Cybersecurity",
        href: "/services/cybersecurity-solutions",
      },
      {
        label: "Custom Software Development",
        href: "/services/custom-development",
      },
      {
        label: "Web Development",
        href: "/services/website-development",
      },
      {
        label: "UI/UX Design",
        href: "/services/ui-ux-design",
      },
      {
        label: "DevOps",
        href: "/services/devops",
      },
      {
        label: "Generative AI",
        href: "/services/genai",
      },
      {
        label: "AI & Data Systems",
        href: "/services/ai-data-systems",
      },
      {
        label: "Product Studio",
        href: "/services/product-studio",
      },
      {
        label: "Advisory & Strategy",
        href: "/services/advisory-strategy",
      },
      {
        label: "Payment as a Service",
        href: "/services/payment-as-a-service",
      },
      {
        label: "Architectural Visualization",
        href: "/services/architectural-visualization",
      },
    ],
  },
  {
    id: "resources",
    title: "Resources",
    columns: 1,
    align: "right",
    links: [
      {
        label: "Blogs",
        href: "/blogs",
      },
      {
        label: "Case Studies",
        href: "/case-studies",
      },
      {
        label: "News",
        href: "/news",
      },
      {
        label: "Whitepapers",
        href: "/whitepapers",
      },
      {
        label: "Podcast",
        href: "/podcast",
      },
    ],
  },
];

/* Offices come from the brand config so there is one place to edit them. */
export const footerOffices: FooterOfficeData[] = siteConfig.offices.map((office) => ({
  country: office.country,
  officeType: office.type,
  addressLines: [...office.addressLines],
  flag: office.flag,
}));
