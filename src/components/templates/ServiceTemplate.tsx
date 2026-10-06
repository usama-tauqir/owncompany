import BlockRenderer from "@/components/blocks/BlockRenderer";
import Footer from "@/components/layout/footer";
import { industries } from "@/content/industries";
import type { Block, Service } from "@/content/types";

export function serviceBlocks(service: Service): Block[] {
  const relatedIndustries = service.industries
    .map((slug) => industries.find((industry) => industry.slug === slug))
    .filter((industry) => industry !== undefined);

  return [
    {
      type: "hero",
      eyebrow: service.name,
      title: service.headline,
      subtitle: service.summary,
      cta: { label: service.heroCta, href: "/contact" },
      tone: "navy",
      art: service.slug,
    },
    {
      type: "intro",
      eyebrow: "Overview",
      title: service.overview.title,
      paragraphs: service.overview.paragraphs,
      highlights: service.overview.highlights,
      art: `${service.slug}-overview`,
    },
    {
      type: "featureGrid",
      eyebrow: "What we offer",
      title: service.offerings.title,
      subtitle: service.offerings.subtitle,
      columns: 3,
      items: service.offerings.items,
    },
    {
      type: "cta",
      title: service.midCta.title,
      subtitle: service.midCta.subtitle,
      cta: { label: service.midCta.label, href: "/contact" },
    },
    {
      type: "process",
      eyebrow: "How we deliver",
      title: service.process.title,
      steps: service.process.steps,
    },
    {
      type: "featureGrid",
      eyebrow: "Why us",
      title: `Why teams choose us for ${service.name}`,
      columns: 4,
      tone: "navy",
      items: service.benefits,
    },
    {
      type: "linkGrid",
      eyebrow: "Industries in focus",
      title: "Built for the sectors we know best",
      links: relatedIndustries.map((industry) => ({
        label: industry.name,
        href: `/industry/${industry.slug}`,
        description: industry.headline,
        icon: industry.icon,
      })),
    },
    {
      type: "techStack",
      title: "Our technology stack",
      subtitle: "Proven tools we select from based on your constraints, team skills and roadmap.",
      groups: service.techStack,
    },
    {
      type: "faq",
      title: "Frequently asked questions",
      items: service.faqs,
    },
    {
      type: "resources",
      title: "Featured insights",
      limit: 3,
      viewAll: { label: "View all", href: "/blogs" },
    },
    { type: "contact" },
  ];
}

export default function ServiceTemplate({ service }: { service: Service }) {
  return (
    <>
      <main>
        <BlockRenderer blocks={serviceBlocks(service)} />
      </main>
      <Footer />
    </>
  );
}
