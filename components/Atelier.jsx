'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const gallery = [
  { src: '5.jpeg', label: 'Cabine soin' },
  { src: '11.jpeg', label: 'Glow skin' },
  { src: '12.jpeg', label: 'Détail rituel' },
  { src: '8.jpeg', label: 'Salon' },
]

export default function Atelier() {
  return (
    <section className="atelier">
      <div className="atelier-heading">
        <p className="section-kicker">Ambiance</p>
        <h2>Un lieu calme, lumineux, pensé pour ralentir.</h2>
      </div>

      <div className="atelier-showcase">
        <motion.div
          className="atelier-video"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <video
            src="/images-linstantglow/15.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Ambiance video L'Instant Glow"
          />
          <div className="atelier-video-caption">
            <span>Signature Glow</span>
            <strong>Des gestes précis, une lumière douce, un résultat qui reste chic.</strong>
          </div>
        </motion.div>

        <div className="atelier-gallery">
          {gallery.map((item, index) => (
            <motion.figure
              key={item.src}
              className="atelier-photo"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: index * 0.08, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <Image
                src={`/images-linstantglow/${item.src}`}
                alt={item.label}
                fill
                style={{ objectFit: 'cover' }}
              />
              <figcaption>{item.label}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
