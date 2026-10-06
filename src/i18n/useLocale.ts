"use client";

import { usePathname } from "next/navigation";

import { directionFor, getDictionary, localeFromPath } from "./index";

/** Locale, direction and UI dictionary for the current route. */
export function useLocale() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);

  return {
    locale,
    dir: directionFor(locale),
    dict: getDictionary(locale),
    pathname,
  };
}
