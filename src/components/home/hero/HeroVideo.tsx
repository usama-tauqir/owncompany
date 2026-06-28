import styles from "./HeroSection.module.css";

export default function HeroVideo() {
  return (
    <video
      className={styles.backgroundVideo}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/images/home/hero/hero-poster.jpg"
      aria-hidden="true"
      tabIndex={-1}
    >
      <source
        src="/videos/home/hero/hero-video.webm"
        type="video/webm"
      />

      <source
        src="/videos/home/hero/hero-video.mp4"
        type="video/mp4"
      />
    </video>
  );
}