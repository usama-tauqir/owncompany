import { siteConfig } from "@/config/site";
import type { RegionContent } from "@/content/types";

export const northAmericaRegion: RegionContent = {
  slug: "north-america",
  label: "North America",
  locale: "en",
  metaTitle: `${siteConfig.name} North America | Software Engineering Teams for US & Canadian Companies`,
  metaDescription: `${siteConfig.name} gives North American companies senior engineering, AI, cloud and commerce teams with real-time collaboration, U.S.-based leadership and predictable costs.`,
  blocks: [
    {
      type: "hero",
      eyebrow: "United States & Canada",
      title: "Senior engineering teams that keep pace with your roadmap",
      subtitle: `${siteConfig.name} pairs U.S.-based leadership with a deep bench of engineers who work your hours, so you can ship more without the hiring bottleneck.`,
      cta: { label: "Schedule a call", href: "/contact" },
      secondaryCta: { label: "Browse services", href: "/services" },
      tone: "navy",
      art: "north-america-hero",
    },
    {
      type: "stats",
      title: "Built to scale with you",
      tone: "light",
      items: [
        { value: siteConfig.stats.experts, suffix: "+", label: "Engineers and specialists" },
        { value: siteConfig.stats.projects, suffix: "+", label: "Projects shipped" },
        { value: siteConfig.stats.countries, suffix: "+", label: "Countries served" },
        { value: siteConfig.stats.years, suffix: "+", label: "Years delivering software" },
      ],
    },
    {
      type: "intro",
      eyebrow: "Why North American teams work with us",
      title: "Real collaboration, not handoffs across the ocean",
      paragraphs: [
        "Distributed delivery only works when people can talk while decisions are being made. Our teams schedule daily overlap with Eastern and Pacific time, join your stand-ups and use your tools, from Jira and Slack to GitHub and Figma.",
        `With an office in San Jose, ${siteConfig.name} keeps account leadership and solution architects close to you. Behind them sits a large engineering center that lets you scale up or down quickly while keeping costs predictable.`,
      ],
      highlights: [
        "Guaranteed working-hour overlap with U.S. time zones",
        "U.S.-based account and delivery leadership",
        "Contracts governed by familiar terms and clear IP ownership",
        "Experience with SOC 2, HIPAA and PCI-aware delivery",
      ],
      art: "north-america-intro",
    },
    {
      type: "featureGrid",
      eyebrow: "Key services",
      title: "Where we add the most value",
      columns: 3,
      items: [
        {
          title: "Staff Augmentation",
          description: "Pre-vetted engineers who integrate into your sprints within weeks, not months.",
          icon: "users",
          href: "/services/staff-augmentation",
        },
        {
          title: "Custom Software Development",
          description: "End-to-end product builds with product managers, designers and engineers under one roof.",
          icon: "code",
          href: "/services/custom-development",
        },
        {
          title: "Generative AI",
          description: "LLM-powered features, copilots and workflow automation taken from prototype to production.",
          icon: "sparkles",
          href: "/services/genai",
        },
        {
          title: "Salesforce",
          description: "Implementation, customization and integration across Sales, Service and Marketing Clouds.",
          icon: "handshake",
          href: "/services/salesforce",
        },
        {
          title: "Shopify",
          description: "High-converting Shopify and Shopify Plus storefronts, apps and headless builds.",
          icon: "store",
          href: "/services/shopify",
        },
        {
          title: "DevOps",
          description: "CI/CD, infrastructure as code and platform engineering on AWS, Azure and Google Cloud.",
          icon: "git",
          href: "/services/devops",
        },
      ],
    },
    {
      type: "linkGrid",
      eyebrow: "Industries",
      title: "Experience across North America's key sectors",
      links: [
        {
          label: "Startups",
          href: "/industry/startups",
          description: "From seed-stage MVPs to Series C platform rebuilds.",
          icon: "rocket",
        },
        {
          label: "Healthcare & Pharmaceuticals",
          href: "/industry/healthcare-pharmaceuticals",
          description: "Telehealth, patient engagement and interoperable clinical systems.",
          icon: "health",
        },
        {
          label: "Banking & Fintech",
          href: "/industry/banking-fintech",
          description: "Lending, payments and wealth platforms built with compliance in mind.",
          icon: "bank",
        },
        {
          label: "E-commerce",
          href: "/industry/e-commerce-software-development",
          description: "Marketplaces, subscriptions and direct-to-consumer brands.",
          icon: "cart",
        },
        {
          label: "Gaming",
          href: "/industry/gaming",
          description: "Game development, live-ops tooling and player platforms.",
          icon: "gamepad",
        },
        {
          label: "Real Estate",
          href: "/industry/real-estate",
          description: "PropTech platforms, listing portals and property operations.",
          icon: "home",
        },
      ],
    },
    {
      type: "process",
      eyebrow: "Engagement model",
      title: "Getting started is simple",
      steps: [
        {
          title: "Intro call",
          description: "A 30-minute conversation with a U.S.-based lead to understand your goals and constraints.",
        },
        {
          title: "Proposal",
          description: "Within days you receive a team plan, timeline and transparent pricing.",
        },
        {
          title: "Team onboarding",
          description: "Engineers join your workspace, tools and ceremonies, with a delivery manager on our side.",
        },
        {
          title: "Delivery",
          description: "Weekly demos, sprint metrics and a single point of contact keep everyone aligned.",
        },
        {
          title: "Scale",
          description: "Add skills or headcount as your roadmap evolves, with short notice periods.",
        },
      ],
    },
    {
      type: "testimonials",
      title: "Trusted by North American teams",
      items: [
        {
          quote: "We doubled our engineering throughput in a quarter. The overlap with our hours meant we never felt like we were waiting on anyone.",
          author: "Co-founder & CTO",
          role: "Venture-backed health tech startup, California",
        },
        {
          quote: "Their Shopify team rebuilt our storefront ahead of the holiday season and our conversion rate climbed right away.",
          author: "Director of E-commerce",
          role: "Consumer brand, Texas",
        },
        {
          quote: "Clear communication, honest estimates and engineers who care about code quality. That combination is rare.",
          author: "Engineering Manager",
          role: "Fintech company, Ontario",
        },
      ],
    },
    {
      type: "offices",
      title: "Our North American presence",
      subtitle: "Leadership in San Jose, supported by our global delivery center.",
      only: ["us", "pk"],
    },
    {
      type: "resources",
      title: "Latest from our blog",
      limit: 3,
      viewAll: { label: "View all articles", href: "/blogs" },
    },
    {
      type: "faq",
      title: "Questions from North American clients",
      items: [
        {
          question: "How much time-zone overlap will we get?",
          answer: "Teams commit to at least four hours of daily overlap with your core hours, and can shift further for Eastern or Pacific time when a project needs it.",
        },
        {
          question: "Who owns the code and intellectual property?",
          answer: "You do. All work product and IP are assigned to you under the contract, and code lives in your repositories from day one.",
        },
        {
          question: "Can you work within HIPAA or SOC 2 requirements?",
          answer: "Yes. We follow secure development practices, restrict access to production data and can sign business associate agreements where appropriate.",
        },
        {
          question: "How fast can engineers start?",
          answer: "For common skill sets we can usually propose candidates within a week and have them onboarded within two to three weeks.",
        },
      ],
    },
    {
      type: "cta",
      title: "Need to ship faster?",
      subtitle: "Talk with our U.S. team about the skills you need and how quickly we can help.",
      cta: { label: "Get in touch", href: "/contact" },
      tone: "purple",
    },
    { type: "contact" },
  ],
};
