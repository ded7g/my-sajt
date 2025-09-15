"use client"

import { useLocale } from "@/hooks/use-locale"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Activity, Calendar, MessageCircle } from "lucide-react"

export function FeaturesSection() {
  const { t } = useLocale()

  const features = [
    {
      icon: BookOpen,
      title: t.features.items.library.title,
      description: t.features.items.library.description,
    },
    {
      icon: Activity,
      title: t.features.items.plans.title,
      description: t.features.items.plans.description,
    },
    {
      icon: Calendar,
      title: t.features.items.tracking.title,
      description: t.features.items.tracking.description,
    },
    {
      icon: MessageCircle,
      title: t.features.items.consultations.title,
      description: t.features.items.consultations.description,
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-24 xl:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight font-sans">
            {t.features.title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-serif">{t.features.subtitle}</p>
        </div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <CardTitle className="font-sans text-lg sm:text-xl">{feature.title}</CardTitle>
                </div>
                <CardDescription className="font-serif text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <Button variant="outline" className="w-full bg-transparent">
                  {t.common.learnMore}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
