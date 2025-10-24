"use client"

import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  lang?: string
}

export function Logo({ lang }: LogoProps) {
  const href = lang ? `/${lang}` : "/"

  return (
    <Link href={href} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
      <Image
        src="/android-chrome-192x192.png"
        alt="Craxs RAT Logo - Advanced Remote Administration Tool"
        width={40}
        height={40}
        className="w-10 h-10"
      />
      <span className="text-xl font-bold text-white">Craxs RAT</span>
    </Link>
  )
}
