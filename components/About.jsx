'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const imageReveal = {
  hidden: { opacity: 0, x: -36, scale: 0.985 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

const contentReveal = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.12,
    },
  },
}

const itemReveal = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function About() {
  return (
    <section className="about">
      <motion.div
        className="about-image"
        variants={imageReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.38 }}
      >
        <Image
          src="/images-linstantglow/10.jpeg"
          alt="Salon L'Instant Glow"
          fill
          sizes="(max-width: 900px) 92vw, 38vw"
          style={{ objectFit: 'cover' }}
        />
      </motion.div>

      <motion.div
        className="about-content"
        variants={contentReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.42 }}
      >
        <motion.p className="section-kicker" variants={itemReveal}>Le salon</motion.p>
        <motion.h2 className="about-title" variants={itemReveal}>Une expérience beauté exclusive, pensée pour vous.</motion.h2>
        <motion.p variants={itemReveal}>L’Instant Glow vous accueille dans un univers dédié à la beauté et au bien-être. Dans un cadre élégant et apaisant, notre équipe de passionnées vous accompagne à travers une large gamme de soins pensés pour sublimer chaque détail de votre beauté.</motion.p>
        <motion.p variants={itemReveal}>Extensions et rehaussement de cils, brow lift, soins du visage, lifting coréen, massages, madérothérapie, drainage lymphatique, manucure, pédicure, bronzage UV et spray tan : ici, tout est réuni pour vous offrir une expérience beauté complète et exclusive.</motion.p>
        <motion.p variants={itemReveal}>Plus qu’un institut, L’Instant Glow est une adresse où l’on vient prendre du temps pour soi, révéler son éclat et se sentir pleinement mise en valeur.</motion.p>
        <motion.p variants={itemReveal}>It&apos;s time to glow!</motion.p>
        <motion.div className="about-metrics" variants={contentReveal}>
          <motion.span variants={itemReveal}><strong>3</strong> expertes beauté</motion.span>
          <motion.span variants={itemReveal}><strong>360°</strong> regard, peau, corps</motion.span>
          <motion.span variants={itemReveal}><strong>Glow</strong> naturel et durable</motion.span>
        </motion.div>
      </motion.div>
    </section>
  )
}
