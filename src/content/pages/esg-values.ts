import { siteConfig } from "@/config/site";
import type { PageContent } from "@/content/types";

export const esgValuesPage: PageContent = {
  slug: "esg-values",
  metaTitle: `ESG & Values | ${siteConfig.name}`,
  metaDescription: `How ${siteConfig.name} approaches environmental stewardship, social responsibility and good governance.`,
  blocks: [
    {
      type: "hero",
      eyebrow: "ESG & Values",
      title: "Building technology responsibly",
      subtitle: "We believe a technology company should leave its communities, its people and the planet better off. Here's how we put that belief into practice.",
      cta: { label: "Partner with us", href: "/contact" },
      tone: "teal",
      art: "esg-hero",
    },
    {
      type: "intro",
      eyebrow: "Our approach",
      title: "Responsibility woven into how we operate",
      paragraphs: [
        "Environmental, social and governance commitments are not a separate programme at our company. They influence how we design our offices, how we hire and develop people, how we choose partners and how we write software.",
        "We set practical goals, measure progress honestly and share what we learn, including where we still have work to do.",
      ],
      highlights: [
        "Annual review of ESG goals by the leadership team",
        "Employee-led sustainability and community committees",
        "Supplier code of conduct for all major vendors",
      ],
      art: "esg-intro",
    },
    {
      type: "featureGrid",
      eyebrow: "Environmental",
      title: "Reducing our footprint",
      columns: 3,
      items: [
        { icon: "leaf", title: "Efficient workplaces", description: "Energy-efficient lighting, smart climate control and reduced single-use materials across our offices." },
        { icon: "cloud", title: "Green cloud practices", description: "We help clients right-size infrastructure and choose lower-carbon regions where possible." },
        { icon: "plane", title: "Mindful travel", description: "Remote-first collaboration reduces unnecessary flights while keeping in-person time purposeful." },
      ],
    },
    {
      type: "featureGrid",
      eyebrow: "Social",
      title: "Investing in people and communities",
      columns: 3,
      tone: "light",
      items: [
        { icon: "education", title: "Digital skills programmes", description: "Free coding bootcamps and mentoring for students from under-served communities." },
        { icon: "heart", title: "Employee wellbeing", description: "Comprehensive health cover, mental health support and flexible working arrangements." },
        { icon: "users", title: "Inclusive hiring", description: "Structured interviews and diverse panels to reduce bias in every hiring decision." },
      ],
    },
    {
      type: "featureGrid",
      eyebrow: "Governance",
      title: "Doing business the right way",
      columns: 3,
      items: [
        { icon: "scale", title: "Ethics and compliance", description: "A clear code of conduct, annual training and confidential channels for raising concerns." },
        { icon: "lock", title: "Information security", description: "Security policies, access controls and audits that protect client and employee data." },
        { icon: "clipboard", title: "Transparent reporting", description: "Regular reporting to leadership and stakeholders on risk, compliance and ESG progress." },
      ],
    },
    {
      type: "stats",
      title: "Progress we're proud of",
      tone: "navy",
      items: [
        { value: 5000, suffix: "+", label: "Students trained in digital skills" },
        { value: 30, suffix: "%", label: "Reduction in office energy use per employee" },
        { value: 100, suffix: "%", label: "Employees completing ethics training" },
        { value: 12000, suffix: "+", label: "Volunteer hours contributed" },
      ],
    },
    {
      type: "linkGrid",
      title: "Learn more",
      links: [
        { label: "Our Culture", href: "/culture", description: "What it's like to work with us, day to day.", icon: "heart" },
        { label: "Benefits", href: "/benefits", description: "How we support our people's health, growth and wellbeing.", icon: "gift" },
        { label: "Leadership", href: "/leadership", description: "The team accountable for our governance and direction.", icon: "users" },
      ],
    },
    {
      type: "cta",
      title: "Looking for a responsible technology partner?",
      subtitle: "We are happy to share our policies and discuss how we can support your own ESG goals.",
      cta: { label: "Contact us", href: "/contact" },
      tone: "purple",
    },
    { type: "contact" },
  ],
};
