import styles from "./CareersSection.module.css";

export default function CareerVideo() {
  return (
    <video
      className={styles.careerVideo}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/images/home/careers/careers-poster.jpg"
      aria-hidden="true"
      tabIndex={-1}
    >
      <source
        src="/videos/home/careers/careers-video.webm"
        type="video/webm"
      />

      <source
        src="/videos/home/careers/careers-video.mp4"
        type="video/mp4"
      />
    </video>
  );
}