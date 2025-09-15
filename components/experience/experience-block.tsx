"use client"

import type React from "react"
import Link from "next/link"

import { useState, useEffect } from "react"
import { useAuth } from "@/contexts/auth-context"
import { useLocale } from "@/hooks/use-locale"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Lock, Trophy, Clock, Eye, Crown, CreditCard } from "lucide-react"
import { cn } from "@/lib/utils"

interface ExperienceBlockProps {
  title: string
  description: string
  content: string
  requiredExperience: number
  requiresSubscription?: boolean
  icon: React.ComponentType<{ className?: string }>
  badge?: string
  category: string
  onPurchaseSubscription?: () => void
  id: string // Добавляем id для ссылки
}

export function ExperienceBlock({
  title,
  description,
  content,
  requiredExperience,
  requiresSubscription = false,
  icon: Icon,
  badge,
  category,
  onPurchaseSubscription,
  id,
}: ExperienceBlockProps & { id: string }) {
  const { user, addExperience } = useAuth()
  const { t } = useLocale()
  const [isReading, setIsReading] = useState(false)
  const [readingTime, setReadingTime] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)

  const hasSubscription = user?.hasSubscription || false
  const hasRequiredExperience = user ? user.experience >= requiredExperience : false
  const isUnlocked = requiresSubscription ? hasSubscription && hasRequiredExperience : hasRequiredExperience

  const needsSubscription = requiresSubscription && !hasSubscription
  const needsExperience = hasSubscription && !hasRequiredExperience
  const experienceNeeded = user ? Math.max(0, requiredExperience - user.experience) : requiredExperience

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isReading && user && isUnlocked) {
      interval = setInterval(() => {
        setReadingTime((prev) => {
          const newTime = prev + 1
          // Каждые 60 секунд (1 минута) добавляем 1 опыт
          if (newTime % 60 === 0) {
            addExperience(1)
            updateReadingStats(user.id, 1)
          }
          return newTime
        })
      }, 1000)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [isReading, user, isUnlocked, addExperience])

  const updateReadingStats = (userId: string, minutesRead: number) => {
    const statsKey = `reading-stats-${userId}`
    const existingStats = localStorage.getItem(statsKey)
    const stats = existingStats
      ? JSON.parse(existingStats)
      : {
          totalReadingTime: 0,
          articlesRead: 0,
          streakDays: 0,
          lastReadDate: null,
        }

    stats.totalReadingTime += minutesRead
    stats.lastReadDate = new Date().toISOString()

    const today = new Date().toDateString()
    const lastRead = stats.lastReadDate ? new Date(stats.lastReadDate).toDateString() : null
    if (lastRead !== today) {
      stats.streakDays += 1
    }

    localStorage.setItem(statsKey, JSON.stringify(stats))
  }

  const handleStartReading = () => {
    if (!user) {
      return
    }
    setIsReading(true)
    setIsExpanded(true)
  }

  const handleStopReading = () => {
    if (user && readingTime > 0) {
      const statsKey = `reading-stats-${user.id}`
      const existingStats = localStorage.getItem(statsKey)
      const stats = existingStats
        ? JSON.parse(existingStats)
        : {
            totalReadingTime: 0,
            articlesRead: 0,
            streakDays: 0,
            lastReadDate: null,
          }

      stats.articlesRead += 1
      localStorage.setItem(statsKey, JSON.stringify(stats))
    }

    setIsReading(false)
    setIsExpanded(false)
    setReadingTime(0)
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-300",
        "min-h-[280px]",
        isUnlocked ? "hover:shadow-lg" : "opacity-75",
      )}
    >
      {!isUnlocked && (
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10 flex items-center justify-center">
          <div className="text-center p-8 max-w-md mx-auto">
            {needsSubscription ? (
              <>
                <Crown className="h-16 w-16 text-amber-500 mx-auto mb-6" />
                <h3 className="font-semibold mb-3 text-lg">Требуется подписка</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Этот контент доступен только с активной подпиской
                </p>
                <Button onClick={onPurchaseSubscription} className="gap-2 text-base px-6 py-3">
                  <CreditCard className="h-5 w-5" />
                  Купить
                </Button>
              </>
            ) : needsExperience ? (
              <>
                <Lock className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
                <h3 className="font-semibold mb-3 text-lg">{t.experience.locked}</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {t.experience.requiresExperience.replace("{exp}", experienceNeeded.toString())}
                </p>
                {user && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span>{t.experience.progress}</span>
                      <span>
                        {user.experience}/{requiredExperience}
                      </span>
                    </div>
                    <Progress value={(user.experience / requiredExperience) * 100} className="h-3" />
                  </div>
                )}
              </>
            ) : (
              <>
                <Lock className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
                <h3 className="font-semibold mb-3 text-lg">{t.experience.locked}</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Войдите в систему для доступа к контенту
                </p>
              </>
            )}
          </div>
        </div>
      )}

      <CardHeader className="pb-4 px-6 pt-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-lg",
                isUnlocked ? "bg-primary/10" : "bg-muted",
              )}
            >
              <Icon className={cn("h-5 w-5", isUnlocked ? "text-primary" : "text-muted-foreground")} />
            </div>
            <div>
              <CardTitle className="font-sans text-lg flex items-center gap-2">
                {title}
                {requiresSubscription && <Crown className="h-4 w-4 text-amber-500" />}
              </CardTitle>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="outline" className="text-xs">
                  <Trophy className="h-3 w-3 mr-1" />
                  {requiredExperience} {t.experience.experienceShort}
                </Badge>
                {requiresSubscription && (
                  <Badge variant="default" className="text-xs bg-amber-500 hover:bg-amber-600">
                    Premium
                  </Badge>
                )}
                {badge && (
                  <Badge variant="secondary" className="text-xs">
                    {badge}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>
        <CardDescription className="font-serif text-base leading-relaxed">{description}</CardDescription>
      </CardHeader>

      <CardContent className="px-6 pb-6">
        {isUnlocked && (
          <>
            {isReading && (
              <div className="mb-4 p-3 bg-primary/5 rounded-lg border">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-primary" />
                    <span className="font-medium">{t.experience.readingTime}...</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{formatTime(readingTime)}</span>
                  </div>
                </div>
                <div className="mt-2 text-xs text-muted-foreground">{t.experience.earnExperience}</div>
              </div>
            )}

            {isExpanded && (
              <div className="mb-4 p-4 bg-muted/30 rounded-lg">
                <div className="prose prose-sm max-w-none">
                  {content.split("\n").map((paragraph, index) => (
                    <p key={index} className="mb-3 text-sm leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground font-serif">{category}</span>
              <Link href={`/information/${id}`}>
                <Button size="sm">{t.common.learnMore}</Button>
              </Link>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
