"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { type ReactNode, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

const AnimatedCard = forwardRef<HTMLDivElement, AnimatedCardProps>(({ children, className, delay = 0 }, ref) => {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay,
      }}
    >
      <Card className={cn("transition-all duration-200", className)}>{children}</Card>
    </motion.div>
  )
})

AnimatedCard.displayName = "AnimatedCard"

export default AnimatedCard
