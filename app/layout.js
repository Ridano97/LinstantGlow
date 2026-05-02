import { Geist } from 'next/font/google'

const geist = Geist({ subsets: ['latin'] })

export const metadata = {
  title: "L'Instant Glow — Institut Beauté Prévessin-Moëns",
  description: "Votre éclat, notre rituel. Institut de beauté à Prévessin-Moëns, Pays de Gex.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={geist.className}>
      <body>{children}</body>
    </html>
  )
}