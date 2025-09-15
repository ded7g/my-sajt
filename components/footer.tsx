"use client"

import { useLocale } from "@/hooks/use-locale"
import { Heart, Mail, Instagram, Facebook } from "lucide-react"

export function Footer() {
  const { t } = useLocale()

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Heart className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl font-sans">HealthHub</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="mailto:info@healthhub.com"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-primary" />
              </a>
              <a
                href="https://instagram.com/healthhub"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5 text-primary" />
              </a>
              <a
                href="https://facebook.com/healthhub"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 font-sans text-base sm:text-lg">{t.nav.information}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground font-serif">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Nutrition Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Fitness Plans
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Mental Health
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Preventive Care
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 font-sans text-base sm:text-lg">{t.footer.support}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground font-serif">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  {t.nav.contact}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  {t.footer.privacy}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  {t.footer.terms}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-muted-foreground font-serif">
          <p>&copy; 2024 HealthHub. {t.footer.rights}.</p>
        </div>
      </div>
    </footer>
  )
}
