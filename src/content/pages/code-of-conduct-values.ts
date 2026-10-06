import { siteConfig } from "@/config/site";
import type { PageContent } from "@/content/types";

export const codeOfConductValuesPage: PageContent = {
  slug: "code-of-conduct-values",
  metaTitle: `Code of Conduct & Values | ${siteConfig.name}`,
  metaDescription: `The ethical standards, values and behaviours that guide everyone at ${siteConfig.name}.`,
  blocks: [
    {
      type: "hero",
      eyebrow: "Code of Conduct & Values",
      title: "Integrity in every line of code and every conversation",
      subtitle: `Our code of conduct describes how everyone at ${siteConfig.name} is expected to act: with clients, with partners, with communities and with each other.`,
      cta: { label: "Ask a question", href: "/contact" },
      tone: "navy",
      art: "code-of-conduct-hero",
    },
    {
      type: "intro",
      eyebrow: "Why it matters",
      title: "Trust is the foundation of everything we do",
      paragraphs: [
        "Clients hand us their ideas, their data and often their reputations. Colleagues rely on us to treat them fairly. Communities expect us to act responsibly. Our code of conduct exists to protect that trust.",
        "It applies to every employee, contractor and leader in every office, and it is reviewed regularly to reflect new laws, technologies and expectations.",
      ],
      art: "code-of-conduct-intro",
    },
    {
      type: "featureGrid",
      eyebrow: "Core values",
      title: "The values behind our code",
      columns: 4,
      items: [
        { icon: "shield", title: "Integrity", description: "We are honest, keep our commitments and do the right thing when no one is watching." },
        { icon: "users", title: "Respect", description: "We treat everyone with dignity and value different perspectives." },
        { icon: "target", title: "Excellence", description: "We take pride in our craft and hold ourselves to high standards." },
        { icon: "handshake", title: "Accountability", description: "We own our decisions, learn from mistakes and make things right." },
      ],
    },
    {
      type: "featureGrid",
      eyebrow: "Standards of behaviour",
      title: "What the code covers",
      columns: 3,
      tone: "light",
      items: [
        { icon: "lock", title: "Protecting information", description: "Safeguarding client, employee and company data, and respecting confidentiality at all times." },
        { icon: "coins", title: "Anti-bribery and corruption", description: "We never offer or accept improper payments, gifts or favours to influence decisions." },
        { icon: "scale", title: "Conflicts of interest", description: "Disclosing personal interests that could affect, or appear to affect, our judgement." },
        { icon: "heart", title: "A safe workplace", description: "Zero tolerance for harassment, discrimination, bullying or retaliation of any kind." },
        { icon: "globe", title: "Fair competition", description: "Competing on the merits of our work and complying with competition laws everywhere we operate." },
        { icon: "brain", title: "Responsible AI", description: "Building and using AI transparently, fairly and with appropriate human oversight." },
      ],
    },
    {
      type: "process",
      eyebrow: "Speaking up",
      title: "How to raise a concern",
      subtitle: "Everyone has the right and responsibility to speak up. Concerns raised in good faith are always protected from retaliation.",
      steps: [
        { title: "Talk to someone you trust", description: "Raise the issue with your manager, a people partner or a member of leadership." },
        { title: "Use the confidential channel", description: "If you prefer, submit a concern through our confidential reporting channel, anonymously if you wish." },
        { title: "Independent review", description: "The ethics committee reviews every report promptly, fairly and confidentially." },
        { title: "Resolution and follow-up", description: "Appropriate action is taken and, where possible, the outcome is shared with the person who raised it." },
      ],
    },
    {
      type: "faq",
      title: "Common questions",
      items: [
        { question: "Who does the code of conduct apply to?", answer: "It applies to all employees, contractors, interns and leaders, and we expect our suppliers and partners to uphold equivalent standards." },
        { question: "What happens if someone breaches the code?", answer: "Breaches are investigated fairly. Depending on the severity, outcomes can range from coaching to termination and, where required, referral to authorities." },
        { question: "Can I report a concern anonymously?", answer: "Yes. Our confidential channel allows anonymous reports, and we protect everyone who speaks up in good faith." },
        { question: "How often is the code reviewed?", answer: "The ethics committee reviews the code at least once a year and whenever significant legal or business changes occur." },
      ],
    },
    {
      type: "cta",
      title: "Partner with a company that takes ethics seriously",
      subtitle: "We are happy to share our policies as part of your vendor due diligence.",
      cta: { label: "Get in touch", href: "/contact" },
      tone: "purple",
    },
    { type: "contact" },
  ],
};
