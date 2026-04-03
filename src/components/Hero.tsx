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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </span>
            <span>
              <span className={styles.phoneLabel}>Call us</span>
              <span className={styles.phoneNumber}>{BUSINESS.phone}</span>
            </span>
          </a>

          {/* CTA buttons */}
          <div className={styles.ctaGroup}>
            <a href="#contact" className={`btn btn-primary btn-lg ${styles.ctaBtn}`}>
              Request Service
            </a>
            <a href="#services" className={`btn btn-ghost btn-lg ${styles.ctaBtn}`}>
              Call Us
            </a>
          </div>

          {/* Trust strip */}
          <div className={styles.trustStrip}>
            {[
              { icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20,6 9,17 4,12"></polyline></svg>', label: 'Licensed & Insured' },
              { icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20,6 9,17 4,12"></polyline></svg>', label: 'Same-Day Service Available' },
              { icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20,6 9,17 4,12"></polyline></svg>', label: 'Locally Owned & Operated' },
            ].map(item => (
              <div key={item.label} className={styles.trustItem}>
                <span className={styles.trustCheck} dangerouslySetInnerHTML={{__html: item.icon}} />
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
                <div className={styles.cardName}>CAPE CLIMATE°</div>
                <div className={styles.cardTagline}>H.V.A.C. Services</div>
              </div>
            </div>

            <div className={styles.divider} />

            <div className={styles.cardInfo}>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon} aria-hidden="true" dangerouslySetInnerHTML={{__html: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>'}} />
                <div>
                  <div className={styles.infoLabel}>Service Area</div>
                  <div className={styles.infoValue}>Delaware Beaches</div>
                </div>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon} aria-hidden="true" dangerouslySetInnerHTML={{__html: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'}} />
                <div>
                  <div className={styles.infoLabel}>License</div>
                  <div className={styles.infoValue}>{BUSINESS.licenseShort}</div>
                </div>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon} aria-hidden="true" dangerouslySetInnerHTML={{__html: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'}} />
                <div>
                  <div className={styles.infoLabel}>Coverage</div>
                  <div className={styles.infoValue}>Fully Licensed & Insured</div>
                </div>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon} aria-hidden="true" dangerouslySetInnerHTML={{__html: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>'}} />
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
