import { siteConfig } from "@/config/site";
import type { RegionContent } from "@/content/types";

export const menaRegion: RegionContent = {
  slug: "mena",
  label: "MENA",
  locale: "en",
  metaTitle: `${siteConfig.name} MENA | Digital Transformation Partner for the Middle East`,
  metaDescription: `${siteConfig.name} supports governments and enterprises across the Middle East and North Africa with software engineering, cloud, AI and enterprise platforms delivered from Dubai and Riyadh.`,
  blocks: [
    {
      type: "hero",
      eyebrow: "Middle East & North Africa",
      title: "Building the digital backbone of a fast-moving region",
      subtitle: `From Dubai and Riyadh, ${siteConfig.name} helps public entities and private enterprises launch modern services, connect their operations and put data to work.`,
      cta: { label: "Talk to our MENA team", href: "/contact" },
      secondaryCta: { label: "See our services", href: "/services" },
      tone: "navy",
      art: "mena-hero",
    },
    {
      type: "stats",
      title: "Experience that travels well",
      tone: "light",
      items: [
        { value: siteConfig.stats.experts, suffix: "+", label: "Technology specialists" },
        { value: siteConfig.stats.projects, suffix: "+", label: "Projects delivered" },
        { value: siteConfig.stats.countries, suffix: "+", label: "Countries served" },
        { value: siteConfig.stats.years, suffix: "+", label: "Years in business" },
      ],
    },
    {
      type: "intro",
      eyebrow: "Why MENA",
      title: "A region investing boldly in its digital future",
      paragraphs: [
        "Across the Gulf and the wider region, national strategies are putting digital services, smart infrastructure and economic diversification at the top of the agenda. The UAE continues to raise the bar for digital government, while Saudi Arabia, Qatar, Oman and Egypt are modernizing at remarkable speed.",
        `${siteConfig.name} has regional offices in Dubai and Riyadh so our consultants can sit with your stakeholders, understand local regulation and culture, and coordinate with our engineering center that works within a few hours of Gulf time.`,
      ],
      highlights: [
        "On-the-ground teams in the UAE and Saudi Arabia",
        "Bilingual Arabic and English interfaces and content",
        "Experience with regional data protection rules and in-country cloud regions",
        "Working hours aligned with the regional work week",
      ],
      art: "mena-intro",
    },
    {
      type: "featureGrid",
      eyebrow: "Key services",
      title: "What we deliver for MENA organizations",
      columns: 3,
      items: [
        {
          title: "Website Development",
          description: "Fast, accessible, bilingual websites and portals with right-to-left layouts done properly.",
          icon: "globe",
          href: "/services/website-development",
        },
        {
          title: "Mobile App Development",
          description: "Consumer and citizen apps designed for high engagement and integrated with national identity services.",
          icon: "smartphone",
          href: "/services/mobile-development",
        },
        {
          title: "Dynamics 365 ERP",
          description: "Finance, procurement and supply chain on Dynamics 365, configured for regional tax and reporting needs.",
          icon: "boxes",
          href: "/services/d365-erp",
        },
        {
          title: "Cloud Application Development",
          description: "Cloud-native applications deployed on in-region data centers from the major providers.",
          icon: "cloud",
          href: "/services/cloud-application",
        },
        {
          title: "Generative AI",
          description: "Arabic-aware assistants and document intelligence that help teams work faster.",
          icon: "sparkles",
          href: "/services/genai",
        },
        {
          title: "Cybersecurity Solutions",
          description: "Assessments, hardening and monitoring aligned with regional security frameworks.",
          icon: "shield",
          href: "/services/cybersecurity-solutions",
        },
      ],
    },
    {
      type: "linkGrid",
      eyebrow: "Industries",
      title: "Sectors shaping the regional economy",
      links: [
        {
          label: "Public Sector",
          href: "/industry/public-sector",
          description: "Citizen services, digital government platforms and smart city initiatives.",
          icon: "building",
        },
        {
          label: "Oil, Gas & Energy",
          href: "/industry/oil-gas-and-energy",
          description: "Asset monitoring, field operations and energy transition analytics.",
          icon: "fuel",
        },
        {
          label: "Real Estate",
          href: "/industry/real-estate",
          description: "Property platforms, tenant apps and smart building integration.",
          icon: "home",
        },
        {
          label: "Banking & Fintech",
          href: "/industry/banking-fintech",
          description: "Digital banking, open finance and Sharia-compliant product journeys.",
          icon: "bank",
        },
        {
          label: "Travel & Hospitality",
          href: "/industry/travel-hospitality",
          description: "Booking engines, guest experiences and loyalty for a booming tourism sector.",
          icon: "plane",
        },
        {
          label: "Retail & CPG",
          href: "/industry/retail-and-cpg",
          description: "Omnichannel retail and e-commerce for a digitally savvy customer base.",
          icon: "cart",
        },
      ],
    },
    {
      type: "process",
      eyebrow: "Engagement model",
      title: "How we work with you",
      steps: [
        {
          title: "Meet in person",
          description: "Our regional consultants run discovery sessions on site with your business and IT stakeholders.",
        },
        {
          title: "Define the roadmap",
          description: "We agree on priorities, compliance needs, architecture and a phased delivery plan.",
        },
        {
          title: "Assemble the team",
          description: "A blended team of regional leads and delivery-center engineers is set up around your goals.",
        },
        {
          title: "Deliver iteratively",
          description: "Working software arrives every sprint, reviewed with you in English or Arabic.",
        },
        {
          title: "Operate and improve",
          description: "We support, monitor and enhance the solution, with local escalation when you need it.",
        },
      ],
    },
    {
      type: "testimonials",
      title: "Trusted across the region",
      items: [
        {
          quote: "Their team handled our bilingual portal with real care for Arabic typography and right-to-left details. Our users noticed the difference immediately.",
          author: "Director of Digital Services",
          role: "Government entity, UAE",
        },
        {
          quote: "They combined local presence with deep engineering capacity, which meant we could move fast without losing control of quality.",
          author: "Chief Information Officer",
          role: "Real estate developer, GCC",
        },
        {
          quote: "Our ERP rollout across several countries went live on schedule, and the finance team was comfortable with the system from the first month.",
          author: "Group Finance Director",
          role: "Retail group, Middle East",
        },
      ],
    },
    {
      type: "offices",
      title: "Our MENA offices",
      subtitle: "Regional teams in Dubai and Riyadh, supported by our global delivery center.",
      only: ["ae", "sa", "pk"],
    },
    {
      type: "resources",
      title: "Latest insights",
      subtitle: "Ideas and lessons for leaders driving transformation in the region.",
      limit: 3,
      viewAll: { label: "View all articles", href: "/blogs" },
    },
    {
      type: "faq",
      title: "Questions from MENA clients",
      items: [
        {
          question: "Can our data stay inside the country?",
          answer: "Yes. We design solutions to run on in-country cloud regions or your own data centers, and we align our handling of data with local data protection laws and sector regulations.",
        },
        {
          question: "Do your working hours match the regional work week?",
          answer: "Our regional teams follow the local Sunday-to-Thursday or Monday-to-Friday calendar as required, and our delivery center keeps several hours of daily overlap with Gulf time.",
        },
        {
          question: "Do you build fully Arabic products?",
          answer: "We build bilingual and Arabic-first products with proper right-to-left layouts, Arabic typography and localized content, and our project managers can communicate in Arabic.",
        },
        {
          question: "Can you work with government procurement processes?",
          answer: "We regularly respond to formal tenders and can work through local partners or directly, depending on the requirements of the entity.",
        },
      ],
    },
    {
      type: "cta",
      title: "Ready to accelerate your next initiative?",
      subtitle: "Meet our regional team to discuss your goals and how we can help.",
      cta: { label: "Book a meeting", href: "/contact" },
      tone: "teal",
    },
    { type: "contact" },
  ],
};
