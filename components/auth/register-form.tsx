"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, EyeOff } from "lucide-react"
import { useLocale } from "@/hooks/use-locale"

interface RegisterFormProps {
  onSwitchToLogin: () => void
  onClose: () => void
}

export function RegisterForm({ onSwitchToLogin, onClose }: RegisterFormProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { t, isLoading: localeLoading } = useLocale()

  if (localeLoading) {
    return <div>Loading...</div>
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    if (!name || !email || !password || !confirmPassword) {
      setError(t.auth.fillAllFields)
      setIsLoading(false)
      return
    }

    if (password !== confirmPassword) {
      setError(t.auth.passwordMismatch)
      setIsLoading(false)
      return
    }

    if (password.length < 6) {
      setError(t.auth.passwordTooShort)
      setIsLoading(false)
      return
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      })

      if (res.ok) {
        onClose()
      } else {
        const data = await res.json()
        setError(data.message || "Registration failed")
      }
    } catch (err) {
      setError("Something went wrong")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">{t.auth.register}</CardTitle>
        <CardDescription className="text-center">{t.auth.registerDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-foreground">
              {t.auth.name}
            </Label>
            <Input
              id="name"
              type="text"
              placeholder={t.auth.yourName}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="cursor-text border-2 border-input focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
            />
            <p className="text-xs text-muted-foreground">{t.auth.nicknameHelp}</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-foreground">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="cursor-text border-2 border-input focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-foreground">
              {t.auth.password}
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder={t.auth.minCharacters}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="cursor-text border-2 border-input focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">
              {t.auth.confirmPassword}
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder={t.auth.repeatPassword}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="cursor-text border-2 border-input focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
            />
          </div>

          <Button
            type="submit"
            className="w-full cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2.5"
            disabled={isLoading}
          >
            {isLoading ? t.auth.registering : t.auth.registerButton}
          </Button>

          <div className="text-center text-sm">
            <span className="text-muted-foreground">{t.auth.haveAccount} </span>
            <Button
              type="button"
              variant="link"
              className="p-0 h-auto font-normal cursor-pointer"
              onClick={onSwitchToLogin}
            >
              {t.auth.loginLink}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}