"use client"

import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { useEffect, useState } from "react"

const cn = (...inputs: (string | undefined)[]) => twMerge(clsx(inputs))

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
}

export function Button({ 
  variant = "primary", 
  size = "md", 
  className = "", 
  ...props 
}: ButtonProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const baseStyles = "rounded-lg font-medium transition-all duration-200 focus:outline-none"
  
  const variants = {
    primary: "bg-[#FFD700] hover:bg-[#00C9A7] text-[#0D1B2A] hover:text-[#F5F5F5]",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100"
  }

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg"
  }

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  )
}
