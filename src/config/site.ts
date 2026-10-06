/*
 * Single source of truth for the brand.
 *
 * Change the values here to re-brand the whole site: navbar, footer,
 * contact sections, metadata and regional pages all read from this file.
 * Office addresses, phone numbers and social links below are
 * placeholders — replace them with your company's real details.
 */

export interface Office {
  id: string;
  country: string;
  countryAr: string;
  city: string;
  cityAr: string;
  type: string;
  typeAr: string;
  addressLines: string[];
  phone: string;
  /** emoji flag keeps the footer free of external image assets */
  flag: string;
}

export interface SocialLink {
  name: "LinkedIn" | "Instagram" | "X" | "Facebook" | "YouTube";
  href: string;
}

export const siteConfig = {
  name: "OwnCompany",
  /** used inside menus like "Join OwnCompany" */
  shortName: "OwnCompany",
  legalName: "OwnCompany (Pvt.) Ltd.",
  nameAr: "أون كومباني",
  tagline: "Software that moves your business forward",
  description:
    "A global technology partner delivering software engineering, AI, cloud and digital transformation for enterprises, startups and the public sector.",
  url: "https://www.example.com",
  foundedYear: 2012,
  email: {
    business: "business@example.com",
    careers: "careers@example.com",
    media: "media@example.com",
  },
  phone: "+1 (000) 000-0000",
  socials: [
    { name: "LinkedIn", href: "https://www.linkedin.com/" },
    { name: "Instagram", href: "https://www.instagram.com/" },
    { name: "X", href: "https://x.com/" },
    { name: "Facebook", href: "https://www.facebook.com/" },
    { name: "YouTube", href: "https://www.youtube.com/" },
  ] satisfies SocialLink[],
  offices: [
    {
      id: "pk",
      country: "Pakistan",
      countryAr: "باكستان",
      city: "Lahore",
      cityAr: "لاهور",
      type: "Global Delivery Center",
      typeAr: "مركز التسليم العالمي",
      addressLines: ["Office address line 1", "Lahore, Punjab", "Pakistan"],
      phone: "+92 (00) 0000 0000",
      flag: "🇵🇰",
    },
    {
      id: "us",
      country: "USA",
      countryAr: "الولايات المتحدة",
      city: "San Jose",
      cityAr: "سان خوسيه",
      type: "Regional Office",
      typeAr: "مكتب إقليمي",
      addressLines: ["Office address line 1", "San Jose, CA", "United States"],
      phone: "+1 (000) 000-0000",
      flag: "🇺🇸",
    },
    {
      id: "ae",
      country: "UAE",
      countryAr: "الإمارات",
      city: "Dubai",
      cityAr: "دبي",
      type: "Regional Office",
      typeAr: "مكتب إقليمي",
      addressLines: ["Office address line 1", "Dubai", "United Arab Emirates"],
      phone: "+971 (0) 0 000 0000",
      flag: "🇦🇪",
    },
    {
      id: "uk",
      country: "UK",
      countryAr: "المملكة المتحدة",
      city: "London",
      cityAr: "لندن",
      type: "Regional Office",
      typeAr: "مكتب إقليمي",
      addressLines: ["Office address line 1", "London", "United Kingdom"],
      phone: "+44 (0) 00 0000 0000",
      flag: "🇬🇧",
    },
    {
      id: "sa",
      country: "KSA",
      countryAr: "السعودية",
      city: "Riyadh",
      cityAr: "الرياض",
      type: "Regional Office",
      typeAr: "مكتب إقليمي",
      addressLines: ["Office address line 1", "Riyadh", "Kingdom of Saudi Arabia"],
      phone: "+966 (0) 00 000 0000",
      flag: "🇸🇦",
    },
  ] satisfies Office[],
  /** headline numbers reused across home, about and regional pages */
  stats: {
    experts: 1500,
    projects: 2500,
    countries: 20,
    years: new Date().getFullYear() - 2012,
  },
} as const;

export type SiteConfig = typeof siteConfig;
