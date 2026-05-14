import Navbar from '@/components/Navbar'
import ScrollProgress from '@/components/ScrollProgress'
import LuxuryScroll from '@/components/LuxuryScroll'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Atelier from '@/components/Atelier'
import Slogan from '@/components/Slogan'

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "L'Instant Glow",
  image: [
    "https://www.linstantglow.com/images-linstantglow/logocomplet.jpg",
    "https://www.linstantglow.com/images-linstantglow/devanturesalonnuit.jpg",
    "https://www.linstantglow.com/images-linstantglow/canapeaccueil.jpg",
  ],
  logo: "https://www.linstantglow.com/images-linstantglow/logocomplet.jpg",
  url: "https://www.linstantglow.com",
  hasMap: "https://www.google.com/maps/search/?api=1&query=L%27Instant%20Glow%20107%20Rte%20de%20Saint-Genis%2001280%20Pr%C3%A9vessin-Mo%C3%ABns",
  sameAs: [
    "https://www.instagram.com/linstantglow/",
    "https://www.tiktok.com/@linstantglow3",
    "https://www.snapchat.com/add/Linstant.glow",
    "https://www.planity.com/linstant-glow-01280-prevessin-moens",
  ],
  telephone: "+33328554433",
  email: "contact@instantglow.fr",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "107 Rte de Saint-Genis",
    postalCode: "01280",
    addressLocality: "Prévessin-Moëns",
    addressCountry: "FR",
  },
  areaServed: ["Prévessin-Moëns", "Pays de Gex", "Ferney-Voltaire", "Saint-Genis-Pouilly", "Genève"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.planity.com/linstant-glow-01280-prevessin-moens",
      inLanguage: "fr-FR",
      actionPlatform: [
        "https://schema.org/DesktopWebPlatform",
        "https://schema.org/MobileWebPlatform",
      ],
    },
    result: {
      "@type": "Reservation",
      name: "Réservation L'Instant Glow",
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Prestations L'Instant Glow",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Extensions de cils" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brow lift" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Soin visage" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Blanchiment dentaire" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Beauté des mains" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Beauté des pieds" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drainage lymphatique" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Madérothérapie Body Sculpt" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Spray tan" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Salon UV" } },
    ],
  },
}

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <ScrollProgress />
      <LuxuryScroll />
      <Navbar />
      <div className="scene-scroll">
        <div className="scene-stage">
          <span id="experience" className="scene-anchor scene-anchor-0" aria-hidden="true" />
          <div className="scene-panel scene-panel-hero"><Hero /></div>
          <span id="salon" className="scene-anchor scene-anchor-1" aria-hidden="true" />
          <div className="scene-panel scene-panel-about"><About /></div>
          <span id="prestations" className="scene-anchor scene-anchor-2" aria-hidden="true" />
          <div className="scene-panel scene-panel-services"><Services /></div>
          <span id="atelier" className="scene-anchor scene-anchor-3" aria-hidden="true" />
          <div className="scene-panel scene-panel-atelier"><Atelier /></div>
          <span id="contact" className="scene-anchor scene-anchor-4" aria-hidden="true" />
          <div className="scene-panel scene-panel-slogan"><Slogan /></div>
        </div>
      </div>
    </main>
  )
}
