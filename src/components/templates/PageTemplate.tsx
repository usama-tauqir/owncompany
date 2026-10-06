import type { ReactNode } from "react";

import BlockRenderer from "@/components/blocks/BlockRenderer";
import Footer from "@/components/layout/footer";
import type { Block, Locale } from "@/content/types";
import { directionFor } from "@/i18n";

interface PageTemplateProps {
  blocks: Block[];
  locale?: Locale;
  /**
   * Extra content inserted after the block at `insertAfter`
   * (e.g. a catalogue grid placed right after the hero).
   */
  children?: ReactNode;
  insertAfter?: number;
}

export default function PageTemplate({
  blocks,
  locale = "en",
  children,
  insertAfter = 0,
}: PageTemplateProps) {
  const head = children ? blocks.slice(0, insertAfter + 1) : blocks;
  const tail = children ? blocks.slice(insertAfter + 1) : [];

  return (
    <div lang={locale} dir={directionFor(locale)}>
      <main>
        <BlockRenderer blocks={head} locale={locale} />
        {children}
        {tail.length > 0 && <BlockRenderer blocks={tail} locale={locale} />}
      </main>
      <Footer />
    </div>
  );
}
