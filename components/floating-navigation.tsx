"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Home, Camera, ShoppingBasket } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { useBasket } from "@/contexts/basket-context"
import Image from "next/image"

export default function FloatingNavigation() {
  const pathname = usePathname()
  const { basketItems, recentlyAdded } = useBasket()

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/pose_recommendation", icon: Camera, label: "Poses" },
    { href: "/pose_correction", icon: "custom", label: "Frames" }, // Updated href
    { href: "/basket", icon: ShoppingBasket, label: "Basket" },
  ]

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.5 }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 -ml-[150px] z-50"
    >
      <div className="bg-white rounded-full px-4 py-1 shadow-xl border border-gray-200/50">
        <div className="flex items-center justify-center gap-6">
          {navItems.map((item, index) => {
            const Icon = item.icon
            const isActive =
              pathname === item.href ||
              (item.href === "/pose_recommendation" && pathname.startsWith("/pose_recommendation")) ||
              (item.href === "/pose_correction" && pathname.startsWith("/pose_correction")) || // Updated logic
              (item.href === "/basket" && pathname.startsWith("/basket"))
            const isBasket = item.href === "/basket"
            const isFrames = item.href === "/pose_correction" // Updated check

            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className={cn(
                    "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 relative",
                    isActive ? "bg-black text-white" : "text-gray-600 hover:text-black hover:bg-gray-100",
                  )}
                >
                  <div className="relative">
                    {isFrames ? (
                      <Image
                        src="/images/feed-icon.png"
                        alt="Frames"
                        width={28}
                        height={28}
                        className={cn("w-7 h-7", isActive ? "filter invert" : "")}
                      />
                    ) : (
                      <Icon className="w-7 h-7" />
                    )}

                    {/* Basket item count badge */}
                    {isBasket && basketItems.length > 0 && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
                      >
                        {basketItems.length}
                      </motion.div>
                    )}

                    {/* Recently added animation */}
                    <AnimatePresence>
                      {isBasket && recentlyAdded && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0, x: -20, y: -20 }}
                          animate={{
                            scale: [0, 1.2, 1],
                            opacity: [0, 1, 1, 0],
                            x: [0, 0, 0],
                            y: [0, 0, 0],
                          }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{
                            duration: 1.5,
                            times: [0, 0.3, 0.7, 1],
                          }}
                          className="absolute -top-3 -right-3 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className="text-white text-xs"
                          >
                            ✓
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </Link>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}
