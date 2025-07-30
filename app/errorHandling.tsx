"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { XCircle } from "lucide-react" // iOS 느낌의 오류 아이콘
import { Button } from "@/components/ui/button"

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="text-center max-w-md"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
          className="mb-6"
        >
          <XCircle className="w-24 h-24 text-red-500 mx-auto" />
        </motion.div>

        <h1 className="text-4xl font-bold mb-3">Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <Link href="/">
          <Button size="lg" className="bg-black text-white hover:bg-gray-800 transition-colors">
            Go to Home
          </Button>
        </Link>
      </motion.div>
    </div>
  )
}
