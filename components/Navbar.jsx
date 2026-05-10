'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <a className="navbar-logo" href="#experience" aria-label="Accueil L'Instant Glow">
          <Image
              src="/images-linstantglow/petitlogo.jpg"
              alt="L'Instant Glow"
              fill
              sizes="96px"
              style={{ objectFit: 'contain', objectPosition: 'center' }}
          />
        </a>

        <a className="navbar-mobile-logo" href="#experience" aria-label="Accueil L'Instant Glow">
          <Image
            src="/images-linstantglow/petitlogo.jpg"
            alt="L'Instant Glow"
            fill
            sizes="72px"
            style={{ objectFit: 'contain', objectPosition: 'center' }}
          />
        </a>

        <ul className="navbar-links">
          <li><a href="#experience">Expérience</a></li>
          <li><a href="#salon">Le Salon</a></li>
          <li><a href="#prestations">Soins signature</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a className="navbar-cta" href="#contact">Réserver</a>

        <button
          className="navbar-burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span className="navbar-burger-text">Menu</span>
          <span className="navbar-burger-icon">
            <span className={menuOpen ? 'line1-open' : 'line1'}></span>
            <span className={menuOpen ? 'line2-open' : 'line2'}></span>
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar-mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            onClick={closeMenu}
          >
            <motion.div
              className="navbar-mobile-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="navbar-mobile-close"
                type="button"
                onClick={closeMenu}
                aria-label="Fermer le menu"
              >
                <span aria-hidden="true">×</span>
              </button>
              <div className="navbar-mobile-heading">
                <span>Institut de beauté & salon UV</span>
              </div>
              <ul>
                <li>
                  <a href="#experience" onClick={closeMenu}>
                    <span>Expérience</span>
                    <span aria-hidden="true">›</span>
                  </a>
                </li>
                <li>
                  <a href="#salon" onClick={closeMenu}>
                    <span>Le Salon</span>
                    <span aria-hidden="true">›</span>
                  </a>
                </li>
                <li>
                  <a href="#prestations" onClick={closeMenu}>
                    <span>Soins signature</span>
                    <span aria-hidden="true">›</span>
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={closeMenu}>
                    <span>Contact</span>
                    <span aria-hidden="true">›</span>
                  </a>
                </li>
              </ul>
              <a
                className="navbar-mobile-cta"
                href="https://www.planity.com/linstant-glow-01280-prevessin-moens"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
              >
                Réserver
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
