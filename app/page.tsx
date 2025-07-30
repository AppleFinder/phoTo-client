"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import AnimatedButton from "@/components/animated-button"
import AnimatedCard from "@/components/animated-card"
import SlideUpAnimation from "@/components/slide-up-animation"
import { CardContent } from "@/components/ui/card"
import { Camera, Sparkles, Zap } from "lucide-react"
import TopNavigation from "@/components/top-navigation" // Import TopNavigation

export default function HomePage() {
  const [hoveredSection, setHoveredSection] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <TopNavigation /> {/* Use the new TopNavigation component */}
      {/* Main Content - Three Sections in Vertical Grid */}
      <div className="w-full grid grid-cols-3 gap-[5px] h-screen">
        {/* Left Section - Consultation */}
        <motion.div
          className="relative overflow-hidden cursor-pointer"
          onMouseEnter={() => setHoveredSection(0)}
          onMouseLeave={() => setHoveredSection(null)}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0">
            <Image
              src="/images/consultation-section.png"
              alt="PHOTOGRAY Consultation"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20" />
            {/* Spotlight Effect */}
            {hoveredSection === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1.2 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 40%, transparent 70%)`,
                }}
              />
            )}
          </div>
          <div className="absolute bottom-8 left-6 text-white">
            <motion.p
              className="text-xs font-medium mb-2 opacity-80"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 0.8 }}
              transition={{ delay: 0.2 }}
            >
              CONSULTATION REQUEST
            </motion.p>
            <motion.h2
              className="text-lg font-bold"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              포토그레이 창업 문의
            </motion.h2>
          </div>
        </motion.div>

        {/* Center Section - Signature */}
        <motion.div
          className="relative overflow-hidden cursor-pointer"
          onMouseEnter={() => setHoveredSection(1)}
          onMouseLeave={() => setHoveredSection(null)}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0">
            <Image src="/images/signature-section.jpeg" alt="PHOTOGRAY Signature" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/20" />
            {/* Spotlight Effect */}
            {hoveredSection === 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1.2 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 40%, transparent 70%)`,
                }}
              />
            )}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <motion.p
                className="text-xs font-medium mb-2 opacity-80"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 0.8 }}
                transition={{ delay: 0.2 }}
              >
                PHOTOGRAY SIGNATURE
              </motion.p>
              <motion.h2
                className="text-2xl font-bold mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                콜라보/제휴 문의
              </motion.h2>
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                <Link href="/collaboration">
                  <motion.button
                    className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    제휴 문의하기
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Right Section - App Download */}
        <motion.div
          className="relative overflow-hidden cursor-pointer"
          onMouseEnter={() => setHoveredSection(2)}
          onMouseLeave={() => setHoveredSection(null)}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0">
            <Image src="/images/app-section.png" alt="PHOTOGRAY App" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/10" />
            {/* Spotlight Effect */}
            {hoveredSection === 2 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1.2 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 40%, transparent 70%)`,
                }}
              />
            )}
          </div>
          <div className="absolute bottom-8 right-6 text-white text-right">
            <motion.p
              className="text-xs font-medium mb-2 opacity-80"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 0.8 }}
              transition={{ delay: 0.2 }}
            >
              PHOTOGRAY APP
            </motion.p>
            <motion.h2
              className="text-lg font-bold"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              앱 다운로드
            </motion.h2>
          </div>
        </motion.div>
      </div>
      {/* Features Section - Unchanged */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SlideUpAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-thin mb-6">Redefine Your Photos</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experience the future of photo creation with intelligent pose suggestions and professional frame
                adjustments
              </p>
            </div>
          </SlideUpAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedCard delay={0.1} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Camera className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Smart Poses</h3>
                <p className="text-gray-600 leading-relaxed">
                  AI-powered pose recommendations based on the number of people, relationship, and desired mood
                </p>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard delay={0.2} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Frame Perfect</h3>
                <p className="text-gray-600 leading-relaxed">
                  Professional frame adjustments and corrections to make every shot picture-perfect
                </p>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard delay={0.3} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Instant Edit</h3>
                <p className="text-gray-600 leading-relaxed">
                  Real-time photo editing with professional filters and adjustments at your fingertips
                </p>
              </CardContent>
            </AnimatedCard>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <SlideUpAnimation>
            <h2 className="text-4xl md:text-5xl font-thin mb-6">Ready to Create?</h2>
            <p className="text-xl opacity-90 mb-8">
              Join thousands of creators who trust PHOTOGRAY for their perfect shots
            </p>
            <Link href="/pose_correction">
              <AnimatedButton size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg">
                Get Started Now
              </AnimatedButton>
            </Link>
          </SlideUpAnimation>
        </div>
      </section>
    </div>
  )
}
