import { siteConfig } from "@/config/site";
import type { PageContent } from "@/content/types";

export const awardsRecognitionPage: PageContent = {
  slug: "awards-recognition",
  metaTitle: `Awards & Recognition | ${siteConfig.name}`,
  metaDescription: `Industry recognition earned by ${siteConfig.name} for engineering excellence, workplace culture and client satisfaction.`,
  blocks: [
    {
      type: "hero",
      eyebrow: "Awards & Recognition",
      title: "Recognition earned by our teams and clients",
      subtitle: "Awards are never the goal, but they are a welcome reflection of the care our people put into every engagement.",
      cta: { label: "See our work", href: "/case-studies" },
      tone: "purple",
      art: "awards-hero",
    },
    {
      type: "intro",
      eyebrow: "Why it matters",
      title: "Independent validation of how we work",
      paragraphs: [
        "Many of our recognitions come from verified client reviews and independent assessments. They tell prospective partners what our existing clients already know: we deliver on our promises.",
        "We share these honours with the people who made them possible: our engineers, designers, project leads and the clients who trusted us with their most important initiatives.",
      ],
      art: "awards-intro",
    },
    {
      type: "stats",
      tone: "navy",
      items: [
        { value: 40, suffix: "+", label: "Industry recognitions" },
        { value: 98, suffix: "%", label: "Client satisfaction score" },
        { value: 95, suffix: "%", label: "Client retention rate" },
        { value: siteConfig.stats.years, suffix: "+", label: "Years of consistent delivery" },
      ],
    },
    {
      type: "featureGrid",
      eyebrow: "Recent honours",
      title: "Highlights from recent years",
      columns: 3,
      items: [
        { icon: "trophy", title: "Top Software Developer", description: "B2B review platform, 2025: ranked among leading custom software firms based on verified client feedback." },
        { icon: "award", title: "Leading AI Implementation Partner", description: "Technology analyst listing, 2025: recognised for practical, production-grade AI delivery." },
        { icon: "cloud", title: "Cloud Partner of the Year", description: "Hyperscaler partner programme, regional category, 2024." },
        { icon: "heart", title: "Great Place to Work", description: "Workplace culture survey, 2024: certified based on anonymous employee feedback." },
        { icon: "smartphone", title: "Top Mobile App Developer", description: "B2B review platform, 2024: recognised for consumer and enterprise mobile delivery." },
        { icon: "leaf", title: "Responsible Business Award", description: "Regional business council, 2023: honoured for community and sustainability programmes." },
      ],
    },
    {
      type: "timeline",
      title: "A history of recognition",
      items: [
        { year: "2025", title: "Top Software Developer", description: "Listed among top custom software firms on a leading B2B review platform." },
        { year: "2024", title: "Fastest-growing technology services firm", description: "Regional business growth index, technology services category." },
        { year: "2023", title: "Excellence in Digital Transformation", description: "Industry summit award for a large-scale public sector modernisation programme." },
        { year: "2022", title: "Employer of Choice", description: "National HR association award for learning and development practices." },
        { year: "2020", title: "Top IT Services Exporter", description: "Recognised by a national trade body for growth in technology exports." },
      ],
    },
    {
      type: "testimonials",
      title: "What clients say about working with us",
      items: [
        {
          quote: "They treat our roadmap like their own. The level of ownership is what sets them apart from every other partner we've used.",
          author: "VP Engineering",
          role: "North American fintech",
        },
        {
          quote: "Delivery was on schedule, quality was excellent and communication never once slipped. That is rarer than it should be.",
          author: "Chief Digital Officer",
          role: "Gulf-based retail group",
        },
        {
          quote: "A genuinely collaborative team that brought ideas, not just capacity.",
          author: "Head of Product",
          role: "European health-tech scale-up",
        },
      ],
    },
    {
      type: "cta",
      title: "Experience award-winning delivery",
      subtitle: "Let's discuss how our teams can help you hit your next milestone.",
      cta: { label: "Get in touch", href: "/contact" },
      tone: "teal",
    },
    { type: "contact" },
  ],
};
