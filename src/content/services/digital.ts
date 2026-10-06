import type { Service } from "../types";
import { siteConfig } from "@/config/site";

export const digitalServices: Service[] = [
  /* -------------------------------------------------------------
   * Web Development
   * ----------------------------------------------------------- */
  {
    slug: "website-development",
    name: "Web Development",
    category: "Digital Transformation",
    icon: "code",
    headline: "Fast, secure web platforms that scale",
    summary:
      "We engineer high-performance websites, portals and web applications that load quickly, rank well, stay secure and grow comfortably with your traffic and roadmap.",
    heroCta: "Plan Your Web Build",
    overview: {
      title: "Web platforms built for performance and longevity",
      paragraphs: [
        `Your website is often the first place a customer, investor or candidate forms an opinion of you. ${siteConfig.name} builds web experiences that respond in milliseconds, meet accessibility standards and stay easy for your team to update. We pair modern frontend frameworks with clean, well-documented backends so the platform you launch this year is still an asset, not a liability, three years from now.`,
        "Our engineers work across marketing sites, customer portals, SaaS dashboards and data-heavy internal tools. Every build includes automated testing, performance budgets, structured content modelling and observability from day one. Whether you need a headless commerce storefront or a multi-tenant web application, we focus on measurable outcomes: faster pages, higher conversion, fewer production incidents and lower cost of change.",
      ],
      highlights: [
        "Core Web Vitals tuned from the first sprint",
        "Headless CMS and composable architecture",
        "WCAG 2.2 accessibility baked in",
        "CI/CD pipelines with automated QA",
      ],
    },
    offerings: {
      title: "Web development services",
      subtitle:
        "From a single high-converting landing page to a complex multi-tenant platform, we cover the full web delivery lifecycle.",
      items: [
        {
          title: "Corporate & Marketing Websites",
          description:
            "Brand-led sites with flexible page builders, SEO-ready markup and editorial workflows that let marketing teams publish campaigns without waiting on a developer release cycle.",
          icon: "globe",
        },
        {
          title: "Web Application Development",
          description:
            "Interactive single-page and server-rendered applications with role-based access, real-time updates and robust APIs, designed for thousands of concurrent users and complex business rules.",
          icon: "layers",
        },
        {
          title: "Headless CMS Implementation",
          description:
            "Decoupled content architectures that publish once and deliver everywhere, from websites and apps to kiosks, while giving editors structured, reusable content models they actually enjoy using.",
          icon: "file",
        },
        {
          title: "Customer & Partner Portals",
          description:
            "Secure self-service portals for account management, document exchange, order tracking and support, integrated with your CRM, ERP and identity provider for a single source of truth.",
          icon: "users",
        },
        {
          title: "Performance Optimization",
          description:
            "Deep audits of rendering, bundle size, caching and database queries, followed by targeted fixes that measurably improve load times, search visibility and conversion on existing sites.",
          icon: "zap",
        },
        {
          title: "Progressive Web Apps",
          description:
            "Installable, offline-capable web apps with push notifications and native-like interactions, giving users an app experience without the overhead of separate store releases.",
          icon: "smartphone",
        },
      ],
    },
    process: {
      title: "How we deliver web projects",
      steps: [
        {
          title: "Discovery & Requirements",
          description:
            "We interview stakeholders, audit existing assets and analytics, and define success metrics, user journeys and technical constraints before a single line of code is written.",
        },
        {
          title: "Architecture & Content Model",
          description:
            "We select the rendering strategy, hosting model and CMS, then design content types, integrations and data flows that support both today's launch and future growth.",
        },
        {
          title: "Iterative Build",
          description:
            "Development happens in two-week sprints with working previews on every pull request, so stakeholders review real pages early and feedback shapes the product continuously.",
        },
        {
          title: "Quality & Launch Readiness",
          description:
            "Automated tests, accessibility checks, load testing and security scans run before release, alongside SEO redirects and analytics validation to protect existing traffic.",
        },
        {
          title: "Launch & Continuous Improvement",
          description:
            "We deploy with zero downtime, monitor real-user metrics closely, and run an improvement backlog driven by analytics, A/B tests and stakeholder priorities.",
        },
      ],
    },
    midCta: {
      title: "Is your website holding your growth back?",
      subtitle:
        "Get a free performance and architecture review with practical recommendations you can act on immediately.",
      label: "Request a Web Audit",
    },
    techStack: [
      {
        name: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "Astro"],
      },
      {
        name: "Backend",
        items: ["Node.js", "NestJS", ".NET", "Python", "Laravel", "GraphQL"],
      },
      {
        name: "CMS & Content",
        items: ["Contentful", "Sanity", "Strapi", "WordPress", "Storyblok"],
      },
      {
        name: "Hosting & DevOps",
        items: ["Vercel", "AWS", "Cloudflare", "Docker", "GitHub Actions"],
      },
    ],
    industries: [
      "retail-and-cpg",
      "travel-hospitality",
      "banking-fintech",
      "education",
      "real-estate",
      "startups",
    ],
    benefits: [
      {
        title: "Performance-First Engineering",
        description:
          "Every project ships with performance budgets and real-user monitoring, so speed is tracked as a requirement rather than discovered as a problem after launch.",
        icon: "zap",
      },
      {
        title: "Built for Your Team",
        description:
          "Clean code, documentation and editor training mean your internal team can own and extend the platform confidently after handover.",
        icon: "users",
      },
      {
        title: "Security by Default",
        description:
          "OWASP-aligned practices, dependency scanning and hardened hosting configurations protect your brand and your users' data from day one.",
        icon: "shield",
      },
      {
        title: "Transparent Delivery",
        description:
          "Shared boards, sprint demos and preview environments give you full visibility into progress, scope and budget at every stage.",
        icon: "eye",
      },
    ],
    faqs: [
      {
        question: "How long does a typical web development project take?",
        answer:
          "A marketing website usually takes six to ten weeks from discovery to launch. Complex web applications or portals typically run three to six months for a first release, delivered in increments so you see working software within the first few sprints.",
      },
      {
        question: "Can you redesign our site without losing search rankings?",
        answer:
          "Yes. We map every existing URL, preserve or redirect high-value pages, carry over metadata and structured data, and monitor search console closely after launch. Most clients see rankings hold steady or improve because the new site is faster and better structured.",
      },
      {
        question: "Which CMS do you recommend?",
        answer:
          "It depends on your editorial workflow, integrations and budget. We often recommend a headless CMS for multi-channel publishing and a traditional CMS for simpler sites. We present a short comparison during discovery so you choose with clear trade-offs in view.",
      },
      {
        question: "Do you provide support after launch?",
        answer: `Yes. ${siteConfig.name} offers flexible support plans covering monitoring, security patching, performance tuning and feature enhancements. You can choose a fixed monthly retainer or a dedicated team, depending on how actively you plan to evolve the platform.`,
      },
    ],
  },

  /* -------------------------------------------------------------
   * App Development
   * ----------------------------------------------------------- */
  {
    slug: "mobile-development",
    name: "App Development",
    category: "Digital Transformation",
    icon: "smartphone",
    headline: "Mobile apps people keep opening",
    summary:
      "We design and build native and cross-platform mobile apps for iOS and Android that feel effortless, perform reliably offline and drive measurable engagement.",
    heroCta: "Start Your App",
    overview: {
      title: "Mobile products engineered for daily use",
      paragraphs: [
        `A mobile app earns its place on a home screen through speed, reliability and genuine usefulness. ${siteConfig.name} builds apps that start instantly, handle patchy connectivity gracefully and respect battery and data limits. We combine product thinking with deep platform expertise so every feature is grounded in a real user need and every release moves a metric you care about.`,
        "Our mobile teams deliver consumer apps, field-service tools, banking and health apps, and companion apps for connected devices. We choose between native Swift and Kotlin or cross-platform frameworks based on your performance needs, team skills and budget. Release automation, crash analytics and staged rollouts are part of every engagement, keeping app store ratings high and production surprises rare.",
      ],
      highlights: [
        "Native and cross-platform expertise",
        "Offline-first data synchronization",
        "Automated store releases and staged rollouts",
        "Crash-free session rates above 99.5%",
      ],
    },
    offerings: {
      title: "Mobile app development services",
      subtitle:
        "End-to-end mobile delivery, from product strategy and prototyping to launch, growth and long-term maintenance.",
      items: [
        {
          title: "iOS App Development",
          description:
            "Native Swift and SwiftUI apps that take full advantage of Apple platform capabilities, including widgets, Face ID, Apple Pay, HealthKit and seamless iPad and Apple Watch extensions.",
          icon: "smartphone",
        },
        {
          title: "Android App Development",
          description:
            "Kotlin and Jetpack Compose apps optimized across the wide range of Android devices, screen sizes and OS versions, with careful attention to memory, battery and background limits.",
          icon: "smartphone",
        },
        {
          title: "Cross-Platform Apps",
          description:
            "Flutter and React Native apps that share most of their code across platforms, cutting time to market while still delivering smooth animations and native-feeling interactions.",
          icon: "layers",
        },
        {
          title: "Mobile Backend & APIs",
          description:
            "Scalable APIs, authentication, push notification services and real-time sync engines designed specifically for mobile clients and their intermittent connectivity patterns.",
          icon: "server",
        },
        {
          title: "Wearables & Connected Devices",
          description:
            "Companion apps for smartwatches, Bluetooth peripherals and IoT hardware, handling pairing, firmware updates and data streaming reliably across a variety of device conditions.",
          icon: "radio",
        },
        {
          title: "App Modernization",
          description:
            "Refactoring aging codebases, migrating to modern UI toolkits and resolving performance bottlenecks so legacy apps become stable, maintainable and ready for new features again.",
          icon: "wrench",
        },
      ],
    },
    process: {
      title: "Our mobile delivery approach",
      steps: [
        {
          title: "Product Discovery",
          description:
            "We clarify target users, core jobs to be done and success metrics, then prioritize a lean feature set that delivers value from the very first release.",
        },
        {
          title: "Prototype & Validate",
          description:
            "Clickable prototypes are tested with real users to validate flows, navigation and terminology before engineering effort is committed to building them.",
        },
        {
          title: "Agile Development",
          description:
            "Feature teams build in short sprints with nightly test builds distributed to stakeholders, so feedback is continuous and surprises at launch are avoided.",
        },
        {
          title: "Testing & Store Submission",
          description:
            "Automated UI tests, device-farm runs and beta programs precede store submission, and we manage review guidelines, metadata and screenshots on your behalf.",
        },
        {
          title: "Grow & Iterate",
          description:
            "Post-launch, we track retention, funnels and crash data, running experiments and shipping regular updates that steadily improve ratings and engagement.",
        },
      ],
    },
    midCta: {
      title: "Have an app idea ready to validate?",
      subtitle:
        "Book a product workshop and leave with a prioritized feature roadmap, effort estimate and clickable prototype plan.",
      label: "Book a Product Workshop",
    },
    techStack: [
      {
        name: "Native",
        items: ["Swift", "SwiftUI", "Kotlin", "Jetpack Compose", "Objective-C"],
      },
      {
        name: "Cross-Platform",
        items: ["Flutter", "React Native", "Kotlin Multiplatform", "Expo"],
      },
      {
        name: "Backend & Data",
        items: ["Firebase", "Node.js", "GraphQL", "Realm", "SQLite", "PostgreSQL"],
      },
      {
        name: "Quality & Release",
        items: ["Fastlane", "Appium", "Detox", "Firebase Crashlytics", "Bitrise"],
      },
    ],
    industries: [
      "healthcare-pharmaceuticals",
      "banking-fintech",
      "travel-hospitality",
      "retail-and-cpg",
      "startups",
      "education",
    ],
    benefits: [
      {
        title: "Platform Depth",
        description:
          "Our engineers specialize in iOS, Android and cross-platform stacks, so we recommend the right approach for your product instead of a one-size-fits-all framework.",
        icon: "cpu",
      },
      {
        title: "User-Centred Product Thinking",
        description:
          "Designers and product leads work alongside engineers to ensure every feature solves a real problem and contributes to retention.",
        icon: "target",
      },
      {
        title: "Release Confidence",
        description:
          "Automated pipelines, staged rollouts and feature flags let us ship frequently while keeping crash rates and regressions to a minimum.",
        icon: "rocket",
      },
      {
        title: "Long-Term Partnership",
        description:
          "We support apps through OS upgrades, device changes and growth phases, keeping your product current year after year.",
        icon: "handshake",
      },
    ],
    faqs: [
      {
        question: "Should we build native or cross-platform?",
        answer:
          "Cross-platform works well for most business and content-driven apps and reduces cost. Native is better when you need heavy graphics, advanced device features or the absolute best performance. We assess your requirements and recommend the option with the best long-term value.",
      },
      {
        question: "How much does it cost to build a mobile app?",
        answer:
          "Cost depends on feature scope, integrations, platforms and design complexity. A focused minimum viable product is far less than a full-featured enterprise app. After a short discovery phase we provide a detailed estimate broken down by feature so you can prioritize spend.",
      },
      {
        question: "Will you handle App Store and Google Play submission?",
        answer:
          "Yes. We prepare store listings, privacy disclosures, screenshots and builds, and manage the review process for both stores. If an update is rejected, we address the feedback and resubmit quickly so your launch timeline is protected.",
      },
      {
        question: "Can you take over an existing app built by another team?",
        answer: `Absolutely. ${siteConfig.name} starts with a code and architecture audit, documents risks and quick wins, then stabilizes the app before adding new features. This approach minimizes disruption for existing users during the transition.`,
      },
    ],
  },

  /* -------------------------------------------------------------
   * Custom Software Development
   * ----------------------------------------------------------- */
  {
    slug: "custom-development",
    name: "Custom Software Development",
    category: "Digital Transformation",
    icon: "boxes",
    headline: "Software shaped around your business",
    summary:
      "We build bespoke software that automates unique workflows, connects fragmented systems and gives your organization capabilities off-the-shelf products simply cannot provide.",
    heroCta: "Discuss Your Project",
    overview: {
      title: "When packaged software is not enough",
      paragraphs: [
        `Every organization has processes that set it apart, and those are rarely served well by generic tools. ${siteConfig.name} designs and builds custom software around how your teams actually work, eliminating manual workarounds, spreadsheets and disconnected point solutions. The result is a platform that encodes your competitive advantage and scales as your operations become more complex.`,
        "We handle the full lifecycle: domain modelling, architecture, development, integration, testing and operations. Our teams have delivered pricing engines, logistics platforms, compliance systems, clinical workflows and multi-sided marketplaces. We favour modular, well-tested architectures with clear APIs so new capabilities can be added safely, and we design for observability so issues are visible long before your users notice them.",
      ],
      highlights: [
        "Domain-driven design and modular architecture",
        "Integration with legacy and third-party systems",
        "Automated testing above 80% coverage",
        "Full IP ownership transferred to you",
      ],
    },
    offerings: {
      title: "Custom software development services",
      subtitle:
        "Tailored engineering for organizations that need software built precisely around their processes, data and goals.",
      items: [
        {
          title: "Enterprise Application Development",
          description:
            "Mission-critical platforms for operations, finance, supply chain and compliance, engineered for high availability, auditability and role-based access across large and distributed organizations.",
          icon: "building",
        },
        {
          title: "SaaS Product Engineering",
          description:
            "Multi-tenant products with subscription billing, tenant isolation, usage metering and self-service onboarding, built to help software companies move from first customer to thousands.",
          icon: "cloud",
        },
        {
          title: "Systems Integration",
          description:
            "API layers, event buses and data pipelines that connect ERP, CRM, payment and legacy systems so information flows automatically and teams stop re-keying data between tools.",
          icon: "network",
        },
        {
          title: "Legacy Modernization",
          description:
            "Incremental re-architecture of aging monoliths into maintainable services using strangler patterns, preserving business continuity while reducing technical debt and hosting costs.",
          icon: "workflow",
        },
        {
          title: "Workflow Automation",
          description:
            "Rules engines, approval flows and document processing that remove repetitive manual steps, reduce errors and give managers real-time visibility into operational bottlenecks.",
          icon: "settings",
        },
        {
          title: "Data & Reporting Platforms",
          description:
            "Operational data stores, analytics dashboards and reporting tools that turn transactional data into timely, trustworthy insight for decision-makers at every level.",
          icon: "chart",
        },
      ],
    },
    process: {
      title: "From idea to production-grade software",
      steps: [
        {
          title: "Domain Discovery",
          description:
            "Workshops with subject-matter experts map processes, pain points and data, producing a shared domain model and a prioritized backlog everyone understands.",
        },
        {
          title: "Solution Architecture",
          description:
            "We design the system boundaries, integration contracts, security model and infrastructure, documenting decisions so trade-offs remain visible as the product evolves.",
        },
        {
          title: "Incremental Delivery",
          description:
            "Cross-functional squads deliver working, tested features every sprint, with demos that let stakeholders steer priorities based on real progress.",
        },
        {
          title: "Hardening & Rollout",
          description:
            "Performance tests, security reviews, data migration rehearsals and user training prepare the organization for a smooth, low-risk go-live.",
        },
        {
          title: "Operate & Evolve",
          description:
            "We monitor production, resolve incidents against agreed service levels, and continue extending the platform as business needs change.",
        },
      ],
    },
    midCta: {
      title: "Ready to replace spreadsheets and workarounds?",
      subtitle:
        "Talk to a solution architect about the processes slowing your teams down and what a tailored platform could unlock.",
      label: "Speak With an Architect",
    },
    techStack: [
      {
        name: "Languages & Frameworks",
        items: ["Java", "Spring Boot", ".NET", "Go", "Python", "Node.js", "TypeScript"],
      },
      {
        name: "Data",
        items: ["PostgreSQL", "SQL Server", "MongoDB", "Redis", "Elasticsearch", "Apache Kafka"],
      },
      {
        name: "Infrastructure",
        items: ["Kubernetes", "Docker", "Terraform", "AWS", "Microsoft Azure"],
      },
      {
        name: "Quality & Observability",
        items: ["JUnit", "Playwright", "SonarQube", "Grafana", "OpenTelemetry"],
      },
    ],
    industries: [
      "banking-fintech",
      "healthcare-pharmaceuticals",
      "oil-gas-and-energy",
      "public-sector",
      "telecommunication",
      "startups",
    ],
    benefits: [
      {
        title: "Business-First Engineering",
        description:
          "We start with your processes and outcomes, not technology preferences, so the software fits how your organization truly operates.",
        icon: "briefcase",
      },
      {
        title: "Scalable Architecture",
        description:
          "Modular designs and cloud-native infrastructure let the platform absorb new users, regions and features without costly rewrites.",
        icon: "layers",
      },
      {
        title: "Predictable Delivery",
        description:
          "Clear milestones, transparent burn-down reporting and fixed-scope options keep timelines and budgets under control.",
        icon: "target",
      },
      {
        title: "You Own Everything",
        description:
          "Source code, documentation and infrastructure definitions belong to you, with no proprietary lock-in or hidden licensing.",
        icon: "lock",
      },
    ],
    faqs: [
      {
        question: "When does custom software make more sense than an off-the-shelf product?",
        answer:
          "Custom software is worthwhile when your processes create competitive advantage, when packaged tools require heavy workarounds, or when licensing costs grow faster than your business. We often recommend a hybrid approach that combines proven products with custom components where they matter most.",
      },
      {
        question: "How do you estimate custom development projects?",
        answer:
          "We run a paid or fixed-length discovery phase to define scope, architecture and risks. From that we produce a feature-level estimate with confidence ranges, and you can choose between fixed-price milestones or a time-and-materials model with a dedicated team.",
      },
      {
        question: "Can you work alongside our in-house developers?",
        answer: `Yes. ${siteConfig.name} regularly runs blended teams, sharing code reviews, ceremonies and tooling with client engineers. We also plan structured knowledge transfer so your team can confidently take ownership whenever you are ready.`,
      },
      {
        question: "How do you ensure the software is secure?",
        answer:
          "Security is built into each stage: threat modelling during design, secure coding standards, automated dependency and static analysis in CI, and penetration testing before major releases. We also align with frameworks such as ISO 27001 and SOC 2 where required.",
      },
    ],
  },

  /* -------------------------------------------------------------
   * UX/UI Design
   * ----------------------------------------------------------- */
  {
    slug: "ui-ux-design",
    name: "UX/UI Design",
    category: "Digital Transformation",
    icon: "palette",
    headline: "Interfaces that feel obvious to use",
    summary:
      "We combine user research, interaction design and visual craft to create digital products that are intuitive, accessible, on-brand and measurably easier to use.",
    heroCta: "Start a Design Sprint",
    overview: {
      title: "Design grounded in evidence, not opinion",
      paragraphs: [
        `Great design removes friction so people can accomplish what they came to do. ${siteConfig.name} designers start by understanding your users through interviews, analytics and usability testing, then translate those insights into flows, wireframes and polished interfaces. Every decision is traceable to a user need or business objective, which makes design reviews faster and outcomes more predictable.`,
        "We design for web, mobile, kiosks and complex enterprise tools, often for products with many user roles and dense data. Our designers build scalable design systems in Figma that map directly to coded components, ensuring consistency across teams and reducing development effort. Accessibility, localization and responsive behaviour are considered from the first sketch rather than retrofitted at the end.",
      ],
      highlights: [
        "User research and usability testing",
        "Figma design systems synced with code",
        "Accessibility-first interaction patterns",
        "Data-informed design iteration",
      ],
    },
    offerings: {
      title: "UX/UI design services",
      subtitle:
        "Research, strategy and visual design capabilities that help teams build products users understand and enjoy.",
      items: [
        {
          title: "User Research",
          description:
            "Interviews, contextual inquiry, surveys and analytics reviews that uncover real user motivations and pain points, giving your roadmap a foundation of evidence rather than assumptions.",
          icon: "users",
        },
        {
          title: "UX Strategy & Information Architecture",
          description:
            "Journey maps, service blueprints and navigation structures that organize complex functionality into clear, predictable paths and align product teams around shared priorities.",
          icon: "compass",
        },
        {
          title: "Wireframing & Prototyping",
          description:
            "Low and high-fidelity prototypes that let stakeholders and users experience flows early, so usability issues are caught when changes are cheap rather than after development.",
          icon: "pen",
        },
        {
          title: "Visual & Interface Design",
          description:
            "Polished interfaces with considered typography, colour, iconography and motion that express your brand while keeping content legible and interactions effortless across screen sizes.",
          icon: "palette",
        },
        {
          title: "Design Systems",
          description:
            "Reusable component libraries, tokens and usage guidelines that keep large product portfolios consistent and allow designers and developers to ship new features significantly faster.",
          icon: "boxes",
        },
        {
          title: "Usability & Accessibility Audits",
          description:
            "Expert heuristic reviews, moderated usability sessions and WCAG conformance checks that produce a prioritized list of improvements with clear impact and effort estimates.",
          icon: "eye",
        },
      ],
    },
    process: {
      title: "Our design process",
      steps: [
        {
          title: "Understand",
          description:
            "We gather business goals, study existing analytics and talk to real users to identify the problems most worth solving and the constraints we must respect.",
        },
        {
          title: "Define",
          description:
            "Insights are synthesized into personas, journey maps and design principles that give the whole team a shared understanding of who we are designing for.",
        },
        {
          title: "Ideate & Prototype",
          description:
            "We explore multiple concepts quickly, converge on the strongest direction and build interactive prototypes that simulate the real product experience.",
        },
        {
          title: "Test & Refine",
          description:
            "Prototypes are tested with representative users, and findings drive focused iterations until key tasks are completed quickly and confidently.",
        },
        {
          title: "Handoff & Support",
          description:
            "We deliver annotated specs and design-system components, then stay involved during development to review builds and resolve edge cases.",
        },
      ],
    },
    midCta: {
      title: "Are users struggling with your product?",
      subtitle:
        "Our UX audit pinpoints the friction costing you conversions and outlines fixes ranked by impact and effort.",
      label: "Get a UX Audit",
    },
    techStack: [
      {
        name: "Design & Prototyping",
        items: ["Figma", "FigJam", "ProtoPie", "Adobe Illustrator", "Adobe After Effects"],
      },
      {
        name: "Research & Testing",
        items: ["Maze", "Hotjar", "Lookback", "Optimal Workshop", "Dovetail"],
      },
      {
        name: "Design Systems",
        items: ["Storybook", "Tokens Studio", "Zeroheight", "Tailwind CSS"],
      },
      {
        name: "Analytics",
        items: ["Google Analytics 4", "Mixpanel", "Amplitude", "Microsoft Clarity"],
      },
    ],
    industries: [
      "e-commerce-software-development",
      "banking-fintech",
      "healthcare-pharmaceuticals",
      "education",
      "gaming",
      "startups",
    ],
    benefits: [
      {
        title: "Research-Backed Decisions",
        description:
          "Design choices are validated with real users, reducing costly rework and giving stakeholders confidence in the direction.",
        icon: "lightbulb",
      },
      {
        title: "Design That Ships",
        description:
          "Our designers understand engineering constraints, so handoffs are clean and what users see in production matches the approved designs.",
        icon: "code",
      },
      {
        title: "Inclusive by Default",
        description:
          "Accessibility and localization are considered from the start, widening your audience and reducing compliance risk.",
        icon: "heart",
      },
      {
        title: "Measurable Outcomes",
        description:
          "We define UX metrics such as task success and time on task up front and report on improvements after release.",
        icon: "chart",
      },
    ],
    faqs: [
      {
        question: "Do you only design, or do you also build?",
        answer: `Both. ${siteConfig.name} can deliver standalone design engagements or pair our designers with in-house engineering teams for end-to-end delivery. When we build, designers remain embedded in the team to protect quality through to release.`,
      },
      {
        question: "How long does a UX/UI design engagement take?",
        answer:
          "A focused design sprint can produce a validated prototype in one to two weeks. A full product design, including research, flows and a design system, typically takes six to twelve weeks depending on the number of user roles and screens.",
      },
      {
        question: "Can you work with our existing brand guidelines?",
        answer:
          "Yes. We extend existing brand guidelines into digital-ready components, defining interactive states, spacing, motion and accessibility rules that brand books rarely cover. If your guidelines need refreshing, we can propose updates while preserving recognizable brand equity.",
      },
      {
        question: "What deliverables will we receive?",
        answer:
          "Typical deliverables include research findings, journey maps, wireframes, interactive prototypes, final UI designs and a documented component library in Figma. All files are handed over in organized, editable form so your team can continue evolving the design.",
      },
    ],
  },
];
