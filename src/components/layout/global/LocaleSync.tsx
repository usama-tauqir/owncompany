"use client";

import { useEffect } from "react";
import Link from "next/link";

import { useLocale } from "@/i18n/useLocale";

/**
 * Keeps <html lang/dir> in sync with the active regional route so
 * Arabic pages render right-to-left (including navbar and footer).
 */
export function LocaleSync() {
  const { locale, dir } = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, dir]);

  return null;
}

/** Vertical "Let's Talk Business" tab pinned to the viewport edge. */
export function FloatingContact() {
  const { dict } = useLocale();

  return (
    <Link href="/contact" className="floatingContactButton" aria-label={dict.nav.letsTalkBusiness}>
      <span>{dict.nav.letsTalkBusiness}</span>
    </Link>
  );
}
