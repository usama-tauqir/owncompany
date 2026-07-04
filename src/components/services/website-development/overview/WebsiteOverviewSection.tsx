import styles from "./WebsiteOverviewSection.module.css";

const overviewImage =
  "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674b5438c70f50058268d0d1_WhatsApp%20Image%202024-11-28%20at%2011.16.02.webp";

export default function WebsiteOverviewSection() {
  return (
    <section className={styles.overviewSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>Overview</p>

            <div className={styles.richText}>
              <p>
                Our web development services provide enterprise-grade and
                customized web development services tailored to meet the
                evolving demands of modern businesses.
              </p>

              <p>
                Whether you need a simple landing page or a complex web
                application, we have the expertise to deliver results that
                exceed expectations.
              </p>

              <h3>What we are good at:</h3>

              <ul>
                <li>
                  <strong>Cutting-Edge Technologies</strong>: Our use of the
                  latest frameworks and technologies such as React.js, Angular,
                  Vue.js, Node.js, Laravel, Ruby on Rails, and Python ensures
                  your web solutions are future-ready.
                </li>

                <li>
                  <strong>Responsive Design</strong>: Our approach guarantees
                  your website adapts to all screen sizes, providing a seamless
                  user experience.
                </li>

                <li>
                  <strong>Performance Optimization</strong>: We ensure your
                  website is optimized for speed and performance, leveraging
                  CDNs, lazy loading, and caching strategies to enhance load
                  times.
                </li>

                <li>
                  <strong>Web Security</strong>: We ensure that your website is
                  protected with the latest security standards, including SSL
                  encryption, firewalls, and regular security audits.
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.imageWrapper}>
            <img
              src={overviewImage}
              alt="Web development overview"
              className={styles.image}
              loading="lazy"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}