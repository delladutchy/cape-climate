import { BUSINESS, HERO } from '../data/config'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="home" aria-label="Hero">
      {/* Background layers */}
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.bgGrid} />
        <div className={styles.bgGlow} />
        <div className={styles.bgGlow2} />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          {/* Trust badge */}
          <div className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            <span>{HERO.badge}</span>
          </div>

          {/* Main headline */}
          <h1 className={styles.headline}>
            <span className={styles.headlineLine1}>Delaware Beaches'</span>
            <span className={`${styles.headlineLine2} text-gradient`}>Trusted HVAC</span>
            <span className={styles.headlineLine3}>Experts</span>
          </h1>

          <p className={styles.sub}>Fast, reliable HVAC service — no hassle. No surprises.</p>

          {/* Phone — prominent */}
          <a href={`tel:${BUSINESS.phoneRaw}`} className={styles.phoneBlock} aria-label={`Call us at ${BUSINESS.phone}`}>
            <span className={styles.phoneIcon} aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
            </span>
            <span>
              <span className={styles.phoneLabel}>Call us</span>
              <span className={styles.phoneNumber}>{BUSINESS.phone}</span>
            </span>
            <span className={styles.phoneArrow} aria-hidden="true">→</span>
          </a>

          {/* CTA buttons */}
          <div className={styles.ctaGroup}>
            <a href="#contact" className={`btn btn-primary btn-lg ${styles.ctaBtn}`}>
              Get service
            </a>
            <a href="#services" className={`btn btn-ghost btn-lg ${styles.ctaBtn}`}>
              Request Quote
            </a>
          </div>

          {/* Trust strip */}
          <div className={styles.trustStrip}>
            {[
              { icon: '✓', label: 'Licensed & Insured' },
              { icon: '✓', label: 'Same-Day Service Available' },
              { icon: '✓', label: 'Locally Owned & Operated' },
            ].map(item => (
              <div key={item.label} className={styles.trustItem}>
                <span className={styles.trustCheck}>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Info card */}
        <div className={styles.card} aria-label="Business information">
          <div className={styles.cardAccent} aria-hidden="true" />
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <div className={styles.cardLogo}>CC</div>
              <div>
                <div className={styles.cardName}>CAPE° CLIMATE°</div>
                <div className={styles.cardTagline}>H.V.A.C. Services</div>
              </div>
            </div>

            <div className={styles.divider} />

            <div className={styles.cardInfo}>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon} aria-hidden="true">📍</span>
                <div>
                  <div className={styles.infoLabel}>Service Area</div>
                  <div className={styles.infoValue}>Delaware Beaches</div>
                </div>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon} aria-hidden="true">🏅</span>
                <div>
                  <div className={styles.infoLabel}>License</div>
                  <div className={styles.infoValue}>{BUSINESS.licenseShort}</div>
                </div>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon} aria-hidden="true">🛡️</span>
                <div>
                  <div className={styles.infoLabel}>Coverage</div>
                  <div className={styles.infoValue}>Fully Licensed & Insured</div>
                </div>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon} aria-hidden="true">🕐</span>
                <div>
                  <div className={styles.infoLabel}>Hours</div>
                  <div className={styles.infoValue}>Mon–Sat · Same-Day Available</div>
                </div>
              </div>
            </div>

            <a href={`tel:${BUSINESS.phoneRaw}`} className={`btn btn-primary ${styles.cardCta}`}>
              Call Now — {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scroll} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>Scroll</span>
      </div>
    </section>
  )
}
