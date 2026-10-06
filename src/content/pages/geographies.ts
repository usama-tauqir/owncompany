import { siteConfig } from "@/config/site";
import type { PageContent } from "@/content/types";

export const geographiesPage: PageContent = {
  slug: "geographies",
  metaTitle: `Geographies | ${siteConfig.name}`,
  metaDescription: `${siteConfig.name} serves clients across North America, MENA, KSA, Europe & UK and Asia Pacific with local presence and global delivery.`,
  blocks: [
    {
      type: "hero",
      eyebrow: "Geographies",
      title: "Global delivery, local understanding",
      subtitle: `${siteConfig.name} partners with clients in more than ${siteConfig.stats.countries} countries, pairing regional teams who know your market with delivery centers built for scale.`,
      cta: { label: "Find your local team", href: "/contact" },
      tone: "teal",
      art: "geographies-hero",
    },
    {
      type: "intro",
      eyebrow: "Our footprint",
      title: "Close to our clients, connected as one team",
      paragraphs: [
        "Our regional offices handle strategy, discovery and relationship management in your time zone and language. Our delivery centers provide the engineering depth and round-the-clock coverage that large programmes need.",
        "Because every region runs on the same delivery playbook, quality standards and tooling, clients get a consistent experience whether they work with us in one market or many.",
      ],
      highlights: [
        "Overlapping working hours with every major client region",
        "Regional compliance and data residency expertise",
        "Bilingual teams for English and Arabic speaking markets",
      ],
      art: "geographies-intro",
    },
    {
      type: "offices",
      title: "Our offices",
      subtitle: "Visit us, call us or drop us a line. Our teams are ready to help.",
    },
    {
      type: "featureGrid",
      eyebrow: "North America",
      title: "Product engineering for fast-moving companies",
      subtitle: "From venture-backed startups to established enterprises, we help North American teams extend their engineering capacity without compromising quality.",
      columns: 3,
      items: [
        { icon: "rocket", title: "Product acceleration", description: "Dedicated squads that integrate with your rituals and ship from week one." },
        { icon: "bank", title: "Fintech and insurance", description: "Secure, compliant platforms for payments, lending and policy management." },
        { icon: "health", title: "Digital health", description: "Patient-facing apps and data platforms designed with privacy at their core." },
      ],
    },
    {
      type: "featureGrid",
      eyebrow: "MENA",
      title: "Partners in regional digital ambition",
      subtitle: "Across the Middle East and North Africa, we support governments and enterprises as they modernise services and build digital-first economies.",
      columns: 3,
      tone: "light",
      items: [
        { icon: "building", title: "Government services", description: "Citizen-centric portals and back-office modernisation at national scale." },
        { icon: "store", title: "Retail and hospitality", description: "Omnichannel commerce and loyalty experiences for regional brands." },
        { icon: "globe", title: "Arabic-first experiences", description: "Right-to-left design and localisation baked in, not bolted on." },
      ],
    },
    {
      type: "featureGrid",
      eyebrow: "KSA",
      title: "Supporting the Kingdom's transformation",
      subtitle: "Our Riyadh team works alongside public and private organisations delivering on bold national transformation goals.",
      columns: 3,
      items: [
        { icon: "lock", title: "Data residency and compliance", description: "Solutions designed for local regulatory and data sovereignty requirements." },
        { icon: "users", title: "Local talent development", description: "Knowledge transfer and training programmes that build in-country capability." },
        { icon: "fuel", title: "Energy and utilities", description: "Digital platforms that improve operational visibility and efficiency." },
      ],
    },
    {
      type: "featureGrid",
      eyebrow: "Europe & UK",
      title: "Engineering that meets European standards",
      subtitle: "From our London office we help European organisations modernise legacy estates and launch new digital products with confidence.",
      columns: 3,
      tone: "light",
      items: [
        { icon: "shield", title: "Privacy by design", description: "Architectures and processes aligned with European data protection expectations." },
        { icon: "cloud", title: "Cloud modernisation", description: "Migration and re-platforming programmes that reduce cost and risk." },
        { icon: "chart", title: "Data platforms", description: "Analytics foundations that turn scattered data into trusted insight." },
      ],
    },
    {
      type: "featureGrid",
      eyebrow: "Asia Pacific",
      title: "Scaling with growth markets",
      subtitle: "Our delivery centers serve Asia Pacific clients with flexible engagement models and time-zone-friendly collaboration.",
      columns: 3,
      items: [
        { icon: "smartphone", title: "Mobile-first products", description: "Super-app features, wallets and consumer apps built for high-growth audiences." },
        { icon: "cart", title: "E-commerce at scale", description: "Marketplaces and storefronts engineered for peak-season traffic." },
        { icon: "brain", title: "Applied AI", description: "Practical machine learning for personalisation, forecasting and automation." },
      ],
    },
    {
      type: "cta",
      title: "Wherever you are, we're nearby",
      subtitle: "Connect with the team closest to you and let's talk about your goals.",
      cta: { label: "Contact a regional office", href: "/contact" },
      tone: "purple",
    },
    { type: "contact" },
  ],
};
