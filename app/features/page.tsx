"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLocale } from "@/hooks/use-locale"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Users,
  Award,
  BookOpen,
  Activity,
  Calendar,
  MessageCircle,
  Smartphone,
  BarChart3,
  Lock,
  Globe,
} from "lucide-react"

export default function FeaturesPage() {
  const { t } = useLocale()

  const mainFeatures = [
    {
      icon: BookOpen,
      title: "Comprehensive Health Library",
      description: "Access thousands of medically reviewed articles covering all aspects of health and wellness.",
      benefits: ["10,000+ articles", "Expert reviewed", "Regular updates", "Multiple languages"],
    },
    {
      icon: Activity,
      title: "Personalized Health Plans",
      description: "Get customized nutrition and fitness plans tailored to your specific health goals.",
      benefits: ["AI-powered recommendations", "Goal tracking", "Progress monitoring", "Adaptive planning"],
    },
    {
      icon: MessageCircle,
      title: "Expert Consultations",
      description: "Connect with certified health professionals for personalized advice and guidance.",
      benefits: ["Licensed professionals", "Video consultations", "Chat support", "Follow-up care"],
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Track your health metrics and progress with detailed analytics and insights.",
      benefits: ["Health dashboards", "Trend analysis", "Custom reports", "Data export"],
    },
  ]

  const additionalFeatures = [
    { icon: Smartphone, title: "Mobile App", description: "Access your health information anywhere" },
    { icon: Lock, title: "Secure & Private", description: "Your health data is encrypted and protected" },
    { icon: Globe, title: "Multi-language", description: "Available in English, Russian, and Slovak" },
    { icon: Calendar, title: "Health Reminders", description: "Never miss important health appointments" },
    { icon: Users, title: "Community Support", description: "Connect with others on similar health journeys" },
    { icon: Award, title: "Certified Content", description: "All content meets medical standards" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight font-sans lg:text-5xl">{t.features.title}</h1>
              <p className="mb-8 text-lg text-muted-foreground font-serif leading-relaxed lg:text-xl">
                {t.features.subtitle}
              </p>
              <Button size="lg">{t.common.getStarted}</Button>
            </div>
          </div>
        </section>

        {/* Main Features */}
        <section className="py-20">
          <div className="container">
            <div className="grid gap-12 lg:gap-20">
              {mainFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`grid gap-8 lg:grid-cols-2 lg:gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold font-sans lg:text-3xl">{feature.title}</h2>
                    </div>
                    <p className="text-lg text-muted-foreground font-serif mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span className="text-sm font-serif">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                      <feature.icon className="h-24 w-24 text-primary/30" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Features Grid */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="mb-4 text-3xl font-bold tracking-tight font-sans lg:text-4xl">More Features</h2>
              <p className="text-lg text-muted-foreground font-serif">
                Additional tools and features to support your health journey
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {additionalFeatures.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-sans">{feature.title}</CardTitle>
                    <CardDescription className="font-serif">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight font-sans lg:text-4xl">
                Ready to Start Your Health Journey?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground font-serif">
                Join thousands of users who trust our platform for their health information needs.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg">{t.common.getStarted}</Button>
                <Button variant="outline" size="lg">
                  {t.common.learnMore}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
