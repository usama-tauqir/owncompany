import Image from "next/image";

import styles from "./HeroSection.module.css";

interface Publication {
  name: string;
  image: string;
  href: string;
  width: number;
  height: number;
}

const publications: Publication[] = [
  {
    name: "Forbes",
    image: "/images/home/hero/featured/forbes.png",
    href: "https://forbes.ge/en/this-pakistani-it-company-grew-during-covid-19-and-now-is-expanding-as-a-global-it-enabler/",
    width: 130,
    height: 42,
  },
  {
    name: "Business Insider",
    image:
      "/images/home/hero/featured/business-insider.png",
    href: "https://markets.businessinsider.com/news/stocks/devsinc-revolutionizes-global-it-services-with-state-of-the-art-digital-solutions-1034354340",
    width: 136,
    height: 45,
  },
  {
    name: "New York Weekly",
    image:
      "/images/home/hero/featured/new-york-weekly.png",
    href: "https://nyweekly.com/tech/south-asias-growing-tech-influence-devsincs-role-in-global-markets-and-partnerships/",
    width: 138,
    height: 40,
  },
  {
    name: "Mashable",
    image: "/images/home/hero/featured/mashable.png",
    href: "https://nl.mashable.com/tech-2/11074/pakistans-it-powerhouses-drie-bedrijven-die-de-europese-techwereld-transformeren",
    width: 132,
    height: 40,
  },
  {
    name: "Khaleej Times",
    image:
      "/images/home/hero/featured/khaleej-times.svg",
    href: "https://www.khaleejtimes.com/kt-network/devsinc-opens-global-it-delivery-centre-in-pakistan-expanding-its-technology-capabilities",
    width: 138,
    height: 42,
  },
  {
    name: "Yahoo Finance",
    image:
      "/images/home/hero/featured/yahoo-finance.png",
    href: "https://finance.yahoo.com/news/devsinc-unveils-devsinc-across-industries-153000756.html",
    width: 132,
    height: 48,
  },
];

export default function FeaturedPublications() {
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
              sizes="140px"
            />
          </a>
        ))}
      </div>
    </div>
  );
}