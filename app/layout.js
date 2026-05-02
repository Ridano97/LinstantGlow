import './globals.css'

export const metadata = {
  metadataBase: new URL("https://instantglow.fr"),
  title: {
    default: "L'Instant Glow — Institut de beauté à Prévessin-Moëns",
    template: "%s | L'Instant Glow",
  },
  description: "Institut de beauté premium à Prévessin-Moëns : extension de cils, browlift, soins visage, spray tan, UV, drainage lymphatique et massages.",
  keywords: [
    "L'Instant Glow",
    "institut de beauté Prévessin-Moëns",
    "extension de cils Prévessin-Moëns",
    "browlift Pays de Gex",
    "soin visage Prévessin-Moëns",
    "spray tan Prévessin-Moëns",
    "drainage lymphatique Prévessin-Moëns",
    "salon UV Prévessin-Moëns",
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
    description: "Réservez vos soins cils, brows, visage, spray tan, UV et bien-être chez L'Instant Glow à Prévessin-Moëns.",
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
    description: "Institut beauté, cils, browlift, soins visage, spray tan, UV et massages à Prévessin-Moëns.",
    images: ["/images-linstantglow/logocomplet.jpg"],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
