"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import AnimatedButton from "@/components/animated-button"
import AnimatedCard from "@/components/animated-card"
import SlideUpAnimation from "@/components/slide-up-animation"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ChevronLeft, ChevronRight, Camera, Filter, Heart, Bookmark, Play, Download } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { useBasket } from "@/contexts/basket-context"

export default function PoseRecommendationPage() {
  // Renamed component to PoseRecommendationPage
  const [peopleCount, setPeopleCount] = useState(1)
  const [selectedComposition, setSelectedComposition] = useState("")
  const [selectedMood, setSelectedMood] = useState("")
  const [showResults, setShowResults] = useState(false)
  const [activeTab, setActiveTab] = useState("포즈피드") // For results view
  const [selectedFilter, setSelectedFilter] = useState("필터") // For results view
  const { addToBasket } = useBasket()

  const compositions = ["친구", "연인", "가족", "군인", "회사", "동급생", "팀원", "동호회", "동료"]
  const moods = ["행복", "슬픔", "그리움", "신남", "평온", "로맨틱"]

  // Sample pose data based on the interface shown
  const poseData = [
    {
      id: 1,
      type: "couple",
      mood: "romantic",
      images: [
        "/placeholder.svg?height=200&width=200",
        "/placeholder.svg?height=200&width=200",
        "/placeholder.svg?height=200&width=200",
        "/placeholder.svg?height=200&width=200",
      ],
      title: "로맨틱 커플",
      isVideo: true,
      backgroundColor: "bg-pink-100",
    },
    {
      id: 2,
      type: "group",
      mood: "fun",
      images: [
        "/placeholder.svg?height=200&width=200",
        "/placeholder.svg?height=200&width=200",
        "/placeholder.svg?height=200&width=200",
        "/placeholder.svg?height=200&width=200",
        "/placeholder.svg?height=200&width=200",
        "/placeholder.svg?height=200&width=200",
      ],
      title: "친구들과 함께",
      backgroundColor: "bg-blue-100",
    },
    {
      id: 3,
      type: "group",
      mood: "elegant",
      images: [
        "/placeholder.svg?height=200&width=200",
        "/placeholder.svg?height=200&width=200",
        "/placeholder.svg?height=200&width=200",
        "/placeholder.svg?height=200&width=200",
      ],
      title: "우아한 그룹",
      backgroundColor: "bg-purple-100",
    },
    {
      id: 4,
      type: "couple",
      mood: "cute",
      images: [
        "/placeholder.svg?height=200&width=200",
        "/placeholder.svg?height=200&width=200",
        "/placeholder.svg?height=200&width=200",
        "/placeholder.svg?height=200&width=200",
        "/placeholder.svg?height=200&width=200",
        "/placeholder.svg?height=200&width=200",
        "/placeholder.svg?height=200&width=200",
        "/placeholder.svg?height=200&width=200",
      ],
      title: "귀여운 커플",
      backgroundColor: "bg-pink-200",
    },
    {
      id: 5,
      type: "group",
      mood: "dark",
      images: ["/placeholder.svg?height=400&width=400"],
      title: "시크한 그룹",
      backgroundColor: "bg-gray-800",
      isLarge: true,
    },
    {
      id: 6,
      type: "group",
      mood: "colorful",
      images: ["/placeholder.svg?height=200&width=200"],
      title: "컬러풀 그룹",
      backgroundColor: "bg-gradient-to-br from-red-200 to-yellow-200",
      isLarge: true,
    },
  ]

  const tabs = ["포즈픽", "포즈북", "포즈피드", "북마크"]
  const filters = ["필터", "인원수", "분위기", "스타일"]

  const handleSaveToBasket = (pose: (typeof poseData)[0]) => {
    addToBasket({
      imageUrl: pose.images[0],
      title: pose.title,
      poseType: pose.type,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 pb-24">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <SlideUpAnimation>
          <div className="flex items-center gap-4 mb-6 pt-4">
            <Link href="/photo">
              <motion.div whileTap={{ scale: 0.9 }}>
                <AnimatedButton variant="ghost" size="icon">
                  <ArrowLeft className="w-5 h-5" />
                </AnimatedButton>
              </motion.div>
            </Link>
            <div>
              <h1 className="text-2xl font-bold">{showResults ? "PosePicker" : "포즈 설정"}</h1>
              <p className="text-gray-600 text-sm">
                {showResults ? "추천된 포즈를 확인하고 선택하세요" : "원하는 조건을 설정하여 맞춤 포즈를 생성하세요"}
              </p>
            </div>
          </div>
        </SlideUpAnimation>

        {!showResults ? (
          // Pose Settings Section
          <AnimatedCard delay={0.1} className="mb-6">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">포즈 설정</CardTitle>
              <p className="text-gray-600 text-sm">인원수, 구성원, 분위기를 선택해주세요</p>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* People Count */}
              <SlideUpAnimation delay={0.2}>
                <div>
                  <h3 className="font-semibold mb-4">인원수</h3>
                  <div className="flex items-center justify-center gap-4">
                    <AnimatedButton
                      variant="outline"
                      size="icon"
                      onClick={() => setPeopleCount(Math.max(1, peopleCount - 1))}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </AnimatedButton>
                    <motion.div
                      key={peopleCount}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="text-3xl font-bold min-w-[80px] text-center"
                    >
                      {peopleCount}명
                    </motion.div>
                    <AnimatedButton variant="outline" size="icon" onClick={() => setPeopleCount(peopleCount + 1)}>
                      <ChevronRight className="w-4 h-4" />
                    </AnimatedButton>
                  </div>
                </div>
              </SlideUpAnimation>

              {/* Composition */}
              <SlideUpAnimation delay={0.3}>
                <div>
                  <h3 className="font-semibold mb-4">구성원</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {compositions.map((comp, index) => (
                      <motion.div
                        key={comp}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.05 }}
                      >
                        <AnimatedButton
                          variant={selectedComposition === comp ? "default" : "outline"}
                          className="h-12 w-full"
                          onClick={() => setSelectedComposition(comp)}
                        >
                          {comp}
                        </AnimatedButton>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </SlideUpAnimation>

              {/* Mood */}
              <SlideUpAnimation delay={0.4}>
                <div>
                  <h3 className="font-semibold mb-4">분위기</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {moods.map((mood, index) => (
                      <motion.div
                        key={mood}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.05 }}
                      >
                        <AnimatedButton
                          variant={selectedMood === mood ? "default" : "outline"}
                          className="h-12 w-full"
                          onClick={() => setSelectedMood(mood)}
                        >
                          {mood}
                        </AnimatedButton>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </SlideUpAnimation>
            </CardContent>
          </AnimatedCard>
        ) : (
          // Pose Results Section
          <>
            {/* Tabs */}
            <div className="flex border-b bg-white">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-3 text-sm font-medium ${
                    activeTab === tab ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Filter */}
            <div className="p-4 bg-white">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1 bg-transparent">
                  {selectedFilter}
                  <Filter className="w-3 h-3" />
                </Button>
              </div>
            </div>

            {/* Pose Grid */}
            <div className="px-4 pb-4">
              <div className="grid grid-cols-2 gap-4">
                {poseData.map((pose) => (
                  <Card
                    key={pose.id}
                    className={`border-0 shadow-sm overflow-hidden ${
                      pose.isLarge ? "col-span-2" : ""
                    } ${pose.backgroundColor}`}
                  >
                    <CardContent className="p-0 relative">
                      {pose.images.length === 1 ? (
                        // Single large image
                        <div className="relative aspect-square">
                          <Image
                            src={pose.images[0] || "/placeholder.svg"}
                            alt={pose.title}
                            fill
                            className="object-cover"
                          />
                          {pose.isVideo && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                                <Play className="w-6 h-6 text-gray-700 ml-1" />
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        // Grid of multiple images
                        <div
                          className={`grid gap-1 p-2 ${
                            pose.images.length === 4
                              ? "grid-cols-2"
                              : pose.images.length === 6
                                ? "grid-cols-3"
                                : pose.images.length === 8
                                  ? "grid-cols-4"
                                  : "grid-cols-2"
                          }`}
                        >
                          {pose.images.map((image, index) => (
                            <div key={index} className="relative aspect-square">
                              <Image
                                src={image || "/placeholder.svg"}
                                alt={`${pose.title} ${index + 1}`}
                                fill
                                className="object-cover rounded-lg"
                              />
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Overlay with title and actions */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                        <div className="flex items-end justify-between">
                          <h3 className="text-white font-medium text-sm">{pose.title}</h3>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="icon" className="w-8 h-8 text-white hover:bg-white/20">
                              <Heart className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="w-8 h-8 text-white hover:bg-white/20">
                              <Bookmark className="w-4 h-4" />
                            </Button>
                            <motion.div whileTap={{ scale: 0.9 }}>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="w-8 h-8 text-white hover:bg-white/20"
                                onClick={() => handleSaveToBasket(pose)}
                              >
                                <Download className="w-4 h-4" />
                              </Button>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Generate/Action Button */}
        <SlideUpAnimation delay={0.6}>
          <div className="space-y-4">
            {!showResults ? (
              <AnimatedButton className="w-full h-14 text-lg" size="lg" onClick={() => setShowResults(true)}>
                <Camera className="w-5 h-5 mr-2" />
                포즈 추천 받기
              </AnimatedButton>
            ) : (
              <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-40">
                <Link href="/pose_recommendation/edit">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg">
                    선택한 포즈로 촬영하기
                  </Button>
                </Link>
              </div>
            )}

            {/* Selected Settings Summary (only in settings view) */}
            {!showResults && (selectedComposition || selectedMood) && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <AnimatedCard className="bg-blue-50 border-blue-200">
                  <CardContent className="p-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">{peopleCount}명</Badge>
                      {selectedComposition && <Badge variant="secondary">{selectedComposition}</Badge>}
                      {selectedMood && <Badge variant="secondary">{selectedMood}</Badge>}
                    </div>
                  </CardContent>
                </AnimatedCard>
              </motion.div>
            )}
          </div>
        </SlideUpAnimation>
      </div>
    </div>
  )
}
