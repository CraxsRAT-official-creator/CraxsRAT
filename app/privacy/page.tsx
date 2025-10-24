import Link from "next/link"
import { getTranslations } from "@/lib/i18n/translations"

export default function PrivacyPage() {
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
            <Link href="/about" className="hover:text-red-500 transition-colors">
              {t.nav.about}
            </Link>
            <Link href="/privacy" className="text-red-500">
              {t.nav.privacy}
            </Link>
            <Link href="/disclaimer" className="hover:text-red-500 transition-colors">
              {t.nav.disclaimer}
            </Link>
            <Link href="/contact" className="hover:text-red-500 transition-colors">
              {t.nav.contact}
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.pages.privacy.title}</h1>
          <p className="text-zinc-400 mb-12">{t.pages.privacy.lastUpdated}</p>

          <div className="space-y-8">
            {t.pages.privacy.sections.map((section, index) => (
              <div key={index} className="border-l-4 border-red-500 pl-6">
                <h2 className="text-2xl font-bold mb-3">{section.title}</h2>
                <p className="text-lg text-zinc-300">{section.content}</p>
              </div>
            ))}
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
