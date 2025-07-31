"use client"

import type React from "react"
import { useState, useRef } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Upload, RotateCcw, Sun, Contrast, Palette, Download } from "lucide-react"
import Image from "next/image"
import Slider from "@radix-ui/react-slider"

const Page: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [brightness, setBrightness] = useState([100])
  const [contrast, setContrast] = useState([100])
  const [saturation, setSaturation] = useState([100])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const resetFilters = () => {
    setBrightness([100])
    setContrast([100])
    setSaturation([100])
  }

  const imageStyle = {
    filter: `brightness(${brightness[0]}%) contrast(${contrast[0]}%) saturate(${saturation[0]}%)`,
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 pb-24">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6 pt-4">
          <Link href="/pose_recommendation">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Photo Editor</h1>
            <p className="text-gray-600 text-sm">Upload and edit your photos</p>
          </div>
        </div>

        {/* Upload Section */}
        {!uploadedImage ? (
          <Card className="mb-6">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Upload className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Upload Your Photo</h3>
                <p className="text-gray-600 mb-6">Choose an image to start editing</p>
                <Button onClick={() => fileInputRef.current?.click()}>Select Image</Button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
            </CardContent>
          </Card>
        ) : (
          <>
            {/* Image Preview */}
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={uploadedImage || "/placeholder.svg"}
                    alt="Uploaded image"
                    fill
                    className="object-cover"
                    style={imageStyle}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Editing Controls */}
            <Card className="mb-6">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Adjustments</h3>
                  <Button variant="outline" size="sm" onClick={resetFilters}>
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reset
                  </Button>
                </div>

                {/* Brightness */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Sun className="w-4 h-4" />
                    <span className="text-sm font-medium">Brightness</span>
                    <span className="text-sm text-gray-500 ml-auto">{brightness[0]}%</span>
                  </div>
                  <Slider
                    value={brightness}
                    onValueChange={setBrightness}
                    max={200}
                    min={0}
                    step={1}
                    className="w-full"
                  />
                </div>

                {/* Contrast */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Contrast className="w-4 h-4" />
                    <span className="text-sm font-medium">Contrast</span>
                    <span className="text-sm text-gray-500 ml-auto">{contrast[0]}%</span>
                  </div>
                  <Slider value={contrast} onValueChange={setContrast} max={200} min={0} step={1} className="w-full" />
                </div>

                {/* Saturation */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Palette className="w-4 h-4" />
                    <span className="text-sm font-medium">Saturation</span>
                    <span className="text-sm text-gray-500 ml-auto">{saturation[0]}%</span>
                  </div>
                  <Slider
                    value={saturation}
                    onValueChange={setSaturation}
                    max={200}
                    min={0}
                    step={1}
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" onClick={() => fileInputRef.current?.click()}>
                <Upload className="w-4 h-4 mr-2" />
                New Image
              </Button>
              <Button>
                <Download className="w-4 h-4 mr-2" />
                Save Photo
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Page
