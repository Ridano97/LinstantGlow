'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="about">
      <motion.div
        className="about-image"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <Image
          src="/images-linstantglow/10.jpeg"
          alt="L'Instant Glow salon"
          fill
          style={{ objectFit: 'cover' }}
        />
        <motion.div
          className="about-image-small"
          initial={{ opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Image
            src="/images-linstantglow/5.jpeg"
            alt="Detail soin L'Instant Glow"
            fill
            style={{ objectFit: 'cover' }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="section-kicker">Le salon</p>
        <h2 className="about-title">Une parenthèse beauté pensée comme un moment privé.</h2>
        <p>Chez L&apos;Instant Glow, la beauté n&apos;est pas une routine, c&apos;est un moment rien que pour vous. Niché au cœur de Prévessin-Moëns, notre institut réunit une équipe de passionnées, Siham, Sefora et Lilou, qui mettent leur expertise au service de votre éclat.</p>
        <p>De l&apos;extension de cils au brow lift, du spray tan, chaque soin est pensé avec précision et bienveillance.</p>
        <p>Ici, vous n&apos;êtes pas un rendez-vous de plus : vous êtes notre priorité.</p>
        <div className="about-metrics">
          <span><strong>3</strong> expertes beauté</span>
          <span><strong>360°</strong> regard, peau, corps</span>
          <span><strong>Glow</strong> naturel et durable</span>
        </div>
      </motion.div>
    </section>
  )
}
