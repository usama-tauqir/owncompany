import type { Service } from "../types";
import { siteConfig } from "@/config/site";

export const shopifyServices: Service[] = [
  /* -------------------------------------------------------------
   * Shopify Development
   * ----------------------------------------------------------- */
  {
    slug: "shopify",
    name: "Shopify Development",
    category: "Shopify",
    icon: "cart",
    headline: "Commerce engineered to sell more",
    summary:
      "We build, scale and optimize Shopify and Shopify Plus stores that convert browsers into buyers and handle peak demand without missing a beat.",
    heroCta: "Grow Your Store",
    overview: {
      title: "Full-service Shopify engineering for ambitious brands",
      paragraphs: [
        `Shopify gives merchants a reliable commerce foundation, but standing out requires more than a theme and a payment gateway. ${siteConfig.name} delivers end-to-end Shopify development, from storefront architecture and custom functionality to integrations with inventory, fulfilment and marketing systems. We help direct-to-consumer brands, wholesalers and retailers build stores that load fast, merchandise well and support their growth plans.`,
        "Our team works across Online Store 2.0 themes, headless Hydrogen storefronts, Shopify Plus checkout extensibility, B2B features and multi-market expansion. We treat every store as a product: analytics are instrumented, experiments are planned, and improvements are prioritized by revenue impact. Whether you are launching a new brand or replatforming a mature business, we focus on conversion rate, average order value and operational efficiency.",
      ],
      highlights: [
        "Shopify and Shopify Plus expertise",
        "Headless commerce with Hydrogen",
        "Multi-market and B2B configuration",
        "Conversion-focused development",
      ],
    },
    offerings: {
      title: "Shopify development services",
      subtitle:
        "Everything required to launch, migrate and scale a high-performing Shopify business.",
      items: [
        {
          title: "Store Setup & Launch",
          description:
            "Complete store configuration covering products, collections, payments, shipping, taxes and notifications, delivered with a launch checklist that ensures nothing is missed on day one.",
          icon: "store",
        },
        {
          title: "Replatforming to Shopify",
          description:
            "Migration from other commerce platforms with careful transfer of products, customers, order history and URL redirects, protecting search rankings and customer accounts throughout.",
          icon: "workflow",
        },
        {
          title: "Shopify Plus Solutions",
          description:
            "Checkout extensions, Shopify Functions for custom discounts and delivery logic, expansion stores and automation tailored to high-volume merchants with complex operational requirements.",
          icon: "trophy",
        },
        {
          title: "Headless Commerce",
          description:
            "Hydrogen and Storefront API builds for brands needing complete creative freedom, content-rich experiences or unified commerce across web, app and in-store touchpoints.",
          icon: "layers",
        },
        {
          title: "B2B & Wholesale",
          description:
            "Company accounts, custom price lists, payment terms and quick-order experiences that let trade customers purchase as easily as consumers, on the same store and catalogue.",
          icon: "briefcase",
        },
        {
          title: "International Expansion",
          description:
            "Shopify Markets configuration for local currencies, languages, domains, duties and pricing so you can enter new regions with localized experiences and minimal operational overhead.",
          icon: "globe",
        },
      ],
    },
    process: {
      title: "How we build Shopify stores",
      steps: [
        {
          title: "Commerce Discovery",
          description:
            "We review your catalogue, customers, operations and growth goals to define store requirements, integrations and the metrics that will define success.",
        },
        {
          title: "Experience Design",
          description:
            "Wireframes and designs focus on navigation, product discovery and checkout flow, informed by commerce best practices and your brand identity.",
        },
        {
          title: "Development & Integration",
          description:
            "Themes, custom features and integrations with ERP, inventory, reviews and marketing tools are built and tested on a dedicated development store.",
        },
        {
          title: "Data Migration & QA",
          description:
            "Products, customers and orders are migrated and verified, followed by cross-device testing, payment tests and performance checks before launch.",
        },
        {
          title: "Launch & Optimize",
          description:
            "We launch with monitoring in place, then run conversion experiments and performance improvements based on real shopper behaviour.",
        },
      ],
    },
    midCta: {
      title: "Planning a Shopify launch or replatform?",
      subtitle:
        "Get a scoped plan covering migration, integrations, timelines and costs from our Shopify specialists.",
      label: "Get a Shopify Plan",
    },
    techStack: [
      {
        name: "Shopify Platform",
        items: ["Shopify Plus", "Online Store 2.0", "Shopify Markets", "Shopify B2B", "Shopify POS"],
      },
      {
        name: "Storefront Development",
        items: ["Liquid", "Hydrogen", "Remix", "React", "Storefront API", "Tailwind CSS"],
      },
      {
        name: "Extensibility",
        items: ["Shopify Functions", "Checkout UI Extensions", "Admin GraphQL API", "Shopify CLI"],
      },
      {
        name: "Analytics & Growth",
        items: ["Google Analytics 4", "Klaviyo", "Google Tag Manager", "Hotjar"],
      },
    ],
    industries: [
      "shopify",
      "retail-and-cpg",
      "e-commerce-software-development",
      "startups",
      "healthcare-pharmaceuticals",
    ],
    benefits: [
      {
        title: "Commerce Specialists",
        description:
          "Our team focuses on commerce, understanding merchandising, promotions and fulfilment as well as the code behind them.",
        icon: "cart",
      },
      {
        title: "Conversion-Driven Decisions",
        description:
          "Design and development choices are guided by analytics and testing, ensuring changes improve revenue rather than just appearance.",
        icon: "chart",
      },
      {
        title: "Built to Scale",
        description:
          "Clean architecture and tested integrations keep your store stable during flash sales and seasonal peaks.",
        icon: "rocket",
      },
      {
        title: "End-to-End Ownership",
        description:
          "From strategy to support, one accountable team manages your store so nothing falls between vendors.",
        icon: "handshake",
      },
    ],
    faqs: [
      {
        question: "Do we need Shopify Plus, or is standard Shopify enough?",
        answer:
          "Standard plans suit many growing brands. Shopify Plus becomes worthwhile when you need checkout customization, advanced automation, B2B features, multiple expansion stores or higher API limits. We review your volume and requirements and recommend the plan that delivers the best return.",
      },
      {
        question: "Can you migrate our store without losing SEO traffic?",
        answer: `Yes. ${siteConfig.name} maps every product, collection and content URL to its new location, migrates metadata and implements redirects before launch. We then monitor search performance closely and resolve any crawl issues quickly after go-live.`,
      },
      {
        question: "When does headless Shopify make sense?",
        answer:
          "Headless is a strong choice for content-heavy brands, complex personalization, or a single commerce backend serving web, app and in-store channels. For many merchants, a well-built theme delivers excellent results at lower cost, and we will advise honestly on which suits you.",
      },
      {
        question: "How long does it take to launch a Shopify store?",
        answer:
          "A theme-based store with standard integrations typically launches in six to ten weeks. Larger replatforming projects, custom headless builds or complex B2B setups usually take three to five months, depending on data volume and integration requirements.",
      },
    ],
  },

  /* -------------------------------------------------------------
   * Shopify Design & Development
   * ----------------------------------------------------------- */
  {
    slug: "design-development",
    name: "Shopify Design & Development",
    category: "Shopify",
    icon: "palette",
    headline: "Storefronts as distinctive as your brand",
    summary:
      "We design and develop custom Shopify themes that express your brand, guide shoppers smoothly to checkout and give merchandisers full control over every page.",
    heroCta: "Design Your Storefront",
    overview: {
      title: "Custom Shopify themes that look and perform beautifully",
      paragraphs: [
        `Off-the-shelf themes can make a store look like countless others. ${siteConfig.name} designs bespoke Shopify experiences that reflect your brand personality while following the patterns shoppers rely on to browse, compare and buy. We balance visual storytelling with fast page loads, clear product information and frictionless paths to checkout, so the store feels premium without sacrificing conversion.`,
        "Our designers and Liquid developers work side by side, translating Figma designs into flexible sections and blocks that merchandisers can rearrange without code. We build reusable components for product pages, landing pages, lookbooks and bundles, test across devices and browsers, and optimize images and scripts for speed. The result is a storefront your marketing team can evolve campaign after campaign.",
      ],
      highlights: [
        "Bespoke Online Store 2.0 themes",
        "Merchandiser-friendly sections and blocks",
        "Mobile-first, accessible design",
        "Speed-optimized Liquid and assets",
      ],
    },
    offerings: {
      title: "Shopify design and development services",
      subtitle:
        "Creative and technical services that turn your brand into a high-converting Shopify storefront.",
      items: [
        {
          title: "Custom Theme Design",
          description:
            "Original storefront designs crafted in Figma around your brand, product range and customer journey, with a scalable component system ready for development and future campaigns.",
          icon: "palette",
        },
        {
          title: "Theme Development",
          description:
            "Hand-built Online Store 2.0 themes using Liquid, sections and metafields, giving your team flexible page building while keeping code clean, fast and easy to maintain.",
          icon: "code",
        },
        {
          title: "Theme Customization",
          description:
            "Targeted enhancements to existing themes, such as new product templates, mega menus, size guides or bundle builders, delivered without compromising performance or future updates.",
          icon: "pen",
        },
        {
          title: "Product Page Optimization",
          description:
            "Redesigned product detail pages with richer media, variant selection, social proof and delivery messaging that answer shopper questions and reduce hesitation before adding to cart.",
          icon: "target",
        },
        {
          title: "Landing Pages & Campaigns",
          description:
            "Reusable campaign templates for launches, seasonal sales and collaborations that marketing teams can assemble quickly and that remain consistent with your core storefront.",
          icon: "megaphone",
        },
        {
          title: "Accessibility & Speed Tuning",
          description:
            "Accessibility fixes, image optimization, script audits and lazy loading that improve usability for all shoppers and lift Core Web Vitals and search visibility.",
          icon: "zap",
        },
      ],
    },
    process: {
      title: "From concept to live storefront",
      steps: [
        {
          title: "Brand & Shopper Research",
          description:
            "We study your brand, competitors and customer analytics to understand what shoppers need to feel confident buying from you.",
        },
        {
          title: "Wireframes & Journeys",
          description:
            "Key templates such as home, collection, product and cart are wireframed to optimize hierarchy, navigation and calls to action.",
        },
        {
          title: "Visual Design",
          description:
            "High-fidelity designs for desktop and mobile bring the brand to life, with a component library covering every reusable section.",
        },
        {
          title: "Theme Build",
          description:
            "Developers build sections, blocks and templates in Liquid, connecting metafields and apps, with previews shared throughout the build.",
        },
        {
          title: "Test, Launch & Train",
          description:
            "Cross-device QA and performance checks precede launch, followed by training so your team can build pages independently.",
        },
      ],
    },
    midCta: {
      title: "Ready for a storefront that stands apart?",
      subtitle:
        "Share your brand and goals and we will propose a design direction, scope and timeline for your custom theme.",
      label: "Request a Design Proposal",
    },
    techStack: [
      {
        name: "Design",
        items: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "ProtoPie"],
      },
      {
        name: "Theme Development",
        items: ["Liquid", "JavaScript", "Sass", "Tailwind CSS", "Shopify CLI", "Theme Check"],
      },
      {
        name: "Content & Data",
        items: ["Metafields", "Metaobjects", "Shopify Translate & Adapt", "Section Rendering API"],
      },
      {
        name: "Quality & Performance",
        items: ["Lighthouse", "BrowserStack", "axe DevTools", "WebPageTest"],
      },
    ],
    industries: ["shopify", "retail-and-cpg", "e-commerce-software-development", "startups"],
    benefits: [
      {
        title: "Brand-Led Creativity",
        description:
          "Designs are rooted in your identity and audience, creating a store that feels unmistakably yours.",
        icon: "sparkles",
      },
      {
        title: "Editor Independence",
        description:
          "Flexible sections and blocks let marketers launch new pages and campaigns without developer tickets.",
        icon: "pen",
      },
      {
        title: "Fast by Design",
        description:
          "Lean code and optimized assets keep page loads quick, protecting both conversion and search rankings.",
        icon: "zap",
      },
      {
        title: "Mobile-First Thinking",
        description:
          "Most shoppers browse on phones, so every layout is designed for thumbs first and scaled up to desktop.",
        icon: "smartphone",
      },
    ],
    faqs: [
      {
        question: "Should we customize a premium theme or build from scratch?",
        answer:
          "Customizing a premium theme is faster and cheaper when its structure fits your needs. A custom theme is better when your brand, product range or interactions differ significantly. We review your requirements and recommend the option that balances cost, speed and distinctiveness.",
      },
      {
        question: "Will we be able to edit pages ourselves after launch?",
        answer: `Yes. ${siteConfig.name} builds themes around flexible sections and blocks, so your team can add, reorder and configure content in the theme editor. We provide training and a short guide covering every section we create.`,
      },
      {
        question: "How do you make sure the new design converts better?",
        answer:
          "We base designs on analytics, heatmaps and established commerce patterns, then validate key templates with usability testing where possible. After launch we track conversion metrics and run A/B tests on high-impact elements such as product pages and cart.",
      },
      {
        question: "Will apps we already use still work with a new theme?",
        answer:
          "We audit your installed apps before development, integrate compatible apps through app blocks, and recommend replacements for any that are outdated or slow. We also remove leftover code from uninstalled apps to keep the storefront lean.",
      },
    ],
  },

  /* -------------------------------------------------------------
   * Shopify Maintenance & Support
   * ----------------------------------------------------------- */
  {
    slug: "maintenance-support",
    name: "Shopify Maintenance & Support",
    category: "Shopify",
    icon: "wrench",
    headline: "Your store, always running smoothly",
    summary:
      "We keep Shopify stores fast, secure and conversion-ready with proactive monitoring, rapid fixes and a flexible bank of development hours for continuous improvement.",
    heroCta: "Choose a Support Plan",
    overview: {
      title: "Reliable care for revenue-critical stores",
      paragraphs: [
        `Every minute a checkout bug or broken integration goes unnoticed costs revenue and customer trust. ${siteConfig.name} provides ongoing Shopify maintenance and support so your team can focus on merchandising and growth rather than troubleshooting. We monitor key journeys, respond quickly to incidents and handle the steady flow of small changes that keep a store current and competitive.`,
        "Our support plans combine proactive health checks with an agreed pool of development hours for enhancements. We audit app usage, theme performance and integration health each month, then recommend improvements ranked by impact. During peak periods such as seasonal sales and product drops, we offer extended coverage and pre-event readiness reviews so your store is prepared for surges in traffic and orders.",
      ],
      highlights: [
        "Proactive monitoring of key shopper journeys",
        "Defined response times for critical issues",
        "Monthly health and performance reports",
        "Peak-season readiness and coverage",
      ],
    },
    offerings: {
      title: "Shopify maintenance and support services",
      subtitle:
        "Ongoing technical care that protects revenue and keeps your store improving month after month.",
      items: [
        {
          title: "Proactive Monitoring",
          description:
            "Automated checks on homepage, product, cart and checkout flows, plus integration and uptime alerts, so problems are detected and addressed before customers report them.",
          icon: "eye",
        },
        {
          title: "Bug Fixes & Troubleshooting",
          description:
            "Fast diagnosis and resolution of theme errors, app conflicts, broken layouts and integration failures, with clear communication on cause, fix and prevention steps.",
          icon: "wrench",
        },
        {
          title: "Ongoing Enhancements",
          description:
            "A flexible monthly allocation of development hours for new sections, landing pages, feature tweaks and small integrations requested by your marketing and operations teams.",
          icon: "sparkles",
        },
        {
          title: "App & Integration Management",
          description:
            "Regular review of installed apps for cost, performance and overlap, plus maintenance of ERP, inventory and fulfilment integrations as APIs and versions change.",
          icon: "puzzle",
        },
        {
          title: "Performance & Speed Audits",
          description:
            "Periodic analysis of page speed, script weight and Core Web Vitals, followed by prioritized optimizations that keep the storefront fast as content and apps accumulate.",
          icon: "zap",
        },
        {
          title: "Peak Season Readiness",
          description:
            "Pre-sale load reviews, discount and inventory tests, and on-call coverage during major promotions so high-traffic events run smoothly and revenue is protected.",
          icon: "shield",
        },
      ],
    },
    process: {
      title: "How our support model works",
      steps: [
        {
          title: "Store Onboarding Audit",
          description:
            "We review your theme, apps, integrations and analytics to document the current state, identify risks and establish performance baselines.",
        },
        {
          title: "Plan & SLA Agreement",
          description:
            "Together we agree response times, monthly hours, communication channels and escalation paths that match your trading patterns and team size.",
        },
        {
          title: "Monitor & Respond",
          description:
            "Monitoring runs continuously, and tickets are triaged by severity, with critical checkout or payment issues handled as top priority.",
        },
        {
          title: "Improve Continuously",
          description:
            "Enhancement requests and audit recommendations are scheduled into regular release cycles, tested on preview themes before going live.",
        },
        {
          title: "Report & Review",
          description:
            "Monthly reports cover tickets, uptime, performance and completed work, with a review call to plan the next month's priorities.",
        },
      ],
    },
    midCta: {
      title: "Tired of chasing developers for urgent fixes?",
      subtitle:
        "Get a dedicated Shopify support team with clear response times and a predictable monthly cost.",
      label: "Compare Support Plans",
    },
    techStack: [
      {
        name: "Shopify Tooling",
        items: ["Shopify CLI", "Theme Check", "Shopify Admin API", "Shopify Flow", "Theme Inspector for Chrome"],
      },
      {
        name: "Monitoring",
        items: ["Sentry", "Datadog Synthetics", "UptimeRobot", "Google Search Console"],
      },
      {
        name: "Performance",
        items: ["Lighthouse", "PageSpeed Insights", "WebPageTest", "Chrome DevTools"],
      },
      {
        name: "Workflow",
        items: ["Jira", "GitHub", "Slack", "Loom"],
      },
    ],
    industries: ["shopify", "retail-and-cpg", "e-commerce-software-development", "startups", "healthcare-pharmaceuticals"],
    benefits: [
      {
        title: "Fast, Defined Response",
        description:
          "Service levels prioritize revenue-impacting issues, so checkout and payment problems receive immediate attention.",
        icon: "zap",
      },
      {
        title: "Predictable Costs",
        description:
          "Fixed monthly plans with rollover options make budgeting simple and avoid surprise invoices.",
        icon: "wallet",
      },
      {
        title: "Proactive, Not Reactive",
        description:
          "Regular audits catch slow apps, outdated code and integration risks before they affect shoppers.",
        icon: "eye",
      },
      {
        title: "One Accountable Team",
        description:
          "A consistent team learns your store deeply, reducing ramp-up time and repeated explanations.",
        icon: "users",
      },
    ],
    faqs: [
      {
        question: "What is included in a Shopify support plan?",
        answer: `Plans from ${siteConfig.name} include monitoring, bug fixes, a monthly pool of development hours, app and integration upkeep, and regular performance reports. Higher tiers add faster response times, extended hours and peak-season coverage for major promotions.`,
      },
      {
        question: "How quickly do you respond to critical issues?",
        answer:
          "Critical issues such as checkout failures or site outages receive the fastest response defined in your plan, often within one hour. Lower-severity requests are acknowledged within one business day and scheduled according to priority and available hours.",
      },
      {
        question: "Can you support a store built by another agency?",
        answer:
          "Yes. We begin with an onboarding audit to understand the theme, apps and integrations, document any risks and resolve urgent issues first. This gives us a clear picture of the codebase before we start making changes.",
      },
      {
        question: "What happens to unused hours at the end of the month?",
        answer:
          "Depending on your plan, unused hours can roll over for a limited period or be allocated to a planned improvement project. We agree these terms upfront so your investment is never wasted and priorities remain clear.",
      },
    ],
  },

  /* -------------------------------------------------------------
   * Shopify Automation & Apps
   * ----------------------------------------------------------- */
  {
    slug: "automation-apps",
    name: "Shopify Automation & Apps",
    category: "Shopify",
    icon: "bot",
    headline: "Automate operations, extend your store",
    summary:
      "We build custom Shopify apps, Flow automations and integrations that remove manual work, connect back-office systems and unlock capabilities beyond the standard platform.",
    heroCta: "Automate Your Store",
    overview: {
      title: "Less manual work, more room to grow",
      paragraphs: [
        `As order volumes grow, manual tasks such as tagging orders, updating inventory, routing fulfilment and reconciling payments quietly consume your team's time. ${siteConfig.name} designs automations and custom apps that handle these tasks reliably in the background. The result is faster fulfilment, fewer errors and an operations team free to focus on customers and growth rather than repetitive admin.`,
        "We build private and public Shopify apps using modern app frameworks, admin extensions and webhooks, and we design Shopify Flow workflows for rule-based automation. For back-office integration, we connect Shopify with ERPs, warehouse systems, marketplaces and marketing platforms through resilient middleware. Every solution includes logging, retries and alerts, so you always know what ran, what failed and why.",
      ],
      highlights: [
        "Custom private and public app development",
        "Shopify Flow and event-driven automation",
        "ERP, WMS and marketplace integrations",
        "Resilient, observable data sync",
      ],
    },
    offerings: {
      title: "Shopify automation and app services",
      subtitle:
        "Custom apps and integrations that extend Shopify and streamline the operations behind your store.",
      items: [
        {
          title: "Custom App Development",
          description:
            "Private apps with embedded admin interfaces that add bespoke functionality such as subscription logic, product configurators, loyalty rules or custom reporting tailored to your business.",
          icon: "code",
        },
        {
          title: "Public App Development",
          description:
            "Production-grade apps for the Shopify App Store, including billing, onboarding, multi-shop architecture and compliance with review requirements, built for software companies and agencies.",
          icon: "rocket",
        },
        {
          title: "Shopify Flow Automation",
          description:
            "Workflow automations that tag orders, flag fraud risk, notify teams, manage inventory thresholds and trigger actions in connected apps without manual intervention.",
          icon: "workflow",
        },
        {
          title: "ERP & WMS Integration",
          description:
            "Reliable synchronization of products, stock, orders, refunds and fulfilment between Shopify and your ERP or warehouse systems, with reconciliation reports and error handling.",
          icon: "network",
        },
        {
          title: "Marketplace & Channel Sync",
          description:
            "Connections that publish catalogues and sync orders across marketplaces and social channels, keeping pricing and inventory consistent wherever customers choose to buy.",
          icon: "globe",
        },
        {
          title: "Checkout & Discount Logic",
          description:
            "Shopify Functions and checkout extensions for tiered discounts, delivery customization, payment rules and validation that implement your commercial policies exactly.",
          icon: "card",
        },
      ],
    },
    process: {
      title: "How we build automations and apps",
      steps: [
        {
          title: "Process Mapping",
          description:
            "We document the manual tasks, data flows and systems involved, quantifying time spent and error rates to prioritize automation opportunities.",
        },
        {
          title: "Technical Design",
          description:
            "We choose between Flow, custom apps or middleware, then define data mappings, triggers, error handling and security for each integration.",
        },
        {
          title: "Build & Test",
          description:
            "Apps and automations are developed against development stores, with automated tests and realistic data volumes to validate reliability.",
        },
        {
          title: "Staged Rollout",
          description:
            "Solutions launch gradually, often running in parallel with manual processes at first, so results can be verified before full switchover.",
        },
        {
          title: "Monitor & Maintain",
          description:
            "Dashboards and alerts track sync health, while we handle API version updates and evolve automations as processes change.",
        },
      ],
    },
    midCta: {
      title: "How many hours does your team spend on manual tasks?",
      subtitle:
        "Map your store operations with us and discover which processes can be automated for the biggest time savings.",
      label: "Book an Automation Review",
    },
    techStack: [
      {
        name: "App Development",
        items: ["Remix", "React", "Node.js", "Polaris", "App Bridge", "Prisma"],
      },
      {
        name: "Shopify APIs",
        items: ["Admin GraphQL API", "Webhooks", "Shopify Functions", "Shopify Flow", "Bulk Operations API"],
      },
      {
        name: "Integration",
        items: ["AWS Lambda", "Amazon EventBridge", "Azure Logic Apps", "Celigo", "REST APIs"],
      },
      {
        name: "Data & Infrastructure",
        items: ["PostgreSQL", "Redis", "Docker", "Fly.io", "Sentry"],
      },
    ],
    industries: [
      "shopify",
      "e-commerce-software-development",
      "retail-and-cpg",
      "startups",
      "healthcare-pharmaceuticals",
    ],
    benefits: [
      {
        title: "Measurable Time Savings",
        description:
          "We quantify manual effort up front and track hours saved after launch, so automation value is clear.",
        icon: "chart",
      },
      {
        title: "Resilient Integrations",
        description:
          "Retries, idempotency and alerting keep data accurate even when third-party systems are slow or unavailable.",
        icon: "shield",
      },
      {
        title: "Platform-Native Approach",
        description:
          "We use Shopify-native tools wherever possible, reducing app costs and ensuring compatibility with future updates.",
        icon: "cart",
      },
      {
        title: "Scales With Volume",
        description:
          "Event-driven architectures handle growing order volumes and flash-sale spikes without manual intervention.",
        icon: "rocket",
      },
    ],
    faqs: [
      {
        question: "Should we build a custom app or use an existing one from the App Store?",
        answer:
          "If an existing app covers most of your needs at reasonable cost, it is usually the faster route. Custom apps make sense when your requirements are unique, when several apps would overlap, or when recurring fees exceed the cost of a tailored build.",
      },
      {
        question: "Can you integrate Shopify with our ERP?",
        answer: `Yes. ${siteConfig.name} builds integrations that synchronize products, inventory, orders, refunds and fulfilment between Shopify and your ERP. We include reconciliation checks and alerts so discrepancies are caught quickly rather than discovered during month-end.`,
      },
      {
        question: "What can Shopify Flow automate?",
        answer:
          "Flow can tag customers and orders, hold high-risk orders, notify staff, adjust inventory, update metafields and trigger actions in compatible apps. For more complex logic or external systems, we combine Flow with custom apps or middleware.",
      },
      {
        question: "Do you maintain the apps you build?",
        answer:
          "Yes. Shopify releases new API versions regularly, and we keep apps current, monitor performance and handle bug fixes under a maintenance agreement. We also extend apps as your processes evolve and new opportunities for automation emerge.",
      },
    ],
  },
];
