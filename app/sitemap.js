const siteUrl = 'https://www.linstantglow.com'

export default function sitemap() {
  return [
    {
      url: siteUrl,
      lastModified: new Date('2026-05-10'),
      changeFrequency: 'monthly',
      priority: 1,
      images: [
        `${siteUrl}/images-linstantglow/logocomplet.jpg`,
        `${siteUrl}/images-linstantglow/devanturesalonnuit.jpg`,
        `${siteUrl}/images-linstantglow/canapeaccueil.jpg`,
        `${siteUrl}/images-linstantglow/cabineuvbleu.jpg`,
      ],
    },
  ]
}
