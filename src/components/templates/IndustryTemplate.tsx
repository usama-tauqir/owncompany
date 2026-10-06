import BlockRenderer from "@/components/blocks/BlockRenderer";
import Footer from "@/components/layout/footer";
import { getService } from "@/content/services";
import type { Block, Industry } from "@/content/types";

export function industryBlocks(industry: Industry): Block[] {
  const relatedServices = industry.services
    .map((slug) => getService(slug))
    .filter((service) => service !== undefined);

  const blocks: Block[] = [
    {
      type: "hero",
      eyebrow: industry.name,
      title: industry.headline,
      subtitle: industry.summary,
      cta: { label: "Talk to an industry expert", href: "/contact" },
      tone: "purple",
      art: industry.slug,
    },
    {
      type: "intro",
      eyebrow: "Overview",
      title: industry.overview.title,
      paragraphs: industry.overview.paragraphs,
      highlights: industry.overview.highlights,
      art: `${industry.slug}-overview`,
      reverse: true,
    },
    {
      type: "featureGrid",
      eyebrow: "Challenges",
      title: `What's holding ${industry.name} back`,
      columns: 4,
      items: industry.challenges,
    },
    {
      type: "featureGrid",
      eyebrow: "Solutions",
      title: "What we build",
      columns: 3,
      tone: "navy",
      items: industry.solutions,
    },
    {
      type: "stats",
      title: "Outcomes we design for",
      items: industry.stats,
    },
    {
      type: "linkGrid",
      eyebrow: "Capabilities",
      title: "Services that power this sector",
      links: relatedServices.map((service) => ({
        label: service.name,
        href: `/services/${service.slug}`,
        description: service.headline,
        icon: service.icon,
      })),
    },
  ];

  if (industry.testimonial) {
    blocks.push({
      type: "testimonials",
      title: "What our clients say",
      items: [industry.testimonial],
    });
  }

  blocks.push(
    {
      type: "resources",
      title: "Case studies & insights",
      kind: "case-study",
      limit: 3,
      viewAll: { label: "All case studies", href: "/case-studies" },
    },
    { type: "faq", title: "Frequently asked questions", items: industry.faqs },
    {
      type: "cta",
      title: `Ready to modernise ${industry.name}?`,
      subtitle: "Share your goals and we'll come back with a delivery plan within two business days.",
      cta: { label: "Start a conversation", href: "/contact" },
    },
    { type: "contact" },
  );

  return blocks;
}

export default function IndustryTemplate({ industry }: { industry: Industry }) {
  return (
    <>
      <main>
        <BlockRenderer blocks={industryBlocks(industry)} />
      </main>
      <Footer />
    </>
  );
}
