"use client"

import { useLocale } from "@/hooks/use-locale"
import { locales, type Locale } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Globe, MapPin } from "lucide-react"

const localeNames: Record<Locale, string> = {
  en: "English",
  ru: "Русский",
  sk: "Slovenčina",
}

const localeFlags: Record<Locale, string> = {
  en: "🇺🇸",
  ru: "🇷🇺",
  sk: "🇸🇰",
}

export function LocaleSwitcher() {
  const { locale, setLocale, locationInfo } = useLocale()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{localeNames[locale]}</span>
          <span className="sm:hidden">{localeFlags[locale]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {locationInfo && (
          <>
            <div className="px-2 py-1.5 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                <span>
                  {locationInfo.city && locationInfo.country
                    ? `${locationInfo.city}, ${locationInfo.country}`
                    : locationInfo.country || "Unknown location"}
                </span>
              </div>
            </div>
            <DropdownMenuSeparator />
          </>
        )}

        {locales.map((loc) => (
          <DropdownMenuItem key={loc} onClick={() => setLocale(loc)} className={locale === loc ? "bg-accent" : ""}>
            <span className="mr-2">{localeFlags[loc]}</span>
            {localeNames[loc]}
            {locale === loc && <span className="ml-auto text-xs text-muted-foreground">✓</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
