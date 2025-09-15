"use client"

import type React from "react"
import { useState, useEffect, createContext, useContext } from "react"
import {
  type Locale,
  defaultLocale,
  detectLocaleFromIP,
  getTranslations,
  type Translations,
  getUserLocationInfo,
} from "@/lib/i18n"

interface LocaleContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
  isLoading: boolean
  locationInfo: {
    country?: string
    city?: string
    region?: string
    timezone?: string
  } | null
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)
  const [isLoading, setIsLoading] = useState(true)
  const [locationInfo, setLocationInfo] = useState<LocaleContextType["locationInfo"]>(null)

  useEffect(() => {
    const initializeLocale = async () => {
      // Check if locale is stored in localStorage
      const storedLocale = localStorage.getItem("locale") as Locale

      if (storedLocale && ["en", "ru", "sk"].includes(storedLocale)) {
        console.log(`[HealthHub] Using stored locale: ${storedLocale}`)
        setLocaleState(storedLocale)
        setIsLoading(false)

        // Still try to get location info for display purposes
        const locationData = await getUserLocationInfo()
        if (locationData) {
          setLocationInfo({
            country: locationData.country,
            city: locationData.city,
            region: locationData.region,
            timezone: locationData.timezone,
          })
        }
      } else {
        console.log("[HealthHub] No stored locale found, detecting from IP...")

        try {
          const locationData = await getUserLocationInfo()

          if (locationData) {
            console.log(`[HealthHub] Detected locale from location: ${locationData.locale}`)
            setLocaleState(locationData.locale)
            localStorage.setItem("locale", locationData.locale)
            setLocationInfo({
              country: locationData.country,
              city: locationData.city,
              region: locationData.region,
              timezone: locationData.timezone,
            })
          } else {
            // Fallback to simple IP detection
            const detectedLocale = await detectLocaleFromIP()
            console.log(`[HealthHub] Fallback detection result: ${detectedLocale}`)
            setLocaleState(detectedLocale)
            localStorage.setItem("locale", detectedLocale)
          }
        } catch (error) {
          console.error("[HealthHub] Locale detection failed:", error)
          setLocaleState(defaultLocale)
          localStorage.setItem("locale", defaultLocale)
        }

        setIsLoading(false)
      }
    }

    initializeLocale()
  }, [])

  const setLocale = (newLocale: Locale) => {
    console.log(`[HealthHub] User manually changed locale to: ${newLocale}`)
    setLocaleState(newLocale)
    localStorage.setItem("locale", newLocale)
  }

  const t = getTranslations(locale)

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, isLoading, locationInfo }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }
  return context
}
