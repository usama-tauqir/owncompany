"use client";

import Link from "next/link";

import { LogoIcon } from "@/components/layout/navbar/logo";

import FooterDropdown from "./FooterDropdown";
import FooterOffice from "./FooterOffice";
import FooterSocials from "./FooterSocials";

import {
  footerMenus,
  footerOffices,
} from "./footerData";

import styles from "./Footer.module.css";

export default function Footer() {
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
                menu={menu}
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
              href="mailto:global.business@devsinc.com"
              className={styles.businessEmail}
            >
              global.business@devsinc.com
            </a>

            <div className={styles.legalLinks}>
              <Link href="/terms-conditions">
                Terms and Conditions
              </Link>

              <Link href="/privacy-policy">
                Privacy Policy
              </Link>
            </div>
          </div>

          <FooterSocials />
        </div>
      </div>
    </footer>
  );
}