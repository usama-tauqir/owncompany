import type { Industry } from "./types";
import { siteConfig } from "@/config/site";

export const industries: Industry[] = [
  /* -------------------------------------------------------------
   * Shopify
   * ----------------------------------------------------------- */
  {
    slug: "shopify",
    name: "Shopify",
    icon: "store",
    headline: "Shopify storefronts engineered to scale revenue",
    summary:
      "We design, build and extend Shopify and Shopify Plus stores that load fast, convert reliably and connect cleanly to the systems behind your brand.",
    overview: {
      title: "Commerce that grows without replatforming",
      paragraphs: [
        `Merchants choose Shopify for speed to market, but growth quickly exposes the limits of off-the-shelf themes and stacked apps. ${siteConfig.name} helps brands move past those limits with custom themes, headless storefronts, private apps and checkout extensions built around their catalog, fulfilment model and customer journeys rather than a template's assumptions.`,
        `Our Shopify engineers work alongside your merchandising and marketing teams to keep the store fast and maintainable as it grows. We consolidate overlapping apps, wire Shopify into ERP, PIM and 3PL platforms, and set up analytics that show exactly where shoppers hesitate, so every release is measured against conversion and average order value.`,
      ],
      highlights: [
        "Shopify Plus and headless builds",
        "Checkout and Functions extensions",
        "ERP, PIM and 3PL integrations",
        "Performance-first theme engineering",
      ],
    },
    challenges: [
      {
        title: "App sprawl slowing the storefront",
        description:
          "Dozens of third-party apps inject scripts on every page, inflating load times, creating conflicts and adding monthly fees that rarely match the value they deliver.",
        icon: "zap",
      },
      {
        title: "Inventory out of sync with operations",
        description:
          "Stock levels, pricing and order status drift between Shopify and back-office systems, leading to overselling, manual corrections and frustrated customer service teams.",
        icon: "database",
      },
      {
        title: "Themes that cannot express the brand",
        description:
          "Generic themes limit storytelling, bundling and product configuration, forcing brands to compromise on the experiences that differentiate them from marketplace competitors.",
        icon: "palette",
      },
      {
        title: "Scaling into new markets",
        description:
          "Launching additional currencies, languages and regional catalogues introduces duplicated content, tax complexity and fragmented reporting across multiple storefronts.",
        icon: "globe",
      },
    ],
    solutions: [
      {
        title: "Custom theme development",
        description:
          "Hand-built Online Store 2.0 themes with reusable sections, accessible components and lean JavaScript, giving merchandisers flexibility while keeping Core Web Vitals firmly in the green.",
        icon: "palette",
      },
      {
        title: "Headless Shopify storefronts",
        description:
          "Hydrogen and Next.js storefronts backed by the Storefront API, ideal for content-rich brands that need editorial freedom, instant navigation and full control over the front-end stack.",
        icon: "layers",
      },
      {
        title: "Private and public app builds",
        description:
          "Purpose-built Shopify apps that replace several off-the-shelf plugins, covering subscriptions, B2B pricing, loyalty rules and custom fulfilment logic tailored to your operations.",
        icon: "puzzle",
      },
      {
        title: "Checkout and Functions extensions",
        description:
          "Checkout UI extensions and Shopify Functions for custom discounts, delivery rules, payment customisations and upsells, implemented within Shopify's supported, upgrade-safe extension model.",
        icon: "cart",
      },
      {
        title: "Back-office integrations",
        description:
          "Reliable, monitored connections between Shopify and ERP, PIM, WMS and CRM platforms so products, orders, inventory and customer data stay consistent across every channel.",
        icon: "workflow",
      },
      {
        title: "Store migrations and replatforming",
        description:
          "Structured migrations from legacy commerce platforms with preserved SEO equity, cleansed product data, redirected URLs and customer accounts moved over without disrupting trading.",
        icon: "rocket",
      },
    ],
    stats: [
      { value: 45, suffix: "%", label: "faster average page loads" },
      { value: 28, suffix: "%", label: "lift in checkout conversion" },
      { value: 60, suffix: "%", label: "fewer third-party apps" },
      { value: 150, suffix: "+", label: "Shopify stores delivered" },
    ],
    services: [
      "shopify",
      "design-development",
      "ui-ux-design",
      "custom-development",
      "maintenance-support",
      "data-analytics-and-insights",
    ],
    testimonial: {
      quote: `${siteConfig.name} replaced eleven apps with two custom builds and rebuilt our theme from the ground up. The store is noticeably faster, and our team finally ships merchandising changes without waiting on developers.`,
      author: "Director of E-commerce",
      role: "Direct-to-consumer apparel brand",
    },
    faqs: [
      {
        question: "Do you work with both Shopify and Shopify Plus?",
        answer:
          "Yes. We build on standard Shopify plans for growing merchants and on Shopify Plus for brands that need checkout extensibility, B2B features, expansion stores and higher API limits.",
      },
      {
        question: "Should we go headless?",
        answer:
          "Headless suits brands with heavy editorial content or complex front-end requirements. For many merchants a well-engineered Online Store 2.0 theme is faster to deliver and cheaper to run, and we will recommend whichever fits your roadmap.",
      },
      {
        question: "Can you take over an existing store?",
        answer:
          "Absolutely. We start with a technical audit of the theme, apps and integrations, prioritise quick wins, and then move into a monthly roadmap of improvements and support.",
      },
    ],
  },

  /* -------------------------------------------------------------
   * Travel & Hospitality
   * ----------------------------------------------------------- */
  {
    slug: "travel-hospitality",
    name: "Travel & Hospitality",
    icon: "plane",
    headline: "Seamless digital journeys from booking to checkout",
    summary:
      "We help airlines, hotels, tour operators and travel platforms modernise booking, guest experience and operations with connected, data-driven software.",
    overview: {
      title: "Every touchpoint of the trip, connected",
      paragraphs: [
        `Travellers expect to search, book, change and check in from their phones, and to be recognised wherever they show up. Behind that expectation sit reservation engines, property systems, distribution channels and loyalty programmes that were rarely designed to work together. ${siteConfig.name} builds the integration layer and customer-facing products that turn those fragmented systems into one coherent journey.`,
        `We work with hospitality groups, online travel agencies and destination businesses to raise direct bookings, personalise offers and give staff better tools on the ground. Our teams understand rate parity, inventory distribution, seasonal demand and the operational realities of front desks and contact centres, which keeps our solutions practical as well as polished.`,
      ],
      highlights: [
        "Direct booking engines",
        "PMS and channel manager integration",
        "Guest apps and digital check-in",
        "Dynamic pricing analytics",
      ],
    },
    challenges: [
      {
        title: "Dependence on third-party channels",
        description:
          "High commissions from online travel agencies erode margins, while clunky direct booking flows push guests back to intermediaries who then own the customer relationship.",
        icon: "wallet",
      },
      {
        title: "Disconnected guest data",
        description:
          "Profiles are scattered across reservations, property, loyalty and point-of-sale systems, making it difficult to recognise returning guests or tailor offers to their preferences.",
        icon: "users",
      },
      {
        title: "Volatile, seasonal demand",
        description:
          "Pricing and staffing decisions rely on spreadsheets and instinct, leaving revenue on the table during peaks and overspending on resources during quieter periods.",
        icon: "chart",
      },
      {
        title: "Legacy reservation platforms",
        description:
          "Ageing booking and inventory systems are hard to integrate, slow to change and struggle with the mobile, real-time experiences that modern travellers now consider standard.",
        icon: "server",
      },
    ],
    solutions: [
      {
        title: "Direct booking platforms",
        description:
          "Fast, mobile-first booking engines with live availability, packages, add-ons and loyalty pricing, designed to win more direct reservations and reduce reliance on commission-based channels.",
        icon: "globe",
      },
      {
        title: "Guest experience apps",
        description:
          "Mobile apps for digital check-in, keyless entry, in-stay requests, itinerary management and messaging, giving guests convenience and staff a real-time view of their needs.",
        icon: "smartphone",
      },
      {
        title: "Unified guest profiles",
        description:
          "A customer data layer that merges reservations, stays, spend and feedback into a single profile, powering personalised offers, smarter service and loyalty programme insights.",
        icon: "database",
      },
      {
        title: "Revenue and demand analytics",
        description:
          "Forecasting dashboards and pricing models that combine booking pace, events, competitor rates and historical demand to guide rate strategy and staffing across properties.",
        icon: "chart",
      },
      {
        title: "Systems integration hub",
        description:
          "API middleware connecting property management, channel managers, GDS, payment gateways and CRM, so rates, inventory and bookings stay accurate everywhere you sell.",
        icon: "network",
      },
      {
        title: "AI travel assistants",
        description:
          "Conversational assistants that answer pre-arrival questions, handle booking changes and recommend experiences, deflecting routine contact-centre volume while staying on-brand and multilingual.",
        icon: "bot",
      },
    ],
    stats: [
      { value: 32, suffix: "%", label: "increase in direct bookings" },
      { value: 50, suffix: "%", label: "faster guest check-in" },
      { value: 25, suffix: "%", label: "lower contact-centre volume" },
      { value: 18, suffix: "%", label: "uplift in ancillary revenue" },
    ],
    services: [
      "website-development",
      "mobile-development",
      "ui-ux-design",
      "genai",
      "data-analytics-and-insights",
      "cloud-application",
    ],
    testimonial: {
      quote: `Our direct channel used to be an afterthought. ${siteConfig.name} rebuilt the booking flow and connected it to our property systems, and direct reservations are now our fastest-growing segment.`,
      author: "VP of Digital Commerce",
      role: "Regional hotel group",
    },
    faqs: [
      {
        question: "Can you integrate with our existing property management system?",
        answer:
          "Yes. We regularly integrate with widely used PMS, channel manager and GDS platforms through their APIs, and build middleware where direct connections are limited.",
      },
      {
        question: "Do you build solutions for tour operators and OTAs as well as hotels?",
        answer:
          "We do. Our work spans accommodation, airlines, tour and activity operators, and online travel platforms, each with tailored inventory, pricing and supplier integration logic.",
      },
      {
        question: "How do you handle peak-season traffic?",
        answer:
          "We design on cloud infrastructure with auto-scaling, caching and load testing against realistic peak scenarios, so booking flows stay responsive when demand spikes.",
      },
    ],
  },

  /* -------------------------------------------------------------
   * Public Sector
   * ----------------------------------------------------------- */
  {
    slug: "public-sector",
    name: "Public Sector",
    icon: "building",
    headline: "Citizen-centred digital services built securely",
    summary:
      "We help government bodies and public institutions deliver accessible digital services, modernise legacy platforms and use data responsibly to improve outcomes.",
    overview: {
      title: "Modern public services, delivered with care",
      paragraphs: [
        `Citizens now compare government services with the best apps they use every day, yet public bodies must also meet strict standards for security, accessibility, procurement and data protection. ${siteConfig.name} brings product thinking and disciplined engineering to that environment, building services that are simple to use, inclusive by design and robust enough for national scale.`,
        `We partner with ministries, municipalities, regulators and public agencies to replace paper-based processes, consolidate legacy systems and open up data for better decision-making. Our delivery approach is transparent and iterative, with clear governance, documented architecture and knowledge transfer so in-house teams can confidently own and evolve the services after launch.`,
      ],
      highlights: [
        "Accessible citizen portals",
        "Legacy system modernisation",
        "Secure, sovereign cloud hosting",
        "Open data and analytics",
      ],
    },
    challenges: [
      {
        title: "Paper-heavy, manual processes",
        description:
          "Applications, permits and case files still move through forms, email and in-person visits, creating long waiting times and heavy administrative workloads for public servants.",
        icon: "file",
      },
      {
        title: "Ageing core systems",
        description:
          "Decades-old mainframes and bespoke applications are expensive to maintain, rely on scarce skills and make it difficult to introduce new policies or digital channels.",
        icon: "server",
      },
      {
        title: "Stringent security and compliance",
        description:
          "Public data must be protected against growing cyber threats while meeting data residency, privacy and audit obligations that many commercial solutions fail to address.",
        icon: "shield",
      },
      {
        title: "Inclusive access for every citizen",
        description:
          "Services must work for people with disabilities, low digital confidence, limited connectivity and different languages, which demands careful research and accessibility engineering.",
        icon: "users",
      },
    ],
    solutions: [
      {
        title: "Citizen service portals",
        description:
          "Single sign-on portals where residents and businesses apply, pay, track requests and receive notifications, built to recognised accessibility standards and tested with real users.",
        icon: "globe",
      },
      {
        title: "Case and workflow management",
        description:
          "Configurable case management platforms that digitise approvals, inspections and casework, with role-based queues, audit trails and service-level tracking for every request.",
        icon: "workflow",
      },
      {
        title: "Legacy modernisation",
        description:
          "Phased modernisation of core systems using APIs, strangler patterns and data migration, reducing risk while progressively retiring costly platforms without interrupting critical services.",
        icon: "layers",
      },
      {
        title: "Secure government cloud",
        description:
          "Architecture and migration onto compliant cloud environments with data residency controls, encryption, identity federation and continuous monitoring aligned with public-sector security frameworks.",
        icon: "cloud",
      },
      {
        title: "Data platforms and dashboards",
        description:
          "Integrated data platforms and executive dashboards that combine operational, financial and service data, helping leaders plan budgets, track performance and publish open data.",
        icon: "chart",
      },
      {
        title: "AI-assisted public services",
        description:
          "Responsible AI for document processing, multilingual virtual assistants and triage, deployed with human oversight, explainability and governance controls suited to public accountability.",
        icon: "brain",
      },
    ],
    stats: [
      { value: 70, suffix: "%", label: "reduction in paper-based processing" },
      { value: 3, suffix: "x", label: "faster application turnaround" },
      { value: 99.9, suffix: "%", label: "service availability achieved" },
      { value: 40, suffix: "+", label: "public services digitised" },
    ],
    services: [
      "custom-development",
      "website-development",
      "cloud-migration-cloud-ops",
      "cybersecurity-solutions",
      "data-analytics-and-insights",
      "advisory-strategy",
    ],
    testimonial: {
      quote: `${siteConfig.name} helped us move a permit process that took weeks into a fully online service. Citizens get updates in real time, and our officers spend their time on decisions instead of paperwork.`,
      author: "Director of Digital Services",
      role: "Municipal government authority",
    },
    faqs: [
      {
        question: "Can you meet our data residency requirements?",
        answer:
          "Yes. We design deployments on in-country cloud regions or on-premises infrastructure as required, with encryption, access controls and logging aligned to your security policies.",
      },
      {
        question: "How do you ensure services are accessible?",
        answer:
          "Accessibility is built in from discovery. We follow WCAG guidelines, test with assistive technologies and include users with diverse needs in research and usability testing.",
      },
      {
        question: "Do you support formal procurement processes?",
        answer:
          "We are experienced in responding to tenders and frameworks, and we provide the documentation, governance reporting and delivery transparency public bodies expect.",
      },
    ],
  },

  /* -------------------------------------------------------------
   * Telecommunication
   * ----------------------------------------------------------- */
  {
    slug: "telecommunication",
    name: "Telecommunication",
    icon: "radio",
    headline: "Digital platforms for modern network operators",
    summary:
      "We help telecom operators and connectivity providers modernise BSS and OSS, launch digital-first customer channels and monetise network data with intelligent software.",
    overview: {
      title: "From network operator to digital service provider",
      paragraphs: [
        `Telecom operators face flat core revenues, rising infrastructure costs and customers who expect instant, app-based service. Growth now depends on launching bundles and digital products quickly, which is hard when billing, provisioning and CRM platforms are tightly coupled and slow to change. ${siteConfig.name} helps operators decouple those layers and build the digital channels customers prefer.`,
        `Our teams deliver self-care apps, digital sales journeys, product catalogue services and analytics platforms that sit on top of existing BSS and OSS investments. We also apply machine learning to churn prediction, network fault detection and customer service automation, helping operators lower cost-to-serve while improving the experience across mobile, broadband and enterprise connectivity.`,
      ],
      highlights: [
        "Self-care apps and portals",
        "BSS and OSS modernisation",
        "Churn and network analytics",
        "Service automation with AI",
      ],
    },
    challenges: [
      {
        title: "Slow time to market for offers",
        description:
          "Launching a new plan or bundle can take months because product rules are hard-coded across billing, provisioning and sales systems that each need separate changes.",
        icon: "zap",
      },
      {
        title: "High customer churn",
        description:
          "Price-driven competition and inconsistent service experiences make it easy for subscribers to switch, while operators lack timely signals to intervene before customers leave.",
        icon: "users",
      },
      {
        title: "Expensive customer support",
        description:
          "Contact centres handle large volumes of routine billing, activation and fault queries that could be resolved through better digital self-service and automated diagnostics.",
        icon: "headphones",
      },
      {
        title: "Untapped network data",
        description:
          "Vast amounts of usage, network and device data sit in silos, rarely turned into insights for capacity planning, personalised offers or new enterprise data products.",
        icon: "database",
      },
    ],
    solutions: [
      {
        title: "Digital self-care apps",
        description:
          "Mobile and web self-care experiences for plan changes, top-ups, bill payments, usage tracking and fault reporting, integrated with core systems for real-time account accuracy.",
        icon: "smartphone",
      },
      {
        title: "Product catalogue and order orchestration",
        description:
          "Centralised catalogue and order orchestration services that let marketing teams configure offers once and launch them across channels without lengthy development cycles.",
        icon: "boxes",
      },
      {
        title: "Churn prediction models",
        description:
          "Machine learning models that score subscribers by churn risk using usage, billing and interaction patterns, triggering targeted retention offers through the right channel.",
        icon: "brain",
      },
      {
        title: "Network operations dashboards",
        description:
          "Real-time dashboards and anomaly detection for network performance, outages and capacity, helping operations teams prioritise issues and communicate proactively with affected customers.",
        icon: "network",
      },
      {
        title: "Intelligent customer service",
        description:
          "AI-driven virtual agents and agent-assist tools that resolve common queries, run line diagnostics and summarise interactions, reducing handling times across support channels.",
        icon: "bot",
      },
      {
        title: "Enterprise and IoT portals",
        description:
          "B2B portals for managing connectivity, SIM fleets, IoT devices and usage reports, giving enterprise customers control while opening new recurring revenue streams.",
        icon: "cpu",
      },
    ],
    stats: [
      { value: 35, suffix: "%", label: "shift to digital self-service" },
      { value: 22, suffix: "%", label: "reduction in subscriber churn" },
      { value: 60, suffix: "%", label: "faster offer launches" },
      { value: 30, suffix: "%", label: "lower average handling time" },
    ],
    services: [
      "mobile-development",
      "custom-development",
      "ai-data-systems",
      "d365-crm",
      "cloud-application",
      "devops",
    ],
    testimonial: {
      quote: `With ${siteConfig.name} we moved product configuration out of our billing stack. Our marketing team now launches new bundles in weeks, and self-care adoption has climbed steadily since the new app went live.`,
      author: "Head of Digital Channels",
      role: "Mobile and broadband operator",
    },
    faqs: [
      {
        question: "Do we need to replace our BSS to modernise?",
        answer:
          "Not necessarily. We often build an API and orchestration layer on top of existing BSS and OSS platforms, delivering new capabilities quickly while you plan longer-term replacement.",
      },
      {
        question: "Can your apps handle millions of subscribers?",
        answer:
          "Yes. We architect for high concurrency with cloud-native services, caching and horizontal scaling, and validate capacity through load testing before launch.",
      },
      {
        question: "How do you protect subscriber data?",
        answer:
          "We apply encryption, strict access controls, data minimisation and audit logging, and align implementations with the telecom and privacy regulations in your markets.",
      },
    ],
  },

  /* -------------------------------------------------------------
   * Retail & CPG
   * ----------------------------------------------------------- */
  {
    slug: "retail-and-cpg",
    name: "Retail & CPG",
    icon: "cart",
    headline: "Connected retail from shelf to screen",
    summary:
      "We help retailers and consumer goods brands unify channels, sharpen demand planning and build personalised shopping experiences that grow loyalty and margin.",
    overview: {
      title: "Unified commerce for modern retail",
      paragraphs: [
        `Shoppers move freely between stores, websites, marketplaces and social channels, and they expect consistent pricing, availability and service everywhere. Many retailers and CPG brands still run those channels on separate systems with separate data. ${siteConfig.name} connects them, giving teams a single view of inventory, customers and performance across the entire business.`,
        `Our work spans omnichannel commerce platforms, store operations apps, supplier and distributor portals, and analytics that improve forecasting and promotions. For CPG manufacturers we build direct-to-consumer channels and trade analytics; for retailers we focus on fulfilment, clienteling and loyalty, always tying technology investments to measurable gains in sell-through and margin.`,
      ],
      highlights: [
        "Omnichannel order management",
        "Demand forecasting with AI",
        "Loyalty and personalisation",
        "Store and field operations apps",
      ],
    },
    challenges: [
      {
        title: "Fragmented inventory visibility",
        description:
          "Stock data lives in separate store, warehouse and online systems, causing missed sales, costly markdowns and unreliable click-and-collect or ship-from-store promises.",
        icon: "boxes",
      },
      {
        title: "Inaccurate demand forecasts",
        description:
          "Promotions, seasonality and shifting consumer behaviour make spreadsheet-based forecasting unreliable, leading to stockouts on bestsellers and excess inventory on slow movers.",
        icon: "chart",
      },
      {
        title: "Generic customer experiences",
        description:
          "Without unified customer data, brands send the same offers to everyone, missing chances to reward loyal shoppers and re-engage lapsed customers with relevant messages.",
        icon: "users",
      },
      {
        title: "Thin margins and rising costs",
        description:
          "Labour, logistics and acquisition costs keep climbing, putting pressure on retailers to automate store tasks and streamline supply chains without degrading service.",
        icon: "coins",
      },
    ],
    solutions: [
      {
        title: "Omnichannel commerce platforms",
        description:
          "Composable commerce builds that share catalogue, pricing, promotions and inventory across web, app, marketplace and store channels, enabling buy-online-pick-up-in-store and endless aisle.",
        icon: "cart",
      },
      {
        title: "AI demand forecasting",
        description:
          "Forecasting models that blend sales history, promotions, weather and local events to improve replenishment, allocation and markdown decisions at store and SKU level.",
        icon: "brain",
      },
      {
        title: "Loyalty and personalisation engines",
        description:
          "Customer data platforms and loyalty programmes that segment shoppers, personalise offers in real time and measure the incremental revenue generated by every campaign.",
        icon: "heart",
      },
      {
        title: "Store associate apps",
        description:
          "Mobile tools for stock lookup, clienteling, task management and mobile checkout, helping store teams serve shoppers faster and spend less time on manual administration.",
        icon: "smartphone",
      },
      {
        title: "Distributor and trade portals",
        description:
          "B2B portals for CPG brands to manage distributor orders, trade promotions, claims and retail execution data, improving visibility across indirect sales channels.",
        icon: "handshake",
      },
      {
        title: "ERP and supply chain integration",
        description:
          "Integration of commerce and store systems with ERP, warehouse and transport platforms, giving finance and operations accurate, timely data for planning and reconciliation.",
        icon: "workflow",
      },
    ],
    stats: [
      { value: 25, suffix: "%", label: "reduction in stockouts" },
      { value: 30, suffix: "%", label: "higher loyalty engagement" },
      { value: 15, suffix: "%", label: "less excess inventory" },
      { value: 20, suffix: "%", label: "growth in online revenue" },
    ],
    services: [
      "website-development",
      "mobile-development",
      "d365-erp",
      "data-analytics-and-insights",
      "ai-data-systems",
      "shopify",
    ],
    testimonial: {
      quote: `${siteConfig.name} gave us a single view of stock across stores and online for the first time. Click-and-collect is now reliable, and our buyers trust the forecasts enough to act on them.`,
      author: "Chief Operating Officer",
      role: "Multi-brand specialty retailer",
    },
    faqs: [
      {
        question: "Can you work with our existing ERP and POS systems?",
        answer:
          "Yes. We integrate with established ERP, POS and warehouse systems through APIs and middleware, so you can modernise customer channels without replacing your operational core.",
      },
      {
        question: "Do you support CPG manufacturers as well as retailers?",
        answer:
          "We do. For CPG brands we build direct-to-consumer channels, distributor portals and trade promotion analytics alongside the retail-facing solutions we deliver.",
      },
      {
        question: "How quickly can we see results from forecasting?",
        answer:
          "Most clients start with a pilot category over a few months, compare model accuracy against current methods and then roll out across the wider assortment.",
      },
    ],
  },

  /* -------------------------------------------------------------
   * Oil, Gas, and Energy
   * ----------------------------------------------------------- */
  {
    slug: "oil-gas-and-energy",
    name: "Oil, Gas, and Energy",
    icon: "fuel",
    headline: "Safer, smarter operations across the energy value chain",
    summary:
      "We help energy companies digitise field operations, predict equipment failures and manage the transition to cleaner energy with secure industrial software.",
    overview: {
      title: "Digital operations for a changing energy market",
      paragraphs: [
        `Energy producers and distributors operate complex, high-risk assets across remote locations, while facing pressure to cut emissions, control costs and meet tightening regulation. ${siteConfig.name} helps upstream, midstream, downstream and utility organisations turn operational data into timely decisions, from predictive maintenance and production monitoring to emissions reporting and workforce safety.`,
        `We connect sensor, SCADA and enterprise data into secure platforms that engineers, field crews and executives can actually use. Our solutions are built for harsh, low-connectivity environments and strict cybersecurity requirements, and they help organisations extend asset life, reduce unplanned downtime and build the data foundation needed for renewables, storage and grid modernisation.`,
      ],
      highlights: [
        "Predictive asset maintenance",
        "Field service mobility",
        "Emissions and ESG reporting",
        "OT and IT data integration",
      ],
    },
    challenges: [
      {
        title: "Costly unplanned downtime",
        description:
          "Unexpected failures in pumps, compressors and turbines halt production, trigger safety risks and cost far more than planned maintenance performed at the right time.",
        icon: "wrench",
      },
      {
        title: "Siloed operational data",
        description:
          "SCADA, historian, maintenance and ERP data sit in separate systems, so engineers spend hours compiling reports instead of analysing trends and acting on early warnings.",
        icon: "database",
      },
      {
        title: "Remote, hazardous field work",
        description:
          "Field crews rely on paper permits and radio updates in remote locations, making it harder to enforce safety procedures and capture accurate inspection records.",
        icon: "shield",
      },
      {
        title: "Emissions and regulatory pressure",
        description:
          "Regulators and investors demand accurate, auditable emissions and ESG data, yet much of it is still gathered manually from disparate sites and spreadsheets.",
        icon: "leaf",
      },
    ],
    solutions: [
      {
        title: "Predictive maintenance platforms",
        description:
          "Machine learning models that analyse vibration, temperature and pressure signals to forecast equipment failures, prioritise work orders and extend the life of critical assets.",
        icon: "cpu",
      },
      {
        title: "Operations data hubs",
        description:
          "Secure platforms that unify SCADA, historian, maintenance and enterprise data, providing a trusted single source for production, reliability and performance analytics.",
        icon: "server",
      },
      {
        title: "Offline-first field apps",
        description:
          "Mobile apps for inspections, permits-to-work, incident reporting and asset checks that work without connectivity and synchronise automatically once crews are back in range.",
        icon: "smartphone",
      },
      {
        title: "Emissions monitoring and ESG reporting",
        description:
          "Automated collection and calculation of emissions data across sites, with dashboards and audit trails that support regulatory submissions and sustainability disclosures.",
        icon: "leaf",
      },
      {
        title: "Digital twins and visualisation",
        description:
          "Interactive 3D models of facilities and pipelines linked to live operational data, supporting remote monitoring, training, scenario planning and safer turnaround preparation.",
        icon: "layers",
      },
      {
        title: "Industrial cybersecurity",
        description:
          "Security assessments, network segmentation and continuous monitoring for operational technology environments, protecting control systems against increasingly targeted cyber threats.",
        icon: "lock",
      },
    ],
    stats: [
      { value: 35, suffix: "%", label: "less unplanned downtime" },
      { value: 20, suffix: "%", label: "lower maintenance costs" },
      { value: 80, suffix: "%", label: "faster inspection reporting" },
      { value: 50, suffix: "+", label: "industrial sites connected" },
    ],
    services: [
      "ai-data-systems",
      "data-analytics-and-insights",
      "mobile-development",
      "cybersecurity-solutions",
      "d365-erp",
      "cloud-migration-cloud-ops",
    ],
    testimonial: {
      quote: `${siteConfig.name} brought our sensor and maintenance data together and built models our reliability engineers actually trust. We now catch compressor issues weeks before they become shutdowns.`,
      author: "Head of Asset Reliability",
      role: "Midstream energy operator",
    },
    faqs: [
      {
        question: "Can your solutions work in low-connectivity environments?",
        answer:
          "Yes. Our field applications are built offline-first, storing data securely on the device and synchronising when a connection becomes available.",
      },
      {
        question: "Do you integrate with SCADA and historian systems?",
        answer:
          "We integrate with common industrial protocols, historians and SCADA platforms, typically through secure gateways that respect separation between IT and OT networks.",
      },
      {
        question: "Do you work with renewable energy companies?",
        answer:
          "Yes. We support solar, wind, storage and utility clients with asset monitoring, forecasting and grid analytics alongside our work with traditional oil and gas operators.",
      },
    ],
  },

  /* -------------------------------------------------------------
   * Startups
   * ----------------------------------------------------------- */
  {
    slug: "startups",
    name: "Startups",
    icon: "rocket",
    headline: "From idea to traction, built to scale",
    summary:
      "We help founders validate ideas, ship investor-ready MVPs and scale their products and engineering teams without burning runway on avoidable rework.",
    overview: {
      title: "A product partner for every funding stage",
      paragraphs: [
        `Early-stage companies need to learn fast, spend carefully and avoid technical shortcuts that become expensive after the next funding round. ${siteConfig.name} works with founders as a hands-on product and engineering partner, helping shape the problem, define a focused MVP and build it on an architecture that can grow with the business.`,
        `From pre-seed prototypes to post-Series B platforms, we provide the design, engineering, cloud and data expertise that young teams rarely have in-house all at once. We can deliver end to end, extend your existing developers, or help you hire and hand over to a permanent team once product-market fit is clear.`,
      ],
      highlights: [
        "Discovery and product strategy",
        "MVPs in weeks, not quarters",
        "Scalable cloud architecture",
        "Flexible team models",
      ],
    },
    challenges: [
      {
        title: "Limited runway and time pressure",
        description:
          "Founders must prove traction before the money runs out, so every sprint spent on the wrong feature or unstable code directly threatens the next fundraise.",
        icon: "target",
      },
      {
        title: "Unclear product scope",
        description:
          "Ambitious visions often translate into bloated first releases, delaying launch and making it harder to learn which features customers genuinely value and pay for.",
        icon: "compass",
      },
      {
        title: "Hiring senior talent early",
        description:
          "Recruiting experienced engineers, designers and architects is slow and expensive, leaving many startups with gaps in critical skills at the moments they matter most.",
        icon: "users",
      },
      {
        title: "Technical debt at scale",
        description:
          "Quick prototypes stitched together for a demo struggle under real users, forcing painful rewrites just as growth, investor scrutiny and customer expectations increase.",
        icon: "wrench",
      },
    ],
    solutions: [
      {
        title: "Product discovery sprints",
        description:
          "Short, structured workshops covering user research, competitor analysis, prioritisation and clickable prototypes, so you commit engineering budget only to ideas that customers validate.",
        icon: "lightbulb",
      },
      {
        title: "MVP design and development",
        description:
          "Lean, production-quality web and mobile MVPs built on proven frameworks, with analytics in place from day one to measure activation, retention and conversion.",
        icon: "rocket",
      },
      {
        title: "Scalable cloud foundations",
        description:
          "Cost-conscious cloud architecture, CI/CD pipelines and infrastructure as code that keep early hosting bills low while being ready to handle rapid user growth.",
        icon: "cloud",
      },
      {
        title: "AI-powered product features",
        description:
          "Generative AI and machine learning features such as assistants, recommendations and document automation, prototyped quickly and hardened for production when they prove their value.",
        icon: "sparkles",
      },
      {
        title: "Dedicated and extended teams",
        description:
          "Senior engineers, designers and QA specialists who join your team on flexible terms, scaling up for launches and down when you build your permanent in-house team.",
        icon: "users",
      },
      {
        title: "Technical due diligence support",
        description:
          "Architecture reviews, code audits and security assessments that prepare your platform for investor scrutiny and give clear, prioritised plans for addressing technical risks.",
        icon: "clipboard",
      },
    ],
    stats: [
      { value: 12, suffix: " wks", label: "typical MVP launch time" },
      { value: 40, suffix: "%", label: "lower early build costs" },
      { value: 200, suffix: "+", label: "startup products launched" },
      { value: 85, suffix: "%", label: "of clients raise follow-on funding" },
    ],
    services: [
      "product-studio",
      "ui-ux-design",
      "custom-development",
      "mobile-development",
      "staff-augmentation",
      "genai",
    ],
    testimonial: {
      quote: `${siteConfig.name} helped us cut our feature list in half and still launch something customers loved. We shipped in three months, raised our seed round, and the codebase held up as we grew.`,
      author: "Co-founder and CEO",
      role: "Seed-stage B2B SaaS startup",
    },
    faqs: [
      {
        question: "Do you work with pre-seed startups?",
        answer:
          "Yes. We offer compact discovery and prototype engagements designed for early budgets, helping you validate the concept before committing to a full build.",
      },
      {
        question: "Who owns the intellectual property?",
        answer:
          "You do. All code, designs and documentation produced during the engagement are assigned to your company under our standard agreements.",
      },
      {
        question: "Can you help us transition to an in-house team?",
        answer:
          "Absolutely. We document the architecture, pair with your new hires and can support recruitment, so knowledge transfers smoothly when you are ready to build internally.",
      },
    ],
  },

  /* -------------------------------------------------------------
   * E-commerce
   * ----------------------------------------------------------- */
  {
    slug: "e-commerce-software-development",
    name: "E-commerce",
    icon: "card",
    headline: "Commerce platforms built for conversion and growth",
    summary:
      "We engineer custom and composable e-commerce platforms, marketplaces and B2B portals that deliver fast, personalised buying experiences at any scale.",
    overview: {
      title: "Commerce engineering beyond the template",
      paragraphs: [
        `Online sellers compete on speed, convenience and relevance, and margins depend on getting each of those right at scale. As catalogues, channels and order volumes grow, monolithic platforms become difficult to extend. ${siteConfig.name} designs commerce architectures, from headless and composable stacks to fully custom marketplaces, that let businesses add capabilities without destabilising what already works.`,
        `We build storefronts, checkout flows, search, payments, order management and seller tooling for B2C, B2B and multi-vendor models. Our engineers pair with growth and operations teams to tie technical work to commercial outcomes such as conversion rate, basket size and fulfilment cost, and we instrument every journey so improvements can be measured precisely.`,
      ],
      highlights: [
        "Headless and composable commerce",
        "Multi-vendor marketplaces",
        "B2B ordering portals",
        "Payments and checkout optimisation",
      ],
    },
    challenges: [
      {
        title: "Checkout abandonment",
        description:
          "Long forms, limited payment options and slow pages cause shoppers to abandon carts at the final step, wasting the acquisition spend that brought them there.",
        icon: "cart",
      },
      {
        title: "Platform limits on growth",
        description:
          "Monolithic platforms make it slow and risky to add new channels, regions or business models, so every major initiative turns into a costly custom workaround.",
        icon: "layers",
      },
      {
        title: "Poor product discovery",
        description:
          "Basic keyword search and static category pages fail to surface relevant products in large catalogues, reducing conversion and increasing reliance on paid traffic.",
        icon: "eye",
      },
      {
        title: "Complex B2B buying",
        description:
          "Business buyers need negotiated pricing, approval workflows, bulk ordering and account management that consumer-focused platforms rarely support without heavy customisation.",
        icon: "briefcase",
      },
    ],
    solutions: [
      {
        title: "Headless storefronts",
        description:
          "High-performance front ends decoupled from commerce engines, enabling rich content, instant page transitions and independent release cycles for marketing and engineering teams.",
        icon: "monitor",
      },
      {
        title: "Marketplace platforms",
        description:
          "Multi-vendor marketplaces with seller onboarding, catalogue moderation, split payments, commissions and dispute handling, designed to scale both supply and demand sides.",
        icon: "store",
      },
      {
        title: "B2B commerce portals",
        description:
          "Account-based ordering with customer-specific catalogues, contract pricing, quotes, approval chains and ERP-linked invoicing, giving business buyers a fast self-service experience.",
        icon: "briefcase",
      },
      {
        title: "Checkout and payments",
        description:
          "Streamlined, one-page checkouts with wallets, buy-now-pay-later, local payment methods and fraud screening, tuned through experimentation to reduce friction and failed payments.",
        icon: "wallet",
      },
      {
        title: "Search and recommendations",
        description:
          "AI-driven search, faceted navigation and personalised recommendations that help shoppers find relevant products quickly and increase average order value across the catalogue.",
        icon: "sparkles",
      },
      {
        title: "Order and fulfilment management",
        description:
          "Order management services that route orders across warehouses, stores and dropship partners, with real-time tracking and automated returns to cut fulfilment costs.",
        icon: "box",
      },
    ],
    stats: [
      { value: 40, suffix: "%", label: "faster checkout flows" },
      { value: 26, suffix: "%", label: "increase in conversion rate" },
      { value: 18, suffix: "%", label: "higher average order value" },
      { value: 10, suffix: "x", label: "peak traffic handled" },
    ],
    services: [
      "website-development",
      "custom-development",
      "payment-as-a-service",
      "ui-ux-design",
      "cloud-application",
      "quality-assurance",
    ],
    testimonial: {
      quote: `${siteConfig.name} rebuilt our checkout and search on a composable stack. Conversion improved within the first month, and our team can now launch new markets without touching the core platform.`,
      author: "Head of Digital",
      role: "Online home goods retailer",
    },
    faqs: [
      {
        question: "Should we build custom or use an existing commerce platform?",
        answer:
          "It depends on your model and growth plans. We often combine a proven commerce engine with custom services where you need differentiation, avoiding unnecessary build effort.",
      },
      {
        question: "Can you migrate our store without losing SEO rankings?",
        answer:
          "Yes. We map URLs, preserve metadata and structured data, implement redirects and monitor search performance closely through and after the migration.",
      },
      {
        question: "How do you prepare for sales peaks?",
        answer:
          "We run load and stress tests against expected peak traffic, tune caching and infrastructure scaling, and provide on-call support during major promotional events.",
      },
    ],
  },

  /* -------------------------------------------------------------
   * Banking & Fintech
   * ----------------------------------------------------------- */
  {
    slug: "banking-fintech",
    name: "Banking & Fintech",
    icon: "bank",
    headline: "Secure, compliant financial products at speed",
    summary:
      "We help banks, lenders and fintech companies launch digital financial products, modernise core platforms and meet regulatory demands without slowing innovation.",
    overview: {
      title: "Financial technology built on trust",
      paragraphs: [
        `Customers expect to open accounts, move money and access credit in minutes, while regulators expect airtight controls over security, privacy and risk. Balancing those demands is difficult for incumbents carrying legacy cores and for fintechs scaling quickly. ${siteConfig.name} delivers financial software that is fast to use, resilient under load and designed with compliance in mind from the first sprint.`,
        `We build digital banking apps, lending and onboarding journeys, payment platforms, wealth tools and back-office automation. Our teams are experienced with open banking APIs, KYC and AML workflows, card and payment integrations and secure cloud deployments, helping clients bring new products to market quickly while maintaining the auditability that financial services require.`,
      ],
      highlights: [
        "Digital banking and wallets",
        "Digital KYC and onboarding",
        "Payments and open banking",
        "Fraud and risk analytics",
      ],
    },
    challenges: [
      {
        title: "Legacy core banking systems",
        description:
          "Decades-old cores limit product innovation, slow down integrations and make real-time services such as instant payments and live balances difficult to deliver.",
        icon: "server",
      },
      {
        title: "Lengthy customer onboarding",
        description:
          "Paper-based identity checks and manual reviews cause high drop-off rates during account opening and loan applications, losing customers to faster digital competitors.",
        icon: "clipboard",
      },
      {
        title: "Evolving regulatory requirements",
        description:
          "New rules on data protection, open banking, consumer duty and anti-money laundering demand constant system changes, robust audit trails and timely regulatory reporting.",
        icon: "scale",
      },
      {
        title: "Sophisticated fraud threats",
        description:
          "Account takeovers, synthetic identities and payment fraud evolve rapidly, while rule-based detection systems generate excessive false positives that frustrate genuine customers.",
        icon: "lock",
      },
    ],
    solutions: [
      {
        title: "Digital banking apps",
        description:
          "Secure mobile and web banking experiences with biometric login, real-time balances, card controls, savings goals and personalised insights that customers use every day.",
        icon: "smartphone",
      },
      {
        title: "Digital onboarding and KYC",
        description:
          "End-to-end onboarding with document capture, liveness checks, sanctions screening and automated risk scoring, reducing account opening times from days to minutes.",
        icon: "users",
      },
      {
        title: "Lending platforms",
        description:
          "Configurable origination and servicing platforms for consumer, SME and point-of-sale lending, with automated decisioning, e-signatures and integration to credit bureaus.",
        icon: "coins",
      },
      {
        title: "Payments and open banking",
        description:
          "Payment gateways, wallets, account-to-account transfers and open banking API integrations that enable faster, lower-cost transactions and new embedded finance propositions.",
        icon: "card",
      },
      {
        title: "Fraud and risk analytics",
        description:
          "Machine learning models and real-time rules engines that detect suspicious transactions and behaviour while reducing false positives that disrupt legitimate customers.",
        icon: "shield",
      },
      {
        title: "Core modernisation and integration",
        description:
          "API layers, event streaming and phased migration strategies that unlock legacy core data and progressively move products onto modern, cloud-ready platforms.",
        icon: "layers",
      },
    ],
    stats: [
      { value: 75, suffix: "%", label: "faster account opening" },
      { value: 40, suffix: "%", label: "fewer fraud false positives" },
      { value: 99.95, suffix: "%", label: "platform uptime delivered" },
      { value: 30, suffix: "%", label: "lower operational processing costs" },
    ],
    services: [
      "custom-development",
      "mobile-development",
      "payment-as-a-service",
      "cybersecurity-solutions",
      "blockchain-cryptography",
      "ai-data-systems",
    ],
    testimonial: {
      quote: `${siteConfig.name} rebuilt our onboarding journey around digital identity checks. Application completion rose sharply, and our compliance team has clearer audit trails than ever before.`,
      author: "Chief Digital Officer",
      role: "Retail and SME bank",
    },
    faqs: [
      {
        question: "How do you approach security in financial applications?",
        answer:
          "We follow secure development practices, threat modelling, encryption at rest and in transit, regular penetration testing and strict access controls throughout delivery.",
      },
      {
        question: "Can you integrate with our core banking system?",
        answer:
          "Yes. We have experience integrating with a wide range of core platforms through APIs, middleware and event streaming, minimising changes to the core itself.",
      },
      {
        question: "Do you help with regulatory compliance?",
        answer:
          "We build compliance requirements such as audit logging, consent management and reporting into the product, and work closely with your risk and compliance teams throughout.",
      },
    ],
  },

  /* -------------------------------------------------------------
   * Healthcare & Pharmaceuticals
   * ----------------------------------------------------------- */
  {
    slug: "healthcare-pharmaceuticals",
    name: "Healthcare & Pharmaceuticals",
    icon: "health",
    headline: "Connected care and faster life sciences innovation",
    summary:
      "We help providers, payers and pharmaceutical companies build secure digital health products, connect clinical data and accelerate research and commercial operations.",
    overview: {
      title: "Technology that supports better outcomes",
      paragraphs: [
        `Healthcare organisations are under pressure to expand access, reduce clinician burden and control costs, while pharmaceutical companies race to shorten development timelines and engage healthcare professionals more effectively. ${siteConfig.name} builds secure, interoperable software that supports both, with patient privacy, clinical safety and regulatory compliance treated as non-negotiable design constraints.`,
        `Our teams deliver telehealth platforms, patient engagement apps, clinical data integrations, research tools and commercial systems for life sciences. We work with healthcare interoperability standards, validated environments and privacy frameworks, and we partner closely with clinicians, researchers and compliance specialists so the solutions fit real workflows rather than adding administrative overhead.`,
      ],
      highlights: [
        "Telehealth and patient apps",
        "HL7 and FHIR interoperability",
        "Clinical trial technology",
        "Privacy-first architecture",
      ],
    },
    challenges: [
      {
        title: "Fragmented patient records",
        description:
          "Clinical data is spread across EHRs, labs, pharmacies and devices, making it difficult for care teams to see a complete picture of each patient's history.",
        icon: "file",
      },
      {
        title: "Clinician administrative burden",
        description:
          "Documentation, scheduling and manual data entry consume a large share of clinicians' time, contributing to burnout and reducing time available for direct patient care.",
        icon: "clipboard",
      },
      {
        title: "Slow, costly clinical trials",
        description:
          "Patient recruitment, site management and data collection remain heavily manual, extending trial timelines and increasing the cost of bringing new therapies to market.",
        icon: "test",
      },
      {
        title: "Strict privacy and regulation",
        description:
          "Health data is highly sensitive and tightly regulated, so every product must satisfy privacy laws, validation requirements and security expectations before it can launch.",
        icon: "lock",
      },
    ],
    solutions: [
      {
        title: "Telehealth platforms",
        description:
          "Secure video consultations, virtual waiting rooms, e-prescriptions and remote monitoring integrated with clinical systems, extending care to patients wherever they are.",
        icon: "monitor",
      },
      {
        title: "Patient engagement apps",
        description:
          "Mobile apps for appointment booking, medication reminders, care plans, results and secure messaging, helping patients stay informed and adhere to their treatment.",
        icon: "heart",
      },
      {
        title: "Interoperability and data integration",
        description:
          "HL7 and FHIR-based integration layers connecting EHRs, labs, imaging and devices, creating a unified patient record that clinicians can trust and act on.",
        icon: "network",
      },
      {
        title: "Clinical AI and documentation tools",
        description:
          "AI-assisted documentation, triage and decision support tools designed with clinicians, reducing administrative work while keeping humans firmly in control of care decisions.",
        icon: "brain",
      },
      {
        title: "Clinical trial solutions",
        description:
          "eConsent, patient recruitment portals, remote data capture and trial analytics dashboards that streamline research operations and improve participant retention across sites.",
        icon: "test",
      },
      {
        title: "Pharma commercial platforms",
        description:
          "CRM, omnichannel engagement and field force tools for life sciences teams, supporting compliant, personalised interactions with healthcare professionals and partners.",
        icon: "briefcase",
      },
    ],
    stats: [
      { value: 30, suffix: "%", label: "less time on clinical documentation" },
      { value: 45, suffix: "%", label: "fewer missed appointments" },
      { value: 25, suffix: "%", label: "faster trial recruitment" },
      { value: 60, suffix: "+", label: "health systems and labs integrated" },
    ],
    services: [
      "custom-development",
      "mobile-development",
      "genai",
      "salesforce",
      "data-analytics-and-insights",
      "cybersecurity-solutions",
    ],
    testimonial: {
      quote: `${siteConfig.name} connected our patient app to three different clinical systems and kept privacy front and centre. No-show rates dropped noticeably, and our clinicians finally have the information they need in one place.`,
      author: "Director of Digital Health",
      role: "Multi-site healthcare provider",
    },
    faqs: [
      {
        question: "Are your solutions compliant with healthcare privacy regulations?",
        answer:
          "We design solutions to meet applicable healthcare privacy and security regulations, including encryption, access controls, audit logging and data residency requirements.",
      },
      {
        question: "Do you have experience with FHIR and HL7?",
        answer:
          "Yes. Our engineers regularly build integrations using HL7 v2 and FHIR APIs to connect EHRs, laboratory systems, devices and third-party health applications.",
      },
      {
        question: "Can you support validated environments for life sciences?",
        answer:
          "We follow documented development, testing and change control processes that support computer system validation requirements common in pharmaceutical and clinical research settings.",
      },
    ],
  },

  /* -------------------------------------------------------------
   * Gaming
   * ----------------------------------------------------------- */
  {
    slug: "gaming",
    name: "Gaming",
    icon: "gamepad",
    headline: "Games and platforms players keep coming back to",
    summary:
      "We partner with studios and publishers to build, scale and operate games across mobile, PC, console and immersive platforms, from concept art to live ops.",
    overview: {
      title: "Full-cycle game development and live operations",
      paragraphs: [
        `Making a successful game requires more than great mechanics. Studios must deliver striking art, stable multiplayer, fair monetisation and a steady stream of content, often across several platforms at once. ${siteConfig.name} provides the engineering, art and operations capacity to make that possible, whether you need a complete game built or a specialised team embedded into your pipeline.`,
        `We work across Unity, Unreal and custom engines, building gameplay systems, backend services, tools and analytics. Our live-ops support covers matchmaking, economies, events and player insights, while our art teams produce characters, environments and UI. For studios exploring new frontiers, we also build web3, AR and VR experiences with a focus on fun first.`,
      ],
      highlights: [
        "Unity and Unreal development",
        "Game art and animation",
        "Scalable multiplayer backends",
        "Live ops and player analytics",
      ],
    },
    challenges: [
      {
        title: "Tight production timelines",
        description:
          "Studios face fixed launch windows and publisher milestones, yet scope creep and staffing gaps routinely push content, polish and platform certification behind schedule.",
        icon: "target",
      },
      {
        title: "Scaling multiplayer infrastructure",
        description:
          "Launch-day spikes and global audiences stress matchmaking, game servers and databases, and outages during peak moments can permanently damage a game's reputation.",
        icon: "server",
      },
      {
        title: "Player retention and monetisation",
        description:
          "Most players churn within days of installing, and balancing engaging progression with sustainable, fair monetisation requires constant data-driven tuning and fresh content.",
        icon: "users",
      },
      {
        title: "Cross-platform complexity",
        description:
          "Shipping across mobile, PC and consoles means managing different performance budgets, input methods, store requirements and certification processes for every release.",
        icon: "monitor",
      },
    ],
    solutions: [
      {
        title: "Full-cycle game development",
        description:
          "Concept, prototyping, production and launch for mobile, PC and console titles, with experienced producers managing milestones, builds and platform certification on your behalf.",
        icon: "gamepad",
      },
      {
        title: "Game art and animation",
        description:
          "2D and 3D characters, environments, VFX, UI and animation produced by dedicated art teams that adapt to your style guide and integrate directly into your pipeline.",
        icon: "palette",
      },
      {
        title: "Multiplayer and backend services",
        description:
          "Cloud-native backends for matchmaking, leaderboards, player accounts, inventories and real-time multiplayer, designed to scale smoothly from soft launch to global release.",
        icon: "cloud",
      },
      {
        title: "Live ops and analytics",
        description:
          "Event tooling, remote configuration, A/B testing and player analytics dashboards that help teams tune economies, plan content drops and improve long-term retention.",
        icon: "chart",
      },
      {
        title: "Co-development and porting",
        description:
          "Specialised engineers and artists who join your production as co-developers, or port existing titles to new platforms while preserving performance and gameplay feel.",
        icon: "handshake",
      },
      {
        title: "Immersive and web3 games",
        description:
          "AR, VR and blockchain-enabled game experiences built on solid game design fundamentals, with player-owned assets and immersive interactions that add genuine value.",
        icon: "glasses",
      },
    ],
    stats: [
      { value: 120, suffix: "+", label: "titles shipped and supported" },
      { value: 35, suffix: "%", label: "improvement in day-30 retention" },
      { value: 50, suffix: "M+", label: "player sessions handled monthly" },
      { value: 30, suffix: "%", label: "faster content release cycles" },
    ],
    services: [
      "game-development",
      "gaming-art-design",
      "web3-gaming",
      "ar-vr-xr-gaming",
      "quality-assurance",
      "cloud-application",
    ],
    testimonial: {
      quote: `${siteConfig.name} slotted into our production as a true co-development partner. Their art and backend teams helped us hit our launch window, and the servers held up through a much bigger launch than we planned for.`,
      author: "Executive Producer",
      role: "Independent mobile games studio",
    },
    faqs: [
      {
        question: "Which game engines do you work with?",
        answer:
          "Our teams work primarily with Unity and Unreal Engine, and we also support custom engines and web-based frameworks depending on the project.",
      },
      {
        question: "Can you provide only art or only engineering?",
        answer:
          "Yes. Many studios engage us for specific disciplines such as art production, backend services, porting or QA, integrated into their existing pipeline and tools.",
      },
      {
        question: "Do you support games after launch?",
        answer:
          "We offer live-ops support including content updates, events, server operations, monitoring and analytics-driven tuning to keep your game healthy long after release.",
      },
    ],
  },

  /* -------------------------------------------------------------
   * Real Estate
   * ----------------------------------------------------------- */
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: "home",
    headline: "Proptech that moves properties and portfolios",
    summary:
      "We help developers, brokers and property managers digitise sales, leasing and operations with portals, immersive visualisation and portfolio intelligence.",
    overview: {
      title: "Digital experiences for every stage of the property lifecycle",
      paragraphs: [
        `Buyers and tenants now begin their property search online and expect rich listings, virtual viewings and fast, transparent transactions. Meanwhile, owners and managers need better visibility across portfolios, leases and maintenance. ${siteConfig.name} builds proptech solutions that meet both expectations, helping real estate businesses sell and lease faster while running their assets more efficiently.`,
        `Our work includes listing portals, CRM and sales pipelines for developers, tenant and resident apps, property management platforms and analytics for investors. We also create photorealistic architectural visualisations and virtual tours that let buyers experience projects before construction is complete, shortening sales cycles and strengthening confidence in off-plan purchases.`,
      ],
      highlights: [
        "Property portals and listings",
        "Virtual tours and 3D visualisation",
        "Tenant and resident apps",
        "Portfolio analytics",
      ],
    },
    challenges: [
      {
        title: "Long sales and leasing cycles",
        description:
          "Prospects must visit multiple sites, chase paperwork and wait for updates, slowing conversions and increasing the cost of every closed sale or signed lease.",
        icon: "handshake",
      },
      {
        title: "Selling off-plan projects",
        description:
          "Communicating the look and feel of unbuilt developments is difficult with static brochures, making buyers hesitant to commit early in the construction timeline.",
        icon: "building",
      },
      {
        title: "Manual property operations",
        description:
          "Maintenance requests, rent collection and lease renewals are often handled by phone, email and spreadsheets, creating delays and an inconsistent resident experience.",
        icon: "wrench",
      },
      {
        title: "Limited portfolio visibility",
        description:
          "Occupancy, rental income and operating costs are tracked in disconnected systems, preventing owners from spotting underperforming assets and making timely investment decisions.",
        icon: "chart",
      },
    ],
    solutions: [
      {
        title: "Property listing portals",
        description:
          "Fast, search-optimised portals with map-based discovery, advanced filters, saved searches and lead capture that connects interested buyers directly to the right sales agent.",
        icon: "map",
      },
      {
        title: "3D visualisation and virtual tours",
        description:
          "Photorealistic renders, interactive walkthroughs and AR experiences that let buyers explore layouts, finishes and views before construction, supporting confident off-plan decisions.",
        icon: "glasses",
      },
      {
        title: "Real estate CRM and sales tools",
        description:
          "CRM configurations for developers and brokerages covering lead management, unit inventory, reservations, payment plans and document workflows from enquiry to handover.",
        icon: "users",
      },
      {
        title: "Tenant and resident apps",
        description:
          "Mobile apps for rent payments, maintenance requests, amenity booking, visitor access and community updates, improving resident satisfaction and reducing administrative workload.",
        icon: "smartphone",
      },
      {
        title: "Property management platforms",
        description:
          "Platforms that centralise leases, billing, maintenance schedules, vendors and compliance documents, giving property managers a single operational view across buildings.",
        icon: "building",
      },
      {
        title: "Portfolio intelligence dashboards",
        description:
          "Analytics combining occupancy, rent rolls, operating expenses and market data to help owners and investors benchmark assets, forecast returns and plan capital spending.",
        icon: "chart",
      },
    ],
    stats: [
      { value: 30, suffix: "%", label: "shorter sales cycles" },
      { value: 50, suffix: "%", label: "more qualified enquiries" },
      { value: 40, suffix: "%", label: "faster maintenance resolution" },
      { value: 95, suffix: "%", label: "on-time rent collection" },
    ],
    services: [
      "architectural-visualization",
      "website-development",
      "mobile-development",
      "salesforce",
      "augmented-reality",
      "data-analytics-and-insights",
    ],
    testimonial: {
      quote: `The virtual tours ${siteConfig.name} created let buyers walk through apartments a year before handover. Our off-plan reservations picked up quickly, and the sales team closes with far fewer site visits.`,
      author: "Head of Sales and Marketing",
      role: "Residential property developer",
    },
    faqs: [
      {
        question: "Can you create visualisations from architectural drawings?",
        answer:
          "Yes. Our visualisation team works from CAD and BIM files, floor plans and material specifications to produce accurate renders, animations and interactive tours.",
      },
      {
        question: "Do you integrate with existing property management systems?",
        answer:
          "We integrate tenant apps, portals and analytics with established property management, accounting and access control platforms through APIs and data connectors.",
      },
      {
        question: "Can you help with commercial as well as residential property?",
        answer:
          "Absolutely. We support residential, commercial, retail and mixed-use portfolios, adapting workflows to leasing models, tenant types and reporting requirements.",
      },
    ],
  },

  /* -------------------------------------------------------------
   * Education
   * ----------------------------------------------------------- */
  {
    slug: "education",
    name: "Education",
    icon: "education",
    headline: "Engaging learning experiences at every scale",
    summary:
      "We help schools, universities and edtech companies deliver engaging digital learning, streamline administration and use data to improve student success.",
    overview: {
      title: "Technology that serves learners and educators",
      paragraphs: [
        `Learners expect flexible, mobile-friendly access to courses, while institutions juggle ageing student systems, stretched staff and growing pressure to demonstrate outcomes. Edtech companies, meanwhile, must scale platforms quickly without sacrificing quality. ${siteConfig.name} builds education technology that puts learners and teachers first, combining thoughtful design with reliable, scalable engineering.`,
        `We create learning management systems, virtual classrooms, assessment tools, student information platforms and analytics that help identify learners who need support. Our solutions integrate with established education platforms and identity providers, meet accessibility expectations and protect student data, so institutions can modernise with confidence and edtech providers can grow their user base reliably.`,
      ],
      highlights: [
        "Learning platforms and LMS",
        "Virtual and hybrid classrooms",
        "Student success analytics",
        "AI tutoring and assessment",
      ],
    },
    challenges: [
      {
        title: "Low learner engagement",
        description:
          "Static content and one-size-fits-all courses struggle to hold attention online, leading to low completion rates and learners who quietly fall behind without intervention.",
        icon: "users",
      },
      {
        title: "Disconnected campus systems",
        description:
          "Admissions, student records, learning platforms and finance often run separately, forcing staff into duplicate data entry and leaving students with confusing experiences.",
        icon: "network",
      },
      {
        title: "Heavy administrative workload",
        description:
          "Enrolment, timetabling, grading and reporting consume time that educators would rather spend teaching, particularly in institutions with limited administrative staff.",
        icon: "clipboard",
      },
      {
        title: "Scaling edtech platforms",
        description:
          "Edtech providers face sharp usage spikes around term starts and exams, requiring infrastructure and architecture that remain reliable as their learner base grows.",
        icon: "server",
      },
    ],
    solutions: [
      {
        title: "Learning management platforms",
        description:
          "Custom LMS builds and extensions with course authoring, adaptive learning paths, gamification and mobile access, designed around how your learners and instructors actually work.",
        icon: "book",
      },
      {
        title: "Virtual classroom solutions",
        description:
          "Live and hybrid teaching tools with video, breakout rooms, whiteboards, attendance tracking and recordings, integrated into existing learning platforms for a seamless experience.",
        icon: "monitor",
      },
      {
        title: "Student information systems",
        description:
          "Platforms that unify admissions, enrolment, records, fees and communications, reducing administrative effort and giving students a single portal for their academic journey.",
        icon: "database",
      },
      {
        title: "AI tutoring and assessment",
        description:
          "Generative AI tutors, automated feedback, question generation and plagiarism-aware assessment tools that support personalised learning while keeping educators in control.",
        icon: "sparkles",
      },
      {
        title: "Learning analytics",
        description:
          "Dashboards that track engagement, progress and outcomes across courses, flagging at-risk learners early so tutors and advisors can intervene before they disengage.",
        icon: "chart",
      },
      {
        title: "Immersive learning experiences",
        description:
          "AR and VR simulations for science, healthcare, engineering and vocational training, giving learners safe, hands-on practice that is difficult to replicate in classrooms.",
        icon: "glasses",
      },
    ],
    stats: [
      { value: 35, suffix: "%", label: "higher course completion" },
      { value: 50, suffix: "%", label: "less administrative effort" },
      { value: 1, suffix: "M+", label: "learners on platforms we built" },
      { value: 99.9, suffix: "%", label: "uptime during exam periods" },
    ],
    services: [
      "custom-development",
      "website-development",
      "mobile-development",
      "genai",
      "augmented-reality",
      "saas",
    ],
    testimonial: {
      quote: `${siteConfig.name} brought our learning platform and student records together and added analytics our advisors use every week. We now reach struggling students weeks earlier than before.`,
      author: "Pro Vice-Chancellor, Digital Education",
      role: "Public university",
    },
    faqs: [
      {
        question: "Can you integrate with our existing LMS?",
        answer:
          "Yes. We extend and integrate with widely used learning management systems through standards such as LTI and their native APIs, or build a custom platform when needed.",
      },
      {
        question: "How do you protect student data?",
        answer:
          "We apply role-based access, encryption, consent management and data minimisation, and align implementations with the student privacy regulations relevant to your region.",
      },
      {
        question: "Do you work with edtech startups?",
        answer:
          "We do. We help edtech founders design, build and scale learning products, from MVP through to platforms serving large numbers of concurrent learners.",
      },
    ],
  },
];
