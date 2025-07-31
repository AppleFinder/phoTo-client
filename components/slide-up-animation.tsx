"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SlideUpAnimationProps {
  children: ReactNode
  delay?: number
}

export default function SlideUpAnimation({ children, delay = 0 }: SlideUpAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}
