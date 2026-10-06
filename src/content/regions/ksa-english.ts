import { siteConfig } from "@/config/site";
import type { RegionContent } from "@/content/types";

export const ksaEnglishRegion: RegionContent = {
  slug: "ksa-english",
  label: "KSA - English",
  locale: "en",
  metaTitle: `${siteConfig.name} Saudi Arabia | Technology Partner for Vision 2030`,
  metaDescription: `${siteConfig.name} helps Saudi enterprises and government entities deliver Vision 2030 programs with software engineering, cloud, AI and enterprise platforms, supported from our Riyadh office.`,
  blocks: [
    {
      type: "hero",
      eyebrow: "Kingdom of Saudi Arabia",
      title: "Engineering the digital programs behind Vision 2030",
      subtitle: `${siteConfig.name} partners with Saudi organizations to design, build and run secure digital platforms, with a team in Riyadh and the engineering depth to deliver at national scale.`,
      cta: { label: "Contact our Riyadh team", href: "/contact" },
      secondaryCta: { label: "Explore services", href: "/services" },
      tone: "navy",
      art: "ksa-hero",
    },
    {
      type: "stats",
      title: "Capacity for programs of national scale",
      tone: "light",
      items: [
        { value: siteConfig.stats.experts, suffix: "+", label: "Technology experts" },
        { value: siteConfig.stats.projects, suffix: "+", label: "Projects delivered" },
        { value: siteConfig.stats.countries, suffix: "+", label: "Countries served" },
        { value: siteConfig.stats.years, suffix: "+", label: "Years of experience" },
      ],
    },
    {
      type: "intro",
      eyebrow: "Why Saudi Arabia",
      title: "Committed to the Kingdom's transformation",
      paragraphs: [
        "Vision 2030 has set an ambitious course for the Kingdom: a diversified economy, world-class government services, thriving tourism and a vibrant private sector. Technology sits at the heart of every one of these goals, and the pace of delivery is unlike anywhere else.",
        `${siteConfig.name} opened its Riyadh office to work side by side with Saudi leaders on that journey. We combine local presence and an understanding of national regulations with a large engineering center that operates just two hours ahead of Riyadh time.`,
      ],
      highlights: [
        "Local team in Riyadh for on-site workshops and governance",
        "Solutions designed for in-Kingdom data hosting",
        "Arabic-first user experiences and bilingual documentation",
        "Support for local talent development and knowledge transfer",
      ],
      art: "ksa-intro",
    },
    {
      type: "featureGrid",
      eyebrow: "Key services",
      title: "How we support Saudi organizations",
      columns: 3,
      items: [
        {
          title: "Custom Software Development",
          description: "Tailored platforms for government entities and enterprises, built to scale with demand.",
          icon: "code",
          href: "/services/custom-development",
        },
        {
          title: "Dynamics 365 ERP",
          description: "Finance and operations on Dynamics 365 with support for ZATCA e-invoicing and local VAT reporting.",
          icon: "boxes",
          href: "/services/d365-erp",
        },
        {
          title: "Cloud Migration & Operations",
          description: "Moving workloads to in-Kingdom cloud regions with secure, well-governed operations.",
          icon: "cloud",
          href: "/services/cloud-migration-cloud-ops",
        },
        {
          title: "AI & Data Systems",
          description: "Data platforms and AI models that turn national and enterprise data into real insight.",
          icon: "brain",
          href: "/services/ai-data-systems",
        },
        {
          title: "Cybersecurity Solutions",
          description: "Security programs aligned with national cybersecurity controls and sector requirements.",
          icon: "shield",
          href: "/services/cybersecurity-solutions",
        },
        {
          title: "Advisory & Strategy",
          description: "Digital strategy, target architecture and transformation roadmaps tied to program KPIs.",
          icon: "compass",
          href: "/services/advisory-strategy",
        },
      ],
    },
    {
      type: "linkGrid",
      eyebrow: "Industries",
      title: "Sectors driving the Kingdom's growth",
      links: [
        {
          label: "Public Sector",
          href: "/industry/public-sector",
          description: "Unified citizen services, e-government platforms and digital identity integration.",
          icon: "building",
        },
        {
          label: "Oil, Gas & Energy",
          href: "/industry/oil-gas-and-energy",
          description: "Operational analytics, asset management and renewable energy programs.",
          icon: "fuel",
        },
        {
          label: "Travel & Hospitality",
          href: "/industry/travel-hospitality",
          description: "Digital experiences for giga-projects, tourism destinations and pilgrims.",
          icon: "plane",
        },
        {
          label: "Real Estate",
          href: "/industry/real-estate",
          description: "Smart communities, property management and housing platforms.",
          icon: "home",
        },
        {
          label: "Banking & Fintech",
          href: "/industry/banking-fintech",
          description: "Digital banks, payment solutions and open banking innovation.",
          icon: "bank",
        },
        {
          label: "Healthcare & Pharmaceuticals",
          href: "/industry/healthcare-pharmaceuticals",
          description: "Virtual care, health records integration and hospital operations.",
          icon: "health",
        },
      ],
    },
    {
      type: "process",
      eyebrow: "Engagement model",
      title: "From vision to working platform",
      steps: [
        {
          title: "Align on objectives",
          description: "We meet your leadership in Riyadh to connect the initiative with program goals and success measures.",
        },
        {
          title: "Plan and architect",
          description: "We design a compliant architecture, hosting approach and phased delivery roadmap.",
        },
        {
          title: "Build with transparency",
          description: "Agile teams deliver in short sprints with regular demos and bilingual progress reports.",
        },
        {
          title: "Go live securely",
          description: "Security testing, performance tuning and a controlled launch plan protect your users from day one.",
        },
        {
          title: "Transfer and sustain",
          description: "We train your team, hand over knowledge and provide ongoing support as the platform grows.",
        },
      ],
    },
    {
      type: "testimonials",
      title: "What Saudi clients say",
      items: [
        {
          quote: "They understood the urgency of our program and the importance of Arabic-first design. The platform launched on time and adoption exceeded our targets.",
          author: "Program Director",
          role: "Government agency, Riyadh",
        },
        {
          quote: "Their ERP team handled our e-invoicing requirements smoothly and kept our finance operations running without disruption.",
          author: "Chief Financial Officer",
          role: "Industrial group, Eastern Province",
        },
        {
          quote: "Having consultants in Riyadh with a strong engineering team behind them gave us both responsiveness and depth.",
          author: "Head of Digital Transformation",
          role: "Hospitality developer, KSA",
        },
      ],
    },
    {
      type: "offices",
      title: "Our presence in the Kingdom",
      subtitle: "Our Riyadh office works hand in hand with our regional and global teams.",
      only: ["sa", "ae", "pk"],
    },
    {
      type: "resources",
      title: "Insights for Saudi leaders",
      limit: 3,
      viewAll: { label: "View all articles", href: "/blogs" },
    },
    {
      type: "faq",
      title: "Frequently asked questions",
      items: [
        {
          question: "Can you host our data inside Saudi Arabia?",
          answer: "Yes. We design and deploy solutions on in-Kingdom cloud regions or on-premise infrastructure, in line with national data and cloud regulations and your sector's requirements.",
        },
        {
          question: "Do you follow the Saudi working week?",
          answer: "Our Riyadh team works Sunday to Thursday, and our delivery center schedules overlapping hours so your stakeholders always have a responsive point of contact.",
        },
        {
          question: "Is Arabic support available throughout the project?",
          answer: "Yes. We provide Arabic-speaking consultants, Arabic-first interface design and bilingual documentation and training materials.",
        },
        {
          question: "Do you support Saudization and local capability building?",
          answer: "We can include knowledge transfer, joint teams and training programs that help build lasting capability within your organization.",
        },
      ],
    },
    {
      type: "cta",
      title: "Let's build the next milestone together",
      subtitle: "Schedule a meeting with our Riyadh team to discuss your initiative.",
      cta: { label: "Book a meeting", href: "/contact" },
      tone: "teal",
    },
    { type: "contact" },
  ],
};
