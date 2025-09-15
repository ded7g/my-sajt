"use client"

import { useParams, useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { useLocale } from "@/hooks/use-locale"
import { getContentById } from "@/lib/content-data"
import { ReadingTimer } from "@/components/experience/reading-timer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Lock, Crown, CreditCard, Trophy } from "lucide-react"

export default function ContentPage() {
  const params = useParams()
  const router = useRouter()
  const { user } = useAuth()
  const { t } = useLocale()
  const contentId = params.id as string

  const content = getContentById(contentId)

  if (!content) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Контент не найден</h1>
          <Button onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Назад
          </Button>
        </div>
      </div>
    )
  }

  const hasSubscription = user?.hasSubscription || false
  const hasRequiredExperience = user ? user.experience >= content.requiredExperience : false
  const isUnlocked = content.requiresSubscription ? hasSubscription && hasRequiredExperience : hasRequiredExperience

  const needsSubscription = content.requiresSubscription && !hasSubscription
  const needsExperience = hasSubscription && !hasRequiredExperience
  const experienceNeeded = user ? Math.max(0, content.requiredExperience - user.experience) : content.requiredExperience

  const handlePurchaseSubscription = () => {
    alert("Функция покупки подписки будет добавлена позже")
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Навигация */}
      <div className="mb-6">
        <Button variant="ghost" onClick={() => router.back()} className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Назад к материалам
        </Button>
      </div>

      {/* Заголовок */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <content.icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              {content.title}
              {content.requiresSubscription && <Crown className="h-6 w-6 text-amber-500" />}
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="outline" className="text-sm">
                <Trophy className="h-3 w-3 mr-1" />
                {content.requiredExperience} опыта
              </Badge>
              {content.requiresSubscription && (
                <Badge variant="default" className="text-sm bg-amber-500 hover:bg-amber-600">
                  Premium
                </Badge>
              )}
              <Badge variant="secondary" className="text-sm">
                {content.category}
              </Badge>
            </div>
          </div>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">{content.description}</p>
      </div>

      {/* Проверка доступа */}
      {!isUnlocked ? (
        <Card className="mb-8 border-2 border-destructive/20">
          <CardContent className="p-8 text-center">
            {needsSubscription ? (
              <>
                <Crown className="h-16 w-16 text-amber-500 mx-auto mb-6" />
                <h2 className="text-2xl font-semibold mb-4">Требуется подписка</h2>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Этот контент доступен только пользователям с активной подпиской Premium
                </p>
                <Button onClick={handlePurchaseSubscription} size="lg" className="gap-2">
                  <CreditCard className="h-5 w-5" />
                  Купить подписку
                </Button>
              </>
            ) : needsExperience ? (
              <>
                <Lock className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
                <h2 className="text-2xl font-semibold mb-4">Недостаточно опыта</h2>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Для доступа к этому материалу требуется {experienceNeeded} дополнительных очков опыта
                </p>
                {user && (
                  <div className="max-w-sm mx-auto">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span>Ваш прогресс</span>
                      <span>
                        {user.experience}/{content.requiredExperience}
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div
                        className="bg-primary h-3 rounded-full transition-all duration-300"
                        style={{ width: `${(user.experience / content.requiredExperience) * 100}%` }}
                      />
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
                <Lock className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
                <h2 className="text-2xl font-semibold mb-4">Требуется авторизация</h2>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Войдите в систему для доступа к этому контенту
                </p>
              </>
            )}
          </CardContent>
        </Card>
      ) : (
        <>
          {/* Таймер чтения */}
          <ReadingTimer contentId={contentId} maxExperience={30} />

          {/* Контент */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Содержание</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <div className="space-y-4">
                {content.fullContent.split("\n").map((line, index) => {
                  if (line.startsWith("# ")) {
                    return (
                      <h1 key={index} className="text-3xl font-bold mt-8 mb-4 first:mt-0">
                        {line.replace("# ", "")}
                      </h1>
                    )
                  }
                  if (line.startsWith("## ")) {
                    return (
                      <h2 key={index} className="text-2xl font-semibold mt-6 mb-3">
                        {line.replace("## ", "")}
                      </h2>
                    )
                  }
                  if (line.startsWith("### ")) {
                    return (
                      <h3 key={index} className="text-xl font-semibold mt-4 mb-2">
                        {line.replace("### ", "")}
                      </h3>
                    )
                  }
                  if (line.startsWith("- ")) {
                    return (
                      <li key={index} className="ml-4">
                        {line.replace("- ", "")}
                      </li>
                    )
                  }
                  if (line.trim() === "") {
                    return <div key={index} className="h-2" />
                  }
                  if (line.match(/^\d+\./)) {
                    return (
                      <li key={index} className="ml-4 list-decimal">
                        {line.replace(/^\d+\.\s*/, "")}
                      </li>
                    )
                  }
                  return (
                    <p key={index} className="leading-relaxed text-base">
                      {line}
                    </p>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )
}
