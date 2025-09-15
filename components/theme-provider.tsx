"use client"

import * as React from "react"

type Theme = "light" | "dark" | "system"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: "light" | "dark"
  mounted: boolean
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

interface ThemeProviderProps {
  children: React.ReactNode
  attribute?: string
  defaultTheme?: Theme
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
  storageKey?: string
}

export function ThemeProvider({ children, defaultTheme = "system", storageKey = "theme" }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false)
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme)
  const [resolvedTheme, setResolvedTheme] = React.useState<"light" | "dark">("light")

  React.useEffect(() => {
    const root = document.documentElement
    const savedTheme = localStorage.getItem(storageKey) as Theme
    const initialTheme = savedTheme || defaultTheme

    let actualTheme: "light" | "dark" = "light"

    if (initialTheme === "system") {
      actualTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    } else {
      actualTheme = initialTheme as "light" | "dark"
    }

    // Применяем тему немедленно
    root.classList.remove("light", "dark")
    root.classList.add(actualTheme)

    document.body.classList.add("theme-loaded")

    setThemeState(initialTheme)
    setResolvedTheme(actualTheme)
    setMounted(true)
  }, [defaultTheme, storageKey])

  React.useEffect(() => {
    if (!mounted) return

    const root = document.documentElement

    const updateTheme = () => {
      let actualTheme: "light" | "dark" = "light"

      if (theme === "system") {
        actualTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      } else {
        actualTheme = theme as "light" | "dark"
      }

      setResolvedTheme(actualTheme)
      root.classList.remove("light", "dark")
      root.classList.add(actualTheme)
    }

    updateTheme()

    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
      mediaQuery.addEventListener("change", updateTheme)
      return () => mediaQuery.removeEventListener("change", updateTheme)
    }
  }, [theme, mounted])

  const setTheme = React.useCallback(
    (newTheme: Theme) => {
      setThemeState(newTheme)
      localStorage.setItem(storageKey, newTheme)
    },
    [storageKey],
  )

  return <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme, mounted }}>{children}</ThemeContext.Provider>
}
