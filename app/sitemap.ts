import type { MetadataRoute } from "next"
import { languages } from "@/lib/i18n/config"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://craxs-rat.vercel.app"

  const routes = ["", "/about", "/privacy", "/disclaimer", "/contact"]

  const sitemap: MetadataRoute.Sitemap = []

  // Add default English routes
  routes.forEach((route) => {
    sitemap.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: route === "" ? 1 : 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}${route}`,
          "pt-BR": `${baseUrl}/br${route}`,
          de: `${baseUrl}/de${route}`,
          fr: `${baseUrl}/fr${route}`,
          nl: `${baseUrl}/nl${route}`,
          "en-CA": `${baseUrl}/ca${route}`,
        },
      },
    })
  })

  // Add localized routes
  Object.keys(languages).forEach((lang) => {
    if (lang !== "en") {
      routes.forEach((route) => {
        sitemap.push({
          url: `${baseUrl}/${lang}${route}`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.8,
        })
      })
    }
  })

  return sitemap
}
