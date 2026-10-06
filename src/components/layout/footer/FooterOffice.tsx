import type { FooterOfficeData } from "./footerData";

import styles from "./Footer.module.css";

interface FooterOfficeProps {
  office: FooterOfficeData;
}

export default function FooterOffice({
  office,
}: FooterOfficeProps) {
  return (
    <article className={styles.office}>
      <div className={styles.officeHeader}>
        <h3 className={styles.officeTitle}>
          <strong>{office.country}</strong>{" "}
          <span>({office.officeType})</span>
        </h3>

        <span className={styles.officeFlag} role="img" aria-label={`${office.country} flag`}>
          {office.flag}
        </span>
      </div>

      <address className={styles.officeAddress}>
        {office.addressLines.map((line) => (
          <span key={line}>
            {line}
            <br />
          </span>
        ))}
      </address>
    </article>
  );
}