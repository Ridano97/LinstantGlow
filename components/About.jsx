'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import '../styles/About.css'

export default function About() {
  return (
    <section className="about" id="salon">
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
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="about-title">L'EXPÉRIENCE GLOW</h2>
        <p>Chez L'Instant Glow, la beauté n'est pas une routine, c'est un moment rien que pour vous. Niché au cœur de Prévessin-Moëns, notre institut réunit une équipe de passionnées, Siham, Sefora, Sana et Lilou, qui mettent leur expertise au service de votre éclat.</p>
        <p>De l'extension de cils au brow lift, du spray tan au drainage lymphatique, chaque soin est pensé avec précision et bienveillance.</p>
        <p>Ici, vous n'êtes pas un rendez-vous de plus : vous êtes notre priorité.</p>
      </motion.div>
    </section>
  )
}