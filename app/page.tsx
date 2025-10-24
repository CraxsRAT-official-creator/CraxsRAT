"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Shield, Globe, Monitor, Settings } from "lucide-react"
import Image from "next/image"
import { getTranslations } from "@/lib/i18n/translations"
import { LanguageSwitcher } from "@/components/language-switcher"
import Link from "next/link"

export default function HomePage() {
  const t = getTranslations("en")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-bold text-foreground">Craxs RAT</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                {t.nav.home}
              </a>
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                {t.nav.features}
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                {t.nav.pricing}
              </a>
              <a href="#videos" className="text-muted-foreground hover:text-foreground transition-colors">
                {t.nav.videos}
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                {t.nav.contact}
              </a>
              <LanguageSwitcher currentLang="en" />
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4 bg-red-600 text-white">
              {t.hero.badge}
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">{t.hero.title}</h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">{t.hero.description}</p>
          <div className="mb-12">
            <Button asChild className="bg-[#0088cc] hover:bg-[#0077b3] text-white px-8 py-6 text-lg">
              <a href="https://t.me/CRAXSRATDL" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                </svg>
                {t.hero.telegram}
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-red-600" />
              <span>{t.hero.features.security}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Globe className="w-4 h-4 text-red-600" />
              <span>{t.hero.features.global}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Monitor className="w-4 h-4 text-red-600" />
              <span>{t.hero.features.monitoring}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Craxs RAT Showcase Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.showcase.title}</h2>
            <p className="text-lg text-muted-foreground">{t.showcase.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/images/design-mode/1703869479656.jpeg"
                  alt="Craxs RAT Global Dashboard with World Map"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">{t.showcase.cards.global.title}</h3>
                <p className="text-sm text-muted-foreground">{t.showcase.cards.global.description}</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/images/design-mode/1.jpg.jpeg"
                  alt="Craxs RAT Dashboard Interface"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">{t.showcase.cards.dashboard.title}</h3>
                <p className="text-sm text-muted-foreground">{t.showcase.cards.dashboard.description}</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/images/design-mode/Picture5.png"
                  alt="Craxs RAT v8.0 Mobile Interface - Live Screen Monitoring and Control Panel"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">{t.showcase.cards.updates.title}</h3>
                <p className="text-sm text-muted-foreground">{t.showcase.cards.updates.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="videos" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.videos.title}</h2>
            <p className="text-lg text-muted-foreground">{t.videos.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-black">
                <video className="w-full h-full object-contain" autoPlay loop muted playsInline>
                  <source
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/videoplayback-COakpxJgeptj511F7wzRNhOrfETITK.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-sm mb-1">{t.videos.items.tutorial.title}</h3>
                <p className="text-xs text-muted-foreground">{t.videos.items.tutorial.description}</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-black">
                <video className="w-full h-full object-contain" autoPlay loop muted playsInline>
                  <source
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hoPWZgB5hjAVVl01-UHTSGVYFyTMdjxvKCBWJm6c8e9m5BR.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-sm mb-1">{t.videos.items.advanced.title}</h3>
                <p className="text-xs text-muted-foreground">{t.videos.items.advanced.description}</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-black">
                <video className="w-full h-full object-contain" autoPlay loop muted playsInline>
                  <source
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ssvid.net--CraxsRAT-Masterclass-2025-Learn-Dominate-in-30-Days_v720P-AXKQMNtonWzgZRfo753FwizmXkg7nV.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-sm mb-1">{t.videos.items.setup.title}</h3>
                <p className="text-xs text-muted-foreground">{t.videos.items.setup.description}</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-black">
                <video className="w-full h-full object-contain" autoPlay loop muted playsInline>
                  <source
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/videoplayback%20%281%29-rPsDV2HHKS19WCRx4asMkFaAdkUcWo.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-sm mb-1">Craxs RAT Masterclass</h3>
                <p className="text-xs text-muted-foreground">Complete 30-day masterclass guide</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.features.title}</h2>
            <p className="text-lg text-muted-foreground">{t.features.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{t.features.items.security.title}</h3>
              <p className="text-sm text-muted-foreground">{t.features.items.security.description}</p>
            </Card>

            <Card className="text-center p-6">
              <Globe className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{t.features.items.global.title}</h3>
              <p className="text-sm text-muted-foreground">{t.features.items.global.description}</p>
            </Card>

            <Card className="text-center p-6">
              <Monitor className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{t.features.items.monitoring.title}</h3>
              <p className="text-sm text-muted-foreground">{t.features.items.monitoring.description}</p>
            </Card>

            <Card className="text-center p-6">
              <Settings className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{t.features.items.config.title}</h3>
              <p className="text-sm text-muted-foreground">{t.features.items.config.description}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.pricing.title}</h2>
            <p className="text-lg text-muted-foreground">{t.pricing.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="relative">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{t.pricing.plans.monthly.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {t.pricing.plans.monthly.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{t.pricing.plans.monthly.price}</span>
                  <span className="text-muted-foreground">{t.pricing.plans.monthly.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {t.pricing.plans.monthly.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </CardContent>

              <CardFooter>
                <Button
                  asChild
                  className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
                  variant="outline"
                >
                  <Link href="/payment/monthly">{t.pricing.plans.monthly.cta}</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="relative border-red-600 shadow-lg scale-105">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-red-600 text-white">{t.pricing.badge}</Badge>
              </div>

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{t.pricing.plans.yearly.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {t.pricing.plans.yearly.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{t.pricing.plans.yearly.price}</span>
                  <span className="text-muted-foreground">{t.pricing.plans.yearly.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {t.pricing.plans.yearly.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </CardContent>

              <CardFooter>
                <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                  <Link href="/payment/yearly">{t.pricing.plans.yearly.cta}</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="relative">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{t.pricing.plans.lifetime.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {t.pricing.plans.lifetime.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{t.pricing.plans.lifetime.price}</span>
                  <span className="text-muted-foreground">{t.pricing.plans.lifetime.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {t.pricing.plans.lifetime.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </CardContent>

              <CardFooter>
                <Button
                  asChild
                  className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
                  variant="outline"
                >
                  <Link href="/payment/lifetime">{t.pricing.plans.lifetime.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">C</span>
              </div>
              <span className="text-lg font-semibold text-foreground">Craxs RAT</span>
            </div>
            <div className="mb-6">
              <Button
                asChild
                variant="outline"
                className="border-[#0088cc] text-[#0088cc] hover:bg-[#0088cc] hover:text-white bg-transparent"
              >
                <a href="https://t.me/CRAXSRATDL" target="_blank" rel="noopener noreferrer">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                  </svg>
                  {t.footer.telegram}
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                {t.footer.links.privacy}
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                {t.footer.links.about}
              </Link>
              <Link href="/disclaimer" className="text-muted-foreground hover:text-foreground transition-colors">
                {t.footer.links.disclaimer}
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                {t.footer.links.contact}
              </Link>
            </div>
            <p className="text-muted-foreground mb-4">{t.footer.copyright}</p>
            <p className="text-sm text-muted-foreground">{t.footer.disclaimer}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
