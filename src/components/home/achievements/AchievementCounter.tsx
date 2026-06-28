"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import styles from "./AchievementsSection.module.css";

interface AchievementCounterProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export default function AchievementCounter({
  value,
  suffix = "",
  label,
  duration = 1400,
}: AchievementCounterProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const hasAnimatedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const element = itemRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          !entry.isIntersecting ||
          hasAnimatedRef.current
        ) {
          return;
        }

        hasAnimatedRef.current = true;

        const prefersReducedMotion =
          window.matchMedia(
            "(prefers-reduced-motion: reduce)",
          ).matches;

        if (prefersReducedMotion) {
          setDisplayValue(value);
          observer.disconnect();
          return;
        }

        const startTime = performance.now();

        const animateCounter = (
          currentTime: number,
        ) => {
          const elapsed = currentTime - startTime;

          const progress = Math.min(
            elapsed / duration,
            1,
          );

          const easedProgress =
            1 - Math.pow(1 - progress, 3);

          setDisplayValue(
            Math.round(value * easedProgress),
          );

          if (progress < 1) {
            animationFrameRef.current =
              window.requestAnimationFrame(
                animateCounter,
              );
          }
        };

        animationFrameRef.current =
          window.requestAnimationFrame(
            animateCounter,
          );

        observer.disconnect();
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();

      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(
          animationFrameRef.current,
        );
      }
    };
  }, [duration, value]);

  return (
    <div
      ref={itemRef}
      className={styles.achievementItem}
    >
      <h3
        className={styles.counter}
        aria-label={`${value.toLocaleString("en-US")}${suffix} ${label}`}
      >
        <span aria-hidden="true">
          {displayValue.toLocaleString("en-US")}
          {suffix}
        </span>
      </h3>

      <p className={styles.counterLabel}>
        {label}
      </p>
    </div>
  );
}