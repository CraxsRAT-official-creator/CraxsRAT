import Link from "next/link"
import { getTranslations } from "@/lib/i18n/translations"
import { Check } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function AboutPage() {
  const t = getTranslations("en")

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-zinc-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-red-500">
            Craxs RAT
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="hover:text-red-500 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-red-500">
              {t.nav.about}
            </Link>
            <Link href="/privacy" className="hover:text-red-500 transition-colors">
              {t.nav.privacy}
            </Link>
            <Link href="/disclaimer" className="hover:text-red-500 transition-colors">
              {t.nav.disclaimer}
            </Link>
            <Link href="/contact" className="hover:text-red-500 transition-colors">
              {t.nav.contact}
            </Link>
            <LanguageSwitcher currentLang="en" />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.pages.about.title}</h1>
          <p className="text-xl text-zinc-400 mb-12">{t.pages.about.subtitle}</p>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-zinc-300 mb-12">{t.pages.about.content}</p>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.pages.about.mission.title}</h2>
              <p className="text-lg text-zinc-300">{t.pages.about.mission.content}</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">{t.pages.about.features.title}</h2>
              <ul className="space-y-4">
                {t.pages.about.features.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <span className="text-lg text-zinc-300">{item}</span>
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
          <p className="text-center text-zinc-500">{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  )
}
