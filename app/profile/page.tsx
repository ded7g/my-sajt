"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useAuth } from "@/contexts/auth-context"
import { useLocale } from "@/hooks/use-locale"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Trophy,
  Calendar,
  BookOpen,
  Clock,
  Target,
  TrendingUp,
  Lock,
  CheckCircle,
  User,
  Award,
  Activity,
} from "lucide-react"

export default function ProfilePage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const { t } = useLocale()
  const [readingStats, setReadingStats] = useState({
    totalReadingTime: 0,
    articlesRead: 0,
    streakDays: 0,
    lastReadDate: null as string | null,
  })

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/")
    }
  }, [user, isLoading, router])

  useEffect(() => {
    if (user) {
      const stats = localStorage.getItem(`reading-stats-${user.id}`)
      if (stats) {
        setReadingStats(JSON.parse(stats))
      }
    }
  }, [user])

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p>{t.common.loading}</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (!user) {
    return null
  }

  const getUserInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  const getExperienceLevel = (experience: number) => {
    if (experience < 10) return { level: t.experience.level + " 1", color: "bg-gray-500", nextLevel: 10 }
    if (experience < 25) return { level: t.experience.level + " 2", color: "bg-blue-500", nextLevel: 25 }
    if (experience < 50) return { level: t.experience.level + " 3", color: "bg-green-500", nextLevel: 50 }
    if (experience < 100) return { level: t.experience.level + " 4", color: "bg-purple-500", nextLevel: 100 }
    return { level: t.experience.level + " 5", color: "bg-gold-500", nextLevel: null }
  }

  const experienceLevel = getExperienceLevel(user.experience)
  const progressToNext = experienceLevel.nextLevel
    ? ((user.experience % experienceLevel.nextLevel) /
        (experienceLevel.nextLevel -
          (experienceLevel.nextLevel === 10
            ? 0
            : experienceLevel.nextLevel === 25
              ? 10
              : experienceLevel.nextLevel === 50
                ? 25
                : 50))) *
      100
    : 100

  const unlockedBlocks = [
    { name: t.informationBlocks.basicNutrition.title, experience: 0, unlocked: true },
    { name: t.informationBlocks.exerciseBasics.title, experience: 5, unlocked: user.experience >= 5 },
    { name: t.informationBlocks.stressManagement.title, experience: 10, unlocked: user.experience >= 10 },
    { name: t.informationBlocks.heartHealth.title, experience: 15, unlocked: user.experience >= 15 },
    { name: t.informationBlocks.sleepHygiene.title, experience: 25, unlocked: user.experience >= 25 },
    { name: t.informationBlocks.mentalWellness.title, experience: 35, unlocked: user.experience >= 35 },
  ]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("ru-RU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const formatReadingTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    if (hours > 0) {
      return `${hours}ч ${remainingMinutes}м`
    }
    return `${remainingMinutes}м`
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Profile Header */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarFallback className="text-2xl font-bold">{getUserInitials(user.name)}</AvatarFallback>
                </Avatar>

                <div className="flex-1 text-center sm:text-left">
                  <h1 className="text-3xl font-bold mb-2">{t.auth.myProfile}</h1>
                  <p className="text-lg font-medium mb-2">{user.name}</p>
                  <p className="text-muted-foreground mb-4">{user.email}</p>

                  <div className="flex flex-wrap items-center gap-4 justify-center sm:justify-start">
                    <Badge className={`${experienceLevel.color} text-white`}>{experienceLevel.level}</Badge>
                    <div className="flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-primary" />
                      <span className="font-semibold">
                        {user.experience} {t.experience.experienceShort}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>С {formatDate(user.registeredAt)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">{t.experience.learningStats}</h2>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{t.experience.experience}</CardTitle>
                    <Trophy className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{user.experience}</div>
                    <p className="text-xs text-muted-foreground">
                      {experienceLevel.nextLevel
                        ? `${t.experience.experienceToNext}: ${experienceLevel.nextLevel - user.experience}`
                        : "Максимальный уровень достигнут"}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{t.experience.readingTime}</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{formatReadingTime(readingStats.totalReadingTime)}</div>
                    <p className="text-xs text-muted-foreground">{t.experience.totalReadingTime}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{t.experience.blocksUnlocked}</CardTitle>
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{unlockedBlocks.filter((block) => block.unlocked).length}</div>
                    <p className="text-xs text-muted-foreground">Из {unlockedBlocks.length} доступных</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Серия дней</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{readingStats.streakDays}</div>
                    <p className="text-xs text-muted-foreground">Дней подряд изучаете</p>
                  </CardContent>
                </Card>
              </div>

              {/* Progress to Next Level */}
              {experienceLevel.nextLevel && (
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      {t.experience.progress} {t.experience.nextLevel}
                    </CardTitle>
                    <CardDescription>
                      {experienceLevel.nextLevel - user.experience} {t.experience.experienceShort} до уровня "
                      {getExperienceLevel(experienceLevel.nextLevel).level}"
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{experienceLevel.level}</span>
                        <span>
                          {user.experience}/{experienceLevel.nextLevel}
                        </span>
                      </div>
                      <Progress value={progressToNext} className="h-3" />
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Unlocked Content */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    {t.experience.unlockedContent}
                  </CardTitle>
                  <CardDescription>Блоки, которые вы разблокировали своим прогрессом</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {unlockedBlocks.map((block, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                        <div className="flex items-center gap-3">
                          {block.unlocked ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <Lock className="h-5 w-5 text-muted-foreground" />
                          )}
                          <div>
                            <p className={`font-medium ${!block.unlocked ? "text-muted-foreground" : ""}`}>
                              {block.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Требуется: {block.experience} {t.experience.experienceShort}
                            </p>
                          </div>
                        </div>
                        <Badge variant={block.unlocked ? "default" : "secondary"}>
                          {block.unlocked ? t.experience.unlocked : t.experience.locked}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Account Settings */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">{t.experience.accountSettings}</h2>

              <div className="grid gap-6 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Личная информация
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">{t.auth.name}</label>
                      <p className="font-medium">{user.name}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">{t.auth.email}</label>
                      <p className="font-medium">{user.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Дата регистрации</label>
                      <p className="font-medium">{formatDate(user.registeredAt)}</p>
                    </div>
                    <Button variant="outline" className="w-full bg-transparent">
                      Редактировать профиль
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="h-5 w-5" />
                      Активность
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Последняя активность</label>
                      <p className="font-medium">
                        {readingStats.lastReadDate ? formatDate(readingStats.lastReadDate) : "Нет данных"}
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">
                        {t.experience.totalReadingTime}
                      </label>
                      <p className="font-medium">{formatReadingTime(readingStats.totalReadingTime)}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Изученных блоков</label>
                      <p className="font-medium">{readingStats.articlesRead}</p>
                    </div>
                    <Button variant="outline" className="w-full bg-transparent">
                      Сбросить статистику
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
