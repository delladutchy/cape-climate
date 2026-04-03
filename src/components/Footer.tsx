import { BUSINESS } from '../data/config'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoAccent} aria-hidden="true" />
            <span>
              <span className={styles.logoPrimary}>Cape Climate°</span>
              <span className={styles.logoSub}>H.V.A.C. Services</span>
            </span>
          </div>
          <p className={styles.brandDesc}>
            Locally owned and operated HVAC company serving Sussex County & the Delaware Beaches. Licensed, insured, and committed to honest work.
          </p>
          <div className={styles.licenseTag}>
            <span aria-hidden="true" dangerouslySetInnerHTML={{__html: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'}} />
            {BUSINESS.license}
          </div>
        </div>

        {/* Services */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Services</h3>
          <ul className={styles.colList} role="list">
            {['A/C Repair', 'Heating Repair', 'System Installation', 'System Replacement', 'Seasonal Tune-Ups', 'Diagnostics'].map(s => (
              <li key={s}>
                <a href="#services" className={styles.colLink}>{s}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Contact</h3>
          <ul className={styles.colList} role="list">
              <a href={`tel:${BUSINESS.phoneRaw}`} className={`${styles.colLink} ${styles.phoneLink}`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {BUSINESS.phone}
              </a>
              <span className={styles.colText}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {BUSINESS.address.full}
              </span>
            <li>
              <span className={styles.colText}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
                {BUSINESS.hours}
              </span>
            </li>
            <li>
              <span className={styles.colText}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                {BUSINESS.owner}, Owner
              </span>
            </li>
          </ul>

          <a href="#contact" className={`btn btn-outline ${styles.footerCta}`}>
            Request Service
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>{BUSINESS.copyright}</p>
            <p className={styles.localTag}>
              Proudly serving Sussex County & the Delaware Beaches
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
