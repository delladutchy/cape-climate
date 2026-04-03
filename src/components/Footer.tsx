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
              <span className={styles.logoPrimary}>Cape Climate</span>
              <span className={styles.logoSub}>H.V.A.C. Services</span>
            </span>
          </div>
          <p className={styles.brandDesc}>
            Locally owned and operated HVAC company serving Sussex County & the Delaware Beaches. Licensed, insured, and committed to honest work.
          </p>
          <div className={styles.licenseTag}>
            <span aria-hidden="true">🏅</span>
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
            <li>
              <a href={`tel:${BUSINESS.phoneRaw}`} className={`${styles.colLink} ${styles.phoneLink}`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                {BUSINESS.phone}
              </a>
            </li>
            <li>
              <span className={styles.colText}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                {BUSINESS.address.full}
              </span>
            </li>
            <li>
              <span className={styles.colText}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
                </svg>
                {BUSINESS.hours}
              </span>
            </li>
            <li>
              <span className={styles.colText}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                {BUSINESS.owner}, Owner
              </span>
            </li>
          </ul>

          <a href="#contact" className={`btn btn-outline ${styles.footerCta}`}>
            Request Service Today
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
