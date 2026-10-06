import { siteConfig } from "@/config/site";
import type { PageContent } from "@/content/types";

export const employeeSuccessPage: PageContent = {
  slug: "employee-success",
  metaTitle: `Employee Success | ${siteConfig.name}`,
  metaDescription: `How ${siteConfig.name} helps every team member learn, grow and build a rewarding long-term career.`,
  blocks: [
    {
      type: "hero",
      eyebrow: "Employee Success",
      title: "Your growth is our business",
      subtitle: "We invest in our people with the same care we bring to client work: clear goals, honest feedback and the resources to keep getting better.",
      cta: { label: "Start your journey", href: "/career" },
      tone: "navy",
      art: "employee-success-hero",
    },
    {
      type: "intro",
      eyebrow: "Our philosophy",
      title: "Careers built on learning and ownership",
      paragraphs: [
        "Every person who joins us gets a growth plan, a mentor and regular conversations about where they want to go. We help you build the skills to get there, whether that means deepening technical expertise, moving into leadership or exploring a new discipline.",
        "Many of our leaders started as engineers, designers or analysts on client projects. Internal mobility is part of how we grow.",
      ],
      highlights: [
        "Personal development plans for every employee",
        "Twice-yearly growth conversations",
        "Internal job board with priority for current staff",
      ],
      art: "employee-success-intro",
    },
    {
      type: "featureGrid",
      eyebrow: "Growth programmes",
      title: "Ways we help you grow",
      columns: 3,
      items: [
        { icon: "education", title: "Internal academy", description: "Structured learning paths in engineering, cloud, data, design and leadership." },
        { icon: "award", title: "Certification support", description: "Paid exam fees and study time for industry-recognised certifications." },
        { icon: "users", title: "Mentorship", description: "Every new joiner is paired with an experienced mentor from day one." },
        { icon: "compass", title: "Leadership track", description: "A cohort-based programme preparing high-potential employees for management." },
        { icon: "map", title: "Global mobility", description: "Opportunities to work from our regional offices and with international clients." },
        { icon: "mic", title: "Speak and share", description: "Support for conference talks, blog posts and open-source contributions." },
      ],
    },
    {
      type: "process",
      eyebrow: "Your first year",
      title: "From onboarding to impact",
      steps: [
        { title: "Week 1: Welcome", description: "Onboarding, tools setup and an introduction to our values, practices and people." },
        { title: "Month 1: Ramp-up", description: "Join a project with your mentor by your side and complete core learning modules." },
        { title: "Month 3: Contribute", description: "Take ownership of meaningful work and agree your development goals." },
        { title: "Month 12: Grow", description: "Review your progress, celebrate achievements and plan your next step." },
      ],
    },
    {
      type: "stats",
      title: "Growth in numbers",
      tone: "teal",
      items: [
        { value: 60, suffix: "+", label: "Learning hours per employee each year" },
        { value: 35, suffix: "%", label: "Of leadership roles filled internally" },
        { value: 800, suffix: "+", label: "Certifications earned last year" },
        { value: 20, suffix: "%", label: "Of employees promoted annually" },
      ],
    },
    {
      type: "testimonials",
      title: "Success stories",
      items: [
        { quote: "I started as an intern and now lead a team of twelve. At every step someone was investing in me.", author: "Engineering Manager", role: "Engineering, Lahore" },
        { quote: "The academy helped me move from QA into cloud engineering. I didn't have to leave to change careers.", author: "Cloud Engineer", role: "Cloud, Dubai" },
        { quote: "My mentor pushed me to give my first conference talk. It changed how I see myself as an engineer.", author: "Senior Software Engineer", role: "Engineering, London" },
      ],
    },
    {
      type: "cta",
      title: "Grow your career with us",
      subtitle: "Find a role that challenges you and a team that supports you.",
      cta: { label: "View open roles", href: "/career" },
      tone: "purple",
    },
    { type: "contact" },
  ],
};
