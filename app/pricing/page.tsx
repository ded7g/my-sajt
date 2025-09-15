"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLocale } from "@/hooks/use-locale"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Crown, Zap } from "lucide-react"

export default function PricingPage() {
  const { t } = useLocale()

  const plans = [
    {
      name: t.pricing.plans.basic.name,
      price: "$9.99",
      period: "per month",
      description: t.pricing.plans.basic.description,
      icon: Zap,
      badge: null,
      features: t.pricing.plans.basic.features,
    },
    {
      name: t.pricing.plans.premium.name,
      price: "$19.99",
      period: "per month",
      description: t.pricing.plans.premium.description,
      icon: Star,
      badge: t.pricing.plans.premium.badge,
      features: t.pricing.plans.premium.features,
    },
    {
      name: t.pricing.plans.professional.name,
      price: "$39.99",
      period: "per month",
      description: t.pricing.plans.professional.description,
      icon: Crown,
      badge: t.pricing.plans.professional.badge,
      features: t.pricing.plans.professional.features,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-3xl sm:text-4xl font-bold tracking-tight font-sans lg:text-5xl">
                {t.pricing.title}
              </h1>
              <p className="mb-8 text-base sm:text-lg text-muted-foreground font-serif leading-relaxed lg:text-xl">
                {t.pricing.subtitle}
              </p>
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="text-sm font-medium">{t.pricing.billing.monthly}</span>
                <div className="relative">
                  <input type="checkbox" className="sr-only" />
                  <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                  <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                </div>
                <span className="text-sm font-medium">
                  {t.pricing.billing.annual}{" "}
                  <Badge variant="secondary" className="ml-2">
                    {t.pricing.billing.save}
                  </Badge>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative overflow-hidden ${plan.badge === t.pricing.plans.premium.badge ? "border-primary shadow-lg scale-105" : ""}`}
                >
                  {plan.badge && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                      {plan.badge}
                    </div>
                  )}
                  <CardHeader className="text-center pb-8">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <plan.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-sans text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="font-serif">{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold font-sans">{plan.price}</span>
                      <span className="text-muted-foreground font-serif">/{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <Check className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm font-serif">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full"
                      variant={plan.badge === t.pricing.plans.premium.badge ? "default" : "outline"}
                    >
                      {t.common.getStarted}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold tracking-tight font-sans lg:text-4xl">
                {t.pricing.faq.title}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground font-serif">{t.pricing.faq.subtitle}</p>
            </div>

            <div className="mx-auto max-w-3xl space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-sans">{t.pricing.faq.questions.changePlan.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-serif">{t.pricing.faq.questions.changePlan.answer}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-sans">{t.pricing.faq.questions.freeTrial.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-serif">{t.pricing.faq.questions.freeTrial.answer}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-sans">{t.pricing.faq.questions.payment.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-serif">{t.pricing.faq.questions.payment.answer}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
