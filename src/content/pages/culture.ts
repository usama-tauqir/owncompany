import { siteConfig } from "@/config/site";
import type { PageContent } from "@/content/types";

export const culturePage: PageContent = {
  slug: "culture",
  metaTitle: `Culture | ${siteConfig.name}`,
  metaDescription: `Discover the culture at ${siteConfig.name}: ownership, learning, collaboration and a genuine sense of belonging.`,
  blocks: [
    {
      type: "hero",
      eyebrow: "Our Culture",
      title: "A place where curious people do their best work",
      subtitle: "Our culture is shaped every day by the way we collaborate, learn from each other and celebrate what we build together.",
      cta: { label: "Join our team", href: "/career" },
      secondaryCta: { label: "See our benefits", href: "/benefits" },
      tone: "purple",
      art: "culture-hero",
    },
    {
      type: "intro",
      eyebrow: "How we work",
      title: "High trust, low ego",
      paragraphs: [
        "We hire smart, kind people and then trust them to make good decisions. Teams are empowered to choose their tools, shape their processes and speak directly with clients.",
        "Feedback flows in every direction. Juniors challenge seniors, engineers challenge product decisions and leaders ask for input before they act. The best idea wins, no matter who it comes from.",
      ],
      highlights: [
        "Flat, accessible leadership",
        "Open-door policy across every level",
        "Blameless retrospectives and post-mortems",
      ],
      art: "culture-intro",
    },
    {
      type: "featureGrid",
      eyebrow: "Our cultural pillars",
      title: "What makes us, us",
      columns: 3,
      items: [
        { icon: "target", title: "Ownership", description: "We care about outcomes and take responsibility for the quality of our work." },
        { icon: "lightbulb", title: "Curiosity", description: "We ask questions, experiment with new ideas and share what we learn." },
        { icon: "handshake", title: "Collaboration", description: "We win as teams, help each other out and never let someone struggle alone." },
        { icon: "heart", title: "Care", description: "We look after our colleagues, clients and communities." },
        { icon: "zap", title: "Momentum", description: "We bias towards action, ship often and improve as we go." },
        { icon: "sparkles", title: "Celebration", description: "We take time to recognise wins, big and small." },
      ],
    },
    {
      type: "stats",
      title: "Culture by the numbers",
      tone: "teal",
      items: [
        { value: 120, suffix: "+", label: "Internal tech talks each year" },
        { value: 15, suffix: "+", label: "Employee-led communities" },
        { value: 4, label: "Company-wide hackathons a year" },
        { value: 88, suffix: "%", label: "Employees who recommend us as a workplace" },
      ],
    },
    {
      type: "timeline",
      title: "A year at our company",
      subtitle: "Some of the traditions our teams look forward to.",
      items: [
        { year: "Q1", title: "Kick-off summit", description: "The whole company comes together to celebrate last year and share plans for the next." },
        { year: "Q2", title: "Innovation hackathon", description: "Forty-eight hours to build something new. The best ideas often become client offerings." },
        { year: "Q3", title: "Sports and wellness month", description: "Tournaments, fitness challenges and wellbeing workshops across every office." },
        { year: "Q4", title: "Community and giving season", description: "Volunteering drives, charity events and our annual awards night." },
      ],
    },
    {
      type: "testimonials",
      title: "Hear it from our people",
      items: [
        { quote: "I joined as a graduate and led my first client project within two years. People here invest in you.", author: "Software Engineer", role: "Engineering, Lahore" },
        { quote: "What stands out is how much people genuinely help each other. Nobody gatekeeps knowledge.", author: "Senior Product Designer", role: "Design, London" },
        { quote: "I've worked across three industries without changing companies. The variety keeps me learning.", author: "Data Engineer", role: "Data & AI, Riyadh" },
      ],
    },
    {
      type: "cta",
      title: "Sound like your kind of place?",
      subtitle: "We are always looking for people who share our values.",
      cta: { label: "Browse open roles", href: "/career" },
      tone: "navy",
    },
    { type: "contact" },
  ],
};
