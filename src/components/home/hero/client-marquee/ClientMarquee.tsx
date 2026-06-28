import Image from "next/image";

import {
  bottomClientLogos,
  topClientLogos,
  type ClientLogo,
} from "./clients";

import styles from "./ClientMarquee.module.css";

interface MarqueeRowProps {
  clients: ClientLogo[];
  direction: "left" | "right";
}

function LogoGroup({
  clients,
  hidden = false,
}: {
  clients: ClientLogo[];
  hidden?: boolean;
}) {
  return (
    <div
      className={styles.logoGroup}
      aria-hidden={hidden ? "true" : undefined}
    >
      {clients.map((client, index) => (
        <div
          key={`${client.name}-${index}`}
          className={styles.logoItem}
        >
          <Image
            src={client.image}
            alt={hidden ? "" : client.name}
            width={190}
            height={82}
            className={styles.clientLogo}
            sizes="(max-width: 640px) 120px, 170px"
          />
        </div>
      ))}
    </div>
  );
}

function MarqueeRow({
  clients,
  direction,
}: MarqueeRowProps) {
  return (
    <div className={styles.marqueeRow}>
      <div
        className={[
          styles.marqueeTrack,
          direction === "right"
            ? styles.marqueeTrackReverse
            : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <LogoGroup clients={clients} />
        <LogoGroup clients={clients} hidden />
      </div>
    </div>
  );
}

export default function ClientMarquee() {
  return (
    <section
      className={styles.section}
      aria-label="Companies we have worked with"
    >
      <div className={styles.marqueeContainer}>
        <MarqueeRow
          clients={topClientLogos}
          direction="left"
        />

        <MarqueeRow
          clients={bottomClientLogos}
          direction="right"
        />
      </div>
    </section>
  );
}