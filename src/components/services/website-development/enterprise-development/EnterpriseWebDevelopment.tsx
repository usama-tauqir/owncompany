import { enterpriseServices } from "../data/enterpriseServicesData";

import EnterpriseServiceCard from "./EnterpriseServiceCard";

import styles from "./EnterpriseWebDevelopment.module.css";

const diagramImage =
  "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/67729370a0faac73a2c4f859_Website%20Development-100.avif";

export default function EnterpriseWebDevelopment() {
  return (
    <>
      <section className={styles.diagramSection}>
        <img
          src={diagramImage}
          alt=""
          className={styles.diagramImage}
          loading="lazy"
          sizes="100vw"
        />
      </section>

      <section className={styles.enterpriseSection}>
        <div className={styles.headingWrapper}>
          <h2 className={styles.heading}>
            Seamless &amp; Enterprise-ready Web Development
          </h2>
        </div>

        <div className={styles.cardsWrapper}>
          <div className={styles.cardsGrid}>
            {enterpriseServices.map((service, index) => (
              <EnterpriseServiceCard
                key={service.title}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}