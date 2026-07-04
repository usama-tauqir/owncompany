import type { TechStackItem } from "../data/techStackData";

import styles from "./WebTechStack.module.css";

interface TechStackIconProps {
  item: TechStackItem;
}

export default function TechStackIcon({ item }: TechStackIconProps) {
  return (
    <article className={styles.techCard}>
      <img
        src={item.image}
        alt={item.name}
        className={styles.techImage}
        loading="lazy"
        sizes="100vw"
      />
    </article>
  );
}