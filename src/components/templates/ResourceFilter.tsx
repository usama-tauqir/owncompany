"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

import Art from "@/components/blocks/Art";
import styles from "@/components/blocks/Blocks.module.css";
import type { Resource } from "@/content/types";
import { formatDate, resourceHref, resourceKindLabel } from "@/lib/resources";

import local from "./Templates.module.css";

export default function ResourceFilter({ items }: { items: Resource[] }) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(items.map((item) => item.industry ?? item.category)))],
    [items],
  );
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const visible = items.filter((item) => {
    const matchesCategory = active === "All" || (item.industry ?? item.category) === active;
    const needle = query.trim().toLowerCase();
    const matchesQuery =
      !needle || item.title.toLowerCase().includes(needle) || item.excerpt.toLowerCase().includes(needle);
    return matchesCategory && matchesQuery;
  });

  return (
    <>
      <div className={local.toolbar}>
        <div className={styles.filterBar} role="tablist" aria-label="Filter by topic">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={active === category}
              data-active={active === category}
              className={styles.filterChip}
              onClick={() => setActive(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <label className={local.search}>
          <Search size={18} aria-hidden="true" />
          <span className={local.srOnly}>Search</span>
          <input
            type="search"
            placeholder="Search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
      </div>

      {visible.length === 0 ? (
        <p className={local.empty}>Nothing matches your filters yet.</p>
      ) : (
        <div className={styles.grid} data-columns={3}>
          {visible.map((item) => (
            <Link key={item.slug} href={resourceHref(item)} className={styles.resourceCard}>
              <div className={styles.resourceMedia}>
                <Art seed={item.slug} className={styles.resourceArt} variant="card" />
                <span className={styles.resourceBadge}>{resourceKindLabel(item.kind)}</span>
              </div>
              <div className={styles.resourceBody}>
                <p className={styles.resourceMeta}>
                  {formatDate(item.date)} · {item.readTime}
                </p>
                <h2 className={styles.resourceTitle}>{item.title}</h2>
                <p className={styles.resourceExcerpt}>{item.excerpt}</p>
                <span className={styles.readMore}>
                  Read more <ArrowRight size={16} aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
