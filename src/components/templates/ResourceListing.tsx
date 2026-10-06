import BlockRenderer from "@/components/blocks/BlockRenderer";
import styles from "@/components/blocks/Blocks.module.css";
import Footer from "@/components/layout/footer";
import { resources } from "@/content/resources";
import type { ResourceKind } from "@/content/types";

import ResourceFilter from "./ResourceFilter";

export interface ListingCopy {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export default function ResourceListing({
  kind,
  copy,
}: {
  kind?: ResourceKind;
  copy: ListingCopy;
}) {
  const items = resources
    .filter((item) => !kind || item.kind === kind)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <main>
        <BlockRenderer
          blocks={[
            {
              type: "hero",
              eyebrow: copy.eyebrow,
              title: copy.title,
              subtitle: copy.subtitle,
              tone: "teal",
              art: `listing-${kind ?? "all"}`,
            },
          ]}
        />

        <div className={styles.blockWrap}>
          <section className={styles.section}>
            <div className={styles.container}>
              <ResourceFilter items={items} />
            </div>
          </section>
        </div>

        <BlockRenderer
          blocks={[
            {
              type: "cta",
              title: "Have a challenge worth solving?",
              subtitle: "Our architects and strategists are ready to help you turn ideas into shipped products.",
              cta: { label: "Let's talk", href: "/contact" },
            },
            { type: "contact" },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
