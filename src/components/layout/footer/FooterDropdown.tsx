import Link from "next/link";

import type { FooterMenu } from "./footerData";

import styles from "./Footer.module.css";

interface FooterDropdownProps {
  menu: FooterMenu;
}

export default function FooterDropdown({
  menu,
}: FooterDropdownProps) {
  const panelClasses = [
    styles.dropdownPanel,
    menu.columns === 2 ? styles.dropdownPanelTwo : "",
    menu.columns === 3 ? styles.dropdownPanelThree : "",
    menu.align === "right"
      ? styles.dropdownPanelRight
      : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <details className={styles.dropdown}>
      <summary className={styles.dropdownTrigger}>
        <span>{menu.title}</span>

        <svg
          className={styles.dropdownChevron}
          viewBox="0 0 16 12"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2.558 2.058L8 7.5L13.442 2.058"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </svg>
      </summary>

      <div className={panelClasses}>
        {menu.links.map((link) => (
          <Link
            key={`${menu.id}-${link.href}-${link.label}`}
            href={link.href}
            className={styles.dropdownLink}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </details>
  );
}