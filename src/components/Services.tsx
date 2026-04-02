import { SERVICES, BUSINESS } from '../data/config'
import styles from './Services.module.css'

export default function Services() {
  return (
    <section className={`section section--darker ${styles.section}`} id="services" aria-labelledby="services-heading">
      <div className="container">
        <div className={styles.header}>
          <p className="eyebrow">What We Do</p>
          <h2 className="section-title" id="services-heading">
            Complete HVAC<br />
            <span className="text-gradient">Services</span>
          </h2>
          <p className="section-sub">
            From emergency repairs to full system replacements — every job is handled personally by Adam, with craftsmanship you can count on.
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((svc, i) => (
            <article key={svc.id} className={styles.card} style={{ animationDelay: `${i * 0.07}s` }}>
              <div className={styles.cardInner}>
                <span className={styles.icon} aria-hidden="true">{svc.icon}</span>
                <h3 className={styles.title}>{svc.title}</h3>
                <p className={styles.desc}>{svc.description}</p>
                <a href="#contact" className={styles.link} aria-label={`Request ${svc.title}`}>
                  Request Service <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className={styles.bottomBar}>
          <div>
            <p className={styles.barTitle}>Not sure what you need?</p>
            <p className={styles.barSub}>Call us and we'll diagnose the issue honestly — no unnecessary upsells.</p>
          </div>
          <a href={`tel:${BUSINESS.phoneRaw}`} className={`btn btn-primary btn-lg`}>
            Call {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
