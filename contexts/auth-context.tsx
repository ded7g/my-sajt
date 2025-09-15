"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface User {
  id: string
  email: string
  name: string
  experience: number
  registeredAt: string
  hasSubscription: boolean
  subscriptionExpiresAt?: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  register: (email: string, password: string, name: string) => Promise<boolean>
  logout: () => void
  addExperience: (amount: number) => void
  purchaseSubscription: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Загружаем данные пользователя из localStorage при инициализации
    const savedUser = localStorage.getItem("healthhub-user")
    if (savedUser) {
      const userData = JSON.parse(savedUser)
      if (userData.subscriptionExpiresAt && new Date(userData.subscriptionExpiresAt) < new Date()) {
        userData.hasSubscription = false
        userData.subscriptionExpiresAt = undefined
        localStorage.setItem("healthhub-user", JSON.stringify(userData))
      }
      setUser(userData)
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Получаем сохраненных пользователей
      const users = JSON.parse(localStorage.getItem("healthhub-users") || "[]")
      const foundUser = users.find((u: any) => u.email === email && u.password === password)

      if (foundUser) {
        const userWithoutPassword = {
          id: foundUser.id,
          email: foundUser.email,
          name: foundUser.name,
          experience: foundUser.experience || 0,
          registeredAt: foundUser.registeredAt,
          hasSubscription: foundUser.hasSubscription || false,
          subscriptionExpiresAt: foundUser.subscriptionExpiresAt,
        }

        if (
          userWithoutPassword.subscriptionExpiresAt &&
          new Date(userWithoutPassword.subscriptionExpiresAt) < new Date()
        ) {
          userWithoutPassword.hasSubscription = false
          userWithoutPassword.subscriptionExpiresAt = undefined
        }

        setUser(userWithoutPassword)
        localStorage.setItem("healthhub-user", JSON.stringify(userWithoutPassword))
        return true
      }
      return false
    } catch (error) {
      console.error("Login error:", error)
      return false
    }
  }

  const register = async (email: string, password: string, name: string): Promise<boolean> => {
    try {
      // Получаем существующих пользователей
      const users = JSON.parse(localStorage.getItem("healthhub-users") || "[]")

      // Проверяем, не существует ли уже пользователь с таким email
      if (users.find((u: any) => u.email === email)) {
        return false
      }

      // Создаем нового пользователя
      const newUser = {
        id: Date.now().toString(),
        email,
        password,
        name,
        experience: 0,
        registeredAt: new Date().toISOString(),
        hasSubscription: false,
      }

      users.push(newUser)
      localStorage.setItem("healthhub-users", JSON.stringify(users))

      // Автоматически входим в систему
      const userWithoutPassword = {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        experience: newUser.experience,
        registeredAt: newUser.registeredAt,
        hasSubscription: newUser.hasSubscription,
      }
      setUser(userWithoutPassword)
      localStorage.setItem("healthhub-user", JSON.stringify(userWithoutPassword))

      return true
    } catch (error) {
      console.error("Registration error:", error)
      return false
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("healthhub-user")
  }

  const addExperience = (amount: number) => {
    if (!user) return

    const updatedUser = { ...user, experience: user.experience + amount }
    setUser(updatedUser)
    localStorage.setItem("healthhub-user", JSON.stringify(updatedUser))

    // Также обновляем в списке всех пользователей
    const users = JSON.parse(localStorage.getItem("healthhub-users") || "[]")
    const userIndex = users.findIndex((u: any) => u.id === user.id)
    if (userIndex !== -1) {
      users[userIndex].experience = updatedUser.experience
      localStorage.setItem("healthhub-users", JSON.stringify(users))
    }
  }

  const purchaseSubscription = () => {
    if (!user) return

    const expirationDate = new Date()
    expirationDate.setMonth(expirationDate.getMonth() + 1) // Подписка на месяц

    const updatedUser = {
      ...user,
      hasSubscription: true,
      subscriptionExpiresAt: expirationDate.toISOString(),
    }
    setUser(updatedUser)
    localStorage.setItem("healthhub-user", JSON.stringify(updatedUser))

    // Также обновляем в списке всех пользователей
    const users = JSON.parse(localStorage.getItem("healthhub-users") || "[]")
    const userIndex = users.findIndex((u: any) => u.id === user.id)
    if (userIndex !== -1) {
      users[userIndex].hasSubscription = true
      users[userIndex].subscriptionExpiresAt = expirationDate.toISOString()
      localStorage.setItem("healthhub-users", JSON.stringify(users))
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        addExperience,
        purchaseSubscription,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
