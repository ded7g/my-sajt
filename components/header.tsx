"use client"

import { useLocale } from "@/hooks/use-locale"
import { useAuth } from "@/contexts/auth-context"
import { LocaleSwitcher } from "@/components/locale-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import { AuthDialog } from "@/components/auth/auth-dialog"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Heart, Menu, User, LogOut, Trophy } from "lucide-react"
import { useState } from "react"

export function Header() {
  const { t } = useLocale()
  const { user, logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [authDialogOpen, setAuthDialogOpen] = useState(false)

  const getUserInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Heart className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-xl font-sans">HealthHub</span>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          <a href="/" className="text-sm font-medium transition-colors hover:text-primary">
            {t.nav.home}
          </a>
          <a href="/information" className="text-sm font-medium transition-colors hover:text-primary">
            {t.nav.information}
          </a>
          <a href="/pricing" className="text-sm font-medium transition-colors hover:text-primary">
            {t.nav.pricing}
          </a>
          {user && (
            <a href="/profile" className="text-sm font-medium transition-colors hover:text-primary">
              {t.nav.profile}
            </a>
          )}
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-2">
          <LocaleSwitcher />
          <ThemeToggle />

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="text-xs">{getUserInitials(user.name)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium">{user.name}</p>
                    <p className="w-[200px] truncate text-sm text-muted-foreground">{user.email}</p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Trophy className="h-3 w-3" />
                      <span>
                        {user.experience} {t.experience.points}
                      </span>
                    </div>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <a href="/profile" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {t.nav.profile}
                  </a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="flex items-center gap-2">
                  <LogOut className="h-4 w-4" />
                  {t.auth.logout}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button className="hidden lg:inline-flex" onClick={() => setAuthDialogOpen(true)}>
              {t.auth.loginButton}
            </Button>
          )}

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                <div className="flex items-center gap-2 pb-4 border-b">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                    <Heart className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="font-bold text-xl font-sans">HealthHub</span>
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href="/"
                    className="flex items-center gap-2 text-lg font-medium py-2 px-3 rounded-md hover:bg-accent transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {t.nav.home}
                  </a>
                  <a
                    href="/information"
                    className="flex items-center gap-2 text-lg font-medium py-2 px-3 rounded-md hover:bg-accent transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {t.nav.information}
                  </a>
                  <a
                    href="/pricing"
                    className="flex items-center gap-2 text-lg font-medium py-2 px-3 rounded-md hover:bg-accent transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {t.nav.pricing}
                  </a>
                  {user && (
                    <a
                      href="/profile"
                      className="flex items-center gap-2 text-lg font-medium py-2 px-3 rounded-md hover:bg-accent transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {t.nav.profile}
                    </a>
                  )}
                </div>

                <div className="pt-4 border-t">
                  {user ? (
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">
                        <p className="font-medium">{user.name}</p>
                        <div className="flex items-center gap-1">
                          <Trophy className="h-3 w-3" />
                          <span>
                            {user.experience} {t.experience.points}
                          </span>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full bg-transparent"
                        onClick={() => {
                          logout()
                          setIsOpen(false)
                        }}
                      >
                        {t.auth.logout}
                      </Button>
                    </div>
                  ) : (
                    <Button
                      className="w-full"
                      onClick={() => {
                        setAuthDialogOpen(true)
                        setIsOpen(false)
                      }}
                    >
                      {t.auth.loginButton}
                    </Button>
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <AuthDialog isOpen={authDialogOpen} onClose={() => setAuthDialogOpen(false)} />
    </header>
  )
}
