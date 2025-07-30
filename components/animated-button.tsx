"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { type ReactNode, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps {
  children: ReactNode
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  onClick?: () => void
  disabled?: boolean
  type?: "button" | "submit" | "reset"
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, className, variant, size, onClick, disabled, type, ...props }, ref) => {
    return (
      <motion.div
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.02 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17,
        }}
      >
        <Button
          ref={ref}
          className={cn("transition-all duration-200", className)}
          variant={variant}
          size={size}
          onClick={onClick}
          disabled={disabled}
          type={type}
          {...props}
        >
          {children}
        </Button>
      </motion.div>
    )
  },
)

AnimatedButton.displayName = "AnimatedButton"

export default AnimatedButton
