
import { useState } from "react"
import { ImageIcon } from "lucide-react"

export default function Component() {
  // Simulate selected poses - showing fewer poses selected
  const [selectedPoses] = useState([])

  const slotsPerFrame = 4
  const framesPerRow = 2
  const slotsPerRow = slotsPerFrame * framesPerRow
  const totalRows = Math.ceil(Math.max(8, selectedPoses.length) / slotsPerRow)

  const renderPhotoSlot = (index: number) => {
    const poseIndex = index
    const hasPose = poseIndex < selectedPoses.length

    return (
      <div key={index} className="aspect-[126/100] bg-black flex items-center justify-center overflow-hidden">
        {hasPose ? (
          <img
            src={selectedPoses[poseIndex] || "/placeholder.svg"}
            alt={`선택된 포즈 ${poseIndex + 1}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-white text-sm font-medium tracking-wide">phoTo</span>
        )}
      </div>
    )
  }

  const renderFramePair = (rowIndex: number) => {
    const startIndex = rowIndex * slotsPerRow

    return (
      <div key={rowIndex} className="flex justify-center gap-2 mb-32">
        {/* Left frame */}
        <div className="w-48 bg-white p-3 shadow-[0_35px_60px_-12px_rgba(0,0,0,0.6)]">
          <div className="space-y-2">
            {Array.from({ length: slotsPerFrame }, (_, i) => renderPhotoSlot(startIndex + i))}
          </div>
        </div>

        {/* Right frame */}
        <div className="w-48 bg-white p-3 shadow-[0_35px_60px_-12px_rgba(0,0,0,0.6)]">
          <div className="space-y-2">
            {Array.from({ length: slotsPerFrame }, (_, i) => renderPhotoSlot(startIndex + slotsPerFrame + i))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-300 font-sans relative">
      {/* Otter background image in bottom-left corner - behind all elements */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-10 pointer-events-none overflow-hidden z-0">
        <img
          src="/otter.png"
          alt="Otter illustration background"
          className="w-full h-full object-contain object-bottom-right"
          style={{ transform: "translate(-20%, 8%)" }}
        />
      </div>

      {/* Top Bar Header Section */}
      <div className="bg-white w-full shadow-sm relative z-10">
        <div className="max-w-6xl mx-auto px-8 py-10">
          <h1 className="text-3xl font-bold text-black mb-4 tracking-tight">내 장바구니</h1>
          <div className="flex items-center gap-3">
            <ImageIcon className="w-5 h-5 text-gray-600" strokeWidth={1.5} />
            <p className="text-gray-600 text-lg font-normal">저장된 포즈 사진들</p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-8 py-16 relative z-10">
        <div className="flex flex-col items-center">
          {Array.from({ length: totalRows }, (_, rowIndex) => renderFramePair(rowIndex))}
        </div>
      </div>
    </div>
  )
}

