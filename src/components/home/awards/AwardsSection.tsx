import AwardItem from "./AwardItem";
import { awards } from "./awards";

import styles from "./AwardsSection.module.css";

export default function AwardsSection() {
  return (
    <section
      className={styles.awardsSection}
      aria-labelledby="awards-heading"
    >
      <div className={styles.container}>
        <h2
          id="awards-heading"
          className={styles.heading}
        >
          Awards and Certifications
        </h2>

        <div className={styles.awardsGrid}>
          {awards.map((award) => (
            <AwardItem
              key={award.name}
              award={award}
            />
          ))}
        </div>
      </div>
    </section>
  );
}