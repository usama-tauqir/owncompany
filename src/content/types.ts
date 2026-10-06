/*
 * Shared content model for every data-driven page on the site.
 *
 * Pages are described as an ordered list of `Block`s which the
 * <BlockRenderer /> turns into sections. Services, industries,
 * resources and regions have their own typed records that the
 * templates convert into blocks.
 */

export type IconName =
  | "code"
  | "smartphone"
  | "palette"
  | "cloud"
  | "shield"
  | "brain"
  | "boxes"
  | "gamepad"
  | "database"
  | "rocket"
  | "users"
  | "globe"
  | "layers"
  | "workflow"
  | "chart"
  | "cpu"
  | "lock"
  | "zap"
  | "sparkles"
  | "building"
  | "health"
  | "bank"
  | "cart"
  | "plane"
  | "radio"
  | "fuel"
  | "education"
  | "home"
  | "store"
  | "wrench"
  | "settings"
  | "target"
  | "award"
  | "handshake"
  | "leaf"
  | "scale"
  | "lightbulb"
  | "message"
  | "server"
  | "git"
  | "headphones"
  | "card"
  | "compass"
  | "box"
  | "eye"
  | "megaphone"
  | "book"
  | "mic"
  | "file"
  | "news"
  | "briefcase"
  | "heart"
  | "gift"
  | "trophy"
  | "map"
  | "pen"
  | "monitor"
  | "network"
  | "test"
  | "coins"
  | "glasses"
  | "wallet"
  | "clipboard"
  | "puzzle"
  | "bot";

export type Tone = "navy" | "purple" | "teal" | "light" | "dark";

export interface LinkItem {
  label: string;
  href: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: IconName;
  href?: string;
}

export interface StatItem {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface StepItem {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
}

export interface PersonItem {
  name: string;
  role: string;
  bio?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface JobItem {
  title: string;
  department: string;
  location: string;
  type: string;
}

export interface RichSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

/* ---------------------------------------------------------------
 * Blocks
 * ------------------------------------------------------------- */

export type Block =
  | {
      type: "hero";
      eyebrow: string;
      title: string;
      subtitle?: string;
      cta?: LinkItem;
      secondaryCta?: LinkItem;
      tone?: Tone;
      /** seed used to generate the decorative artwork */
      art?: string;
    }
  | {
      type: "intro";
      eyebrow?: string;
      title: string;
      paragraphs: string[];
      highlights?: string[];
      art?: string;
      reverse?: boolean;
    }
  | {
      type: "featureGrid";
      eyebrow?: string;
      title: string;
      subtitle?: string;
      columns?: 2 | 3 | 4;
      tone?: Tone;
      items: FeatureItem[];
    }
  | {
      type: "stats";
      title?: string;
      subtitle?: string;
      tone?: Tone;
      items: StatItem[];
    }
  | {
      type: "process";
      eyebrow?: string;
      title: string;
      subtitle?: string;
      steps: StepItem[];
    }
  | {
      type: "techStack";
      title: string;
      subtitle?: string;
      groups: { name: string; items: string[] }[];
    }
  | {
      type: "cta";
      title: string;
      subtitle?: string;
      cta: LinkItem;
      tone?: Tone;
    }
  | {
      type: "faq";
      title: string;
      subtitle?: string;
      items: FaqItem[];
    }
  | {
      type: "linkGrid";
      eyebrow?: string;
      title: string;
      subtitle?: string;
      links: (LinkItem & { description?: string; icon?: IconName })[];
    }
  | {
      type: "timeline";
      title: string;
      subtitle?: string;
      items: TimelineItem[];
    }
  | {
      type: "people";
      title: string;
      subtitle?: string;
      items: PersonItem[];
    }
  | {
      type: "testimonials";
      title: string;
      subtitle?: string;
      items: TestimonialItem[];
    }
  | {
      type: "logos";
      title: string;
      subtitle?: string;
      items: string[];
    }
  | {
      type: "offices";
      title: string;
      subtitle?: string;
      /** office ids from siteConfig.offices; omit for all */
      only?: string[];
    }
  | {
      type: "resources";
      title: string;
      subtitle?: string;
      kind?: ResourceKind;
      limit?: number;
      viewAll?: LinkItem;
    }
  | {
      type: "jobs";
      title: string;
      subtitle?: string;
      items: JobItem[];
    }
  | {
      type: "richText";
      title?: string;
      updated?: string;
      sections: RichSection[];
    }
  | {
      type: "contact";
    };

export interface PageContent {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  blocks: Block[];
}

/* ---------------------------------------------------------------
 * Services
 * ------------------------------------------------------------- */

export type ServiceCategory =
  | "Digital Transformation"
  | "Business Applications"
  | "Shopify"
  | "Emerging Technologies"
  | "Gaming"
  | "Cloud"
  | "Studios & Advisory";

export interface Service {
  slug: string;
  name: string;
  category: ServiceCategory;
  icon: IconName;
  /** short line shown under the hero eyebrow */
  headline: string;
  /** one sentence used on cards & meta description */
  summary: string;
  heroCta: string;
  overview: {
    title: string;
    paragraphs: string[];
    highlights: string[];
  };
  offerings: {
    title: string;
    subtitle: string;
    items: FeatureItem[];
  };
  process: {
    title: string;
    steps: StepItem[];
  };
  midCta: { title: string; subtitle: string; label: string };
  techStack: { name: string; items: string[] }[];
  /** industry slugs */
  industries: string[];
  benefits: FeatureItem[];
  faqs: FaqItem[];
}

/* ---------------------------------------------------------------
 * Industries
 * ------------------------------------------------------------- */

export interface Industry {
  slug: string;
  name: string;
  icon: IconName;
  headline: string;
  summary: string;
  overview: {
    title: string;
    paragraphs: string[];
    highlights: string[];
  };
  challenges: FeatureItem[];
  solutions: FeatureItem[];
  stats: StatItem[];
  /** service slugs */
  services: string[];
  testimonial?: TestimonialItem;
  faqs: FaqItem[];
}

/* ---------------------------------------------------------------
 * Resources (blogs, case studies, news ...)
 * ------------------------------------------------------------- */

export type ResourceKind =
  | "blog"
  | "case-study"
  | "news"
  | "whitepaper"
  | "playbook"
  | "perspective"
  | "podcast"
  | "thought-leadership";

export interface Resource {
  slug: string;
  kind: ResourceKind;
  title: string;
  excerpt: string;
  /** ISO date */
  date: string;
  readTime: string;
  category: string;
  author: string;
  /** case studies only */
  client?: string;
  industry?: string;
  results?: StatItem[];
  body: RichSection[];
}

/* ---------------------------------------------------------------
 * Regions
 * ------------------------------------------------------------- */

export type Locale = "en" | "ar";

export interface RegionContent {
  slug: string;
  label: string;
  locale: Locale;
  metaTitle: string;
  metaDescription: string;
  blocks: Block[];
}
