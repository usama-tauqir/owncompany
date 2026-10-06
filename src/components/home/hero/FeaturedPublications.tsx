import Image from "next/image";

import styles from "./HeroSection.module.css";

interface Publication {
  name: string;
  image: string;
  href: string;
  width: number;
  height: number;
}

/*
 * Add press coverage of your company here, e.g.
 * { name: "Publication", image: "/images/press/logo.png", href: "https://...", width: 130, height: 42 }
 * The "Featured In" strip stays hidden while this list is empty.
 */
const publications: Publication[] = [];

export default function FeaturedPublications() {
  if (publications.length === 0) {
    return null;
  }

  return (
    <div className={styles.featuredSection}>
      <h2 className={styles.featuredHeading}>
        Featured In:
      </h2>

      <div className={styles.featuredGrid}>
        {publications.map((publication) => (
          <a
            key={publication.name}
            href={publication.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.publicationLink}
            aria-label={`Read the ${publication.name} feature`}
          >
            <Image
              src={publication.image}
              alt={publication.name}
              width={publication.width}
              height={publication.height}
              className={styles.publicationLogo}
              sizes="
                (max-width: 640px) 120px,
                8vw
              "
            />
          </a>
        ))}
      </div>
    </div>
  );
}