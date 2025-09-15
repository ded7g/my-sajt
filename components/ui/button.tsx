import type * as React from "react"
import { cn } from "@/lib/utils"

const buttonVariants = {
  variant: {
    default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
    destructive: "bg-destructive text-destructive-foreground shadow hover:bg-destructive/90",
    outline: "border border-input bg-background shadow hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground shadow hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  },
  size: {
    default: "h-9 px-4 py-2",
    sm: "h-8 px-3 py-1 text-sm",
    lg: "h-10 px-6 py-2",
    icon: "h-9 w-9",
  },
}

interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: keyof typeof buttonVariants.variant
  size?: keyof typeof buttonVariants.size
  asChild?: boolean
}

function Button({ className, variant = "default", size = "default", asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? "span" : "button"

  const variantClass = buttonVariants.variant[variant] || buttonVariants.variant.default
  const sizeClass = buttonVariants.size[size] || buttonVariants.size.default

  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
        variantClass,
        sizeClass,
        className,
      )}
      {...props}
    />
  )
}

export { Button, buttonVariants }
