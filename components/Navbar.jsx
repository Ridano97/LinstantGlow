'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/Navbar.css'

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
      <div className="navbar-logo">
        <Image
            src="/images-linstantglow/petitlogo.jpg"
            alt="L'Instant Glow"
            width={90}
            height={90}
            style={{ objectFit: 'cover' }}
            priority
        />
      </div>

      <ul className="navbar-links">
        <li><a href="#salon">Le Salon</a></li>
        <li><a href="#prestations">Prestations</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

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
            <ul>
              <li><a href="#salon" onClick={() => setMenuOpen(false)}>Le Salon</a></li>
              <li><a href="#prestations" onClick={() => setMenuOpen(false)}>Prestations</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}