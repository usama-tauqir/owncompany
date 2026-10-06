import type { Service } from "../types";
import { siteConfig } from "@/config/site";

export const gamingServices: Service[] = [
  /* -------------------------------------------------------------
   * Game Development
   * ----------------------------------------------------------- */
  {
    slug: "game-development",
    name: "Game Development",
    category: "Gaming",
    icon: "gamepad",
    headline: "Ship games players keep coming back to",
    summary:
      "Full-cycle game development across PC, console, mobile and web, from vertical slice to live operations, built by engineers who understand both gameplay feel and production discipline.",
    heroCta: "Start your game",
    overview: {
      title: `Game development that balances creative ambition with shipping reality`,
      paragraphs: [
        `Great games are rarely the product of a single brilliant idea. They come from tight iteration loops, stable builds and a team that can tell the difference between a feature that needs polish and one that needs cutting. ${siteConfig.name} embeds senior gameplay, systems and tools engineers alongside your designers so prototypes become playable quickly and decisions are made with real telemetry rather than guesswork.`,
        `We work in Unity, Unreal and custom engines, and we are comfortable joining at any stage: greenlighting a concept, rescuing a stalled production, porting an existing title or scaling backend services for a live game. Every engagement includes automated build pipelines, performance budgets per platform and a clear milestone plan, so producers always know what is done, what is at risk and what ships next.`,
      ],
      highlights: [
        "Playable vertical slice in weeks, not quarters",
        "Per-platform performance budgets from day one",
        "Certification-ready builds for major storefronts",
        "Live-ops tooling and analytics built in",
      ],
    },
    offerings: {
      title: "Game development services",
      subtitle:
        "Specialist squads that plug into your studio or own delivery end to end, depending on where you need the most leverage.",
      items: [
        {
          title: "Full-cycle game production",
          description:
            "Concept validation, pre-production, full production and launch handled by a single accountable team with producers, engineers, designers and QA working from one shared roadmap and build.",
          icon: "rocket",
        },
        {
          title: "Gameplay and systems engineering",
          description:
            "Character controllers, combat, AI behaviour trees, economy systems and progression loops implemented with clean, data-driven architecture that designers can tune without waiting on a code change.",
          icon: "code",
        },
        {
          title: "Multiplayer and backend services",
          description:
            "Authoritative servers, matchmaking, lobbies, leaderboards and player accounts engineered for low latency and graceful scaling, with load testing that simulates real launch-day concurrency before players arrive.",
          icon: "network",
        },
        {
          title: "Porting and co-development",
          description:
            "Bring an existing title to new platforms or add capacity to your in-house team. We adapt input, UI, memory and rendering paths so each version feels native rather than ported.",
          icon: "layers",
        },
        {
          title: "Performance optimisation",
          description:
            "Profiling-led work on frame time, load times, memory footprint and battery drain. We set measurable targets for each device tier and track them in CI so regressions are caught immediately.",
          icon: "zap",
        },
        {
          title: "Live operations and LiveOps tooling",
          description:
            "Event schedulers, remote configuration, content pipelines, A/B testing hooks and analytics dashboards that let your team run seasons and limited-time events without shipping a new client build.",
          icon: "settings",
        },
      ],
    },
    process: {
      title: "How we take a game from idea to launch",
      steps: [
        {
          title: "Discovery and pillars",
          description:
            "We align on audience, platforms, monetisation model and the three or four design pillars that every later decision will be measured against, then size scope accordingly.",
        },
        {
          title: "Prototype and vertical slice",
          description:
            "Core mechanics are prototyped fast, then one polished slice proves the art direction, game feel and technical approach so stakeholders can greenlight with confidence.",
        },
        {
          title: "Production sprints",
          description:
            "Two-week sprints deliver playable builds with tracked performance metrics. Content, systems and tooling grow in parallel against a milestone plan everyone can see.",
        },
        {
          title: "Alpha, beta and certification",
          description:
            "Structured playtests, compatibility testing and platform compliance checks surface issues early, giving the team time to fix balance, stability and submission blockers before launch.",
        },
        {
          title: "Launch and live operations",
          description:
            "We monitor crash rates, retention and server health through launch week, then shift into a content and patch cadence driven by player data and community feedback.",
        },
      ],
    },
    midCta: {
      title: "Have a concept that deserves a playable prototype?",
      subtitle: `Share your pitch and ${siteConfig.name} will outline a vertical-slice plan with scope, team shape and timeline.`,
      label: "Plan my prototype",
    },
    techStack: [
      {
        name: "Engines",
        items: ["Unity", "Unreal Engine", "Godot", "Cocos Creator", "Defold"],
      },
      {
        name: "Languages",
        items: ["C#", "C++", "Lua", "TypeScript", "HLSL", "Python"],
      },
      {
        name: "Backend & multiplayer",
        items: [
          "Photon",
          "Nakama",
          "PlayFab",
          "Mirror",
          "Node.js",
          "Redis",
          "Kubernetes",
        ],
      },
      {
        name: "Build & analytics",
        items: [
          "Jenkins",
          "GitHub Actions",
          "Perforce",
          "GameAnalytics",
          "Firebase",
          "Sentry",
        ],
      },
    ],
    industries: ["gaming", "startups", "education", "telecommunication", "retail-and-cpg"],
    benefits: [
      {
        title: "Production discipline",
        description:
          "Milestone plans, burn-down tracking and risk registers mean you always know whether the game is on schedule, and why, long before a date slips.",
        icon: "clipboard",
      },
      {
        title: "Engine-agnostic expertise",
        description:
          "Our engineers work across commercial and custom engines, so we recommend the technology that fits your game rather than the one we happen to know.",
        icon: "cpu",
      },
      {
        title: "Player-first quality",
        description:
          "Dedicated QA, structured playtesting and telemetry review keep the focus on how the game actually feels to play, not just whether features are complete.",
        icon: "heart",
      },
      {
        title: "Built for the long tail",
        description:
          "Clean architecture, documented tooling and live-ops infrastructure make post-launch updates cheaper, so your game can keep earning for years.",
        icon: "trophy",
      },
    ],
    faqs: [
      {
        question: "Can you join a project that is already in production?",
        answer: `Yes. Many engagements start mid-production. ${siteConfig.name} begins with a short technical and production audit, identifies the highest-risk areas, then embeds engineers who follow your existing conventions and tools. We aim to be contributing to the main branch within the first two weeks.`,
      },
      {
        question: "Which platforms do you develop for?",
        answer:
          "We build for Windows, macOS, iOS, Android, web browsers and current-generation consoles. Console work is carried out under the relevant platform holder agreements, which we can arrange with you during onboarding. We plan input, UI scaling and performance targets for each platform from the start.",
      },
      {
        question: "Who owns the intellectual property?",
        answer:
          "You do. All source code, assets, design documents and build tooling created during the engagement are assigned to you under the contract. We only reuse generic, non-identifying internal libraries, and we disclose those up front so there are no surprises at handover.",
      },
      {
        question: "How do you estimate cost for a game?",
        answer:
          "We estimate from a feature and content breakdown rather than a single lump sum. After discovery you receive a milestone-based plan with team composition and ranges per phase. Fixed-scope vertical slices are a common first step because they remove most of the uncertainty from later estimates.",
      },
    ],
  },

  /* -------------------------------------------------------------
   * Game Art & Design
   * ----------------------------------------------------------- */
  {
    slug: "gaming-art-design",
    name: "Game Art & Design",
    category: "Gaming",
    icon: "palette",
    headline: "Worlds with a distinct visual voice",
    summary:
      "Concept art, characters, environments, animation and UI that give your game a recognisable identity while staying inside the polygon, texture and memory budgets each platform demands.",
    heroCta: "Discuss your art direction",
    overview: {
      title: "Art that sells the fantasy and still runs at frame rate",
      paragraphs: [
        `A strong visual identity is often the first reason a player stops scrolling and looks at your game. ${siteConfig.name} provides art direction and production capacity that turn a mood board into a cohesive style guide, then into thousands of consistent, engine-ready assets. Our artists collaborate closely with technical artists so beauty never comes at the cost of performance.`,
        `We work across stylised and realistic pipelines, 2D and 3D, and support everything from a handful of hero characters to full outsourced environment production. Every asset passes through naming conventions, LOD checks and in-engine review before delivery, which means your team spends time integrating content rather than fixing it. Clear feedback rounds keep the creative direction firmly in your hands.`,
      ],
      highlights: [
        "Style guides that keep large teams consistent",
        "Engine-ready assets with LODs and atlases",
        "Technical art bridging artists and engineers",
        "Scalable capacity for content-heavy milestones",
      ],
    },
    offerings: {
      title: "Art and design capabilities",
      subtitle:
        "From the first sketch to the final shader, one pipeline covering every visual layer of your game.",
      items: [
        {
          title: "Concept art and visual development",
          description:
            "Exploratory sketches, key art, colour scripts and style guides that define the look of characters, props and worlds before a single production asset is modelled or textured.",
          icon: "pen",
        },
        {
          title: "Character design and modelling",
          description:
            "Hero characters, NPCs and creatures sculpted, retopologised, UV-mapped and textured to your style, delivered with clean topology that deforms well and stays within agreed triangle budgets.",
          icon: "users",
        },
        {
          title: "Environment and level art",
          description:
            "Modular kits, terrain, foliage and set dressing built for reuse, so designers can assemble new levels quickly while preserving lighting quality and draw-call efficiency across target hardware.",
          icon: "map",
        },
        {
          title: "Animation and rigging",
          description:
            "Production rigs, keyframe and motion-capture clean-up, blend trees and facial animation that give characters weight and personality, prepared for the animation systems your engine uses.",
          icon: "sparkles",
        },
        {
          title: "UI and UX design",
          description:
            "Menus, HUDs, onboarding flows and store screens designed for readability on every screen size, with interactive prototypes tested against real players before implementation begins.",
          icon: "monitor",
        },
        {
          title: "Technical art and VFX",
          description:
            "Custom shaders, particle effects, lighting setups and asset pipeline scripts that connect the art team to the engine and keep visual quality high without blowing performance budgets.",
          icon: "wrench",
        },
      ],
    },
    process: {
      title: "Our art production pipeline",
      steps: [
        {
          title: "Creative brief and references",
          description:
            "We gather your vision, target audience, comparable titles and technical constraints, then agree on budgets for polygons, textures and memory per asset category.",
        },
        {
          title: "Visual exploration",
          description:
            "Artists produce rapid concept variations. You choose a direction, and we consolidate it into a style guide covering shape language, palette, materials and lighting.",
        },
        {
          title: "Pilot assets",
          description:
            "A small set of representative assets is taken through the entire pipeline into your engine, validating quality, budgets and integration before volume production begins.",
        },
        {
          title: "Volume production",
          description:
            "Assets are produced in batches with scheduled review checkpoints. Feedback is tracked per asset, so revisions stay focused and nothing gets lost between rounds.",
        },
        {
          title: "Integration and polish",
          description:
            "Technical artists verify assets in-engine, tune LODs, lighting and shaders, and hand over source files with documentation your team can maintain independently.",
        },
      ],
    },
    midCta: {
      title: "Need a visual identity players remember?",
      subtitle: `Send us your references and ${siteConfig.name} will return a scoped art plan with pilot assets and timelines.`,
      label: "Get an art plan",
    },
    techStack: [
      {
        name: "2D & concept",
        items: ["Photoshop", "Procreate", "Krita", "Illustrator", "Spine"],
      },
      {
        name: "3D modelling & texturing",
        items: [
          "Blender",
          "Maya",
          "3ds Max",
          "ZBrush",
          "Substance Painter",
          "Substance Designer",
          "Marvelous Designer",
        ],
      },
      {
        name: "Animation & VFX",
        items: ["MotionBuilder", "Houdini", "Cascadeur", "EmberGen", "Niagara"],
      },
      {
        name: "UI & prototyping",
        items: ["Figma", "Adobe After Effects", "Rive", "Unity UI Toolkit"],
      },
    ],
    industries: ["gaming", "education", "real-estate", "retail-and-cpg", "startups"],
    benefits: [
      {
        title: "Consistency at scale",
        description:
          "Shared style guides, material libraries and review checklists keep assets from dozens of artists looking like they came from a single hand.",
        icon: "layers",
      },
      {
        title: "Performance-aware artistry",
        description:
          "Technical artists sit inside every art squad, so assets arrive within budget and you avoid late-stage optimisation crunches.",
        icon: "zap",
      },
      {
        title: "Flexible capacity",
        description:
          "Scale art output up for content milestones and back down after launch without the cost and delay of permanent hiring.",
        icon: "users",
      },
      {
        title: "Your vision, protected",
        description:
          "Structured feedback rounds and clear approval gates keep creative control with your art director at every stage of production.",
        icon: "eye",
      },
    ],
    faqs: [
      {
        question: "Can you match an existing art style?",
        answer:
          "Yes. We start by studying your existing assets and style guide, then produce a few test pieces for approval. Once the match is confirmed, those pieces become the reference for volume production, and our leads review every batch against them before delivery.",
      },
      {
        question: "Do you deliver source files?",
        answer:
          "Always. Alongside engine-ready exports you receive layered source files, high-poly sculpts, texture projects and rigs where relevant. Files follow your naming and folder conventions, so your internal team can modify or extend any asset after the engagement ends.",
      },
      {
        question: "How are revisions handled?",
        answer: `Each asset category has an agreed number of feedback rounds defined during planning. ${siteConfig.name} tracks comments per asset in a shared review tool, and our art leads triage feedback so artists receive clear, consolidated notes rather than conflicting requests.`,
      },
      {
        question: "Can you work inside our engine and source control?",
        answer:
          "Yes. Our artists and technical artists regularly work directly in client Unity or Unreal projects using Perforce, Plastic or Git LFS. That way assets are validated in context and integration issues are caught by us rather than by your engineering team.",
      },
    ],
  },

  /* -------------------------------------------------------------
   * Web3 Gaming
   * ----------------------------------------------------------- */
  {
    slug: "web3-gaming",
    name: "Web3 Gaming",
    category: "Gaming",
    icon: "coins",
    headline: "Player-owned economies, engineered responsibly",
    summary:
      "Blockchain-enabled games with true digital ownership, audited smart contracts and sustainable token economies, designed so the gameplay stands on its own and the chain stays invisible to players.",
    heroCta: "Explore Web3 for your game",
    overview: {
      title: "Web3 that serves the game, not the other way round",
      paragraphs: [
        `Ownership, interoperability and creator rewards can deepen player engagement, but only when the underlying game is fun and the economy is designed to last. ${siteConfig.name} approaches Web3 gaming as game designers first and blockchain engineers second, modelling sinks, sources and incentives before a single contract is deployed.`,
        `Our teams build on-chain asset systems, marketplaces and wallet experiences that hide complexity behind familiar sign-in flows and gasless transactions. Smart contracts are written with security as a primary requirement, reviewed internally and prepared for independent audit. We also help you navigate platform policies and regional regulations so your launch plan is realistic about where and how the game can be distributed.`,
      ],
      highlights: [
        "Economy modelling before contract deployment",
        "Embedded wallets and gasless onboarding",
        "Audit-ready smart contract development",
        "Chain choice based on cost and throughput",
      ],
    },
    offerings: {
      title: "Web3 gaming services",
      subtitle:
        "Everything required to add verifiable ownership to a game without sacrificing the player experience.",
      items: [
        {
          title: "Token and economy design",
          description:
            "Simulation-backed models of currencies, rewards, crafting and sinks that stress-test inflation, bot farming and whale behaviour before launch, so the economy remains healthy as the player base grows.",
          icon: "chart",
        },
        {
          title: "Smart contract engineering",
          description:
            "Upgradeable, gas-efficient contracts for in-game assets, crafting, staking and rewards, covered by extensive unit and fuzz tests and documented for third-party security audits.",
          icon: "code",
        },
        {
          title: "On-chain asset systems",
          description:
            "NFT and semi-fungible item standards, metadata services and dynamic assets that evolve with gameplay, synchronised reliably between game servers and the chain.",
          icon: "boxes",
        },
        {
          title: "Wallet and onboarding UX",
          description:
            "Embedded wallets, social login, account abstraction and sponsored transactions that let players start in seconds, with optional upgrades to self-custody for experienced users.",
          icon: "wallet",
        },
        {
          title: "Marketplaces and trading",
          description:
            "In-game and web marketplaces with listings, auctions, royalties and fraud controls, integrated with the game client so players can trade without leaving the experience.",
          icon: "store",
        },
        {
          title: "Security and compliance review",
          description:
            "Threat modelling, key management design, transaction monitoring and guidance on storefront policies and regional rules that affect tokens, rewards and digital asset sales.",
          icon: "shield",
        },
      ],
    },
    process: {
      title: "Our Web3 gaming delivery approach",
      steps: [
        {
          title: "Feasibility and fit",
          description:
            "We assess whether on-chain ownership genuinely improves your game, which assets belong on-chain, and which chains and platforms align with your audience.",
        },
        {
          title: "Economy simulation",
          description:
            "Agent-based models test currency flows, reward rates and player behaviours across months of simulated play, producing tuning parameters and guardrails.",
        },
        {
          title: "Contract and backend build",
          description:
            "Smart contracts, indexers and game-server integrations are developed in parallel with automated test suites running on local and public test networks.",
        },
        {
          title: "Audit and closed testing",
          description:
            "Contracts go through internal review and an independent audit while a closed player group validates onboarding, trading and economy balance on testnet.",
        },
        {
          title: "Mainnet launch and monitoring",
          description:
            "We deploy with staged limits, monitor transactions and economy health in real time, and adjust parameters through governed, transparent configuration changes.",
        },
      ],
    },
    midCta: {
      title: "Wondering if Web3 fits your game?",
      subtitle: `Book a feasibility session and ${siteConfig.name} will give you a candid assessment of risks, costs and player value.`,
      label: "Book a feasibility session",
    },
    techStack: [
      {
        name: "Chains & L2s",
        items: ["Ethereum", "Polygon", "Arbitrum", "Base", "Immutable zkEVM", "Solana"],
      },
      {
        name: "Smart contracts",
        items: ["Solidity", "Rust", "Foundry", "Hardhat", "OpenZeppelin"],
      },
      {
        name: "Wallets & infrastructure",
        items: ["WalletConnect", "ethers.js", "viem", "The Graph", "IPFS", "Alchemy"],
      },
      {
        name: "Game integration",
        items: ["Unity", "Unreal Engine", "Node.js", "PostgreSQL", "Redis"],
      },
    ],
    industries: ["gaming", "banking-fintech", "startups", "e-commerce-software-development"],
    benefits: [
      {
        title: "Game design first",
        description:
          "Our economy designers have shipped free-to-play systems, so token mechanics are grounded in what keeps players engaged rather than speculation.",
        icon: "gamepad",
      },
      {
        title: "Security as a requirement",
        description:
          "Defensive contract patterns, rigorous testing and audit preparation reduce the risk of exploits that can permanently damage player trust.",
        icon: "lock",
      },
      {
        title: "Invisible complexity",
        description:
          "Players sign in with familiar accounts and never need to understand gas, seed phrases or bridges unless they choose to.",
        icon: "sparkles",
      },
      {
        title: "Honest advice",
        description:
          "If on-chain features will not improve your game, we will tell you and recommend a conventional approach instead.",
        icon: "handshake",
      },
    ],
    faqs: [
      {
        question: "Do players need a crypto wallet to play?",
        answer:
          "No. We typically implement embedded wallets created automatically when a player signs in with email or a social account. Transactions can be sponsored so players never pay gas directly. Experienced users can still connect their own wallet if they prefer self-custody.",
      },
      {
        question: "Which blockchain should we choose?",
        answer:
          "It depends on transaction volume, fees, ecosystem, tooling and where your players already are. We compare candidate chains against your expected activity and asset model during feasibility, and design contracts to be portable where practical so you are not locked in prematurely.",
      },
      {
        question: "Can you add Web3 features to an existing game?",
        answer: `Yes. ${siteConfig.name} often starts with a limited scope, such as tradable cosmetics or verifiable achievements, connected to your existing backend through an integration layer. This lets you measure player interest before committing core systems to the chain.`,
      },
      {
        question: "How do you handle smart contract security?",
        answer:
          "Contracts follow established libraries and patterns, are covered by unit, integration and fuzz tests, and go through internal peer review. We then prepare documentation and support an independent third-party audit, and recommend staged launches with value limits and emergency pause controls.",
      },
    ],
  },

  /* -------------------------------------------------------------
   * AR/VR/XR Gaming
   * ----------------------------------------------------------- */
  {
    slug: "ar-vr-xr-gaming",
    name: "AR/VR/XR Gaming",
    category: "Gaming",
    icon: "glasses",
    headline: "Immersive play that feels effortless",
    summary:
      "Virtual, augmented and mixed reality games built for comfort, presence and performance on standalone headsets, PC VR and mobile AR, from first interaction prototype to store launch.",
    heroCta: "Build an immersive experience",
    overview: {
      title: "Immersion engineered around the human body",
      paragraphs: [
        `Spatial games succeed or fail on comfort. A dropped frame, an awkward locomotion scheme or a menu at the wrong distance can end a session in seconds. ${siteConfig.name} builds XR experiences with comfort and performance treated as core features, prototyping interactions on real hardware early and testing with players who have different levels of headset experience.`,
        `Our teams span standalone headsets, tethered PC VR, mixed reality passthrough and phone-based AR. We design natural hand and controller interactions, spatial audio and environments that respond to the player's real room. Beyond entertainment, the same expertise powers location-based attractions, training simulations and branded experiences that need to impress first-time users within the opening minute.`,
      ],
      highlights: [
        "Comfort-first locomotion and interaction design",
        "Hitting 72 to 120 Hz targets on standalone hardware",
        "Hand tracking, passthrough and spatial anchors",
        "Cross-platform XR builds from one codebase",
      ],
    },
    offerings: {
      title: "XR gaming capabilities",
      subtitle:
        "Specialised design and engineering for every flavour of extended reality, from room-scale VR to world-anchored AR.",
      items: [
        {
          title: "VR game development",
          description:
            "Room-scale and seated VR games with physics-driven interactions, comfortable locomotion options and polished feedback, optimised for standalone headsets as well as high-end PC VR.",
          icon: "glasses",
        },
        {
          title: "Mixed reality experiences",
          description:
            "Games that blend digital content with the player's physical space using passthrough, scene understanding and spatial anchors, so virtual objects respect walls, furniture and lighting.",
          icon: "layers",
        },
        {
          title: "Mobile AR games",
          description:
            "Location-aware and tabletop AR experiences for iOS and Android with plane detection, image tracking and shared sessions that let friends play together in the same space.",
          icon: "smartphone",
        },
        {
          title: "Interaction and comfort design",
          description:
            "Hand tracking, gesture and controller schemes, diegetic UI and accessibility settings designed through rapid on-device prototyping and structured comfort testing with real users.",
          icon: "target",
        },
        {
          title: "XR performance engineering",
          description:
            "Foveated rendering, single-pass stereo, occlusion strategies and aggressive draw-call reduction that keep frame rates locked and thermals under control on mobile chipsets.",
          icon: "cpu",
        },
        {
          title: "Location-based and training simulations",
          description:
            "Multi-user arena experiences, theme park attractions and gamified training scenarios with operator dashboards, session management and hardware fleet considerations built in.",
          icon: "building",
        },
      ],
    },
    process: {
      title: "How we build immersive games",
      steps: [
        {
          title: "Experience definition",
          description:
            "We define the core fantasy, target devices, play space and session length, then identify the interactions that must feel exceptional for the concept to work.",
        },
        {
          title: "On-device interaction prototypes",
          description:
            "Key mechanics are prototyped directly on headsets within days, letting us evaluate comfort, presence and intuitiveness before committing to art or content.",
        },
        {
          title: "Comfort and usability testing",
          description:
            "Players with varied XR experience test prototypes while we observe discomfort signals, confusion points and session drop-off, refining design accordingly.",
        },
        {
          title: "Production and optimisation",
          description:
            "Content, systems and art are built in sprints with frame-time budgets enforced on every build, so performance never becomes a late-stage emergency.",
        },
        {
          title: "Store submission and updates",
          description:
            "We prepare builds for headset storefront requirements, manage submission feedback and plan post-launch updates around player reviews and analytics.",
        },
      ],
    },
    midCta: {
      title: "Ready to put players inside your world?",
      subtitle: `${siteConfig.name} can turn your concept into an on-headset prototype so you can feel the experience before you fund it.`,
      label: "Request an XR prototype",
    },
    techStack: [
      {
        name: "Engines & SDKs",
        items: [
          "Unity XR Interaction Toolkit",
          "Unreal Engine",
          "OpenXR",
          "Meta XR SDK",
          "AR Foundation",
          "Godot XR",
        ],
      },
      {
        name: "Mobile & web AR",
        items: ["ARKit", "ARCore", "WebXR", "Three.js", "Babylon.js"],
      },
      {
        name: "Interaction & audio",
        items: ["Hand tracking APIs", "Spatial anchors", "FMOD", "Wwise", "Steam Audio"],
      },
      {
        name: "Multiplayer & tooling",
        items: ["Photon Fusion", "Normcore", "Unity Netcode", "RenderDoc", "OVR Metrics Tool"],
      },
    ],
    industries: ["gaming", "education", "real-estate", "healthcare-pharmaceuticals", "travel-hospitality", "oil-gas-and-energy"],
    benefits: [
      {
        title: "Comfort expertise",
        description:
          "Proven locomotion, camera and UI patterns minimise motion sickness so players stay in your experience longer and leave positive reviews.",
        icon: "heart",
      },
      {
        title: "Hardware-ready from day one",
        description:
          "We test on target devices from the first prototype, avoiding the common trap of designs that only work on a developer workstation.",
        icon: "glasses",
      },
      {
        title: "Cross-reality reach",
        description:
          "OpenXR-based architecture lets one codebase target multiple headsets and AR devices, protecting your investment as hardware evolves.",
        icon: "globe",
      },
      {
        title: "Beyond entertainment",
        description:
          "Our XR game expertise transfers directly to training, marketing and location-based projects that demand the same polish and reliability.",
        icon: "lightbulb",
      },
    ],
    faqs: [
      {
        question: "Which headsets and devices do you support?",
        answer:
          "We build for leading standalone headsets, PC VR systems via OpenXR, mixed reality devices with passthrough, and iOS and Android phones and tablets for AR. Device priority is decided during discovery based on your audience, distribution plans and performance requirements.",
      },
      {
        question: "How do you prevent motion sickness?",
        answer:
          "We maintain stable frame rates, offer multiple locomotion modes such as teleport and snap turning, avoid unexpected camera movement and keep UI at comfortable depths. Every build is tested with players of varying tolerance, and comfort settings are exposed so individuals can tailor the experience.",
      },
      {
        question: "Can an existing flat-screen game be adapted to VR?",
        answer: `Sometimes, but rarely by simply adding a headset camera. ${siteConfig.name} reviews your mechanics, scale and UI, then recommends which systems can be reused and which need redesigning for embodied play. The result is a VR version that feels native rather than retrofitted.`,
      },
      {
        question: "Do you build multiplayer XR experiences?",
        answer:
          "Yes. We implement co-located and remote multiplayer with avatar synchronisation, voice chat and shared spatial anchors. Network code is tuned for the tight latency requirements of XR so that hand movements and physics interactions remain believable for every participant.",
      },
    ],
  },
];
