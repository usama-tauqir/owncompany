import Image from "next/image";

import type { PartnershipItem } from "./partnerships";

import styles from "./PartnershipsSection.module.css";

interface PartnershipLogoProps {
  partnership: PartnershipItem;
}

export default function PartnershipLogo({
  partnership,
}: PartnershipLogoProps) {
  return (
    <div className={styles.partnerItem}>
      <Image
        src={partnership.image}
        alt={partnership.name}
        width={partnership.width}
        height={partnership.height}
        className={styles.partnerImage}
        sizes="
          (max-width: 640px) 40vw,
          (max-width: 900px) 30vw,
          180px
        "
      />
    </div>
  );
}