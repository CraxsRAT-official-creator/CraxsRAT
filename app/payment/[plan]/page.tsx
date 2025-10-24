import PaymentClientPage from "./client"

export async function generateStaticParams() {
  return [{ plan: "monthly" }, { plan: "yearly" }, { plan: "lifetime" }]
}

export default function PaymentPage() {
  return <PaymentClientPage />
}
