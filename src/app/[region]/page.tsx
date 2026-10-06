import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PageTemplate from "@/components/templates/PageTemplate";
import { regionBySlug, regions } from "@/content/regions";

interface Props {
  params: Promise<{ region: string }>;
}

/* Only the regional landing pages live at the top level; everything else 404s. */
export const dynamicParams = false;

export function generateStaticParams() {
  return regions.map((region) => ({ region: region.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const region = regionBySlug((await params).region);
  if (!region) return {};
  return {
    title: region.metaTitle,
    description: region.metaDescription,
    alternates: region.slug.startsWith("ksa-")
      ? { languages: { en: "/ksa-english", ar: "/ksa-arabic" } }
      : undefined,
  };
}

export default async function RegionPage({ params }: Props) {
  const region = regionBySlug((await params).region);
  if (!region) notFound();
  return <PageTemplate blocks={region.blocks} locale={region.locale} />;
}
