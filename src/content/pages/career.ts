import { siteConfig } from "@/config/site";
import type { PageContent } from "@/content/types";

export const careerPage: PageContent = {
  slug: "career",
  metaTitle: `Careers | ${siteConfig.name}`,
  metaDescription: `Join ${siteConfig.name} and build software that matters with talented, supportive teams across our global offices. Explore open roles in engineering, design, data, cloud and more.`,
  blocks: [
    {
      type: "hero",
      eyebrow: `Careers at ${siteConfig.shortName}`,
      title: "Do the best work of your career, with people who have your back",
      subtitle: `Join more than ${siteConfig.stats.experts} technologists solving real problems for clients around the world, and grow faster than you thought possible.`,
      cta: { label: "Talk to our recruiters", href: "/contact" },
      secondaryCta: { label: "Explore our culture", href: "/culture" },
      tone: "teal",
      art: "career-hero",
    },
    {
      type: "intro",
      eyebrow: "Why join us",
      title: "Meaningful work, real ownership, continuous growth",
      paragraphs: [
        "At our company you will work on products used by millions of people, from banking apps and healthcare platforms to national digital services. You'll be trusted with real responsibility early, and supported by mentors who want you to succeed.",
        "We invest heavily in learning, from certification budgets and internal academies to tech talks and hackathons. Our career framework is transparent, so you always know what the next step looks like and how to get there.",
      ],
      highlights: [
        "Clear career paths for individual contributors and managers",
        "Learning budgets and paid certification programmes",
        "Hybrid and flexible working arrangements",
        "Opportunities to work across regions and industries",
      ],
      art: "career-intro",
    },
    {
      type: "featureGrid",
      eyebrow: "Life with us",
      title: "What you can expect",
      columns: 4,
      items: [
        { icon: "rocket", title: "Challenging projects", description: "Modern stacks, complex domains and products that ship to real users." },
        { icon: "book", title: "Learning culture", description: "Mentorship, academies and time set aside for growth." },
        { icon: "heart", title: "Wellbeing first", description: "Comprehensive health cover and support for life outside work." },
        { icon: "trophy", title: "Recognition", description: "Performance rewards and peer recognition that celebrate great work." },
      ],
    },
    {
      type: "jobs",
      title: "Open roles",
      subtitle: `Don't see the right fit? Send your CV to ${siteConfig.email.careers} and we'll keep you in mind for future openings.`,
      items: [
        { title: "Senior Full-Stack Engineer (React / Node.js)", department: "Engineering", location: "Lahore, Pakistan", type: "Full-time" },
        { title: "Principal Backend Engineer (Java / Spring)", department: "Engineering", location: "Lahore, Pakistan", type: "Full-time" },
        { title: "Mobile Engineer (Flutter)", department: "Engineering", location: "Dubai, UAE", type: "Full-time" },
        { title: "Senior Product Designer", department: "Design", location: "London, UK", type: "Full-time" },
        { title: "UX Researcher", department: "Design", location: "Lahore, Pakistan", type: "Contract" },
        { title: "Machine Learning Engineer", department: "Data & AI", location: "San Jose, USA", type: "Full-time" },
        { title: "Data Engineer", department: "Data & AI", location: "Riyadh, KSA", type: "Full-time" },
        { title: "Cloud Solutions Architect", department: "Cloud", location: "Dubai, UAE", type: "Full-time" },
        { title: "Enterprise Account Executive", department: "Sales", location: "San Jose, USA", type: "Full-time" },
        { title: "Talent Acquisition Partner", department: "People", location: "Riyadh, KSA", type: "Full-time" },
      ],
    },
    {
      type: "process",
      eyebrow: "Hiring process",
      title: "How we hire",
      subtitle: "A fair, respectful process designed to help you show your best, and to help you decide if we're right for you.",
      steps: [
        { title: "Apply", description: "Submit your application. A recruiter reviews every CV personally." },
        { title: "Intro call", description: "A friendly conversation about your experience, goals and what you're looking for." },
        { title: "Skills assessment", description: "A practical exercise or technical discussion relevant to the role, never trick questions." },
        { title: "Team interview", description: "Meet the people you'd work with and ask them anything." },
        { title: "Offer", description: "We move quickly, share clear feedback and make a transparent offer." },
      ],
    },
    {
      type: "linkGrid",
      title: "Learn more about working here",
      links: [
        { label: "Culture", href: "/culture", description: "How we work, collaborate and celebrate.", icon: "heart" },
        { label: "Benefits", href: "/benefits", description: "The support and perks that come with joining us.", icon: "gift" },
        { label: "Leadership", href: "/leadership", description: "Meet the people who lead our teams.", icon: "users" },
        { label: "About Us", href: "/about-us", description: "Our story, values and milestones.", icon: "building" },
      ],
    },
    {
      type: "cta",
      title: "Ready to take the next step?",
      subtitle: `Send your CV to ${siteConfig.email.careers} or reach out with any questions about life at ${siteConfig.name}.`,
      cta: { label: "Contact our recruiters", href: "/contact" },
      tone: "purple",
    },
    { type: "contact" },
  ],
};
