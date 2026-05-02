'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import '../styles/Services.css'

const services = [
  { title: 'REGARD', img: '18.jpg' },
  { title: 'VISAGE', img: '21.jpg' },
  { title: 'CORPS\nBIEN-ÊTRE', img: '19.jpg' },
]

export default function Services() {
  return (
    <section className="services" id="prestations">
      <h2 className="services-title">NOS PRESTATIONS</h2>
      <div className="services-grid">
        {services.map((s, i) => (
          <motion.div
            key={i}
            className="services-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="services-card-img">
              <Image
                src={`/images-linstantglow/${s.img}`}
                alt={s.title}
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="services-card-overlay" />
              <div className="services-card-info">
                <span className="services-card-title">{s.title}</span>
                <span className="services-card-arrow">❯❯</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}