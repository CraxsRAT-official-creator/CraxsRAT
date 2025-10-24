export const languages = {
  en: { name: "English", flag: "🇺🇸" },
  br: { name: "Português", flag: "🇧🇷" },
  de: { name: "Deutsch", flag: "🇩🇪" },
  fr: { name: "Français", flag: "🇫🇷" },
  nl: { name: "Nederlands", flag: "🇳🇱" },
  ca: { name: "English", flag: "🇨🇦" },
} as const

export type Language = keyof typeof languages

export const defaultLanguage: Language = "en"

export const languageNames: Record<Language, string> = {
  en: "English",
  br: "Português (Brasil)",
  de: "Deutsch",
  fr: "Français",
  nl: "Nederlands",
  ca: "English (Canada)",
}
