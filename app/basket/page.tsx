import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Trash2, Download, Share, Grid, Calendar } from "lucide-react"
import Image from "next/image"

export default function BasketPage() {
  // This would normally come from the basket context, but for demo purposes:
  const basketItems = [
    {
      id: "1",
      imageUrl: "/placeholder.svg?height=200&width=200",
      title: "로맨틱 커플 포즈",
      timestamp: Date.now() - 3600000,
      poseType: "couple",
    },
    {
      id: "2",
      imageUrl: "/placeholder.svg?height=200&width=200",
      title: "친구들과 함께",
      timestamp: Date.now() - 7200000,
      poseType: "group",
    },
    {
      id: "3",
      imageUrl: "/placeholder.svg?height=200&width=200",
      title: "우아한 그룹",
      timestamp: Date.now() - 10800000,
      poseType: "group",
    },
  ]

  const formatTime = (timestamp: number) => {
    const diff = Date.now() - timestamp
    const hours = Math.floor(diff / (1000 * 60 * 60))
    if (hours < 1) return "방금 전"
    if (hours < 24) return `${hours}시간 전`
    return `${Math.floor(hours / 24)}일 전`
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-white border-b p-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">My Basket</h1>
              <p className="text-gray-600 text-sm">저장된 포즈 추천 사진들</p>
            </div>
            <Badge variant="secondary" className="text-sm">
              {basketItems.length}개 저장됨
            </Badge>
          </div>
        </div>

        {/* Stats */}
        <Card className="m-4 border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">{basketItems.length}</div>
                <div className="text-gray-600 text-sm">저장된 사진</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">
                  {basketItems.filter((item) => item.poseType === "couple").length}
                </div>
                <div className="text-gray-600 text-sm">커플 포즈</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">
                  {basketItems.filter((item) => item.poseType === "group").length}
                </div>
                <div className="text-gray-600 text-sm">그룹 포즈</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="px-4 mb-4">
          <div className="grid grid-cols-3 gap-3">
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <Download className="w-4 h-4" />
              전체 다운로드
            </Button>
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <Share className="w-4 h-4" />
              공유하기
            </Button>
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <Trash2 className="w-4 h-4" />
              전체 삭제
            </Button>
          </div>
        </div>

        {/* Saved Photos Grid */}
        <Card className="m-4 border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Grid className="w-5 h-5" />
              저장된 포즈 사진들
            </CardTitle>
          </CardHeader>
          <CardContent>
            {basketItems.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Grid className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">저장된 사진이 없습니다</h3>
                <p className="text-gray-600 mb-6">포즈 추천에서 마음에 드는 사진을 저장해보세요</p>
                <Button>포즈 추천 보러가기</Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {basketItems.map((item) => (
                  <div key={item.id} className="relative group">
                    <div className="aspect-square relative rounded-lg overflow-hidden">
                      <Image src={item.imageUrl || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute top-2 right-2 flex gap-2">
                          <Button size="icon" variant="secondary" className="w-8 h-8">
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button size="icon" variant="secondary" className="w-8 h-8">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <h4 className="font-medium text-sm">{item.title}</h4>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                        <Calendar className="w-3 h-3" />
                        {formatTime(item.timestamp)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
