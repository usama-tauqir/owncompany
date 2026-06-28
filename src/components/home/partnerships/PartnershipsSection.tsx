import PartnershipLogo from "./PartnershipLogo";
import { partnerships } from "./partnerships";

import styles from "./PartnershipsSection.module.css";

export default function PartnershipsSection() {
  return (
    <section
      className={styles.partnershipsSection}
      aria-labelledby="partnerships-heading"
    >
      <div className={styles.container}>
        <h2
          id="partnerships-heading"
          className={styles.heading}
        >
          Our Partnerships
        </h2>

        <div className={styles.partnershipsGrid}>
          {partnerships.map((partnership) => (
            <PartnershipLogo
              key={partnership.name}
              partnership={partnership}
            />
          ))}
        </div>
      </div>
    </section>
  );
}