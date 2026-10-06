import type { Service } from "../types";
import { siteConfig } from "@/config/site";

export const emergingServices: Service[] = [
  /* -------------------------------------------------------------
   * Metaverse
   * ----------------------------------------------------------- */
  {
    slug: "metaverse",
    name: "Metaverse",
    category: "Emerging Technologies",
    icon: "globe",
    headline: "Persistent Virtual Worlds Built for Business",
    summary:
      "We design and engineer shared 3D environments, digital twins and immersive commerce spaces that turn virtual presence into measurable engagement, training outcomes and revenue.",
    heroCta: "Plan Your Virtual Space",
    overview: {
      title: "Immersive environments with a real business purpose",
      paragraphs: [
        `Most virtual-world projects stall because they start with spectacle instead of a use case. ${siteConfig.name} begins with the outcome you need, whether that is a showroom that shortens sales cycles, a training simulation that cuts onboarding time or a digital twin that lets engineers rehearse maintenance before touching live equipment, and then builds the world around it.`,
        "Our teams combine real-time 3D engineering, multiplayer networking, identity and payments integration so your environment behaves like a production system rather than a demo. We plan for concurrency, moderation, analytics and content updates from day one, which means the space keeps earning its place long after launch day.",
      ],
      highlights: [
        "Use-case-first world design",
        "Scalable multiplayer backends",
        "Cross-device: web, desktop and headsets",
        "Built-in analytics and moderation",
      ],
    },
    offerings: {
      title: "Metaverse capabilities we deliver",
      subtitle:
        "From a single branded venue to a federated network of interoperable spaces, we cover the full engineering stack.",
      items: [
        {
          title: "Virtual Showrooms & Venues",
          description:
            "Branded 3D spaces where customers explore products at true scale, talk to live representatives and complete purchases without leaving the experience, all tracked through your existing CRM and commerce stack.",
          icon: "store",
        },
        {
          title: "Industrial Digital Twins",
          description:
            "Live, sensor-fed replicas of plants, warehouses or campuses that let operations teams visualise performance, simulate changes and plan interventions before committing people or capital in the physical world.",
          icon: "layers",
        },
        {
          title: "Immersive Training Simulations",
          description:
            "Scenario-based learning environments for high-risk or high-cost procedures, with branching logic, performance scoring and LMS integration so managers can see exactly where each trainee needs more practice.",
          icon: "education",
        },
        {
          title: "Multiplayer & Social Infrastructure",
          description:
            "Authoritative servers, voice chat, presence, matchmaking and moderation tooling engineered to hold thousands of concurrent users while keeping latency low and behaviour within your community guidelines.",
          icon: "users",
        },
        {
          title: "Avatar & Identity Systems",
          description:
            "Customisable avatars tied to enterprise single sign-on or consumer accounts, with persistent inventories and permissions so users carry their identity, entitlements and history across every space you operate.",
          icon: "eye",
        },
        {
          title: "Virtual Economy Design",
          description:
            "In-world currencies, digital goods, ticketing and creator payouts designed with clear rules, fraud controls and reporting, so virtual transactions reconcile cleanly with your finance and tax processes.",
          icon: "coins",
        },
      ],
    },
    process: {
      title: "How we bring a virtual world to life",
      steps: [
        {
          title: "Use-Case Discovery",
          description:
            "We workshop with stakeholders to define the audience, the core journey and the business metric the space must move, then agree on scope and success criteria.",
        },
        {
          title: "World & Experience Design",
          description:
            "Designers produce spatial layouts, interaction flows and art direction, validated through grey-box prototypes that real users can walk through within the first weeks.",
        },
        {
          title: "Engine & Backend Build",
          description:
            "Engineers build scenes, networking, identity, commerce and content pipelines in parallel sprints, with performance budgets enforced for every target device from the start.",
        },
        {
          title: "Load & Comfort Testing",
          description:
            "We stress-test concurrency, frame rates and motion comfort across headsets and browsers, fixing bottlenecks and accessibility gaps before any public audience arrives.",
        },
        {
          title: "Launch & Live Operations",
          description:
            "We support the launch event, monitor usage dashboards and ship regular content drops, keeping the world fresh and steadily improving the metrics agreed at discovery.",
        },
      ],
    },
    midCta: {
      title: "Have a virtual experience in mind?",
      subtitle:
        "Share your goal and we will map out a prototype you can walk through in weeks, not quarters.",
      label: "Book a Discovery Session",
    },
    techStack: [
      {
        name: "Real-Time Engines",
        items: ["Unity", "Unreal Engine", "Three.js", "Babylon.js", "PlayCanvas"],
      },
      {
        name: "Networking & Backend",
        items: ["Photon", "Colyseus", "Node.js", "WebRTC", "Redis", "Agones"],
      },
      {
        name: "3D Content Pipeline",
        items: ["Blender", "Autodesk Maya", "Substance 3D", "glTF", "Houdini"],
      },
      {
        name: "Devices & Platforms",
        items: ["Meta Quest", "Apple Vision Pro", "WebXR", "OpenXR", "Pico"],
      },
    ],
    industries: [
      "retail-and-cpg",
      "real-estate",
      "education",
      "oil-gas-and-energy",
      "gaming",
      "travel-hospitality",
    ],
    benefits: [
      {
        title: "Outcome-Led Scoping",
        description:
          "Every world we build is tied to a measurable business goal, so investment decisions are grounded in data rather than novelty.",
        icon: "target",
      },
      {
        title: "Production-Grade Engineering",
        description:
          "Our backends are built with the same rigour as enterprise platforms: observability, autoscaling, security reviews and disaster recovery included.",
        icon: "server",
      },
      {
        title: "Device-Agnostic Delivery",
        description:
          "One content pipeline targets browsers, desktops, mobiles and headsets, so you reach audiences wherever they are without rebuilding assets.",
        icon: "monitor",
      },
      {
        title: "Long-Term Live Ops",
        description:
          "We stay on after launch to run events, ship updates and tune performance, keeping engagement high month after month.",
        icon: "rocket",
      },
    ],
    faqs: [
      {
        question: "Do users need a VR headset to access the experience?",
        answer:
          "No. We typically build for the browser first so anyone with a laptop or phone can join instantly, then add headset support for users who want deeper immersion. A shared content pipeline keeps both versions in sync without doubling your production costs.",
      },
      {
        question: "How long does it take to launch a first virtual space?",
        answer:
          "A focused single-venue experience usually reaches a walkable prototype in four to six weeks and a public launch in three to four months. Larger multi-space worlds or digital twins fed by live operational data take longer and are typically delivered in phased releases.",
      },
      {
        question: "Can the environment connect to our existing systems?",
        answer:
          "Yes. We integrate with CRMs, commerce platforms, learning management systems, identity providers and IoT data feeds through secure APIs. This lets virtual activity, such as a product viewed or a course completed, flow directly into the reporting your teams already rely on.",
      },
      {
        question: "Who owns the 3D assets and source code?",
        answer: `You do. ${siteConfig.name} transfers full ownership of source code, 3D assets and documentation on delivery. We use open formats such as glTF wherever practical so your content remains portable across engines and platforms in the future.`,
      },
    ],
  },

  /* -------------------------------------------------------------
   * Augmented Reality
   * ----------------------------------------------------------- */
  {
    slug: "augmented-reality",
    name: "Augmented Reality",
    category: "Emerging Technologies",
    icon: "glasses",
    headline: "Digital Insight Layered on Reality",
    summary:
      "We build augmented reality apps that overlay guidance, product visuals and live data onto the physical world, helping customers decide faster and frontline teams work safer.",
    heroCta: "Start Your AR Project",
    overview: {
      title: "AR that solves problems on the ground",
      paragraphs: [
        `Augmented reality earns its value when it removes friction from a real task: a shopper unsure whether a sofa fits, a technician hunting for the right valve, a student struggling to picture a molecule. ${siteConfig.name} designs AR experiences around those moments, keeping interactions simple enough that users succeed on the first try.`,
        "Our engineers work across mobile AR frameworks, web-based AR and head-mounted displays, choosing the delivery channel that matches your audience. We handle 3D asset optimisation, spatial tracking, occlusion and lighting so overlays look anchored and believable, and we connect them to your back-office data so what users see is always current.",
      ],
      highlights: [
        "Mobile, web and headset AR",
        "Photorealistic, lightweight 3D assets",
        "Live data overlays from your systems",
        "Field-tested usability",
      ],
    },
    offerings: {
      title: "Augmented reality solutions",
      subtitle:
        "Purpose-built AR experiences for commerce, operations, learning and marketing.",
      items: [
        {
          title: "Virtual Try-On & Product Preview",
          description:
            "Let shoppers place furniture in their room, try on eyewear or preview packaging at true scale, reducing uncertainty at the point of purchase and lowering costly returns.",
          icon: "cart",
        },
        {
          title: "Remote Expert Assistance",
          description:
            "Connect frontline workers with specialists who can see their camera feed and draw spatial annotations directly onto equipment, resolving faults without waiting for an on-site visit.",
          icon: "headphones",
        },
        {
          title: "Step-by-Step Work Instructions",
          description:
            "Replace thick manuals with animated, anchored instructions that guide technicians through assembly, inspection or maintenance tasks one verified step at a time.",
          icon: "clipboard",
        },
        {
          title: "Web AR Campaigns",
          description:
            "App-free experiences launched from a QR code or link, ideal for packaging activations, print campaigns and events where asking users to download an app would kill participation.",
          icon: "megaphone",
        },
        {
          title: "Indoor Navigation & Wayfinding",
          description:
            "Turn-by-turn AR directions inside airports, hospitals, malls and campuses, using spatial anchors and beacons where GPS cannot reach and floor plans change frequently.",
          icon: "compass",
        },
        {
          title: "Educational & Training Overlays",
          description:
            "Interactive 3D models that students and trainees can rotate, dissect and explore on any desk, turning abstract concepts into hands-on understanding they retain longer.",
          icon: "book",
        },
      ],
    },
    process: {
      title: "Our AR delivery approach",
      steps: [
        {
          title: "Context Research",
          description:
            "We observe where and how users will hold the device, including lighting, connectivity and safety constraints, to shape an experience that works in real conditions.",
        },
        {
          title: "Interaction Prototyping",
          description:
            "Rapid prototypes test placement, gestures and onboarding cues with real users, so we lock down the interaction model before investing in final art.",
        },
        {
          title: "3D Asset Production",
          description:
            "Artists build or convert models into optimised, physically based assets that load quickly on mid-range phones while still looking convincing up close.",
        },
        {
          title: "Integration & Engineering",
          description:
            "We connect the AR layer to catalogues, IoT feeds or knowledge bases and implement tracking, analytics and offline modes for patchy network environments.",
        },
        {
          title: "Device Testing & Release",
          description:
            "The experience is validated across a matrix of devices and environments, then published to app stores or the web with usage dashboards ready on day one.",
        },
      ],
    },
    midCta: {
      title: "See your product in the real world",
      subtitle:
        "Tell us about your use case and we will show you a working AR concept on your own device.",
      label: "Request an AR Demo",
    },
    techStack: [
      {
        name: "AR Frameworks",
        items: ["ARKit", "ARCore", "Unity AR Foundation", "Vuforia", "8th Wall"],
      },
      {
        name: "Web AR & 3D",
        items: ["WebXR", "Three.js", "model-viewer", "A-Frame", "Babylon.js"],
      },
      {
        name: "Headsets & Wearables",
        items: ["Apple Vision Pro", "Microsoft HoloLens 2", "Magic Leap 2", "Meta Quest 3"],
      },
      {
        name: "Asset Pipeline",
        items: ["Blender", "Reality Composer", "USDZ", "glTF", "Substance 3D"],
      },
    ],
    industries: [
      "retail-and-cpg",
      "e-commerce-software-development",
      "healthcare-pharmaceuticals",
      "education",
      "real-estate",
      "oil-gas-and-energy",
    ],
    benefits: [
      {
        title: "Channel-Fit Advice",
        description:
          "We recommend app, web or headset AR based on your audience and budget, not on whichever technology is trending.",
        icon: "lightbulb",
      },
      {
        title: "Performance on Real Devices",
        description:
          "Assets and code are tuned for mid-range phones, so experiences stay smooth for the majority of your users, not just flagship owners.",
        icon: "zap",
      },
      {
        title: "Data-Connected Overlays",
        description:
          "Our AR layers pull from your live systems, so prices, stock levels and equipment readings are always accurate.",
        icon: "database",
      },
      {
        title: "Measurable Impact",
        description:
          "Built-in analytics track placements, dwell time and conversions so you can prove the experience pays for itself.",
        icon: "chart",
      },
    ],
    faqs: [
      {
        question: "Should we build a native AR app or use web AR?",
        answer:
          "Web AR is best for campaigns and one-off interactions because users can join instantly from a link. Native apps offer more precise tracking, persistent anchors and offline use, making them better for repeat workflows such as field maintenance. We often recommend starting on the web and adding native features later.",
      },
      {
        question: "Can you convert our existing CAD or product files?",
        answer:
          "Yes. We routinely convert CAD, CGI and photogrammetry data into lightweight real-time assets. Our pipeline reduces polygon counts and bakes textures so models load quickly on mobile while preserving the details customers and technicians care about most.",
      },
      {
        question: "How accurate is AR placement and measurement?",
        answer:
          "On modern devices with depth sensors, placement is typically accurate within a centimetre or two for room-scale use. For industrial tasks that need higher precision, we combine visual markers, model-based tracking or external sensors to tighten tolerances to what the job requires.",
      },
      {
        question: "Does AR work in low-light or outdoor environments?",
        answer:
          "Tracking quality depends on lighting and surface texture. During discovery we test in the actual environment and, where conditions are challenging, use markers, geospatial anchors or headset-based tracking to keep overlays stable. We design fallbacks so users are never left stuck.",
      },
    ],
  },

  /* -------------------------------------------------------------
   * Blockchain & Cryptography
   * ----------------------------------------------------------- */
  {
    slug: "blockchain-cryptography",
    name: "Blockchain & Cryptography",
    category: "Emerging Technologies",
    icon: "boxes",
    headline: "Verifiable Trust, Engineered In",
    summary:
      "We architect blockchain networks, smart contracts and cryptographic systems that make transactions tamper-evident, automate multi-party agreements and protect sensitive data by design.",
    heroCta: "Explore Blockchain Solutions",
    overview: {
      title: "Distributed ledgers where they genuinely add value",
      paragraphs: [
        `Not every problem needs a blockchain, and ${siteConfig.name} will tell you when a conventional database is the smarter choice. Where multiple organisations must share a single version of the truth without trusting a central operator, though, distributed ledgers and modern cryptography can remove reconciliation work, shorten settlement cycles and create audit trails that regulators can verify independently.`,
        "Our engineers build on public, permissioned and hybrid networks, writing smart contracts that are formally reviewed and thoroughly tested before deployment. Alongside ledgers, we apply zero-knowledge proofs, threshold signatures and secure key management to protect privacy and custody, giving you the transparency of shared infrastructure without exposing commercially sensitive data.",
      ],
      highlights: [
        "Honest feasibility assessment",
        "Audited, test-driven smart contracts",
        "Public, private and hybrid networks",
        "Privacy-preserving cryptography",
      ],
    },
    offerings: {
      title: "Blockchain and cryptography services",
      subtitle:
        "End-to-end engineering for decentralised applications, digital assets and secure data exchange.",
      items: [
        {
          title: "Smart Contract Development",
          description:
            "Gas-efficient, upgrade-safe contracts for escrow, lending, royalties and governance, backed by extensive unit, fuzz and invariant testing plus independent review before mainnet deployment.",
          icon: "file",
        },
        {
          title: "Permissioned Enterprise Networks",
          description:
            "Consortium ledgers for supply chains, trade finance and inter-company settlement, with node governance, identity management and privacy channels configured to match your partners' requirements.",
          icon: "network",
        },
        {
          title: "Asset Tokenisation",
          description:
            "Represent real estate, carbon credits, loyalty points or fund units as programmable tokens with transfer restrictions, investor whitelisting and compliance hooks built directly into the logic.",
          icon: "coins",
        },
        {
          title: "Wallets & Key Custody",
          description:
            "Custodial and self-custody wallets using multi-party computation, hardware security modules and social recovery, balancing strong protection of keys with an approachable user experience.",
          icon: "wallet",
        },
        {
          title: "Zero-Knowledge Applications",
          description:
            "Prove facts such as age, solvency or credential validity without revealing the underlying data, enabling privacy-preserving compliance checks and selective disclosure between organisations.",
          icon: "lock",
        },
        {
          title: "Security Audits & Reviews",
          description:
            "Line-by-line reviews of contracts and cryptographic implementations, threat modelling of protocol economics and remediation guidance that your developers can act on immediately.",
          icon: "shield",
        },
      ],
    },
    process: {
      title: "From concept to mainnet",
      steps: [
        {
          title: "Feasibility & Architecture",
          description:
            "We assess whether a ledger is warranted, select the right network model and design the on-chain and off-chain split, governance and data flows.",
        },
        {
          title: "Protocol & Token Design",
          description:
            "We specify contract interfaces, token mechanics, roles and upgrade paths, modelling edge cases and economic incentives before any code is written.",
        },
        {
          title: "Test-Driven Build",
          description:
            "Contracts and services are developed alongside comprehensive automated tests, with continuous static analysis catching common vulnerability patterns at every commit.",
        },
        {
          title: "Audit & Testnet Pilot",
          description:
            "Code undergoes internal and third-party review, then runs on a public or private testnet with real users to validate behaviour under realistic conditions.",
        },
        {
          title: "Mainnet Launch & Monitoring",
          description:
            "We manage deployment, configure on-chain monitoring and alerting, and provide incident response procedures so issues are caught and contained quickly.",
        },
      ],
    },
    midCta: {
      title: "Wondering if blockchain fits your use case?",
      subtitle:
        "Our architects will give you a straight answer and a practical roadmap, whichever way it lands.",
      label: "Get a Feasibility Review",
    },
    techStack: [
      {
        name: "Networks",
        items: ["Ethereum", "Polygon", "Hyperledger Fabric", "Solana", "Arbitrum", "Corda"],
      },
      {
        name: "Smart Contract Tooling",
        items: ["Solidity", "Rust", "Foundry", "Hardhat", "OpenZeppelin", "Slither"],
      },
      {
        name: "Cryptography & Custody",
        items: ["Circom", "zkSync", "AWS CloudHSM", "HashiCorp Vault", "libsodium"],
      },
      {
        name: "Integration",
        items: ["ethers.js", "The Graph", "Chainlink", "IPFS", "Node.js"],
      },
    ],
    industries: [
      "banking-fintech",
      "real-estate",
      "gaming",
      "public-sector",
      "oil-gas-and-energy",
      "startups",
    ],
    benefits: [
      {
        title: "Security-First Culture",
        description:
          "Threat modelling, automated analysis and independent reviews are part of every engagement, not optional extras.",
        icon: "shield",
      },
      {
        title: "Vendor-Neutral Guidance",
        description:
          "We are not tied to any single chain, so recommendations are based on cost, throughput, privacy and ecosystem fit.",
        icon: "scale",
      },
      {
        title: "Enterprise Integration",
        description:
          "We connect ledgers to ERPs, payment rails and identity systems so blockchain becomes part of your operations, not a silo.",
        icon: "puzzle",
      },
      {
        title: "Regulatory Awareness",
        description:
          "Designs account for KYC, AML and data-protection obligations, with compliance controls expressed directly in contract logic where appropriate.",
        icon: "award",
      },
    ],
    faqs: [
      {
        question: "How do we know if we actually need a blockchain?",
        answer:
          "Blockchain is most useful when several parties who do not fully trust each other need to share and update the same records. If one organisation controls all the data, a conventional database is usually faster and cheaper. Our feasibility review weighs these factors and recommends the simplest architecture that meets your goals.",
      },
      {
        question: "Can smart contracts be updated after deployment?",
        answer:
          "Yes, if they are designed for it. We use proven upgrade patterns with timelocks and multi-signature governance so changes are transparent and cannot be made unilaterally. For contracts where immutability is a feature, we plan migration paths instead of in-place upgrades.",
      },
      {
        question: "How do you keep sensitive business data private on a shared ledger?",
        answer:
          "We keep confidential data off-chain and store only hashes or commitments on the ledger, use private channels in permissioned networks, and apply zero-knowledge proofs where parties need to verify information without seeing it. The approach depends on your regulatory and partner requirements.",
      },
      {
        question: "Do you provide audits for contracts written by other teams?",
        answer: `Yes. ${siteConfig.name} reviews existing smart contracts and cryptographic code, combining automated analysis with manual review by experienced engineers. You receive a prioritised findings report with clear remediation steps, and we can re-verify fixes once your team has applied them.`,
      },
    ],
  },

  /* -------------------------------------------------------------
   * Generative AI
   * ----------------------------------------------------------- */
  {
    slug: "genai",
    name: "Generative AI",
    category: "Emerging Technologies",
    icon: "sparkles",
    headline: "Generative AI That Ships to Production",
    summary:
      "We turn large language models and generative tools into secure, grounded applications, from knowledge assistants to autonomous agents, that deliver reliable results inside your workflows.",
    heroCta: "Build With Generative AI",
    overview: {
      title: "From promising pilot to dependable product",
      paragraphs: [
        `Generative AI demos are easy; systems your staff and customers can rely on every day are not. ${siteConfig.name} focuses on the hard parts: grounding model output in your own data, evaluating quality with repeatable test suites, controlling cost per request and wrapping everything in the security and governance that regulated organisations require.`,
        "We work model-agnostically, combining commercial APIs with open-weight models hosted in your own cloud when data residency or cost demands it. Retrieval pipelines, tool-calling agents, guardrails and human review loops are engineered as first-class components, so your AI features improve over time instead of drifting quietly into unreliability.",
      ],
      highlights: [
        "Model-agnostic architecture",
        "Retrieval grounded in your data",
        "Automated evaluation and guardrails",
        "Cost and latency optimisation",
      ],
    },
    offerings: {
      title: "Generative AI services",
      subtitle:
        "Practical generative AI engineering, from first use-case workshop to monitored production deployment.",
      items: [
        {
          title: "Enterprise Knowledge Assistants",
          description:
            "Conversational assistants that answer questions from policies, contracts, tickets and wikis with cited sources, respecting existing document permissions so users only see what they are entitled to.",
          icon: "message",
        },
        {
          title: "AI Agents & Workflow Automation",
          description:
            "Agents that call your APIs to triage requests, draft responses, update records and escalate exceptions, with approval checkpoints wherever a human decision is legally or commercially required.",
          icon: "bot",
        },
        {
          title: "Retrieval-Augmented Generation",
          description:
            "Ingestion, chunking, embedding and hybrid search pipelines that feed models the right context at the right time, dramatically reducing hallucinations and keeping answers current as content changes.",
          icon: "database",
        },
        {
          title: "Model Fine-Tuning & Hosting",
          description:
            "Adapt open-weight models to your terminology, tone and task formats, then deploy them on optimised inference infrastructure inside your own cloud for privacy, control and predictable costs.",
          icon: "cpu",
        },
        {
          title: "Content & Document Generation",
          description:
            "Structured generation of reports, product descriptions, proposals and summaries that follow your templates and brand rules, with validation layers that catch errors before anything is published.",
          icon: "pen",
        },
        {
          title: "Evaluation, Safety & Governance",
          description:
            "Automated test sets, red-teaming, prompt-injection defences, PII redaction and usage logging that give risk, legal and compliance teams the evidence they need to approve wider rollout.",
          icon: "shield",
        },
      ],
    },
    process: {
      title: "Our generative AI delivery framework",
      steps: [
        {
          title: "Use-Case Prioritisation",
          description:
            "We score candidate use cases by value, feasibility and risk, then select one or two where generative AI can show measurable impact quickly.",
        },
        {
          title: "Data & Evaluation Baseline",
          description:
            "We audit the source content, define what a good answer looks like and build an evaluation set so quality can be measured objectively from the start.",
        },
        {
          title: "Prototype & Iterate",
          description:
            "Engineers compare models, prompts and retrieval strategies against the evaluation set, iterating until accuracy, latency and cost meet agreed thresholds.",
        },
        {
          title: "Harden & Integrate",
          description:
            "We add guardrails, access controls, observability and fallbacks, then embed the capability into the applications and channels your users already work in.",
        },
        {
          title: "Monitor & Improve",
          description:
            "Production traces, user feedback and scheduled evaluations feed continuous improvement, catching regressions whenever models, data or prompts change.",
        },
      ],
    },
    midCta: {
      title: "Ready to move past the pilot stage?",
      subtitle:
        "Bring us your most promising use case and we will outline a path to a production-ready release.",
      label: "Schedule an AI Workshop",
    },
    techStack: [
      {
        name: "Models & APIs",
        items: ["Claude", "GPT-4o", "Gemini", "Llama", "Mistral", "Amazon Bedrock"],
      },
      {
        name: "Orchestration",
        items: ["LangChain", "LlamaIndex", "LangGraph", "Semantic Kernel", "DSPy"],
      },
      {
        name: "Retrieval & Storage",
        items: ["pgvector", "Pinecone", "Weaviate", "Elasticsearch", "Qdrant"],
      },
      {
        name: "Serving & Observability",
        items: ["vLLM", "Hugging Face", "LangSmith", "Langfuse", "Kubernetes"],
      },
    ],
    industries: [
      "banking-fintech",
      "healthcare-pharmaceuticals",
      "telecommunication",
      "retail-and-cpg",
      "public-sector",
      "education",
    ],
    benefits: [
      {
        title: "Evaluation-Driven Engineering",
        description:
          "Every change is measured against a test suite, so quality improvements are proven rather than assumed.",
        icon: "test",
      },
      {
        title: "Data Stays Protected",
        description:
          "Private deployments, redaction and permission-aware retrieval keep sensitive information inside your control boundary.",
        icon: "lock",
      },
      {
        title: "Predictable Running Costs",
        description:
          "Caching, model routing and prompt optimisation keep cost per interaction low as usage scales.",
        icon: "coins",
      },
      {
        title: "Built for Change",
        description:
          "Model-agnostic architecture lets you adopt better or cheaper models as they emerge without rewriting your application.",
        icon: "workflow",
      },
    ],
    faqs: [
      {
        question: "Will our data be used to train public AI models?",
        answer:
          "No. We use enterprise API agreements that exclude customer data from training, or host open-weight models entirely inside your own cloud account. Access controls, encryption and audit logging are configured so you can demonstrate to regulators exactly where data flows.",
      },
      {
        question: "How do you reduce hallucinations?",
        answer:
          "We ground answers in retrieved source documents, require citations, constrain output formats and run automated checks that flag unsupported claims. Evaluation suites measure factual accuracy before every release, and low-confidence responses can be routed to a human reviewer instead of reaching the user.",
      },
      {
        question: "Which model should we use?",
        answer:
          "It depends on the task, data sensitivity, latency targets and budget. We benchmark several commercial and open-weight models against your own evaluation set and often route different requests to different models, using a smaller, cheaper model where it performs just as well.",
      },
      {
        question: "How quickly can we see results?",
        answer: `Most clients see a working prototype measured against real data within four to six weeks. ${siteConfig.name} then hardens the solution for production over the following one to three months, depending on integration complexity, security reviews and the number of user groups involved.`,
      },
    ],
  },

  /* -------------------------------------------------------------
   * Data Analytics & Insights
   * ----------------------------------------------------------- */
  {
    slug: "data-analytics-and-insights",
    name: "Data Analytics & Insights",
    category: "Emerging Technologies",
    icon: "chart",
    headline: "Decisions Backed by Trusted Data",
    summary:
      "We build modern data platforms, governed pipelines and self-service analytics that turn scattered operational data into timely, trusted insight for every level of your organisation.",
    heroCta: "Unlock Your Data",
    overview: {
      title: "One reliable version of the truth",
      paragraphs: [
        `When finance, sales and operations each report a different number for the same metric, meetings turn into debates about data instead of decisions. ${siteConfig.name} fixes the foundations: we consolidate sources into a well-modelled platform, define metrics once in a shared semantic layer and automate quality checks so everyone works from figures they can trust.`,
        "On top of that foundation we deliver dashboards, embedded analytics and predictive models designed around the decisions people actually make. Our engineers favour modular, cloud-native architectures with clear ownership and lineage, so your data estate stays maintainable as new sources, teams and questions inevitably appear.",
      ],
      highlights: [
        "Modern cloud data platforms",
        "Shared metric definitions",
        "Automated data quality checks",
        "Self-service dashboards and forecasting",
      ],
    },
    offerings: {
      title: "Data and analytics services",
      subtitle:
        "Everything needed to collect, organise, analyse and act on your data with confidence.",
      items: [
        {
          title: "Data Platform Modernisation",
          description:
            "Migrate from legacy warehouses and spreadsheets to scalable lakehouse or cloud warehouse architectures that separate storage from compute and cut both query times and running costs.",
          icon: "server",
        },
        {
          title: "Data Engineering & Pipelines",
          description:
            "Reliable batch and streaming pipelines that ingest from ERPs, CRMs, apps and devices, with version-controlled transformations, retries and alerting whenever a source misbehaves.",
          icon: "workflow",
        },
        {
          title: "Business Intelligence & Dashboards",
          description:
            "Role-specific dashboards that answer the questions executives, managers and analysts ask most, designed for clarity on desktop and mobile and refreshed on schedules that match each decision.",
          icon: "chart",
        },
        {
          title: "Predictive & Prescriptive Analytics",
          description:
            "Machine learning models for demand forecasting, churn prediction, pricing and anomaly detection, deployed with monitoring so accuracy is tracked and retraining happens before performance slips.",
          icon: "brain",
        },
        {
          title: "Data Governance & Quality",
          description:
            "Catalogues, lineage, access policies and automated tests that make data discoverable, compliant and dependable, giving stewards clear ownership and auditors a clear trail.",
          icon: "clipboard",
        },
        {
          title: "Embedded Customer Analytics",
          description:
            "White-labelled reporting inside your own product, so customers gain insight from their data without exporting it, creating a differentiated feature and a potential new revenue stream.",
          icon: "layers",
        },
      ],
    },
    process: {
      title: "How we build your data capability",
      steps: [
        {
          title: "Decision Mapping",
          description:
            "We interview stakeholders to catalogue the key decisions, the metrics behind them and the current pain points in sourcing, trusting and accessing that data.",
        },
        {
          title: "Architecture Blueprint",
          description:
            "We design the target platform, ingestion patterns, data models and governance approach, sequencing work so the highest-value use cases are delivered first.",
        },
        {
          title: "Pipeline & Model Build",
          description:
            "Engineers implement ingestion, transformations and semantic models with automated tests, documentation and lineage captured as code throughout development.",
        },
        {
          title: "Insight Delivery",
          description:
            "Dashboards, reports and predictive models are built with end users in short feedback cycles, ensuring each output answers a real question clearly.",
        },
        {
          title: "Adoption & Enablement",
          description:
            "We train teams, establish data ownership and set up monitoring for freshness and quality, so the platform keeps delivering value long after handover.",
        },
      ],
    },
    midCta: {
      title: "Tired of arguing over whose numbers are right?",
      subtitle:
        "Let us assess your data landscape and identify the quickest wins toward a single source of truth.",
      label: "Request a Data Assessment",
    },
    techStack: [
      {
        name: "Platforms & Warehouses",
        items: ["Snowflake", "Databricks", "Google BigQuery", "Amazon Redshift", "Microsoft Fabric"],
      },
      {
        name: "Engineering & Orchestration",
        items: ["dbt", "Apache Airflow", "Apache Kafka", "Apache Spark", "Fivetran", "Dagster"],
      },
      {
        name: "Visualisation",
        items: ["Power BI", "Tableau", "Looker", "Apache Superset", "Metabase"],
      },
      {
        name: "Data Science",
        items: ["Python", "pandas", "scikit-learn", "MLflow", "XGBoost", "Jupyter"],
      },
    ],
    industries: [
      "retail-and-cpg",
      "banking-fintech",
      "healthcare-pharmaceuticals",
      "telecommunication",
      "oil-gas-and-energy",
      "e-commerce-software-development",
    ],
    benefits: [
      {
        title: "Business-First Analytics",
        description:
          "We start with the decisions you need to make, ensuring every pipeline and dashboard has a clear purpose and audience.",
        icon: "target",
      },
      {
        title: "Engineering Discipline",
        description:
          "Version control, automated testing and CI/CD are applied to data just as rigorously as to application code.",
        icon: "git",
      },
      {
        title: "Cost-Aware Architecture",
        description:
          "We optimise storage tiers, compute sizing and query patterns so cloud data costs grow slower than your data volumes.",
        icon: "scale",
      },
      {
        title: "Lasting Data Literacy",
        description:
          "Training and documentation help your teams ask better questions and maintain the platform confidently on their own.",
        icon: "education",
      },
    ],
    faqs: [
      {
        question: "Do we need to replace our existing BI tools?",
        answer:
          "Not necessarily. Many problems stem from inconsistent data models rather than the visualisation tool itself. We usually fix the underlying pipelines and semantic layer first, and only recommend changing tools when licensing costs, performance or missing features genuinely justify the migration effort.",
      },
      {
        question: "How long before we see the first dashboards?",
        answer:
          "For a focused domain such as sales or inventory, the first production dashboards typically arrive within six to eight weeks. We deliver incrementally, adding sources and subject areas in subsequent sprints, so value accumulates steadily rather than arriving all at once at the end.",
      },
      {
        question: "Can you work with real-time data?",
        answer:
          "Yes. We build streaming pipelines for use cases like fraud monitoring, logistics tracking and IoT telemetry where minutes matter. For most reporting, though, we recommend scheduled refreshes because they are simpler and cheaper to operate, reserving streaming for decisions that truly need it.",
      },
      {
        question: "How do you handle data privacy and compliance?",
        answer: `${siteConfig.name} applies role-based access, column-level masking, encryption and retention policies aligned with regulations such as GDPR and HIPAA. Lineage and audit logs show who accessed what and when, making compliance reviews faster and far less disruptive for your teams.`,
      },
    ],
  },

  /* -------------------------------------------------------------
   * Staff Augmentation
   * ----------------------------------------------------------- */
  {
    slug: "staff-augmentation",
    name: "Staff Augmentation",
    category: "Emerging Technologies",
    icon: "users",
    headline: "Senior Engineers, Embedded in Days",
    summary:
      "We extend your in-house team with vetted engineers, designers and specialists who join your rituals, follow your standards and ramp up in days rather than months.",
    heroCta: "Scale Your Team",
    overview: {
      title: "Capacity without the hiring bottleneck",
      paragraphs: [
        `Roadmaps rarely wait for recruitment cycles. ${siteConfig.name} gives you direct access to a bench of pre-vetted engineers across web, mobile, cloud, data and AI, ready to join your stand-ups, work in your repositories and report to your leads. You keep full control of priorities and architecture while we handle sourcing, payroll, equipment and retention.`,
        "Every specialist passes technical assessments, communication screening and a culture-fit conversation with you before day one. We monitor engagement health through regular check-ins, provide continuous training and keep backup candidates warm, so a resignation or sudden scope change never leaves your delivery schedule exposed.",
      ],
      highlights: [
        "Pre-vetted talent, shortlisted within days",
        "Works in your tools and time zone",
        "Flexible scale up or scale down",
        "Continuity and replacement guarantees",
      ],
    },
    offerings: {
      title: "Staff augmentation models",
      subtitle:
        "Flexible engagement options that match how your organisation plans, budgets and builds software.",
      items: [
        {
          title: "Individual Specialists",
          description:
            "Add a single senior engineer, architect or designer to fill a specific skill gap, such as a Kubernetes expert for a migration or a React Native lead for a new mobile app.",
          icon: "briefcase",
        },
        {
          title: "Dedicated Pods",
          description:
            "A self-organising cross-functional unit of developers, QA and a tech lead that owns a workstream end to end while aligning with your product management and architectural standards.",
          icon: "users",
        },
        {
          title: "Nearshore & Overlap Coverage",
          description:
            "Engineers scheduled to overlap meaningfully with your core hours, enabling real-time collaboration in North American, European and Middle Eastern time zones without awkward hand-off delays.",
          icon: "globe",
        },
        {
          title: "Rapid Ramp-Up Teams",
          description:
            "Short-notice capacity for launches, regulatory deadlines or backlog spikes, with a structured onboarding checklist so new members commit meaningful code within their first week.",
          icon: "rocket",
        },
        {
          title: "Specialist & Niche Skills",
          description:
            "Access to hard-to-hire expertise including MLOps, security engineering, SAP, Salesforce and legacy modernisation, available for short advisory engagements or longer delivery assignments.",
          icon: "award",
        },
        {
          title: "Build-Operate-Transfer",
          description:
            "We assemble and operate a team on your behalf, then transfer people, processes and knowledge to your own entity once it is established and ready to take ownership.",
          icon: "handshake",
        },
      ],
    },
    process: {
      title: "From request to productive teammate",
      steps: [
        {
          title: "Requirement Briefing",
          description:
            "We clarify the skills, seniority, time zone, tech stack and team dynamics you need, along with how success will be measured in the role.",
        },
        {
          title: "Curated Shortlist",
          description:
            "Within days you receive a small set of pre-assessed candidates with detailed technical evaluations, not a pile of unfiltered CVs to sift through.",
        },
        {
          title: "Your Interviews",
          description:
            "You interview and select candidates directly, assessing technical depth and cultural fit through your own process before anyone joins the team.",
        },
        {
          title: "Structured Onboarding",
          description:
            "We coordinate access, equipment, security briefings and an onboarding plan with your leads so new engineers become productive as quickly as possible.",
        },
        {
          title: "Ongoing Success Management",
          description:
            "A dedicated engagement manager tracks satisfaction and performance through regular reviews, addressing concerns early and planning scale changes with you.",
        },
      ],
    },
    midCta: {
      title: "Need engineers who can start soon?",
      subtitle:
        "Tell us the roles and skills you need, and we will send a curated shortlist within days.",
      label: "Request Talent Profiles",
    },
    techStack: [
      {
        name: "Frontend & Mobile",
        items: ["React", "Next.js", "Angular", "Vue.js", "React Native", "Flutter", "Swift"],
      },
      {
        name: "Backend",
        items: ["Node.js", "Java", "Python", ".NET", "Go", "PHP"],
      },
      {
        name: "Cloud & DevOps",
        items: ["AWS", "Microsoft Azure", "Google Cloud", "Kubernetes", "Terraform"],
      },
      {
        name: "Data & AI",
        items: ["Databricks", "Snowflake", "PyTorch", "TensorFlow", "Apache Spark"],
      },
    ],
    industries: [
      "startups",
      "banking-fintech",
      "healthcare-pharmaceuticals",
      "e-commerce-software-development",
      "telecommunication",
      "gaming",
    ],
    benefits: [
      {
        title: "Rigorous Vetting",
        description:
          "Multi-stage technical and communication assessments mean only engineers ready to contribute from day one reach your shortlist.",
        icon: "test",
      },
      {
        title: "Elastic Capacity",
        description:
          "Scale teams up or down with short notice as priorities shift, without severance costs or lengthy recruitment.",
        icon: "zap",
      },
      {
        title: "Full Management Control",
        description:
          "Augmented engineers follow your processes and report to your leads, so you retain complete authority over priorities and quality.",
        icon: "settings",
      },
      {
        title: "Continuity Assurance",
        description:
          "Knowledge-sharing practices and warm backup candidates protect your roadmap if a team member needs to be replaced.",
        icon: "shield",
      },
    ],
    faqs: [
      {
        question: "How quickly can augmented engineers start?",
        answer:
          "For common skill sets we typically share a vetted shortlist within three to five business days, and selected engineers can often start within two weeks of your decision. Niche or highly senior roles may take slightly longer, and we will give you a realistic timeline upfront.",
      },
      {
        question: "Who manages the augmented team members day to day?",
        answer:
          "You do. Augmented engineers join your team, attend your ceremonies and take direction from your leads. We handle HR, payroll, equipment and professional development, and an engagement manager checks in regularly to make sure the arrangement is working well for both sides.",
      },
      {
        question: "What happens if someone is not the right fit?",
        answer: `If an engineer is not meeting expectations, ${siteConfig.name} provides a replacement at no additional recruitment cost and supports a structured knowledge handover. Because we keep backup candidates warm for active engagements, replacements are usually ready far faster than a standard hiring cycle.`,
      },
      {
        question: "How do you protect our intellectual property and data?",
        answer:
          "All engineers sign confidentiality and IP assignment agreements before starting. They work within your access controls, use managed and encrypted devices, and follow your security policies. We can also accommodate background checks and additional compliance requirements specific to your industry.",
      },
    ],
  },

  /* -------------------------------------------------------------
   * Quality Assurance
   * ----------------------------------------------------------- */
  {
    slug: "quality-assurance",
    name: "Quality Assurance",
    category: "Emerging Technologies",
    icon: "test",
    headline: "Release With Confidence, Every Sprint",
    summary:
      "We embed manual and automated testing across your delivery lifecycle, catching defects earlier, shortening release cycles and protecting the experiences your customers depend on.",
    heroCta: "Strengthen Your QA",
    overview: {
      title: "Quality built in, not bolted on",
      paragraphs: [
        `Defects found in production cost far more to fix than those caught during development, and they erode customer trust in ways a hotfix cannot undo. ${siteConfig.name} shifts testing left by involving QA engineers in requirement reviews, building automated suites alongside features and wiring quality gates directly into your CI/CD pipelines.`,
        "Our testers combine deep exploratory skills with strong automation engineering, covering functional, performance, security, accessibility and compatibility needs. We focus automation on the scenarios that matter most to your business, keep suites fast and stable, and report quality metrics that help leaders make informed go or no-go release decisions.",
      ],
      highlights: [
        "Shift-left testing practices",
        "Stable, maintainable automation",
        "Performance and accessibility coverage",
        "Clear quality dashboards",
      ],
    },
    offerings: {
      title: "Quality assurance services",
      subtitle:
        "Comprehensive testing coverage that scales with your product and your release cadence.",
      items: [
        {
          title: "Test Automation Engineering",
          description:
            "Robust UI, API and integration test suites built with modern frameworks, designed for parallel execution and low flakiness so they run on every pull request without slowing developers down.",
          icon: "workflow",
        },
        {
          title: "Exploratory & Functional Testing",
          description:
            "Experienced testers investigate new features from the user's perspective, uncovering usability issues and edge cases that scripted tests and automated checks routinely miss.",
          icon: "eye",
        },
        {
          title: "Performance & Load Testing",
          description:
            "Simulate peak traffic, sustained load and sudden spikes to locate bottlenecks in code, databases and infrastructure well before a sale, launch or seasonal surge exposes them.",
          icon: "zap",
        },
        {
          title: "Mobile & Cross-Browser Testing",
          description:
            "Validation across real devices, operating system versions and browsers, ensuring layouts, gestures and native integrations behave consistently for your entire user base.",
          icon: "smartphone",
        },
        {
          title: "Accessibility Testing",
          description:
            "Audits against WCAG guidelines using assistive technologies and automated scanners, with practical remediation advice that helps your product serve every user and meet legal obligations.",
          icon: "heart",
        },
        {
          title: "QA Strategy & Test Management",
          description:
            "Test strategies, risk-based prioritisation, environment and data management plus traceable reporting that give stakeholders a clear, honest view of release readiness.",
          icon: "clipboard",
        },
      ],
    },
    process: {
      title: "Our quality engineering lifecycle",
      steps: [
        {
          title: "Quality Assessment",
          description:
            "We review current practices, defect trends, tooling and coverage to identify the gaps that create the most risk and release friction today.",
        },
        {
          title: "Strategy & Test Design",
          description:
            "We define a risk-based test strategy, select frameworks and design test cases traced directly to requirements and critical user journeys.",
        },
        {
          title: "Automation Build-Out",
          description:
            "Engineers implement automated suites in priority order, integrating them with CI/CD so feedback reaches developers within minutes of each commit.",
        },
        {
          title: "Continuous Execution",
          description:
            "Functional, regression, performance and exploratory testing run every sprint, with defects logged, triaged and verified through tight developer collaboration.",
        },
        {
          title: "Reporting & Optimisation",
          description:
            "Dashboards track coverage, escape rates and suite health, guiding ongoing refinement of the strategy as your product and architecture evolve.",
        },
      ],
    },
    midCta: {
      title: "Are bugs slipping into production?",
      subtitle:
        "Get a quality assessment that pinpoints where defects originate and how to stop them earlier.",
      label: "Get a QA Assessment",
    },
    techStack: [
      {
        name: "Web & API Automation",
        items: ["Playwright", "Cypress", "Selenium", "Postman", "REST Assured", "Karate"],
      },
      {
        name: "Mobile Testing",
        items: ["Appium", "Espresso", "XCUITest", "BrowserStack", "Sauce Labs"],
      },
      {
        name: "Performance",
        items: ["k6", "Apache JMeter", "Gatling", "Locust"],
      },
      {
        name: "Management & Accessibility",
        items: ["TestRail", "Xray", "Allure", "axe", "Lighthouse", "NVDA"],
      },
    ],
    industries: [
      "banking-fintech",
      "healthcare-pharmaceuticals",
      "e-commerce-software-development",
      "telecommunication",
      "gaming",
      "public-sector",
    ],
    benefits: [
      {
        title: "Faster Release Cycles",
        description:
          "Reliable automation shrinks regression testing from days to minutes, letting you ship more often with less risk.",
        icon: "rocket",
      },
      {
        title: "Lower Cost of Defects",
        description:
          "Catching issues during development avoids the expensive fixes, support load and reputational damage of production failures.",
        icon: "coins",
      },
      {
        title: "Independent Perspective",
        description:
          "Our testers bring fresh eyes and a user-centred mindset that complements your developers' own testing.",
        icon: "eye",
      },
      {
        title: "Actionable Quality Metrics",
        description:
          "Transparent reporting gives leaders the data needed to make confident release decisions instead of relying on gut feel.",
        icon: "chart",
      },
    ],
    faqs: [
      {
        question: "Should we automate all of our testing?",
        answer:
          "No. Automation is ideal for repetitive regression checks and critical journeys, but exploratory testing by skilled humans remains essential for usability and unexpected behaviour. We recommend a balanced strategy, typically automating stable, high-value scenarios while keeping manual effort focused on new and changing features.",
      },
      {
        question: "Can you take over our existing flaky test suite?",
        answer:
          "Yes. We start by analysing failure patterns to find root causes such as unstable selectors, shared test data or timing issues. We then stabilise, refactor or retire tests based on their value, often reducing suite runtime and flakiness significantly within the first few sprints.",
      },
      {
        question: "Do your QA engineers work inside our development teams?",
        answer:
          "They can. Many clients embed our testers directly in their agile squads so quality is considered from story refinement onwards. Alternatively, we can operate as an independent testing team with defined hand-offs. We will recommend the model that suits your structure and release cadence.",
      },
      {
        question: "How do you measure the success of a QA engagement?",
        answer: `${siteConfig.name} agrees on metrics at the start, commonly defect escape rate, automated coverage of critical paths, regression cycle time and suite stability. We report on these regularly, so improvements are visible and the testing strategy can be adjusted based on evidence.`,
      },
    ],
  },

  /* -------------------------------------------------------------
   * DevOps
   * ----------------------------------------------------------- */
  {
    slug: "devops",
    name: "DevOps",
    category: "Emerging Technologies",
    icon: "git",
    headline: "Ship Faster, Break Less",
    summary:
      "We automate build, deployment and infrastructure management with CI/CD, infrastructure as code and observability, helping your teams release frequently while keeping systems stable.",
    heroCta: "Accelerate Your Delivery",
    overview: {
      title: "Delivery pipelines that remove friction",
      paragraphs: [
        `Slow, manual releases and fragile environments drain engineering time and make every deployment feel risky. ${siteConfig.name} introduces automated pipelines, reproducible infrastructure and proactive monitoring so teams can push small changes safely and often, recovering quickly when something does go wrong instead of dreading release night.`,
        "We treat DevOps as both a technical and cultural shift. Alongside tooling, we help teams adopt trunk-based workflows, shared on-call ownership and blameless post-incident reviews. The result is measurable improvement in deployment frequency, lead time, change failure rate and recovery time, the metrics that genuinely reflect delivery performance.",
      ],
      highlights: [
        "Automated CI/CD pipelines",
        "Infrastructure as code",
        "Full-stack observability",
        "Improvement tracked with DORA metrics",
      ],
    },
    offerings: {
      title: "DevOps services",
      subtitle:
        "Practical automation and platform engineering that gives developers speed and operations teams peace of mind.",
      items: [
        {
          title: "CI/CD Pipeline Engineering",
          description:
            "Automated build, test, security scanning and deployment pipelines with progressive delivery strategies like canary and blue-green releases, so changes reach users safely and reversibly.",
          icon: "workflow",
        },
        {
          title: "Infrastructure as Code",
          description:
            "Version-controlled, peer-reviewed infrastructure definitions that make environments reproducible, auditable and quick to provision, eliminating configuration drift and undocumented manual changes.",
          icon: "file",
        },
        {
          title: "Containerisation & Kubernetes",
          description:
            "Package applications into containers and operate them on managed Kubernetes clusters with autoscaling, rolling updates and policy enforcement tuned to your workload patterns.",
          icon: "box",
        },
        {
          title: "Observability & Monitoring",
          description:
            "Unified metrics, logs and traces with meaningful service-level objectives and alerting, so teams detect and diagnose problems before customers notice and file support tickets.",
          icon: "eye",
        },
        {
          title: "DevSecOps Integration",
          description:
            "Dependency scanning, secrets detection, container image checks and policy-as-code embedded into pipelines, making security an automatic part of every release rather than a late gate.",
          icon: "shield",
        },
        {
          title: "Internal Developer Platforms",
          description:
            "Self-service portals and golden-path templates that let developers spin up services, environments and pipelines in minutes while following your organisation's standards by default.",
          icon: "layers",
        },
      ],
    },
    process: {
      title: "Our DevOps transformation path",
      steps: [
        {
          title: "Delivery Assessment",
          description:
            "We measure current DORA metrics, map the path from commit to production and identify the bottlenecks, manual steps and failure points that slow teams down.",
        },
        {
          title: "Target Roadmap",
          description:
            "We define a prioritised roadmap of tooling, process and skills improvements, focusing first on the changes that unlock the biggest delivery gains.",
        },
        {
          title: "Pipeline & Platform Build",
          description:
            "Engineers implement pipelines, infrastructure code and observability for pilot services, proving the patterns before rolling them out more broadly.",
        },
        {
          title: "Scale & Enable",
          description:
            "We extend proven patterns across teams through reusable templates, documentation and pairing sessions that build lasting capability in your engineers.",
        },
        {
          title: "Measure & Refine",
          description:
            "Ongoing tracking of delivery metrics, incident trends and cloud costs drives continuous refinement of the platform and supporting practices.",
        },
      ],
    },
    midCta: {
      title: "Still dreading release day?",
      subtitle:
        "We will map your delivery pipeline and show you exactly where automation can save the most time.",
      label: "Book a DevOps Assessment",
    },
    techStack: [
      {
        name: "CI/CD",
        items: ["GitHub Actions", "GitLab CI", "Jenkins", "Argo CD", "Azure DevOps", "CircleCI"],
      },
      {
        name: "Infrastructure & Containers",
        items: ["Terraform", "Pulumi", "Ansible", "Docker", "Kubernetes", "Helm"],
      },
      {
        name: "Observability",
        items: ["Prometheus", "Grafana", "Datadog", "OpenTelemetry", "Elastic Stack"],
      },
      {
        name: "Security & Policy",
        items: ["Snyk", "Trivy", "SonarQube", "Open Policy Agent", "HashiCorp Vault"],
      },
    ],
    industries: [
      "startups",
      "banking-fintech",
      "e-commerce-software-development",
      "telecommunication",
      "gaming",
      "healthcare-pharmaceuticals",
    ],
    benefits: [
      {
        title: "Measurable Delivery Gains",
        description:
          "We baseline and track DORA metrics, so improvements in speed and stability are demonstrated with hard numbers.",
        icon: "chart",
      },
      {
        title: "Cloud-Agnostic Expertise",
        description:
          "Our engineers work across AWS, Azure and Google Cloud, recommending tools that fit your existing environment.",
        icon: "cloud",
      },
      {
        title: "Security by Default",
        description:
          "Automated checks in every pipeline catch vulnerabilities and misconfigurations long before they reach production.",
        icon: "lock",
      },
      {
        title: "Capability Transfer",
        description:
          "We pair with your engineers and document everything, so your teams can own and evolve the platform themselves.",
        icon: "handshake",
      },
    ],
    faqs: [
      {
        question: "What are DORA metrics and why do they matter?",
        answer:
          "DORA metrics are four research-backed indicators of software delivery performance: deployment frequency, lead time for changes, change failure rate and time to restore service. Tracking them shows whether investments in tooling and process are actually improving both speed and stability, rather than trading one for the other.",
      },
      {
        question: "Do we need Kubernetes?",
        answer:
          "Not always. Kubernetes is powerful for organisations running many services with variable load, but it adds operational complexity. For smaller estates, managed container services or serverless platforms may deliver the same benefits with less overhead. We recommend the simplest option that meets your scale and team skills.",
      },
      {
        question: "Can you work with our legacy applications?",
        answer:
          "Yes. Even monolithic or on-premises applications benefit from automated builds, scripted deployments and monitoring. We introduce improvements incrementally, often containerising or automating legacy components step by step, so delivery gets safer without requiring a risky big-bang rewrite.",
      },
      {
        question: "Will DevOps improvements increase our cloud costs?",
        answer: `Often the opposite. ${siteConfig.name} builds cost visibility into the platform with tagging, budgets and right-sizing recommendations, and automates the shutdown of idle environments. Many clients find that better automation and observability reduce waste enough to offset the investment in tooling.`,
      },
    ],
  },

  /* -------------------------------------------------------------
   * Cybersecurity
   * ----------------------------------------------------------- */
  {
    slug: "cybersecurity-solutions",
    name: "Cybersecurity",
    category: "Emerging Technologies",
    icon: "shield",
    headline: "Resilient Defences for Modern Threats",
    summary:
      "We assess, harden and continuously monitor your applications, cloud and infrastructure, reducing breach risk and helping you meet the security standards your customers and regulators expect.",
    heroCta: "Secure Your Business",
    overview: {
      title: "Security that keeps pace with your business",
      paragraphs: [
        `Attack surfaces expand every time you launch a feature, adopt a SaaS tool or onboard a partner. ${siteConfig.name} helps you see that surface clearly, prioritise the exposures that matter most and close them methodically, combining offensive testing, secure engineering and continuous monitoring into one coherent programme instead of scattered point solutions.`,
        "Our specialists bring hands-on experience across application security, cloud configuration, identity and incident response. We align recommendations with frameworks such as ISO 27001, SOC 2, NIST and PCI DSS, translating technical findings into business risk language so leadership can make informed investment decisions and demonstrate due diligence to auditors.",
      ],
      highlights: [
        "Risk-prioritised remediation",
        "Application and cloud security",
        "Compliance framework alignment",
        "Incident readiness and response",
      ],
    },
    offerings: {
      title: "Cybersecurity services",
      subtitle:
        "Layered protection spanning prevention, detection, response and compliance.",
      items: [
        {
          title: "Penetration Testing",
          description:
            "Manual and tool-assisted attacks against web apps, APIs, mobile apps and networks that reveal exploitable weaknesses, delivered with proof-of-concept evidence and clear remediation priorities.",
          icon: "target",
        },
        {
          title: "Cloud Security Posture",
          description:
            "Continuous review of cloud accounts for misconfigurations, excessive permissions and exposed resources, with guardrails and automated fixes that stop risky settings from returning.",
          icon: "cloud",
        },
        {
          title: "Secure Software Development",
          description:
            "Threat modelling, secure code review and developer training integrated into your lifecycle, so vulnerabilities are designed out before they ever reach a test environment.",
          icon: "code",
        },
        {
          title: "Identity & Access Management",
          description:
            "Single sign-on, multi-factor authentication, least-privilege role design and privileged access controls that reduce the impact of stolen credentials across your entire estate.",
          icon: "lock",
        },
        {
          title: "Managed Detection & Response",
          description:
            "Around-the-clock monitoring of logs and endpoints, threat hunting and guided response that contains suspicious activity quickly and keeps your leadership informed throughout.",
          icon: "eye",
        },
        {
          title: "Compliance Readiness",
          description:
            "Gap assessments, policy development and evidence collection that prepare you for ISO 27001, SOC 2, HIPAA or PCI DSS audits without derailing day-to-day operations.",
          icon: "award",
        },
      ],
    },
    process: {
      title: "Our security engagement model",
      steps: [
        {
          title: "Scope & Threat Profile",
          description:
            "We identify critical assets, likely adversaries and regulatory obligations to focus effort where a breach would cause the greatest business harm.",
        },
        {
          title: "Assessment & Testing",
          description:
            "Specialists perform architecture reviews, configuration audits and penetration tests to build an evidence-based picture of your current security posture.",
        },
        {
          title: "Prioritised Remediation",
          description:
            "Findings are ranked by risk and effort, and we work alongside your teams to fix high-impact issues first, verifying each remediation.",
        },
        {
          title: "Monitoring & Detection",
          description:
            "We deploy or tune detection tooling, logging and alerting so new threats are spotted quickly and routed to the right responders.",
        },
        {
          title: "Continuous Improvement",
          description:
            "Regular retesting, tabletop exercises and posture reviews keep defences aligned with evolving threats, new systems and changing compliance requirements.",
        },
      ],
    },
    midCta: {
      title: "Do you know where you are most exposed?",
      subtitle:
        "Start with a focused assessment that highlights your highest-risk gaps and how to close them.",
      label: "Request a Security Assessment",
    },
    techStack: [
      {
        name: "Application Security",
        items: ["Burp Suite", "OWASP ZAP", "Semgrep", "Snyk", "Checkmarx"],
      },
      {
        name: "Cloud & Identity",
        items: ["AWS Security Hub", "Microsoft Defender for Cloud", "Wiz", "Okta", "Microsoft Entra ID"],
      },
      {
        name: "Detection & Response",
        items: ["Splunk", "Microsoft Sentinel", "CrowdStrike Falcon", "Elastic Security", "Wazuh"],
      },
      {
        name: "Network & Infrastructure",
        items: ["Nessus", "Nmap", "Metasploit", "Palo Alto Networks", "Cloudflare"],
      },
    ],
    industries: [
      "banking-fintech",
      "healthcare-pharmaceuticals",
      "public-sector",
      "telecommunication",
      "oil-gas-and-energy",
      "e-commerce-software-development",
    ],
    benefits: [
      {
        title: "Business-Aligned Risk View",
        description:
          "We express findings in terms of business impact, helping leadership prioritise security spending with confidence.",
        icon: "scale",
      },
      {
        title: "Certified Specialists",
        description:
          "Our team holds recognised offensive and defensive security certifications and applies proven, repeatable methodologies.",
        icon: "award",
      },
      {
        title: "Engineering-Integrated Fixes",
        description:
          "Because we also build software, our remediation advice is practical and we can implement fixes alongside your developers.",
        icon: "wrench",
      },
      {
        title: "Audit-Ready Evidence",
        description:
          "Documentation and reporting are structured to support compliance audits, saving your teams significant preparation time.",
        icon: "clipboard",
      },
    ],
    faqs: [
      {
        question: "How often should we conduct penetration testing?",
        answer:
          "At minimum annually, and after significant changes such as major releases, new integrations or infrastructure migrations. Organisations with frequent deployments increasingly combine periodic in-depth tests with continuous automated scanning so newly introduced vulnerabilities are caught between formal assessments.",
      },
      {
        question: "Will security testing disrupt our production systems?",
        answer:
          "We plan tests carefully to avoid disruption, agreeing on scope, timing and rules of engagement in advance. Potentially risky tests can be run against staging environments or during maintenance windows, and we maintain direct communication with your team throughout so any concern is addressed immediately.",
      },
      {
        question: "Can you help us achieve SOC 2 or ISO 27001 certification?",
        answer:
          "Yes. We perform gap assessments, help design and implement required controls, draft policies and prepare evidence for auditors. While certification is granted by independent auditors, our preparation significantly reduces the time and effort required and improves your chances of a smooth first audit.",
      },
      {
        question: "What happens if we experience a security incident?",
        answer: `${siteConfig.name} can provide incident response support to contain the threat, investigate root cause, restore affected systems and preserve evidence. Afterwards we deliver a detailed report with lessons learned and recommendations, helping you strengthen defences and meet any notification obligations.`,
      },
    ],
  },

  /* -------------------------------------------------------------
   * SaaS Development
   * ----------------------------------------------------------- */
  {
    slug: "saas",
    name: "SaaS Development",
    category: "Emerging Technologies",
    icon: "cloud",
    headline: "Subscription Products Engineered to Scale",
    summary:
      "We design and build multi-tenant SaaS platforms with secure tenancy, flexible billing and cloud-native architecture, taking products from first release to thousands of paying customers.",
    heroCta: "Build Your SaaS Product",
    overview: {
      title: "SaaS foundations that grow with your customers",
      paragraphs: [
        `Successful SaaS products depend on more than features. Tenant isolation, subscription billing, onboarding, usage metering and uptime all shape whether customers stay and expand. ${siteConfig.name} engineers these foundations carefully from the first release, so you are not forced into a painful re-architecture just as traction finally arrives.`,
        "We partner with founders and product leaders to scope a lean first version, validate it with real users and evolve it through data-driven iteration. Our cloud-native architectures scale efficiently with demand, while enterprise-ready capabilities such as SSO, audit logs and granular permissions help you move upmarket when larger customers come calling.",
      ],
      highlights: [
        "Multi-tenant cloud architecture",
        "Billing and subscription management",
        "Enterprise-ready security features",
        "Product analytics built in",
      ],
    },
    offerings: {
      title: "SaaS development services",
      subtitle:
        "Everything required to launch, scale and modernise a subscription software business.",
      items: [
        {
          title: "MVP & Product Launch",
          description:
            "A focused first version built around your core value proposition, with clean architecture and essential SaaS plumbing in place, so early customers can pay, onboard and give feedback quickly.",
          icon: "rocket",
        },
        {
          title: "Multi-Tenant Architecture",
          description:
            "Tenancy models ranging from shared schemas to isolated databases, chosen to balance cost, performance and compliance, with safeguards that prevent any data leakage between customers.",
          icon: "layers",
        },
        {
          title: "Billing & Subscription Systems",
          description:
            "Plans, trials, usage-based pricing, invoicing, taxes and dunning integrated with leading payment providers, giving finance teams accurate revenue data and customers a smooth self-service experience.",
          icon: "card",
        },
        {
          title: "Enterprise Readiness",
          description:
            "SAML and OIDC single sign-on, SCIM provisioning, role-based access, audit trails and data residency options that satisfy procurement and security questionnaires from larger buyers.",
          icon: "building",
        },
        {
          title: "Legacy-to-SaaS Modernisation",
          description:
            "Transform on-premises or single-tenant software into a cloud-hosted subscription product, migrating customers incrementally while preserving their data, integrations and configurations.",
          icon: "settings",
        },
        {
          title: "APIs & Integration Marketplace",
          description:
            "Well-documented public APIs, webhooks and pre-built connectors that let customers embed your product in their workflows, increasing stickiness and opening partnership opportunities.",
          icon: "puzzle",
        },
      ],
    },
    process: {
      title: "How we build SaaS products",
      steps: [
        {
          title: "Product Discovery",
          description:
            "We clarify target customers, core jobs to be done, pricing hypotheses and competitive positioning, then define a focused scope for the first release.",
        },
        {
          title: "Architecture & UX Design",
          description:
            "We design the tenancy model, data architecture and integrations alongside user flows and interface prototypes tested with prospective customers.",
        },
        {
          title: "Iterative Development",
          description:
            "Features ship in short sprints behind feature flags, with automated testing and continuous deployment keeping quality high and feedback loops tight.",
        },
        {
          title: "Launch & Onboarding",
          description:
            "We prepare production infrastructure, billing, monitoring and self-service onboarding, then support your go-live and first customer cohorts.",
        },
        {
          title: "Scale & Evolve",
          description:
            "Usage analytics, performance monitoring and customer feedback guide the roadmap, while we optimise infrastructure to keep margins healthy as you grow.",
        },
      ],
    },
    midCta: {
      title: "Turning an idea into a subscription business?",
      subtitle:
        "Talk to our product engineers about scoping a launch-ready first version and a roadmap beyond it.",
      label: "Discuss Your SaaS Idea",
    },
    techStack: [
      {
        name: "Application",
        items: ["TypeScript", "Next.js", "React", "Node.js", "NestJS", "Python", "Go"],
      },
      {
        name: "Data & Storage",
        items: ["PostgreSQL", "Redis", "MongoDB", "ClickHouse", "Amazon S3"],
      },
      {
        name: "Cloud & Infrastructure",
        items: ["AWS", "Google Cloud", "Microsoft Azure", "Kubernetes", "Terraform"],
      },
      {
        name: "SaaS Services",
        items: ["Stripe", "Auth0", "Segment", "PostHog", "LaunchDarkly"],
      },
    ],
    industries: [
      "startups",
      "e-commerce-software-development",
      "banking-fintech",
      "healthcare-pharmaceuticals",
      "education",
      "real-estate",
    ],
    benefits: [
      {
        title: "Product Mindset",
        description:
          "We think about activation, retention and expansion, not just features, helping you build a product customers keep paying for.",
        icon: "lightbulb",
      },
      {
        title: "Scalable From Day One",
        description:
          "Cloud-native foundations handle growth from tens to tens of thousands of tenants without disruptive rewrites.",
        icon: "server",
      },
      {
        title: "Healthy Unit Economics",
        description:
          "We design infrastructure and tenancy to keep cost per customer low, protecting your gross margins as you scale.",
        icon: "coins",
      },
      {
        title: "Enterprise-Grade Security",
        description:
          "Security and compliance capabilities are built in early, shortening sales cycles with larger, security-conscious buyers.",
        icon: "shield",
      },
    ],
    faqs: [
      {
        question: "How long does it take to build a SaaS MVP?",
        answer:
          "Most SaaS MVPs take between three and five months, depending on the complexity of core workflows, integrations and compliance requirements. We prioritise ruthlessly so you can launch with the essential value proposition and start learning from paying customers as early as possible.",
      },
      {
        question: "Which multi-tenancy model should we choose?",
        answer:
          "Shared databases with tenant identifiers are cost-efficient for many customers, while separate schemas or databases offer stronger isolation for regulated or enterprise clients. Many products use a hybrid approach. We evaluate your customer profile, compliance needs and growth plans before recommending a model.",
      },
      {
        question: "Can you help us convert our desktop or on-premises product to SaaS?",
        answer:
          "Yes. We assess the existing codebase, identify components to reuse, refactor or rebuild, and design a migration path that moves customers gradually. This approach preserves revenue during the transition while delivering the benefits of centralised updates, subscription pricing and lower support overhead.",
      },
      {
        question: "Do you provide ongoing support after launch?",
        answer: `Yes. ${siteConfig.name} offers continued development, infrastructure management and site reliability support after launch. Many clients retain a dedicated product team with us to keep shipping features, while others transition ownership to an in-house team with our structured knowledge transfer.`,
      },
    ],
  },
];
