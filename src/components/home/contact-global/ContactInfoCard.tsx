import Link from "next/link";

import styles from "./ContactGlobalSection.module.css";

type ContactInfoIcon = "globe" | "leaders";

interface ContactInfoCardProps {
  title: string;
  description: string;
  href: string;
  icon: ContactInfoIcon;
}

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="currentColor"
      />

      <path
        d="M3.5 10.5H8L9.8 7.4L8.8 4.4M20.4 8.2L16.8 9.1L15 12.2L17.3 14.3L16.6 19M6.3 16.8L9.2 15L12 16.2L12.6 20.5"
        stroke="#ffffff"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LeadersIcon() {
  return (
    <svg
      viewBox="0 0 28 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="10"
        cy="7"
        r="4"
        fill="currentColor"
      />

      <circle
        cx="19.5"
        cy="8"
        r="3.5"
        fill="currentColor"
        opacity="0.82"
      />

      <path
        d="M2.5 20C2.5 15.8 5.6 13 10 13C14.4 13 17.5 15.8 17.5 20"
        fill="currentColor"
      />

      <path
        d="M15 19.5C15.2 16.3 17.5 14.2 20.5 14.2C23.5 14.2 25.7 16.2 26 19.5"
        fill="currentColor"
        opacity="0.82"
      />
    </svg>
  );
}

export default function ContactInfoCard({
  title,
  description,
  href,
  icon,
}: ContactInfoCardProps) {
  return (
    <article className={styles.infoCard}>
      <div className={styles.infoCardContent}>
        <div className={styles.infoIcon}>
          {icon === "globe" ? (
            <GlobeIcon />
          ) : (
            <LeadersIcon />
          )}
        </div>

        <div className={styles.infoText}>
          <h3 className={styles.infoTitle}>
            {title}
          </h3>

          <p className={styles.infoDescription}>
            {description}
          </p>

          <Link
            href={href}
            className={styles.learnMoreButton}
          >
            Learn more
          </Link>
        </div>
      </div>

      <span
        className={styles.infoAccentLine}
        aria-hidden="true"
      />
    </article>
  );
}