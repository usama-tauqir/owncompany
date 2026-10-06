import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Mail, Phone } from "lucide-react";

import ContactGlobalSection from "@/components/home/contact-global";
import { siteConfig } from "@/config/site";
import { resources as allResources } from "@/content/resources";
import type { Block, Locale } from "@/content/types";
import { getDictionary } from "@/i18n";
import { resourceHref, resourceKindLabel } from "@/lib/resources";

import Art from "./Art";
import Icon from "./Icon";
import { Counter, FaqList, JobsBoard, Reveal, TestimonialSlider } from "./interactive";

import styles from "./Blocks.module.css";

type BlockOf<T extends Block["type"]> = Extract<Block, { type: T }>;

interface Ctx {
  locale: Locale;
  index: number;
}

function SectionHead({
  eyebrow,
  title,
  subtitle,
  light,
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <Reveal className={styles.sectionHead} >
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <Heading className={light ? styles.titleLight : styles.title}>{title}</Heading>
      {subtitle && <p className={light ? styles.subtitleLight : styles.subtitle}>{subtitle}</p>}
    </Reveal>
  );
}

/* ---------------------------------------------------------------
 * Individual blocks
 * ------------------------------------------------------------- */

function Hero({ block }: { block: BlockOf<"hero"> }) {
  return (
    <header className={styles.hero} data-tone={block.tone ?? "navy"}>
      <Art seed={block.art ?? block.title} className={styles.heroArt} variant="hero" />
      <div className={styles.heroShade} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.heroInner}>
          <Reveal className={styles.heroGlass}>
            <p className={styles.heroEyebrow}>{block.eyebrow}</p>
            <h1 className={styles.heroTitle}>{block.title}</h1>
            {block.subtitle && <p className={styles.heroSubtitle}>{block.subtitle}</p>}

            {(block.cta || block.secondaryCta) && (
              <div className={styles.heroActions}>
                {block.cta && (
                  <Link href={block.cta.href} className={styles.primaryButton}>
                    {block.cta.label}
                  </Link>
                )}
                {block.secondaryCta && (
                  <Link href={block.secondaryCta.href} className={styles.ghostButton}>
                    {block.secondaryCta.label}
                  </Link>
                )}
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </header>
  );
}

function Intro({ block }: { block: BlockOf<"intro"> }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.split} data-reverse={block.reverse ? "true" : undefined}>
          <div>
            <SectionHead eyebrow={block.eyebrow} title={block.title} />
            <Reveal delay={0.1}>
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph} className={styles.body}>
                  {paragraph}
                </p>
              ))}
              {block.highlights && (
                <ul className={styles.checkList}>
                  {block.highlights.map((item) => (
                    <li key={item}>
                      <Check size={18} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          </div>

          <Reveal delay={0.15} className={styles.splitVisual}>
            <Art seed={block.art ?? block.title} className={styles.splitArt} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FeatureGrid({ block }: { block: BlockOf<"featureGrid"> }) {
  const dark = block.tone === "navy" || block.tone === "dark" || block.tone === "purple";

  return (
    <section className={dark ? styles.sectionDark : styles.sectionMuted} data-tone={block.tone}>
      <div className={styles.container}>
        <SectionHead eyebrow={block.eyebrow} title={block.title} subtitle={block.subtitle} light={dark} />

        <div className={styles.grid} data-columns={block.columns ?? 3}>
          {block.items.map((item, index) => {
            const content = (
              <>
                <span className={styles.cardIcon}>
                  <Icon name={item.icon} />
                </span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.description}</p>
                {item.href && <ArrowUpRight className={styles.cardArrow} size={22} aria-hidden="true" />}
              </>
            );

            return (
              <Reveal key={item.title} delay={(index % 3) * 0.06}>
                {item.href ? (
                  <Link href={item.href} className={dark ? styles.cardDark : styles.card}>
                    {content}
                  </Link>
                ) : (
                  <div className={dark ? styles.cardDark : styles.card}>{content}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Stats({ block, locale }: { block: BlockOf<"stats">; locale: Locale }) {
  return (
    <section className={styles.statsBand} data-tone={block.tone ?? "teal"}>
      <div className={styles.container}>
        {block.title && <SectionHead title={block.title} subtitle={block.subtitle} light />}
        <dl className={styles.statsGrid}>
          {block.items.map((item) => (
            <div key={item.label} className={styles.stat}>
              <dt className={styles.statValue}>
                <Counter value={item.value} prefix={item.prefix} suffix={item.suffix} locale={locale} />
              </dt>
              <dd className={styles.statLabel}>{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Process({ block }: { block: BlockOf<"process"> }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHead eyebrow={block.eyebrow} title={block.title} subtitle={block.subtitle} />
        <ol className={styles.process}>
          {block.steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.07} className={styles.processStep}>
              <span className={styles.processNumber}>{String(index + 1).padStart(2, "0")}</span>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardText}>{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function TechStack({ block }: { block: BlockOf<"techStack"> }) {
  return (
    <section className={styles.sectionMuted}>
      <div className={styles.container}>
        <SectionHead title={block.title} subtitle={block.subtitle} />
        <div className={styles.techGroups}>
          {block.groups.map((group) => (
            <Reveal key={group.name} className={styles.techGroup}>
              <h3 className={styles.techGroupName}>{group.name}</h3>
              <ul className={styles.techList}>
                {group.items.map((item) => (
                  <li key={item} className={styles.techChip}>
                    <span className={styles.techInitial} aria-hidden="true">
                      {item.charAt(0)}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta({ block }: { block: BlockOf<"cta"> }) {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <Reveal className={styles.ctaBox} >
          <Art seed={block.title} className={styles.ctaArt} variant="card" />
          <div className={styles.ctaContent} data-tone={block.tone ?? "purple"}>
            <h2 className={styles.ctaTitle}>{block.title}</h2>
            {block.subtitle && <p className={styles.ctaSubtitle}>{block.subtitle}</p>}
            <Link href={block.cta.href} className={styles.primaryButton}>
              {block.cta.label}
              <ArrowRight size={18} className={styles.flipRtl} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Faq({ block }: { block: BlockOf<"faq"> }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.faqLayout}>
          <SectionHead title={block.title} subtitle={block.subtitle} />
          <FaqList items={block.items} />
        </div>
      </div>
    </section>
  );
}

function LinkGrid({ block }: { block: BlockOf<"linkGrid"> }) {
  return (
    <section className={styles.sectionDark}>
      <div className={styles.container}>
        <SectionHead eyebrow={block.eyebrow} title={block.title} subtitle={block.subtitle} light />
        <div className={styles.linkGrid}>
          {block.links.map((link, index) => (
            <Reveal key={link.href + link.label} delay={(index % 4) * 0.05}>
              <Link href={link.href} className={styles.linkTile}>
                <span className={styles.linkTileIcon}>
                  <Icon name={link.icon} size={24} />
                </span>
                <span className={styles.linkTileText}>
                  <strong>{link.label}</strong>
                  {link.description && <span>{link.description}</span>}
                </span>
                <ArrowUpRight size={20} className={styles.linkTileArrow} aria-hidden="true" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline({ block }: { block: BlockOf<"timeline"> }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHead title={block.title} subtitle={block.subtitle} />
        <ol className={styles.timeline}>
          {block.items.map((item) => (
            <Reveal key={item.year + item.title} className={styles.timelineItem}>
              <span className={styles.timelineYear}>{item.year}</span>
              <div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

function People({ block }: { block: BlockOf<"people"> }) {
  return (
    <section className={styles.sectionMuted}>
      <div className={styles.container}>
        <SectionHead title={block.title} subtitle={block.subtitle} />
        <div className={styles.grid} data-columns={4}>
          {block.items.map((person, index) => (
            <Reveal key={person.name + person.role} delay={(index % 4) * 0.05} className={styles.personCard}>
              <div className={styles.personPortrait}>
                <Art seed={person.name + person.role} className={styles.personArt} variant="card" />
                <span className={styles.personInitials}>{initials(person.name)}</span>
              </div>
              <h3 className={styles.personName}>{person.name}</h3>
              <p className={styles.personRole}>{person.role}</p>
              {person.bio && <p className={styles.cardText}>{person.bio}</p>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials({ block }: { block: BlockOf<"testimonials"> }) {
  return (
    <section className={styles.sectionDark}>
      <div className={styles.container}>
        <SectionHead title={block.title} subtitle={block.subtitle} light />
        <TestimonialSlider items={block.items} />
      </div>
    </section>
  );
}

function Logos({ block }: { block: BlockOf<"logos"> }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHead title={block.title} subtitle={block.subtitle} />
        <ul className={styles.logoWall}>
          {block.items.map((item) => (
            <li key={item} className={styles.logoItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Offices({ block, locale }: { block: BlockOf<"offices">; locale: Locale }) {
  const offices = block.only
    ? siteConfig.offices.filter((office) => block.only?.includes(office.id))
    : siteConfig.offices;

  return (
    <section className={styles.sectionMuted}>
      <div className={styles.container}>
        <SectionHead title={block.title} subtitle={block.subtitle} />
        <div className={styles.grid} data-columns={offices.length >= 3 ? 3 : 2}>
          {offices.map((office) => (
            <Reveal key={office.id} className={styles.officeCard}>
              <span className={styles.officeFlag} aria-hidden="true">
                {office.flag}
              </span>
              <h3 className={styles.cardTitle}>
                {locale === "ar" ? `${office.cityAr}، ${office.countryAr}` : `${office.city}, ${office.country}`}
              </h3>
              <p className={styles.officeType}>{locale === "ar" ? office.typeAr : office.type}</p>
              <address className={styles.officeAddress}>
                {office.addressLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </address>
              <a href={`tel:${office.phone.replace(/[^+\d]/g, "")}`} className={styles.officeLink} dir="ltr">
                <Phone size={16} aria-hidden="true" /> {office.phone}
              </a>
              <a href={`mailto:${siteConfig.email.business}`} className={styles.officeLink}>
                <Mail size={16} aria-hidden="true" /> {siteConfig.email.business}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Resources({ block, locale }: { block: BlockOf<"resources">; locale: Locale }) {
  const dict = getDictionary(locale);
  const items = allResources
    .filter((item) => !block.kind || item.kind === block.kind)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, block.limit ?? 3);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headRow}>
          <SectionHead title={block.title} subtitle={block.subtitle} />
          {block.viewAll && (
            <Link href={block.viewAll.href} className={styles.outlineButton}>
              {block.viewAll.label}
            </Link>
          )}
        </div>

        <div className={styles.grid} data-columns={3}>
          {items.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.06}>
              <Link href={resourceHref(item)} className={styles.resourceCard}>
                <div className={styles.resourceMedia}>
                  <Art seed={item.slug} className={styles.resourceArt} variant="card" />
                  <span className={styles.resourceBadge}>{resourceKindLabel(item.kind)}</span>
                </div>
                <div className={styles.resourceBody}>
                  <p className={styles.resourceMeta}>
                    {item.category} · {item.readTime}
                  </p>
                  <h3 className={styles.resourceTitle}>{item.title}</h3>
                  <span className={styles.readMore}>
                    {dict.common.readMore}
                    <ArrowRight size={16} className={styles.flipRtl} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Jobs({ block, locale }: { block: BlockOf<"jobs">; locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className={styles.section} id="open-positions">
      <div className={styles.container}>
        <SectionHead title={block.title} subtitle={block.subtitle} />
        <JobsBoard
          items={block.items}
          allLabel={dict.common.all}
          applyLabel={dict.common.applyNow}
          applyHref={`mailto:${siteConfig.email.careers}`}
        />
      </div>
    </section>
  );
}

function RichText({ block }: { block: BlockOf<"richText"> }) {
  return (
    <section className={styles.section}>
      <div className={styles.containerNarrow}>
        {block.title && <h2 className={styles.title}>{block.title}</h2>}
        {block.updated && <p className={styles.updated}>Last updated: {block.updated}</p>}
        <div className={styles.prose}>
          {block.sections.map((section) => (
            <section key={section.heading}>
              <h3>{section.heading}</h3>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets && (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------
 * Renderer
 * ------------------------------------------------------------- */

function renderBlock(block: Block, ctx: Ctx) {
  switch (block.type) {
    case "hero":
      return <Hero block={block} />;
    case "intro":
      return <Intro block={block} />;
    case "featureGrid":
      return <FeatureGrid block={block} />;
    case "stats":
      return <Stats block={block} locale={ctx.locale} />;
    case "process":
      return <Process block={block} />;
    case "techStack":
      return <TechStack block={block} />;
    case "cta":
      return <Cta block={block} />;
    case "faq":
      return <Faq block={block} />;
    case "linkGrid":
      return <LinkGrid block={block} />;
    case "timeline":
      return <Timeline block={block} />;
    case "people":
      return <People block={block} />;
    case "testimonials":
      return <Testimonials block={block} />;
    case "logos":
      return <Logos block={block} />;
    case "offices":
      return <Offices block={block} locale={ctx.locale} />;
    case "resources":
      return <Resources block={block} locale={ctx.locale} />;
    case "jobs":
      return <Jobs block={block} locale={ctx.locale} />;
    case "richText":
      return <RichText block={block} />;
    case "contact":
      return <ContactGlobalSection />;
    default:
      return null;
  }
}

export default function BlockRenderer({
  blocks,
  locale = "en",
}: {
  blocks: Block[];
  locale?: Locale;
}) {
  return (
    <>
      {blocks.map((block, index) => (
        <div key={`${block.type}-${index}`} className={styles.blockWrap}>
          {renderBlock(block, { locale, index })}
        </div>
      ))}
    </>
  );
}
