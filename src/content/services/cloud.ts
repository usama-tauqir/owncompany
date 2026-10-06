import type { Service } from "../types";
import { siteConfig } from "@/config/site";

export const cloudServices: Service[] = [
  /* -------------------------------------------------------------
   * Cloud Application
   * ----------------------------------------------------------- */
  {
    slug: "cloud-application",
    name: "Cloud Application",
    category: "Cloud",
    icon: "cloud",
    headline: "Cloud-native apps built to scale",
    summary:
      "We design and build cloud-native applications on AWS, Azure and Google Cloud that scale automatically, recover gracefully and keep infrastructure costs aligned with real usage.",
    heroCta: "Build Cloud-Native",
    overview: {
      title: "Applications designed for the cloud from the ground up",
      paragraphs: [
        `Running a traditional application on cloud servers captures only a small part of the cloud's value. ${siteConfig.name} builds applications designed natively for the cloud, using managed services, containers and serverless components that scale on demand and recover automatically from failure. Teams release faster, operations require less manual effort, and costs track actual usage instead of peak-capacity guesses.`,
        "Our cloud engineers design event-driven architectures, microservices and APIs with security, resilience and observability built in from the first commit. Infrastructure is defined as code, environments are reproducible, and deployment pipelines include automated testing and security scanning. Whether you are launching a new SaaS product or rebuilding a core platform, we help you choose services wisely and avoid unnecessary complexity or vendor lock-in.",
      ],
      highlights: [
        "Microservices, serverless and containers",
        "Infrastructure as code from day one",
        "Multi-region resilience patterns",
        "Cost-aware architecture decisions",
      ],
    },
    offerings: {
      title: "Cloud application services",
      subtitle:
        "Engineering services for building modern, resilient applications on leading public cloud platforms.",
      items: [
        {
          title: "Cloud-Native Development",
          description:
            "Applications built on managed databases, queues and compute services, designed to scale horizontally and remain available through infrastructure failures without manual intervention.",
          icon: "cloud",
        },
        {
          title: "Microservices Architecture",
          description:
            "Well-bounded services with independent deployment, clear API contracts and asynchronous messaging, enabling multiple teams to deliver features in parallel without stepping on each other.",
          icon: "boxes",
        },
        {
          title: "Serverless Solutions",
          description:
            "Function-based backends and event pipelines that run only when needed, ideal for unpredictable workloads, data processing and integrations where idle capacity would waste money.",
          icon: "zap",
        },
        {
          title: "Containerization & Kubernetes",
          description:
            "Containerized workloads orchestrated on managed Kubernetes, with autoscaling, service mesh and policy controls that provide portability and consistent operations across environments.",
          icon: "box",
        },
        {
          title: "SaaS Platform Engineering",
          description:
            "Multi-tenant architectures with tenant isolation, usage metering, regional data residency and self-service provisioning, giving software products a foundation to grow internationally.",
          icon: "layers",
        },
        {
          title: "Cloud Data & AI Services",
          description:
            "Data lakes, streaming pipelines and managed AI services integrated into applications, enabling real-time analytics, personalization and intelligent automation at scale.",
          icon: "brain",
        },
      ],
    },
    process: {
      title: "How we build cloud applications",
      steps: [
        {
          title: "Requirements & Workload Analysis",
          description:
            "We analyse functional needs, traffic patterns, data sensitivity and compliance obligations to shape architecture decisions grounded in reality.",
        },
        {
          title: "Architecture Design",
          description:
            "We select cloud services, define service boundaries, data stores and security controls, and document trade-offs in clear architecture decision records.",
        },
        {
          title: "Foundation Setup",
          description:
            "Landing zones, networking, identity and CI/CD pipelines are provisioned with infrastructure as code, giving every environment a consistent baseline.",
        },
        {
          title: "Iterative Development",
          description:
            "Features are built and deployed continuously, with automated tests, security scans and observability ensuring each release is production-ready.",
        },
        {
          title: "Launch & Scale",
          description:
            "We load test, tune autoscaling and cost controls, launch confidently, then refine performance and spending as real usage data arrives.",
        },
      ],
    },
    midCta: {
      title: "Building something that needs to scale?",
      subtitle:
        "Review your architecture with our cloud engineers and get recommendations on services, resilience and cost.",
      label: "Book an Architecture Review",
    },
    techStack: [
      {
        name: "Cloud Platforms",
        items: ["AWS", "Microsoft Azure", "Google Cloud", "Cloudflare Workers"],
      },
      {
        name: "Compute & Containers",
        items: ["Kubernetes", "Docker", "AWS Lambda", "Azure Functions", "Google Cloud Run", "Amazon ECS"],
      },
      {
        name: "Data & Messaging",
        items: ["Amazon DynamoDB", "Azure Cosmos DB", "PostgreSQL", "Apache Kafka", "Amazon SQS", "Redis"],
      },
      {
        name: "Infrastructure & Delivery",
        items: ["Terraform", "AWS CDK", "Pulumi", "GitHub Actions", "Argo CD"],
      },
    ],
    industries: [
      "startups",
      "banking-fintech",
      "telecommunication",
      "healthcare-pharmaceuticals",
      "gaming",
      "e-commerce-software-development",
    ],
    benefits: [
      {
        title: "Elastic by Design",
        description:
          "Applications scale up for demand spikes and down during quiet periods, matching cost to real usage.",
        icon: "scale",
      },
      {
        title: "Resilience Built In",
        description:
          "Redundancy, health checks and automated recovery keep services available when individual components fail.",
        icon: "shield",
      },
      {
        title: "Faster Releases",
        description:
          "Automated pipelines and independent services let teams ship improvements daily with confidence.",
        icon: "rocket",
      },
      {
        title: "Multi-Cloud Expertise",
        description:
          "Experience across major providers means recommendations are based on fit, not habit or vendor preference.",
        icon: "globe",
      },
    ],
    faqs: [
      {
        question: "Which cloud provider should we choose?",
        answer:
          "The right provider depends on your existing technology, team skills, data residency requirements, managed services needed and commercial agreements. We compare options against your priorities and recommend the platform, or combination of platforms, that offers the best long-term fit.",
      },
      {
        question: "Are microservices always the right choice?",
        answer:
          "No. Microservices add operational complexity that only pays off at a certain scale or team size. For many products, a well-structured modular application is faster to build and easier to run. We recommend the simplest architecture that meets your growth and reliability goals.",
      },
      {
        question: "How do you keep cloud costs under control?",
        answer: `${siteConfig.name} designs with cost in mind, choosing appropriate service tiers, autoscaling policies and storage classes. We tag resources, set budgets and alerts, and review spending regularly so cost surprises are caught early and optimization opportunities are acted on.`,
      },
      {
        question: "How do you address security in cloud applications?",
        answer:
          "We apply least-privilege identity policies, network segmentation, encryption in transit and at rest, secrets management and automated vulnerability scanning in pipelines. Security posture is continuously monitored, and we align controls with standards such as ISO 27001, SOC 2 or HIPAA where relevant.",
      },
    ],
  },

  /* -------------------------------------------------------------
   * Cloud Ops & Migration
   * ----------------------------------------------------------- */
  {
    slug: "cloud-migration-cloud-ops",
    name: "Cloud Ops & Migration",
    category: "Cloud",
    icon: "server",
    headline: "Move to cloud without disruption",
    summary:
      "We plan and execute low-risk migrations to the cloud, then operate your environments with automation, observability and FinOps discipline that keep them reliable and efficient.",
    heroCta: "Plan Your Migration",
    overview: {
      title: "Migration and operations as one continuous journey",
      paragraphs: [
        `Moving workloads to the cloud is only the beginning; the real value comes from operating them well afterwards. ${siteConfig.name} combines migration expertise with mature cloud operations, so applications land in well-architected environments and are run with automation rather than manual effort. We assess your portfolio, choose the right migration path for each workload and execute in carefully sequenced waves.`,
        "Each workload receives the treatment it deserves, whether that is a rehost, replatform, refactor or retirement. We build secure landing zones, automate infrastructure and deployments, and establish monitoring, incident response and cost governance before cutover. After migration, our cloud operations team manages availability, patching, backups and capacity, continuously optimizing performance and spending as your business evolves.",
      ],
      highlights: [
        "Portfolio assessment and wave planning",
        "Secure, well-architected landing zones",
        "Near-zero downtime cutovers",
        "Continuous FinOps and reliability engineering",
      ],
    },
    offerings: {
      title: "Cloud migration and operations services",
      subtitle:
        "From first assessment to steady-state operations, we manage every stage of your cloud journey.",
      items: [
        {
          title: "Cloud Readiness Assessment",
          description:
            "Discovery of applications, dependencies, licences and infrastructure, producing a business case, total cost comparison and recommended migration approach for each workload.",
          icon: "clipboard",
        },
        {
          title: "Landing Zone Design",
          description:
            "Multi-account or subscription structures, networking, identity, guardrails and logging configured as code to provide a secure, compliant foundation for every migrated workload.",
          icon: "map",
        },
        {
          title: "Application & Data Migration",
          description:
            "Wave-based migration of servers, databases and applications using replication and staged cutovers, minimizing downtime and validating data integrity at every step.",
          icon: "database",
        },
        {
          title: "DevOps & Automation",
          description:
            "CI/CD pipelines, infrastructure as code and configuration management that replace manual provisioning with repeatable, auditable and fast automated processes.",
          icon: "git",
        },
        {
          title: "Managed Cloud Operations",
          description:
            "Around-the-clock monitoring, incident response, patching, backup management and capacity planning, delivered against agreed service levels with transparent reporting.",
          icon: "monitor",
        },
        {
          title: "FinOps & Cost Optimization",
          description:
            "Rightsizing, reserved capacity planning, storage tiering and waste elimination combined with cost allocation dashboards that make cloud spending visible and accountable.",
          icon: "coins",
        },
      ],
    },
    process: {
      title: "Our migration and operations methodology",
      steps: [
        {
          title: "Discover & Assess",
          description:
            "Automated discovery and stakeholder interviews map applications, dependencies and performance baselines, informing a clear business case and migration strategy.",
        },
        {
          title: "Plan the Waves",
          description:
            "Workloads are grouped into migration waves by dependency, risk and business priority, with rollback plans and success criteria defined for each.",
        },
        {
          title: "Build the Foundation",
          description:
            "Landing zones, connectivity, security controls and operational tooling are deployed and validated before any production workload moves.",
        },
        {
          title: "Migrate & Validate",
          description:
            "Each wave is migrated, tested and cut over during agreed windows, with performance and data integrity verified against pre-migration baselines.",
        },
        {
          title: "Operate & Optimize",
          description:
            "Our operations team takes over run responsibilities, continuously improving reliability, security posture and cost efficiency through regular reviews.",
        },
      ],
    },
    midCta: {
      title: "Is your data center contract up for renewal?",
      subtitle:
        "Get a migration readiness assessment with a realistic timeline, cost comparison and risk plan.",
      label: "Request an Assessment",
    },
    techStack: [
      {
        name: "Migration Tooling",
        items: ["AWS Application Migration Service", "Azure Migrate", "Google Migrate to Virtual Machines", "AWS Database Migration Service"],
      },
      {
        name: "Infrastructure as Code",
        items: ["Terraform", "Ansible", "AWS CloudFormation", "Bicep", "Packer"],
      },
      {
        name: "Observability",
        items: ["Datadog", "Prometheus", "Grafana", "Amazon CloudWatch", "Azure Monitor", "PagerDuty"],
      },
      {
        name: "FinOps & Governance",
        items: ["AWS Cost Explorer", "Azure Cost Management", "Kubecost", "AWS Control Tower"],
      },
    ],
    industries: [
      "public-sector",
      "banking-fintech",
      "oil-gas-and-energy",
      "telecommunication",
      "healthcare-pharmaceuticals",
      "retail-and-cpg",
    ],
    benefits: [
      {
        title: "Low-Risk Execution",
        description:
          "Rehearsed cutovers, rollback plans and wave-based delivery protect business continuity throughout migration.",
        icon: "shield",
      },
      {
        title: "Automation Everywhere",
        description:
          "Infrastructure, deployments and routine operations are automated, reducing human error and operational overhead.",
        icon: "settings",
      },
      {
        title: "Visible Cloud Spending",
        description:
          "Cost dashboards and regular optimization reviews keep budgets predictable and eliminate waste.",
        icon: "wallet",
      },
      {
        title: "Single Partner Accountability",
        description:
          "The team that migrates your workloads also runs them, ensuring continuity of knowledge and responsibility.",
        icon: "handshake",
      },
    ],
    faqs: [
      {
        question: "How long does a cloud migration take?",
        answer:
          "Small estates with a handful of applications can move in a few weeks. Enterprise portfolios with hundreds of workloads typically migrate over six to eighteen months in planned waves. The assessment phase provides a realistic timeline based on your dependencies and constraints.",
      },
      {
        question: "Will our applications experience downtime during migration?",
        answer:
          "We design for minimal disruption using continuous replication, staged cutovers and agreed maintenance windows. Many workloads move with only minutes of downtime. Critical systems receive rehearsed cutover plans with clear rollback criteria to protect business operations.",
      },
      {
        question: "Should we refactor applications or simply rehost them?",
        answer:
          "Rehosting is fastest and suits stable workloads or tight deadlines. Refactoring delivers greater long-term benefits for applications under active development. We usually recommend a mix, moving quickly first and modernizing the highest-value applications once they are running in the cloud.",
      },
      {
        question: "What does managed cloud operations include?",
        answer: `${siteConfig.name} provides monitoring, incident management, patching, backups, security posture reviews, capacity planning and cost optimization. Service levels, escalation paths and reporting cadence are agreed upfront and tailored to the criticality of your workloads.`,
      },
    ],
  },

  /* -------------------------------------------------------------
   * Cloud Maintenance & Integration
   * ----------------------------------------------------------- */
  {
    slug: "cloud-maintenance-integration",
    name: "Cloud Maintenance & Integration",
    category: "Cloud",
    icon: "network",
    headline: "Connected, healthy cloud ecosystems",
    summary:
      "We keep cloud platforms secure, patched and performant while integrating SaaS, on-premise and cloud systems into a reliable, well-governed data and process landscape.",
    heroCta: "Strengthen Your Cloud",
    overview: {
      title: "Keeping cloud estates healthy and connected",
      paragraphs: [
        `Cloud environments drift over time as teams add services, change configurations and adopt new SaaS tools. Without disciplined maintenance, security gaps, outdated runtimes and fragile integrations accumulate quietly. ${siteConfig.name} provides structured cloud maintenance that keeps platforms current, compliant and well documented, so your applications stay reliable and your teams avoid the costly surprises that come from neglected infrastructure.`,
        "Alongside maintenance, we design and run the integrations that hold your digital landscape together. Using API management, event streaming and integration platforms, we connect cloud applications, SaaS products and on-premise systems with consistent security and monitoring. Data moves reliably between systems, failures are detected and retried automatically, and every integration is versioned and documented for easier change management in the future.",
      ],
      highlights: [
        "Proactive patching and runtime upgrades",
        "Security posture and compliance monitoring",
        "API-led and event-driven integration",
        "Documented, observable integration flows",
      ],
    },
    offerings: {
      title: "Cloud maintenance and integration services",
      subtitle:
        "Ongoing care for your cloud platforms and the integrations that connect your business systems.",
      items: [
        {
          title: "Platform Health Management",
          description:
            "Scheduled patching, runtime and dependency upgrades, certificate renewals and configuration drift detection that keep cloud environments secure, supported and consistent with approved baselines.",
          icon: "wrench",
        },
        {
          title: "Security & Compliance Monitoring",
          description:
            "Continuous posture assessment, vulnerability management and policy enforcement mapped to frameworks such as ISO 27001 and SOC 2, with remediation tracked through to closure.",
          icon: "lock",
        },
        {
          title: "API Management",
          description:
            "Centralized gateways with authentication, rate limiting, versioning and developer portals that make internal and partner APIs secure, discoverable and easy to consume.",
          icon: "server",
        },
        {
          title: "Enterprise Integration",
          description:
            "Integration flows connecting ERP, CRM, HR, finance and SaaS platforms through iPaaS or custom middleware, eliminating manual data transfers and inconsistent records.",
          icon: "network",
        },
        {
          title: "Event Streaming & Messaging",
          description:
            "Event-driven architectures using managed brokers and streaming platforms that move data between systems in near real time, decoupling producers and consumers for greater resilience.",
          icon: "radio",
        },
        {
          title: "Backup & Disaster Recovery",
          description:
            "Backup policies, cross-region replication and documented recovery runbooks, validated through regular drills so recovery time and recovery point objectives are proven, not assumed.",
          icon: "shield",
        },
      ],
    },
    process: {
      title: "How we maintain and integrate",
      steps: [
        {
          title: "Baseline Assessment",
          description:
            "We inventory cloud resources, integrations and configurations, scoring them for security, supportability and reliability to identify priority risks.",
        },
        {
          title: "Remediation Roadmap",
          description:
            "Findings become a prioritized roadmap covering urgent fixes, upgrades, integration redesigns and governance improvements with clear owners and timelines.",
        },
        {
          title: "Integration Design",
          description:
            "For new or reworked integrations, we define contracts, data mappings, error handling and monitoring before building anything.",
        },
        {
          title: "Implement & Automate",
          description:
            "Fixes, upgrades and integrations are delivered through automated pipelines and infrastructure as code, keeping every change traceable and repeatable.",
        },
        {
          title: "Sustain & Report",
          description:
            "Ongoing maintenance cycles, monitoring and monthly health reports keep the environment stable and stakeholders informed of progress.",
        },
      ],
    },
    midCta: {
      title: "Unsure how healthy your cloud really is?",
      subtitle:
        "Our cloud health check highlights security gaps, outdated components and fragile integrations, with a clear plan to fix them.",
      label: "Run a Cloud Health Check",
    },
    techStack: [
      {
        name: "Integration Platforms",
        items: ["MuleSoft", "Azure Integration Services", "Boomi", "Apache Camel", "AWS Step Functions"],
      },
      {
        name: "APIs & Messaging",
        items: ["Azure API Management", "Amazon API Gateway", "Kong", "Apache Kafka", "RabbitMQ", "Amazon SNS"],
      },
      {
        name: "Security & Compliance",
        items: ["Microsoft Defender for Cloud", "AWS Security Hub", "HashiCorp Vault", "Wiz", "Trivy"],
      },
      {
        name: "Backup & Recovery",
        items: ["AWS Backup", "Azure Site Recovery", "Veeam", "Velero"],
      },
    ],
    industries: [
      "public-sector",
      "banking-fintech",
      "healthcare-pharmaceuticals",
      "oil-gas-and-energy",
      "telecommunication",
      "education",
    ],
    benefits: [
      {
        title: "Proactive Risk Reduction",
        description:
          "Regular patching and posture reviews close vulnerabilities before they become incidents or audit findings.",
        icon: "shield",
      },
      {
        title: "Reliable Data Flow",
        description:
          "Monitored, self-healing integrations keep information consistent across every system your teams depend on.",
        icon: "workflow",
      },
      {
        title: "Audit-Ready Documentation",
        description:
          "Every environment and integration is documented and versioned, simplifying compliance reviews and onboarding.",
        icon: "file",
      },
      {
        title: "Predictable Operations",
        description:
          "Scheduled maintenance windows and clear reporting reduce unplanned downtime and firefighting.",
        icon: "target",
      },
    ],
    faqs: [
      {
        question: "What does ongoing cloud maintenance cover?",
        answer: `${siteConfig.name} maintenance plans cover OS and runtime patching, dependency upgrades, certificate management, configuration drift checks, backup verification and security posture monitoring. Each month you receive a report detailing completed work, open risks and recommended improvements.`,
      },
      {
        question: "Can you integrate cloud applications with on-premise systems?",
        answer:
          "Yes. We use secure connectivity such as private links, VPNs or hybrid gateways, combined with integration platforms or custom middleware, to connect on-premise systems with cloud and SaaS applications while respecting your security and data residency requirements.",
      },
      {
        question: "How do you handle integration failures?",
        answer:
          "Integrations are designed with retries, dead-letter queues, idempotent processing and alerting. When a failure occurs, the affected messages are preserved, our team is notified, and data is reprocessed once the root cause is fixed, preventing silent data loss.",
      },
      {
        question: "Do you work with multi-cloud environments?",
        answer:
          "Yes. Many organizations run workloads across more than one provider alongside SaaS platforms. We apply consistent governance, monitoring and integration patterns across these environments so your teams manage a single coherent landscape rather than isolated silos.",
      },
    ],
  },
];
