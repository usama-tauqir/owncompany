"use client";

import Link from "next/link";

import LogoIcon from "./LogoIcon";
import LogoText from "./LogoText";

import styles from "../Navbar.module.css";

interface NavbarLogoProps {
  onNavigate?: () => void;
}

export default function NavbarLogo({
  onNavigate,
}: NavbarLogoProps) {
  return (
    <Link
      href="/"
      className={styles.navbarLogoLink}
      aria-label="Homepage"
      onClick={onNavigate}
    >
      <span className={styles.logoAnimationFrame}>
        <LogoIcon className={styles.logoInsignia} />

        <LogoText className={styles.logoWordmark} />
      </span>
    </Link>
  );
}