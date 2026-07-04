import Link from "next/link";

import { industriesFocusData } from "../data/industriesFocusData";

import IndustryFocusCard from "./IndustryFocusCard";

import styles from "./WebIndustriesFocus.module.css";

export default function WebIndustriesFocus() {
  return (
    <section className={styles.industriesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Industries We Focus</p>

          <h2 className={styles.heading}>
            Industries We Serve with Our Custom Web Development Services
          </h2>
        </div>

        <div className={styles.grid}>
          {industriesFocusData.map((item) => (
            <IndustryFocusCard key={item.title} item={item} />
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <Link href="/contact" className={styles.primaryButton}>
            <span>Transform Your Digital Presence</span>
          </Link>
        </div>
      </div>
    </section>
  );
}