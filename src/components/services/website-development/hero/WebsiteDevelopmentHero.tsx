import Link from "next/link";

import styles from "./WebsiteDevelopmentHero.module.css";

const heroImage =
  "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674b5421dd188bc887300d71_Web%20%26%20App%20dev.webp";

export default function WebsiteDevelopmentHero() {
  return (
    <header
      className={styles.sectionSubHeader}
      aria-labelledby="website-development-heading"
    >
      <div className={styles.subHeaderBackgroundWrapper}>
        <div className={styles.imageOverlay} aria-hidden="true" />

        <img
          src={heroImage}
          alt="Web Development"
          className={styles.subHeaderBackground}
          loading="eager"
          sizes="100vw"
        />
      </div>

      <div className={styles.container}>
        <div className={styles.paddingSection}>
          <div className={styles.subHeaderContentWrapper}>
            <div className={styles.subHeaderContent}>
              <div className={styles.marginSmall}>
                <h1
                  id="website-development-heading"
                  className={styles.eyebrow}
                >
                  Web Development
                </h1>
              </div>

              <div className={styles.marginMedium}>
                <p className={styles.heading}>
                  Building Seamless Experiences
                </p>
              </div>

              <div className={styles.marginButton}>
                <Link href="/contact" className={styles.primaryButton}>
                  <span>Build High-Performance Website</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}