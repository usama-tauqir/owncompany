import type { Service, ServiceCategory } from "../types";

import { businessAppServices } from "./business-apps";
import { cloudServices } from "./cloud";
import { digitalServices } from "./digital";
import { emergingServices } from "./emerging";
import { gamingServices } from "./gaming";
import { shopifyServices } from "./shopify";
import { studioServices } from "./studios";

export const services: Service[] = [
  ...digitalServices,
  ...businessAppServices,
  ...shopifyServices,
  ...emergingServices,
  ...gamingServices,
  ...cloudServices,
  ...studioServices,
];

export const serviceCategories: ServiceCategory[] = [
  "Digital Transformation",
  "Business Applications",
  "Shopify",
  "Emerging Technologies",
  "Gaming",
  "Cloud",
  "Studios & Advisory",
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function servicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((service) => service.category === category);
}
