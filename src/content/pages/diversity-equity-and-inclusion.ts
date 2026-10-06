import { siteConfig } from "@/config/site";
import type { PageContent } from "@/content/types";

export const diversityEquityAndInclusionPage: PageContent = {
  slug: "diversity-equity-and-inclusion",
  metaTitle: `Diversity, Equity & Inclusion | ${siteConfig.name}`,
  metaDescription: `How ${siteConfig.name} builds a diverse, equitable and inclusive workplace where every person can thrive.`,
  blocks: [
    {
      type: "hero",
      eyebrow: "Diversity, Equity & Inclusion",
      title: "Better teams build better technology",
      subtitle: "Diverse perspectives lead to better products. We are committed to creating a workplace where everyone belongs, is treated fairly and has equal opportunity to grow.",
      cta: { label: "Join us", href: "/career" },
      tone: "teal",
      art: "dei-hero",
    },
    {
      type: "intro",
      eyebrow: "Our commitment",
      title: "Inclusion is a practice, not a policy",
      paragraphs: [
        "We serve clients and users from every background, so our teams should reflect that diversity. We work deliberately to remove barriers in hiring, promotion and day-to-day collaboration.",
        "We know we haven't got everything right yet. We set measurable goals, track our progress openly and listen carefully to our people about what needs to change.",
      ],
      highlights: [
        "Structured, bias-aware hiring and promotion processes",
        "Pay equity reviews conducted every year",
        "Inclusive leadership training for all managers",
      ],
      art: "dei-intro",
    },
    {
      type: "featureGrid",
      eyebrow: "Our programmes",
      title: "Turning commitment into action",
      columns: 3,
      items: [
        { icon: "users", title: "Women in Tech network", description: "Mentoring, sponsorship and leadership programmes that support women at every career stage." },
        { icon: "education", title: "Returnship programme", description: "Paid, supported pathways for professionals returning to work after a career break." },
        { icon: "globe", title: "Global perspectives", description: "Cross-office teams and cultural exchange that celebrate the diversity of our people." },
        { icon: "heart", title: "Accessibility", description: "Accessible offices, assistive technology and flexible arrangements for people with disabilities." },
        { icon: "message", title: "Employee resource groups", description: "Employee-led communities that create belonging and shape company policy." },
        { icon: "scale", title: "Fair pay and progression", description: "Transparent career frameworks and regular audits to close any gaps we find." },
      ],
    },
    {
      type: "stats",
      title: "Where we stand",
      subtitle: "We share our numbers so we can be held accountable.",
      tone: "purple",
      items: [
        { value: 30, suffix: "%", label: "Women in our workforce" },
        { value: 25, suffix: "+", label: "Nationalities across our teams" },
        { value: 100, suffix: "%", label: "Managers trained in inclusive leadership" },
        { value: 40, suffix: "%", label: "Of last year's graduate intake were women" },
      ],
    },
    {
      type: "process",
      eyebrow: "Our approach",
      title: "How we build inclusion into everyday work",
      steps: [
        { title: "Attract", description: "Inclusive job descriptions, diverse sourcing channels and partnerships with universities and communities." },
        { title: "Hire fairly", description: "Structured interviews, consistent scorecards and diverse interview panels." },
        { title: "Develop", description: "Equal access to stretch projects, mentoring and leadership programmes." },
        { title: "Measure", description: "Regular surveys and data reviews to identify and address gaps." },
      ],
    },
    {
      type: "testimonials",
      title: "Voices from our teams",
      items: [
        { quote: "The returnship programme gave me the confidence and support to restart my career after four years away.", author: "QA Engineer", role: "Quality Engineering, Lahore" },
        { quote: "I've never had to choose between being myself and being taken seriously here.", author: "Engineering Manager", role: "Engineering, Dubai" },
      ],
    },
    {
      type: "cta",
      title: "Help us build a more inclusive industry",
      subtitle: "Bring your whole self to work and grow with us.",
      cta: { label: "Explore careers", href: "/career" },
      tone: "navy",
    },
    { type: "contact" },
  ],
};
