import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import Art from "@/components/blocks/Art";
import BlockRenderer from "@/components/blocks/BlockRenderer";
import styles from "@/components/blocks/Blocks.module.css";
import Footer from "@/components/layout/footer";
import { resources } from "@/content/resources";
import type { Resource } from "@/content/types";
import { formatDate, resourceKindLabel, resourceRoutes } from "@/lib/resources";

import local from "./Templates.module.css";

export default function ArticleTemplate({ resource }: { resource: Resource }) {
  const listing = resourceRoutes[resource.kind];
  const related = resources
    .filter((item) => item.kind === resource.kind && item.slug !== resource.slug)
    .slice(0, 3);

  return (
    <>
      <main className={styles.blockWrap}>
        <header className={local.articleHero}>
          <Art seed={resource.slug} className={local.articleArt} variant="hero" />
          <div className={local.articleShade} aria-hidden="true" />
          <div className={styles.containerNarrow}>
            <Link href={listing} className={local.backLink}>
              <ArrowLeft size={16} aria-hidden="true" /> {resourceKindLabel(resource.kind)}
            </Link>
            <p className={styles.eyebrow}>{resource.category}</p>
            <h1 className={local.articleTitle}>{resource.title}</h1>
            <p className={local.articleMeta}>
              <span>{resource.author}</span>
              <span>{formatDate(resource.date)}</span>
              <span>{resource.readTime}</span>
            </p>
          </div>
        </header>

        {resource.kind === "case-study" && (resource.client || resource.results) && (
          <section className={local.caseSummary}>
            <div className={styles.containerNarrow}>
              <dl className={local.caseFacts}>
                {resource.client && (
                  <div>
                    <dt>Client</dt>
                    <dd>{resource.client}</dd>
                  </div>
                )}
                {resource.industry && (
                  <div>
                    <dt>Industry</dt>
                    <dd>{resource.industry}</dd>
                  </div>
                )}
              </dl>
              {resource.results && (
                <ul className={local.caseResults}>
                  {resource.results.map((result) => (
                    <li key={result.label}>
                      <strong>
                        {result.prefix}
                        {result.value}
                        {result.suffix}
                      </strong>
                      <span>{result.label}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        )}

        <article className={styles.section}>
          <div className={styles.containerNarrow}>
            <p className={local.lede}>{resource.excerpt}</p>
            <div className={styles.prose}>
              {resource.body.map((section) => (
                <section key={section.heading}>
                  <h2 className={local.proseHeading}>{section.heading}</h2>
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
        </article>
      </main>

      {related.length > 0 && (
        <BlockRenderer
          blocks={[
            {
              type: "resources",
              title: `More ${resourceKindLabel(resource.kind).toLowerCase()}s`,
              kind: resource.kind,
              limit: 3,
              viewAll: { label: "View all", href: listing },
            },
          ]}
        />
      )}

      <BlockRenderer
        blocks={[
          {
            type: "cta",
            title: "Want results like these?",
            subtitle: "Tell us where you want to be in twelve months and we'll map the path.",
            cta: { label: "Talk to our team", href: "/contact" },
          },
          { type: "contact" },
        ]}
      />
      <Footer />
    </>
  );
}
