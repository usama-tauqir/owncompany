import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Icon from "@/components/blocks/Icon";
import styles from "@/components/blocks/Blocks.module.css";
import { industries } from "@/content/industries";
import { serviceCategories, servicesByCategory } from "@/content/services";

import local from "./Templates.module.css";

export function ServicesCatalog() {
  return (
    <div className={styles.blockWrap}>
      <section className={styles.section} id="catalogue">
        <div className={styles.container}>
          {serviceCategories.map((category) => {
            const items = servicesByCategory(category);
            if (items.length === 0) return null;

            return (
              <div key={category} className={local.catalogGroup}>
                <h2 className={local.catalogHeading}>{category}</h2>
                <div className={styles.grid} data-columns={3}>
                  {items.map((service) => (
                    <Link key={service.slug} href={`/services/${service.slug}`} className={styles.card}>
                      <span className={styles.cardIcon}>
                        <Icon name={service.icon} />
                      </span>
                      <h3 className={styles.cardTitle}>{service.name}</h3>
                      <p className={styles.cardText}>{service.summary}</p>
                      <ArrowUpRight className={styles.cardArrow} size={22} aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export function IndustriesCatalog() {
  return (
    <div className={styles.blockWrap}>
      <section className={styles.section} id="catalogue">
        <div className={styles.container}>
          <div className={styles.grid} data-columns={3}>
            {industries.map((industry) => (
              <Link key={industry.slug} href={`/industry/${industry.slug}`} className={styles.card}>
                <span className={styles.cardIcon}>
                  <Icon name={industry.icon} />
                </span>
                <h3 className={styles.cardTitle}>{industry.name}</h3>
                <p className={styles.cardText}>{industry.summary}</p>
                <ArrowUpRight className={styles.cardArrow} size={22} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
