import { languages, type Language } from "@/lib/i18n/config"
import PaymentClient from "./PaymentClient"
import { notFound } from "next/navigation"

interface PageProps {
  params: {
    lang: string
    plan: string
  }
}

export async function generateStaticParams() {
  const plans = ["monthly", "yearly", "lifetime"]
  const langs = Object.keys(languages)

  return langs.flatMap((lang) =>
    plans.map((plan) => ({
      lang,
      plan,
    })),
  )
}

export default function PaymentPage({ params }: PageProps) {
  const { lang, plan } = params

  if (!languages[lang as Language]) {
    notFound()
  }

  return <PaymentClient params={params} />
}
