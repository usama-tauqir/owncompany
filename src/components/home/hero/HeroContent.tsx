import Link from "next/link";

import FeaturedPublications from "./FeaturedPublications";

import styles from "./HeroSection.module.css";

export default function HeroContent() {
  return (
    <div className={styles.heroContent}>
      <div className={styles.heroCopy}>
        <h1
          id="home-hero-heading"
          className={styles.heroHeading}
        >
          Building at the Speed of AI
        </h1>

        <p className={styles.heroDescription}>
          We help companies across North America, Middle East,
          Africa and Asia Pacific with technological development
        </p>

        <Link
          href="/contact"
          className={styles.primaryButton}
        >
          Get in Touch
        </Link>
      </div>

      <FeaturedPublications />
    </div>
  );
}