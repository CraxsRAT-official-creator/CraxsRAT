import Link from "next/link"
import { getTranslations } from "@/lib/i18n/translations"
import { languages } from "@/lib/i18n/config"
import { notFound } from "next/navigation"
import { LanguageSwitcher } from "@/components/language-switcher"

export async function generateStaticParams() {
  return Object.keys(languages).map((lang) => ({
    lang,
  }))
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params

  if (!(lang in languages)) {
    notFound()
  }

  const t = getTranslations(lang as keyof typeof languages)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-zinc-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href={`/${lang}`} className="text-2xl font-bold text-red-500">
            Craxs RAT
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href={`/${lang}`} className="hover:text-red-500 transition-colors">
              {t.nav.features}
            </Link>
            <Link href={`/${lang}`} className="hover:text-red-500 transition-colors">
              {t.nav.pricing}
            </Link>
            <Link href={`/${lang}/about`} className="text-red-500">
              {t.nav.about}
            </Link>
            <Link href={`/${lang}/contact`} className="hover:text-red-500 transition-colors">
              {t.nav.contact}
            </Link>
            <LanguageSwitcher currentLang={lang} />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.pages.about.title}</h1>
          <p className="text-xl text-zinc-400 mb-12">{t.pages.about.subtitle}</p>

          <div className="space-y-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8">
              <p className="text-lg leading-relaxed text-zinc-300">{t.pages.about.content}</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4 text-red-500">{t.pages.about.mission.title}</h2>
              <p className="text-lg leading-relaxed text-zinc-300">{t.pages.about.mission.content}</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-red-500">{t.pages.about.features.title}</h2>
              <ul className="space-y-3">
                {t.pages.about.features.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✓</span>
                    <span className="text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-400 text-sm">{t.footer.copyright}</p>
            <div className="flex gap-6">
              <Link href={`/${lang}/privacy`} className="text-zinc-400 hover:text-red-500 text-sm">
                {t.footer.links.privacy}
              </Link>
              <Link href={`/${lang}/about`} className="text-red-500 text-sm">
                {t.footer.links.about}
              </Link>
              <Link href={`/${lang}/disclaimer`} className="text-zinc-400 hover:text-red-500 text-sm">
                {t.footer.links.disclaimer}
              </Link>
              <Link href={`/${lang}/contact`} className="text-zinc-400 hover:text-red-500 text-sm">
                {t.footer.links.contact}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
