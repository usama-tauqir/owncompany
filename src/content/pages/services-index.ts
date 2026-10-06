import { siteConfig } from "@/config/site";
import type { PageContent } from "@/content/types";

export const servicesIndexPage: PageContent = {
  slug: "services",
  metaTitle: `Services | ${siteConfig.name}`,
  metaDescription: `Explore ${siteConfig.name}'s full range of services: software engineering, cloud, data and AI, business applications, commerce, gaming and advisory.`,
  blocks: [
    {
      type: "hero",
      eyebrow: "Services",
      title: "End-to-end capabilities to build, modernise and scale",
      subtitle: "From the first strategy workshop to long-term managed services, our teams cover every stage of the technology lifecycle.",
      cta: { label: "Discuss your project", href: "/contact" },
      secondaryCta: { label: "See case studies", href: "/case-studies" },
      tone: "purple",
      art: "services-hero",
    },
    {
      type: "intro",
      eyebrow: "How we help",
      title: "One partner for the whole journey",
      paragraphs: [
        "Most digital initiatives touch many disciplines at once: product strategy, design, engineering, data, cloud and security. We bring those capabilities together in integrated teams, so you don't have to coordinate multiple vendors.",
        "Engage us for a focused project, a dedicated team that grows with your roadmap, or a strategic transformation programme. Whatever the model, you'll get the same commitment to quality, transparency and outcomes.",
      ],
      highlights: [
        "Fixed-scope projects, dedicated teams and staff augmentation",
        "Certified specialists across major cloud and enterprise platforms",
        "Security and quality engineering built into every engagement",
      ],
      art: "services-intro",
    },
    {
      type: "stats",
      tone: "navy",
      items: [
        { value: siteConfig.stats.experts, suffix: "+", label: "Specialists across disciplines" },
        { value: siteConfig.stats.projects, suffix: "+", label: "Projects delivered" },
        { value: siteConfig.stats.countries, suffix: "+", label: "Countries served" },
        { value: siteConfig.stats.years, suffix: "+", label: "Years of experience" },
      ],
    },
    {
      type: "cta",
      title: "Not sure where to start?",
      subtitle: "Tell us about your challenge and we'll recommend the right mix of services and team.",
      cta: { label: "Talk to an expert", href: "/contact" },
      tone: "teal",
    },
    { type: "contact" },
  ],
};
