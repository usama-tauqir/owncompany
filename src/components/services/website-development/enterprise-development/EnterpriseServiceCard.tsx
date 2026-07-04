import Link from "next/link";

import type { EnterpriseService } from "../data/enterpriseServicesData";

import styles from "./EnterpriseWebDevelopment.module.css";

interface EnterpriseServiceCardProps {
  service: EnterpriseService;
  index: number;
}

export default function EnterpriseServiceCard({
  service,
  index,
}: EnterpriseServiceCardProps) {
  const isFirst = index === 0;
  const isDarkText = service.textColor === "black";

  return (
    <article
      className={[
        styles.card,
        isFirst && styles.cardActive,
        isDarkText && styles.cardDarkText,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <img
        src={service.image}
        alt={service.title}
        className={styles.cardImage}
        loading="lazy"
        sizes="100vw"
      />

      <div className={styles.cardOverlay} />

      <div className={styles.cardContent}>
        <div>
          <h3 className={styles.cardTitle}>{service.title}</h3>

          <p className={styles.cardDescription}>
            {service.description}
          </p>
        </div>

        <div className={styles.cardButtonWrapper}>
          <Link href="/contact" className={styles.cardButton}>
            Get in Touch
          </Link>
        </div>
      </div>
    </article>
  );
}