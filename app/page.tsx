"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import AnimatedButton from "@/components/animated-button"
import AnimatedCard from "@/components/animated-card"
import SlideUpAnimation from "@/components/slide-up-animation"
import { CardContent } from "@/components/ui/card"
import { Camera, Sparkles } from "lucide-react"
import TopNavigation from "@/components/top-navigation"

export default function HomePage() {
  const [hoveredSection, setHoveredSection] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <TopNavigation />
      <div className="relative w-full h-screen overflow-hidden">
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* Left Section - Consultation */}
          <motion.div
            className="min-w-full relative overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredSection(0)}
            onMouseLeave={() => setHoveredSection(null)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={() => setCurrentSlide(1)}
          >
            <div className="absolute inset-0">
              <Image
                src="/images/consultation-ranked-badge.jpeg"
                alt="PHOTOGRAY Consultation"
                fill
                className="object-contain object-center"
                priority
              />
              <div className="absolute inset-0 bg-black/20" />
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
                className="text-xs font-medium mb-2 opacity-90 drop-shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 0.9 }}
                transition={{ delay: 0.2 }}
              >
                CONSULTATION REQUEST
              </motion.p>
              <motion.h2
                className="text-lg font-bold drop-shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                주간 랭킹

              </motion.h2>
            </div>
          </motion.div>

          {/* Center Section - Signature */}
          <motion.div
            className="min-w-full relative overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredSection(1)}
            onMouseLeave={() => setHoveredSection(null)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={() => setCurrentSlide(2)}
          >
            <div className="absolute inset-0">
              <Image
                src="/images/new-signature-section.jpeg"
                alt="PHOTOGRAY Signature"
                fill
                className="object-contain object-center"
                style={{ objectPosition: "center center" }}
              />
              <div className="absolute inset-0 bg-black/30" />
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
                  className="text-xs font-medium mb-2 opacity-90"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 0.9 }}
                  transition={{ delay: 0.2 }}
                >
                  PHOTOGRAY SIGNATURE
                </motion.p>
                <motion.h2
                  className="text-2xl font-bold mb-6 drop-shadow-lg"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  콜라보/제휴 문의
                </motion.h2>
                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                  <Link href="/collaboration">
                    <motion.button
                      className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors shadow-lg"
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
            className="min-w-full relative overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredSection(2)}
            onMouseLeave={() => setHoveredSection(null)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={() => setCurrentSlide(0)}
          >
            <div className="absolute inset-0">
              <Image src="/images/app-section.png" alt="PHOTOGRAY App" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/10" />
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

        {/* Horizontal Progress Bar */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-white/30 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-white rounded-full"
            initial={{ width: "33.33%" }}
            animate={{
              width: "33.33%",
              x: `${currentSlide * 100}%`,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SlideUpAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-thin mb-6">주간랭킹</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experience the future of photo creation with intelligent pose suggestions and professional frame
                adjustments
              </p>
            </div>
          </SlideUpAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/pose_recommendation">
              <AnimatedCard
                delay={0.1}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Camera className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">포즈 추천</h3>
                  <p className="text-gray-600 leading-relaxed">
                    AI 기반 포즈 추천 기능으로 인원수와 관계에 맞는 최적의 포즈를 제안합니다
                  </p>
                </CardContent>
              </AnimatedCard>
            </Link>

            <Link href="/pose_correction">
              <AnimatedCard
                delay={0.2}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">프레임 보정</h3>
                  <p className="text-gray-600 leading-relaxed">
                    전문적인 프레임 조정과 보정으로 완벽한 사진을 만들어보세요
                  </p>
                </CardContent>
              </AnimatedCard>
            </Link>

            <Link href="/instant_edit">
              <AnimatedCard
                delay={0.3}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Image
                      src="/images/instant-edit-icon.jpeg"
                      alt="Instant Edit"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">다운로드</h3>
                  <p className="text-gray-600 leading-relaxed">빠른 바로가기를 위한 다운로드 chrome, safari 지원</p>
                </CardContent>
              </AnimatedCard>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section with Credits */}
      <section className="py-32 bg-black text-white relative">
        <div className="max-w-4xl mx-auto px-4">
          {/* Credits - Top Left */}
          <SlideUpAnimation>
            <div className="absolute top-8 left-8 text-left">
              <div className="space-y-2">
                <p className="text-sm opacity-90">
                  <span className="font-medium">Company:</span> Kyunghee University
                </p>
                <div className="space-y-1">
                  <p className="text-sm opacity-90 font-medium">Team:</p>
                  <div className="text-sm opacity-80 space-y-1 ml-4">
                    <p>송희경</p>
                    <p>박찬희</p>
                    <p>고명주</p>
                    <p>오소원</p>
                    <p>오수민</p>
                    <p>박서준</p>
                  </div>
                </div>
              </div>
            </div>
          </SlideUpAnimation>

          {/* Button - Center */}
          <div className="text-center">
            <SlideUpAnimation delay={0.2}>
              <Link href="/pose_correction">
                <AnimatedButton size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg">
                  Get Started Now
                </AnimatedButton>
              </Link>
            </SlideUpAnimation>
          </div>
        </div>
      </section>
    </div>
  )
}