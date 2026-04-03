import { WHY_US } from '../data/config'
import styles from './WhyUs.module.css'

export default function WhyUs() {
  return (
    <section className={`section section--dark ${styles.section}`} id="why-us" aria-labelledby="why-us-heading">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.left}>
            <p className="eyebrow">Why Cape Climate°</p>
            <h2 className="section-title" id="why-us-heading">
              The Local Standard.<br />
              Not the Corporate One.
            </h2>
          </div>
          <div className={styles.right}>
            <p className="section-sub">
              Locally owned in Sussex County. We earn our reputation on every job.
            </p>
            <p className={styles.subExtra}>
              No shortcuts. No runaround.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {WHY_US.map((item, i) => (
            <div key={item.title} className={styles.card} style={{ animationDelay: `${i * 0.08}s` }}>
              <span className={styles.icon} aria-hidden="true">{item.icon}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className={styles.statement}>
          <div className={styles.statementAccent} aria-hidden="true" />
          <blockquote>
            <p className={styles.statementText}>
              "Cape Climate° was built on one principle: do the job right, treat people fairly, and stand behind your work. Every call we take is a reflection of our name and our community."
            </p>
            <cite className={styles.statementCite}>— Cape Climate° H.V.A.C. Services · Sussex County, Delaware</cite>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
