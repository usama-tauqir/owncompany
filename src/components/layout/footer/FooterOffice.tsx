import Image from "next/image";

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

        <Image
          src={office.flag}
          alt={`${office.country} flag`}
          width={35}
          height={20}
          className={styles.officeFlag}
        />
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