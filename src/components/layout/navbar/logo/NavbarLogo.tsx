"use client";

import Link from "next/link";
import LogoIcon from "./LogoIcon";
import styles from "../Navbar.module.css";

export interface NavbarLogoProps {
  onNavigate?: () => void;
}

export default function NavbarLogo({
  onNavigate,
}: NavbarLogoProps) {
  return (
    <Link
      href="/"
      className={styles.navbarLogo}
      aria-label="Homepage"
      onClick={onNavigate}
    >
      <LogoIcon />
    </Link>
  );
}