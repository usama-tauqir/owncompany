import Link from "next/link";

import styles from "./ScalableWebSolutionsCTA.module.css";

export default function ScalableWebSolutionsCTA() {
  return (
    <section className={styles.serviceCta}>
      <div className={styles.container}>
        <Link href="/contact" className={styles.primaryButton}>
          <span>Build Your Website Now</span>
        </Link>
      </div>
    </section>
  );
}