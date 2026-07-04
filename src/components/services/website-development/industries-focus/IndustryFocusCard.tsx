import type { IndustryFocusItem } from "../data/industriesFocusData";

import styles from "./WebIndustriesFocus.module.css";

interface IndustryFocusCardProps {
  item: IndustryFocusItem;
}

export default function IndustryFocusCard({
  item,
}: IndustryFocusCardProps) {
  return (
    <article className={styles.industryCard}>
      <div className={styles.iconWrapper}>
        <img
          src={item.icon}
          alt={item.title}
          className={styles.icon}
          loading="lazy"
        />
      </div>

      <h3 className={styles.cardTitle}>{item.title}</h3>

      <p className={styles.description}>
        {item.description.map((part, index) => {
          if (typeof part === "string") {
            return <span key={index}>{part}</span>;
          }

          return <strong key={index}>{part.strong}</strong>;
        })}
      </p>
    </article>
  );
}