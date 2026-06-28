import Link from "next/link";

import styles from "./CTASection.module.css";

export default function CTASection() {
  return (
    <section
      className={styles.ctaSection}
      aria-label="Contact our team"
    >
      <div className={styles.container}>
        <Link
          href="/contact"
          className={styles.ctaButton}
        >
          Let&apos;s Talk Business
        </Link>
      </div>
    </section>
  );
}