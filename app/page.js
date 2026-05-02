import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Atelier from '@/components/Atelier'
import Slogan from '@/components/Slogan'

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "L'Instant Glow",
  image: "/images-linstantglow/logocomplet.jpg",
  url: "https://www.planity.com/linstant-glow-01280-prevessin-moens",
  sameAs: [
    "https://www.instagram.com/linstantglow/",
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "36",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Prestations L'Instant Glow",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Extension de cils" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Browlift" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Soin visage" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Spray tan" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drainage lymphatique" } },
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
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Atelier />
      <Slogan />
    </main>
  )
}
