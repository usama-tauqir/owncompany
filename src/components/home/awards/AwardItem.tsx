import Image from "next/image";

import type { AwardItemData } from "./awards";

import styles from "./AwardsSection.module.css";

interface AwardItemProps {
  award: AwardItemData;
}

export default function AwardItem({
  award,
}: AwardItemProps) {
  return (
    <div className={styles.awardItem}>
      <Image
        src={award.image}
        alt={award.name}
        width={award.width}
        height={award.height}
        className={styles.awardImage}
        sizes="
          (max-width: 640px) 40vw,
          (max-width: 900px) 28vw,
          180px
        "
      />
    </div>
  );
}