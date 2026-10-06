"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight, MapPin, Quote } from "lucide-react";

import type { FaqItem, JobItem, TestimonialItem } from "@/content/types";

import styles from "./Blocks.module.css";

/* ---------------------------------------------------------------
 * Reveal — fades children in once they scroll into view
 * ------------------------------------------------------------- */

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------------------------------------------------------
 * Counter — animates a number from 0 when visible
 * ------------------------------------------------------------- */

export function Counter({
  value,
  prefix = "",
  suffix = "",
  locale = "en",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  locale?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 1400;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  const formatted = new Intl.NumberFormat(locale === "ar" ? "ar-SA" : "en-US").format(display);

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

/* ---------------------------------------------------------------
 * FAQ accordion
 * ------------------------------------------------------------- */

export function FaqList({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={styles.faqList}>
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `faq-panel-${index}`;

        return (
          <div key={item.question} className={styles.faqItem} data-open={isOpen}>
            <button
              type="button"
              className={styles.faqQuestion}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span>{item.question}</span>
              <ChevronDown className={styles.faqChevron} size={22} aria-hidden="true" />
            </button>

            <div id={panelId} className={styles.faqAnswer} role="region" hidden={!isOpen}>
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------------------------------------------------------------
 * Testimonials slider
 * ------------------------------------------------------------- */

export function TestimonialSlider({ items }: { items: TestimonialItem[] }) {
  const [index, setIndex] = useState(0);
  const total = items.length;

  useEffect(() => {
    if (total < 2) return;
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % total), 7000);
    return () => window.clearInterval(timer);
  }, [total]);

  if (total === 0) return null;

  const go = (step: number) => setIndex((current) => (current + step + total) % total);

  return (
    <div className={styles.slider}>
      <div className={styles.sliderTrack} style={{ transform: `translateX(${-index * 100}%)` }}>
        {items.map((item) => (
          <figure key={item.quote} className={styles.slide}>
            <Quote className={styles.quoteIcon} size={44} aria-hidden="true" />
            <blockquote className={styles.slideQuote}>{item.quote}</blockquote>
            <figcaption className={styles.slideAuthor}>
              <strong>{item.author}</strong>
              <span>{item.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      {total > 1 && (
        <div className={styles.sliderControls}>
          <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial">
            <ChevronLeft size={20} className={styles.flipRtl} />
          </button>
          <div className={styles.sliderDots}>
            {items.map((item, dot) => (
              <button
                key={item.author + dot}
                type="button"
                aria-label={`Show testimonial ${dot + 1}`}
                data-active={dot === index}
                onClick={() => setIndex(dot)}
              />
            ))}
          </div>
          <button type="button" onClick={() => go(1)} aria-label="Next testimonial">
            <ChevronRight size={20} className={styles.flipRtl} />
          </button>
        </div>
      )}
    </div>
  );
}

/* ---------------------------------------------------------------
 * Jobs board with department filter
 * ------------------------------------------------------------- */

export function JobsBoard({
  items,
  allLabel,
  applyLabel,
  applyHref,
}: {
  items: JobItem[];
  allLabel: string;
  applyLabel: string;
  applyHref: string;
}) {
  const departments = [allLabel, ...Array.from(new Set(items.map((job) => job.department)))];
  const [active, setActive] = useState(allLabel);
  const visible = active === allLabel ? items : items.filter((job) => job.department === active);

  return (
    <div>
      <div className={styles.filterBar} role="tablist">
        {departments.map((department) => (
          <button
            key={department}
            type="button"
            role="tab"
            aria-selected={active === department}
            className={styles.filterChip}
            data-active={active === department}
            onClick={() => setActive(department)}
          >
            {department}
          </button>
        ))}
      </div>

      <ul className={styles.jobList}>
        {visible.map((job) => (
          <li key={job.title + job.location} className={styles.jobRow}>
            <div>
              <h3 className={styles.jobTitle}>{job.title}</h3>
              <p className={styles.jobMeta}>
                <span>{job.department}</span>
                <span>
                  <MapPin size={14} aria-hidden="true" /> {job.location}
                </span>
                <span>{job.type}</span>
              </p>
            </div>
            <a
              className={styles.outlineButton}
              href={`${applyHref}?subject=${encodeURIComponent(`Application: ${job.title}`)}`}
            >
              {applyLabel}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
