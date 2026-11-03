import './globals.css'
import { Analytics } from '@vercel/analytics/next'

export const metadata = {
  metadataBase: new URL("https://www.linstantglow.com"),
  title: {
    default: "L'Instant Glow — Institut de beauté à Prévessin-Moëns",
    template: "%s | L'Instant Glow",
  },
  description: "Institut de beauté premium à Prévessin-Moëns : extensions de cils, brow lift, soins visage, blanchiment dentaire, beauté des mains et pieds, spray tan, UV, drainage lymphatique et madérothérapie.",
  applicationName: "L'Instant Glow",
  category: "Institut de beauté",
  keywords: [
    "L'Instant Glow",
    "institut de beauté Prévessin-Moëns",
    "extension de cils Prévessin-Moëns",
    "brow lift Pays de Gex",
    "soin visage Prévessin-Moëns",
    "blanchiment dentaire Prévessin-Moëns",
    "beauté des mains Prévessin-Moëns",
    "beauté des pieds Prévessin-Moëns",
    "spray tan Prévessin-Moëns",
    "salon UV Prévessin-Moëns",
    "institut beauté Pays de Gex",
    "manucure Prévessin-Moëns",
    "spray tan Pays de Gex",
    "massage Prévessin-Moëns",
    "drainage lymphatique Prévessin-Moëns",
    "madérothérapie Prévessin-Moëns",
  ],
  authors: [{ name: "L'Instant Glow" }],
  creator: "L'Instant Glow",
  publisher: "L'Instant Glow",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "L'Instant Glow — Institut de beauté à Prévessin-Moëns",
    description: "Réservez vos soins des cils, brow lift, visage, blanchiment dentaire, beauté des mains et pieds, spray tan, UV et bien-être chez L'Instant Glow à Prévessin-Moëns.",
    url: "/",
    type: "website",
    locale: "fr_FR",
    siteName: "L'Instant Glow",
    images: [
      {
        url: "/images-linstantglow/logocomplet.jpg",
        width: 782,
        height: 782,
        alt: "Logo L'Instant Glow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "L'Instant Glow — Institut de beauté à Prévessin-Moëns",
    description: "Institut beauté, cils, brow lift, soins visage, blanchiment dentaire, manucure, beauté des pieds, spray tan, UV, drainage lymphatique et massages à Prévessin-Moëns.",
    images: ["/images-linstantglow/logocomplet.jpg"],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
