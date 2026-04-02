import { TESTIMONIALS } from '../data/config'
import styles from './Testimonials.module.css'

function Stars({ count }: { count: number }) {
  return (
    <div className={styles.stars} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} aria-hidden="true">★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className={`section section--darker ${styles.section}`} id="testimonials" aria-labelledby="reviews-heading">
      <div className="container">
        <div className={styles.header}>
          <p className="eyebrow">Customer Reviews</p>
          <h2 className="section-title" id="reviews-heading">
            What Sussex County<br />
            <span className="text-gradient">Says About Us</span>
          </h2>
          <p className="section-sub">
            Real customers. Real results. Our reputation is built one satisfied household at a time.
          </p>
        </div>

        <div className={styles.grid}>
          {TESTIMONIALS.map((t, i) => (
            <figure key={t.id} className={styles.card} style={{ animationDelay: `${i * 0.09}s` }}>
              <div className={styles.cardTop}>
                <Stars count={t.rating} />
                <span className={styles.quoteIcon} aria-hidden="true">"</span>
              </div>
              <blockquote>
                <p className={styles.text}>{t.text}</p>
              </blockquote>
              <figcaption className={styles.author}>
                <div className={styles.avatar} aria-hidden="true">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.location}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    </svg>
                    {t.location}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className={styles.disclaimer}>
          * Testimonials represent typical customer experiences. Replace with verified reviews when available.
        </p>
      </div>
    </section>
  )
}
