import type React from "react"
import type { Metadata } from "next"
import { Open_Sans, Montserrat } from "next/font/google"
import "./globals.css"
import { LocaleProvider } from "@/hooks/use-locale"
import { AuthProvider } from "@/contexts/auth-context"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeScript } from "@/components/theme-script"

const openSans = Open_Sans({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-open-sans",
})

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Health Information Hub",
  description: "Premium health information and expert guidance",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${montserrat.variable} antialiased`} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="healthhub-theme"
        >
          <AuthProvider>
            <LocaleProvider>{children}</LocaleProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
