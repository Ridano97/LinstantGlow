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
          alt="Salon L'Instant Glow"
          fill
          sizes="(max-width: 900px) 92vw, 38vw"
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
        <p className="section-kicker">Le salon</p>
        <h2 className="about-title">Une expérience beauté exclusive, pensée pour vous.</h2>
        <p>L’Instant Glow vous accueille dans un univers dédié à la beauté et au bien-être. Dans un cadre élégant et apaisant, notre équipe de passionnées vous accompagne à travers une large gamme de soins pensés pour sublimer chaque détail de votre beauté.</p>
        <p>Extensions et rehaussement de cils, brow lift, soins du visage, lifting coréen, massages, madérothérapie, drainage lymphatique, manucure, pédicure, bronzage UV et spray tan : ici, tout est réuni pour vous offrir une expérience beauté complète et exclusive.</p>
        <p>Plus qu’un institut, L’Instant Glow est une adresse où l’on vient prendre du temps pour soi, révéler son éclat et se sentir pleinement mise en valeur.</p>
        <p>It&apos;s time to glow!</p>
        <div className="about-metrics">
          <span><strong>3</strong> expertes beauté</span>
          <span><strong>360°</strong> regard, peau, corps</span>
          <span><strong>Glow</strong> naturel et durable</span>
        </div>
      </motion.div>
    </section>
  )
}
