import type React from "react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { languages, type Language } from "@/lib/i18n/config"

type Props = {
  params: { lang: Language }
  children: React.ReactNode
}

const languageMetadata: Record<
  Language,
  {
    title: string
    description: string
    locale: string
    langName: string
  }
> = {
  en: {
    title: "Craxs RAT v8.0 - Advanced Remote Access Tool | Professional Cybersecurity Software",
    description:
      "Craxs RAT v8.0 is the most advanced remote access tool for cybersecurity professionals. Download Craxs software with powerful features, real-time monitoring, and global access capabilities. Always Getting Better.",
    locale: "en_US",
    langName: "English",
  },
  br: {
    title: "Craxs RAT v8.0 - Ferramenta Avançada de Acesso Remoto | Software de Cibersegurança Profissional",
    description:
      "Craxs RAT v8.0 é a ferramenta de acesso remoto mais avançada para profissionais de cibersegurança. Baixe o software Craxs com recursos poderosos, monitoramento em tempo real e capacidades de acesso global. Sempre Melhorando.",
    locale: "pt_BR",
    langName: "Português (Brasil)",
  },
  de: {
    title: "Craxs RAT v8.0 - Fortschrittliches Remote-Access-Tool | Professionelle Cybersicherheitssoftware",
    description:
      "Craxs RAT v8.0 ist das fortschrittlichste Remote-Access-Tool für Cybersicherheitsexperten. Laden Sie Craxs-Software mit leistungsstarken Funktionen, Echtzeitüberwachung und globalen Zugriffsmöglichkeiten herunter. Immer Besser.",
    locale: "de_DE",
    langName: "Deutsch",
  },
  fr: {
    title: "Craxs RAT v8.0 - Outil d'Accès à Distance Avancé | Logiciel de Cybersécurité Professionnel",
    description:
      "Craxs RAT v8.0 est l'outil d'accès à distance le plus avancé pour les professionnels de la cybersécurité. Téléchargez le logiciel Craxs avec des fonctionnalités puissantes, une surveillance en temps réel et des capacités d'accès mondial. Toujours Mieux.",
    locale: "fr_FR",
    langName: "Français",
  },
  nl: {
    title: "Craxs RAT v8.0 - Geavanceerde Remote Access Tool | Professionele Cyberbeveiligingssoftware",
    description:
      "Craxs RAT v8.0 is de meest geavanceerde remote access tool voor cyberbeveiligingsexperts. Download Craxs-software met krachtige functies, realtime monitoring en wereldwijde toegangsmogelijkheden. Altijd Beter.",
    locale: "nl_NL",
    langName: "Nederlands",
  },
  ca: {
    title: "Craxs RAT v8.0 - Eina d'Accés Remot Avançada | Programari de Ciberseguretat Professional",
    description:
      "Craxs RAT v8.0 és l'eina d'accés remot més avançada per a professionals de la ciberseguretat. Descarrega el programari Craxs amb funcions potents, supervisió en temps real i capacitats d'accés global. Sempre Millorant.",
    locale: "en_CA",
    langName: "Canadian English",
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = params

  if (!(lang in languages)) {
    return {}
  }

  const meta = languageMetadata[lang]

  return {
    title: meta.title,
    description: meta.description,
    keywords:
      "craxs, craxs rat, craxs rat v8.0, craxs software, remote access tool, cybersecurity, penetration testing, ethical hacking, craxs download, craxs rat download, Craxs RAT, android rat, remote monitoring",
    authors: [{ name: "Craxs Software Team" }],
    creator: "Craxs Software",
    publisher: "Craxs Software",
    robots: "index, follow",
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://craxs-rat.vercel.app/${lang}`,
      siteName: "Craxs RAT - Professional Cybersecurity Software",
      images: [
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1703869479656-mrhJuZ1YI70UN3bzZAsmom9SpVu1vR.jpeg",
          width: 1200,
          height: 630,
          alt: `Craxs RAT v8.0 Dashboard Interface - ${meta.langName}`,
        },
      ],
      locale: meta.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1703869479656-mrhJuZ1YI70UN3bzZAsmom9SpVu1vR.jpeg",
      ],
      creator: "@craxssoftware",
    },
    alternates: {
      canonical: `https://craxs-rat.vercel.app/${lang}`,
      languages: {
        "en-US": "https://craxs-rat.vercel.app",
        "pt-BR": "https://craxs-rat.vercel.app/br",
        "de-DE": "https://craxs-rat.vercel.app/de",
        "fr-FR": "https://craxs-rat.vercel.app/fr",
        "nl-NL": "https://craxs-rat.vercel.app/nl",
        "en-CA": "https://craxs-rat.vercel.app/ca",
      },
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(languages).map((lang) => ({
    lang,
  }))
}

export default function LangLayout({ children, params }: Props) {
  const { lang } = params

  if (!(lang in languages)) {
    notFound()
  }

  const meta = languageMetadata[lang]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Craxs RAT v8.0",
            applicationCategory: "SecurityApplication",
            operatingSystem: "Windows, Android",
            description: meta.description,
            url: `https://craxs-rat.vercel.app/${lang}`,
            inLanguage: meta.locale.replace("_", "-"),
            author: {
              "@type": "Organization",
              name: "Craxs Software",
              url: "https://craxs-rat.vercel.app",
            },
            offers: [
              {
                "@type": "Offer",
                name: "Monthly License",
                price: "99",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                url: `https://craxs-rat.vercel.app/${lang}/payment/monthly`,
              },
              {
                "@type": "Offer",
                name: "Yearly License",
                price: "299",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                url: `https://craxs-rat.vercel.app/${lang}/payment/yearly`,
              },
              {
                "@type": "Offer",
                name: "Lifetime License",
                price: "999",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                url: `https://craxs-rat.vercel.app/${lang}/payment/lifetime`,
              },
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              ratingCount: "1250",
            },
          }),
        }}
      />
      {children}
    </>
  )
}
