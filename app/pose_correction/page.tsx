"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, RotateCcw, Move, Crop, RotateCw } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import Link from "next/link"

export default function PoseCorrectionPage() {
  // Renamed component to PoseCorrectionPage
  const [rotation, setRotation] = useState([0])
  const [cropX, setCropX] = useState([0])
  const [cropY, setCropY] = useState([0])
  const [scale, setScale] = useState([100])

  const resetAdjustments = () => {
    setRotation([0])
    setCropX([0])
    setCropY([0])
    setScale([100])
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 pb-24">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6 pt-4">
          <Link href="/photo">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Frame Adjustments</h1>
            <p className="text-gray-600 text-sm">Perfect your photo composition</p>
          </div>
        </div>

        {/* Preview Area */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center relative overflow-hidden">
              <div
                className="w-3/4 h-3/4 bg-blue-200 rounded-lg flex items-center justify-center text-gray-600"
                style={{
                  transform: `rotate(${rotation[0]}deg) scale(${scale[0] / 100}) translate(${cropX[0]}px, ${cropY[0]}px)`,
                }}
              >
                <span className="text-sm">Preview Image</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Adjustment Controls */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Adjustments</CardTitle>
              <Button variant="outline" size="sm" onClick={resetAdjustments}>
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Rotation */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <RotateCw className="w-4 h-4" />
                <span className="text-sm font-medium">Rotation</span>
                <span className="text-sm text-gray-500 ml-auto">{rotation[0]}°</span>
              </div>
              <Slider value={rotation} onValueChange={setRotation} max={180} min={-180} step={1} className="w-full" />
            </div>

            {/* Scale */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Crop className="w-4 h-4" />
                <span className="text-sm font-medium">Scale</span>
                <span className="text-sm text-gray-500 ml-auto">{scale[0]}%</span>
              </div>
              <Slider value={scale} onValueChange={setScale} max={200} min={50} step={1} className="w-full" />
            </div>

            {/* Horizontal Position */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Move className="w-4 h-4" />
                <span className="text-sm font-medium">Horizontal</span>
                <span className="text-sm text-gray-500 ml-auto">{cropX[0]}px</span>
              </div>
              <Slider value={cropX} onValueChange={setCropX} max={50} min={-50} step={1} className="w-full" />
            </div>

            {/* Vertical Position */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Move className="w-4 h-4 rotate-90" />
                <span className="text-sm font-medium">Vertical</span>
                <span className="text-sm text-gray-500 ml-auto">{cropY[0]}px</span>
              </div>
              <Slider value={cropY} onValueChange={setCropY} max={50} min={-50} step={1} className="w-full" />
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Button variant="outline" onClick={() => setRotation([rotation[0] - 90])}>
            <RotateCcw className="w-4 h-4 mr-2" />
            Rotate Left
          </Button>
          <Button variant="outline" onClick={() => setRotation([rotation[0] + 90])}>
            <RotateCw className="w-4 h-4 mr-2" />
            Rotate Right
          </Button>
        </div>

        {/* Apply Button */}
        <Button className="w-full h-12 text-lg">Apply Adjustments</Button>
      </div>
    </div>
  )
}
