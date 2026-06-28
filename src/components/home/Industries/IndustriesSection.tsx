import IndustryItem from "./IndustryItem";
import { industries } from "./industries";

import styles from "./IndustriesSection.module.css";

export default function IndustriesSection() {
  return (
    <section
      className={styles.industriesSection}
      aria-labelledby="industries-heading"
    >
      <div className={styles.container}>
        <h2
          id="industries-heading"
          className={styles.heading}
        >
          Discover our Impact Across Industries
        </h2>

        <div className={styles.industriesGrid}>
          {industries.map((industry) => (
            <IndustryItem
              key={industry.href}
              industry={industry}
            />
          ))}
        </div>
      </div>
    </section>
  );
}