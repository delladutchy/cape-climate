import { BUSINESS } from '../data/config'
import styles from './Local.module.css'

export default function Local() {
  return (
    <section className={`section section--dark ${styles.section}`} id="local" aria-labelledby="local-heading">
      <div className="container">
        <div className={styles.inner}>
          {/* Left: Stats visual */}
          <div className={styles.visual} aria-hidden="true">
            <div className={styles.accentBar} />
            <div className={styles.statGrid}>
              {[
                { val: 'Sussex', label: 'County, Delaware' },
                { val: '100%', label: 'Locally Owned & Operated' },
                { val: 'Same', label: 'Day Service Available' },
                { val: 'DE Lic.', label: '#HM-0000071' },
              ].map(s => (
                <div key={s.label} className={styles.statCard}>
                  <div className={styles.statVal}>{s.val}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Copy */}
          <div className={styles.copy}>
            <p className="eyebrow">Sussex County & Delaware Beaches</p>
            <h2 className="section-title" id="local-heading">
              A Local Company<br />
              <span className="text-gradient">You Can Count On</span>
            </h2>

            <div className={styles.bodyText}>
              <p>
                Cape Climate° isn't a franchise or a national chain. We're a locally owned and operated HVAC company serving Sussex County and the Delaware Beaches — and our community's trust is the foundation everything is built on.
              </p>
              <p>
                When you call us, you're not routed through a call center or passed between departments. You reach real people who know the area, know your climate challenges, and can get someone out to you fast.
              </p>
              <p>
                That local accountability makes a real difference. When something isn't right, we show up to make it right — no escalation chains, no excuses.
              </p>
            </div>

            <div className={styles.areaTag}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Serving {BUSINESS.serviceArea}
            </div>

            <a href="#contact" className={`btn btn-primary btn-lg ${styles.cta}`}>
              Request Service Today
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
