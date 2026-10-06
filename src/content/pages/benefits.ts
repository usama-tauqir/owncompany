import { siteConfig } from "@/config/site";
import type { PageContent } from "@/content/types";

export const benefitsPage: PageContent = {
  slug: "benefits",
  metaTitle: `Benefits | ${siteConfig.name}`,
  metaDescription: `Health, wellbeing, flexibility and growth: explore the benefits that come with a career at ${siteConfig.name}.`,
  blocks: [
    {
      type: "hero",
      eyebrow: "Benefits",
      title: "Support for work, life and everything in between",
      subtitle: "Our benefits are designed to help you stay healthy, keep growing and enjoy life outside work. Specific benefits vary by location.",
      cta: { label: "View open roles", href: "/career" },
      secondaryCta: { label: "Our culture", href: "/culture" },
      tone: "teal",
      art: "benefits-hero",
    },
    {
      type: "intro",
      eyebrow: "Total rewards",
      title: "More than a salary",
      paragraphs: [
        "We offer competitive pay benchmarked against the market every year, and we pair it with a comprehensive set of benefits that reflect what our people tell us matters most.",
        "We regularly review our package based on employee feedback, so it keeps evolving as our teams and their needs change.",
      ],
      art: "benefits-intro",
    },
    {
      type: "featureGrid",
      eyebrow: "Health & wellbeing",
      title: "Taking care of you and your family",
      columns: 3,
      items: [
        { icon: "health", title: "Medical cover", description: "Comprehensive health insurance for you and your dependants, including outpatient and hospital care." },
        { icon: "heart", title: "Mental health support", description: "Confidential counselling sessions and wellbeing resources whenever you need them." },
        { icon: "zap", title: "Fitness allowance", description: "Gym memberships, sports clubs and wellness challenges to help you stay active." },
      ],
    },
    {
      type: "featureGrid",
      eyebrow: "Flexibility & time off",
      title: "Work that fits your life",
      columns: 3,
      tone: "light",
      items: [
        { icon: "home", title: "Hybrid working", description: "Flexible arrangements that balance focused remote work with in-person collaboration." },
        { icon: "plane", title: "Generous leave", description: "Paid annual leave, public holidays and additional days for long service." },
        { icon: "users", title: "Family leave", description: "Paid parental leave and support for new parents returning to work." },
      ],
    },
    {
      type: "featureGrid",
      eyebrow: "Growth & rewards",
      title: "Investing in your future",
      columns: 3,
      items: [
        { icon: "book", title: "Learning budget", description: "An annual allowance for courses, books, conferences and certifications." },
        { icon: "trophy", title: "Performance bonuses", description: "Rewards that recognise individual and team contributions." },
        { icon: "wallet", title: "Retirement savings", description: "Provident fund or pension contributions where available." },
        { icon: "gift", title: "Referral rewards", description: "Bonuses for helping great people join our teams." },
        { icon: "monitor", title: "Modern equipment", description: "The hardware and tools you need to do your best work." },
        { icon: "sparkles", title: "Celebrations", description: "Team outings, annual events and milestone celebrations." },
      ],
    },
    {
      type: "faq",
      title: "Benefits FAQs",
      items: [
        { question: "Are benefits the same in every country?", answer: "Our core principles are consistent everywhere, but specific benefits are tailored to local regulations and market practice. Your recruiter will share the full package for your location." },
        { question: "When do benefits start?", answer: "Most benefits, including medical cover, begin on your first day. Some, such as long-service leave, build up over time." },
        { question: "Can I use the learning budget for any course?", answer: "Yes, as long as it relates to your current role or career goals. Your manager can help you plan how to use it." },
        { question: "Do interns and contractors receive benefits?", answer: "Interns and contractors receive a tailored set of benefits depending on their engagement and location." },
      ],
    },
    {
      type: "cta",
      title: "Find a role that rewards you",
      subtitle: "Explore opportunities across engineering, design, data, cloud and more.",
      cta: { label: "Browse careers", href: "/career" },
      tone: "navy",
    },
    { type: "contact" },
  ],
};
