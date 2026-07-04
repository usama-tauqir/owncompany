import Link from "next/link";

import { techStackData } from "../data/techStackData";

import TechStackIcon from "./TechStackIcon";

import styles from "./WebTechStack.module.css";

export default function WebTechStack() {
  return (
    <section className={styles.techSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Our Tech Stack</h2>

          <p className={styles.description}>
            Equipped with the latest tools, our teams deliver impactful
            solutions designed to grow your business.
          </p>
        </div>

        <div className={styles.techGrid}>
          {techStackData.map((item) => (
            <TechStackIcon key={item.name} item={item} />
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <Link href="/contact" className={styles.primaryButton}>
            <span>Let&apos;s Connect</span>
          </Link>
        </div>
      </div>
    </section>
  );
}