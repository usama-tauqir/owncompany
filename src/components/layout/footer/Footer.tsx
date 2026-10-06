"use client";

import Link from "next/link";

import { LogoIcon } from "@/components/layout/navbar/logo";
import { siteConfig } from "@/config/site";
import { useLocale } from "@/i18n/useLocale";

import FooterDropdown from "./FooterDropdown";
import FooterOffice from "./FooterOffice";
import FooterSocials from "./FooterSocials";

import {
  footerMenus,
  footerOffices,
} from "./footerData";

import styles from "./Footer.module.css";

export default function Footer() {
  const { dict } = useLocale();

  const titles: Record<string, string> = {
    company: dict.footer.company,
    industries: dict.footer.industries,
    services: dict.footer.services,
    resources: dict.footer.resources,
  };

  return (
    <footer className={styles.footer}>
      <div
        className={styles.footerGradient}
        aria-hidden="true"
      />

      <div className={styles.container}>
        <div className={styles.topRow}>
          <Link
            href="/"
            className={styles.footerLogo}
            aria-label="Go to homepage"
          >
            <LogoIcon className={styles.footerLogoIcon} />
          </Link>

          <nav
            className={styles.footerNavigation}
            aria-label="Footer navigation"
          >
            {footerMenus.map((menu) => (
              <FooterDropdown
                key={menu.id}
                menu={{ ...menu, title: titles[menu.id] ?? menu.title }}
              />
            ))}
          </nav>
        </div>

        <div className={styles.officeGrid}>
          {footerOffices.map((office) => (
            <FooterOffice
              key={office.country}
              office={office}
            />
          ))}
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.bottomLeft}>
            <a
              href={`mailto:${siteConfig.email.business}`}
              className={styles.businessEmail}
            >
              {siteConfig.email.business}
            </a>

            <div className={styles.legalLinks}>
              <Link href="/terms-conditions">{dict.footer.terms}</Link>

              <Link href="/privacy-policy">{dict.footer.privacy}</Link>

              <span>
                © {new Date().getFullYear()} {siteConfig.legalName}. {dict.footer.rights}
              </span>
            </div>
          </div>

          <FooterSocials />
        </div>
      </div>
    </footer>
  );
}