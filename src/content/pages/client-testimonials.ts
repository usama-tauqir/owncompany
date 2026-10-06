import { siteConfig } from "@/config/site";
import type { PageContent } from "@/content/types";

export const clientTestimonialsPage: PageContent = {
  slug: "client-testimonials",
  metaTitle: `Client Testimonials | ${siteConfig.name}`,
  metaDescription: `Hear from the organisations that trust ${siteConfig.name} to design, build and scale their most important technology initiatives.`,
  blocks: [
    {
      type: "hero",
      eyebrow: "Client Testimonials",
      title: "In our clients' words",
      subtitle: "The best measure of our work is what our partners say about it. Here is some of the feedback we've received from teams around the world.",
      cta: { label: "Become our next success story", href: "/contact" },
      secondaryCta: { label: "Read case studies", href: "/case-studies" },
      tone: "purple",
      art: "testimonials-hero",
    },
    {
      type: "stats",
      title: "Relationships that last",
      tone: "navy",
      items: [
        { value: 95, suffix: "%", label: "Client retention rate" },
        { value: 98, suffix: "%", label: "Client satisfaction score" },
        { value: 70, suffix: "%", label: "Revenue from repeat clients" },
        { value: siteConfig.stats.projects, suffix: "+", label: "Projects delivered" },
      ],
    },
    {
      type: "testimonials",
      title: "What our partners say",
      subtitle: "Feedback from clients across industries and regions.",
      items: [
        {
          quote: "They didn't just add capacity, they raised the bar for our whole engineering organisation. Code reviews, testing, release discipline: everything improved.",
          author: "VP Engineering",
          role: "North American fintech",
        },
        {
          quote: "We launched our new customer portal three weeks ahead of schedule. The team anticipated problems before we even knew they existed.",
          author: "Chief Digital Officer",
          role: "Gulf-based retail group",
        },
        {
          quote: "Their designers spent real time with our clinicians. The result is a product our staff actually enjoy using.",
          author: "Head of Product",
          role: "European digital health provider",
        },
        {
          quote: "Migrating a fifteen-year-old platform to the cloud felt impossible. They broke it into manageable steps and we never had a single day of unplanned downtime.",
          author: "Chief Technology Officer",
          role: "UK logistics company",
        },
        {
          quote: "Transparent, responsive and genuinely invested in our success. It feels like working with an extension of our own team.",
          author: "Director of Engineering",
          role: "US SaaS scale-up",
        },
        {
          quote: "Their data team helped us move from monthly reports to real-time dashboards. Decisions that took weeks now take hours.",
          author: "Head of Analytics",
          role: "Saudi energy services firm",
        },
        {
          quote: "We came with a rough idea and left with a funded, launched product. Their product strategy work was invaluable.",
          author: "Co-founder",
          role: "Venture-backed proptech startup",
        },
        {
          quote: "Security and compliance were front of mind from the very first sprint. Our audit went smoother than ever.",
          author: "Chief Information Security Officer",
          role: "Regional banking group",
        },
        {
          quote: "The AI assistant they built for our support team handles a large share of routine tickets, and our customers have noticed the difference.",
          author: "VP Customer Experience",
          role: "Asia Pacific e-commerce marketplace",
        },
      ],
    },
    {
      type: "featureGrid",
      eyebrow: "Why clients stay",
      title: "What makes our partnerships work",
      columns: 3,
      items: [
        { icon: "message", title: "Clear communication", description: "Regular demos, honest status updates and a single point of accountability." },
        { icon: "users", title: "Stable teams", description: "Low attrition means the people who learn your business stay on your project." },
        { icon: "zap", title: "Fast ramp-up", description: "Proven onboarding playbooks get new teams productive within days, not months." },
      ],
    },
    {
      type: "logos",
      title: "Trusted across industries",
      subtitle: "We work with organisations in every major sector.",
      items: ["Financial Services", "Healthcare", "Retail", "Logistics", "Energy", "Education", "Government", "Telecom"],
    },
    {
      type: "cta",
      title: "Ready to write your own success story?",
      subtitle: "Let's talk about what you're building and how we can help.",
      cta: { label: "Start a project", href: "/contact" },
      tone: "teal",
    },
    { type: "contact" },
  ],
};
