import { BUSINESS } from '../data/config'
import styles from './Local.module.css'

export default function Local() {
  return (
    <section className={`section section--dark ${styles.section}`} id="local" aria-labelledby="local-heading">
      <div className="container">
        <div className={styles.inner}>
          {/* Left: Accent visual */}
          <div className={styles.visual} aria-hidden="true">
            <div className={styles.accentBar} />
            <div className={styles.statGrid}>
              {[
                { val: 'Sussex', label: 'County, DE' },
                { val: '1', label: 'Technician You Can Trust' },
                { val: '100%', label: 'Local Business' },
                { val: 'Your', label: 'Neighbor' },
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
            <p className="eyebrow">Georgetown, Delaware</p>
            <h2 className="section-title" id="local-heading">
              Neighbors Serving<br />
              <span className="text-gradient">Neighbors</span>
            </h2>

            <div className={styles.bodyText}>
              <p>
                Cape Climate isn't a franchise. It isn't backed by a national call center or a fleet of rotating technicians. It's Adam Cress — a Sussex County resident who built a business in his own community and has to stand behind every job he does, because his neighbors are his customers.
              </p>
              <p>
                When you call Cape Climate, you're not calling a corporation. You're calling a local business owner who lives a few miles from you and cares deeply about the reputation he's built — one honest job at a time.
              </p>
              <p>
                That accountability is worth something. When something's not right, Adam shows up to fix it. No tickets, no escalation chains. Just a handshake and a job done right.
              </p>
            </div>

            <div className={styles.areaTag}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Serving {BUSINESS.serviceArea}
            </div>

            <a href="#contact" className={`btn btn-primary btn-lg ${styles.cta}`}>
              Request Local Service
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
