'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const hours = [
  ['Lundi', 'Fermé'],
  ['Mardi', '10:00 - 19:00'],
  ['Mercredi', '10:00 - 19:00'],
  ['Jeudi', '10:00 - 19:00'],
  ['Vendredi', '10:00 - 19:00'],
  ['Samedi', '10:00 - 19:00'],
  ['Dimanche', '10:00 - 19:00'],
]

function InstagramIcon() {
  return (
    <svg className="instagram-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" />
    </svg>
  )
}

export default function Slogan() {
  return (
    <footer className="slogan" id="contact">
      <div className="slogan-inner">
        <motion.div
          className="slogan-media"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Image
            src="/images-linstantglow/logocomplet.jpg"
            alt="Logo L'Instant Glow"
            fill
            sizes="360px"
            style={{ objectFit: 'cover' }}
          />
        </motion.div>

        <motion.div
          className="slogan-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <p className="section-kicker">Contact</p>
          <span className="slogan-line1">Votre éclat,</span>
          <span className="slogan-line2">notre rituel</span>
          <p className="slogan-copy">Réservez votre soin en ligne ou retrouvez l&apos;institut à Prévessin-Moëns pour un moment beauté précis, doux et lumineux.</p>
          <div className="slogan-details">
            <a href="https://www.planity.com/linstant-glow-01280-prevessin-moens" target="_blank" rel="noreferrer">Planity</a>
            <a className="instagram-button" href="https://www.instagram.com/linstantglow/" target="_blank" rel="noreferrer" aria-label="Instagram L'Instant Glow">
              <InstagramIcon />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="footer-glow-card"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.12, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="footer-glow-column">
          <h3>Adresse</h3>
          <p>107 Rte de Saint-Genis<br />01280 Prévessin-Moëns<br />France</p>
          <a href="https://www.google.com/maps/search/?api=1&query=L%27Instant%20Glow%20107%20Rte%20de%20Saint-Genis%2001280%20Pr%C3%A9vessin-Mo%C3%ABns" target="_blank" rel="noreferrer">Voir l&apos;itinéraire</a>
        </div>

        <div className="footer-glow-column">
          <h3>Contact</h3>
          <p><a href="tel:+33328554433">0328554433</a><br /><a href="mailto:contact@instantglow.fr">contact@instantglow.fr</a></p>
          <div className="footer-glow-socials">
            <a className="instagram-button" href="https://www.instagram.com/linstantglow/" target="_blank" rel="noreferrer" aria-label="Instagram L'Instant Glow">
              <InstagramIcon />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="https://www.planity.com/linstant-glow-01280-prevessin-moens" target="_blank" rel="noreferrer">Planity</a>
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
    </footer>
  )
}
