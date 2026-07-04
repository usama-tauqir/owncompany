import Link from "next/link";

import HeroContent from "./HeroContent";
import HeroVideo from "./HeroVideo";

import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section
      className={styles.heroSection}
      aria-labelledby="home-hero-heading"
    >
      <HeroVideo />

      <div
        className={styles.backgroundOverlay}
        aria-hidden="true"
      />
      <div className={styles.contentContainer}>
        <HeroContent />
      </div>
    </section>
  );
}