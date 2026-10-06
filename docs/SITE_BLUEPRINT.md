# Site Blueprint

This document analyses how the reference site (devsinc.com) is organised and maps each part to how this project builds it.

**What was copied:** the structure, navigation, page types, section patterns and regional/language model.

**What is not copied:** Devsinc's text, logo, photography, staff, clients, awards and press coverage. All copy in this repository is original. Every brand detail comes from `src/config/site.ts`, so the site is ready for your own company.

> Note: the build environment could not load devsinc.com directly (blocked by the network policy). The analysis combines public search results with the navigation data already in this repository from earlier work.

---

## 1. Reference site analysis

### 1.1 Global chrome

| Element | Behaviour on the reference site | Implementation here |
|---|---|---|
| Sticky header | White bar about 84px tall, with a logo that animates from an insignia to a wordmark on hover | `components/layout/navbar` |
| Primary nav | Five mega-menu triggers: **What we do**, **Who we help**, **Who we are**, **How we deliver**, **Join &lt;brand&gt;** | `NavbarLinks.tsx`, data in `src/data/megaMenuData.ts` |
| Mega menus | Full-height white panel with a large title. "What we do" groups services into columns by category. "Who we help" is a two-column industry list. The rest are simple link lists. | `mega-menu/layouts/*` |
| Header CTAs | "Careers" (filled) and "Let's Talk Business" (outline) | `NavbarActions.tsx` |
| Region switcher | "Global ↓" dropdown: Global, MENA, KSA (Arabic), KSA (English), North America, Europe & UK | `GlobalSelector.tsx`, `data/regions.ts` |
| Floating tab | Vertical "Let's Talk Business" tab pinned to the right edge, which moves to the left edge in right-to-left (RTL) layouts | `components/layout/global/LocaleSync.tsx` |
| Footer | Logo, four dropdown link groups (Company, Industries, Services, Resources), office cards with flags, business email, legal links and social icons | `components/layout/footer` |
| Mobile | Hamburger menu, then a drawer with an accordion per menu and CTAs at the bottom | `navbar/mobile/*` |

### 1.2 Page types

| Type | URL pattern | Typical section order |
|---|---|---|
| Home | `/` | Hero video, client marquee, services carousel, industries list, CTA band, awards, partnerships, featured insights, achievement counters, careers teaser, leadership carousel, contact plus global offices, footer |
| Service | `/services/<slug>` | Image hero with a glass panel (eyebrow, headline, CTA), overview split, offerings card grid, mid-page CTA, process diagram, why-us cards, industries focus, tech stack, insights, contact |
| Industry | `/industry/<slug>` | Hero, overview, challenges, solutions, outcome stats, related services, testimonial, case studies, FAQ, CTA, contact |
| Company | `/about-us`, `/leadership`, `/geographies`, `/awards-recognition`, `/media-investor-relations`, `/esg-values`, `/code-of-conduct-values` | Hero followed by mixed content blocks (story, timeline, people, values, offices) |
| Resources | `/blogs`, `/case-studies`, `/news`, `/whitepapers`, `/playbooks`, `/perspective`, `/podcast`, `/thought-leadership`, `/client-testimonials` | Listing hero, filter chips, card grid. Detail pages show an article hero, body and related items. |
| Careers | `/career`, `/culture`, `/diversity-equity-and-inclusion`, `/employee-success`, `/benefits`, `/campus-ambassador-program` | Hero, culture or benefit grids, stats, job board, FAQ |
| Regional home | `/mena`, `/ksa-arabic`, `/ksa-english`, `/north-america`, `/europe-and-uk` | A localized homepage for each market: local hero, stats, local context, featured services and industries, engagement model, local testimonials, local offices, FAQ |
| Utility | `/contact`, `/privacy-policy`, `/terms-conditions` | Contact form plus offices, or long-form legal text |

### 1.3 Visual language

- **Palette:** deep navy `#08193d` / `#040b23`, teal accent `#13bbb5`, and a navy-to-purple gradient on glass panels (`#1a2552`, then `#2d306a`, then `#684286`).
- **Type:** a geometric sans (Avant Garde style) at heavy weights with tight negative tracking on headings, plus uppercase, widely spaced eyebrow labels.
- **Shapes:** large radii (17–28px), pill buttons, glass panels with background blur.
- **Motion:** fade-up on scroll, number counters, logo marquee, carousels, hover lift on cards.

### 1.4 Regions and languages

- Each market has its own landing page with local proof points, offices and FAQs.
- KSA has two variants: **Arabic (right-to-left)** and **English**.
- On the Arabic variant, the whole UI chrome (navbar, mega-menu titles, footer, buttons) switches to Arabic, and the layout mirrors.

---

## 2. Implementation map

```
src/
  config/site.ts            ← brand: name, emails, offices, socials, stats (EDIT THIS FIRST)
  i18n/en.ts, ar.ts         ← UI dictionaries for navbar/footer/buttons
  i18n/index.ts             ← locale helpers; /ksa-arabic → "ar" + RTL
  content/
    types.ts                ← content model (Block union, Service, Industry, Resource, Region)
    services/*.ts           ← 34 services in 7 categories
    industries.ts           ← 13 industries
    resources.ts            ← 34 articles (blogs, case studies, news, whitepapers …)
    pages/*.ts              ← company, careers, legal, contact pages as block lists
    regions/*.ts            ← 6 regional homepages (KSA Arabic fully translated)
  components/
    blocks/                 ← reusable sections + BlockRenderer
    templates/              ← Service, Industry, Page, ResourceListing, Article, Catalog
  app/                      ← routes (static generation for every page)
```

### 2.1 Block library

`hero`, `intro`, `featureGrid`, `stats`, `process`, `techStack`, `cta`, `faq`, `linkGrid`, `timeline`, `people`, `testimonials`, `logos`, `offices`, `resources`, `jobs`, `richText`, `contact`.

To build a new page, you write an array of blocks. No new component is needed.

### 2.2 Route inventory (119 static pages)

| Group | Routes |
|---|---|
| Home | `/` |
| Services | `/services`, plus 34 pages under `/services/<slug>` |
| Industries | `/industry`, plus 13 pages under `/industry/<slug>` |
| Company | `/about-us`, `/leadership`, `/geographies`, `/awards-recognition`, `/media-investor-relations`, `/esg-values`, `/code-of-conduct-values`, `/client-testimonials` |
| Careers | `/career`, `/culture`, `/diversity-equity-and-inclusion`, `/employee-success`, `/benefits`, `/campus-ambassador-program` |
| Resources | 8 listings, plus 34 detail pages under `/<listing>/<slug>` |
| Regions | `/global`, `/mena`, `/ksa-english`, `/ksa-arabic` (RTL), `/north-america`, `/europe-and-uk` |
| Utility | `/contact`, `/privacy-policy`, `/terms-conditions` |
| Redirects | `/learning` → `/blogs`, `/about` → `/about-us`, `/careers` → `/career`, `/industries` → `/industry`, `/ksa` → `/ksa-arabic`, `/ksa-en` → `/ksa-english` |

**Service slugs:**

| Category | Slugs |
|---|---|
| Digital Transformation | website-development, mobile-development, custom-development, ui-ux-design |
| Business Applications | d365-erp, d365-crm, power-apps, salesforce |
| Shopify | shopify, design-development, maintenance-support, automation-apps |
| Emerging Technologies | metaverse, augmented-reality, blockchain-cryptography, genai, data-analytics-and-insights, staff-augmentation, quality-assurance, devops, cybersecurity-solutions, saas |
| Gaming | game-development, gaming-art-design, web3-gaming, ar-vr-xr-gaming |
| Cloud | cloud-application, cloud-migration-cloud-ops, cloud-maintenance-integration |
| Studios & Advisory | ai-data-systems, product-studio, advisory-strategy, payment-as-a-service, architectural-visualization |

**Industry slugs:** shopify, travel-hospitality, public-sector, telecommunication, retail-and-cpg, oil-gas-and-energy, startups, e-commerce-software-development, banking-fintech, healthcare-pharmaceuticals, gaming, real-estate, education.

---

## 3. Before launch: replace the placeholders

| What | Where |
|---|---|
| Company name, legal name, Arabic name, URL, emails, phone | `src/config/site.ts` |
| Office addresses and phone numbers | `src/config/site.ts` → `offices` |
| Social profile URLs | `src/config/site.ts` → `socials` |
| Logo | `src/components/layout/navbar/logo/LogoIcon.tsx` and `LogoText.tsx` |
| Headline numbers | `siteConfig.stats` and `src/components/home/achievements/achievements.ts` |
| Leadership names and photos | `src/components/home/leadership/leaders.ts`, `src/content/pages/leadership.ts` |
| Client logos (only with permission) | `src/components/home/hero/client-marquee/clients.ts` |
| Awards and certifications you actually hold | `src/components/home/awards/awards.ts`, `src/content/pages/awards-recognition.ts` |
| Partner programmes you are enrolled in | `src/components/home/partnerships/partnerships.ts` |
| Press coverage | `src/components/home/hero/FeaturedPublications.tsx` (hidden while empty) |
| Illustrative figures (retention %, outcome stats, case-study results) | `src/content/**` — review them all |
| Region-specific claims (KSA hosting, local regulations, U.S. healthcare contracts) | `src/content/regions/*.ts` |
| Legal pages | `src/content/pages/privacy-policy.ts`, `terms-conditions.ts` (have counsel review) |
| Home hero video | Add `public/videos/home/hero/hero-video.mp4` / `.webm` and `public/images/home/hero/hero-poster.jpg` |
| Imagery | Pages use generated artwork (`components/blocks/Art.tsx`). Pass real images where you have them. |

## 4. Adding another language or region

1. Add a dictionary file such as `src/i18n/fr.ts` that satisfies `Dictionary`, and register it in `src/i18n/index.ts`.
2. Map the region route to the locale in `localeRoutes` (in `src/i18n/index.ts`).
3. Add `src/content/regions/<slug>.ts` with `locale` set, and list it in `regions/index.ts`.
4. Add the entry to `src/components/layout/navbar/data/regions.ts` and to the "Global" menu in `megaMenuData.ts`.

## 5. Known limitations

- Mega-menu link labels (service and industry names) stay in English on the Arabic page. Section titles and all chrome are translated.
- Only the regional landing pages are localized. Deep pages (services, industries, articles) are English-only, which matches the reference site's pattern.
- The earlier hand-built Website Development components remain in `src/components/services/website-development/` but are no longer routed. They reference images hosted on the reference site's CDN and should be deleted.
