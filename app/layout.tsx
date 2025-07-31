import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import FloatingNavigation from "@/components/floating-navigation"
import PageTransition from "@/components/page-transition"
import { BasketProvider } from "@/contexts/basket-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PHOTOGRAY - Professional Photo Booth Experience",
  description: "AI-powered pose recommendations and professional frame adjustments for perfect photos",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BasketProvider>
          <PageTransition>{children}</PageTransition>
          <FloatingNavigation />
        </BasketProvider>
      </body>
    </html>
  )
}
