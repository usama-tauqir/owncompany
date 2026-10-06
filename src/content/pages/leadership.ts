import { siteConfig } from "@/config/site";
import type { PageContent } from "@/content/types";

export const leadershipPage: PageContent = {
  slug: "leadership",
  metaTitle: `Leadership | ${siteConfig.name}`,
  metaDescription: `Meet the leadership team guiding ${siteConfig.name}'s strategy, delivery and culture across our global offices.`,
  blocks: [
    {
      type: "hero",
      eyebrow: "Leadership",
      title: "Leaders who stay close to the work",
      subtitle: `The ${siteConfig.name} leadership team combines decades of engineering, operations and client experience, and still spends time where the real work happens: with our teams and our clients.`,
      cta: { label: "Talk to our team", href: "/contact" },
      tone: "purple",
      art: "leadership-hero",
    },
    {
      type: "intro",
      eyebrow: "How we lead",
      title: "Servant leadership at every level",
      paragraphs: [
        "We believe leadership is a responsibility, not a title. Our leaders set direction, remove obstacles and create the conditions for teams to do exceptional work.",
        "Every member of our executive team is accessible to clients and colleagues alike. Decisions are made with data, discussed openly and explained clearly, so everyone understands not just what we are doing but why.",
      ],
      highlights: [
        "Executive sponsors assigned to every strategic account",
        "Quarterly open forums with the entire company",
        "Leadership development programmes for emerging managers",
      ],
      art: "leadership-intro",
    },
    {
      type: "people",
      title: "Executive team",
      subtitle: "The people responsible for our strategy, operations and growth.",
      items: [
        {
          name: "Founder Name",
          role: "Founder & Chief Executive Officer",
          bio: "Sets the company's long-term vision and remains closely involved with key client partnerships and engineering culture.",
        },
        {
          name: "COO Name",
          role: "Chief Operating Officer",
          bio: "Oversees global delivery, operational excellence and the systems that keep hundreds of projects running smoothly.",
        },
        {
          name: "CTO Name",
          role: "Chief Technology Officer",
          bio: "Leads technology strategy, engineering standards and our centres of excellence for cloud, data and AI.",
        },
        {
          name: "CFO Name",
          role: "Chief Financial Officer",
          bio: "Guides financial planning, governance and sustainable growth across our regions.",
        },
        {
          name: "CRO Name",
          role: "Chief Revenue Officer",
          bio: "Leads go-to-market strategy, client partnerships and our regional business development teams.",
        },
        {
          name: "CPO Name",
          role: "Chief People Officer",
          bio: "Shapes our talent strategy, culture and the programmes that help our people grow.",
        },
      ],
    },
    {
      type: "people",
      title: "Regional and practice leaders",
      subtitle: "Leaders who bring our capabilities to clients in every market we serve.",
      items: [
        { name: "Regional Lead Name", role: "Managing Director, North America" },
        { name: "Regional Lead Name", role: "Managing Director, MENA" },
        { name: "Regional Lead Name", role: "Country Director, KSA" },
        { name: "Regional Lead Name", role: "Managing Director, Europe & UK" },
        { name: "Practice Lead Name", role: "Head of Data & AI" },
        { name: "Practice Lead Name", role: "Head of Cloud & DevOps" },
        { name: "Practice Lead Name", role: "Head of Experience Design" },
        { name: "Practice Lead Name", role: "Head of Quality Engineering" },
      ],
    },
    {
      type: "featureGrid",
      eyebrow: "Our commitments",
      title: "What our leadership team promises",
      columns: 3,
      items: [
        {
          icon: "eye",
          title: "Transparency",
          description: "Clear communication on performance, priorities and the trade-offs behind every major decision.",
        },
        {
          icon: "scale",
          title: "Accountability",
          description: "We own our results, celebrate shared wins and take responsibility when things fall short.",
        },
        {
          icon: "compass",
          title: "Long-term thinking",
          description: "We invest in people, capabilities and relationships that will matter for years, not quarters.",
        },
      ],
    },
    {
      type: "cta",
      title: "Want to speak with our leadership?",
      subtitle: "Our executives regularly meet prospective partners to understand their goals first-hand.",
      cta: { label: "Request a meeting", href: "/contact" },
      tone: "navy",
    },
    { type: "contact" },
  ],
};
