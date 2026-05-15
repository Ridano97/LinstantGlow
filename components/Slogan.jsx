'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import useActiveScene from './useActiveScene'

const hours = [
  ['Lundi', 'Fermé'],
  ['Mardi', '10:00 - 19:00'],
  ['Mercredi', '10:00 - 19:00'],
  ['Jeudi', '10:00 - 19:00'],
  ['Vendredi', '10:00 - 19:00'],
  ['Samedi', '10:00 - 19:00'],
  ['Dimanche', '14:00 - 19:00'],
]

const googleReviews = [
  {
    author: 'Musso Annie',
    initial: 'M',
    source: 'Google',
    accent: 'linear-gradient(135deg, #b89dd6, #8a6fb3)',
    badge: '8 avis · 6 photos',
    date: 'il y a 2 mois',
    text:
      "Un vrai coup de cœur pour ce salon ! Les filles que j'ai rencontrées sont adorables : souriantes, accueillantes et très professionnelles. On se sent tout de suite à l'aise.",
  },
  {
    author: 'Idilia Benboudjema',
    initial: 'I',
    source: 'Google',
    accent: 'linear-gradient(135deg, #f0a981, #c97a52)',
    badge: 'Local Guide · 12 avis',
    date: 'il y a 6 mois',
    text:
      "J'ai découvert ce salon le lendemain de son ouverture, quelle belle surprise ! Des filles aussi belles qu'agréables, un accueil au top dans un lieu canon.",
  },
  {
    author: 'Pamart Pauline',
    initial: 'P',
    source: 'Google',
    accent: 'linear-gradient(135deg, #9d5fc0, #74449b)',
    badge: '9 avis · 4 photos',
    date: 'il y a 3 mois',
    text:
      "Je suis allée pour la première fois dans cet institut afin de faire mes ongles et j'ai été ravie de mon expérience. La décoration est soignée, réalisée avec beaucoup de goût, et on s'y sent directement à l'aise.",
  },
  {
    author: 'Soumia Kouider',
    initial: 'S',
    source: 'Google',
    accent: 'linear-gradient(135deg, #1d1d1d, #000)',
    badge: '4 avis',
    date: 'il y a 6 mois',
    text:
      "J'ai passé un excellent moment à l'Institut L'Instant Glow ! L'accueil est chaleureux, l'ambiance apaisante et le professionnalisme se ressent à chaque étape.",
  },
]

const REVIEWS_LINK =
  'https://www.google.com/search?q=L%27instant+Glow+Avis&stick=H4sIAAAAAAAAAONgkxI2NDYwMzc0MzA0MDExtDAyN7E038DI-IpR2Ec9M6-4JDGvRME9J79cwbEss3gRKzZRAOuVqXdGAAAA'

const revealGroup = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const revealItem = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.78, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

function GoogleLogo() {
  return (
    <svg className="google-logo" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.1 29.3 4 24 4 12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20c0-1.34-.14-2.65-.4-3.5Z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.55 4.8C14.7 16 19 13 24 13c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7Z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.95-2 13.5-5.2l-6.2-5.25C29.3 35 26.8 36 24 36c-5.2 0-9.6-3.3-11.3-8L6.2 32.7C9.6 39.3 16.2 44 24 44Z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.3 5.55l6.2 5.25C39.4 36.45 44 31 44 24c0-1.34-.14-2.65-.4-3.5Z" />
    </svg>
  )
}

function StarIcon({ size = 14 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path
        fill="#f5b740"
        d="M12 2.6 14.94 8.7l6.74.98-4.88 4.74 1.15 6.71L12 17.96l-6.04 3.17 1.15-6.71L2.32 9.68l6.74-.98L12 2.6Z"
      />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="instagram-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" />
    </svg>
  )
}

function TiktokIcon() {
  return (
    <svg className="tiktok-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.4 3v11.1a4.5 4.5 0 1 1-4.5-4.5c.4 0 .8.05 1.15.16v2.95a1.8 1.8 0 1 0 1.2 1.7V3h2.15Z" />
      <path d="M14.4 6.25c1.05 1.6 2.5 2.42 4.35 2.48v2.85c-1.7-.05-3.15-.58-4.35-1.6" />
    </svg>
  )
}

function SnapchatIcon() {
  return (
    <svg className="snapchat-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.35c2.85 0 4.6 2.25 4.6 5.05v2.05c0 .45.28.76.72.9l1.08.34c.34.1.56.34.56.68 0 .42-.34.68-.78.82l-1.18.38c.08.48.52 1.38 2.08 2.06.42.18.62.5.54.86-.08.38-.42.62-.9.66-.42.04-.78.12-1.08.26-.34.16-.52.4-.76.74-.28.4-.64.9-1.36.9-.36 0-.78-.1-1.3-.26-.44-.14-.8-.22-1.16-.22s-.74.08-1.18.22c-.52.16-.94.26-1.3.26-.72 0-1.08-.5-1.36-.9-.24-.34-.42-.58-.76-.74-.3-.14-.66-.22-1.08-.26-.48-.04-.82-.28-.9-.66-.08-.36.12-.68.54-.86 1.56-.68 2-1.58 2.08-2.06l-1.18-.38c-.44-.14-.78-.4-.78-.82 0-.34.22-.58.56-.68l1.08-.34c.44-.14.72-.45.72-.9V8.4c0-2.8 1.75-5.05 4.6-5.05Z" />
    </svg>
  )
}

export default function Slogan() {
  const [activeReview, setActiveReview] = useState(0)
  const isActive = useActiveScene(4)
  const visibleReviews = [
    googleReviews[activeReview],
    googleReviews[(activeReview + 1) % googleReviews.length],
  ]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveReview((currentReview) => (currentReview + 1) % googleReviews.length)
    }, 5200)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <footer className="slogan">
      <div className="slogan-inner">
        <motion.div
          className="slogan-text"
          variants={revealGroup}
          initial="hidden"
          animate={isActive ? 'show' : 'hidden'}
        >
          <motion.p className="section-kicker" variants={revealItem}>Contact</motion.p>

          <motion.span className="slogan-line1" variants={revealItem}>Votre éclat,</motion.span>
          <motion.span className="slogan-line2" variants={revealItem}>notre signature</motion.span>

          <motion.p className="slogan-copy" variants={revealItem}>
            Réservez votre soin en ligne ou retrouvez l&apos;institut à
            Prévessin-Moëns pour un moment beauté précis, doux et lumineux.
          </motion.p>

          <motion.div className="slogan-full-logo" variants={revealItem}>
            <Image
              src="/images-linstantglow/logocomplet.jpg"
              alt="L'Instant Glow"
              width={520}
              height={260}
            />
          </motion.div>
        </motion.div>

        <div className="slogan-right">
          <motion.div
            className="slogan-mobile-track"
            animate={{ x: '0%' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.aside
              className="slogan-reviews"
              variants={revealItem}
              custom={0.38}
              initial="hidden"
              animate={isActive ? 'show' : 'hidden'}
              aria-label="Avis Google L'Instant Glow"
            >
              <div className="slogan-reviews-header">
                <div className="slogan-reviews-brand">
                  <GoogleLogo />
                  <span>Avis Google</span>
                </div>

                <div className="slogan-reviews-rating">
                  <strong>4,9</strong>
                  <div className="slogan-reviews-stars" aria-hidden="true">
                    <StarIcon size={15} />
                    <StarIcon size={15} />
                    <StarIcon size={15} />
                    <StarIcon size={15} />
                    <StarIcon size={15} />
                  </div>
                  <span>35 avis vérifiés</span>
                </div>
              </div>

              <ul className="slogan-reviews-list">
                {visibleReviews.map((review, index) => (
                  <motion.li
                    className="slogan-review-card"
                    key={`${activeReview}-${review.author}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
                  >
                    <div className="slogan-review-head">
                      <span
                        className="slogan-review-avatar"
                        style={{ background: review.accent }}
                        aria-hidden="true"
                      >
                        {review.initial}
                      </span>

                      <div className="slogan-review-meta">
                        <strong>{review.author}</strong>
                        <small>{review.source} · {review.badge}</small>
                      </div>

                      <div className="slogan-review-stars" aria-hidden="true">
                        <StarIcon size={11} />
                        <StarIcon size={11} />
                        <StarIcon size={11} />
                        <StarIcon size={11} />
                        <StarIcon size={11} />
                      </div>
                    </div>

                    <p>{review.text}</p>
                    <span className="slogan-review-date">{review.date}</span>
                  </motion.li>
                ))}
              </ul>

              <a
                className="slogan-reviews-link"
                href={REVIEWS_LINK}
                target="_blank"
                rel="noreferrer"
              >
                Voir tous les avis sur Google
                <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
                  <path
                    d="M5 12h13m-5-5 5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </motion.aside>

            <motion.div
              className="footer-glow-card"
              variants={revealItem}
              custom={0.56}
              initial="hidden"
              animate={isActive ? 'show' : 'hidden'}
            >
              <div className="footer-glow-column">
                <h3>Adresse</h3>
                <p>
                  107 Rte de Saint-Genis
                  <br />
                  01280 Prévessin-Moëns
                  <br />
                  France
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=L%27Instant%20Glow%20107%20Rte%20de%20Saint-Genis%2001280%20Pr%C3%A9vessin-Mo%C3%ABns"
                  target="_blank"
                  rel="noreferrer"
                >
                  Voir l&apos;itinéraire
                </a>
              </div>

              <div className="footer-glow-column">
                <h3>Contact</h3>

                <p>
                  <a href="tel:+330450563649">04 50 56 36 49</a>
                  <br />
                  <a href="mailto:contact@instantglow.fr">
                    contact@instantglow.fr
                  </a>
                </p>

                <div className="footer-glow-socials">
                  <a
                    className="instagram-button"
                    href="https://www.instagram.com/linstantglow/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram L'Instant Glow"
                  >
                    <InstagramIcon />
                    <span className="sr-only">Instagram</span>
                  </a>

                  <a
                    className="tiktok-button"
                    href="https://www.tiktok.com/@linstantglow3"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="TikTok L'Instant Glow"
                  >
                    <TiktokIcon />
                    <span className="sr-only">TikTok</span>
                  </a>

                  <a
                    className="snapchat-button"
                    href="https://www.snapchat.com/add/Linstant.glow"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Snapchat L'Instant Glow"
                  >
                    <SnapchatIcon />
                    <span className="sr-only">Snapchat Linstant.glow</span>
                  </a>

                  <a
                    href="https://www.planity.com/linstant-glow-01280-prevessin-moens"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Planity
                  </a>
                </div>
              </div>

              <div className="footer-glow-column footer-glow-hours">
                <h3>Horaires</h3>

                {hours.map(([day, time]) => (
                  <div className="footer-hour-row" key={day}>
                    <span>{day}</span>
                    <strong>{time}</strong>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </footer>
  )
}
