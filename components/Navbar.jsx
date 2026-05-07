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

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <a className="navbar-logo" href="#experience" aria-label="Accueil L'Instant Glow">
        <Image
            src="/images-linstantglow/petitlogo.jpg"
            alt="L'Instant Glow"
            fill
            sizes="96px"
            style={{ objectFit: 'contain', objectPosition: 'center' }}
            priority
        />
      </a>

      <ul className="navbar-links">
        <li><a href="#experience">Expérience</a></li>
        <li><a href="#salon">Le Salon</a></li>
        <li><a href="#prestations">Prestations</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a className="navbar-cta" href="#contact">Réserver</a>

      <button
        className="navbar-burger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span className={menuOpen ? 'line1-open' : 'line1'}></span>
        <span className={menuOpen ? 'line2-open' : 'line2'}></span>
        <span className={menuOpen ? 'line3-open' : 'line3'}></span>
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar-mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <div className="navbar-mobile-brand">
              <Image
                src="/images-linstantglow/logocomplet.jpg"
                alt="L'Instant Glow"
                fill
                sizes="240px"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <ul>
              <li><a href="#experience" onClick={() => setMenuOpen(false)}>Expérience</a></li>
              <li><a href="#salon" onClick={() => setMenuOpen(false)}>Le Salon</a></li>
              <li><a href="#prestations" onClick={() => setMenuOpen(false)}>Prestations</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
            <a
              className="navbar-mobile-cta"
              href="https://www.planity.com/linstant-glow-01280-prevessin-moens"
              target="_blank"
              rel="noreferrer"
            >
              Réserver
            </a>
            <span className="navbar-mobile-signature">Prévessin-Moëns · Pays de Gex</span>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
