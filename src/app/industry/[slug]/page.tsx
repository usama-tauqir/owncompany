import type { Metadata } from "next";
import { notFound } from "next/navigation";

import IndustryTemplate from "@/components/templates/IndustryTemplate";
import { industries } from "@/content/industries";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

const find = (slug: string) => industries.find((industry) => industry.slug === slug);

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const industry = find((await params).slug);
  if (!industry) return {};
  return { title: `${industry.name} Solutions`, description: industry.summary };
}

export default async function IndustryPage({ params }: Props) {
  const industry = find((await params).slug);
  if (!industry) notFound();
  return <IndustryTemplate industry={industry} />;
}
