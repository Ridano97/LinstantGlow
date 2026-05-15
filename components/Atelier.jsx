'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const reels = [
  {
    label: '',
    src: 'https://iframe.videodelivery.net/8fe8e4e3edf206e9b87a9ae3dd1143c7?autoplay=true&muted=true&loop=true&controls=false&playsinline=true&preload=auto',
  },
  {
    label: '',
    src: 'https://iframe.videodelivery.net/4afcba2681602c9a840cad1e6be851fe?autoplay=true&muted=true&loop=true&controls=false&playsinline=true&preload=auto',
  },
  {
    label: '',
    src: 'https://iframe.videodelivery.net/c270bf514ac626480422baa9bd4486bd?autoplay=true&muted=true&loop=true&controls=false&playsinline=true&preload=auto',
  },
]

const atelierPhotos = [
  { src: 'devanturesalonnuit.jpg', label: 'Devanture de nuit', shape: 'wide' },
  { src: 'canapeaccueil.jpg', label: "Salon d'accueil", shape: 'tall' },
  { src: 'cartedevisiteinstantglow.jpg', label: 'Carte cadeau Instant Glow', shape: 'wide' },
  { src: '6.jpeg', label: 'Espace beauté', shape: 'wide' },
  { src: '33-optimized.jpg', label: 'Nail art signature', shape: 'tall' },
  { src: '35-optimized.jpg', label: 'Noir glossy', shape: 'tall' },
  { src: 'cabineuvbleu.jpg', label: 'Cabine UV bleue', shape: 'wide' },
  { src: '17.jpg', label: 'Ongles rose', shape: 'wide' },
  { src: '11.jpeg', label: 'Soins solaires', shape: 'tall' },
  { src: 'excellente800turbopoweruv.jpg', label: 'Excellence 800', shape: 'wide' },
  { src: 'cremesolaire.jpg', label: 'Soin solaire', shape: 'tall' },
  { src: 'madero.jpg', label: 'Madérothérapie', shape: 'tall' },
  { src: 'madero2.jpg', label: 'Drainage lymphatique', shape: 'tall' },
]

const photoColumns = [
  [atelierPhotos[0], atelierPhotos[4], atelierPhotos[7], atelierPhotos[11], atelierPhotos[10]],
  [atelierPhotos[1], atelierPhotos[5], atelierPhotos[8], atelierPhotos[12]],
  [atelierPhotos[2], atelierPhotos[3], atelierPhotos[6], atelierPhotos[9]],
]

export default function Atelier() {
  const [activeReel, setActiveReel] = useState(0)
  const [activePage, setActivePage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [canLoadReels, setCanLoadReels] = useState(false)
  const [videoRefreshKey, setVideoRefreshKey] = useState(0)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 620px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener?.('change', update)
    return () => mq.removeEventListener?.('change', update)
  }, [])

  useEffect(() => {
    const loadReels = () => setCanLoadReels(true)
    const mobileViewport = window.matchMedia('(max-width: 900px)').matches

    const handleSceneProgress = (event) => {
      if (typeof event.detail === 'number' && event.detail >= 0.74) {
        loadReels()
        setVideoRefreshKey((key) => key + 1)
      }
    }
    const fallbackTimer = mobileViewport ? null : window.setTimeout(loadReels, 2500)

    window.addEventListener('luxurySceneProgress', handleSceneProgress)

    return () => {
      if (fallbackTimer) window.clearTimeout(fallbackTimer)
      window.removeEventListener('luxurySceneProgress', handleSceneProgress)
    }
  }, [])

  const goToReel = (index) => {
    setActiveReel((index + reels.length) % reels.length)
  }

  const goToPage = (index) => {
    setActivePage(Math.min(Math.max(index, 0), 1))
  }

  const handleSwipe = (_event, info) => {
    if (info.offset.x < -56) goToReel(activeReel + 1)
    if (info.offset.x > 56) goToReel(activeReel - 1)
  }

  const handlePageSwipe = (_event, info) => {
    if (info.offset.x < -64) goToPage(activePage + 1)
    if (info.offset.x > 64) goToPage(activePage - 1)
  }

  return (
    <section className="atelier">
      <div className="atelier-layout">
        <motion.div
          className="atelier-mobile-track"
          animate={{ x: isMobile ? `-${activePage * 50}%` : '0%' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          drag={isMobile ? 'x' : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.16}
          onDragEnd={handlePageSwipe}
        >
          <div className="atelier-left">
            <div className="atelier-heading">
              <p className="section-kicker">Ambiance</p>
              <h2>Un lieu calme, lumineux, pensé pour ralentir.</h2>
            </div>

            <div className="atelier-phone-carousel" aria-label="Vidéos de l'atelier L'Instant Glow">
              <div className="atelier-phone">
                <div className="atelier-phone-speaker" aria-hidden="true" />

                <motion.div
                  className="atelier-reels-track"
                  animate={{ x: `-${activeReel * 100}%` }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.13}
                  onDragEnd={handleSwipe}
                >
                  {reels.map((reel, index) => (
                    <figure
                      key={reel.src}
                      className="atelier-reel"
                      aria-hidden={index !== activeReel}
                    >
                      {canLoadReels ? (
                        <iframe
                          key={`${reel.src}-${index === activeReel ? videoRefreshKey : 'idle'}`}
                          src={reel.src}
                          title={`Vidéo atelier ${index + 1}`}
                          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                          allowFullScreen
                          loading={index === activeReel ? 'eager' : 'lazy'}
                          style={{
                            width: '100%',
                            height: '100%',
                            border: 0,
                            display: 'block',
                            pointerEvents: 'none',
                          }}
                        />
                      ) : (
                        <div className="atelier-reel-poster" aria-hidden="true" />
                      )}

                      <figcaption>
                        <span>Reels</span>
                        <strong>{reel.label}</strong>
                      </figcaption>
                    </figure>
                  ))}
                </motion.div>
              </div>

              <div className="atelier-reel-dots" aria-label="Choisir une vidéo">
                {reels.map((reel, index) => (
                  <button
                    key={`${reel.src}-dot`}
                    type="button"
                    className={index === activeReel ? 'is-active' : ''}
                    onClick={() => goToReel(index)}
                    aria-label={`Voir la vidéo ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="atelier-right">
            <div className="atelier-gallery-copy">
              <span>Galerie</span>
            </div>

            <div className="atelier-photo-river" aria-label="Photos de l'institut L'Instant Glow">
              {photoColumns.map((column, columnIndex) => (
                <div className="atelier-photo-column" key={`column-${columnIndex}`}>
                  <div className="atelier-photo-track">
                    {[...column, ...column].map((photo, index) => (
                      <figure className={`atelier-photo-card is-${photo.shape}`} key={`${photo.src}-${index}`}>
                        <Image
                          src={`/images-linstantglow/${photo.src}`}
                          alt={photo.label}
                          fill
                          sizes="(max-width: 980px) 31vw, 18vw"
                          className="atelier-photo-img"
                        />
                      </figure>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {isMobile && (
          <div
            className={`atelier-swipe-hint ${activePage > 0 ? 'is-hidden' : ''}`}
            aria-hidden="true"
          >
            <span>Glissez</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M5 12h14m-5-5 5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>

      <div className="atelier-mobile-dots" aria-label="Pages de la section atelier">
        <button
          type="button"
          className={activePage === 0 ? 'is-active' : ''}
          onClick={() => goToPage(0)}
          aria-label="Voir la vidéo"
        />
        <button
          type="button"
          className={activePage === 1 ? 'is-active' : ''}
          onClick={() => goToPage(1)}
          aria-label="Voir la galerie"
        />
      </div>
    </section>
  )
}
