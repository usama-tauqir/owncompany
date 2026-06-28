"use client";

import {
  useEffect,
  useRef,
} from "react";
import Link from "next/link";

import CareerVideo from "./CareerVideo";

import styles from "./CareersSection.module.css";

function clamp(
  value: number,
  minimum: number,
  maximum: number,
): number {
  return Math.min(
    Math.max(value, minimum),
    maximum,
  );
}

function smoothStep(value: number): number {
  return value * value * (3 - 2 * value);
}

export default function CareersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const videoFrameRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const videoFrame = videoFrameRef.current;
    const content = contentRef.current;

    if (
      !section ||
      !stage ||
      !videoFrame ||
      !content
    ) {
      return;
    }

    const reducedMotionQuery =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      );

    let frameId: number | null = null;

    const applyFinalLayout = () => {
      videoFrame.style.setProperty(
        "--career-video-width",
        "58%",
      );

      videoFrame.style.setProperty(
        "--career-video-height",
        "72%",
      );

      videoFrame.style.setProperty(
        "--career-video-top",
        "14%",
      );

      content.style.setProperty(
        "--career-content-opacity",
        "1",
      );

      content.style.setProperty(
        "--career-content-y",
        "0px",
      );

      content.style.pointerEvents = "auto";
    };

    const updateAnimation = () => {
      frameId = null;

      /*
       * On tablet/mobile, CSS changes this into a regular
       * stacked section, so the scroll animation is disabled.
       */
      if (window.innerWidth <= 991) {
        return;
      }

      if (reducedMotionQuery.matches) {
        applyFinalLayout();
        return;
      }

      const sectionRect =
        section.getBoundingClientRect();

      const stageStyles =
        window.getComputedStyle(stage);

      const stickyTop =
        Number.parseFloat(stageStyles.top) || 0;

      const animationDistance = Math.max(
        section.offsetHeight -
          stage.offsetHeight,
        1,
      );

      const rawProgress =
        (stickyTop - sectionRect.top) /
        animationDistance;

      const progress = clamp(
        rawProgress,
        0,
        1,
      );

      const videoProgress =
        smoothStep(progress);

      /*
       * Video:
       *
       * 100% width  -> 58% width
       * 100% height -> 72% height
       * 0% top      -> 14% top
       */

      const videoWidth =
        100 - 42 * videoProgress;

      const videoHeight =
        100 - 28 * videoProgress;

      const videoTop =
        14 * videoProgress;

      videoFrame.style.setProperty(
        "--career-video-width",
        `${videoWidth}%`,
      );

      videoFrame.style.setProperty(
        "--career-video-height",
        `${videoHeight}%`,
      );

      videoFrame.style.setProperty(
        "--career-video-top",
        `${videoTop}%`,
      );

      /*
       * The text starts appearing after approximately
       * 42% of the section animation.
       */

      const contentProgress = clamp(
        (progress - 0.42) / 0.34,
        0,
        1,
      );

      const contentEase =
        smoothStep(contentProgress);

      const contentY =
        110 * (1 - contentEase);

      content.style.setProperty(
        "--career-content-opacity",
        String(contentEase),
      );

      content.style.setProperty(
        "--career-content-y",
        `${contentY}px`,
      );

      content.style.pointerEvents =
        contentProgress > 0.6
          ? "auto"
          : "none";
    };

    const requestUpdate = () => {
      if (frameId !== null) {
        return;
      }

      frameId =
        window.requestAnimationFrame(
          updateAnimation,
        );
    };

    updateAnimation();

    window.addEventListener(
      "scroll",
      requestUpdate,
      {
        passive: true,
      },
    );

    window.addEventListener(
      "resize",
      requestUpdate,
    );

    return () => {
      window.removeEventListener(
        "scroll",
        requestUpdate,
      );

      window.removeEventListener(
        "resize",
        requestUpdate,
      );

      if (frameId !== null) {
        window.cancelAnimationFrame(
          frameId,
        );
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.careersSection}
      aria-labelledby="careers-heading"
    >
      <div
        ref={stageRef}
        className={styles.stickyStage}
      >
        <div
          ref={videoFrameRef}
          className={styles.videoFrame}
        >
          <CareerVideo />
        </div>

        <div
          ref={contentRef}
          className={styles.careerContent}
        >
          <div className={styles.contentInner}>
            <p className={styles.eyebrow}>
              Careers
            </p>

            <h2
              id="careers-heading"
              className={styles.heading}
            >
              Human-first is our foundation.
            </h2>

            <p className={styles.description}>
              Join a culture that celebrates
              excellence and diversity, Globally!
            </p>

            <Link
              href="/career"
              className={styles.joinButton}
            >
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}