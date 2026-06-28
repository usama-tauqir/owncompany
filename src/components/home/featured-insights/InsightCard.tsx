import Image from "next/image";
import Link from "next/link";

import type { InsightItem } from "./insights";

import styles from "./FeaturedInsightsSection.module.css";

interface InsightCardProps {
  insight: InsightItem;
}

export default function InsightCard({
  insight,
}: InsightCardProps) {
  return (
    <Link
      href={insight.href}
      className={styles.insightCard}
      aria-label={`Explore ${insight.title}`}
    >
      <Image
        src={insight.image}
        alt=""
        fill
        className={styles.cardImage}
        style={{
          objectPosition:
            insight.imagePosition ?? "center center",
        }}
        sizes="
          (max-width: 700px) 92vw,
          (max-width: 1050px) 45vw,
          22vw
        "
      />

      <span
        className={styles.imageOverlay}
        aria-hidden="true"
      />

      <span
        className={styles.blurOverlay}
        aria-hidden="true"
      />

      <span className={styles.cardContent}>
        <span className={styles.cardType}>
          {insight.type}
        </span>

        <span className={styles.cardTitle}>
          {insight.title}
        </span>
      </span>

      <span className={styles.cardExploreButton}>
        <span>Explore More</span>

        <span
          className={styles.cardArrowWrapper}
          aria-hidden="true"
        >
          <svg
            className={styles.cardArrow}
            viewBox="0 0 12 20"
            fill="none"
          >
            <path
              d="M1 1L10 10L1 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </span>
    </Link>
  );
}