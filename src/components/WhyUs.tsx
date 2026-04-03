import { WHY_US } from '../data/config'
import styles from './WhyUs.module.css'

export default function WhyUs() {
  return (
    <section className={`section section--dark ${styles.section}`} id="why-us" aria-labelledby="why-us-heading">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.left}>
            <p className="eyebrow">Why Cape Climate</p>
            <h2 className="section-title" id="why-us-heading">
              The Local Standard.<br />
              <span className="text-gradient">Not the Corporate One.</span>
            </h2>
          </div>
          <div className={styles.right}>
            <p className="section-sub">
              Large HVAC companies send whoever's available and move to the next ticket. Cape Climate is locally owned and operated — we've built our reputation in Sussex County one honest job at a time, and we intend to keep it that way.
            </p>
            <p className={styles.subExtra}>
              Your comfort, your time, and your trust are never just another work order to us.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {WHY_US.map((item, i) => (
            <div key={item.title} className={styles.card} style={{ animationDelay: `${i * 0.08}s` }}>
              <div className={styles.cardTop}>
                <span className={styles.icon} aria-hidden="true">{item.icon}</span>
                <div className={styles.accentLine} aria-hidden="true" />
              </div>
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
              "Cape Climate was built on one principle: do the job right, treat people fairly, and stand behind your work. Every call we take is a reflection of our name and our community."
            </p>
            <cite className={styles.statementCite}>— Cape Climate H.V.A.C. Services · Sussex County, Delaware</cite>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
