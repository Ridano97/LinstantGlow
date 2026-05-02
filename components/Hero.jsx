'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import '../styles/Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <span className="hero-title-script">L'instant</span>
          <span className="hero-title-bold">GLOW.</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
        >
          INSTITUT DE BEAUTÉ & SALON UV
        </motion.p>

        <motion.a
          href="#contact"
          className="hero-btn"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
        >
          RÉSERVEZ VOTRE SOIN
        </motion.a>
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
      </motion.div>
    </section>
  )
}