import Link from "next/link";

import AchievementCounter from "./AchievementCounter";
import { achievements } from "./achievements";

import styles from "./AchievementsSection.module.css";

export default function AchievementsSection() {
  return (
    <section
      className={styles.achievementsSection}
      aria-labelledby="achievements-heading"
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            Pioneering Trust and Innovation
          </p>

          <h2
            id="achievements-heading"
            className={styles.heading}
          >
            Devsinc&apos;s Achievements
          </h2>

          <div className={styles.description}>
            <p>
              We take pride in empowering businesses
              worldwide with innovative solutions.
            </p>

            <p>
              Devsinc brings an unwavering commitment
              to excellence, backed by a global
              presence.
            </p>
          </div>

          <Link
            href="/contact"
            className={styles.contactButton}
          >
            Get in Touch
          </Link>
        </div>

        <div
          className={styles.achievementsGrid}
          aria-label="Company achievements"
        >
          {achievements.map((achievement) => (
            <AchievementCounter
              key={achievement.id}
              value={achievement.value}
              suffix={achievement.suffix}
              label={achievement.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}