"use client";

import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import styles from "./Navbar.module.css";

export interface NavbarCTAProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  className?: string;
}

export default function NavbarCTA({
  href,
  children,
  variant = "primary",
  onClick,
  className = "",
}: NavbarCTAProps) {
  const variantClass =
    variant === "primary"
      ? styles.navbarCTAPrimary
      : styles.navbarCTASecondary;

  return (
    <Link
      href={href}
      className={[
        styles.navbarCTA,
        variantClass,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}