"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import type { Language } from "@/lib/i18n/config"

interface MobileMenuProps {
  lang: Language
  translations: {
    home: string
    features: string
    pricing: string
    videos: string
    contact: string
  }
}

export function MobileMenu({ lang, translations }: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          <Link
            href={`/${lang}`}
            className="text-lg font-medium hover:text-red-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            {translations.home}
          </Link>
          <a
            href="#features"
            className="text-lg font-medium hover:text-red-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            {translations.features}
          </a>
          <a
            href="#pricing"
            className="text-lg font-medium hover:text-red-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            {translations.pricing}
          </a>
          <a
            href="#videos"
            className="text-lg font-medium hover:text-red-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            {translations.videos}
          </a>
          <a
            href="#contact"
            className="text-lg font-medium hover:text-red-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            {translations.contact}
          </a>
          <div className="pt-4 border-t">
            <LanguageSwitcher currentLang={lang} />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
