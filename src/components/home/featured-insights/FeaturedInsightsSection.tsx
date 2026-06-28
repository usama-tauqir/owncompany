"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
} from "react";
import Link from "next/link";

import InsightCard from "./InsightCard";
import { insightColumns } from "./insights";

import styles from "./FeaturedInsightsSection.module.css";

type ParallaxStyles = CSSProperties & {
  "--parallax-y"?: string;
};

export default function FeaturedInsightsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const firstColumnRef = useRef<HTMLDivElement>(null);
  const thirdColumnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const firstColumn = firstColumnRef.current;
    const thirdColumn = thirdColumnRef.current;

    if (!section || !firstColumn || !thirdColumn) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotion.matches) {
      return;
    }

    let animationFrameId: number | null = null;

    const updateColumns = () => {
      animationFrameId = null;

      const sectionRect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const totalDistance =
        viewportHeight + sectionRect.height;

      const progress =
        (viewportHeight - sectionRect.top) /
        totalDistance;

      const normalizedProgress = Math.max(
        0,
        Math.min(1, progress),
      );

      const movement =
        (normalizedProgress - 0.5) * 70;

      firstColumn.style.setProperty(
        "--parallax-y",
        `${movement}px`,
      );

      thirdColumn.style.setProperty(
        "--parallax-y",
        `${-movement}px`,
      );
    };

    const handleScroll = () => {
      if (animationFrameId !== null) {
        return;
      }

      animationFrameId =
        window.requestAnimationFrame(updateColumns);
    };

    updateColumns();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );

      window.removeEventListener(
        "resize",
        handleScroll,
      );

      if (animationFrameId !== null) {
        window.cancelAnimationFrame(
          animationFrameId,
        );
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="featured-insights-heading"
    >
      <div
        className={styles.backgroundGlow}
        aria-hidden="true"
      />

      <div className={styles.container}>
        <div className={styles.contentLayout}>
          <div className={styles.textContent}>
            <p className={styles.eyebrow}>
              Featured Insights
            </p>

            <h2
              id="featured-insights-heading"
              className={styles.heading}
            >
              Stories of our transformations across
              Services and Industries
            </h2>

            <p className={styles.description}>
              From Concept to Completion
            </p>

            <Link
              href="/learning"
              className={styles.primaryButton}
            >
              Explore More
            </Link>
          </div>

          <div className={styles.insightsArea}>
            <div className={styles.insightsGrid}>
              {insightColumns.map((column) => {
                const columnClass =
                  column.id === "first"
                    ? styles.firstColumn
                    : column.id === "third"
                      ? styles.thirdColumn
                      : styles.secondColumn;

                const columnRef =
                  column.id === "first"
                    ? firstColumnRef
                    : column.id === "third"
                      ? thirdColumnRef
                      : undefined;

                return (
                  <div
                    key={column.id}
                    ref={columnRef}
                    className={[
                      styles.insightColumn,
                      columnClass,
                    ].join(" ")}
                    style={
                      {
                        "--parallax-y": "0px",
                      } as ParallaxStyles
                    }
                  >
                    {column.items.map((insight) => (
                      <InsightCard
                        key={insight.href}
                        insight={insight}
                      />
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}