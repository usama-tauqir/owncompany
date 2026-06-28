import ContactForm from "./ContactForm";
import ContactInfoCard from "./ContactInfoCard";

import styles from "./ContactGlobalSection.module.css";

function DecorativeArc() {
  return (
    <svg
      viewBox="0 0 412 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.decorativeArc}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient
          id="contact-decoration-gradient"
          x1="30"
          y1="48"
          x2="386"
          y2="390"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0"
            stopColor="#BCEEEE"
            stopOpacity="0.22"
          />

          <stop
            offset="0.23"
            stopColor="#88DEDD"
            stopOpacity="0.75"
          />

          <stop
            offset="0.48"
            stopColor="#10BBB7"
          />

          <stop
            offset="0.72"
            stopColor="#7ADBD9"
            stopOpacity="0.85"
          />

          <stop
            offset="1"
            stopColor="#D8F6F5"
            stopOpacity="0.2"
          />
        </linearGradient>
      </defs>

      {/* Turquoise curved line */}
      <path
        d="
          M 30 50
          C 97 53, 161 67, 220 99
          C 209 113, 204 129, 205 146
          C 207 184, 235 212, 274 212
          C 292 212, 308 205, 321 194
          C 356 241, 378 307, 385 385
        "
        stroke="url(#contact-decoration-gradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />

      {/* Black outlined circle */}
      <circle
        cx="273"
        cy="140"
        r="54"
        fill="#FFFFFF"
        stroke="#080808"
        strokeWidth="3"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default function ContactGlobalSection() {
  return (
    <section
      className={styles.section}
      aria-labelledby="contact-global-heading"
    >
      <div className={styles.container}>
        <ContactForm />

        <aside className={styles.informationColumn}>
          <div className={styles.decorationWrapper}>
            <DecorativeArc />
          </div>

          <div className={styles.infoCards}>
            <ContactInfoCard
              title="Global Presence"
              description="We're across 5 continents, explore our office nearest to you."
              href="/about-us#geography"
              icon="globe"
            />

            <ContactInfoCard
              title="Global Leaders"
              description="Our capability and competencies are backed by diverse Global leadership."
              href="/#global-leaders"
              icon="leaders"
            />
          </div>
        </aside>
      </div>
    </section>
  );
}