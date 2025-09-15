"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/contexts/auth-context"
import { useLocale } from "@/hooks/use-locale"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Clock, Trophy, Play, Pause, RotateCcw, CheckCircle } from "lucide-react"

interface ReadingTimerProps {
  contentId: string
  maxExperience?: number
}

export function ReadingTimer({ contentId, maxExperience = 30 }: ReadingTimerProps) {
  const { user, addExperience } = useAuth()
  const { t } = useLocale()
  const [isReading, setIsReading] = useState(false)
  const [readingTime, setReadingTime] = useState(0)
  const [earnedExperience, setEarnedExperience] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)

  // Загружаем сохраненный прогресс для этого контента
  useEffect(() => {
    if (user) {
      const progressKey = `reading-progress-${user.id}-${contentId}`
      const savedProgress = localStorage.getItem(progressKey)
      if (savedProgress) {
        const progress = JSON.parse(savedProgress)
        setEarnedExperience(progress.earnedExperience || 0)
        setIsCompleted(progress.earnedExperience >= maxExperience)
      }
    }
  }, [user, contentId, maxExperience])

  // Таймер чтения
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isReading && user && !isCompleted) {
      interval = setInterval(() => {
        setReadingTime((prev) => {
          const newTime = prev + 1

          // Каждые 60 секунд (1 минута) добавляем 1 опыт, но не больше максимума
          if (newTime % 60 === 0 && earnedExperience < maxExperience) {
            const newExperience = Math.min(earnedExperience + 1, maxExperience)
            setEarnedExperience(newExperience)
            addExperience(1)

            // Сохраняем прогресс
            const progressKey = `reading-progress-${user.id}-${contentId}`
            localStorage.setItem(
              progressKey,
              JSON.stringify({
                earnedExperience: newExperience,
                lastReadDate: new Date().toISOString(),
              }),
            )

            // Обновляем статистику чтения
            updateReadingStats(user.id, 1)

            // Проверяем, достигли ли максимума
            if (newExperience >= maxExperience) {
              setIsCompleted(true)
              setIsReading(false)
            }
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
  }, [isReading, user, earnedExperience, maxExperience, contentId, addExperience])

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
    if (!user || isCompleted) return
    setIsReading(true)
  }

  const handlePauseReading = () => {
    setIsReading(false)
  }

  const handleResetTimer = () => {
    setIsReading(false)
    setReadingTime(0)
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  const progressPercentage = (earnedExperience / maxExperience) * 100
  const remainingExperience = maxExperience - earnedExperience

  if (!user) {
    return (
      <Card className="mb-6">
        <CardContent className="p-6 text-center">
          <p className="text-muted-foreground">Войдите в систему для отслеживания прогресса чтения</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="mb-6 border-2 border-primary/20">
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Заголовок */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Таймер чтения</h3>
            </div>
            {isCompleted && (
              <Badge variant="default" className="bg-green-500 hover:bg-green-600">
                <CheckCircle className="h-3 w-3 mr-1" />
                Завершено
              </Badge>
            )}
          </div>

          {/* Прогресс опыта */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-1">
                <Trophy className="h-4 w-4 text-amber-500" />
                Опыт: {earnedExperience}/{maxExperience}
              </span>
              <span className="text-muted-foreground">
                {remainingExperience > 0 ? `Осталось: ${remainingExperience}` : "Максимум достигнут!"}
              </span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
          </div>

          {/* Текущая сессия */}
          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
            <div className="space-y-1">
              <div className="text-2xl font-mono font-bold">{formatTime(readingTime)}</div>
              <div className="text-sm text-muted-foreground">{isReading ? "Идет чтение..." : "Время чтения"}</div>
            </div>

            <div className="flex items-center gap-2">
              {!isCompleted && (
                <>
                  {!isReading ? (
                    <Button onClick={handleStartReading} size="sm" className="gap-2">
                      <Play className="h-4 w-4" />
                      Начать
                    </Button>
                  ) : (
                    <Button onClick={handlePauseReading} variant="outline" size="sm" className="gap-2 bg-transparent">
                      <Pause className="h-4 w-4" />
                      Пауза
                    </Button>
                  )}

                  {readingTime > 0 && (
                    <Button onClick={handleResetTimer} variant="ghost" size="sm">
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                  )}
                </>
              )}
            </div>
          </div>

          <div className="text-xs text-muted-foreground text-center p-2 bg-primary/5 rounded">
            {isCompleted
              ? `Вы получили максимальный опыт (${maxExperience}) за изучение этого материала!`
              : `Получайте 1 опыт каждую минуту чтения (максимум ${maxExperience} за этот материал)`}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
