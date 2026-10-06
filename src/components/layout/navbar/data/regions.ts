/*
 * Region / language switcher entries (mirrors the "Global" menu).
 * Paths must match the slugs in src/content/regions.
 */
export const regions = [
  { label: "Global", href: "/", lang: "en" },
  { label: "MENA", href: "/mena", lang: "en" },
  { label: "KSA - العربية", href: "/ksa-arabic", lang: "ar" },
  { label: "KSA - English", href: "/ksa-english", lang: "en" },
  { label: "North America", href: "/north-america", lang: "en" },
  { label: "Europe & UK", href: "/europe-and-uk", lang: "en" },
] as const;

export function currentRegionLabel(pathname: string | null): string {
  const match = regions.find((region) => region.href !== "/" && pathname?.startsWith(region.href));
  return match?.label ?? "Global";
}
