import { siteConfig } from "@/config/site";
import type { PageContent } from "@/content/types";

export const aboutUsPage: PageContent = {
  slug: "about-us",
  metaTitle: `About Us | ${siteConfig.name}`,
  metaDescription: `Learn how ${siteConfig.name} became a global technology partner for enterprises, startups and the public sector, and the principles that guide how we build.`,
  blocks: [
    {
      type: "hero",
      eyebrow: "About Us",
      title: "We build software that businesses can grow into",
      subtitle: `Since ${siteConfig.foundedYear}, ${siteConfig.name} has helped organisations turn ambitious ideas into reliable products, modern platforms and measurable outcomes.`,
      cta: { label: "Work with us", href: "/contact" },
      secondaryCta: { label: "Explore careers", href: "/career" },
      tone: "navy",
      art: "about-us-hero",
    },
    {
      type: "intro",
      eyebrow: "Who we are",
      title: "An engineering partner with a product mindset",
      paragraphs: [
        `${siteConfig.name} started as a small team of engineers who believed that good software is less about lines of code and more about understanding the people who will use it. That belief still shapes every engagement we take on.`,
        "Today we bring together strategists, designers, engineers, data scientists and cloud specialists who work as one team with our clients. We take ownership of outcomes, communicate openly and stay with our partners well beyond launch day.",
        "Whether we are modernising a decades-old core system, launching a new digital channel or embedding AI into everyday workflows, our goal is the same: deliver technology that is useful, secure and built to last.",
      ],
      highlights: [
        "Cross-functional teams that own delivery end to end",
        "Delivery centers and regional offices across multiple continents",
        "Long-term partnerships, many spanning five years or more",
        "Security and quality practices embedded from day one",
      ],
      art: "about-us-intro",
    },
    {
      type: "stats",
      title: "Our work in numbers",
      subtitle: "A track record built one engagement at a time.",
      tone: "purple",
      items: [
        { value: siteConfig.stats.experts, suffix: "+", label: "Technology professionals" },
        { value: siteConfig.stats.projects, suffix: "+", label: "Projects delivered" },
        { value: siteConfig.stats.countries, suffix: "+", label: "Countries served" },
        { value: siteConfig.stats.years, suffix: "+", label: "Years in business" },
      ],
    },
    {
      type: "featureGrid",
      eyebrow: "What we value",
      title: "Principles we work by",
      subtitle: "These are not slogans on a wall. They are the habits we hire for, coach for and hold each other accountable to.",
      columns: 3,
      items: [
        {
          icon: "target",
          title: "Outcomes over output",
          description: "We measure success by the business results our clients achieve, not by hours logged or features shipped.",
        },
        {
          icon: "handshake",
          title: "Partnership, not vendorship",
          description: "We share context, challenge assumptions respectfully and make decisions as if the product were our own.",
        },
        {
          icon: "shield",
          title: "Trust by default",
          description: "Transparent estimates, honest status reports and secure engineering practices are non-negotiable.",
        },
        {
          icon: "lightbulb",
          title: "Curiosity that compounds",
          description: "We invest in learning, research and internal tooling so every project benefits from the last.",
        },
        {
          icon: "users",
          title: "People first",
          description: "Great software comes from teams that feel supported, respected and free to do their best work.",
        },
        {
          icon: "leaf",
          title: "Responsible growth",
          description: "We consider the social and environmental impact of what we build and how we operate.",
        },
      ],
    },
    {
      type: "timeline",
      title: "Milestones along the way",
      subtitle: "A few moments that shaped who we are today.",
      items: [
        {
          year: String(siteConfig.foundedYear),
          title: "The first commit",
          description: `${siteConfig.name} is founded by a handful of engineers with a shared goal: build software the right way, for clients who care about quality.`,
        },
        {
          year: "2015",
          title: "Going international",
          description: "Our first long-term partnerships with North American product companies establish our remote delivery model.",
        },
        {
          year: "2018",
          title: "A regional presence",
          description: "We open our first regional office to work more closely with clients and expand into enterprise transformation programmes.",
        },
        {
          year: "2021",
          title: "Data, AI and cloud practices",
          description: "Dedicated centres of excellence are formed to help clients scale on the cloud and put data to work.",
        },
        {
          year: "2024",
          title: "Expanding across the Gulf",
          description: "New offices and partnerships support national digital agendas and large-scale public sector initiatives.",
        },
        {
          year: "Today",
          title: "Building what's next",
          description: "We continue to grow our teams, invest in applied AI and deepen our long-standing client relationships.",
        },
      ],
    },
    {
      type: "linkGrid",
      eyebrow: "Get to know us",
      title: "Explore more about our company",
      links: [
        { label: "Leadership", href: "/leadership", description: "Meet the team steering our strategy and culture.", icon: "users" },
        { label: "Services", href: "/services", description: "See the full range of capabilities we offer.", icon: "layers" },
        { label: "Industries", href: "/industry", description: "Discover the sectors where we bring deep domain knowledge.", icon: "building" },
        { label: "Case Studies", href: "/case-studies", description: "Read how we have helped clients solve real problems.", icon: "book" },
      ],
    },
    {
      type: "cta",
      title: "Let's build something meaningful together",
      subtitle: "Tell us where you want to go. We will help you map the route and get there.",
      cta: { label: "Start a conversation", href: "/contact" },
      tone: "teal",
    },
    { type: "contact" },
  ],
};
