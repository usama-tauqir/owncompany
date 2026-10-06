import { siteConfig } from "@/config/site";
import type { PageContent } from "@/content/types";

export const industriesIndexPage: PageContent = {
  slug: "industry",
  metaTitle: `Industries | ${siteConfig.name}`,
  metaDescription: `${siteConfig.name} brings deep domain expertise to financial services, healthcare, retail, energy, education, government and more.`,
  blocks: [
    {
      type: "hero",
      eyebrow: "Industries",
      title: "Domain expertise that speeds up every project",
      subtitle: "Technology works best when it's built by people who understand your industry's customers, regulations and pressures.",
      cta: { label: "Discuss your industry", href: "/contact" },
      secondaryCta: { label: "Explore services", href: "/services" },
      tone: "teal",
      art: "industries-hero",
    },
    {
      type: "intro",
      eyebrow: "Why it matters",
      title: "We speak your industry's language",
      paragraphs: [
        "Over the years we've built specialised teams and reusable accelerators for the sectors we serve most. That means less time explaining the basics and more time solving the problems that make your business unique.",
        "Our industry leads work alongside architects and engineers to make sure every solution respects the compliance rules, legacy systems and customer expectations specific to your field.",
      ],
      highlights: [
        "Sector-specific compliance and security expertise",
        "Reusable accelerators that shorten time to market",
        "Teams experienced with your industry's core platforms",
      ],
      art: "industries-intro",
    },
    {
      type: "cta",
      title: "Let's solve your industry's toughest challenges",
      subtitle: "Talk to a team that already understands your world.",
      cta: { label: "Get in touch", href: "/contact" },
      tone: "purple",
    },
    { type: "contact" },
  ],
};
