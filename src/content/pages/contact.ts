import { siteConfig } from "@/config/site";
import type { PageContent } from "@/content/types";

export const contactPage: PageContent = {
  slug: "contact",
  metaTitle: `Contact Us | ${siteConfig.name}`,
  metaDescription: `Get in touch with ${siteConfig.name} to discuss a project, partnership, media enquiry or career opportunity. Our regional teams are ready to help.`,
  blocks: [
    {
      type: "hero",
      eyebrow: "Contact Us",
      title: "Let's talk about what you're building",
      subtitle: `Whether you have a detailed brief or just an idea, our team will get back to you within one business day. Write to ${siteConfig.email.business} or use the form below.`,
      cta: { label: "Explore our services", href: "/services" },
      tone: "navy",
      art: "contact-hero",
    },
    {
      type: "featureGrid",
      title: "How can we help?",
      subtitle: "Reach the right team directly.",
      columns: 3,
      items: [
        { icon: "briefcase", title: "New business", description: `Discuss a project or partnership: ${siteConfig.email.business}` },
        { icon: "users", title: "Careers", description: `Questions about roles or applications: ${siteConfig.email.careers}` },
        { icon: "news", title: "Media", description: `Press and investor enquiries: ${siteConfig.email.media}` },
      ],
    },
    {
      type: "offices",
      title: "Our offices",
      subtitle: "Find the team closest to you.",
    },
    {
      type: "faq",
      title: "Before you reach out",
      items: [
        { question: "How quickly will I hear back?", answer: "We respond to every business enquiry within one business day. For complex requests, we'll schedule a discovery call to understand your needs." },
        { question: "Do you sign NDAs before discussing a project?", answer: "Yes. We are happy to sign a mutual non-disclosure agreement before any detailed conversation." },
        { question: "What engagement models do you offer?", answer: "We offer fixed-scope projects, dedicated teams and staff augmentation. We'll recommend the model that best fits your goals, timeline and budget." },
        { question: "Can you work in my time zone?", answer: "Yes. With regional offices and delivery centers across several time zones, we arrange meaningful overlap with your working hours." },
        { question: "What information should I include in my message?", answer: "A short description of your goals, timeline and any constraints is plenty. We'll take it from there." },
      ],
    },
    { type: "contact" },
  ],
};
