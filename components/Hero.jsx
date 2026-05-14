'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="hero">
      <Image
        src="/images-linstantglow/rond.jpeg"
        alt=""
        fill
        sizes="100vw"
        className="hero-bg-img"
        priority
        aria-hidden="true"
      />
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
        </motion.p>
        <motion.h1
          className="hero-title hero-title-logo-wrap"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <span className="sr-only">L&apos;Instant Glow — Institut de beauté &amp; salon UV</span>
          <Image
            src="/images-linstantglow/logocompletheros.png"
            alt="L'Instant Glow — Institut de beauté & salon UV"
            width={2000}
            height={500}
            sizes="(max-width: 900px) 96vw, 56rem"
            className="hero-title-logo"
            priority
          />
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
        >
          Institut de beauté, salon UV et soins glow pour un résultat précis, lumineux et naturellement élégant.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
        >
          <a href="#contact" className="hero-btn">Réservez votre soin</a>
          <a href="#prestations" className="hero-btn-secondary">Découvrir les soins</a>
        </motion.div>

        <motion.div
          className="hero-signature"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          aria-label="Prestations signatures"
        >
          <span className="hero-signature-label">Soins signature</span>
          <div className="hero-signature-list">
            <span>Extensions de cils</span>
            <span>Brow lift</span>
            <span>Soin visage</span>
            <span>Blanchiment dentaire</span>
            <span>Corps & soleil UV</span>
            <span>Beauté des mains & pieds</span>
          </div>
        </motion.div>
      </div>

    </section>
  )
}
