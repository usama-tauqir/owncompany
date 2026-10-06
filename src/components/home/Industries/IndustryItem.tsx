import Link from "next/link";

import Icon from "@/components/blocks/Icon";

import type { IndustryItemData } from "./industries";

import styles from "./IndustriesSection.module.css";

interface IndustryItemProps {
  industry: IndustryItemData;
}

export default function IndustryItem({
  industry,
}: IndustryItemProps) {
  return (
    <Link
      href={industry.href}
      className={styles.industryItem}
      aria-label={`Explore ${industry.title}`}
    >
      <span className={styles.industryContent}>
        <Icon name={industry.icon} size={34} className={styles.industryIcon} />

        <span className={styles.industryTitle}>
          {industry.title}
        </span>
      </span>

      <svg
        className={styles.arrowIcon}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5 12H19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <path
          d="M14 7L19 12L14 17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span
        className={styles.hoverLine}
        aria-hidden="true"
      />
    </Link>
  );
}