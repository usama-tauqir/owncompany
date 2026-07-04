import Link from "next/link";

import styles from "./DigitalPresenceCTA.module.css";

export default function DigitalPresenceCTA() {
  return (
    <section className={styles.serviceCta}>
      <div className={styles.container}>
        <Link href="/contact" className={styles.primaryButton}>
          <span>Create Scalable Web Solutions</span>
        </Link>
      </div>
    </section>
  );
}