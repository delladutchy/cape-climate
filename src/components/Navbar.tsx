import { useState, useEffect } from 'react'
import { BUSINESS } from '../data/config'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} role="navigation" aria-label="Main">
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="#" className={styles.logo}>
          <span className={styles.logoAccent} aria-hidden="true" />
          <span>
            <span className={styles.logoPrimary}>CAPE° CLIMATE°</span>
            <span className={styles.logoSub}>H.V.A.C. Services</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className={styles.links} role="list">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} className={styles.link}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={`tel:${BUSINESS.phoneRaw}`}
          className={`btn btn-primary ${styles.navCta}`}
          aria-label={`Call ${BUSINESS.phone}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
          </svg>
          {BUSINESS.phone}
        </a>

        {/* Hamburger */}
        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`${styles.burgerBar} ${menuOpen ? styles.open : ''}`} />
          <span className={`${styles.burgerBar} ${menuOpen ? styles.open : ''}`} />
          <span className={`${styles.burgerBar} ${menuOpen ? styles.open : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`} aria-hidden={!menuOpen}>
        <ul role="list">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href={`tel:${BUSINESS.phoneRaw}`} className={`btn btn-primary ${styles.mobileCta}`}>
              Call {BUSINESS.phone}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
