import { siteConfig } from "@/config/site";
import type { PageContent } from "@/content/types";

export const mediaInvestorRelationsPage: PageContent = {
  slug: "media-investor-relations",
  metaTitle: `Media & Investor Relations | ${siteConfig.name}`,
  metaDescription: `Press releases, company news, media resources and investor information from ${siteConfig.name}.`,
  blocks: [
    {
      type: "hero",
      eyebrow: "Media & Investor Relations",
      title: "News, announcements and company information",
      subtitle: `The latest from ${siteConfig.name}, plus resources for journalists, analysts and investors who want to understand our story.`,
      cta: { label: "Contact the media team", href: "/contact" },
      secondaryCta: { label: "About the company", href: "/about-us" },
      tone: "navy",
      art: "media-hero",
    },
    {
      type: "intro",
      eyebrow: "At a glance",
      title: "A growing, independent technology company",
      paragraphs: [
        `Founded in ${siteConfig.foundedYear}, ${siteConfig.name} delivers software engineering, cloud, data and AI services to organisations in more than ${siteConfig.stats.countries} countries.`,
        "We have grown steadily through long-term client relationships, disciplined investment in talent and an expanding regional footprint across North America, the Middle East and Europe.",
      ],
      highlights: [
        `Media enquiries: ${siteConfig.email.media}`,
        `Partnership enquiries: ${siteConfig.email.business}`,
        "Brand assets and executive bios available on request",
      ],
      art: "media-intro",
    },
    {
      type: "resources",
      title: "Latest news",
      subtitle: "Announcements, partnerships and milestones from across the company.",
      kind: "news",
      limit: 6,
      viewAll: { label: "Read the blog", href: "/blogs" },
    },
    {
      type: "stats",
      title: "Key facts",
      tone: "purple",
      items: [
        { value: siteConfig.stats.experts, suffix: "+", label: "Employees worldwide" },
        { value: siteConfig.stats.projects, suffix: "+", label: "Projects delivered" },
        { value: siteConfig.offices.length, label: "Office locations" },
        { value: siteConfig.stats.countries, suffix: "+", label: "Countries served" },
      ],
    },
    {
      type: "featureGrid",
      eyebrow: "Resources",
      title: "For media and investors",
      columns: 3,
      items: [
        { icon: "news", title: "Press releases", description: "Official announcements on partnerships, expansion and company milestones." },
        { icon: "file", title: "Media kit", description: "Logos, brand guidelines, executive photography and approved boilerplate copy." },
        { icon: "mic", title: "Spokespeople", description: "Access to our leaders for commentary on technology, AI and digital transformation." },
        { icon: "chart", title: "Company overview", description: "A summary of our services, markets, growth and operating model." },
        { icon: "scale", title: "Governance", description: "Information on our board oversight, policies and ethical standards." },
        { icon: "leaf", title: "ESG reporting", description: "Our approach to environmental, social and governance responsibilities." },
      ],
    },
    {
      type: "faq",
      title: "Frequently asked questions",
      items: [
        {
          question: "How do I arrange an interview with a company executive?",
          answer: `Email ${siteConfig.email.media} with your publication, deadline and topic. Our communications team typically responds within one business day.`,
        },
        {
          question: "Where can I find official logos and brand assets?",
          answer: "Our media kit includes approved logos, colour palettes and usage guidelines. Request it from the media team and we will share a download link.",
        },
        {
          question: "Is the company publicly listed?",
          answer: "We are a privately held company. Investors interested in learning more about our growth plans can contact our team for an introductory conversation.",
        },
        {
          question: "Can I reference the company in a research report?",
          answer: "Yes. We are happy to verify facts, provide updated figures and review references to our company for accuracy.",
        },
      ],
    },
    {
      type: "cta",
      title: "Working on a story?",
      subtitle: "Our communications team is happy to help with facts, commentary and introductions.",
      cta: { label: "Reach the media team", href: "/contact" },
      tone: "teal",
    },
    { type: "contact" },
  ],
};
