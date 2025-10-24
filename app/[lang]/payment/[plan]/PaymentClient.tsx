"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Check, Copy, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { languages, type Language } from "@/lib/i18n/config"

interface PageProps {
  params: {
    lang: string
    plan: string
  }
}

const planDetails = {
  monthly: {
    name: "Monthly Plan",
    price: "$99",
    period: "/month",
    features: ["Full Access", "24/7 Support", "Regular Updates", "All Features"],
  },
  yearly: {
    name: "Yearly Plan",
    price: "$299",
    period: "/year",
    features: ["Full Access", "Priority Support", "Regular Updates", "All Features", "Best Value"],
  },
  lifetime: {
    name: "Lifetime Plan",
    price: "$999",
    period: "one-time",
    features: ["Full Access", "Lifetime Support", "All Updates", "All Features", "Forever Access"],
  },
}

const cryptoAddresses = {
  btc: {
    address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
    network: "Bitcoin Network",
    logo: "/crypto/bitcoin-btc-logo.png",
    name: "Bitcoin",
  },
  eth: {
    address: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
    network: "ERC-20",
    logo: "/crypto/ethereum-eth-logo.png",
    name: "Ethereum",
  },
  usdt: {
    address: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
    network: "ERC-20",
    logo: "/crypto/tether-usdt-logo.png",
    name: "USDT",
  },
  sol: {
    address: "7UX2i7SucgLMQcfZ75s3VXmZZY4YRUyJN9X1RgfMoDUi",
    network: "Solana Network",
    logo: "/crypto/solana-sol-logo.png",
    name: "Solana",
  },
}

export default function PaymentClient({ params }: PageProps) {
  const { lang, plan } = params
  const [selectedCrypto, setSelectedCrypto] = useState<keyof typeof cryptoAddresses | null>(null)
  const [email, setEmail] = useState("")
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  if (!languages[lang as Language]) {
    notFound()
  }

  if (!planDetails[plan as keyof typeof planDetails]) {
    notFound()
  }

  const currentPlan = planDetails[plan as keyof typeof planDetails]

  const copyAddress = () => {
    if (selectedCrypto) {
      navigator.clipboard.writeText(cryptoAddresses[selectedCrypto].address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full text-center p-8">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Payment Submitted!</h2>
          <p className="text-muted-foreground mb-6">
            We've received your payment information. Your license will be sent to {email} within 24 hours after
            confirmation.
          </p>
          <Link href={`/${lang}`}>
            <Button className="w-full bg-red-600 hover:bg-red-700">Back to Home</Button>
          </Link>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link href={`/${lang}`} className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Plans
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Plan Details */}
          <Card>
            <CardHeader>
              <Badge className="w-fit mb-2 bg-red-600">{currentPlan.name}</Badge>
              <CardTitle className="text-3xl">
                {currentPlan.price}
                <span className="text-lg text-muted-foreground font-normal">{currentPlan.period}</span>
              </CardTitle>
              <CardDescription>Complete your purchase to get instant access</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {currentPlan.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Payment Form */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Select Cryptocurrency</CardTitle>
                <CardDescription>Choose your preferred payment method</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(cryptoAddresses).map(([key, crypto]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedCrypto(key as keyof typeof cryptoAddresses)}
                      className={`p-4 border-2 rounded-lg transition-all ${
                        selectedCrypto === key
                          ? "border-red-600 bg-red-600/10"
                          : "border-border hover:border-red-600/50"
                      }`}
                    >
                      <Image
                        src={crypto.logo || "/placeholder.svg"}
                        alt={crypto.name}
                        width={48}
                        height={48}
                        className="mx-auto mb-2"
                      />
                      <p className="text-sm font-semibold">{crypto.name}</p>
                      <Badge variant="outline" className="text-xs mt-1 border-red-300 text-red-600">
                        {crypto.network}
                      </Badge>
                    </button>
                  ))}
                </div>

                {selectedCrypto && (
                  <div className="space-y-4 pt-4 border-t">
                    <div>
                      <Label>Payment Address ({cryptoAddresses[selectedCrypto].network})</Label>
                      <div className="flex gap-2 mt-2">
                        <Input value={cryptoAddresses[selectedCrypto].address} readOnly className="font-mono text-sm" />
                        <Button onClick={copyAddress} variant="outline" size="icon">
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                      {copied && <p className="text-sm text-green-600 mt-1">Address copied!</p>}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="email">Email for License Delivery</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="mt-2"
                        />
                      </div>

                      <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                        Confirm Payment
                      </Button>
                    </form>
                  </div>
                )}
              </CardContent>
            </Card>

            <p className="text-sm text-muted-foreground text-center">
              After sending payment, submit your email. License will be delivered within 1 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
