import type * as React from "react"
import { cn } from "@/lib/utils"

const buttonVariants = {
  variant: {
    default: "bg-blue-600 text-white shadow hover:bg-blue-700",
    destructive: "bg-red-600 text-white shadow hover:bg-red-700",
    outline: "border border-gray-300 bg-white shadow hover:bg-gray-50",
    secondary: "bg-gray-200 text-gray-900 shadow hover:bg-gray-300",
    ghost: "hover:bg-gray-100",
    link: "text-blue-600 underline-offset-4 hover:underline",
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
