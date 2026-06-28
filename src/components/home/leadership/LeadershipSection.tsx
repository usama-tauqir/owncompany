"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import LeaderCard from "./LeaderCard";
import { leaders } from "./leaders";

import styles from "./LeadershipSection.module.css";

export default function LeadershipSection() {
  const viewportRef = useRef<HTMLDivElement>(null);

  const [canMovePrevious, setCanMovePrevious] =
    useState(false);

  const [canMoveNext, setCanMoveNext] =
    useState(true);

  const updateControls = useCallback(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const maximumScroll =
      viewport.scrollWidth - viewport.clientWidth;

    setCanMovePrevious(viewport.scrollLeft > 4);

    setCanMoveNext(
      viewport.scrollLeft < maximumScroll - 4,
    );
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    updateControls();

    viewport.addEventListener(
      "scroll",
      updateControls,
      {
        passive: true,
      },
    );

    const resizeObserver = new ResizeObserver(
      updateControls,
    );

    resizeObserver.observe(viewport);

    return () => {
      viewport.removeEventListener(
        "scroll",
        updateControls,
      );

      resizeObserver.disconnect();
    };
  }, [updateControls]);

  const getSlideDistance = (): number => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return 450;
    }

    const firstCard =
      viewport.querySelector<HTMLElement>(
        "[data-leader-card]",
      );

    if (!firstCard) {
      return viewport.clientWidth * 0.75;
    }

    const track =
      firstCard.parentElement as HTMLElement | null;

    const gap = track
      ? Number.parseFloat(
          window.getComputedStyle(track).columnGap,
        ) || 0
      : 0;

    return firstCard.offsetWidth + gap;
  };

  const movePrevious = () => {
    viewportRef.current?.scrollBy({
      left: -getSlideDistance(),
      behavior: "smooth",
    });
  };

  const moveNext = () => {
    viewportRef.current?.scrollBy({
      left: getSlideDistance(),
      behavior: "smooth",
    });
  };

  return (
    <section
      id="global-leaders"
      className={styles.leadershipSection}
      aria-labelledby="leadership-heading"
    >
      <div className={styles.sectionHeader}>
        <h2
          id="leadership-heading"
          className={styles.heading}
        >
          Our Global Leadership
        </h2>

        <div className={styles.navigation}>
          <button
            type="button"
            className={styles.navigationButton}
            onClick={movePrevious}
            disabled={!canMovePrevious}
            aria-label="Show previous leaders"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M19 12H5M11 6L5 12L11 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            className={styles.navigationButton}
            onClick={moveNext}
            disabled={!canMoveNext}
            aria-label="Show next leaders"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M5 12H19M13 6L19 12L13 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={viewportRef}
        className={styles.sliderViewport}
        role="region"
        aria-label="Global leadership carousel"
        tabIndex={0}
      >
        <div className={styles.sliderTrack}>
          {leaders.map((leader) => (
            <LeaderCard
              key={leader.id}
              leader={leader}
            />
          ))}
        </div>
      </div>
    </section>
  );
}