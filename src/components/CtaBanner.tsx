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
          <p className={styles.eyebrow}>Sussex County & Delaware Beaches</p>
          <h2 className={styles.headline}>
            Local HVAC Experts<br />
            <span className="text-gradient">One Call Away</span>
          </h2>
          <p className={styles.sub}>
            Fast response. Honest pricing. A local company that picks up the phone.
          </p>
          <div className={styles.actions}>
            <a href={`tel:${BUSINESS.phoneRaw}`} className={`btn btn-primary btn-lg`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call Us
            </a>
            <a href="#contact" className={`btn btn-outline btn-lg`}>
              Request Service
            </a>
          </div>
        </div>
        <div className={styles.trustList} aria-label="Trust signals">
          {[
            'Licensed & Insured',
            'Locally Owned & Operated',
            'Same-Day Service Available',
            'No Upsells — Honest Pricing',
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
