import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ServiceTemplate from "@/components/templates/ServiceTemplate";
import { getService, services } from "@/content/services";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  // website-development has its own static route that reuses the same template
  return services
    .filter((service) => service.slug !== "website-development")
    .map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return { title: `${service.name} Services`, description: service.summary };
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();
  return <ServiceTemplate service={service} />;
}
