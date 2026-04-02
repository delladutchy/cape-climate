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
              Local Service.<br />
              <span className="text-gradient">Personal Accountability.</span>
            </h2>
          </div>
          <div className={styles.right}>
            <p className="section-sub">
              Big HVAC companies send whoever's available and move to the next ticket. At Cape Climate, you work directly with Adam — a master-licensed technician who has built his reputation one job at a time, right here in Sussex County.
            </p>
            <p className={styles.subExtra}>
              That means your comfort, your time, and your trust aren't just another work order.
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
              "I built Cape Climate on one principle: do the job right, treat people fairly, and stand behind your work. Every call I take is a direct reflection of my name and my community."
            </p>
            <cite className={styles.statementCite}>— Adam Cress, Owner & Master Technician</cite>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
