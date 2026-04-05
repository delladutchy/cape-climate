import { useEffect, useState } from 'react'
import { BUSINESS } from '../data/config'
import styles from './Contact.module.css'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mykblggk'

type FormState = 'idle' | 'success'

interface FormData {
  name: string
  phone: string
  email: string
  service: string
  message: string
}

const SERVICE_OPTIONS = [
  'A/C Repair',
  'Heating Repair',
  'System Installation',
  'System Replacement',
  'Seasonal Tune-Up',
  'System Diagnostics',
  'Other / Not Sure',
]

export default function Contact() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('form') === 'success') {
      setFormState('success')
      window.history.replaceState({}, document.title, window.location.pathname + window.location.hash)
    }
  }, [])

  return (
    <section className={`section section--dark ${styles.section}`} id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className={styles.inner}>
          {/* Left: Info */}
          <div className={styles.info}>
            <p className="eyebrow">Get in Touch</p>
            <h2 className="section-title" id="contact-heading">
              Ready to Fix It?<br />
              <span className="text-gradient">Let's Talk.</span>
            </h2>
            <p className={styles.infoSub}>
              The fastest way to reach us is always a phone call. For non-urgent requests, use the form and we'll respond within one business day.
            </p>

            <div className={styles.contactCards}>
              <a href={`tel:${BUSINESS.phoneRaw}`} className={styles.contactCard}>
                <span className={styles.contactCardIcon} aria-hidden="true" dangerouslySetInnerHTML={{__html: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>'}} />
                <div>
                  <div className={styles.contactCardLabel}>Call Us</div>
                  <div className={styles.contactCardValue}>{BUSINESS.phone}</div>
                </div>
              </a>

              <div className={styles.contactCard}>
                <span className={styles.contactCardIcon} aria-hidden="true" dangerouslySetInnerHTML={{__html: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>'}} />
                <div>
                  <div className={styles.contactCardLabel}>Our Location</div>
                  <div className={styles.contactCardValue}>{BUSINESS.address.full}</div>
                </div>
              </div>

              <div className={styles.contactCard}>
                <span className={styles.contactCardIcon} aria-hidden="true" dangerouslySetInnerHTML={{__html: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>'}} />
                <div>
                  <div className={styles.contactCardLabel}>Hours</div>
                  <div className={styles.contactCardValue}>{BUSINESS.hours}</div>
                </div>
              </div>

              <div className={styles.contactCard}>
                <span className={styles.contactCardIcon} aria-hidden="true" dangerouslySetInnerHTML={{__html: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'}} />
                <div>
                  <div className={styles.contactCardLabel}>License</div>
                  <div className={styles.contactCardValue}>{BUSINESS.license}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className={styles.formWrap}>
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <h3 className={styles.formTitle}>Request Service</h3>
                <p className={styles.formSub}>We'll follow up within one business day.</p>
              </div>

              {formState === 'success' ? (
                <div className={styles.success} role="alert">
                  <span className={styles.successIcon} aria-hidden="true">✓</span>
                  <h4>Request Received!</h4>
                  <p>Thanks for reaching out. We'll be in touch within one business day. For urgent issues, call us directly at <a href={`tel:${BUSINESS.phoneRaw}`}>{BUSINESS.phone}</a>.</p>
                </div>
              ) : (
                <form action={FORMSPREE_ENDPOINT} method="POST" noValidate>
                  <input type="hidden" name="subject" value="New Cape Climate Service Request" />
                  <input
                    type="hidden"
                    name="_next"
                    value={`${window.location.origin}${window.location.pathname}?form=success#contact`}
                  />
                  <div className={styles.formRow}>
                    <div className={styles.field}>
                      <label htmlFor="name" className={styles.label}>Your Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className={styles.input}
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        required
                        autoComplete="name"
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="phone" className={styles.label}>Phone Number *</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className={styles.input}
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="302-555-0100"
                        required
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="email" className={styles.label}>Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={styles.input}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="service" className={styles.label}>Service Needed *</label>
                    <select
                      id="service"
                      name="service"
                      className={`${styles.input} ${styles.select}`}
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service…</option>
                      {SERVICE_OPTIONS.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="message" className={styles.label}>Describe the Issue</label>
                    <textarea
                      id="message"
                      name="message"
                      className={`${styles.input} ${styles.textarea}`}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what's going on with your system…"
                      rows={4}
                    />
                  </div>

                  <button type="submit" className={`btn btn-primary btn-lg ${styles.submitBtn}`}>
                    Send Request
                  </button>

                  <p className={styles.formNote}>
                    * For emergencies, please call us directly at{' '}
                    <a href={`tel:${BUSINESS.phoneRaw}`} className={styles.formNoteLink}>
                      {BUSINESS.phone}
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
