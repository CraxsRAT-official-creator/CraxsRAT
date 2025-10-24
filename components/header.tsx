import Link from "next/link"
import { LanguageSwitcher } from "./language-switcher"
import { Button } from "@/components/ui/button"
import type { Language } from "@/lib/i18n/config"
import Image from "next/image"

interface HeaderProps {
  lang: Language
  translations: any
}

export function Header({ lang, translations }: HeaderProps) {
  const baseUrl = lang === "en" ? "" : `/${lang}`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href={baseUrl || "/"} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center relative overflow-hidden">
              <Image src="/favicon-32x32.png" alt="Craxs RAT" width={24} height={24} className="object-contain" />
            </div>
            <span className="font-bold text-xl">Craxs RAT</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href={`${baseUrl}#features`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {translations.nav.features}
            </Link>
            <Link
              href={`${baseUrl}#pricing`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {translations.nav.pricing}
            </Link>
            <Link
              href={`${baseUrl}#videos`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {translations.nav.videos}
            </Link>
            <Link
              href={`${baseUrl}/contact`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {translations.nav.contact}
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <LanguageSwitcher currentLang={lang} />
          <Button size="sm" className="hidden sm:inline-flex bg-red-600 hover:bg-red-700">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}
