import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PageTemplate from "@/components/templates/PageTemplate";
import { pages } from "@/content/pages";

/**
 * Builds the default export + metadata for a block-driven content page
 * (company, careers, legal and contact pages).
 */
export function createContentPage(slug: string) {
  const content = pages[slug];

  const metadata: Metadata = content
    ? { title: content.metaTitle, description: content.metaDescription }
    : {};

  function Page() {
    if (!content) notFound();
    return <PageTemplate blocks={content.blocks} />;
  }

  return { metadata, Page };
}
