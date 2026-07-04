import styles from "./WebDevelopmentProcess.module.css";

const processImage =
  "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/677299f8ddaa81c25cd060f3_Website%20Development%20Process-100.avif";

export default function WebDevelopmentProcess() {
  return (
    <section
      className={styles.processDiagram}
      aria-label="Our Web Development Process"
    >
      <img
        src={processImage}
        alt="Our Web Development Process"
        className={styles.processImage}
        loading="lazy"
        sizes="100vw"
      />
    </section>
  );
}