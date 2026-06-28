"use client";

import { useState } from "react";

import ServiceCard from "./ServiceCard";
import { services } from "./services";

import styles from "./ServicesSection.module.css";

const INITIAL_SERVICES_COUNT = 4;

export default function ServicesSection() {
  const [expanded, setExpanded] = useState(false);

  const visibleServices = expanded
    ? services
    : services.slice(0, INITIAL_SERVICES_COUNT);

  const handleToggle = () => {
    setExpanded((currentValue) => !currentValue);
  };

  return (
    <section
      id="services"
      className={styles.servicesSection}
      aria-labelledby="services-heading"
    >
      <div
        className={styles.backgroundGlow}
        aria-hidden="true"
      />

      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <p className={styles.eyebrow}>
            Our Services
          </p>

          <h2
            id="services-heading"
            className={styles.heading}
          >
            Transform Your Business
          </h2>
        </header>

        <div className={styles.servicesGrid}>
          {visibleServices.map((service) => (
            <ServiceCard
              key={service.href}
              service={service}
            />
          ))}
        </div>

        <div className={styles.buttonWrapper}>
          <button
            type="button"
            className={styles.viewMoreButton}
            onClick={handleToggle}
            aria-expanded={expanded}
            aria-controls="services-grid"
          >
            <span>
              {expanded
                ? "View Less"
                : "View More Services"}
            </span>

            <svg
              className={[
                styles.arrowIcon,
                expanded ? styles.arrowIconExpanded : "",
              ]
                .filter(Boolean)
                .join(" ")}
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4.17 10.195L9 15L13.83 10.195C13.887 10.1516 13.934 10.0965 13.9678 10.0333C14.0016 9.9702 14.0215 9.90053 14.0261 9.82904C14.0306 9.75756 14.0198 9.68593 13.9942 9.61901C13.9687 9.55208 13.9291 9.49142 13.8781 9.44114C13.8271 9.39085 13.7659 9.35211 13.6986 9.32754C13.6313 9.30297 13.5595 9.29315 13.4881 9.29873C13.4167 9.30431 13.3473 9.32517 13.2847 9.35989C13.222 9.39462 13.1676 9.4424 13.125 9.5L9.5 13.095L9.5 3.53C9.5 3.39739 9.44732 3.27022 9.35355 3.17645C9.25979 3.08268 9.13261 3.03 9 3.03C8.86739 3.03 8.74022 3.08268 8.64645 3.17645C8.55268 3.27022 8.5 3.39739 8.5 3.53L8.5 13.095L4.875 9.5C4.78085 9.40651 4.65341 9.35425 4.52073 9.35472C4.38805 9.35519 4.26099 9.40835 4.1675 9.5025C4.07401 9.59665 4.02175 9.72409 4.02222 9.85677C4.02269 9.98945 4.07585 10.1165 4.17 10.21V10.195Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}