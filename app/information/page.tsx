"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLocale } from "@/hooks/use-locale"
import { useAuth } from "@/contexts/auth-context"
import { ExperienceBlock } from "@/components/experience/experience-block"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AuthDialog } from "@/components/auth/auth-dialog"
import { Heart, Shield, Award, Clock, CheckCircle, Trophy, Brain, Activity, Apple, Stethoscope } from "lucide-react"
import { useState } from "react"

export default function InformationPage() {
  const { t } = useLocale()
  const { user, purchaseSubscription } = useAuth()
  const [authDialogOpen, setAuthDialogOpen] = useState(false)

  const experienceBlocks = [
    {
      title: t.informationBlocks.basicNutrition.title,
      description: t.informationBlocks.basicNutrition.description,
      content: t.informationBlocks.basicNutrition.content,
      requiredExperience: 0, // First block is always free
      requiresSubscription: false,
      icon: Apple,
      badge: t.information.badges.essential,
      category: t.information.healthCategories.nutrition.title,
    },
    {
      title: t.informationBlocks.exerciseBasics.title,
      description: t.informationBlocks.exerciseBasics.description,
      content: t.informationBlocks.exerciseBasics.content,
      requiredExperience: 30,
      requiresSubscription: true,
      icon: Activity,
      badge: t.information.badges.popular,
      category: t.information.healthCategories.fitness.title,
    },
    {
      title: t.informationBlocks.sleepHygiene.title,
      description: t.informationBlocks.sleepHygiene.description,
      content: t.informationBlocks.sleepHygiene.content,
      requiredExperience: 60,
      requiresSubscription: true,
      icon: Brain,
      badge: t.information.badges.updated,
      category: t.information.healthCategories.mental.title,
    },
    {
      title: t.informationBlocks.stressManagement.title,
      description: t.informationBlocks.stressManagement.description,
      content: t.informationBlocks.stressManagement.content,
      requiredExperience: 90,
      requiresSubscription: true,
      icon: Shield,
      badge: t.information.badges.expert,
      category: t.information.healthCategories.mental.title,
    },
    {
      title: t.informationBlocks.heartHealth.title,
      description: t.informationBlocks.heartHealth.description,
      content: t.informationBlocks.heartHealth.content,
      requiredExperience: 120,
      requiresSubscription: true,
      icon: Heart,
      badge: t.information.badges.trending,
      category: t.information.healthCategories.cardiovascular.title,
    },
    {
      title: t.informationBlocks.mentalWellness.title,
      description: t.informationBlocks.mentalWellness.description,
      content: t.informationBlocks.mentalWellness.content,
      requiredExperience: 150,
      requiresSubscription: true,
      icon: Stethoscope,
      badge: t.information.badges.new,
      category: t.information.healthCategories.mental.title,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-3xl sm:text-4xl font-bold tracking-tight font-sans lg:text-5xl">
                {t.information.title}
              </h1>
              <p className="mb-8 text-base sm:text-lg text-muted-foreground font-serif leading-relaxed lg:text-xl max-w-3xl mx-auto">
                {t.information.subtitle}
              </p>

              {user && (
                <div className="mb-8 p-4 bg-primary/5 rounded-lg border inline-block">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-primary" />
                      <span className="font-semibold">
                        {user.experience} {t.experience.experienceShort}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={user.hasSubscription ? "default" : "secondary"}>
                        {user.hasSubscription ? "Подписка активна" : "Нет подписки"}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t.experience.blocksUnlocked}:{" "}
                      {
                        experienceBlocks.filter(
                          (block) =>
                            !block.requiresSubscription ||
                            (user.hasSubscription && user.experience >= block.requiredExperience),
                        ).length
                      }{" "}
                      из {experienceBlocks.length}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                {!user ? (
                  <Button size="lg" onClick={() => setAuthDialogOpen(true)}>
                    {t.auth.login}
                  </Button>
                ) : (
                  <Button size="lg">{t.information.buttons.browseAll}</Button>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center max-w-3xl mx-auto">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold tracking-tight font-sans lg:text-4xl">
                {t.experience.unlockedContent}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground font-serif">{t.experience.earnExperience}</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto">
              {experienceBlocks.map((block, index) => (
                <ExperienceBlock
                  key={index}
                  title={block.title}
                  description={block.description}
                  content={block.content}
                  requiredExperience={block.requiredExperience}
                  requiresSubscription={block.requiresSubscription}
                  icon={block.icon}
                  badge={block.badge}
                  category={block.category}
                  onPurchaseSubscription={purchaseSubscription} id={""}                />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center mb-12">
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold tracking-tight font-sans lg:text-4xl">
                {t.information.trust.title}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground font-serif max-w-2xl mx-auto">
                {t.information.trust.subtitle}
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold font-sans">{t.information.trust.medicallyReviewed}</h3>
                <p className="text-muted-foreground font-serif">{t.information.trust.medicallyReviewedDesc}</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold font-sans">{t.information.trust.evidenceBased}</h3>
                <p className="text-muted-foreground font-serif">{t.information.trust.evidenceBasedDesc}</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold font-sans">{t.information.trust.regularlyUpdated}</h3>
                <p className="text-muted-foreground font-serif">{t.information.trust.regularlyUpdatedDesc}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <AuthDialog isOpen={authDialogOpen} onClose={() => setAuthDialogOpen(false)} />
    </div>
  )
}
