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
        label: "Careers",
        href: "/career",
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
        href: "/learning",
      },
      {
        label: "Case Studies",
        href: "/case-studies",
      },
    ],
  },
];

export const footerOffices: FooterOfficeData[] = [
  {
    country: "Pakistan",
    officeType: "Global Delivery Center",
    flag: "/images/footer/flags/pakistan.webp",
    addressLines: [
      "Plot B, 281 Ghazi Rd,",
      "Khuda Buksh Colony",
      "KB Society, Lahore,",
      "Punjab",
    ],
  },
  {
    country: "USA",
    officeType: "Regional Office",
    flag: "/images/footer/flags/usa.webp",
    addressLines: [
      "18 S 2nd Street #120",
      "San Jose, CA, 95113,",
      "United States",
    ],
  },
  {
    country: "UAE",
    officeType: "Regional Office",
    flag: "/images/footer/flags/uae.webp",
    addressLines: [
      "34HW+5J5 - Parkside",
      "Retail Level - Cluster R",
      "- Jumeirah Lakes",
      "Towers - Dubai",
    ],
  },
  {
    country: "UK",
    officeType: "Regional Office",
    flag: "/images/footer/flags/uk.webp",
    addressLines: [
      "128 City Road London",
      "EC1V 2NX, United",
      "Kingdom",
    ],
  },
  {
    country: "KSA",
    officeType: "Regional Office",
    flag: "/images/footer/flags/ksa.webp",
    addressLines: [
      "3141 Anas Ibn Malik",
      "Rd, Al Malqa, Riyadh",
      "13521 KSA",
    ],
  },
];