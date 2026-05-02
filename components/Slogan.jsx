'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import '../styles/Slogan.css'

export default function Slogan() {
  return (
    <section className="slogan">
      <div className="slogan-inner">
        <div className="slogan-gouttes">
          <Image
            src="/images-linstantglow/gouttes.jpg"
            alt="gouttes"
            width={160}
            height={160}
            style={{ objectFit: 'contain' }}
          />
        </div>
        <motion.div
          className="slogan-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <span className="slogan-line1">VOTRE ÉCLAT,</span>
          <span className="slogan-line2">notre rituel</span>
        </motion.div>
      </div>
      <motion.a
        href="#contact"
        className="slogan-btn"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        RÉSERVEZ VOTRE SOIN
      </motion.a>
    </section>
  )
}