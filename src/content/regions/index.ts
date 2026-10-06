import type { RegionContent } from "@/content/types";
import { globalRegion } from "./global";
import { menaRegion } from "./mena";
import { ksaEnglishRegion } from "./ksa-english";
import { ksaArabicRegion } from "./ksa-arabic";
import { northAmericaRegion } from "./north-america";
import { europeAndUkRegion } from "./europe-and-uk";

export const regions: RegionContent[] = [
  globalRegion,
  menaRegion,
  ksaEnglishRegion,
  ksaArabicRegion,
  northAmericaRegion,
  europeAndUkRegion,
];

export const regionBySlug = (slug: string) => regions.find((r) => r.slug === slug);
