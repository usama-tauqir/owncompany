import type { NavbarSection } from "../mega-menu/types";

export const capabilities: NavbarSection[] = [
  {
    title: "Digital Transformation",
    links: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "App Development", href: "/services/app-development" },
      {
        label: "Custom Software Development",
        href: "/services/custom-software-development",
      },
      { label: "UX/UI Design", href: "/services/ui-ux-design" },
    ],
  },
  {
    title: "Business Applications",
    links: [
      { label: "Dynamics 365 ERP", href: "/services/dynamics-365-erp" },
      { label: "Dynamics 365 CRM", href: "/services/dynamics-365-crm" },
      { label: "Power Apps", href: "/services/power-apps" },
      { label: "Salesforce", href: "/services/salesforce" },
    ],
  },
  {
    title: "Emerging Technologies",
    links: [
      { label: "Metaverse", href: "/services/metaverse" },
      { label: "Augmented Reality", href: "/services/augmented-reality" },
      {
        label: "Blockchain & Cryptography",
        href: "/services/blockchain",
      },
      { label: "Generative AI", href: "/services/generative-ai" },
      { label: "Data Analytics", href: "/services/data-analytics" },
    ],
  },
  {
    title: "Gaming",
    links: [
      { label: "Art & Design", href: "/services/game-art-design" },
      { label: "Web3", href: "/services/web3" },
      { label: "AR/VR/XR", href: "/services/ar-vr-xr" },
    ],
  },
  {
    title: "Cloud",
    links: [
      { label: "Cloud Application", href: "/services/cloud-application" },
      {
        label: "Cloud Ops & Migration",
        href: "/services/cloud-migration",
      },
      {
        label: "Cloud Maintenance & Integration",
        href: "/services/cloud-maintenance",
      },
    ],
  },
];