import { BUSINESS } from '../data/config'
import styles from './CtaBanner.module.css'

export default function CtaBanner() {
  return (
    <section className={styles.section} aria-label="Call to action">
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.bgGlow} />
      </div>
      <div className={`container ${styles.inner}`}>
        <div className={styles.accentLine} aria-hidden="true" />
        <div className={styles.content}>
          <p className={styles.eyebrow}>Don't Wait in the Heat — or Cold</p>
          <h2 className={styles.headline}>
            Georgetown's HVAC Expert<br />
            <span className="text-gradient">Is One Call Away</span>
          </h2>
          <p className={styles.sub}>
            Fast response. Honest work. A local technician who picks up the phone.
          </p>
          <div className={styles.actions}>
            <a href={`tel:${BUSINESS.phoneRaw}`} className={`btn btn-primary btn-lg`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              Call {BUSINESS.phone}
            </a>
            <a href="#contact" className={`btn btn-outline btn-lg`}>
              Request Service Online
            </a>
          </div>
        </div>
        <div className={styles.trustList} aria-label="Trust signals">
          {[
            'Master Licensed Technician',
            'Serving Sussex County Since ' + BUSINESS.founded,
            'No Upsells, Just Honest Work',
            'Emergency Service Available',
          ].map(item => (
            <div key={item} className={styles.trustItem}>
              <span className={styles.check} aria-hidden="true">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
