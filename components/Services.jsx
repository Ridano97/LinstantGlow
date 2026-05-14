'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence, useInView } from 'framer-motion'

function AutoImageCarousel({ images, alt, sizes, isActive = true }) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-18% 0px -18% 0px' })
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!isActive || !inView || images.length < 2) return undefined

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length)
    }, 3600)

    return () => window.clearInterval(timer)
  }, [images.length, inView, isActive])

  return (
    <div ref={ref} className="auto-image-carousel">
      {images.map((image, index) => (
        <Image
          key={image}
          src={`/images-linstantglow/${image}`}
          alt={alt}
          fill
          sizes={sizes}
          className={`auto-image-carousel-img ${index === activeIndex ? 'is-active' : ''}`}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      ))}
      {images.length > 1 && (
        <div className="carousel-dots" aria-hidden="true">
          {images.map((image, index) => (
            <span key={`${image}-dot`} className={index === activeIndex ? 'is-active' : ''} />
          ))}
        </div>
      )}
    </div>
  )
}

function ServiceImage({ service, sizes }) {
  if (service.images.length > 1) {
    return <AutoImageCarousel images={service.images} alt={service.title} sizes={sizes} />
  }

  return (
    <Image
      src={`/images-linstantglow/${service.images[0]}`}
      alt={service.title}
      fill
      sizes={sizes}
      style={{ objectFit: 'cover', objectPosition: 'center' }}
    />
  )
}

const services = [
  {
    title: 'Regard couture',
    img: '18.jpg',
    text: 'Extensions de cils, rehaussement, brow lift et restructuration pour ouvrir le regard avec finesse.',
    images: ['18.jpg'],
    sections: [
      {
        title: 'Extensions de cils',
        rows: [
          ['Volume russe', '85€'],
          ['Remplissage volume russe', '65€'],
          ['Mixte', '75€'],
          ['Remplissage mixte', '60€'],
          ['Fox eyes', '90€'],
        ],
      },
      {
        title: 'Brow lift',
        rows: [
          ['Brow lift simple', '60€'],
          ['Brow lift teinture + restructuration', '65€'],
          ['Brow lift teinture + restructuration + épilation', '75€'],
        ],
      },
      {
        title: 'Rehaussement de cils',
        rows: [
          ['Rehaussement simple', '50€'],
          ['Rehaussement + teinture', '60€'],
          ['Teinture sourcils', '15€'],
        ],
      },
    ],
  },
  {
    title: 'Peau lumineuse',
    img: '21.jpg',
    text: 'Soins visage, un sourire lumineux, glow skin et protocoles ciblés pour une peau nette, souple et éclatante.',
    images: ['21.jpg', '30-optimized.jpg'],
    sections: [
      {
        title: 'Soin visage',
        rows: [
          ['Nettoyage de la peau complet', '60€'],
          ['Soin hydratant éclat', '45€'],
          ['Soin purifiant anti-imperfections', '52€'],
          ['Soin peau sensible', '42€'],
          ['Lifting coréen fil de soie & collagène', '70€'],
        ],
      },
      {
        title: 'Blanchiment dentaire',
        rows: [
          ['1 séance extra white', '145€'],
          ['2 séances extra white', '250€'],
        ],
      },
      {
        title: 'Épilation visage',
        rows: [
          ['Sourcils', '20€'],
          ['Teinture sourcils', '15€'],
          ['Lèvres / menton', '15€'],
          ['Visage complet', '32€'],
        ],
      },
    ],
  },
  {
    title: 'Corps & bien-être',
    img: '19.jpg',
    text: 'Massages, drainage lymphatique, madérothérapie, spray tan et soins bien-être pour une sensation légère, sculptée et solaire.',
    images: ['19.jpg'],
    sections: [
      {
        title: 'Corps & soleil',
        rows: [
          ['Massage corps relaxant', '90€'],
          ['Massage du dos', '45€'],
          ['Massage tonifiant', '95€'],
          ['Massage tête plus haut du corps', '70€'],
        ],
      },
      {
        title: 'Spray tan',
        rows: [
          ['Full body visage et corps', '50€'],
          ['Corps', '40€'],
          ['Visage + décolleté', '35€'],
          ['Jambes', '30€'],
        ],
      },
      {
        title: 'UV',
        rows: [
          ['10 minutes', '10€'],
          ['15 minutes', '15€'],
          ['20 minutes', '20€'],
          ['25 minutes', '25€'],
          ['30 minutes', '30€'],
        ],
      },
      {
        title: 'Drainage lymphatique',
        rows: [
          ['Corps complet', '120€'],
          ['Corps complet - 6 séances', '600€'],
          ['Jambes complètes', '70€'],
          ['Ventre / dos', '70€'],
          ['Visage', '50€'],
        ],
      },
      {
        title: 'Madérothérapie Body Sculpt',
        rows: [
          ['Corps complet', '120€'],
          ['Corps complet - 6 séances', '600€'],
          ['Jambes complètes', '70€'],
          ['Ventre / dos', '70€'],
          ['Visage', '50€'],
        ],
      },
    ],
  },
  {
    title: 'Beauté mains & pieds',
    img: '31-optimized.jpg',
    text: 'Manucure, semi-permanent, gel et beauté des pieds pour une finition nette et soignée.',
    images: ['31-optimized.jpg'],
    sections: [
      {
        title: 'Beauté des mains',
        rows: [
          ['Manucure', '35€'],
          ['Semi-permanent', '50€'],
          ['Dépose semi-permanent', '20€'],
          ['Pose gel sur ongles naturels', '70€'],
          ['Pose capsule gel', '75€'],
        ],
      },
      {
        title: 'Beauté des pieds',
        rows: [
          ['Semi-permanent pieds', '50€'],
          ['Dépose semi-permanent pieds', '20€'],
          ['Mise en beauté des pieds PédiSpa', '55€'],
          ['Mise en beauté des pieds + semi-permanent', '85€'],
          ['Rallongement grand orteil gel pied', '5€'],
          ['Capsule gel pied', '65€'],
          ['Dépose capsule gel pied', '10€'],
          ['Vernis personnel', '15€'],
        ],
      },
    ],
  },
]

export default function Services() {
  const [activeService, setActiveService] = useState(null)
  const canUsePortal = typeof document !== 'undefined'

  const openService = (service) => setActiveService(service)

  const closeService = () => setActiveService(null)

  useEffect(() => {
    if (!activeService) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeService()
    }

    document.body.classList.add('service-modal-open')
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('service-modal-open')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeService])

  const serviceModal = (
    <AnimatePresence>
      {activeService && (
        <motion.div
          className="service-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeService}
        >
          <motion.div
            className="service-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`Prestations ${activeService.title}`}
            initial={{ opacity: 0, y: 36, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 36, scale: 0.98 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            onClick={(event) => event.stopPropagation()}
          >
            <button className="service-modal-close" type="button" onClick={closeService} aria-label="Fermer les prestations">
              <span aria-hidden="true">×</span>
            </button>

            <div className="service-modal-media">
              <ServiceImage service={activeService} sizes="(max-width: 900px) 100vw, 42vw" />
              <div className="service-modal-media-overlay" />
            </div>

            <div className="service-modal-prices">
              <h3>{activeService.title}</h3>
              {activeService.sections.map((section) => (
                <div className="service-price-section" key={section.title}>
                  <h4>{section.title}</h4>
                  <div className="service-price-list">
                    {section.rows.map(([name, price]) => (
                      <div className="service-price-row" key={name}>
                        <span>{name}</span>
                        <strong>{price}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <a className="service-modal-planity" href="https://www.planity.com/linstant-glow-01280-prevessin-moens" target="_blank" rel="noreferrer">Réserver sur Planity</a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return (
    <section className="services">
      <div className="services-heading">
        <div>
          <p className="section-kicker">Prestations</p>
          <h2 className="services-title">Des soins précis, un fini naturellement luxueux.</h2>
        </div>
        <p className="services-intro">Chaque soin est choisi selon votre peau, votre rythme et l&apos;effet recherché : subtil, intense ou solaire.</p>
      </div>

      <div className="services-grid">
        {services.map((s, i) => (
          <motion.button
            type="button"
            key={s.title}
            className="services-card"
            onClick={() => openService(s)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="services-card-img">
              <ServiceImage service={s} sizes="(max-width: 700px) 100vw, (max-width: 1180px) 50vw, 25vw" />
              <div className="services-card-overlay" />
              <div className="services-card-info">
                <span className="services-card-title">{s.title}</span>
                <span className="services-card-text">{s.text}</span>
                <span className="services-card-arrow">Voir les soins</span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {canUsePortal ? createPortal(serviceModal, document.body) : null}
    </section>
  )
}
