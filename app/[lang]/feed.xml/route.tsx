export const dynamic = "force-static"

import { languages } from "@/lib/i18n/config"
import { translations } from "@/lib/i18n/translations"

const baseUrl = "https://craxs-rat.vercel.app"

export async function GET(request: Request, { params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const t = translations[lang as keyof typeof translations] || translations.en

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${t.hero.title}</title>
    <link>${baseUrl}/${lang}</link>
    <description>${t.hero.description}</description>
    <language>${lang}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/${lang}/feed.xml" rel="self" type="application/rss+xml"/>
    
    <item>
      <title>${t.hero.title}</title>
      <link>${baseUrl}/${lang}</link>
      <guid isPermaLink="true">${baseUrl}/${lang}</guid>
      <pubDate>${new Date("2025-01-01").toUTCString()}</pubDate>
      <description>${t.hero.description}</description>
      <content:encoded><![CDATA[
        <h2>${t.hero.title}</h2>
        <p>${t.hero.description}</p>
        <ul>
          <li>${t.features.items.security.title}: ${t.features.items.security.description}</li>
          <li>${t.features.items.global.title}: ${t.features.items.global.description}</li>
          <li>${t.features.items.monitoring.title}: ${t.features.items.monitoring.description}</li>
        </ul>
      ]]></content:encoded>
    </item>
    
    <item>
      <title>${t.nav.about}</title>
      <link>${baseUrl}/${lang}/about</link>
      <guid isPermaLink="true">${baseUrl}/${lang}/about</guid>
      <pubDate>${new Date("2025-01-01").toUTCString()}</pubDate>
      <description>${t.pages.about.subtitle}</description>
    </item>
    
    <item>
      <title>${t.nav.privacy}</title>
      <link>${baseUrl}/${lang}/privacy</link>
      <guid isPermaLink="true">${baseUrl}/${lang}/privacy</guid>
      <pubDate>${new Date("2025-01-01").toUTCString()}</pubDate>
      <description>${t.pages.privacy.title}</description>
    </item>
    
    <item>
      <title>${t.nav.contact}</title>
      <link>${baseUrl}/${lang}/contact</link>
      <guid isPermaLink="true">${baseUrl}/${lang}/contact</guid>
      <pubDate>${new Date("2025-01-01").toUTCString()}</pubDate>
      <description>${t.pages.contact.subtitle}</description>
    </item>
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}

export async function generateStaticParams() {
  return Object.keys(languages).map((lang) => ({
    lang,
  }))
}
