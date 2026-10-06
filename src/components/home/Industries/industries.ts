import type { IconName } from "@/content/types";

export interface IndustryItemData {
  title: string;
  href: string;
  icon: IconName;
}

export const industries: IndustryItemData[] = [
  {
    title: "Shopify",
    href: "/industry/shopify",
    icon: "cart",
  },
  {
    title: "Travel & Hospitality",
    href: "/industry/travel-hospitality",
    icon: "plane",
  },
  {
    title: "Public Sector",
    href: "/industry/public-sector",
    icon: "building",
  },
  {
    title: "Telecommunication",
    href: "/industry/telecommunication",
    icon: "radio",
  },
  {
    title: "Retail & CPG",
    href: "/industry/retail-and-cpg",
    icon: "store",
  },
  {
    title: "Oil, Gas, and Energy",
    href: "/industry/oil-gas-and-energy",
    icon: "fuel",
  },
  {
    title: "Startups",
    href: "/industry/startups",
    icon: "rocket",
  },
  {
    title: "E-commerce",
    href: "/industry/e-commerce-software-development",
    icon: "cart",
  },
  {
    title: "Banking & Fintech",
    href: "/industry/banking-fintech",
    icon: "bank",
  },
  {
    title: "Healthcare & Pharmaceuticals",
    href: "/industry/healthcare-pharmaceuticals",
    icon: "health",
  },
  {
    title: "Gaming",
    href: "/industry/gaming",
    icon: "gamepad",
  },
];