'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

const gallery = [
  {
    label: 'UV',
    images: ['bleucabineuv.jpg', 'excellente800turbopoweruv.jpg', 'cremesolaire.jpg', 'cabineuvbleu.jpg', '11.jpeg'],
  },
  {
    label: 'Cabine soin',
    images: ['12.jpg', 'tablemassage.jpg', 'materielmassage.jpg', '10.jpeg'],
  },
  {
    label: 'Beauté des mains & pieds',
    images: ['tablemanucure.jpg', 'vernismuraleongle.jpg', '14.jpeg', '6.jpeg', '17.jpg'],
  },
  {
    label: 'Salon',
    images: ['canapeaccueil.jpg', 'devanturesalonnuit.jpg', 'cartedevisiteinstantglow.jpg', 'accueil.jpg', '4.jpeg'],
  },
]

function AtelierPhotoCarousel({ item }) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-16% 0px -16% 0px' })
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!inView || item.images.length < 2) return undefined

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % item.images.length)
    }, 3800)

    return () => window.clearInterval(timer)
  }, [inView, item.images.length])

  return (
    <figure ref={ref} className="atelier-photo">
      {item.images.map((image, index) => (
        <Image
          key={image}
          src={`/images-linstantglow/${image}`}
          alt={item.label}
          fill
          sizes="(max-width: 980px) 100vw, 24vw"
          className={`atelier-photo-img ${index === activeIndex ? 'is-active' : ''}`}
          style={{ objectFit: 'cover' }}
        />
      ))}
      {item.images.length > 1 && (
        <div className="carousel-dots atelier-carousel-dots" aria-hidden="true">
          {item.images.map((image, index) => (
            <span key={`${image}-dot`} className={index === activeIndex ? 'is-active' : ''} />
          ))}
        </div>
      )}
      <figcaption>{item.label}</figcaption>
    </figure>
  )
}

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
            <motion.div
              key={item.label}
              className="atelier-photo-motion"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: index * 0.08, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <AtelierPhotoCarousel item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
