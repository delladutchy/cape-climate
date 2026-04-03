import { SERVICES, BUSINESS } from '../data/config'
import styles from './Services.module.css'

export default function Services() {
  return (
    <section className={`section section--darker ${styles.section}`} id="services" aria-labelledby="services-heading">
      <div className="container">
        <div className={styles.header}>
          <p className="eyebrow">What We Do</p>
          <h2 className="section-title" id="services-heading">
            HVAC Services
          </h2>
          <p className="section-sub">
            Emergency repairs, installations, and maintenance for all your HVAC needs.
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((svc, i) => (
            <a key={svc.id} href="#contact" className={styles.card} style={{ animationDelay: `${i * 0.07}s` }} aria-label={`Request ${svc.title}`}>
              <div className={styles.cardInner}>
                <span className={styles.icon} aria-hidden="true" dangerouslySetInnerHTML={{__html: svc.icon}} />
                <h3 className={styles.title}>{svc.title}</h3>
                <p className={styles.desc}>{svc.description}</p>
                <span className={styles.link} aria-hidden="true">
                  Request Service <span aria-hidden="true">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className={styles.bottomBar}>
          <div>
            <p className={styles.barTitle}>Not sure what you need?</p>
            <p className={styles.barSub}>Call for honest diagnosis and fair pricing.</p>
          </div>
          <a href={`tel:${BUSINESS.phoneRaw}`} className={`btn btn-primary btn-lg`}>
            Call {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
