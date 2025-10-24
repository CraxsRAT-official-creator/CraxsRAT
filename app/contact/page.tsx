import Link from "next/link"
import { getTranslations } from "@/lib/i18n/translations"
import { Send, Mail, Clock } from "lucide-react"

export default function ContactPage() {
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
            <Link href="/privacy" className="hover:text-red-500 transition-colors">
              {t.nav.privacy}
            </Link>
            <Link href="/disclaimer" className="hover:text-red-500 transition-colors">
              {t.nav.disclaimer}
            </Link>
            <Link href="/contact" className="text-red-500">
              {t.nav.contact}
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.pages.contact.title}</h1>
          <p className="text-xl text-zinc-400 mb-12">{t.pages.contact.subtitle}</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Telegram */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <Send className="w-12 h-12 text-red-500 mb-4" />
              <h2 className="text-2xl font-bold mb-2">{t.pages.contact.telegram.title}</h2>
              <p className="text-zinc-400 mb-4">{t.pages.contact.telegram.description}</p>
              <a
                href="https://t.me/CRAXSRATDL"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                {t.pages.contact.telegram.button}
              </a>
            </div>

            {/* Email */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <Mail className="w-12 h-12 text-red-500 mb-4" />
              <h2 className="text-2xl font-bold mb-2">{t.pages.contact.email.title}</h2>
              <p className="text-zinc-400 mb-4">{t.pages.contact.email.description}</p>
              <a
                href={`mailto:${t.pages.contact.email.address}`}
                className="text-red-500 hover:text-red-400 font-semibold"
              >
                {t.pages.contact.email.address}
              </a>
            </div>

            {/* Hours */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <Clock className="w-12 h-12 text-red-500 mb-4" />
              <h2 className="text-2xl font-bold mb-2">{t.pages.contact.hours.title}</h2>
              <p className="text-zinc-400">{t.pages.contact.hours.description}</p>
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
