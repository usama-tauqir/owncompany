import Image from "next/image";
import Link from "next/link";

import type { ServiceItem } from "./services";

import styles from "./ServicesSection.module.css";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({
  service,
}: ServiceCardProps) {
  return (
    <Link
      href={service.href}
      className={styles.serviceCard}
      aria-label={`View ${service.title} service`}
    >
      <Image
        src={service.image}
        alt={service.title}
        fill
        className={styles.serviceImage}
        style={{
          objectPosition:
            service.imagePosition ?? "center center",
        }}
        sizes="
          (max-width: 640px) 100vw,
          (max-width: 1100px) 50vw,
          25vw
        "
      />

      <div
        className={styles.cardDarkOverlay}
        aria-hidden="true"
      />

      <div
        className={styles.cardHoverGradient}
        aria-hidden="true"
      />

      <h3 className={styles.serviceTitle}>
        {service.title}
      </h3>
    </Link>
  );
}