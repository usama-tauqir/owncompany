export type MegaMenuLink = {
  label: string;
  href: string;
};

export type MegaMenuSection = {
  title: string;
  links: MegaMenuLink[];
};

export type CapabilitiesMegaMenuData = {
  type: "capabilities";
  sections: MegaMenuSection[];
};

export type IndustriesMegaMenuData = {
  type: "industries";
  links: MegaMenuLink[];
};

export type SimpleMegaMenuData = {
  type: "simple";
  title: string;
  sections: MegaMenuSection[];
};

export type MegaMenuDataItem =
  | CapabilitiesMegaMenuData
  | IndustriesMegaMenuData
  | SimpleMegaMenuData;

export const megaMenuData: Record<string, MegaMenuDataItem> = {
  "what-we-do": {
    type: "capabilities",
    sections: [
      {
        title: "Digital Transformation",
        links: [
          {
            label: "Web development",
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
            label: "Augmented reality",
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
            label: "Cloud maintenance & integration",
            href: "/services/cloud-maintenance-integration",
          },
        ],
      },
    ],
  },

  "who-we-help": {
    type: "industries",
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

  "who-we-are": {
    type: "simple",
    title: "Who We Are",
    sections: [
      {
        title: "Company",
        links: [
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
            label: "Awards & Recognition",
            href: "/awards-recognition",
          },
          {
            label: "Media & Investor Relations",
            href: "/media-investor-relations",
          },
          {
            label: "ESG Values",
            href: "/esg-values",
          },
          {
            label: "Code of Conduct & Values",
            href: "/code-of-conduct-values",
          },
        ],
      },
    ],
  },

  "how-we-deliver": {
    type: "simple",
    title: "How We Deliver",
    sections: [
      {
        title: "Resources",
        links: [
          {
            label: "Blogs",
            href: "/blogs",
          },
          {
            label: "Thought Leadership",
            href: "/thought-leadership",
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
            label: "Playbooks",
            href: "/playbooks",
          },
          {
            label: "Perspective",
            href: "/perspective",
          },
          {
            label: "Podcast",
            href: "/podcast",
          },
          {
            label: "Client Testimonials",
            href: "/client-testimonials",
          },
        ],
      },
    ],
  },

  "join-devsinc": {
    type: "simple",
    title: "Join Devsinc",
    sections: [
      {
        title: "Careers",
        links: [
          {
            label: "Careers",
            href: "/career",
          },
          {
            label: "Culture",
            href: "/culture",
          },
          {
            label: "Diversity, Equity and Inclusion",
            href: "/diversity-equity-and-inclusion",
          },
          {
            label: "Employee Success",
            href: "/employee-success",
          },
          {
            label: "Benefits",
            href: "/benefits",
          },
          {
            label: "Campus Ambassador Program",
            href: "/campus-ambassador-program",
          },
        ],
      },
    ],
  },

  global: {
    type: "simple",
    title: "Global",
    sections: [
      {
        title: "Locations",
        links: [
          {
            label: "Global",
            href: "/global",
          },
          {
            label: "MENA",
            href: "/mena",
          },
          {
            label: "KSA - Arabic",
            href: "/ksa-arabic",
          },
          {
            label: "KSA - English",
            href: "/ksa-english",
          },
          {
            label: "North America",
            href: "/north-america",
          },
          {
            label: "Europe & UK",
            href: "/europe-and-uk",
          },
        ],
      },
    ],
  },
};