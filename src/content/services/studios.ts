import type { Service } from "../types";
import { siteConfig } from "@/config/site";

export const studioServices: Service[] = [
  /* -------------------------------------------------------------
   * AI & Data Systems
   * ----------------------------------------------------------- */
  {
    slug: "ai-data-systems",
    name: "AI & Data Systems",
    category: "Studios & Advisory",
    icon: "brain",
    headline: "Turn raw data into dependable decisions",
    summary:
      "Data platforms, machine learning and generative AI systems engineered for production, with governance, observability and measurable business outcomes defined before the first model is trained.",
    heroCta: "Talk to our AI studio",
    overview: {
      title: "AI that earns its place in production",
      paragraphs: [
        `Most AI initiatives stall between a promising notebook and a reliable service. The gap is rarely the model; it is data quality, integration, monitoring and ownership. ${siteConfig.name} runs a dedicated AI and data studio that closes that gap, pairing data engineers, ML engineers and domain analysts who treat pipelines, evaluation and governance as first-class deliverables rather than afterthoughts.`,
        `We start by tying every use case to a metric the business already tracks, such as handling time, forecast error or conversion. From there we build the foundations that make AI sustainable: clean, documented data products, reproducible training, evaluation harnesses for language models and dashboards that show drift and cost. The result is AI your teams trust enough to rely on every day.`,
      ],
      highlights: [
        "Use cases tied to measurable business metrics",
        "Modern lakehouse and streaming foundations",
        "Evaluated, guarded generative AI applications",
        "MLOps with drift, cost and quality monitoring",
      ],
    },
    offerings: {
      title: "AI and data capabilities",
      subtitle:
        "A connected set of services that takes you from scattered data to governed, intelligent applications.",
      items: [
        {
          title: "Data platform engineering",
          description:
            "Lakehouse and warehouse architectures, batch and streaming ingestion, and transformation layers that give analysts and models a single, well-documented source of truth with clear lineage.",
          icon: "database",
        },
        {
          title: "Generative AI applications",
          description:
            "Retrieval-augmented assistants, document understanding and agentic workflows grounded in your own content, with evaluation suites, guardrails and human review loops designed in from the start.",
          icon: "sparkles",
        },
        {
          title: "Predictive analytics and ML",
          description:
            "Forecasting, propensity scoring, anomaly detection and recommendation models built with rigorous validation, explainability reports and clear thresholds for when a model should and should not act.",
          icon: "chart",
        },
        {
          title: "MLOps and LLMOps",
          description:
            "Automated training pipelines, model registries, feature stores and deployment workflows, plus monitoring for drift, latency, token spend and output quality across every model in production.",
          icon: "workflow",
        },
        {
          title: "Business intelligence",
          description:
            "Semantic layers, governed metrics and self-service dashboards that give leadership consistent numbers, reducing the time teams spend reconciling conflicting spreadsheets before every meeting.",
          icon: "eye",
        },
        {
          title: "Data governance and privacy",
          description:
            "Cataloguing, access policies, masking and retention controls aligned to your regulatory obligations, so sensitive data stays protected while still being usable for analytics and AI.",
          icon: "lock",
        },
      ],
    },
    process: {
      title: "From use case to production AI",
      steps: [
        {
          title: "Opportunity mapping",
          description:
            "We review workflows and data assets with stakeholders, then rank AI opportunities by value, feasibility and risk to select a focused first use case.",
        },
        {
          title: "Data readiness assessment",
          description:
            "Sources are profiled for completeness, quality and access constraints. Gaps are documented with a remediation plan before any modelling effort is committed.",
        },
        {
          title: "Proof of value",
          description:
            "A time-boxed build tests the approach against an agreed success metric using real data, giving decision makers evidence rather than projections.",
        },
        {
          title: "Production engineering",
          description:
            "The validated solution is hardened with pipelines, APIs, security controls, evaluation harnesses and integration into the systems people already use.",
        },
        {
          title: "Operate and improve",
          description:
            "Dashboards track model quality, drift and cost. Scheduled reviews retrain, retune or retire models as data and business priorities change.",
        },
      ],
    },
    midCta: {
      title: "Have data but no clear AI roadmap?",
      subtitle: `${siteConfig.name} will run a short opportunity workshop and hand you a ranked list of use cases with effort estimates.`,
      label: "Book an AI workshop",
    },
    techStack: [
      {
        name: "Data platforms",
        items: ["Databricks", "Snowflake", "BigQuery", "Apache Kafka", "dbt", "Apache Airflow"],
      },
      {
        name: "Machine learning",
        items: ["Python", "PyTorch", "scikit-learn", "XGBoost", "MLflow", "Ray"],
      },
      {
        name: "Generative AI",
        items: ["LangChain", "LlamaIndex", "pgvector", "Pinecone", "Hugging Face", "vLLM"],
      },
      {
        name: "Analytics & BI",
        items: ["Power BI", "Tableau", "Looker", "Apache Superset", "Metabase"],
      },
    ],
    industries: ["banking-fintech", "healthcare-pharmaceuticals", "retail-and-cpg", "telecommunication", "oil-gas-and-energy", "public-sector"],
    benefits: [
      {
        title: "Outcome-led delivery",
        description:
          "Every initiative is anchored to a business metric, so success is judged by impact on operations rather than model accuracy alone.",
        icon: "target",
      },
      {
        title: "Production-grade engineering",
        description:
          "We build the pipelines, monitoring and integrations that keep AI reliable long after the launch announcement fades.",
        icon: "server",
      },
      {
        title: "Responsible by design",
        description:
          "Bias checks, explainability, access controls and human oversight are built into each solution to satisfy auditors and earn user trust.",
        icon: "scale",
      },
      {
        title: "Vendor-neutral guidance",
        description:
          "We recommend models, clouds and tools based on your constraints and total cost, not on partnership incentives.",
        icon: "compass",
      },
    ],
    faqs: [
      {
        question: "Do we need a large, clean dataset before starting?",
        answer:
          "Not necessarily. Many valuable use cases work with modest data, and generative AI can often start from documents you already have. Our readiness assessment tells you honestly what is achievable now and which data improvements will unlock more ambitious applications later.",
      },
      {
        question: "How do you keep generative AI accurate?",
        answer:
          "We ground responses in your verified content through retrieval, constrain outputs with structured prompts and guardrails, and measure quality with automated evaluation sets built from real questions. Low-confidence answers are routed to people, and we monitor production outputs continuously for regressions.",
      },
      {
        question: "Where will our data be processed and stored?",
        answer: `Wherever your policies require. ${siteConfig.name} designs solutions that run in your own cloud account or on-premises environment, and can use privately hosted open-weight models when data must not leave your boundary. Data residency and retention rules are captured during discovery.`,
      },
      {
        question: "How long does a proof of value take?",
        answer:
          "Typically four to eight weeks, depending on data access and integration complexity. The scope is fixed upfront with a clear success metric, so at the end you have evidence to support a go or no-go decision on production investment.",
      },
    ],
  },

  /* -------------------------------------------------------------
   * Product Studio for Startups
   * ----------------------------------------------------------- */
  {
    slug: "product-studio",
    name: "Product Studio for Startups",
    category: "Studios & Advisory",
    icon: "rocket",
    headline: "From napkin sketch to paying users",
    summary:
      "A senior, cross-functional product team that helps founders validate ideas, ship a focused MVP and reach product-market fit without burning runway on the wrong features.",
    heroCta: "Pitch us your idea",
    overview: {
      title: "A founding product team on demand",
      paragraphs: [
        `Early-stage companies cannot afford to spend six months building something nobody wants. The ${siteConfig.name} Product Studio gives founders immediate access to product strategists, designers and engineers who have launched products from zero, and who are comfortable saying which features should wait. We work in short, evidence-driven cycles where every release is designed to answer a specific question about your market.`,
        `Our studio covers the full early journey: problem interviews, clickable prototypes, a lean but scalable MVP, analytics and the iterations that follow real user feedback. We choose pragmatic technology that a future in-house team can inherit, document decisions as we go and help you hire when the time comes. You get speed now without accumulating debt that slows you down after your next raise.`,
      ],
      highlights: [
        "Validated concepts before heavy engineering",
        "MVPs launched in eight to twelve weeks",
        "Investor-ready demos and product metrics",
        "Clean handover to your future in-house team",
      ],
    },
    offerings: {
      title: "What the studio delivers",
      subtitle:
        "Flexible support for every early milestone, whether you have a concept, a prototype or first customers waiting.",
      items: [
        {
          title: "Problem and market validation",
          description:
            "Customer interviews, competitor teardown and lightweight landing-page experiments that confirm the problem is painful enough, and the audience large enough, to justify building a product.",
          icon: "lightbulb",
        },
        {
          title: "Product strategy and roadmap",
          description:
            "A prioritised roadmap that separates must-have launch features from later bets, with clear hypotheses, success metrics and the smallest scope that can test your core value proposition.",
          icon: "compass",
        },
        {
          title: "UX and interactive prototyping",
          description:
            "User flows, wireframes and high-fidelity clickable prototypes tested with target users, giving you design confidence and a compelling asset for early investor and customer conversations.",
          icon: "palette",
        },
        {
          title: "MVP engineering",
          description:
            "Web and mobile MVPs built on proven, scalable foundations with authentication, payments, analytics and admin tooling included, so you launch quickly without painting yourself into a corner.",
          icon: "code",
        },
        {
          title: "Growth instrumentation",
          description:
            "Event tracking, funnels, cohort dashboards and experimentation frameworks that reveal how users actually behave, turning every release into a learning opportunity.",
          icon: "chart",
        },
        {
          title: "Team scaling and handover",
          description:
            "Architecture documentation, onboarding guides and hiring support including role definitions and technical interviews, helping you transition smoothly to an in-house engineering team.",
          icon: "users",
        },
      ],
    },
    process: {
      title: "Our studio playbook",
      steps: [
        {
          title: "Founder immersion",
          description:
            "We spend focused sessions understanding your vision, market, constraints and runway, then agree on the riskiest assumptions the first release must test.",
        },
        {
          title: "Validate and prototype",
          description:
            "Interviews and clickable prototypes run in parallel, so by the end of this stage you know what to build and have user evidence to support it.",
        },
        {
          title: "Build the MVP",
          description:
            "Weekly demos keep you in control while a compact team ships the core experience, integrations and analytics needed for a credible public launch.",
        },
        {
          title: "Launch and learn",
          description:
            "We support launch, watch activation and retention data closely, and gather qualitative feedback to identify what users value and where they struggle.",
        },
        {
          title: "Iterate and scale",
          description:
            "Evidence drives the next roadmap. We harden infrastructure for growth and, when you are ready, transition ownership to your newly hired team.",
        },
      ],
    },
    midCta: {
      title: "Got an idea and limited runway?",
      subtitle: `Tell ${siteConfig.name} what you are building and we will propose a validation plan sized to your budget.`,
      label: "Get a startup plan",
    },
    techStack: [
      {
        name: "Frontend & mobile",
        items: ["React", "Next.js", "React Native", "Flutter", "Tailwind CSS", "TypeScript"],
      },
      {
        name: "Backend & data",
        items: ["Node.js", "NestJS", "Python", "PostgreSQL", "Supabase", "Firebase"],
      },
      {
        name: "Cloud & DevOps",
        items: ["AWS", "Vercel", "Google Cloud", "Docker", "GitHub Actions"],
      },
      {
        name: "Product & analytics",
        items: ["Figma", "Mixpanel", "PostHog", "Amplitude", "Hotjar", "Stripe"],
      },
    ],
    industries: ["startups", "banking-fintech", "healthcare-pharmaceuticals", "education", "e-commerce-software-development", "real-estate"],
    benefits: [
      {
        title: "Senior team from day one",
        description:
          "Founders work directly with experienced strategists, designers and engineers, not juniors learning on your budget.",
        icon: "award",
      },
      {
        title: "Runway-conscious scope",
        description:
          "We actively cut features that do not test a core hypothesis, protecting your capital for the iterations that matter.",
        icon: "coins",
      },
      {
        title: "Built to be inherited",
        description:
          "Mainstream frameworks, clean code and thorough documentation mean your future engineers can extend the product immediately.",
        icon: "git",
      },
      {
        title: "Founder-friendly partnership",
        description:
          "Transparent weekly reporting, flexible engagement models and advice that goes beyond code to pitch narratives and hiring.",
        icon: "handshake",
      },
    ],
    faqs: [
      {
        question: "How quickly can you launch an MVP?",
        answer:
          "Most MVPs reach public launch in eight to twelve weeks after validation, depending on complexity and integrations. We keep scope deliberately tight, focusing on the single workflow that proves your value proposition, and add capabilities once real users confirm which direction is worth pursuing.",
      },
      {
        question: "Do you work with pre-seed founders?",
        answer: `Yes. ${siteConfig.name} offers smaller validation and prototype packages designed for founders who have not yet raised. These help you gather the user evidence and demo material that make funding conversations significantly stronger before you commit to a full build.`,
      },
      {
        question: "Who owns the code and designs?",
        answer:
          "You own everything we create for you, including source code, designs, documentation and cloud accounts, which are set up in your company's name from the start. There is no lock-in, and you can take the product in-house or to another partner at any time.",
      },
      {
        question: "Can you help after the MVP launches?",
        answer:
          "Absolutely. Many founders keep the studio engaged to run post-launch iterations, scale infrastructure and support fundraising. We can also help recruit and onboard your first engineering hires, then gradually reduce our involvement as your internal team takes ownership.",
      },
    ],
  },

  /* -------------------------------------------------------------
   * Advisory & Strategy
   * ----------------------------------------------------------- */
  {
    slug: "advisory-strategy",
    name: "Advisory & Strategy",
    category: "Studios & Advisory",
    icon: "compass",
    headline: "Technology strategy grounded in delivery",
    summary:
      "Independent technology advisory that helps leadership teams prioritise investments, modernise architecture and build delivery capability, backed by practitioners who have executed the plans they recommend.",
    heroCta: "Speak with an advisor",
    overview: {
      title: "Strategy written by people who also ship",
      paragraphs: [
        `Technology roadmaps often fail because they are designed far from the realities of engineering capacity, legacy constraints and organisational change. ${siteConfig.name} advisors are senior architects, delivery leaders and product executives who have run large programmes themselves. Our recommendations account for the people, budgets and systems you actually have, and they come with a credible path to execution.`,
        `Engagements range from a focused two-week assessment to an extended fractional leadership role. We help boards and executives answer hard questions: where to invest, what to retire, whether to build or buy, and how to measure progress. Every engagement ends with clear decisions, a sequenced roadmap and the metrics that will show whether the strategy is working.`,
      ],
      highlights: [
        "Advisors with hands-on delivery leadership",
        "Actionable roadmaps with sequenced milestones",
        "Objective build, buy and partner analysis",
        "Fractional CTO and architecture leadership",
      ],
    },
    offerings: {
      title: "Advisory services",
      subtitle:
        "Targeted expertise for the decisions that shape your technology organisation for years to come.",
      items: [
        {
          title: "Digital strategy and roadmapping",
          description:
            "Align technology investments with business goals through capability mapping, value analysis and a phased roadmap that sequences initiatives by dependency, risk and expected return.",
          icon: "map",
        },
        {
          title: "Technology due diligence",
          description:
            "Independent assessments of architecture, code quality, security posture, team capability and scalability for investors, acquirers and boards preparing for major decisions.",
          icon: "clipboard",
        },
        {
          title: "Architecture and modernisation review",
          description:
            "Evaluation of legacy estates with options for re-platforming, refactoring or replacing systems, including cost models, migration sequencing and risk mitigation for each path.",
          icon: "layers",
        },
        {
          title: "Fractional CTO leadership",
          description:
            "Experienced technology leadership on a part-time basis to set direction, establish engineering practices, manage vendors and mentor emerging leaders until a permanent hire is in place.",
          icon: "briefcase",
        },
        {
          title: "Engineering effectiveness",
          description:
            "Diagnose delivery bottlenecks using flow metrics, team topology and tooling analysis, then implement practical improvements to release frequency, quality and developer experience.",
          icon: "workflow",
        },
        {
          title: "Vendor and platform selection",
          description:
            "Structured requirements, market scans, scored evaluations and commercial negotiation support that help you choose platforms and partners with confidence and avoid costly lock-in.",
          icon: "scale",
        },
      ],
    },
    process: {
      title: "How an advisory engagement works",
      steps: [
        {
          title: "Frame the decision",
          description:
            "We clarify the questions leadership must answer, the constraints in play and the outcomes that would make the engagement a success.",
        },
        {
          title: "Gather evidence",
          description:
            "Stakeholder interviews, system reviews, data analysis and benchmark comparisons build an objective picture of where the organisation stands today.",
        },
        {
          title: "Develop options",
          description:
            "We present alternative strategies with costs, benefits, risks and timelines, testing each with key stakeholders before converging on a recommendation.",
        },
        {
          title: "Build the roadmap",
          description:
            "The chosen strategy becomes a sequenced plan with owners, milestones, budgets and measurable indicators that leadership can govern against.",
        },
        {
          title: "Support execution",
          description:
            "Optional follow-through includes governance check-ins, fractional leadership or delivery teams to ensure the strategy translates into results.",
        },
      ],
    },
    midCta: {
      title: "Facing a high-stakes technology decision?",
      subtitle: `Schedule a confidential conversation with a ${siteConfig.name} advisor to scope an assessment around your timeline.`,
      label: "Schedule a consultation",
    },
    techStack: [
      {
        name: "Strategy frameworks",
        items: ["TOGAF", "Wardley Mapping", "OKRs", "Business Model Canvas", "Value Stream Mapping"],
      },
      {
        name: "Delivery & metrics",
        items: ["DORA metrics", "SAFe", "Scrum", "Kanban", "Team Topologies"],
      },
      {
        name: "Assessment tooling",
        items: ["SonarQube", "Snyk", "CAST Highlight", "LinearB", "Jira Align"],
      },
      {
        name: "Cloud & architecture",
        items: ["AWS Well-Architected", "Azure Well-Architected", "Google Cloud Architecture Framework", "C4 Model", "ArchiMate"],
      },
    ],
    industries: ["banking-fintech", "public-sector", "telecommunication", "healthcare-pharmaceuticals", "oil-gas-and-energy", "startups"],
    benefits: [
      {
        title: "Practitioner credibility",
        description:
          "Our advisors have led real transformations, so recommendations reflect what works under budget, deadline and organisational pressure.",
        icon: "award",
      },
      {
        title: "Independent perspective",
        description:
          "We are paid for sound advice, not for selling licences, giving you an objective view of options and trade-offs.",
        icon: "eye",
      },
      {
        title: "Decisions, not just decks",
        description:
          "Each engagement ends with clear choices, owners and metrics rather than an open-ended list of observations.",
        icon: "target",
      },
      {
        title: "Seamless path to execution",
        description:
          "When you are ready to act, delivery teams can pick up the roadmap without a costly handover to a new partner.",
        icon: "rocket",
      },
    ],
    faqs: [
      {
        question: "How long does a typical advisory engagement last?",
        answer:
          "Focused assessments such as due diligence or architecture reviews usually take two to six weeks. Strategy and roadmap engagements run six to twelve weeks. Fractional leadership roles are ongoing and reviewed quarterly, with scope adjusted as your organisation's needs evolve.",
      },
      {
        question: "Will you recommend your own delivery services?",
        answer: `Only when it is genuinely the best option. ${siteConfig.name} advisory work is scoped and priced independently, and our recommendations compare in-house, vendor and partner options transparently. Many clients execute our roadmaps with their own teams or other providers.`,
      },
      {
        question: "What does technology due diligence cover?",
        answer:
          "We assess architecture, scalability, code quality, security and compliance posture, infrastructure costs, intellectual property considerations, team structure and key-person risk. Findings are prioritised by severity and include remediation estimates so investors can factor them into valuation and post-deal planning.",
      },
      {
        question: "How is confidentiality handled?",
        answer:
          "Every engagement is covered by a non-disclosure agreement before any information is shared. Access to client data is restricted to the named advisory team, materials are stored in secured workspaces, and sensitive findings are shared only with the stakeholders you designate.",
      },
    ],
  },

  /* -------------------------------------------------------------
   * Payment as a Service
   * ----------------------------------------------------------- */
  {
    slug: "payment-as-a-service",
    name: "Payment as a Service",
    category: "Studios & Advisory",
    icon: "card",
    headline: "Payments infrastructure without the overhead",
    summary:
      "Modular payment orchestration, checkout, billing and reconciliation delivered as a managed service, so you can accept money anywhere while keeping compliance scope and engineering effort small.",
    heroCta: "Modernise your payments",
    overview: {
      title: "A payment stack that grows with your business",
      paragraphs: [
        `Payments touch revenue, customer experience and regulatory exposure at the same time, yet many companies still rely on a single gateway integration and manual reconciliation. ${siteConfig.name} delivers payments as a managed capability: a modular layer that connects multiple processors, local payment methods and billing logic behind one consistent API that your product teams can build on with confidence.`,
        `We design for resilience and cost from the outset, with smart routing, automatic retries and tokenisation that keeps sensitive card data out of your systems wherever possible to reduce compliance scope. Finance teams gain automated reconciliation and clear reporting, while engineering teams stop maintaining fragile gateway code. You choose whether we operate the platform for you or hand it over once it is stable.`,
      ],
      highlights: [
        "Multi-processor routing and failover",
        "Tokenisation to minimise PCI DSS scope",
        "Subscriptions, invoicing and usage billing",
        "Automated reconciliation and payout reporting",
      ],
    },
    offerings: {
      title: "Payment services",
      subtitle:
        "Composable building blocks you can adopt individually or as a complete, managed payments platform.",
      items: [
        {
          title: "Payment orchestration",
          description:
            "A unified API over multiple acquirers and gateways with rules-based routing by cost, region and success rate, plus automatic failover when a provider experiences degraded performance.",
          icon: "network",
        },
        {
          title: "Checkout and wallet experiences",
          description:
            "Fast, accessible checkout flows for web and mobile supporting cards, digital wallets, bank transfers and local methods, optimised to reduce friction and abandoned transactions.",
          icon: "cart",
        },
        {
          title: "Recurring billing and invoicing",
          description:
            "Subscription plans, metered usage, proration, dunning and invoice generation that handle complex pricing models without custom code scattered across your product.",
          icon: "file",
        },
        {
          title: "Reconciliation and finance reporting",
          description:
            "Automated matching of transactions, fees, refunds and settlements across providers, feeding accurate data into your ledger and accounting systems for faster month-end close.",
          icon: "chart",
        },
        {
          title: "Fraud and risk controls",
          description:
            "Configurable risk scoring, velocity checks, 3-D Secure flows and chargeback management that protect revenue while keeping approval rates high for legitimate customers.",
          icon: "shield",
        },
        {
          title: "Marketplace and payout flows",
          description:
            "Split payments, seller onboarding, escrow-style holds and scheduled payouts for platforms that move money between buyers, sellers and service providers across borders.",
          icon: "wallet",
        },
      ],
    },
    process: {
      title: "How we deliver your payment platform",
      steps: [
        {
          title: "Payments assessment",
          description:
            "We map current flows, providers, fees, failure rates and compliance scope to identify revenue leakage and the quickest opportunities for improvement.",
        },
        {
          title: "Architecture and provider strategy",
          description:
            "We design the orchestration layer, select complementary processors and local methods, and define tokenisation and data boundaries to limit compliance exposure.",
        },
        {
          title: "Build and integrate",
          description:
            "Core services, checkout components, billing logic and webhooks are built and connected to your product, ERP and accounting systems with full test coverage.",
        },
        {
          title: "Certify and migrate",
          description:
            "Security testing, provider certifications and staged traffic migration move payments to the new platform without disrupting customers or revenue.",
        },
        {
          title: "Operate and optimise",
          description:
            "We monitor approval rates, latency and costs, tune routing rules continuously and add new markets or methods as your business expands.",
        },
      ],
    },
    midCta: {
      title: "Losing revenue to failed payments?",
      subtitle: `${siteConfig.name} will review your current payment flows and quantify where approvals, fees and reconciliation can improve.`,
      label: "Request a payments review",
    },
    techStack: [
      {
        name: "Processors & gateways",
        items: ["Stripe", "Adyen", "Checkout.com", "Braintree", "PayPal", "Worldpay"],
      },
      {
        name: "Billing & finance",
        items: ["Chargebee", "Recurly", "Stripe Billing", "NetSuite", "QuickBooks", "Xero"],
      },
      {
        name: "Security & risk",
        items: ["Tokenisation vaults", "3-D Secure 2", "HashiCorp Vault", "Sift", "AWS KMS"],
      },
      {
        name: "Platform engineering",
        items: ["Go", "Java", "Node.js", "PostgreSQL", "Apache Kafka", "Kubernetes"],
      },
    ],
    industries: ["banking-fintech", "e-commerce-software-development", "retail-and-cpg", "travel-hospitality", "shopify", "startups"],
    benefits: [
      {
        title: "Higher approval rates",
        description:
          "Intelligent routing, retries and local payment methods recover transactions that a single-gateway setup would decline.",
        icon: "trophy",
      },
      {
        title: "Reduced compliance burden",
        description:
          "Tokenisation and hosted fields keep raw card data away from your systems, shrinking the scope of security assessments.",
        icon: "lock",
      },
      {
        title: "No provider lock-in",
        description:
          "An orchestration layer lets you add, switch or negotiate with processors without rewriting product code.",
        icon: "puzzle",
      },
      {
        title: "Finance-ready data",
        description:
          "Clean, reconciled transaction data flows directly into accounting, saving finance teams hours of manual matching each week.",
        icon: "clipboard",
      },
    ],
    faqs: [
      {
        question: "Do we have to replace our current payment provider?",
        answer:
          "No. The orchestration layer sits in front of your existing provider and lets you add others alongside it. Many clients keep their primary processor and introduce a second for redundancy, specific regions or better rates, migrating traffic gradually as performance data justifies it.",
      },
      {
        question: "How does this affect our PCI DSS obligations?",
        answer:
          "By using tokenisation, hosted payment fields and vaulted card storage, raw card data can be kept outside your environment, which typically reduces the scope of your assessment considerably. Your qualified security assessor confirms the final scope, and we provide the architecture documentation they need.",
      },
      {
        question: "Can you support subscription and usage-based pricing?",
        answer: `Yes. ${siteConfig.name} implements flat, tiered, per-seat and metered pricing models, with trials, proration, coupons and dunning sequences. Billing logic is configured centrally, so pricing changes do not require code releases across every product surface.`,
      },
      {
        question: "Who operates the platform after launch?",
        answer:
          "You choose. We can run the platform as a fully managed service with monitoring and support, operate it jointly with your team, or hand over complete ownership with runbooks, training and documentation once it has been stable in production.",
      },
    ],
  },

  /* -------------------------------------------------------------
   * Architectural Visualization
   * ----------------------------------------------------------- */
  {
    slug: "architectural-visualization",
    name: "Architectural Visualization",
    category: "Studios & Advisory",
    icon: "building",
    headline: "See every space before it exists",
    summary:
      "Photorealistic renders, cinematic animations and interactive real-time walkthroughs that help developers, architects and brokers win approvals, secure buyers and align stakeholders long before construction begins.",
    heroCta: "Visualise your project",
    overview: {
      title: "Visualisation that sells, explains and persuades",
      paragraphs: [
        `Floor plans and elevations communicate well to architects, but buyers, investors and planning committees respond to experiences. ${siteConfig.name} transforms CAD and BIM data into imagery and interactive environments that convey light, materials, scale and atmosphere with accuracy. Our visualisation artists combine architectural literacy with cinematic composition, so each render tells a clear story about how a space will feel to live or work in.`,
        `Beyond still images, we build real-time configurators and virtual tours that run in browsers, on touchscreens in sales galleries and in VR headsets. Prospective buyers can switch finishes, explore views from specific floors and walk through amenities at their own pace. Because scenes are built from your design data, updates stay synchronised as the project evolves through each design stage.`,
      ],
      highlights: [
        "Photorealistic stills and cinematic films",
        "Interactive web and VR walkthroughs",
        "Unit configurators for sales galleries",
        "Built directly from CAD and BIM models",
      ],
    },
    offerings: {
      title: "Visualisation services",
      subtitle:
        "A complete visual toolkit for every phase of a development, from design competition to final unit sale.",
      items: [
        {
          title: "Exterior and aerial renders",
          description:
            "Photorealistic stills that place your building in its real context with accurate lighting, landscaping and surroundings, ideal for planning submissions, hoardings and marketing campaigns.",
          icon: "building",
        },
        {
          title: "Interior visualisation",
          description:
            "Detailed interior scenes showcasing materials, furniture and lighting moods, helping buyers and tenants picture daily life within residential, hospitality and commercial spaces.",
          icon: "home",
        },
        {
          title: "Cinematic animations",
          description:
            "Narrative-driven fly-throughs and lifestyle films with professional camera work, sound design and motion graphics, crafted to anchor launch events and digital advertising.",
          icon: "sparkles",
        },
        {
          title: "Real-time virtual tours",
          description:
            "Interactive walkthroughs built in real-time engines that run in web browsers or on sales-gallery screens, letting visitors explore spaces freely from any device.",
          icon: "monitor",
        },
        {
          title: "VR and immersive showrooms",
          description:
            "Headset experiences that place clients inside a space at true scale, ideal for off-plan sales, design reviews and stakeholder presentations where spatial understanding matters.",
          icon: "glasses",
        },
        {
          title: "Unit configurators and masterplans",
          description:
            "Interactive masterplans and apartment selectors linked to live availability, with finish options, floor-specific views and pricing that integrate with your sales CRM.",
          icon: "map",
        },
      ],
    },
    process: {
      title: "From drawings to finished visuals",
      steps: [
        {
          title: "Brief and data intake",
          description:
            "We collect CAD or BIM files, material schedules, site photography and reference imagery, then agree on views, deliverables and the intended audience.",
        },
        {
          title: "Modelling and scene setup",
          description:
            "Architecture, landscaping and context are modelled accurately, and draft camera angles are shared as clay renders for early composition approval.",
        },
        {
          title: "Materials and lighting",
          description:
            "Textures, finishes, furniture and lighting are applied and refined, with progress previews so your design team can validate every material decision.",
        },
        {
          title: "Final production",
          description:
            "High-resolution renders, animations or interactive builds are produced, colour-graded and optimised for their delivery channels, from print to mobile.",
        },
        {
          title: "Delivery and updates",
          description:
            "Assets are delivered in every required format, and source scenes are maintained so design changes can be reflected quickly as the project evolves.",
        },
      ],
    },
    midCta: {
      title: "Launching a development soon?",
      subtitle: `Share your drawings and ${siteConfig.name} will propose a visual package matched to your sales and approval milestones.`,
      label: "Get a visualisation quote",
    },
    techStack: [
      {
        name: "Modelling & BIM",
        items: ["Autodesk Revit", "AutoCAD", "SketchUp", "Rhino", "3ds Max", "Blender"],
      },
      {
        name: "Rendering",
        items: ["V-Ray", "Corona Renderer", "Chaos Vantage", "Lumion", "Enscape", "D5 Render"],
      },
      {
        name: "Real-time & interactive",
        items: ["Unreal Engine", "Twinmotion", "Unity", "Three.js", "Pixel Streaming"],
      },
      {
        name: "Post-production",
        items: ["Photoshop", "After Effects", "DaVinci Resolve", "Forest Pack", "Megascans"],
      },
    ],
    industries: ["real-estate", "travel-hospitality", "public-sector", "retail-and-cpg", "education"],
    benefits: [
      {
        title: "Architectural accuracy",
        description:
          "Scenes are built from your design data, ensuring proportions, materials and views faithfully represent what will actually be constructed.",
        icon: "scale",
      },
      {
        title: "Faster sales cycles",
        description:
          "Buyers who can explore a home before it exists commit with greater confidence, supporting off-plan sales and reducing reliance on show units.",
        icon: "zap",
      },
      {
        title: "Reusable digital assets",
        description:
          "One master scene powers stills, films, web tours and VR, so your investment keeps delivering value across every campaign.",
        icon: "boxes",
      },
      {
        title: "Reliable turnaround",
        description:
          "Defined review rounds and production schedules keep visuals aligned with launch dates, planning deadlines and investor meetings.",
        icon: "clipboard",
      },
    ],
    faqs: [
      {
        question: "What files do you need to get started?",
        answer:
          "Ideally Revit, AutoCAD, SketchUp or Rhino models, plus a material and finish schedule. If 3D models are not available, we can work from 2D plans, elevations and sections. Site photographs and mood references help us match context and atmosphere accurately.",
      },
      {
        question: "How long does a set of renders take?",
        answer:
          "A typical set of exterior and interior stills takes two to three weeks from receiving complete data, including two review rounds. Animations and interactive tours require longer, usually four to eight weeks depending on length, detail and the number of interactive features.",
      },
      {
        question: "Can buyers view tours without special hardware?",
        answer: `Yes. ${siteConfig.name} delivers browser-based tours using pixel streaming or lightweight web rendering, so prospects can explore on laptops, tablets and phones. VR versions are offered as an additional format for sales galleries and events.`,
      },
      {
        question: "What happens if the design changes after rendering?",
        answer:
          "Because we maintain organised source scenes, most design changes can be applied efficiently without starting over. We agree on a change process at the outset, and minor adjustments within review rounds are included, while larger redesigns are quoted transparently before work begins.",
      },
    ],
  },
];
