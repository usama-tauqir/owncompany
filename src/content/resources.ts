import type { Resource } from "./types";
import { siteConfig } from "@/config/site";

/*
 * Insights library: blogs, case studies, news, whitepapers, playbooks,
 * perspectives, podcasts and thought-leadership pieces.
 *
 * Case-study clients are anonymised descriptors by design.
 */

export const resources: Resource[] = [
  /* ---------------------------------------------------------------
   * Blogs
   * ------------------------------------------------------------- */
  {
    slug: "ai-agents-in-the-enterprise",
    kind: "blog",
    title: "AI Agents in the Enterprise: Moving From Pilot to Production",
    excerpt:
      "Autonomous AI agents promise to take work off people's plates, not just answer questions. Here is how to pick the right first use case, keep agents safe and prove real value.",
    date: "2026-08-18",
    readTime: "8 min read",
    category: "Artificial Intelligence",
    author: "AI & Data Practice",
    body: [
      {
        heading: "Agents are not just smarter chatbots",
        paragraphs: [
          "A chatbot answers a question and waits for the next one. An agent is given a goal, breaks it into steps, calls tools such as APIs, databases and internal systems, checks its own output and keeps going until the job is done or it needs a human. That shift from conversation to action is what makes agents valuable, and it is also what makes them riskier to deploy.",
          "Because agents act on real systems, the engineering questions change. You are no longer only tuning prompts; you are designing permissions, error handling, audit trails and fallbacks. Teams that treat an agent as a new kind of integration rather than a new kind of interface tend to ship faster and with far fewer surprises in production.",
        ],
      },
      {
        heading: "Choosing a first use case that can actually succeed",
        paragraphs: [
          "The best first agents sit in workflows that are high-volume, rules-heavy and currently handled by people copying data between screens. Think invoice exception handling, supplier onboarding checks, IT ticket triage or first-pass contract review. These processes have clear inputs, measurable outputs and an existing human team who can review the agent's work while trust is being built.",
          "Avoid starting with open-ended, judgement-heavy decisions where nobody can agree on what a good outcome looks like. If your subject-matter experts cannot write down how they decide, an agent will not magically discover it. A narrow, boring workflow that saves two thousand hours a year beats an ambitious prototype that never leaves the lab.",
        ],
        bullets: [
          "High transaction volume with repetitive steps",
          "Structured inputs and a clear definition of done",
          "An existing team able to review and correct outputs",
          "Tool access that can be scoped to least privilege",
        ],
      },
      {
        heading: "Guardrails, evaluation and observability",
        paragraphs: [
          "Every production agent needs three layers of protection. First, scoped credentials so it can only touch the systems and records relevant to its task. Second, policy checks that block risky actions such as payments above a threshold or messages to external parties without approval. Third, a human-in-the-loop step for anything irreversible until the error rate is proven to be acceptable.",
          "Evaluation should be continuous, not a one-off test before launch. Build a regression suite of real historical cases, score the agent against it on every model or prompt change, and log every tool call with its inputs and outputs. When something goes wrong, you want to replay the exact trace rather than guess at what the model was thinking.",
        ],
      },
      {
        heading: "Operating model and ownership",
        paragraphs: [
          "Agents blur the line between software and staff, so ownership must be explicit. A product owner should be accountable for the outcomes the agent produces, an engineering team for its reliability, and a risk or compliance partner for its policies. Without that triangle, issues bounce between departments and confidence erodes quickly.",
          "Plan for change management as seriously as you plan the technology. The people whose work the agent touches need to understand what it does, how to override it and how their own roles will evolve. Teams who are invited to shape the agent's behaviour become its strongest advocates; teams who are surprised by it become its loudest critics.",
        ],
      },
      {
        heading: "A pragmatic 90-day path",
        paragraphs: [
          `At ${siteConfig.name} we typically run agent programmes in three thirty-day phases. The first month maps the workflow, defines success metrics and builds the evaluation set. The second delivers a supervised agent running in shadow mode alongside the existing team. The third moves selected task types to assisted or autonomous mode based on measured accuracy.`,
          "By the end of the quarter, leadership has hard numbers on time saved, error rates and cost per task, rather than a demo. That evidence is what unlocks budget for the next three use cases, and it gives the organisation a reusable platform of connectors, guardrails and monitoring that makes each subsequent agent cheaper to build.",
        ],
      },
    ],
  },
  {
    slug: "choosing-a-mobile-stack",
    kind: "blog",
    title: "Native, Cross-Platform or Web? Choosing a Mobile Stack That Lasts",
    excerpt:
      "The right mobile stack depends less on framework popularity and more on your product roadmap, team skills and performance needs. A practical framework for making the decision with confidence.",
    date: "2026-03-10",
    readTime: "7 min read",
    category: "Mobile",
    author: "Mobile Engineering Team",
    body: [
      {
        heading: "Start with the product, not the framework",
        paragraphs: [
          "Debates about Swift versus Kotlin versus Flutter versus React Native often skip the most important question: what does the app need to do over the next three years? An app that is mostly forms and content has very different needs from one that processes live video, talks to Bluetooth medical devices or renders complex maps offline.",
          "Before comparing frameworks, write down the five capabilities that matter most to your users, the platforms you must support, and how frequently you expect to release. These constraints usually eliminate half the options immediately and turn an emotional debate into a reasoned trade-off that product, engineering and finance can all agree on.",
        ],
      },
      {
        heading: "When fully native is worth the cost",
        paragraphs: [
          "Native development with Swift and Kotlin still wins when you need the deepest access to platform features, the smoothest animations or the very latest operating system capabilities on launch day. Banking apps with heavy security requirements, camera-centric products and apps that integrate tightly with wearables often fall into this category.",
          "The trade-off is that you maintain two codebases and usually two teams. That doubles certain costs and can lead to feature drift between iOS and Android. If you choose native, invest early in shared design systems, shared API contracts and a single backlog so that both platforms move together rather than diverging over time.",
        ],
      },
      {
        heading: "The strengths of cross-platform frameworks",
        paragraphs: [
          "Modern cross-platform frameworks have matured enormously. Flutter and React Native now power many large consumer apps, and for most business and commerce products they deliver near-native performance with a single codebase. That means one team, one release train and a faster path from idea to both app stores.",
          "The key is to be honest about the edges. Plan for a small amount of native code for platform-specific features, budget time for framework upgrades and choose libraries carefully. A cross-platform app built with discipline is a long-term asset; one built by stacking unmaintained plugins becomes fragile within a couple of years.",
        ],
        bullets: [
          "Flutter: strong for highly custom, brand-led interfaces",
          "React Native: strong where web and mobile teams share JavaScript skills",
          "Kotlin Multiplatform: strong for sharing business logic while keeping native UI",
        ],
      },
      {
        heading: "Do not dismiss the web",
        paragraphs: [
          "Progressive web apps are an underrated option for internal tools, field-service apps and products where discoverability through search matters more than an app store listing. They install from the browser, work offline, receive push notifications on most devices and can be updated instantly without store review.",
          "Many organisations end up with a hybrid portfolio: a polished native or cross-platform app for their core customer journey, and lightweight web apps for secondary audiences. That is perfectly healthy. The goal is not stack purity but delivering the right experience to each audience at a sustainable cost.",
        ],
      },
      {
        heading: "Making the decision stick",
        paragraphs: [
          `When ${siteConfig.name} advises on mobile architecture, we run a short spike that builds the riskiest screen in the two leading candidate stacks. Measuring real performance, developer velocity and integration effort for a week is far more reliable than reading benchmark articles, and it gives the whole team confidence in the final choice.`,
          "Document the decision, the reasons behind it and the conditions that would cause you to revisit it. Stacks are rarely wrong forever, but they can become wrong as products evolve. A written decision record makes that future conversation calm and evidence-based rather than a repeat of the original debate.",
        ],
      },
    ],
  },
  {
    slug: "shopify-plus-migration-guide",
    kind: "blog",
    title: "A Field Guide to Migrating Your Store to Shopify Plus",
    excerpt:
      "Replatforming to Shopify Plus can cut operating costs and speed up merchandising, but only if data, SEO and integrations are handled carefully. Lessons from the migrations we run.",
    date: "2025-09-22",
    readTime: "9 min read",
    category: "E-commerce",
    author: "Commerce Practice",
    body: [
      {
        heading: "Why brands are moving",
        paragraphs: [
          "Most merchants who move to Shopify Plus are escaping one of two situations: an ageing self-hosted platform that demands constant patching, or a heavily customised enterprise suite whose licence and agency costs have outgrown the revenue it supports. In both cases, the attraction is a reliable, hosted core that frees the team to focus on merchandising and growth.",
          "That said, a migration is a business change project, not a theme swap. Checkout flows, promotions logic, tax rules, loyalty programmes and fulfilment integrations all need to be re-examined. Brands that use the move as an opportunity to simplify tend to see the biggest gains, while those that try to replicate every legacy quirk often recreate the same complexity.",
        ],
      },
      {
        heading: "Audit before you build",
        paragraphs: [
          "Start with a full inventory of what the current store actually does. List every integration, custom feature, app, report and manual workaround the operations team relies on. You will almost always discover processes nobody documented, such as a spreadsheet that reconciles returns or a nightly script that updates stock from a warehouse system.",
          "For each item, decide whether to rebuild it, replace it with an app, absorb it into native platform functionality or retire it. This rationalisation step usually removes a quarter of the scope and gives you a realistic plan, budget and timeline before any development starts.",
        ],
        bullets: [
          "Integrations: ERP, WMS, OMS, CRM, payments, tax",
          "Custom logic: pricing, bundles, B2B terms, subscriptions",
          "Content: product data, blogs, landing pages, media",
          "Operations: reports, exports and manual workarounds",
        ],
      },
      {
        heading: "Protecting SEO and customer data",
        paragraphs: [
          "Organic search traffic is often the single largest risk in any replatform. Crawl the existing site, export every indexable URL and build a complete redirect map before launch. Preserve page titles, meta descriptions and structured data where they perform well, and monitor search console daily for the first month after go-live.",
          "Customer accounts, order history and saved payment methods need equal care. Plan how customers will be invited to reactivate accounts, which historical orders must be visible, and how loyalty balances will carry across. A clear, friendly communication plan prevents a flood of support tickets in launch week.",
        ],
      },
      {
        heading: "Integrations and the middleware question",
        paragraphs: [
          "Point-to-point integrations are tempting because they are quick to build, but they become painful as the number of systems grows. For merchants with an ERP, a warehouse system and multiple marketplaces, a lightweight integration layer that handles retries, logging and data mapping in one place pays for itself quickly.",
          "Use the platform's webhooks and bulk APIs rather than polling, respect rate limits, and design every sync job to be idempotent so it can safely run twice. These engineering habits sound dull, but they are the difference between a calm peak season and an operations team manually fixing stock levels at midnight.",
        ],
      },
      {
        heading: "Launch, then optimise",
        paragraphs: [
          `The migrations ${siteConfig.name} runs follow a staged cutover: a soft launch to a small share of traffic, intensive monitoring of conversion and error rates, then a full switch once the numbers hold steady. Rollback plans are rehearsed, not just written, so the team knows exactly what to do if a payment provider or integration misbehaves.`,
          "Once live, resist the urge to declare the project finished. The first ninety days are the best time to run conversion experiments, tune site speed and introduce features that the old platform could not support. That is where the real return on a replatform is earned.",
        ],
      },
    ],
  },
  {
    slug: "cloud-cost-optimisation",
    kind: "blog",
    title: "Cloud Cost Optimisation Without Slowing Delivery Down",
    excerpt:
      "Cutting cloud spend should not mean throttling engineering teams. A practical approach to FinOps that combines quick wins, architectural changes and shared accountability for cost.",
    date: "2025-05-14",
    readTime: "7 min read",
    category: "Cloud",
    author: "Cloud Practice",
    body: [
      {
        heading: "Why cloud bills keep growing",
        paragraphs: [
          "Cloud spend rarely grows because of one bad decision. It grows through thousands of small ones: a test environment left running over the weekend, a database sized for a launch that never materialised, logs retained forever by default, or data transfer between regions that nobody noticed. Each is minor on its own, but together they can inflate a bill by a third or more.",
          "The answer is not a top-down freeze on new resources. That simply pushes teams to work around controls. Sustainable optimisation comes from making cost visible to the engineers who create it, and giving them the tools and incentives to make better choices as part of their everyday work.",
        ],
      },
      {
        heading: "Quick wins in the first thirty days",
        paragraphs: [
          "Most organisations can reduce spend by ten to twenty percent within a month without touching application code. Start by tagging resources consistently so every cost line maps to a team and product. Then target idle and oversized resources, schedule non-production environments to shut down out of hours, and tidy up orphaned storage volumes and snapshots.",
          "Commitment-based discounts are the next lever. Once you understand your steady baseline usage, savings plans or reserved capacity can cut compute costs dramatically. Buy conservatively at first, covering only the usage you are confident will persist, and expand coverage as forecasting improves.",
        ],
        bullets: [
          "Enforce mandatory cost-allocation tags",
          "Right-size compute and databases using real utilisation data",
          "Auto-stop development and test environments overnight",
          "Set lifecycle policies on logs, backups and object storage",
        ],
      },
      {
        heading: "Architectural savings that compound",
        paragraphs: [
          "The larger, longer-lasting savings come from architecture. Moving bursty workloads to serverless or containers that scale to zero, using managed services instead of self-hosted clusters, and caching aggressively in front of expensive databases all change the cost curve rather than trimming it.",
          "Data transfer deserves special attention. Chatty microservices spread across availability zones or regions can generate surprisingly large network charges. Reviewing traffic patterns and co-locating services that talk to each other frequently is often one of the highest-return exercises a platform team can undertake.",
        ],
      },
      {
        heading: "Building a FinOps culture",
        paragraphs: [
          "Tools alone do not change behaviour. Publish a simple weekly cost report for every team, set budgets with alerts that go to the engineers rather than only to finance, and celebrate the teams that deliver savings. When unit economics such as cost per order or cost per active user are tracked alongside performance metrics, cost becomes a quality attribute like latency.",
          `At ${siteConfig.name}, we help clients set up a lightweight FinOps forum that meets fortnightly with representatives from engineering, finance and product. It reviews anomalies, agrees on optimisation priorities and keeps the conversation constructive rather than blaming individuals for past decisions.`,
        ],
      },
    ],
  },
  {
    slug: "zero-trust-security-in-practice",
    kind: "blog",
    title: "Zero Trust in Practice: A Guide for the Teams Who Implement It",
    excerpt:
      "Zero trust is a strategy, not a product you can buy. A practical, phased roadmap for identity, devices, networks and data that security and engineering teams can actually follow.",
    date: "2025-11-04",
    readTime: "8 min read",
    category: "Cybersecurity",
    author: "Security Team",
    body: [
      {
        heading: "The core idea in one sentence",
        paragraphs: [
          "Zero trust replaces the assumption that anything inside the corporate network is safe with a simple rule: verify every request, every time, based on who is asking, from what device, for what resource and under what conditions. It is a response to a world where staff work from anywhere, applications live in multiple clouds and attackers routinely get past the perimeter.",
          "Vendors often market zero trust as a product category, which causes confusion. In reality it is an architecture and a set of principles. You will use many products to implement it, but no single purchase makes an organisation zero trust. Framing it as a multi-year programme with clear milestones keeps expectations realistic.",
        ],
      },
      {
        heading: "Identity is the new perimeter",
        paragraphs: [
          "The most valuable first step is almost always identity. Consolidate onto a single identity provider, enforce phishing-resistant multi-factor authentication for all staff, and remove standing administrative privileges in favour of just-in-time elevation. These changes alone close off the attack paths behind a large share of real-world breaches.",
          "Next, connect applications to that identity provider using modern single sign-on protocols, and introduce conditional access policies that consider risk signals such as unusual locations or impossible travel. Service accounts and machine identities need the same rigour, with short-lived credentials and automated rotation rather than passwords stored in configuration files.",
        ],
      },
      {
        heading: "Devices, networks and applications",
        paragraphs: [
          "Once identity is solid, extend trust decisions to the device. Managed devices should report their health, patch level and encryption status, and access policies should adapt accordingly. A fully patched corporate laptop might access sensitive systems, while an unknown personal device is limited to browser-only access to low-risk applications.",
          "On the network side, replace broad VPN access with application-level access brokers that connect users only to the specific services they need. Inside data centres and clouds, micro-segmentation limits how far an attacker can move if one workload is compromised. Each step reduces the blast radius of any single failure.",
        ],
        bullets: [
          "Phase 1: unified identity, MFA and privileged access controls",
          "Phase 2: device health signals and conditional access",
          "Phase 3: application-level access replacing flat VPNs",
          "Phase 4: workload segmentation and data-centric controls",
        ],
      },
      {
        heading: "Keeping people productive",
        paragraphs: [
          "Security programmes fail when they make everyday work painful. Done well, zero trust actually improves the user experience: single sign-on reduces password fatigue, passkeys are faster than typing codes, and access brokers remove the frustration of connecting to a VPN before opening a web application.",
          `${siteConfig.name} recommends piloting each change with a friendly group of users, measuring login friction and support tickets, and adjusting before rolling out widely. Security teams that treat employees as customers earn the goodwill needed to complete a multi-year programme.`,
        ],
      },
    ],
  },
  {
    slug: "ux-research-on-a-budget",
    kind: "blog",
    title: "UX Research on a Budget: Getting Real Insight Without a Lab",
    excerpt:
      "You do not need a research department or expensive tools to understand your users. Lean, repeatable methods that product teams can run every sprint to reduce risk and build better products.",
    date: "2025-02-19",
    readTime: "6 min read",
    category: "Design",
    author: "Design Studio",
    body: [
      {
        heading: "Some research beats no research",
        paragraphs: [
          "Teams often skip user research because they assume it requires recruiting agencies, eye-tracking labs and weeks of analysis. In practice, five short conversations with real users will surface most of the major usability problems in a product. The cost of not doing research is far higher: features nobody uses, redesigns that confuse loyal customers and support queues full of avoidable questions.",
          "The goal of lean research is not academic rigour. It is to reduce the riskiest assumptions in your roadmap quickly enough that the findings still influence decisions. A rough insight delivered before a sprint starts is worth more than a polished report delivered after the feature ships.",
        ],
      },
      {
        heading: "Methods that cost almost nothing",
        paragraphs: [
          "Remote moderated interviews over video calls are the workhorse of budget research. Recruit from your existing customer base, offer a modest voucher, and keep sessions to thirty minutes. Ask about recent real experiences rather than hypothetical preferences, because what people say they would do is a poor predictor of what they actually do.",
          "Complement interviews with lightweight quantitative signals. Product analytics, session recordings, support ticket themes and app store reviews are already sitting in your systems and cost nothing to analyse. Triangulating qualitative stories with behavioural data makes findings much harder for stakeholders to dismiss.",
        ],
        bullets: [
          "Five-user usability tests on clickable prototypes",
          "Unmoderated first-click and preference tests",
          "Support-ticket and review tagging",
          "Diary studies run through a shared messaging group",
        ],
      },
      {
        heading: "Making research a habit",
        paragraphs: [
          "The teams that benefit most from research are not those that run one big study each year but those that talk to users every week. Set a recurring slot, rotate who facilitates, and invite engineers and product managers to observe. Watching a real person struggle with an interface changes minds faster than any slide deck.",
          "Store findings in a simple, searchable repository tagged by theme and product area. Over time this becomes an organisational memory that prevents teams from rediscovering the same problems and helps new joiners understand users quickly.",
        ],
      },
      {
        heading: "Turning insight into action",
        paragraphs: [
          `Research only matters if it changes what gets built. In the design engagements ${siteConfig.name} runs, every round of research ends with a short prioritisation workshop where findings are mapped to specific backlog items, owners and success metrics. That closes the loop between learning and delivery.`,
          "Finally, measure the impact. Track task completion rates, time on task or conversion before and after design changes informed by research. Demonstrating that a few hours of conversations produced a measurable improvement is the most effective way to secure a bigger research budget next year.",
        ],
      },
    ],
  },
  {
    slug: "dynamics-365-vs-bespoke-erp",
    kind: "blog",
    title: "Dynamics 365 or a Bespoke ERP? How to Make the Call",
    excerpt:
      "Packaged ERP platforms and custom-built systems each have a place. A balanced look at cost, flexibility, risk and time to value to help operations and finance leaders decide.",
    date: "2026-01-27",
    readTime: "8 min read",
    category: "Business Applications",
    author: "Business Applications Team",
    body: [
      {
        heading: "The question behind the question",
        paragraphs: [
          "When leaders ask whether to adopt Microsoft Dynamics 365 or build their own ERP, they are really asking how much of their operating model is genuinely unique. Finance, procurement, inventory and HR processes are broadly similar across most businesses. A small number of processes, however, may be a real source of competitive advantage that a standard package would flatten.",
          "Answering that honestly requires mapping core processes and classifying each as commodity, differentiating or somewhere in between. That classification, more than any feature comparison, should drive the architecture.",
        ],
      },
      {
        heading: "Where a packaged platform shines",
        paragraphs: [
          "A mature platform such as Dynamics 365 brings decades of accumulated best practice, regular security updates, built-in compliance features and a large ecosystem of partners and add-ons. For standard finance and supply chain processes, configuring a proven system is almost always faster and cheaper than writing equivalent functionality from scratch.",
          "The platform's integration with productivity tools, reporting services and low-code extensions also lowers the cost of continuous improvement. Business analysts can automate approvals or build dashboards without waiting for a development sprint, which keeps the system aligned with how people actually work.",
        ],
        bullets: [
          "Faster time to value for standard processes",
          "Vendor-managed upgrades and security patches",
          "Rich partner ecosystem and talent pool",
          "Built-in localisation for tax and regulatory requirements",
        ],
      },
      {
        heading: "Where bespoke still makes sense",
        paragraphs: [
          "Custom systems are justified when a process is both central to how you win and poorly served by any package. Examples include highly specialised manufacturing scheduling, unusual pricing models or operational workflows that combine physical and digital steps in a novel way. Forcing these into a standard package can require so much customisation that you lose the benefits of buying.",
          "The cost of bespoke is long-term ownership. You must fund ongoing development, security, documentation and talent retention indefinitely. Organisations that go this route need a product mindset and stable engineering capacity, not a one-off project budget.",
        ],
      },
      {
        heading: "The hybrid pattern most clients choose",
        paragraphs: [
          `In practice, most organisations ${siteConfig.name} works with land on a hybrid: a packaged platform as the system of record for finance and core operations, surrounded by a small number of custom applications for differentiating workflows. Clean APIs and a shared data platform tie the pieces together.`,
          "This keeps the packaged core as close to standard as possible, which makes upgrades painless, while concentrating custom engineering where it creates the most value. The discipline is in resisting the temptation to customise the core whenever a stakeholder asks for something slightly different.",
        ],
      },
      {
        heading: "Questions to ask before deciding",
        paragraphs: [
          "Before committing either way, build a five-year total cost of ownership model that includes licences, implementation, support, upgrades and internal staff time. Run reference calls with organisations of similar size and complexity, and prototype the two or three riskiest processes on the candidate platform.",
          "Most importantly, involve the people who will use the system daily. A technically elegant solution that frustrates the warehouse or finance team will be worked around with spreadsheets, quietly undermining the whole investment.",
        ],
      },
    ],
  },
  {
    slug: "data-platform-modernisation",
    kind: "blog",
    title: "Modernising Your Data Platform Without a Big-Bang Rewrite",
    excerpt:
      "Legacy data warehouses slow down analytics and block AI initiatives. An incremental approach to moving to a modern lakehouse while keeping reports running and the business confident.",
    date: "2026-06-09",
    readTime: "8 min read",
    category: "Data & Analytics",
    author: "Data Engineering Team",
    body: [
      {
        heading: "Signs your data platform is holding you back",
        paragraphs: [
          "Overnight batch jobs that regularly overrun, analysts waiting weeks for new data sources, conflicting numbers in different dashboards and data scientists exporting extracts to their laptops are all symptoms of a platform that has reached its limits. These issues quietly tax every decision the organisation makes.",
          "The rise of AI has made the problem more urgent. Machine learning and generative AI use cases need reliable, well-governed, near-real-time data. A warehouse designed for monthly reporting fifteen years ago simply cannot serve those workloads efficiently.",
        ],
      },
      {
        heading: "Why big-bang migrations fail",
        paragraphs: [
          "The instinct is often to design a perfect new platform and migrate everything at once. These programmes tend to run for years, consume large budgets and deliver nothing visible until the very end. Meanwhile the business keeps changing, so the target moves before you reach it.",
          "An incremental strategy delivers value continuously. Pick one domain, migrate its pipelines and reports to the new platform, decommission the old ones and move on. Each step proves the architecture, builds team skills and earns stakeholder trust for the next phase.",
        ],
      },
      {
        heading: "The target architecture",
        paragraphs: [
          "Most modern platforms converge on a lakehouse pattern: low-cost object storage holding open table formats, with elastic compute for transformation and querying. Data is organised into layers that move from raw ingestion, through cleaned and conformed datasets, to business-ready data products that analysts and applications consume.",
          "Governance should be built in, not bolted on. A catalogue that documents ownership, lineage and quality for every dataset, combined with fine-grained access controls, lets you open data up to more users without losing control of sensitive information.",
        ],
        bullets: [
          "Open table formats to avoid vendor lock-in",
          "Declarative, version-controlled transformations",
          "Automated data quality tests in every pipeline",
          "Domain-owned data products with clear contracts",
        ],
      },
      {
        heading: "People and process matter as much as technology",
        paragraphs: [
          "Modern data platforms work best when domain teams own their data products, supported by a central platform team that provides tooling, standards and guardrails. This shifts responsibility for quality closer to the people who understand the data, rather than leaving a central team to guess at business rules.",
          `${siteConfig.name} typically pairs its engineers with client teams during migration so skills transfer naturally. By the time the last legacy pipeline is switched off, the client's own people are confidently running and extending the platform without outside help.`,
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------
   * Case studies
   * ------------------------------------------------------------- */
  {
    slug: "gcc-hospitality-unified-booking-platform",
    kind: "case-study",
    title: "Unifying Guest Bookings Across Twenty Properties",
    excerpt:
      "A GCC hospitality group replaced fragmented booking engines with one direct-booking platform and guest app, lifting direct revenue and giving every property a single view of each guest.",
    date: "2025-04-08",
    readTime: "6 min read",
    category: "Digital Platforms",
    author: "Engineering Team",
    client: "A GCC hospitality group",
    industry: "Travel & Hospitality",
    results: [
      { value: 34, suffix: "%", label: "Increase in direct bookings" },
      { value: 22, suffix: "%", label: "Reduction in OTA commission spend" },
      { value: 4.7, suffix: "/5", label: "Average guest app rating" },
    ],
    body: [
      {
        heading: "The challenge",
        paragraphs: [
          "The group operated hotels, resorts and serviced apartments across several countries, each acquired at different times and running its own booking engine, loyalty scheme and guest communication tools. Guests who stayed at more than one property were treated as strangers each time, and the group relied heavily on online travel agencies that took a significant commission on every booking.",
          "Leadership wanted to grow direct bookings, recognise loyal guests across the portfolio and give revenue managers consolidated, timely data. Any solution had to integrate with multiple property management systems without forcing every hotel to change its back-office software at once.",
        ],
      },
      {
        heading: "Our approach",
        paragraphs: [
          `${siteConfig.name} began with a six-week discovery that mapped guest journeys, interviewed front-desk and revenue teams, and audited each property's systems. We designed a headless booking platform with a central guest profile service and an integration layer that adapted to each property management system through dedicated connectors.`,
          "The design team created a bilingual Arabic and English booking experience and guest app, with right-to-left layouts built in from the start rather than retrofitted. We released in waves, starting with three flagship properties, measuring conversion and operational feedback before onboarding the remaining portfolio.",
        ],
        bullets: [
          "Headless booking engine with dynamic packaging",
          "Central guest profile and cross-property loyalty",
          "Native guest app with digital check-in and room keys",
          "Connectors for multiple property management systems",
        ],
      },
      {
        heading: "The solution in operation",
        paragraphs: [
          "Guests now book any property through a single site and app, see their full stay history and redeem loyalty points anywhere in the group. Digital check-in and mobile keys reduce queues at reception, while in-stay messaging lets guests request services without calling the front desk.",
          "Revenue managers see near-real-time pickup, pricing and channel mix across every property on one dashboard. The integration layer handles retries and reconciliation automatically, so rate and inventory updates reach every channel within minutes rather than hours.",
        ],
      },
      {
        heading: "Results",
        paragraphs: [
          "Within twelve months of full rollout, direct bookings rose by over a third and commission spend with third-party channels fell substantially. The guest app maintained a strong store rating, and repeat stays across different properties in the group increased noticeably as loyal guests were finally recognised.",
          "Just as importantly, the group now has a platform it can extend. New properties are onboarded in weeks rather than months, and the marketing team can launch packages and campaigns across the entire portfolio from a single place.",
        ],
      },
    ],
  },
  {
    slug: "regional-retailer-demand-forecasting",
    kind: "case-study",
    title: "Machine-Learning Demand Forecasting for a Regional Grocery Retailer",
    excerpt:
      "A regional grocery and FMCG retailer replaced spreadsheet-based ordering with machine-learning forecasts, cutting fresh-food waste and out-of-stocks across more than one hundred stores.",
    date: "2025-07-15",
    readTime: "7 min read",
    category: "AI & Analytics",
    author: "AI & Data Practice",
    client: "A regional grocery and FMCG retailer",
    industry: "Retail & CPG",
    results: [
      { value: 28, suffix: "%", label: "Reduction in fresh-food waste" },
      { value: 41, suffix: "%", label: "Fewer out-of-stock incidents" },
      { value: 6, suffix: " hrs", label: "Saved per store manager each week" },
    ],
    body: [
      {
        heading: "The challenge",
        paragraphs: [
          "Store managers ordered stock using a mix of spreadsheets, gut feel and historical averages. That worked tolerably for long-life products but failed badly for fresh categories, where over-ordering meant waste and under-ordering meant empty shelves. Seasonal peaks such as Ramadan and school holidays made the problem far worse.",
          "The retailer had years of point-of-sale data but no reliable way to use it. Head office wanted consistent, explainable forecasts that store teams would trust, rather than a black-box system that managers would quietly override.",
        ],
      },
      {
        heading: "Our approach",
        paragraphs: [
          "We started by building a clean, governed sales and inventory dataset on a modern cloud data platform, resolving years of inconsistent product codes and store hierarchies. On top of that foundation, our data scientists developed forecasting models at store and product level that incorporated promotions, holidays, weather and local events.",
          `Rather than replacing store managers' judgement, ${siteConfig.name} designed an ordering assistant that proposed quantities, explained the main drivers behind each recommendation and let managers adjust with a reason code. Those adjustments fed back into the models, steadily improving accuracy over time.`,
        ],
        bullets: [
          "Unified sales, stock and promotions data platform",
          "Store-by-product forecasting with calendar and weather signals",
          "Explainable recommendations inside the ordering tool",
          "Feedback loop capturing manager overrides",
        ],
      },
      {
        heading: "Rollout and adoption",
        paragraphs: [
          "We piloted with fresh produce and bakery in fifteen stores, comparing outcomes with a matched control group. Results were shared openly with store managers, including cases where the model performed worse than humans, which built credibility and highlighted where further tuning was needed.",
          "After three months of pilot results, the retailer extended the system to all stores and to chilled and frozen categories. Training was delivered by store managers from the pilot group, which proved far more persuasive than training from head office.",
        ],
      },
      {
        heading: "Results",
        paragraphs: [
          "Fresh-food waste fell by more than a quarter and out-of-stock incidents dropped sharply, improving both margins and customer satisfaction. Store managers reclaimed several hours each week previously spent building orders, time they now spend on the shop floor with customers and staff.",
          "The data platform built for forecasting has since become the foundation for pricing analytics and supplier performance reporting, multiplying the return on the original investment.",
        ],
      },
    ],
  },
  {
    slug: "digital-lender-loan-origination",
    kind: "case-study",
    title: "From Weeks to Minutes: Rebuilding Loan Origination for a Digital Lender",
    excerpt:
      "A digital-first lender replaced a manual, document-heavy loan process with an automated origination platform, approving qualified applicants in minutes while strengthening compliance controls.",
    date: "2025-10-21",
    readTime: "7 min read",
    category: "Fintech",
    author: "Engineering Team",
    client: "A digital-first lender in the Middle East",
    industry: "Banking & Fintech",
    results: [
      { value: 92, suffix: "%", label: "Of applications decided automatically" },
      { value: 8, suffix: " min", label: "Median time to decision" },
      { value: 3, suffix: "x", label: "Growth in monthly loan volume" },
    ],
    body: [
      {
        heading: "The challenge",
        paragraphs: [
          "The lender had grown quickly on the strength of its brand, but behind the slick marketing sat a largely manual process. Applicants uploaded documents that analysts reviewed by hand, credit bureau checks were run individually, and decisions took days or even weeks. Drop-off rates were high and operating costs rose in step with volume.",
          "Regulators also expected clearer audit trails and consistent application of credit policy. The lender needed a platform that would scale volume without scaling headcount, while making every decision explainable and reproducible.",
        ],
      },
      {
        heading: "Our approach",
        paragraphs: [
          "We designed a cloud-native origination platform built around a configurable decision engine. Credit policy rules, scorecards and affordability checks were expressed as versioned configuration rather than hard-coded logic, allowing the risk team to adjust policy safely with full change history.",
          `${siteConfig.name} integrated identity verification, open banking data, credit bureau services and document intelligence that extracted key fields from statements and payslips automatically. Applications that met clear criteria flowed straight through, while edge cases were routed to analysts with all the evidence pre-assembled.`,
        ],
        bullets: [
          "Configurable, versioned credit decision engine",
          "Digital identity and open banking integrations",
          "Document extraction with human review for low-confidence fields",
          "Complete, immutable audit trail for every decision",
        ],
      },
      {
        heading: "Security and compliance by design",
        paragraphs: [
          "Financial data demanded rigorous controls. The platform encrypts data in transit and at rest, enforces role-based access with strong authentication for staff, and logs every action. Infrastructure is defined as code and deployed through automated pipelines with security scanning at each stage.",
          "We worked alongside the lender's compliance team from the first sprint, so that regulatory requirements shaped the design rather than being reviewed at the end. That collaboration made the regulatory approval process notably smoother than the lender had experienced with earlier projects.",
        ],
      },
      {
        heading: "Results",
        paragraphs: [
          "The vast majority of applications are now decided automatically, with a median time to decision measured in minutes. Application completion rates improved significantly because customers no longer abandoned the process while waiting, and monthly loan volume tripled within the first year without a corresponding rise in operations staff.",
          "The configurable decision engine has also enabled the lender to launch new products, including small-business credit lines, in a fraction of the time previously required.",
        ],
      },
    ],
  },
  {
    slug: "hospital-network-patient-experience-app",
    kind: "case-study",
    title: "A Connected Patient Experience for a Multi-Site Hospital Network",
    excerpt:
      "A private hospital network launched a patient app and integration layer connecting appointments, results and payments, reducing call-centre load and improving patient satisfaction across sites.",
    date: "2026-02-12",
    readTime: "6 min read",
    category: "Digital Health",
    author: "Healthcare Practice",
    client: "A multi-site private hospital network",
    industry: "Healthcare & Pharmaceuticals",
    results: [
      { value: 47, suffix: "%", label: "Drop in appointment-related calls" },
      { value: 310, suffix: "K", label: "Active patient app users" },
      { value: 19, suffix: "%", label: "Fewer missed appointments" },
    ],
    body: [
      {
        heading: "The challenge",
        paragraphs: [
          "Patients interacting with the network had to call a busy contact centre to book or reschedule appointments, collect lab results in person and settle bills at a cashier's desk. Each hospital had slightly different systems, so information did not follow patients when they visited another site.",
          "The network wanted a modern digital front door that would give patients control over their care journey, while reducing administrative pressure on staff. Patient privacy and clinical safety were non-negotiable constraints from day one.",
        ],
      },
      {
        heading: "Our approach",
        paragraphs: [
          "We built a healthcare integration layer using interoperability standards to connect the network's electronic health record, scheduling, laboratory and billing systems. This layer exposed secure, well-documented APIs that the patient app and future digital services could share.",
          `${siteConfig.name} designers ran research sessions with patients of different ages and digital confidence levels, including family members who manage care for elderly relatives. Those insights shaped features such as family accounts, large-text modes and clear explanations alongside lab results.`,
        ],
        bullets: [
          "Standards-based integration layer for clinical and admin systems",
          "Self-service booking, rescheduling and reminders",
          "Secure access to lab results and visit summaries",
          "Family profiles and in-app payments",
        ],
      },
      {
        heading: "Privacy and clinical safety",
        paragraphs: [
          "All patient data is encrypted, access is logged and patients authenticate with strong, user-friendly methods such as biometrics. Sensitive results are released according to clinician-defined rules, so patients do not receive concerning findings without appropriate context or follow-up.",
          "A clinical safety group, including doctors and nurses from the network, reviewed every feature that touched clinical information before release. This governance gave clinicians confidence to champion the app with their patients.",
        ],
      },
      {
        heading: "Results",
        paragraphs: [
          "Appointment-related calls to the contact centre fell by nearly half, freeing staff to handle complex enquiries. Automated reminders and easy rescheduling reduced missed appointments, which improved clinic utilisation and shortened waiting lists.",
          "Hundreds of thousands of patients now use the app, and satisfaction scores for administrative experience rose across every site. The integration layer is already being reused for telemedicine and remote monitoring services.",
        ],
      },
    ],
  },
  {
    slug: "government-citizen-services-portal",
    kind: "case-study",
    title: "One Front Door for Citizen Services",
    excerpt:
      "A national government services authority consolidated dozens of separate e-services into a single, accessible portal and app, simplifying transactions for millions of residents and businesses.",
    date: "2026-04-23",
    readTime: "7 min read",
    category: "Digital Government",
    author: "Public Sector Practice",
    client: "A national government services authority",
    industry: "Public Sector",
    results: [
      { value: 60, suffix: "+", label: "Services consolidated into one portal" },
      { value: 72, suffix: "%", label: "Of transactions completed fully online" },
      { value: 35, suffix: "%", label: "Faster average processing time" },
    ],
    body: [
      {
        heading: "The challenge",
        paragraphs: [
          "Residents and businesses had to navigate many separate websites, each with its own login, design and document requirements, to complete everyday tasks such as renewing permits or registering changes of address. Many transactions still required an in-person visit, creating queues and frustration.",
          "The authority's mandate was to create a single, trusted digital front door that worked for everyone, including people with disabilities and those with limited digital skills, while integrating with legacy systems owned by multiple government entities.",
        ],
      },
      {
        heading: "Our approach",
        paragraphs: [
          "We worked in a joint team with the authority's digital unit, using service design to map life events, such as starting a business or moving home, rather than organising services around departmental boundaries. This citizen-centred view revealed opportunities to combine several transactions into one guided journey.",
          `${siteConfig.name} engineers built a modular platform with a shared design system, national digital identity integration, reusable form and payment components, and an integration hub connecting to back-office systems across agencies. Each service could be migrated independently, reducing delivery risk.`,
        ],
        bullets: [
          "Life-event based service journeys",
          "Single sign-on through national digital identity",
          "Accessible bilingual design system",
          "Integration hub for multi-agency back-office systems",
        ],
      },
      {
        heading: "Accessibility and inclusion",
        paragraphs: [
          "Accessibility was treated as a core requirement. Every component was tested with assistive technologies and with users who rely on them. Plain-language content guidelines in both Arabic and English made forms easier to understand and reduced errors that previously caused applications to be rejected.",
          "For residents who prefer assisted channels, service centre staff use the same portal on behalf of customers, ensuring consistent processes and a single record of each interaction regardless of channel.",
        ],
      },
      {
        heading: "Results",
        paragraphs: [
          "More than sixty services now sit behind one front door, and a large majority of transactions are completed entirely online. Average processing times fell substantially because applications arrive complete and validated, and staff spend less time chasing missing information.",
          "The shared platform has changed how the authority delivers new services. Teams now launch digital services in weeks using existing components, rather than commissioning standalone websites for each new requirement.",
        ],
      },
    ],
  },
  {
    slug: "fashion-marketplace-headless-replatform",
    kind: "case-study",
    title: "Headless Commerce for a Fast-Growing Fashion Marketplace",
    excerpt:
      "A fashion marketplace replatformed to a headless architecture that handles peak-sale traffic, speeds up page loads and lets the merchandising team launch campaigns without developer help.",
    date: "2026-07-07",
    readTime: "6 min read",
    category: "Commerce",
    author: "Commerce Practice",
    client: "A fast-growing fashion marketplace",
    industry: "E-commerce",
    results: [
      { value: 2.1, suffix: "s", label: "Faster mobile page loads" },
      { value: 18, suffix: "%", label: "Uplift in mobile conversion" },
      { value: 99.98, suffix: "%", label: "Uptime during peak sale events" },
    ],
    body: [
      {
        heading: "The challenge",
        paragraphs: [
          "The marketplace had grown rapidly by onboarding hundreds of independent brands, but its monolithic platform was struggling. Page loads on mobile were slow, major sale events regularly caused outages, and every new landing page needed developer time. The business was leaving revenue on the table at precisely the moments demand was highest.",
          "Leadership wanted a platform that could scale elastically, give merchandisers creative freedom and support expansion into new markets with different currencies and languages.",
        ],
      },
      {
        heading: "Our approach",
        paragraphs: [
          "We designed a headless architecture separating the storefront from commerce services. A modern, server-rendered frontend delivered fast, search-friendly pages, while product catalogue, search, cart and checkout were provided by specialised services behind a unified API layer.",
          `A headless content management system gave merchandisers a visual editor to compose campaign pages from approved components. ${siteConfig.name} migrated traffic gradually, routing one category at a time to the new stack so performance and conversion could be compared directly against the legacy site.`,
        ],
        bullets: [
          "Server-rendered storefront with edge caching",
          "Composable search, catalogue and checkout services",
          "Visual campaign builder for merchandisers",
          "Category-by-category traffic migration",
        ],
      },
      {
        heading: "Preparing for peak",
        paragraphs: [
          "Before the first major sale on the new platform, we ran load tests at several times expected traffic, tuned autoscaling policies and introduced a virtual waiting room for extreme spikes. A joint war room with the client's operations team monitored every metric throughout the event.",
          "The sale ran without incident, processing record order volumes while the site remained fast. That success gave the business confidence to plan larger promotional calendars than ever before.",
        ],
      },
      {
        heading: "Results",
        paragraphs: [
          "Mobile pages now load in a fraction of the previous time, and mobile conversion rose meaningfully as a result. Uptime during peak sale events has remained near perfect, and the merchandising team launches dozens of campaign pages each month without engineering involvement.",
          "The composable architecture has also simplified market expansion. Launching in a new country now primarily involves configuration and content rather than new development.",
        ],
      },
    ],
  },
  {
    slug: "university-consortium-student-success-analytics",
    kind: "case-study",
    title: "Student Success Analytics for a University Consortium",
    excerpt:
      "A university consortium combined learning-platform, attendance and academic data to identify students at risk early, helping advisers intervene sooner and improve retention.",
    date: "2026-09-02",
    readTime: "6 min read",
    category: "EdTech",
    author: "AI & Data Practice",
    client: "A university consortium",
    industry: "Education",
    results: [
      { value: 14, suffix: "%", label: "Improvement in first-year retention" },
      { value: 3, suffix: " weeks", label: "Earlier identification of at-risk students" },
      { value: 85, suffix: "%", label: "Adviser adoption across campuses" },
    ],
    body: [
      {
        heading: "The challenge",
        paragraphs: [
          "The consortium's member universities each collected rich data about students: learning-platform activity, attendance, assignment submissions and grades. Yet this data sat in separate systems, and advisers typically learned a student was struggling only after a failed exam, when it was often too late to help.",
          "The consortium wanted an early-warning capability that respected student privacy, was transparent about how risk was assessed and fitted naturally into advisers' existing workflows.",
        ],
      },
      {
        heading: "Our approach",
        paragraphs: [
          "We built a secure analytics platform that brought together data from each university's learning management, student information and attendance systems under a common data model. Strict governance ensured each institution retained control over its own data, with only aggregated insights shared at consortium level.",
          `${siteConfig.name} data scientists worked with academic staff to develop transparent risk indicators based on engagement patterns rather than demographic characteristics. Each indicator came with a plain-language explanation, so advisers understood why a student had been flagged and could start a supportive, informed conversation.`,
        ],
        bullets: [
          "Common data model across multiple institutions",
          "Explainable engagement-based risk indicators",
          "Adviser dashboard with case notes and follow-ups",
          "Privacy and ethics review board oversight",
        ],
      },
      {
        heading: "Ethics and trust",
        paragraphs: [
          "Predictive analytics in education raises legitimate concerns. An ethics board including students, academics and data protection officers reviewed the model design, the data used and how insights would be communicated. Students were informed about the programme and how it aimed to support them.",
          "Indicators were tested regularly for bias across student groups, and advisers were trained to treat flags as a prompt for conversation rather than a judgement about a student's ability.",
        ],
      },
      {
        heading: "Results",
        paragraphs: [
          "Advisers now identify students needing support several weeks earlier than before, and first-year retention improved significantly across participating universities. Adoption among advisers has been high because the tool saves them time and fits into how they already work.",
          "The consortium is extending the platform to support curriculum planning, using aggregated engagement data to identify modules where many students struggle and where teaching design could be improved.",
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------
   * News
   * ------------------------------------------------------------- */
  {
    slug: "new-regional-office-gcc",
    kind: "news",
    title: `${siteConfig.name} Opens a New Regional Office in the GCC`,
    excerpt: `${siteConfig.name} has opened a new regional office to serve clients across the Gulf more closely, adding local leadership, consulting and delivery capacity for enterprise and public-sector programmes.`,
    date: "2025-03-03",
    readTime: "4 min read",
    category: "Company News",
    author: "Editorial Desk",
    body: [
      {
        heading: "Closer to our clients",
        paragraphs: [
          `${siteConfig.name} today announced the opening of a new regional office in the GCC, its latest step in building a permanent presence close to the clients it serves. The office will house client partners, solution architects, designers and delivery leads who work with organisations across the region on digital transformation, cloud and data programmes.`,
          "Clients in the region have increasingly asked for teams who understand local regulations, languages and business culture, and who can be in the room for workshops, steering committees and launches. A dedicated regional base makes that collaboration easier and faster, while still drawing on our wider global delivery network for scale.",
        ],
      },
      {
        heading: "What the office will focus on",
        paragraphs: [
          "The new team will focus on sectors where regional demand is growing fastest, including government services, financial services, hospitality and retail. It will also host innovation workshops where client leadership teams can explore emerging technologies such as generative AI and agentic automation with hands-on prototypes rather than slideware.",
          "The office will run a regional hiring programme, recruiting experienced consultants alongside graduates from local universities. Our goal is to build a team that reflects the communities we serve and that can support clients in both Arabic and English.",
        ],
        bullets: [
          "Client partnership and solution architecture",
          "Arabic-first product design and research",
          "Innovation workshops and rapid prototyping",
          "Local hiring and graduate development",
        ],
      },
      {
        heading: "Looking ahead",
        paragraphs: [
          `Leadership at ${siteConfig.name} described the opening as a long-term commitment to the region rather than a sales outpost. The intention is for the office to grow steadily over the coming years, deepening relationships with existing clients and partnering with regional technology ecosystems, universities and start-up communities.`,
          "Clients and partners interested in visiting the new office or arranging a discovery session can contact the regional team through the contact page on our website.",
        ],
      },
    ],
  },
  {
    slug: "advanced-cloud-partner-tier",
    kind: "news",
    title: `${siteConfig.name} Achieves Advanced Partner Tier With a Leading Cloud Provider`,
    excerpt: `${siteConfig.name} has been recognised at an advanced partner tier by a major hyperscale cloud provider, reflecting certified expertise and a strong record of successful migrations and modernisation projects.`,
    date: "2025-08-12",
    readTime: "3 min read",
    category: "Partnerships",
    author: "Editorial Desk",
    body: [
      {
        heading: "Recognition for certified expertise",
        paragraphs: [
          `${siteConfig.name} has achieved advanced-tier status in the partner programme of one of the world's leading hyperscale cloud providers. The tier is awarded to partners who demonstrate a significant number of certified engineers, a portfolio of validated customer projects and consistently high customer satisfaction.`,
          "Reaching this tier follows a sustained investment in training and certification across our cloud, data and security teams. Over the past year, engineers have completed hundreds of professional and specialty certifications covering architecture, DevOps, data analytics, machine learning and security.",
        ],
      },
      {
        heading: "What it means for clients",
        paragraphs: [
          "The new status gives clients access to additional funding programmes for migration assessments and proofs of concept, earlier access to new services, and direct escalation paths to the provider's specialist teams when complex issues arise. These benefits help clients reduce the cost and risk of large modernisation initiatives.",
          "It also provides independent validation of our technical practices. Projects counted toward the tier were reviewed against the provider's well-architected principles for security, reliability, performance, cost efficiency and operational excellence.",
        ],
        bullets: [
          "Co-funded migration and modernisation assessments",
          "Early access to new cloud services and previews",
          "Priority escalation to provider specialist teams",
          "Validated architecture and delivery practices",
        ],
      },
      {
        heading: "Continuing to invest",
        paragraphs: [
          `${siteConfig.name} plans to keep expanding its cloud capability, with a particular focus on data platforms, generative AI services and sovereign cloud requirements for regulated industries. Additional specialisation designations are already in progress.`,
          "We are grateful to the clients whose projects made this milestone possible, and to our engineers whose commitment to continuous learning underpins everything we deliver.",
        ],
      },
    ],
  },
  {
    slug: "delivery-center-expansion",
    kind: "news",
    title: `${siteConfig.name} Expands Its Global Delivery Center`,
    excerpt: `${siteConfig.name} is expanding its main delivery center with new engineering floors, collaboration spaces and an innovation lab, creating room for hundreds of additional engineers over the next two years.`,
    date: "2026-01-14",
    readTime: "4 min read",
    category: "Company News",
    author: "Editorial Desk",
    body: [
      {
        heading: "Room to grow",
        paragraphs: [
          `${siteConfig.name} has completed a major expansion of its primary delivery center, adding new engineering floors designed around the way modern product teams actually work. The expansion creates capacity for several hundred additional engineers, designers and quality specialists over the next two years as client demand continues to grow.`,
          "The new spaces were designed with input from our own teams. They include quiet focus areas, flexible project rooms for cross-functional squads, and video-ready meeting spaces that make collaboration with clients in other time zones feel natural.",
        ],
      },
      {
        heading: "An innovation lab for client experimentation",
        paragraphs: [
          "A highlight of the expansion is a dedicated innovation lab where teams can prototype with emerging technologies, including AI agents, extended reality and connected devices. Clients can work alongside our engineers in short, focused sprints to test ideas before committing to full-scale development.",
          "The lab also hosts internal guilds, where specialists share techniques and tools across projects. These communities of practice help spread proven approaches quickly and keep quality consistent as the organisation scales.",
        ],
        bullets: [
          "New engineering floors for cross-functional squads",
          "Innovation lab for rapid prototyping",
          "Dedicated device and accessibility testing lab",
          "Wellbeing and learning spaces for staff",
        ],
      },
      {
        heading: "Investing in people",
        paragraphs: [
          "Alongside the physical expansion, we are increasing investment in learning and development, with structured career paths, mentoring and certification support for every engineer. Our belief is simple: great software comes from people who are growing, supported and proud of their work.",
          `Recruitment for the expanded center is already underway across engineering, design, data and delivery roles. Candidates can explore open positions on the ${siteConfig.name} careers page.`,
        ],
      },
    ],
  },
  {
    slug: "launch-of-community-tech-academy",
    kind: "news",
    title: `${siteConfig.name} Launches a Free Community Tech Academy`,
    excerpt: `${siteConfig.name} is launching a free, mentor-led tech academy that helps students and career changers build practical software skills, with a focus on widening access to technology careers.`,
    date: "2026-05-20",
    readTime: "4 min read",
    category: "Community",
    author: "Editorial Desk",
    body: [
      {
        heading: "Opening doors to technology careers",
        paragraphs: [
          `${siteConfig.name} has launched a free community tech academy designed to help students, recent graduates and career changers gain practical, job-ready software skills. The programme is taught by volunteer mentors from our engineering, design and data teams and runs in evening and weekend cohorts so participants can join alongside study or work.`,
          "The academy responds to a gap we see repeatedly: talented people with the motivation to work in technology but without access to the hands-on experience employers look for. By teaching through real projects, the programme aims to bridge that gap.",
        ],
      },
      {
        heading: "How the programme works",
        paragraphs: [
          "Each cohort runs for twelve weeks and covers web development fundamentals, version control, testing, cloud basics and teamwork practices such as code review and agile ceremonies. In the final month, participants work in small teams to build an application for a local non-profit organisation.",
          "Places are prioritised for applicants from under-represented groups and communities with limited access to technology education. Participants receive laptops on loan where needed, along with career coaching and interview preparation.",
        ],
        bullets: [
          "Twelve-week, mentor-led cohorts",
          "Project-based learning with real non-profit partners",
          "Career coaching and interview preparation",
          "Equipment support for those who need it",
        ],
      },
      {
        heading: "Building a stronger ecosystem",
        paragraphs: [
          `Graduates of the academy are free to pursue opportunities anywhere, and ${siteConfig.name} will also consider them for internship and junior roles. Our aim is to strengthen the wider technology ecosystem, not only our own talent pipeline.`,
          "Applications for the first cohort are now open. Organisations interested in partnering as project hosts or sponsors are invited to get in touch with our community team.",
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------
   * Whitepapers
   * ------------------------------------------------------------- */
  {
    slug: "generative-ai-governance-whitepaper",
    kind: "whitepaper",
    title: "The Enterprise Guide to Generative AI Governance",
    excerpt:
      "A practical framework for governing generative AI across the enterprise, covering risk classification, model selection, data protection, evaluation and accountability without stifling innovation.",
    date: "2025-06-03",
    readTime: "14 min read",
    category: "AI Governance",
    author: "AI & Data Practice",
    body: [
      {
        heading: "Executive summary",
        paragraphs: [
          "Generative AI has moved from experimentation to everyday use faster than almost any previous technology. Employees are already using AI assistants, often without formal approval, and business units are commissioning AI features in customer-facing products. Governance frameworks designed for traditional software and analytics are struggling to keep pace.",
          "This paper proposes a lightweight, risk-based governance model that lets organisations move quickly on low-risk use cases while applying appropriate scrutiny to high-impact ones. It draws on our experience helping enterprises establish AI policies, review boards and technical controls.",
        ],
      },
      {
        heading: "Classifying use cases by risk",
        paragraphs: [
          "Not every AI use case deserves the same level of oversight. Summarising internal meeting notes carries very different risk from generating medical advice or making credit decisions. A simple tiering model that considers the impact on individuals, the degree of automation, the sensitivity of data and the external visibility of outputs helps allocate governance effort sensibly.",
          "Low-risk use cases can proceed with standard guardrails and self-certification. Medium-risk cases require a documented assessment and testing plan. High-risk cases need formal review, ongoing monitoring and clear human accountability for every decision the system influences.",
        ],
        bullets: [
          "Tier 1: internal productivity with human review",
          "Tier 2: customer-facing content with guardrails",
          "Tier 3: decisions affecting individuals' rights or finances",
        ],
      },
      {
        heading: "Data protection and model selection",
        paragraphs: [
          "Organisations must know where their data goes when it is sent to a model. Contracts with model providers should address data retention, training use and data residency. For sensitive workloads, private deployments or models hosted within a controlled environment may be required, particularly in regulated sectors and jurisdictions with strict localisation rules.",
          "Model selection should be driven by evaluation against the specific task rather than general benchmarks. A smaller, cheaper model that performs well on your use case is often preferable to a larger one, both for cost and for the ability to host it within your own boundaries.",
        ],
      },
      {
        heading: "Evaluation, monitoring and accountability",
        paragraphs: [
          "Every AI system in production should have a defined evaluation set, quality thresholds and monitoring for drift, harmful outputs and misuse. Evaluation results should be recorded with each release so that performance changes can be traced to specific model, prompt or data updates.",
          "Accountability must rest with named people, not committees. Each use case needs a business owner responsible for outcomes and a technical owner responsible for operation. A central AI council sets policy and resolves escalations, but does not become a bottleneck for routine approvals.",
        ],
      },
      {
        heading: "Getting started",
        paragraphs: [
          `${siteConfig.name} recommends starting with three actions: publish an acceptable-use policy for staff, inventory existing AI use across the organisation, and stand up a small cross-functional council with clear decision rights. These steps can be completed within a quarter and create the foundation for scaling AI responsibly.`,
          "Governance should evolve alongside capability. Review the framework every six months, incorporate lessons from incidents and near misses, and adjust controls as regulations and technology mature.",
        ],
      },
    ],
  },
  {
    slug: "legacy-core-modernisation-whitepaper",
    kind: "whitepaper",
    title: "Modernising Legacy Core Systems: A Risk-Weighted Approach",
    excerpt:
      "How to modernise mission-critical legacy systems incrementally, choosing between rehosting, refactoring and replacing on a component-by-component basis to balance value, cost and operational risk.",
    date: "2025-12-09",
    readTime: "16 min read",
    category: "Modernisation",
    author: "Engineering Team",
    body: [
      {
        heading: "The legacy dilemma",
        paragraphs: [
          "Many organisations depend on core systems built decades ago. These systems often work reliably, but they are expensive to change, difficult to integrate and supported by a shrinking pool of specialists. Every year of delay increases the cost and risk of eventual modernisation, yet a failed replacement can be catastrophic for operations.",
          "This paper sets out a risk-weighted approach that avoids the false choice between doing nothing and replacing everything. It treats a legacy estate as a portfolio of components, each with its own modernisation path.",
        ],
      },
      {
        heading: "Assessing the estate",
        paragraphs: [
          "Begin by decomposing the system into business capabilities and technical components. For each, assess business value, rate of change, technical health, integration complexity and operational risk. Automated code analysis can accelerate this work by mapping dependencies, dead code and data flows that documentation no longer reflects.",
          "Plotting components on a value-versus-health matrix reveals natural priorities. High-value, poor-health components are urgent candidates for modernisation. Stable, low-change components may be best left alone or simply rehosted to cheaper infrastructure.",
        ],
        bullets: [
          "Retain: stable, low-change, adequately healthy components",
          "Rehost: sound logic on costly or unsupported infrastructure",
          "Refactor: valuable logic trapped in brittle code",
          "Replace: commodity capability better served by a product",
        ],
      },
      {
        heading: "The strangler pattern in practice",
        paragraphs: [
          "The most reliable technique for incremental modernisation is to place a facade in front of the legacy system and progressively route functionality to new services behind it. Users and integrating systems see a stable interface while the implementation changes underneath, one capability at a time.",
          "Data is usually the hardest part. Change data capture can keep legacy and modern data stores synchronised during transition, allowing new services to go live without a single, high-risk data migration weekend. Clear ownership rules prevent both systems from writing to the same records simultaneously.",
        ],
      },
      {
        heading: "The role of AI in modernisation",
        paragraphs: [
          "AI-assisted tooling is changing the economics of legacy modernisation. Large language models can explain unfamiliar code, generate documentation, propose test cases and help translate logic from older languages. Used carefully, with engineers reviewing and validating every change, these tools can significantly reduce the effort of understanding and refactoring old systems.",
          "They do not remove the need for strong engineering discipline. Comprehensive automated tests that capture current behaviour remain essential to prove that modernised components behave identically to the originals.",
        ],
      },
      {
        heading: "Governance and funding",
        paragraphs: [
          "Incremental modernisation works best when funded as a continuous programme rather than a series of projects. Fund persistent teams aligned to business domains, measure progress by capabilities migrated and legacy costs retired, and report regularly to executive sponsors.",
          `In ${siteConfig.name}'s experience, organisations that adopt this model typically retire their first significant legacy components within six to nine months, building momentum and confidence that sustain the programme through its later, harder stages.`,
        ],
      },
    ],
  },
  {
    slug: "resilient-multi-cloud-architecture-whitepaper",
    kind: "whitepaper",
    title: "Designing Resilient Multi-Cloud Architectures",
    excerpt:
      "When multi-cloud adds resilience and when it only adds complexity. Architecture patterns, operating models and cost considerations for organisations running critical workloads across providers.",
    date: "2026-08-04",
    readTime: "15 min read",
    category: "Cloud Architecture",
    author: "Cloud Practice",
    body: [
      {
        heading: "Why multi-cloud, and why not",
        paragraphs: [
          "Organisations adopt multiple cloud providers for many reasons: regulatory requirements, acquisitions, access to specialised services, negotiating leverage or concerns about concentration risk. Some of these reasons justify significant architectural investment; others are better addressed through contracts and exit planning.",
          "True active-active deployment across providers is expensive and complex. For most workloads, the right goal is portability and a credible recovery plan rather than simultaneous operation everywhere. This paper helps leaders distinguish between the two.",
        ],
      },
      {
        heading: "Patterns for different needs",
        paragraphs: [
          "We see four common patterns. Best-of-breed places each workload on the provider that serves it best. Primary-with-recovery runs on one provider with a tested ability to recover on another. Portable-by-design builds on open technologies such as Kubernetes and open data formats to keep migration costs low. Active-active runs critical services across providers simultaneously.",
          "Each pattern has different implications for cost, staffing and complexity. Most organisations combine them, applying active-active only to the handful of services where downtime would be unacceptable.",
        ],
        bullets: [
          "Best-of-breed: optimise per workload",
          "Primary with recovery: tested exit and failover",
          "Portable by design: open standards and abstraction",
          "Active-active: maximum resilience at maximum cost",
        ],
      },
      {
        heading: "The operating model challenge",
        paragraphs: [
          "Technology is rarely the main obstacle. Running multiple clouds well requires consistent identity, networking, security policy, observability and cost management across all of them. Without a central platform team providing these capabilities as shared services, each product team reinvents them and the estate fragments quickly.",
          "Infrastructure as code, policy as code and a unified observability stack are the essential building blocks. They allow the same controls and visibility to apply regardless of where a workload runs.",
        ],
      },
      {
        heading: "Testing resilience for real",
        paragraphs: [
          "A recovery plan that has never been exercised is a hope, not a plan. Schedule regular failover tests, start with non-critical systems and progress to production game days once confidence grows. Measure actual recovery times against objectives and treat any gaps as priority engineering work.",
          `${siteConfig.name} helps clients design chaos engineering programmes that introduce controlled failures, from losing a single service to simulating a full regional outage, building both technical resilience and team confidence in incident response.`,
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------
   * Playbooks
   * ------------------------------------------------------------- */
  {
    slug: "product-discovery-playbook",
    kind: "playbook",
    title: "The Product Discovery Playbook",
    excerpt:
      "A step-by-step guide to running product discovery that de-risks new initiatives, aligns stakeholders and produces a validated, prioritised backlog before significant development budget is spent.",
    date: "2025-01-21",
    readTime: "12 min read",
    category: "Product Strategy",
    author: "Product & Design Studio",
    body: [
      {
        heading: "What discovery is for",
        paragraphs: [
          "Product discovery exists to answer four questions before you invest heavily in building: is the problem worth solving, will users adopt the solution, can we build it with available technology and budget, and does it support the business model? Skipping these questions is the most common reason digital products fail to deliver expected value.",
          "Good discovery is time-boxed and evidence-driven. It typically runs for four to eight weeks and ends with a clear recommendation to proceed, pivot or stop, backed by research findings, validated prototypes and a realistic delivery plan.",
        ],
      },
      {
        heading: "Step one: frame the opportunity",
        paragraphs: [
          "Start with a kickoff workshop that brings together sponsors, product owners, technical leads and frontline staff. Agree on the business outcome you are pursuing, the users you are serving and the assumptions that carry the most risk. Write these assumptions down explicitly; they become the agenda for the rest of discovery.",
          "Define what success will look like in measurable terms, such as conversion rate, time saved or cost reduced. Without agreed metrics, it is impossible to judge whether the eventual product has succeeded.",
        ],
        bullets: [
          "Stakeholder alignment workshop",
          "Assumption mapping and risk ranking",
          "Success metrics and guardrail metrics",
        ],
      },
      {
        heading: "Step two: understand users and context",
        paragraphs: [
          "Conduct interviews and contextual observation with representative users, ideally ten to fifteen across the main segments. Look for patterns in goals, frustrations and workarounds. Map the current journey end to end, noting where pain is greatest and where the business loses value.",
          "In parallel, review existing data, competitor offerings and technical constraints. The combination of qualitative insight and quantitative evidence gives a balanced picture of where the real opportunity lies.",
        ],
      },
      {
        heading: "Step three: prototype and test",
        paragraphs: [
          "Translate insights into a small number of solution concepts and build clickable prototypes for the most promising. Test them with users in short sessions, iterating between rounds. Focus on whether users understand the value and can complete key tasks, not on visual polish.",
          "Engineers should run technical spikes alongside design work to validate feasibility of the riskiest components, such as integrations with legacy systems or performance of AI features.",
        ],
      },
      {
        heading: "Step four: plan delivery",
        paragraphs: [
          "Close discovery by defining the minimum lovable product, a release roadmap, an architecture outline and a costed delivery plan. Present findings honestly, including the evidence that challenges original assumptions.",
          `When ${siteConfig.name} runs discovery, the output is designed to be usable by any delivery team, including the client's own. That independence keeps the recommendation objective and ensures the investment in discovery retains its value whatever happens next.`,
        ],
      },
    ],
  },
  {
    slug: "platform-engineering-playbook",
    kind: "playbook",
    title: "The Platform Engineering Playbook",
    excerpt:
      "How to build an internal developer platform that reduces cognitive load, standardises delivery and speeds up teams, from defining golden paths to measuring developer experience.",
    date: "2025-10-07",
    readTime: "13 min read",
    category: "DevOps",
    author: "Cloud Practice",
    body: [
      {
        heading: "Why platform engineering",
        paragraphs: [
          "As organisations adopt cloud, containers and microservices, the amount of infrastructure knowledge each product team needs has exploded. Developers spend more time wrestling with pipelines, permissions and configuration than building features. Platform engineering addresses this by providing a curated set of self-service tools and paved paths that make the right way the easy way.",
          "A platform is a product. It has customers, the internal development teams, and it succeeds only if they choose to use it. That mindset shift is the single most important principle in this playbook.",
        ],
      },
      {
        heading: "Define golden paths",
        paragraphs: [
          "Begin by identifying the most common things teams build, such as a web API, a frontend application, a scheduled job or an event consumer. For each, create a golden path: a template that includes source repository structure, build pipeline, security scanning, deployment configuration, observability and documentation.",
          "A developer following a golden path should be able to go from idea to a running service in production within hours. Teams can deviate when they have good reason, but most will not need to.",
        ],
        bullets: [
          "Service templates with sensible defaults",
          "Self-service environment provisioning",
          "Built-in security and compliance checks",
          "Standardised logging, metrics and tracing",
        ],
      },
      {
        heading: "Build the platform incrementally",
        paragraphs: [
          "Resist the urge to build a grand platform before anyone uses it. Start with the biggest pain point identified through developer interviews, solve it well and gather feedback. Expand capabilities in response to demand, measuring adoption at every step.",
          "A developer portal that catalogues services, owners, documentation and scorecards gives teams a single entry point and makes the platform discoverable. It also provides visibility into service health and compliance across the estate.",
        ],
      },
      {
        heading: "Measure developer experience",
        paragraphs: [
          "Track delivery metrics such as deployment frequency, lead time for changes, change failure rate and time to restore service. Complement them with regular developer surveys that capture satisfaction, perceived friction and the time spent on undifferentiated work.",
          `${siteConfig.name} uses these measures to guide platform roadmaps for clients, focusing investment where it removes the most friction. Improvements are communicated back to developers so they see the platform team responding to their needs.`,
        ],
      },
    ],
  },
  {
    slug: "mobile-app-launch-playbook",
    kind: "playbook",
    title: "The Mobile App Launch Playbook",
    excerpt:
      "Everything that needs to happen in the weeks around a mobile app launch, from beta testing and store readiness to analytics, support readiness and the first post-launch iteration.",
    date: "2026-05-05",
    readTime: "11 min read",
    category: "Mobile",
    author: "Mobile Engineering Team",
    body: [
      {
        heading: "Eight weeks out: beta and quality",
        paragraphs: [
          "Launch preparation should begin well before the code is finished. Around eight weeks out, open a closed beta to a few hundred real users through the platforms' testing programmes. Instrument the beta with crash reporting and analytics so you can see real behaviour, not just reported opinions.",
          "Use this period to harden performance on lower-end devices, test on poor network connections and verify accessibility. Issues found here cost a fraction of what they would after public release, when reviews and ratings are on the line.",
        ],
        bullets: [
          "Closed beta with real users and crash reporting",
          "Device matrix covering low-end and older models",
          "Accessibility and localisation checks",
        ],
      },
      {
        heading: "Four weeks out: store readiness",
        paragraphs: [
          "App store listings are marketing assets. Prepare screenshots, preview videos, descriptions and keywords for each target market and language. Review platform guidelines carefully, particularly around payments, privacy disclosures and account deletion, as these are common reasons for rejection.",
          "Submit for review early with a manual release option so approval does not dictate your launch date. Prepare responses for common reviewer questions and keep a demo account ready for reviewers to use.",
        ],
      },
      {
        heading: "Launch week: operations and support",
        paragraphs: [
          "Brief customer support teams with a launch guide covering new features, known issues and escalation routes. Set up dashboards for crash rates, API errors, sign-up funnel and key engagement events, and agree on thresholds that trigger an incident response.",
          "Consider a phased rollout that releases to a percentage of users first. If crash rates or error rates spike, you can pause the rollout while the team investigates, protecting both users and your store rating.",
        ],
      },
      {
        heading: "After launch: learn and iterate",
        paragraphs: [
          "Plan the first update before launch day. Users notice responsiveness, and a quick release that fixes early issues and acknowledges feedback builds goodwill. Monitor reviews daily and respond to them, especially negative ones.",
          `${siteConfig.name} typically holds a structured review at thirty days, comparing outcomes against the launch metrics agreed during discovery. The findings feed directly into the next quarter's roadmap, keeping the product focused on what users actually value.`,
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------
   * Perspectives
   * ------------------------------------------------------------- */
  {
    slug: "why-digital-transformations-stall",
    kind: "perspective",
    title: "Why Most Digital Transformations Stall in Year Two",
    excerpt:
      "The first year of a transformation is full of energy and quick wins. The second year is where many programmes lose momentum. Our view on why that happens and how to avoid it.",
    date: "2025-04-29",
    readTime: "6 min read",
    category: "Strategy",
    author: "Advisory Team",
    body: [
      {
        heading: "The year-two slump",
        paragraphs: [
          "Transformation programmes usually launch with executive enthusiasm, a bold vision and visible early wins: a new app, a cloud migration, a redesigned website. By the second year, those wins have been banked, the remaining work is harder and less glamorous, and attention starts to drift to the next big initiative.",
          "We see this pattern so often that we now plan for it explicitly. Recognising the slump as predictable rather than a sign of failure is the first step to getting through it.",
        ],
      },
      {
        heading: "Three root causes",
        paragraphs: [
          "First, early wins often sit at the edges of the organisation, in digital channels and customer-facing experiences, while core processes and systems remain unchanged. Eventually, progress at the edge is constrained by the legacy core, and the real work of transformation begins.",
          "Second, funding models designed for projects do not suit continuous change. Teams are disbanded after go-live, knowledge is lost, and the next phase must restart from scratch. Third, leadership attention naturally moves on, and middle management is left to sustain momentum without clear authority.",
        ],
        bullets: [
          "Easy wins exhausted at the edges",
          "Project funding undermining persistent teams",
          "Leadership attention moving elsewhere",
        ],
      },
      {
        heading: "What successful organisations do differently",
        paragraphs: [
          "Organisations that sustain transformation shift from projects to products, funding stable teams aligned to customer journeys or business capabilities. They tackle core system modernisation early, in parallel with front-end improvements, so the foundations are ready when they are needed.",
          `They also measure outcomes, not outputs. Rather than reporting the number of features shipped, they track customer satisfaction, cost to serve and revenue growth. In our work at ${siteConfig.name}, programmes that adopt outcome metrics in their first six months are markedly more likely to sustain sponsorship into their third year.`,
        ],
      },
      {
        heading: "A closing thought",
        paragraphs: [
          "Transformation is not a destination; it is the capability to change continuously. The goal of any programme should be to leave the organisation better at changing itself, not simply to deliver a fixed list of initiatives. Leaders who frame it that way are far less likely to be surprised by the second-year slump.",
          "If your programme is approaching that point, now is the time to revisit funding models, re-engage sponsors with outcome data and make sure the hard, foundational work is genuinely underway.",
        ],
      },
    ],
  },
  {
    slug: "the-case-for-smaller-software-teams",
    kind: "perspective",
    title: "The Case for Smaller Software Teams",
    excerpt:
      "As AI tools raise individual productivity, the optimal software team is getting smaller. Why we believe compact, senior, cross-functional teams will outperform large delivery groups.",
    date: "2025-12-16",
    readTime: "5 min read",
    category: "Engineering Culture",
    author: "Engineering Team",
    body: [
      {
        heading: "Coordination is the hidden cost",
        paragraphs: [
          "Every person added to a software team increases the number of communication paths. Beyond a certain size, teams spend more time aligning than building. Meetings multiply, decisions slow down and ownership becomes diffuse. This is not a new insight, but it is frequently ignored when deadlines tempt leaders to add headcount.",
          "Smaller teams move faster because context is shared naturally. Everyone understands the product, the code and the users, so decisions can be made in conversation rather than through layers of documentation and approval.",
        ],
      },
      {
        heading: "AI changes the equation further",
        paragraphs: [
          "AI coding assistants, automated testing tools and intelligent code review are significantly increasing what an individual engineer can deliver. Tasks that once required a dedicated specialist, such as writing boilerplate integrations or generating test data, can now be handled by a generalist with good tools.",
          "That shifts the value of a team toward judgement: understanding the problem, making architectural trade-offs and ensuring quality. Those are skills that scale with experience, not headcount. A compact team of senior practitioners augmented by AI often outperforms a much larger team working conventionally.",
        ],
      },
      {
        heading: "What a modern team looks like",
        paragraphs: [
          "Our preferred unit is a cross-functional squad of five to seven people: a product lead, a designer, three or four engineers spanning frontend, backend and platform, and a quality specialist who focuses on test strategy and automation rather than manual testing. The team owns outcomes end to end.",
          `${siteConfig.name} structures most engagements around squads of this shape. When more capacity is needed, we add another autonomous squad with a clearly bounded scope, rather than enlarging an existing one.`,
        ],
        bullets: [
          "Five to seven people, cross-functional",
          "End-to-end ownership of a clear outcome",
          "AI-assisted workflows across the lifecycle",
          "Scale by adding squads, not growing them",
        ],
      },
      {
        heading: "Implications for leaders",
        paragraphs: [
          "Leaders should resist measuring delivery capacity by headcount. Instead, focus on team stability, seniority mix, tool investment and the clarity of each team's mission. Removing dependencies between teams often unlocks more speed than adding people to any one of them.",
          "The organisations that internalise this will build better software with fewer people, and they will be more resilient because each team truly understands what it owns.",
        ],
      },
    ],
  },
  {
    slug: "sovereign-cloud-gcc-perspective",
    kind: "perspective",
    title: "Sovereign Cloud in the GCC: What Leaders Should Weigh",
    excerpt:
      "Data residency and sovereignty requirements are reshaping cloud strategy across the Gulf. Our perspective on balancing compliance, capability and cost when choosing where workloads run.",
    date: "2026-07-28",
    readTime: "6 min read",
    category: "Cloud Strategy",
    author: "Cloud Practice",
    body: [
      {
        heading: "Sovereignty is now a board-level topic",
        paragraphs: [
          "Across the GCC, regulators and governments have introduced data residency and sovereignty requirements that affect where sensitive data can be stored and processed. For government entities, financial institutions and healthcare providers, these rules now shape cloud strategy as much as cost or technical capability.",
          "Global hyperscalers have responded with in-country regions, and local providers offer sovereign cloud services operated entirely within national borders. Leaders face a more complex but also richer set of choices than they did only a few years ago.",
        ],
      },
      {
        heading: "Not all data is equal",
        paragraphs: [
          "The most effective strategies begin with data classification. Highly sensitive data, such as citizen records or health information, may require sovereign infrastructure with local operational control. Less sensitive data and workloads may run perfectly well in in-country hyperscaler regions, while public content can be served globally.",
          "Treating every workload as maximally sensitive leads to unnecessary cost and limits access to advanced services. A clear classification scheme, agreed with legal and compliance teams, allows each workload to land in the most appropriate environment.",
        ],
        bullets: [
          "Classify data before choosing infrastructure",
          "Map regulatory obligations to each classification",
          "Consider operational control, not just data location",
        ],
      },
      {
        heading: "The capability gap and how to manage it",
        paragraphs: [
          "Sovereign environments sometimes lag behind global regions in available services, particularly cutting-edge AI capabilities. Organisations need architectures that can take advantage of new services as they arrive locally, without being locked into whatever is available today.",
          `Building on open standards, containerised workloads and portable data formats keeps options open. At ${siteConfig.name}, we encourage clients to design for portability so that workloads can move between sovereign and hyperscale environments as regulations and services evolve.`,
        ],
      },
      {
        heading: "Our view",
        paragraphs: [
          "Sovereignty requirements are not an obstacle to innovation; they are a design constraint, and good architecture thrives on clear constraints. Organisations that invest early in classification, portability and strong governance will find they can adopt new capabilities quickly while remaining fully compliant.",
          "Those that delay risk accumulating workloads in the wrong places and facing costly migrations later when regulators or auditors ask difficult questions.",
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------
   * Podcasts
   * ------------------------------------------------------------- */
  {
    slug: "podcast-shipping-ai-features-users-trust",
    kind: "podcast",
    title: "Shipping AI Features Users Actually Trust",
    excerpt:
      "Our product and AI leads discuss why some AI features delight users while others are quietly ignored, covering transparency, graceful failure, feedback loops and measuring trust in production.",
    date: "2025-06-24",
    readTime: "38 min listen",
    category: "Artificial Intelligence",
    author: "Podcast Team",
    body: [
      {
        heading: "Episode overview",
        paragraphs: [
          "In this episode, a product director and a machine learning lead sit down to unpack a question every product team now faces: how do you build AI features that people rely on rather than tolerate? Drawing on recent projects in commerce, finance and internal tooling, they share what has worked and what has fallen flat.",
          "The conversation moves from design principles to engineering practices, and closes with practical advice for teams adding their first AI capability to an existing product.",
        ],
      },
      {
        heading: "Key themes",
        paragraphs: [
          "The guests argue that trust is built through predictability more than raw accuracy. Users forgive occasional mistakes if they understand what the AI is doing, can see its sources and can easily correct it. Features that act opaquely, even when usually right, generate anxiety and workarounds.",
          "They also discuss the importance of designing for failure. Every AI feature should have a graceful fallback, a clear way for users to flag problems and a team responsible for reviewing that feedback every week.",
        ],
        bullets: [
          "Predictability over perfection",
          "Showing sources and reasoning where possible",
          "Designing explicit fallback experiences",
          "Turning user corrections into training signals",
        ],
      },
      {
        heading: "Measuring trust",
        paragraphs: [
          "A highlight of the episode is a discussion of how to measure trust in production. Beyond satisfaction surveys, the guests recommend tracking acceptance rates of AI suggestions, the frequency of manual overrides, and whether users return to the feature voluntarily over time.",
          `They describe how ${siteConfig.name} teams build these measures into dashboards from the first release, so product decisions are informed by real behaviour rather than assumptions about what users want.`,
        ],
      },
      {
        heading: "Listen and learn more",
        paragraphs: [
          "The episode is available on all major podcast platforms. Listeners interested in going deeper can explore our enterprise AI governance whitepaper and our article on moving AI agents from pilot to production, both of which expand on themes raised in the conversation.",
          "We welcome questions and topic suggestions for future episodes through the contact page.",
        ],
      },
    ],
  },
  {
    slug: "podcast-economics-of-technical-debt",
    kind: "podcast",
    title: "The Economics of Technical Debt",
    excerpt:
      "An engineering director and a CFO-turned-advisor debate how to quantify technical debt, explain it to finance leaders and decide when paying it down is worth more than new features.",
    date: "2025-11-25",
    readTime: "42 min listen",
    category: "Engineering Leadership",
    author: "Podcast Team",
    body: [
      {
        heading: "Episode overview",
        paragraphs: [
          "Technical debt is one of the most discussed and least understood topics in software. Engineers feel its drag every day, but often struggle to explain its cost in terms that finance and business leaders accept. This episode brings both perspectives to the table for a frank, practical conversation.",
          "Our guests are an engineering director who has led several large modernisation programmes and an advisor with a long career in corporate finance who now helps technology companies with investment decisions.",
        ],
      },
      {
        heading: "Making debt visible",
        paragraphs: [
          "The guests agree that the metaphor of debt is useful only if you can describe the interest payments. They suggest concrete measures such as the share of engineering time spent on unplanned work, the lead time for changes in specific parts of the codebase and the frequency of incidents linked to fragile components.",
          "Once these measures are tracked over time, the conversation with finance changes. Instead of abstract complaints about code quality, engineering leaders can show how specific debt slows revenue-generating work and increases operational risk.",
        ],
        bullets: [
          "Unplanned work as a share of capacity",
          "Lead time by system or component",
          "Incident frequency tied to known weak points",
        ],
      },
      {
        heading: "When to pay it down",
        paragraphs: [
          "Not all debt should be repaid. The guests discuss debt in stable, rarely changed systems that may never justify investment, contrasted with debt in areas of active product development where every new feature pays a heavy tax. Prioritising repayment by where change is concentrated delivers the greatest return.",
          `They also share how ${siteConfig.name} engagement teams often reserve a fixed share of each sprint for debt reduction, making the investment predictable and protecting it from being repeatedly postponed in favour of new features.`,
        ],
      },
      {
        heading: "Takeaways",
        paragraphs: [
          "Listeners will come away with a vocabulary for discussing technical debt with non-technical stakeholders, a set of metrics to start tracking immediately and a framework for prioritising remediation work alongside the product roadmap.",
          "The episode pairs well with our whitepaper on modernising legacy core systems, which explores many of the same ideas at a larger scale.",
        ],
      },
    ],
  },
  {
    slug: "podcast-designing-for-arabic-first-users",
    kind: "podcast",
    title: "Designing for Arabic-First Users",
    excerpt:
      "Two senior designers explore what it really takes to build digital products for Arabic-first audiences, from right-to-left layouts and typography to tone of voice and cultural nuance.",
    date: "2026-04-14",
    readTime: "35 min listen",
    category: "Design",
    author: "Podcast Team",
    body: [
      {
        heading: "Episode overview",
        paragraphs: [
          "Many products serving the Middle East are designed in English and translated into Arabic late in the process. The result is often awkward layouts, clumsy text and experiences that feel foreign to native speakers. In this episode, two senior designers discuss how to design Arabic-first from the start.",
          "They draw on experience across government, banking and hospitality projects, sharing examples of small details that make a big difference to how users perceive quality and trustworthiness.",
        ],
      },
      {
        heading: "Beyond mirroring the layout",
        paragraphs: [
          "Right-to-left support is more than flipping the screen. The guests explain which elements should mirror and which should not, such as media playback controls, numbers and certain icons. They discuss the challenges of mixed-direction text, where Arabic sentences contain English brand names, codes or numbers.",
          "Typography receives special attention. Arabic scripts need different line heights, sizes and weights from Latin fonts to remain legible, and many popular interface fonts handle Arabic poorly. Choosing and testing typefaces early avoids painful redesigns later.",
        ],
        bullets: [
          "What to mirror and what to keep fixed",
          "Handling bidirectional text gracefully",
          "Arabic typography and readability",
          "Writing in natural, local tone rather than translated tone",
        ],
      },
      {
        heading: "Content, tone and culture",
        paragraphs: [
          "The conversation turns to content. Direct translation of English microcopy often produces stiff, overly formal Arabic. The guests recommend involving native Arabic content designers from the beginning and writing both languages in parallel, so each reads naturally to its audience.",
          `They also describe how ${siteConfig.name} research teams recruit participants across different countries and dialects, since expectations around formality and vocabulary vary considerably across the region.`,
        ],
      },
      {
        heading: "Who should listen",
        paragraphs: [
          "This episode is valuable for product managers, designers and engineers building for Middle Eastern markets, as well as global brands planning a regional launch. It offers practical checklists alongside broader reflections on designing respectfully for different cultures.",
          "Show notes include a summary of the design guidelines discussed, which listeners can adapt for their own teams.",
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------
   * Thought leadership
   * ------------------------------------------------------------- */
  {
    slug: "the-composable-enterprise",
    kind: "thought-leadership",
    title: "The Composable Enterprise: Building Organisations That Can Change Shape",
    excerpt:
      "Markets shift faster than traditional operating models can respond. How composable architecture, modular teams and reusable capabilities let organisations reconfigure themselves quickly and safely.",
    date: "2025-02-26",
    readTime: "9 min read",
    category: "Enterprise Architecture",
    author: "Advisory Team",
    body: [
      {
        heading: "Change is the only constant",
        paragraphs: [
          "Over the last decade, organisations have faced pandemic disruption, supply chain shocks, new regulations and the sudden arrival of generative AI. Each event rewarded those able to reconfigure processes, products and partnerships quickly, and penalised those locked into rigid systems and structures.",
          "The composable enterprise is our term for an organisation designed to change shape. It combines modular technology, modular teams and modular business capabilities so that new offerings can be assembled from existing parts rather than built from scratch every time.",
        ],
      },
      {
        heading: "Composable technology",
        paragraphs: [
          "At the technology layer, composability means building systems from well-bounded services with clear APIs, rather than large monoliths where everything depends on everything else. Commerce, payments, identity, content and analytics can each be provided by specialised components that are replaced independently as needs evolve.",
          "Composability does not mean adopting dozens of microservices for their own sake. It means placing boundaries where business capabilities naturally separate, so that change in one area does not ripple unpredictably through the rest.",
        ],
        bullets: [
          "API-first business capabilities",
          "Event-driven integration between domains",
          "Shared platforms for identity, data and observability",
        ],
      },
      {
        heading: "Composable organisation",
        paragraphs: [
          "Technology composability only pays off if the organisation mirrors it. Teams aligned to business capabilities, each owning their services end to end, can evolve their part of the enterprise without waiting for central approval. Clear interfaces between teams matter as much as clear interfaces between systems.",
          "Leaders shift from managing projects to managing a portfolio of capabilities, investing in those that differentiate and standardising those that do not. That portfolio view makes trade-offs explicit and helps direct scarce engineering talent to where it creates most value.",
        ],
      },
      {
        heading: "Getting started",
        paragraphs: [
          `${siteConfig.name} recommends starting with a capability map of the business, identifying the two or three capabilities where change is most frequent and most valuable. Modularise those first, prove the benefit and then expand. Attempting to make everything composable at once usually results in complexity without corresponding agility.`,
          "Over time, the organisation builds a library of reusable capabilities that can be combined in new ways. That library becomes a strategic asset, allowing the business to respond to market shifts in weeks rather than years.",
        ],
      },
    ],
  },
  {
    slug: "engineering-productivity-ai-pair-programmers",
    kind: "thought-leadership",
    title: "Engineering Productivity in the Age of AI Pair Programmers",
    excerpt:
      "AI coding tools are reshaping how software gets built. What we have learned about measuring their impact, adapting engineering practices and keeping quality high as velocity increases.",
    date: "2026-03-24",
    readTime: "8 min read",
    category: "Engineering",
    author: "Engineering Team",
    body: [
      {
        heading: "Beyond the hype",
        paragraphs: [
          "AI pair programmers have moved from novelty to standard equipment for most software teams. Vendors cite dramatic productivity gains, while sceptics point to subtle bugs and security issues in generated code. Our experience across many client engagements suggests the truth is more nuanced and more interesting than either camp claims.",
          "The gains are real but uneven. They are largest for well-understood tasks with clear patterns and smallest for novel design problems or deep debugging. Teams that understand this distribution can deploy AI tools where they help most.",
        ],
      },
      {
        heading: "Where AI helps most",
        paragraphs: [
          "Generating boilerplate, writing unit tests, explaining unfamiliar code, drafting documentation and performing routine refactors are areas where AI assistants consistently save time. Engineers report spending less time on tedious work and more on the problems that require human judgement.",
          "AI is also an effective teacher. Junior engineers ramp up faster when they can ask an assistant to explain a codebase or a framework, although this needs to be balanced with mentoring so they develop deep understanding rather than surface familiarity.",
        ],
        bullets: [
          "Test generation and coverage improvement",
          "Boilerplate and repetitive integration code",
          "Code explanation and documentation",
          "Mechanical refactoring and migration tasks",
        ],
      },
      {
        heading: "Adapting engineering practices",
        paragraphs: [
          "Higher code velocity puts pressure on downstream practices. Code review becomes more important, not less, and reviewers need to focus on intent, design and edge cases rather than syntax. Automated testing, static analysis and security scanning must keep pace so that faster delivery does not mean more defects in production.",
          `At ${siteConfig.name}, we have updated our engineering standards to require that AI-generated code meets the same review and test thresholds as any other code, and that engineers can explain every line they commit. Ownership does not transfer to the tool.`,
        ],
      },
      {
        heading: "Measuring what matters",
        paragraphs: [
          "Measuring lines of code or the number of AI suggestions accepted reveals little. Better indicators include lead time for changes, change failure rate, time spent on unplanned work and developer satisfaction. Comparing these before and after adoption, across similar teams, gives a credible picture of real impact.",
          "Organisations that take a disciplined, measured approach will capture lasting productivity gains. Those that simply hand out licences and hope for the best risk faster delivery of lower-quality software.",
        ],
      },
    ],
  },
  {
    slug: "what-responsible-automation-looks-like",
    kind: "thought-leadership",
    title: "What Responsible Automation Looks Like",
    excerpt:
      "Automation can free people from repetitive work or erode trust and accountability. Principles for designing automation that improves outcomes for customers, employees and organisations alike.",
    date: "2026-09-15",
    readTime: "7 min read",
    category: "Responsible AI",
    author: "Advisory Team",
    body: [
      {
        heading: "Automation is a choice about people",
        paragraphs: [
          "Every automation decision is ultimately a decision about how work is shared between people and machines. Framed purely as a cost-reduction exercise, automation can degrade service quality, remove accountability and leave employees anxious about their future. Framed as a way to improve outcomes, it can do the opposite.",
          "Responsible automation starts by asking who benefits, who bears the risk and who remains accountable when something goes wrong. Those questions should be answered before a single workflow is redesigned.",
        ],
      },
      {
        heading: "Principles we apply",
        paragraphs: [
          "We use a small set of principles when designing automation with clients. Decisions that significantly affect individuals should remain explainable and contestable. Humans should be able to override automated actions easily. The performance of automated systems should be monitored continuously, with clear thresholds for intervention.",
          "We also believe automation should be designed with the people whose work it changes. Frontline staff understand exceptions and edge cases that rarely appear in process documentation, and their involvement improves both the design and its acceptance.",
        ],
        bullets: [
          "Explainable and contestable decisions",
          "Easy human override at every step",
          "Continuous monitoring with intervention thresholds",
          "Co-design with affected employees",
        ],
      },
      {
        heading: "Reinvesting the benefits",
        paragraphs: [
          "The organisations that gain most from automation reinvest the time it frees. Staff released from repetitive data entry move into customer advisory, quality assurance or improvement roles, supported by reskilling programmes. This builds capability and trust, making the next wave of automation easier to introduce.",
          `${siteConfig.name} encourages clients to publish their automation principles internally and to report on how freed capacity has been used. Transparency turns automation from something done to employees into something done with them.`,
        ],
      },
      {
        heading: "Looking ahead",
        paragraphs: [
          "As AI agents take on more complex tasks, the stakes of automation design will only rise. Regulators are paying closer attention, and customers increasingly expect to know when they are dealing with an automated system and how to reach a person.",
          "Organisations that embed responsibility into their automation practices now will be better prepared for that future, and better placed to earn the trust that sustained adoption depends on.",
        ],
      },
    ],
  },
];
