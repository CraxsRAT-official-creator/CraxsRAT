"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Copy, Check, ArrowLeft, Wallet } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const planDetails = {
  monthly: {
    name: "Monthly Plan",
    price: "$99",
    period: "Monthly",
  },
  yearly: {
    name: "Yearly Plan",
    price: "$299",
    period: "Yearly",
  },
  lifetime: {
    name: "Lifetime Plan",
    price: "$999",
    period: "Lifetime",
  },
}

const cryptoAddresses = {
  ETH: {
    address: "0x6E5D24bA20b807656309e521F2CAC6Ac0ddE601F",
    name: "Ethereum",
    logo: "/crypto/ethereum-eth-logo.png",
    network: "ERC-20",
    color: "from-gray-400 to-gray-600",
  },
  SOL: {
    address: "3To2GrNzFpB56DRmamZD2Gc16URaNcbFRKzKnpPgUigL",
    name: "Solana",
    logo: "/crypto/solana-sol-logo.png",
    network: "Solana Network",
    color: "from-purple-400 to-green-400",
  },
  USDT: {
    address: "0x59A569cF39f62a812F9D76f856a803e773e29C8a",
    name: "Tether USD",
    logo: "/crypto/tether-usdt-logo.png",
    network: "ERC-20",
    color: "from-green-400 to-green-600",
  },
  BTC: {
    address: "bc1qakjwtpyxhhdjeceas4pvmh30jl7vythg9jqvsf",
    name: "Bitcoin",
    logo: "/crypto/bitcoin-btc-logo.png",
    network: "Bitcoin Network",
    color: "from-orange-400 to-orange-600",
  },
}

export default function PaymentClientPage({ planSlug }: { planSlug: string }) {
  const plan = planDetails[planSlug as keyof typeof planDetails]

  const [email, setEmail] = useState("")
  const [selectedCrypto, setSelectedCrypto] = useState<string | null>(null)
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null)
  const [showConfirmation, setShowConfirmation] = useState(false)

  if (!plan) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Plan Not Found</h1>
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  const copyToClipboard = async (address: string, currency: string) => {
    try {
      await navigator.clipboard.writeText(address)
      setCopiedAddress(currency)
      setTimeout(() => setCopiedAddress(null), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  const handlePaymentSubmit = () => {
    if (!email.trim()) {
      alert("Please enter your Gmail address")
      return
    }

    if (!email.includes("@gmail.com")) {
      alert("Please enter a valid Gmail address")
      return
    }

    if (!selectedCrypto) {
      alert("Please select a cryptocurrency for payment")
      return
    }

    setShowConfirmation(true)
  }

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl text-foreground">Payment Submitted!</CardTitle>
            <CardDescription>Your Craxs RAT order is being processed</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-foreground">
              We will verify your {selectedCrypto} payment and send your Craxs RAT license to:
            </p>
            <Badge variant="secondary" className="text-sm">
              {email}
            </Badge>
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Next Steps:</strong>
                <br />
                1. Payment verification (1-24 hours)
                <br />
                2. License key delivery via email
                <br />
                3. Download instructions included
              </p>
            </div>
            <div className="pt-4">
              <Link href="/">
                <Button className="w-full bg-red-600 hover:bg-red-700">Return to Craxs RAT</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Plans</span>
            </Link>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center relative overflow-hidden">
                <Image src="/favicon-32x32.png" alt="Craxs RAT" width={24} height={24} className="object-contain" />
              </div>
              <div>
                <span className="text-xl font-bold text-foreground">Craxs RAT</span>
                <p className="text-xs text-muted-foreground">Professional Remote Access Tool</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Plan Summary */}
          <Card className="mb-8 border-red-200 dark:border-red-800">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Craxs RAT {plan.name}</CardTitle>
              <CardDescription>Complete your purchase to get instant access to Craxs RAT</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-6 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                <div>
                  <h3 className="font-semibold text-foreground text-lg">Craxs RAT {plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.period} License</p>
                  <Badge className="mt-2 bg-red-600 text-white">Professional RAT Tool</Badge>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-red-600">{plan.price}</p>
                  <p className="text-sm text-muted-foreground">One-time payment</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8 border-red-200 dark:border-red-800">
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center gap-2">
                <Wallet className="w-5 h-5 text-red-600" />
                Send Crypto Payment To:
              </CardTitle>
              <CardDescription>Choose your preferred cryptocurrency and send the exact amount</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {Object.entries(cryptoAddresses).map(([currency, details]) => (
                  <Card
                    key={currency}
                    className={`cursor-pointer transition-all hover:shadow-lg hover:scale-105 duration-200 ${
                      selectedCrypto === currency
                        ? "border-red-600 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/30 dark:to-red-900/30 shadow-lg"
                        : "hover:border-red-300 bg-gradient-to-br from-card to-muted/20"
                    }`}
                    onClick={() => setSelectedCrypto(currency)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${details.color} p-2 shadow-lg`}>
                            <Image
                              src={details.logo || "/placeholder.svg"}
                              alt={`${currency} logo`}
                              width={32}
                              height={32}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div>
                            <h3 className="font-bold text-foreground text-lg">{currency}</h3>
                            <p className="text-sm text-muted-foreground font-medium">{details.name}</p>
                            <Badge variant="outline" className="text-xs mt-1 border-red-300 text-red-600">
                              {details.network}
                            </Badge>
                          </div>
                        </div>
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            selectedCrypto === currency
                              ? "bg-red-600 border-red-600 shadow-lg"
                              : "border-muted-foreground hover:border-red-400"
                          }`}
                        >
                          {selectedCrypto === currency && <Check className="w-4 h-4 text-white" />}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {selectedCrypto && (
                <div className="p-6 border-2 border-red-600 rounded-lg bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/30 dark:to-red-900/30 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full bg-gradient-to-br ${cryptoAddresses[selectedCrypto as keyof typeof cryptoAddresses].color} p-1`}
                      >
                        <Image
                          src={
                            cryptoAddresses[selectedCrypto as keyof typeof cryptoAddresses].logo || "/placeholder.svg"
                          }
                          alt={`${selectedCrypto} logo`}
                          width={24}
                          height={24}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <Badge className="bg-red-600 text-white font-semibold">{selectedCrypto}</Badge>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        copyToClipboard(
                          cryptoAddresses[selectedCrypto as keyof typeof cryptoAddresses].address,
                          selectedCrypto,
                        )
                      }
                      className="h-8 px-3 hover:bg-red-200 dark:hover:bg-red-800"
                    >
                      {copiedAddress === selectedCrypto ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                      <span className="ml-1 text-xs">Copy</span>
                    </Button>
                  </div>
                  <p className="text-sm font-mono text-foreground break-all bg-background p-4 rounded border-2 border-red-300 shadow-inner">
                    {cryptoAddresses[selectedCrypto as keyof typeof cryptoAddresses].address}
                  </p>
                  <p className="text-sm text-muted-foreground mt-3 font-medium">
                    Send exactly <strong className="text-red-600">{plan.price}</strong> worth of {selectedCrypto} to
                    this address
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Email Input */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Craxs RAT License Delivery</CardTitle>
              <CardDescription>
                Enter your Gmail to receive your Craxs RAT license after payment verification
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Gmail Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                />
                <p className="text-xs text-muted-foreground">
                  Your Craxs RAT license key and download instructions will be sent to this Gmail address
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <Card>
            <CardContent className="pt-6">
              <Button
                onClick={handlePaymentSubmit}
                className="w-full bg-red-600 hover:bg-red-700 text-white"
                size="lg"
                disabled={!selectedCrypto || !email.trim()}
              >
                I Sent the {selectedCrypto || "Crypto"} Payment
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Click this button after you have sent the {selectedCrypto || "cryptocurrency"} payment. We will verify
                your payment and send your Craxs RAT license within 24 hours.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
