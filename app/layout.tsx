import type React from "react"
import type { Metadata } from "next"
import { Geist as Geist_Sans, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const geistSans = Geist_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Craxs RAT v8.0 - Advanced Remote Access Tool | Professional Cybersecurity Software",
  description:
    "Craxs RAT v8.0 is the most advanced remote access tool for cybersecurity professionals. Download Craxs software with powerful features, real-time monitoring, and global access capabilities. Always Getting Better.",
  keywords:
    "craxs, craxs rat, craxs rat v8.0, craxs software, remote access tool, cybersecurity, penetration testing, ethical hacking, craxs download, craxs rat download, Craxs RAT, android rat, remote monitoring",
  authors: [{ name: "Craxs Software Team" }],
  creator: "Craxs Software",
  publisher: "Craxs Software",
  robots: "index, follow",
  openGraph: {
    title: "Craxs RAT v8.0 - Advanced Remote Access Tool for Cybersecurity Professionals",
    description:
      "Professional remote access tool for cybersecurity experts. Craxs RAT v8.0 offers advanced monitoring, global access, and comprehensive security features. Always Getting Better.",
    url: "https://craxs-rat.vercel.app",
    siteName: "Craxs RAT - Professional Cybersecurity Software",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1703869479656-mrhJuZ1YI70UN3bzZAsmom9SpVu1vR.jpeg",
        width: 1200,
        height: 630,
        alt: "Craxs RAT v8.0 Dashboard Interface - Professional Remote Access Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Craxs RAT v8.0 - Advanced Remote Access Tool",
    description:
      "Professional remote access tool for cybersecurity experts with global monitoring capabilities. Always Getting Better.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1703869479656-mrhJuZ1YI70UN3bzZAsmom9SpVu1vR.jpeg",
    ],
    creator: "@craxssoftware",
  },
  verification: {
    google: "1WrMYzDKQGx7HUwnbHDM99Y2n7ZxjW2T_c_0Q3JOBiQ",
  },
  alternates: {
    canonical: "https://craxs-rat.vercel.app",
    languages: {
      "en-US": "https://craxs-rat.vercel.app",
      "pt-BR": "https://craxs-rat.vercel.app/br",
      "de-DE": "https://craxs-rat.vercel.app/de",
      "fr-FR": "https://craxs-rat.vercel.app/fr",
      "nl-NL": "https://craxs-rat.vercel.app/nl",
      "en-CA": "https://craxs-rat.vercel.app/ca",
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#dc2626" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="language" content="English" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="pt_BR" />
        <meta property="og:locale:alternate" content="de_DE" />
        <meta property="og:locale:alternate" content="fr_FR" />
        <meta property="og:locale:alternate" content="nl_NL" />
        <meta property="og:locale:alternate" content="en_CA" />
        {/* </CHANGE> */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Craxs RAT v8.0",
              applicationCategory: "SecurityApplication",
              operatingSystem: "Windows, Android",
              description:
                "Advanced remote access tool for cybersecurity professionals with global monitoring capabilities. Craxs RAT v8.0 - Always Getting Better.",
              url: "https://craxs-rat.vercel.app",
              inLanguage: ["en", "pt-BR", "de", "fr", "nl", "en-CA"],
              // </CHANGE>
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
                  url: "https://craxs-rat.vercel.app/payment/monthly",
                },
                {
                  "@type": "Offer",
                  name: "Yearly License",
                  price: "299",
                  priceCurrency: "USD",
                  availability: "https://schema.org/InStock",
                  url: "https://craxs-rat.vercel.app/payment/yearly",
                },
                {
                  "@type": "Offer",
                  name: "Lifetime License",
                  price: "999",
                  priceCurrency: "USD",
                  availability: "https://schema.org/InStock",
                  url: "https://craxs-rat.vercel.app/payment/lifetime",
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
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/68da21ca55881a19524f1f71/1j6a180o4';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </head>
      <body className={`font-sans ${geistSans.variable} ${geistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
