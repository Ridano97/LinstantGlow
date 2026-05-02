'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="hero" id="experience">
      <motion.div
        className="hero-ambient hero-ambient-one"
        animate={{ y: [0, -18, 0], opacity: [0.55, 0.75, 0.55] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="hero-ambient hero-ambient-two"
        animate={{ y: [0, 22, 0], x: [0, -12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="hero-content">
        <motion.p
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Prévessin-Moëns · Pays de Gex
        </motion.p>
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <span className="hero-title-script">L&apos;Instant</span>
          <span className="hero-title-bold">GLOW.</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
        >
          Institut de beauté, salon UV et rituels glow pour un résultat précis, lumineux et naturellement élégant.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
        >
          <a href="#contact" className="hero-btn">Réservez votre soin</a>
          <a href="#prestations" className="hero-btn-secondary">Découvrir les rituels</a>
        </motion.div>

        <motion.div
          className="hero-signature"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span>Extensions de cils</span>
          <span>Brow lift</span>
          <span>Spray tan</span>
          <span>Drainage</span>
        </motion.div>
      </div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <Image
          src="/images-linstantglow/20.jpg"
          alt="L'Instant Glow"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
          priority
        />
        <div className="hero-image-shine" />
        <motion.div
          className="hero-floating-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease: 'easeOut' }}
        >
          <span>Rituel signature</span>
          <strong>Votre éclat, notre précision.</strong>
        </motion.div>
      </motion.div>
    </section>
  )
}
