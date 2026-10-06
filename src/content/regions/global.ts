import { siteConfig } from "@/config/site";
import type { RegionContent } from "@/content/types";

export const globalRegion: RegionContent = {
  slug: "global",
  label: "Global",
  locale: "en",
  metaTitle: `${siteConfig.name} | Global Software Engineering & Digital Transformation Partner`,
  metaDescription: `${siteConfig.name} helps organizations in ${siteConfig.stats.countries}+ countries design, build and run software, AI and cloud platforms with distributed teams and a proven delivery model.`,
  blocks: [
    {
      type: "hero",
      eyebrow: "Global technology partner",
      title: "Software that moves your business forward, wherever you operate",
      subtitle: `${siteConfig.name} brings together product thinkers, engineers and data specialists across multiple continents to turn ambitious ideas into dependable digital products.`,
      cta: { label: "Start a conversation", href: "/contact" },
      secondaryCta: { label: "Explore our services", href: "/services" },
      tone: "navy",
      art: "global-hero",
    },
    {
      type: "stats",
      title: "Scale you can count on",
      tone: "light",
      items: [
        { value: siteConfig.stats.experts, suffix: "+", label: "Engineers, designers and consultants" },
        { value: siteConfig.stats.projects, suffix: "+", label: "Projects delivered" },
        { value: siteConfig.stats.countries, suffix: "+", label: "Countries served" },
        { value: siteConfig.stats.years, suffix: "+", label: "Years of delivery" },
      ],
    },
    {
      type: "intro",
      eyebrow: "Why organizations choose us",
      title: "One partner, many markets, a single standard of delivery",
      paragraphs: [
        `Growing companies rarely operate in one place anymore. Customers, regulators and teams are spread across time zones, and technology has to keep up. ${siteConfig.name} was built for that reality: a delivery network that combines a large engineering hub with regional offices close to the people we serve.`,
        "Every engagement follows the same playbook, whether it starts in Riyadh, London or San Jose. You get senior oversight, transparent reporting and engineers who are accountable for outcomes, not just tickets closed.",
      ],
      highlights: [
        "Follow-the-sun delivery across regional hubs",
        "Security and quality practices applied on every project",
        "Flexible models from fixed-scope builds to dedicated teams",
        "Domain expertise across a dozen industries",
      ],
      art: "global-intro",
    },
    {
      type: "featureGrid",
      eyebrow: "What we do",
      title: "Capabilities that cover the full product lifecycle",
      subtitle: "From the first prototype to platforms serving millions of users, our teams handle strategy, build and operations.",
      columns: 3,
      items: [
        {
          title: "Custom Software Development",
          description: "Purpose-built applications engineered around your workflows, integrations and growth plans.",
          icon: "code",
          href: "/services/custom-development",
        },
        {
          title: "Mobile App Development",
          description: "Native and cross-platform apps with polished experiences and reliable back ends.",
          icon: "smartphone",
          href: "/services/mobile-development",
        },
        {
          title: "Generative AI",
          description: "Assistants, copilots and automation grounded in your own data, with guardrails built in.",
          icon: "sparkles",
          href: "/services/genai",
        },
        {
          title: "Cloud Migration & Operations",
          description: "Planned, low-risk moves to the cloud followed by cost-aware, round-the-clock operations.",
          icon: "cloud",
          href: "/services/cloud-migration-cloud-ops",
        },
        {
          title: "Data Analytics & Insights",
          description: "Modern data platforms and dashboards that turn scattered information into decisions.",
          icon: "chart",
          href: "/services/data-analytics-and-insights",
        },
        {
          title: "Staff Augmentation",
          description: "Vetted engineers who join your team quickly and work inside your tools and rituals.",
          icon: "users",
          href: "/services/staff-augmentation",
        },
      ],
    },
    {
      type: "linkGrid",
      eyebrow: "Who we help",
      title: "Industry knowledge that shortens the learning curve",
      subtitle: "Our teams bring patterns and lessons from projects in regulated and fast-moving sectors alike.",
      links: [
        {
          label: "Banking & Fintech",
          href: "/industry/banking-fintech",
          description: "Digital banking, payments and compliance-ready platforms.",
          icon: "bank",
        },
        {
          label: "Healthcare & Pharmaceuticals",
          href: "/industry/healthcare-pharmaceuticals",
          description: "Patient-facing apps and secure clinical data systems.",
          icon: "health",
        },
        {
          label: "Retail & CPG",
          href: "/industry/retail-and-cpg",
          description: "Omnichannel commerce, loyalty and supply chain visibility.",
          icon: "cart",
        },
        {
          label: "Startups",
          href: "/industry/startups",
          description: "MVPs and scale-ready architectures for founders on a clock.",
          icon: "rocket",
        },
        {
          label: "Telecommunication",
          href: "/industry/telecommunication",
          description: "Self-service portals, OSS/BSS modernization and network analytics.",
          icon: "radio",
        },
        {
          label: "Education",
          href: "/industry/education",
          description: "Learning platforms and campus systems built for scale.",
          icon: "education",
        },
      ],
    },
    {
      type: "process",
      eyebrow: "How we engage",
      title: "A clear path from first call to measurable results",
      steps: [
        {
          title: "Discover",
          description: "We map your goals, constraints and existing systems in a short, focused workshop.",
        },
        {
          title: "Shape",
          description: "We propose scope, architecture and team composition, along with a realistic timeline and budget.",
        },
        {
          title: "Build",
          description: "Cross-functional squads deliver in short iterations with demos you can see and test every sprint.",
        },
        {
          title: "Launch",
          description: "We release with automated pipelines, monitoring and a rollback plan in place.",
        },
        {
          title: "Evolve",
          description: "We stay on to support, optimize and extend the product as your business grows.",
        },
      ],
    },
    {
      type: "testimonials",
      title: "What our clients say",
      items: [
        {
          quote: "They understood our product vision within weeks and helped us ship a platform our customers genuinely enjoy using. The communication was consistently excellent.",
          author: "Chief Product Officer",
          role: "International logistics company",
        },
        {
          quote: "We needed to scale our engineering capacity quickly without lowering the bar. The engineers they placed felt like part of our own team from day one.",
          author: "VP of Engineering",
          role: "Growth-stage SaaS business",
        },
        {
          quote: "Their cloud team moved a decade of legacy workloads with almost no downtime and cut our infrastructure costs noticeably in the first year.",
          author: "Head of IT Infrastructure",
          role: "Multinational manufacturing group",
        },
      ],
    },
    {
      type: "offices",
      title: "Close to you, wherever you are",
      subtitle: "Regional offices backed by a global delivery center.",
      only: ["pk", "us", "ae", "uk", "sa"],
    },
    {
      type: "resources",
      title: "Insights from our teams",
      subtitle: "Practical perspectives on engineering, AI and digital strategy.",
      limit: 3,
      viewAll: { label: "View all articles", href: "/blogs" },
    },
    {
      type: "faq",
      title: "Frequently asked questions",
      items: [
        {
          question: "Which time zones can your teams cover?",
          answer: "Our offices and delivery center span North America, Europe, the Middle East and South Asia, so we can arrange overlapping hours with almost any client and offer extended or round-the-clock support where needed.",
        },
        {
          question: "What engagement models do you offer?",
          answer: "We work on fixed-scope projects, time-and-materials engagements and dedicated teams. Many clients start with a defined project and move to a long-term team once the product is live.",
        },
        {
          question: "How do you protect our data and intellectual property?",
          answer: "All engagements are covered by NDAs and clear IP assignment. We apply role-based access, encrypted environments and secure development practices, and can align with the specific compliance requirements of your market.",
        },
        {
          question: "How quickly can a project start?",
          answer: "For most engagements we can hold a discovery workshop within a week and have an initial team in place shortly after scope is agreed.",
        },
      ],
    },
    {
      type: "cta",
      title: "Have a project in mind?",
      subtitle: "Tell us where you want to go. We will help you plan the route and build what it takes to get there.",
      cta: { label: "Let's talk", href: "/contact" },
      tone: "purple",
    },
    { type: "contact" },
  ],
};
