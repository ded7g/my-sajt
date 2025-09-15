"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { LoginForm } from "./login-form"
import { RegisterForm } from "./register-form"

interface AuthDialogProps {
  isOpen: boolean
  onClose: () => void
  defaultMode?: "login" | "register"
}

export function AuthDialog({ isOpen, onClose, defaultMode = "login" }: AuthDialogProps) {
  const [mode, setMode] = useState<"login" | "register">(defaultMode)

  const handleClose = () => {
    onClose()
    // Сбрасываем режим на login при закрытии
    setTimeout(() => setMode("login"), 200)
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {mode === "login" ? (
          <LoginForm onSwitchToRegister={() => setMode("register")} onClose={handleClose} />
        ) : (
          <RegisterForm onSwitchToLogin={() => setMode("login")} onClose={handleClose} />
        )}
      </DialogContent>
    </Dialog>
  )
}
