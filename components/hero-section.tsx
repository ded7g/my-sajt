"use client"

import { useLocale } from "@/hooks/use-locale"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Users, TrendingUp } from "lucide-react"

export function HeroSection() {
  const { t } = useLocale()

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 xl:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Hero content */}
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight font-sans leading-tight">
              {t.hero.title}
            </h1>
            <p className="mx-auto max-w-2xl text-base sm:text-lg lg:text-xl text-muted-foreground font-serif leading-relaxed">
              {t.hero.subtitle}
            </p>
          </div>

          {/* CTA buttons */}
          <div className="mb-8 sm:mb-12 flex flex-col gap-3 sm:flex-row sm:gap-4 sm:justify-center">
            <Button size="lg" className="text-base w-full sm:w-auto">
              {t.hero.cta}
            </Button>
            <Button variant="outline" size="lg" className="text-base bg-transparent w-full sm:w-auto">
              {t.common.learnMore}
            </Button>
          </div>

          {/* Video section */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <div className="mx-auto max-w-4xl">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-muted border shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Heart className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-muted-foreground font-serif">{t.common.loading}</p>
                    <p className="text-sm text-muted-foreground mt-2 font-serif">Здесь будет размещено ваше видео</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center gap-3 p-4 sm:p-6">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h3 className="font-semibold font-sans text-sm sm:text-base">{t.common.expertGuidance}</h3>
                <p className="text-center text-xs sm:text-sm text-muted-foreground font-serif">
                  {t.common.expertGuidanceDesc}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center gap-3 p-4 sm:p-6">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h3 className="font-semibold font-sans text-sm sm:text-base">{t.common.verifiedContent}</h3>
                <p className="text-center text-xs sm:text-sm text-muted-foreground font-serif">
                  {t.common.verifiedContentDesc}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center gap-3 p-4 sm:p-6">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h3 className="font-semibold font-sans text-sm sm:text-base">{t.common.communitySupport}</h3>
                <p className="text-center text-xs sm:text-sm text-muted-foreground font-serif">
                  {t.common.communitySupportDesc}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center gap-3 p-4 sm:p-6">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-primary/10">
                  <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h3 className="font-semibold font-sans text-sm sm:text-base">{t.common.trackProgress}</h3>
                <p className="text-center text-xs sm:text-sm text-muted-foreground font-serif">
                  {t.common.trackProgressDesc}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
