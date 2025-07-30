import Link from "next/link"
import AnimatedButton from "@/components/animated-button"
import AnimatedCard from "@/components/animated-card"
import SlideUpAnimation from "@/components/slide-up-animation"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Settings, Sparkles, Users } from "lucide-react"

export default function PhotoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-4 pb-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <SlideUpAnimation>
          <div className="text-center mb-12 pt-8">
            <h1 className="text-4xl md:text-5xl font-thin mb-4">Photo Studio</h1>
            <p className="text-xl text-gray-600">Choose your creative path</p>
          </div>
        </SlideUpAnimation>

        {/* Main Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Link href="/pose_recommendation">
            <AnimatedCard
              delay={0.1}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Users className="w-10 h-10 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-semibold">Pose Recommendations</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Get AI-powered pose suggestions based on your group size, relationship, and desired mood
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Friends</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Family</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Couples</span>
                </div>
              </CardContent>
            </AnimatedCard>
          </Link>

          <Link href="/pose_correction">
            {" "}
            {/* Updated link */}
            <AnimatedCard
              delay={0.2}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <Settings className="w-10 h-10 text-purple-600" />
                </div>
                <CardTitle className="text-2xl font-semibold">Frame Adjustments</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Professional frame corrections and adjustments to perfect your composition
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Crop</span>
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Rotate</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Align</span>
                </div>
              </CardContent>
            </AnimatedCard>
          </Link>
        </div>

        {/* Quick Actions */}
        <SlideUpAnimation delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <AnimatedButton variant="outline" className="h-20 flex flex-col gap-2 bg-transparent">
              <Camera className="w-6 h-6" />
              <span className="text-sm">Quick Shot</span>
            </AnimatedButton>
            <AnimatedButton variant="outline" className="h-20 flex flex-col gap-2 bg-transparent">
              <Sparkles className="w-6 h-6" />
              <span className="text-sm">Filters</span>
            </AnimatedButton>
            <AnimatedButton variant="outline" className="h-20 flex flex-col gap-2 bg-transparent">
              <Settings className="w-6 h-6" />
              <span className="text-sm">Settings</span>
            </AnimatedButton>
            <AnimatedButton variant="outline" className="h-20 flex flex-col gap-2 bg-transparent">
              <Users className="w-6 h-6" />
              <span className="text-sm">Gallery</span>
            </AnimatedButton>
          </div>
        </SlideUpAnimation>
      </div>
    </div>
  )
}
