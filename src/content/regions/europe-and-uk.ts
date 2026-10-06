import { siteConfig } from "@/config/site";
import type { RegionContent } from "@/content/types";

export const europeAndUkRegion: RegionContent = {
  slug: "europe-and-uk",
  label: "Europe & UK",
  locale: "en",
  metaTitle: `${siteConfig.name} Europe & UK | GDPR-Ready Software Engineering Partner`,
  metaDescription: `${siteConfig.name} helps UK and European organizations modernize platforms, adopt AI and run secure cloud operations with GDPR-aware delivery and a London-based team.`,
  blocks: [
    {
      type: "hero",
      eyebrow: "United Kingdom & Europe",
      title: "Modernize with confidence, compliance built in",
      subtitle: `${siteConfig.name} supports UK and European businesses with engineering, data and cloud teams that respect your regulatory landscape from the first line of code.`,
      cta: { label: "Speak to our London team", href: "/contact" },
      secondaryCta: { label: "View services", href: "/services" },
      tone: "navy",
      art: "europe-uk-hero",
    },
    {
      type: "stats",
      title: "Proven at scale",
      tone: "light",
      items: [
        { value: siteConfig.stats.experts, suffix: "+", label: "Engineers and consultants" },
        { value: siteConfig.stats.projects, suffix: "+", label: "Projects delivered" },
        { value: siteConfig.stats.countries, suffix: "+", label: "Countries served" },
        { value: siteConfig.stats.years, suffix: "+", label: "Years of experience" },
      ],
    },
    {
      type: "intro",
      eyebrow: "Why Europe & UK",
      title: "Technology delivery shaped by privacy and trust",
      paragraphs: [
        "European organizations face a demanding mix of regulation: GDPR and UK GDPR, sector rules in finance and healthcare, accessibility standards and an evolving framework for AI. Getting delivery right means treating these as design inputs rather than afterthoughts.",
        `${siteConfig.name} has a London office for account leadership and architecture, and our delivery teams enjoy a comfortable working-day overlap with UK and Central European time. We keep personal data in EU or UK cloud regions and document processing in a way your DPO will appreciate.`,
      ],
      highlights: [
        "Privacy by design and data processing agreements as standard",
        "Hosting in EU and UK data centers on AWS, Azure and Google Cloud",
        "WCAG-aligned accessibility for public-facing services",
        "Substantial same-day overlap with UK and CET working hours",
      ],
      art: "europe-uk-intro",
    },
    {
      type: "featureGrid",
      eyebrow: "Key services",
      title: "Services European clients rely on",
      columns: 3,
      items: [
        {
          title: "Cloud Migration & Operations",
          description: "Moving legacy estates to the cloud with data residency and resilience built in.",
          icon: "cloud",
          href: "/services/cloud-migration-cloud-ops",
        },
        {
          title: "Data Analytics & Insights",
          description: "Governed data platforms and reporting that satisfy both analysts and auditors.",
          icon: "chart",
          href: "/services/data-analytics-and-insights",
        },
        {
          title: "Dynamics 365 CRM",
          description: "Customer engagement on Dynamics 365 with consent management and clean data flows.",
          icon: "handshake",
          href: "/services/d365-crm",
        },
        {
          title: "UI/UX Design",
          description: "Research-led, inclusive design that meets accessibility standards and delights users.",
          icon: "palette",
          href: "/services/ui-ux-design",
        },
        {
          title: "Cybersecurity Solutions",
          description: "Risk assessments, penetration testing and security operations aligned with recognized frameworks.",
          icon: "shield",
          href: "/services/cybersecurity-solutions",
        },
        {
          title: "Generative AI",
          description: "Responsible AI solutions with transparency, human oversight and documented risk controls.",
          icon: "sparkles",
          href: "/services/genai",
        },
      ],
    },
    {
      type: "linkGrid",
      eyebrow: "Industries",
      title: "Sectors we serve across the continent",
      links: [
        {
          label: "Banking & Fintech",
          href: "/industry/banking-fintech",
          description: "Open banking, payments and regulatory reporting platforms.",
          icon: "bank",
        },
        {
          label: "Retail & CPG",
          href: "/industry/retail-and-cpg",
          description: "Unified commerce, personalization and sustainable supply chains.",
          icon: "cart",
        },
        {
          label: "Healthcare & Pharmaceuticals",
          href: "/industry/healthcare-pharmaceuticals",
          description: "Digital health services and secure clinical research systems.",
          icon: "health",
        },
        {
          label: "Public Sector",
          href: "/industry/public-sector",
          description: "Accessible digital services for councils and public bodies.",
          icon: "building",
        },
        {
          label: "Telecommunication",
          href: "/industry/telecommunication",
          description: "Customer platforms and modernized operations for network providers.",
          icon: "radio",
        },
        {
          label: "Travel & Hospitality",
          href: "/industry/travel-hospitality",
          description: "Booking journeys, mobile check-in and guest data platforms.",
          icon: "plane",
        },
      ],
    },
    {
      type: "process",
      eyebrow: "Engagement model",
      title: "A delivery approach built for regulated environments",
      steps: [
        {
          title: "Discovery and risk review",
          description: "We clarify objectives and identify data protection, security and compliance requirements up front.",
        },
        {
          title: "Solution design",
          description: "Architecture, hosting and data flows are documented and agreed before build begins.",
        },
        {
          title: "Agile delivery",
          description: "Fortnightly releases with demos, quality gates and audit-friendly records of decisions.",
        },
        {
          title: "Assurance and launch",
          description: "Security, accessibility and performance testing precede a carefully staged go-live.",
        },
        {
          title: "Managed support",
          description: "Ongoing support, monitoring and continuous improvement under clear service levels.",
        },
      ],
    },
    {
      type: "testimonials",
      title: "What European clients say",
      items: [
        {
          quote: "Data protection was baked into every decision. Our compliance team signed off faster than on any previous project.",
          author: "Head of Technology",
          role: "Financial services firm, London",
        },
        {
          quote: "The overlap with our working day made collaboration effortless, and the quality of engineering was consistently high.",
          author: "Product Director",
          role: "Retail technology company, Netherlands",
        },
        {
          quote: "They redesigned our customer portal with accessibility at the core. User satisfaction scores improved within the first release.",
          author: "Digital Services Lead",
          role: "Public body, United Kingdom",
        },
      ],
    },
    {
      type: "offices",
      title: "Our European presence",
      subtitle: "Our London office works closely with our global delivery center.",
      only: ["uk", "pk"],
    },
    {
      type: "resources",
      title: "Insights and perspectives",
      limit: 3,
      viewAll: { label: "View all articles", href: "/blogs" },
    },
    {
      type: "faq",
      title: "Questions from European clients",
      items: [
        {
          question: "Will our data stay in the UK or EU?",
          answer: "Yes. We host personal data in UK or EU cloud regions by default and restrict access so that processing follows your instructions and the applicable data protection laws.",
        },
        {
          question: "Do you sign data processing agreements?",
          answer: "We sign DPAs as standard and can use standard contractual clauses or the UK addendum where any cross-border access is required.",
        },
        {
          question: "How do working hours compare with ours?",
          answer: "Our delivery teams share most of the UK and Central European working day, so meetings, reviews and support happen in real time.",
        },
        {
          question: "Can you help us prepare for upcoming AI regulation?",
          answer: "We build AI solutions with documented risk assessments, transparency and human oversight, helping you stay ready as the regulatory framework for AI evolves.",
        },
      ],
    },
    {
      type: "cta",
      title: "Planning your next transformation?",
      subtitle: "Meet our London team to explore how we can help, securely and responsibly.",
      cta: { label: "Contact us", href: "/contact" },
      tone: "purple",
    },
    { type: "contact" },
  ],
};
