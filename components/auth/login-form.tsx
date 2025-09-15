"use client"

import type React from "react"

import { useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, EyeOff } from "lucide-react"
import { useLocale } from "@/hooks/use-locale"

interface LoginFormProps {
  onSwitchToRegister: () => void
  onClose: () => void
}

export function LoginForm({ onSwitchToRegister, onClose }: LoginFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const { t, isLoading: localeLoading } = useLocale()

  if (localeLoading) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="flex items-center justify-center p-6">
          <div className="text-center">Loading...</div>
        </CardContent>
      </Card>
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    if (!email || !password) {
      setError(t.auth.fillAllFields)
      setIsLoading(false)
      return
    }

    const success = await login(email, password)
    if (success) {
      onClose()
    } else {
      setError(t.auth.invalidCredentials)
    }
    setIsLoading(false)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">{t.auth.login}</CardTitle>
        <CardDescription className="text-center">{t.auth.loginDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="cursor-text"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">{t.auth.password}</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder={t.auth.enterPassword}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="cursor-text"
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

          <Button type="submit" className="w-full cursor-pointer" disabled={isLoading}>
            {isLoading ? t.auth.loggingIn : t.auth.loginButton}
          </Button>

          <div className="text-center text-sm">
            <span className="text-muted-foreground">{t.auth.noAccount} </span>
            <Button
              type="button"
              variant="link"
              className="p-0 h-auto font-normal cursor-pointer"
              onClick={onSwitchToRegister}
            >
              {t.auth.registerLink}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
