import type { Locale } from "@/content/types";

import { ar } from "./ar";
import { en, type Dictionary } from "./en";

export type { Dictionary };

const dictionaries: Record<Locale, Dictionary> = { en, ar };

export function getDictionary(locale: Locale = "en"): Dictionary {
  return dictionaries[locale] ?? en;
}

/** Regional routes that render in a non-English locale. */
const localeRoutes: Record<string, Locale> = {
  "/ksa-arabic": "ar",
};

export function localeFromPath(pathname: string | null): Locale {
  if (!pathname) return "en";
  const match = Object.keys(localeRoutes).find(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
  return match ? localeRoutes[match] : "en";
}

export function directionFor(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}
