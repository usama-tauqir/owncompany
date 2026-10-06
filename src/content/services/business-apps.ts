import type { Service } from "../types";
import { siteConfig } from "@/config/site";

export const businessAppServices: Service[] = [
  /* -------------------------------------------------------------
   * Dynamics 365 ERP
   * ----------------------------------------------------------- */
  {
    slug: "d365-erp",
    name: "Dynamics 365 ERP",
    category: "Business Applications",
    icon: "database",
    headline: "One ERP backbone for operations",
    summary:
      "We implement, extend and optimize Dynamics 365 finance and operations solutions that unify accounting, supply chain and manufacturing on a single, reliable platform.",
    heroCta: "Plan Your ERP Rollout",
    overview: {
      title: "Run finance and operations from a single source of truth",
      paragraphs: [
        `Disconnected finance, inventory and procurement systems slow down month-end close and hide the real state of the business. ${siteConfig.name} implements Dynamics 365 Finance, Supply Chain Management and Business Central to bring these functions together, giving leadership accurate, real-time numbers and giving teams automated processes that replace manual reconciliation and spreadsheet-driven planning.`,
        "Our consultants combine functional expertise in accounting, warehousing and production with strong technical skills in X++, Power Platform and Azure integration. We favour configuration over customization, keeping your solution upgrade-friendly as the platform evolves. From fit-gap analysis and data migration through testing, training and hypercare, we manage the whole journey and stay on to continuously improve adoption and value.",
      ],
      highlights: [
        "Finance, supply chain and manufacturing expertise",
        "Upgrade-safe extensions and configuration",
        "Structured data migration and reconciliation",
        "Hypercare and continuous optimization",
      ],
    },
    offerings: {
      title: "Dynamics 365 ERP services",
      subtitle:
        "Comprehensive ERP capabilities from initial assessment and implementation to integration, reporting and long-term support.",
      items: [
        {
          title: "ERP Implementation",
          description:
            "Full-cycle deployment of Dynamics 365 Finance, Supply Chain Management or Business Central, aligned to your chart of accounts, legal entities, warehouses and operational processes.",
          icon: "database",
        },
        {
          title: "Legacy ERP Migration",
          description:
            "Structured migration from on-premise or legacy ERPs, covering data cleansing, mapping, validation and parallel runs so opening balances and open transactions reconcile precisely.",
          icon: "workflow",
        },
        {
          title: "Financial Management",
          description:
            "General ledger, accounts payable and receivable, fixed assets, budgeting and consolidation configured to accelerate close cycles and strengthen controls across entities and currencies.",
          icon: "coins",
        },
        {
          title: "Supply Chain & Manufacturing",
          description:
            "Procurement, inventory, warehouse management, master planning and production control tuned to your fulfilment model, whether discrete, process, make-to-order or distribution-focused.",
          icon: "box",
        },
        {
          title: "Integrations & Extensions",
          description:
            "Upgrade-safe X++ extensions, data entities and Azure-based integrations connecting the ERP with e-commerce, banking, logistics, payroll and industry-specific systems.",
          icon: "puzzle",
        },
        {
          title: "Reporting & Analytics",
          description:
            "Power BI dashboards, financial reports and operational KPIs built on a governed data model so leaders see margin, cash and inventory performance in near real time.",
          icon: "chart",
        },
      ],
    },
    process: {
      title: "Our ERP implementation methodology",
      steps: [
        {
          title: "Assess & Plan",
          description:
            "We document current processes, run fit-gap workshops and define scope, phasing, data strategy and governance before any configuration begins.",
        },
        {
          title: "Design & Configure",
          description:
            "Solution blueprints translate into configured modules, security roles and workflows, reviewed with process owners through iterative conference-room pilots.",
        },
        {
          title: "Build & Integrate",
          description:
            "Required extensions, reports and integrations are developed in parallel, with automated regression tests protecting core processes from unintended side effects.",
        },
        {
          title: "Test, Train & Migrate",
          description:
            "System and user acceptance testing, role-based training and multiple data migration rehearsals ensure the business is ready for a confident cutover.",
        },
        {
          title: "Go-Live & Hypercare",
          description:
            "We support cutover, monitor early transactions closely and resolve issues quickly, then transition to ongoing optimization and release management.",
        },
      ],
    },
    midCta: {
      title: "Is month-end close taking too long?",
      subtitle:
        "Talk to our ERP consultants about streamlining finance and operations on a unified Dynamics 365 platform.",
      label: "Book an ERP Assessment",
    },
    techStack: [
      {
        name: "Dynamics 365 Applications",
        items: [
          "Dynamics 365 Finance",
          "Dynamics 365 Supply Chain Management",
          "Business Central",
          "Dynamics 365 Project Operations",
          "Dynamics 365 Commerce",
        ],
      },
      {
        name: "Development",
        items: ["X++", "C#", "Visual Studio", "Lifecycle Services", "Azure DevOps"],
      },
      {
        name: "Integration & Data",
        items: ["Azure Logic Apps", "Azure Service Bus", "Data Management Framework", "Dataverse", "Azure Data Factory"],
      },
      {
        name: "Analytics",
        items: ["Power BI", "Microsoft Fabric", "Azure Synapse Analytics", "Financial Reporting"],
      },
    ],
    industries: [
      "retail-and-cpg",
      "oil-gas-and-energy",
      "public-sector",
      "healthcare-pharmaceuticals",
      "real-estate",
    ],
    benefits: [
      {
        title: "Functional and Technical Depth",
        description:
          "Consultants who understand both accounting and code bridge the gap between business requirements and system design.",
        icon: "scale",
      },
      {
        title: "Upgrade-Friendly Solutions",
        description:
          "We minimize customization and use extension patterns that keep your system aligned with platform updates.",
        icon: "settings",
      },
      {
        title: "Risk-Controlled Cutover",
        description:
          "Rehearsed migrations, reconciliations and rollback plans protect financial integrity during go-live.",
        icon: "shield",
      },
      {
        title: "Adoption Focus",
        description:
          "Role-based training and change management ensure users embrace new processes rather than working around them.",
        icon: "users",
      },
    ],
    faqs: [
      {
        question: "Should we choose Business Central or Dynamics 365 Finance and Supply Chain?",
        answer:
          "Business Central suits small and mid-sized organizations with simpler entity structures. Finance and Supply Chain Management serves larger, multi-entity or complex manufacturing and distribution businesses. We assess transaction volumes, entities, processes and growth plans before recommending the right fit.",
      },
      {
        question: "How long does a Dynamics 365 ERP implementation take?",
        answer:
          "A Business Central deployment often takes three to six months. Larger Finance and Supply Chain programmes usually run six to twelve months, frequently phased by entity or region. A clear scope and committed process owners are the biggest factors in staying on schedule.",
      },
      {
        question: "Can you rescue an ERP project that is struggling?",
        answer: `Yes. ${siteConfig.name} performs a rapid health check covering scope, configuration quality, data readiness and team structure, then proposes a recovery plan. We have stabilized projects mid-flight and helped organizations reach a successful go-live.`,
      },
      {
        question: "Do you provide support after go-live?",
        answer:
          "We offer managed support covering incident resolution, platform update testing, minor enhancements and periodic optimization reviews. Service levels are tailored to your operating hours and business criticality, with options for regional time-zone coverage.",
      },
    ],
  },

  /* -------------------------------------------------------------
   * Dynamics 365 CRM
   * ----------------------------------------------------------- */
  {
    slug: "d365-crm",
    name: "Dynamics 365 CRM",
    category: "Business Applications",
    icon: "users",
    headline: "Every customer interaction, fully connected",
    summary:
      "We tailor Dynamics 365 Sales, Customer Service and Customer Insights so your teams can win deals faster, resolve issues sooner and personalize every engagement.",
    heroCta: "Transform Customer Engagement",
    overview: {
      title: "A complete view of every customer relationship",
      paragraphs: [
        `When sales, marketing and service teams work from different systems, customers repeat themselves and opportunities slip away. ${siteConfig.name} implements Dynamics 365 customer engagement applications that bring every interaction, order and case into one shared view. Sellers know what service has promised, agents see purchase history instantly, and marketers target audiences based on real behaviour rather than guesswork.`,
        "We design CRM around your sales methodology and service model, not the other way around. That means configured pipelines, guided business process flows, omnichannel case routing and journey orchestration that mirror how your teams actually work. With Copilot features, Power Automate and Power BI layered in, we help teams spend less time on data entry and more time on meaningful customer conversations.",
      ],
      highlights: [
        "Sales, service and marketing on one platform",
        "Omnichannel service with intelligent routing",
        "AI-assisted selling and case resolution",
        "Integration with ERP, telephony and email",
      ],
    },
    offerings: {
      title: "Dynamics 365 CRM services",
      subtitle:
        "From pipeline management to field service, we configure and extend customer engagement apps around your teams.",
      items: [
        {
          title: "Sales Automation",
          description:
            "Lead scoring, opportunity pipelines, quoting and forecasting configured around your sales stages, with guided selling and activity capture that keep sellers focused on high-value deals.",
          icon: "target",
        },
        {
          title: "Customer Service Hub",
          description:
            "Case management, SLAs, knowledge bases and omnichannel routing across email, chat and voice, helping agents resolve issues on first contact with full customer context.",
          icon: "headphones",
        },
        {
          title: "Marketing & Customer Insights",
          description:
            "Unified customer profiles, real-time segments and journey orchestration that personalize communications across channels and attribute revenue to the campaigns that drive it.",
          icon: "megaphone",
        },
        {
          title: "Field Service Management",
          description:
            "Work order scheduling, technician mobile apps, asset tracking and inventory visibility that improve first-time fix rates and reduce travel time for field teams.",
          icon: "wrench",
        },
        {
          title: "CRM Migration & Consolidation",
          description:
            "Migration from legacy or competing CRMs, consolidating duplicate records and historical activity into a clean data model that teams can trust from the first day.",
          icon: "database",
        },
        {
          title: "Portals & Self-Service",
          description:
            "Power Pages portals for customers, partners and dealers to log cases, track orders, register deals and access knowledge without needing to contact your team.",
          icon: "globe",
        },
      ],
    },
    process: {
      title: "How we deliver CRM transformations",
      steps: [
        {
          title: "Customer Journey Mapping",
          description:
            "We map how customers interact with sales, service and marketing today, identifying hand-off gaps, data silos and the moments that matter most.",
        },
        {
          title: "Solution Blueprint",
          description:
            "Entities, processes, security roles and integrations are designed to reflect your operating model while staying close to standard platform capabilities.",
        },
        {
          title: "Configure & Extend",
          description:
            "We configure apps, build plugins and Power Automate flows, and integrate with ERP, telephony and marketing systems in iterative sprints.",
        },
        {
          title: "Pilot & Adopt",
          description:
            "A pilot group validates the solution in real work, and their feedback shapes final adjustments, training content and rollout communications.",
        },
        {
          title: "Scale & Optimize",
          description:
            "We roll out across teams and regions, then track adoption and pipeline metrics to guide continuous refinements and new capabilities.",
        },
      ],
    },
    midCta: {
      title: "Want your teams to see the whole customer?",
      subtitle:
        "Discover how a connected Dynamics 365 CRM can shorten sales cycles and lift customer satisfaction.",
      label: "Schedule a CRM Consultation",
    },
    techStack: [
      {
        name: "Customer Engagement Apps",
        items: [
          "Dynamics 365 Sales",
          "Dynamics 365 Customer Service",
          "Dynamics 365 Customer Insights",
          "Dynamics 365 Field Service",
          "Dynamics 365 Contact Center",
        ],
      },
      {
        name: "Platform",
        items: ["Dataverse", "Power Automate", "Power Pages", "Copilot Studio", "Power BI"],
      },
      {
        name: "Development",
        items: ["C#", "JavaScript", "TypeScript", "PCF Controls", "Azure Functions"],
      },
      {
        name: "Integration",
        items: ["Azure Service Bus", "Azure Logic Apps", "Microsoft Teams", "Outlook", "REST APIs"],
      },
    ],
    industries: [
      "banking-fintech",
      "real-estate",
      "telecommunication",
      "healthcare-pharmaceuticals",
      "retail-and-cpg",
      "education",
    ],
    benefits: [
      {
        title: "Process-Led Configuration",
        description:
          "We shape the CRM around your sales methodology and service commitments, so the system supports how teams already win.",
        icon: "workflow",
      },
      {
        title: "Clean, Trusted Data",
        description:
          "Deduplication, validation rules and governance keep customer records accurate and reports reliable.",
        icon: "database",
      },
      {
        title: "Adoption That Sticks",
        description:
          "Simple layouts, mobile access and productivity automation make the CRM something teams want to use daily.",
        icon: "heart",
      },
      {
        title: "Connected Microsoft Ecosystem",
        description:
          "Deep integration with Teams, Outlook and ERP reduces context switching and duplicate data entry.",
        icon: "network",
      },
    ],
    faqs: [
      {
        question: "Can Dynamics 365 CRM integrate with our existing ERP?",
        answer:
          "Yes. Dynamics 365 integrates natively with Microsoft ERP applications through Dataverse and dual-write, and with third-party ERPs through APIs and middleware. We design integrations so accounts, products, orders and invoices stay synchronized without manual exports.",
      },
      {
        question: "How do you drive user adoption of a new CRM?",
        answer: `${siteConfig.name} involves end users early through pilots, simplifies forms to essential fields, automates data capture from email and calendars, and delivers role-based training. We also set up adoption dashboards so managers can see usage and coach their teams.`,
      },
      {
        question: "Can you migrate our data from another CRM?",
        answer:
          "Yes. We map entities and fields, cleanse and deduplicate records, and migrate accounts, contacts, opportunities, cases and historical activities. Trial migrations and reconciliation reports confirm completeness before the final cutover.",
      },
      {
        question: "Do you implement AI features such as Copilot?",
        answer:
          "We enable and configure built-in AI features for email drafting, opportunity summaries and case suggestions, and build custom agents with Copilot Studio where they add value. We also review data quality and permissions first so AI outputs are accurate and appropriate.",
      },
    ],
  },

  /* -------------------------------------------------------------
   * Power Apps
   * ----------------------------------------------------------- */
  {
    slug: "power-apps",
    name: "Power Apps",
    category: "Business Applications",
    icon: "zap",
    headline: "Business apps in weeks, not months",
    summary:
      "We use Microsoft Power Platform to rapidly deliver governed low-code apps, automations and portals that digitize everyday processes across your organization.",
    heroCta: "Build Your First App",
    overview: {
      title: "Low-code speed with enterprise discipline",
      paragraphs: [
        `Many organizations still run critical processes on email chains, paper forms and shared spreadsheets. ${siteConfig.name} uses Power Apps, Power Automate and Dataverse to replace these with secure, mobile-friendly applications delivered in a fraction of the time traditional development requires. Inspections, approvals, onboarding, asset tracking and request management become structured, auditable and measurable.`,
        "Speed without governance creates new risks, so we pair rapid delivery with a solid Center of Excellence foundation. That includes environment strategy, data loss prevention policies, application lifecycle management and solution-aware deployments. We also coach your citizen developers, giving business teams the confidence to build their own solutions safely while professional developers handle complex integrations and custom components.",
      ],
      highlights: [
        "Canvas and model-driven app expertise",
        "Power Automate workflow orchestration",
        "Center of Excellence and governance setup",
        "Citizen developer enablement programmes",
      ],
    },
    offerings: {
      title: "Power Platform services",
      subtitle:
        "Everything you need to build, automate and govern low-code solutions at enterprise scale.",
      items: [
        {
          title: "Canvas & Model-Driven Apps",
          description:
            "Purpose-built apps for field inspections, approvals, asset tracking and case management, designed for desktop, tablet and phone with offline capability where field teams need it.",
          icon: "smartphone",
        },
        {
          title: "Process Automation",
          description:
            "Cloud flows, approval chains and desktop robotic process automation that remove repetitive tasks, connect disparate systems and route work to the right person automatically.",
          icon: "workflow",
        },
        {
          title: "Power Pages Portals",
          description:
            "Secure external websites for customers, suppliers and citizens to submit forms, upload documents and track requests, backed by Dataverse and integrated authentication.",
          icon: "globe",
        },
        {
          title: "Copilot Studio Agents",
          description:
            "Conversational agents that answer employee or customer questions, retrieve information from business systems and trigger automated actions, reducing load on support and HR teams.",
          icon: "bot",
        },
        {
          title: "Governance & CoE Setup",
          description:
            "Environment strategy, DLP policies, ALM pipelines and monitoring dashboards that let your organization scale low-code adoption safely without creating shadow IT.",
          icon: "shield",
        },
        {
          title: "Custom Connectors & Components",
          description:
            "Professional-grade connectors, PCF controls and Azure Functions that extend Power Platform to legacy systems and specialized requirements beyond out-of-the-box capabilities.",
          icon: "puzzle",
        },
      ],
    },
    process: {
      title: "Our rapid delivery approach",
      steps: [
        {
          title: "Identify Opportunities",
          description:
            "We review manual processes across departments and prioritize those with the highest volume, error rate or compliance exposure for quick wins.",
        },
        {
          title: "Design the Solution",
          description:
            "Data model, screens, automations and security are sketched with process owners, keeping the scope lean enough to deliver in weeks.",
        },
        {
          title: "Build in Short Cycles",
          description:
            "Apps are developed in one-week iterations, with users testing working versions frequently and requesting refinements as they go.",
        },
        {
          title: "Deploy with ALM",
          description:
            "Solutions move through development, test and production environments using managed pipelines, with version control and rollback options.",
        },
        {
          title: "Enable & Expand",
          description:
            "We train makers and administrators, hand over documentation and help identify the next set of processes to digitize.",
        },
      ],
    },
    midCta: {
      title: "Still running processes on spreadsheets?",
      subtitle:
        "Let us identify three processes we can digitize with Power Platform and show you the return within weeks.",
      label: "Find Quick Wins",
    },
    techStack: [
      {
        name: "Power Platform",
        items: ["Power Apps", "Power Automate", "Power Pages", "Copilot Studio", "Power BI"],
      },
      {
        name: "Data",
        items: ["Dataverse", "SharePoint", "SQL Server", "Azure SQL Database"],
      },
      {
        name: "Pro-Code Extensions",
        items: ["Power Fx", "PCF Controls", "TypeScript", "Azure Functions", "Azure API Management"],
      },
      {
        name: "Governance & ALM",
        items: ["CoE Starter Kit", "Power Platform Pipelines", "Azure DevOps", "Microsoft Purview"],
      },
    ],
    industries: [
      "public-sector",
      "oil-gas-and-energy",
      "healthcare-pharmaceuticals",
      "education",
      "telecommunication",
    ],
    benefits: [
      {
        title: "Rapid Time to Value",
        description:
          "Most first apps reach users within four to eight weeks, delivering visible improvements quickly and building momentum.",
        icon: "rocket",
      },
      {
        title: "Governed Growth",
        description:
          "Strong guardrails let you scale low-code adoption without compromising security, compliance or data quality.",
        icon: "lock",
      },
      {
        title: "Pro-Code When Needed",
        description:
          "Experienced developers extend the platform with custom code, so you are never limited by out-of-the-box features.",
        icon: "code",
      },
      {
        title: "Empowered Teams",
        description:
          "Maker training and reusable templates help business teams solve their own problems confidently.",
        icon: "lightbulb",
      },
    ],
    faqs: [
      {
        question: "What kinds of applications are a good fit for Power Apps?",
        answer:
          "Power Apps excels at internal process applications such as approvals, inspections, requests, onboarding and asset management. It also works well for partner portals and data capture. Very high-volume consumer apps or heavy real-time processing are usually better served by custom development.",
      },
      {
        question: "How do you prevent low-code sprawl and shadow IT?",
        answer: `${siteConfig.name} establishes environment strategies, data loss prevention policies and monitoring through a Center of Excellence. Makers work within clear guardrails, solutions follow ALM processes, and administrators have visibility into every app, flow and connector in use.`,
      },
      {
        question: "Can Power Apps connect to our non-Microsoft systems?",
        answer:
          "Yes. Hundreds of standard connectors cover common SaaS products and databases. For proprietary or legacy systems, we build custom connectors, use on-premises data gateways or expose APIs through Azure so apps can securely read and write the data they need.",
      },
      {
        question: "What licensing will we need?",
        answer:
          "Licensing depends on the number of users, apps and premium connectors involved. We review your existing Microsoft 365 entitlements and recommend the most cost-effective combination of per-app, per-user or pay-as-you-go plans for your scenario.",
      },
    ],
  },

  /* -------------------------------------------------------------
   * Salesforce
   * ----------------------------------------------------------- */
  {
    slug: "salesforce",
    name: "Salesforce",
    category: "Business Applications",
    icon: "cloud",
    headline: "Get more from every Salesforce cloud",
    summary:
      "We implement, customize and integrate Salesforce clouds so revenue, service and marketing teams operate on clean data with automation that actually saves time.",
    heroCta: "Optimize Your Salesforce",
    overview: {
      title: "Salesforce tuned to the way you sell and serve",
      paragraphs: [
        `Salesforce is powerful, but many organizations use only a fraction of what they pay for, or struggle with orgs cluttered by years of quick fixes. ${siteConfig.name} helps you implement new clouds properly, clean up technical debt in existing orgs and align the platform with how your teams sell, serve and market today. The goal is a CRM people trust and leaders can steer by.`,
        "Our Salesforce practice covers administration, declarative automation, Apex and Lightning Web Component development, and enterprise integration. We implement Sales Cloud, Service Cloud, Experience Cloud and Marketing Cloud, and connect them to ERP, billing and data platforms. Every engagement follows sound DevOps practices with source control, automated testing and controlled releases so changes stay safe as your org grows.",
      ],
      highlights: [
        "Sales, Service, Experience and Marketing Clouds",
        "Apex and Lightning Web Component development",
        "Org health checks and technical debt clean-up",
        "Source-driven DevOps and release management",
      ],
    },
    offerings: {
      title: "Salesforce services",
      subtitle:
        "Implementation, optimization and integration services across the Salesforce ecosystem.",
      items: [
        {
          title: "Sales Cloud Implementation",
          description:
            "Lead management, opportunity stages, territories, CPQ and forecasting set up around your revenue process, with dashboards that give leaders an accurate, real-time view of pipeline health.",
          icon: "chart",
        },
        {
          title: "Service Cloud Solutions",
          description:
            "Omni-channel routing, entitlements, knowledge and agent consoles that shorten handling times and keep service levels visible across email, chat, messaging and phone.",
          icon: "headphones",
        },
        {
          title: "Experience Cloud Portals",
          description:
            "Branded customer, partner and dealer communities that offer self-service, deal registration and collaboration while sharing the same data and security model as your internal org.",
          icon: "users",
        },
        {
          title: "Marketing Automation",
          description:
            "Email journeys, lead nurturing, segmentation and campaign attribution using Marketing Cloud solutions, tightly aligned with sales so marketing-qualified leads convert more effectively.",
          icon: "megaphone",
        },
        {
          title: "Custom Development",
          description:
            "Apex, Lightning Web Components and Flow solutions for requirements that standard configuration cannot meet, built with test coverage and governor limits firmly in mind.",
          icon: "code",
        },
        {
          title: "Integration & Data Migration",
          description:
            "API-led integrations with ERP, billing and data warehouses, plus structured migrations from legacy CRMs with deduplication and validation to protect data quality.",
          icon: "network",
        },
      ],
    },
    process: {
      title: "Our Salesforce delivery framework",
      steps: [
        {
          title: "Org & Process Review",
          description:
            "We assess your current org, licences and business processes, identifying quick wins, technical debt and gaps between system behaviour and team needs.",
        },
        {
          title: "Roadmap & Design",
          description:
            "A prioritized roadmap and solution design define data model changes, automation, integrations and security, balancing declarative and coded approaches.",
        },
        {
          title: "Build & Test",
          description:
            "Changes are developed in scratch orgs or sandboxes, version-controlled and validated through automated tests before reaching user acceptance.",
        },
        {
          title: "Release & Train",
          description:
            "Controlled deployments move changes to production with release notes, short training sessions and in-app guidance for affected users.",
        },
        {
          title: "Managed Optimization",
          description:
            "Ongoing admin and development support handles new requests, seasonal releases and continuous improvements to adoption and data quality.",
        },
      ],
    },
    midCta: {
      title: "Paying for Salesforce features you do not use?",
      subtitle:
        "Our org health check reveals unused licences, automation conflicts and the improvements that will deliver value fastest.",
      label: "Request an Org Health Check",
    },
    techStack: [
      {
        name: "Salesforce Clouds",
        items: ["Sales Cloud", "Service Cloud", "Experience Cloud", "Marketing Cloud", "Revenue Cloud"],
      },
      {
        name: "Development",
        items: ["Apex", "Lightning Web Components", "Salesforce Flow", "SOQL", "Salesforce CLI"],
      },
      {
        name: "Integration & Data",
        items: ["MuleSoft", "Data Cloud", "Platform Events", "REST APIs", "Data Loader"],
      },
      {
        name: "DevOps & Analytics",
        items: ["Git", "Copado", "Gearset", "CRM Analytics", "Tableau"],
      },
    ],
    industries: [
      "banking-fintech",
      "real-estate",
      "healthcare-pharmaceuticals",
      "e-commerce-software-development",
      "startups",
      "telecommunication",
    ],
    benefits: [
      {
        title: "Declarative First",
        description:
          "We use configuration and Flow wherever possible, reserving code for genuine complexity to keep your org maintainable.",
        icon: "settings",
      },
      {
        title: "Clean Org Architecture",
        description:
          "Thoughtful data models and consolidated automation prevent conflicts, performance issues and future rework.",
        icon: "layers",
      },
      {
        title: "Safe, Repeatable Releases",
        description:
          "Source control and automated testing let us deliver changes frequently without disrupting your users.",
        icon: "git",
      },
      {
        title: "Revenue-Focused Outcomes",
        description:
          "Every improvement is tied to measurable gains in pipeline visibility, conversion or service efficiency.",
        icon: "trophy",
      },
    ],
    faqs: [
      {
        question: "Can you improve an existing Salesforce org rather than starting over?",
        answer: `Yes, and that is often the most cost-effective path. ${siteConfig.name} audits your org for unused fields, conflicting automation, security gaps and performance issues, then delivers a phased clean-up plan that improves usability without disrupting daily operations.`,
      },
      {
        question: "Do you offer ongoing Salesforce administration?",
        answer:
          "We provide managed services that combine administrator and developer capacity for user requests, enhancements, release testing and reporting. This gives you access to a broader range of skills than a single in-house admin while keeping costs predictable.",
      },
      {
        question: "How do you integrate Salesforce with our ERP?",
        answer:
          "We design API-led integrations using middleware or native connectors, synchronizing accounts, products, quotes, orders and invoices. Error handling, retry logic and monitoring are built in so integration failures are detected and resolved before they affect customers.",
      },
      {
        question: "Can you help us choose between Salesforce and other CRM platforms?",
        answer:
          "Yes. We run a vendor-neutral assessment that weighs functional fit, ecosystem, integration needs, total cost of ownership and in-house skills. You receive a clear recommendation with trade-offs explained, whichever platform you ultimately choose.",
      },
    ],
  },
];
