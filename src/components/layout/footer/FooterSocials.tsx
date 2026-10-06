import { siteConfig } from "@/config/site";

import styles from "./Footer.module.css";

type SocialIconType = "facebook" | "linkedin" | "instagram" | "x" | "youtube";

const iconFor: Record<string, SocialIconType> = {
  Facebook: "facebook",
  LinkedIn: "linkedin",
  Instagram: "instagram",
  X: "x",
  YouTube: "youtube",
};

function SocialIcon({
  type,
}: {
  type: SocialIconType;
}) {
  if (type === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"
        />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M19 3C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19ZM18.5 18.5V13.2C18.5 11.4 17.04 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C15.08 12.17 15.71 12.8 15.71 13.57V18.5H18.5ZM6.88 8.56C7.81 8.56 8.56 7.81 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C5.95 5.19 5.19 5.95 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
        />
      </svg>
    );
  }

  if (type === "youtube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.27 5 12 5 12 5s-6.27 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.73 19 12 19 12 19s6.27 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z"
        />
      </svg>
    );
  }

  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />

        <circle
          cx="12"
          cy="12"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />

        <circle
          cx="17.4"
          cy="6.6"
          r="1.2"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path
        fill="currentColor"
        d="M9.49 6.775L15.318 0H13.937L8.876 5.883L4.834 0H0.172L6.284 8.896L0.172 16H1.553L6.898 9.788L11.166 16H15.828L9.49 6.775ZM7.598 8.974L2.051 1.04H4.172L13.937 15.008H11.816L7.598 8.974Z"
      />
    </svg>
  );
}

export default function FooterSocials() {
  return (
    <div className={styles.socialLinks}>
      {siteConfig.socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
          aria-label={`Visit ${siteConfig.name} on ${social.name}`}
        >
          <SocialIcon type={iconFor[social.name] ?? "x"} />
        </a>
      ))}
    </div>
  );
}