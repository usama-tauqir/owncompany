import { siteConfig } from "@/config/site";
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
          {siteConfig.tagline}
        </h1>

        <p className={styles.heroDescription}>
          We design, build and run digital products for ambitious
          teams across the Americas, Europe, the Middle East and Asia.
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