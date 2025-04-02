"use client"

import { ImageIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function Gallery() {
  const [filter, setFilter] = useState<string | null>(null)

  const images = [
    {
      src: "https://images.unsplash.com/photo-1506970845246-18f21d533b20?q=80&w=2070&auto=format&fit=crop",
      alt: "香港天際線 Hong Kong Skyline",
      location: "香港 Hong Kong",
      dayId: "day-1",
      hashtag: "#HongKong",
      day: "Day 1-4",
    },
    {
      src: "https://images.unsplash.com/photo-1536599018102-9f6700e1438f?q=80&w=2428&auto=format&fit=crop",
      alt: "香港夜景 Hong Kong Night View",
      location: "香港 Hong Kong",
      dayId: "day-2",
      hashtag: "#HongKong",
      day: "Day 2",
    },
    {
      src: "https://images.unsplash.com/photo-1558175033-2f825e4d5d7e?q=80&w=2070&auto=format&fit=crop",
      alt: "尖沙咀 Tsim Sha Tsui",
      location: "香港 Hong Kong",
      dayId: "day-3",
      hashtag: "#HongKong",
      day: "Day 3",
    },
    {
      src: "https://images.unsplash.com/photo-1566159266959-19f60e19f1a5?q=80&w=2071&auto=format&fit=crop",
      alt: "香港夜景 Hong Kong Night View",
      location: "香港 Hong Kong",
      dayId: "day-3",
      hashtag: "#HongKong",
      day: "Day 3",
    },
    {
      src: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2071&auto=format&fit=crop",
      alt: "大嶼山大佛 Lantau Island Big Buddha",
      location: "香港 Hong Kong",
      dayId: "day-4",
      hashtag: "#HongKong",
      day: "Day 4",
    },
    {
      src: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2070&auto=format&fit=crop",
      alt: "飛機 Airplane",
      location: "交通 Travel",
      dayId: "day-5",
      hashtag: "#Travel",
      day: "Day 5",
    },
    {
      src: "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?q=80&w=1974&auto=format&fit=crop",
      alt: "熊本城 Kumamoto Castle",
      location: "熊本 Kumamoto",
      dayId: "day-6",
      hashtag: "#Japan #Kumamoto",
      day: "Day 6",
    },
    {
      src: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1974&auto=format&fit=crop",
      alt: "熊本下通商店街 Shimotori Shopping Street",
      location: "熊本 Kumamoto",
      dayId: "day-5",
      hashtag: "#Japan #Kumamoto",
      day: "Day 5",
    },
    {
      src: "https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?q=80&w=2070&auto=format&fit=crop",
      alt: "阿蘇火山 Aso Volcano",
      location: "阿蘇 Aso",
      dayId: "day-7",
      hashtag: "#Japan #Aso",
      day: "Day 7",
    },
    {
      src: "https://images.unsplash.com/photo-1548567117-02328f050eaa?q=80&w=2070&auto=format&fit=crop",
      alt: "日本溫泉 Japanese Onsen",
      location: "日本 Japan",
      dayId: "day-8",
      hashtag: "#Japan #Yufuin",
      day: "Day 8",
    },
    {
      src: "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?q=80&w=2070&auto=format&fit=crop",
      alt: "由布院 Yufuin",
      location: "由布院 Yufuin",
      dayId: "day-8",
      hashtag: "#Japan #Yufuin",
      day: "Day 8-9",
    },
    {
      src: "/images/family-spa-day.png",
      alt: "家庭溫泉體驗 | Family Onsen Experience",
      location: "由布院 Yufuin",
      dayId: "day-8",
      hashtag: "#Japan #Yufuin #FamilySpa",
      day: "Day 8",
    },
    {
      src: "/images/family-cartoon-spa.png",
      alt: "溫泉後的歡樂時光 | Fun time after onsen",
      location: "由布院 Yufuin",
      dayId: "day-8",
      hashtag: "#Japan #Yufuin #FamilyFun",
      day: "Day 8",
    },
    {
      src: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2070&auto=format&fit=crop",
      alt: "柳川遊船 Yanagawa Boat Tour",
      location: "柳川 Yanagawa",
      dayId: "day-10",
      hashtag: "#Japan #Yanagawa",
      day: "Day 10",
    },
    {
      src: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=2070&auto=format&fit=crop",
      alt: "大宰府天滿宮 Dazaifu Tenmangu Shrine",
      location: "大宰府 Dazaifu",
      dayId: "day-11",
      hashtag: "#Japan #Dazaifu",
      day: "Day 11",
    },
    {
      src: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?q=80&w=2070&auto=format&fit=crop",
      alt: "博多運河城 Canal City Hakata",
      location: "福岡 Fukuoka",
      dayId: "day-11",
      hashtag: "#Japan #Fukuoka",
      day: "Day 11",
    },
    {
      src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop",
      alt: "福岡市區 Fukuoka City",
      location: "福岡 Fukuoka",
      dayId: "day-12",
      hashtag: "#Japan #Fukuoka",
      day: "Day 12",
    },
    {
      src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
      alt: "機場 Airport",
      location: "交通 Travel",
      dayId: "day-12",
      hashtag: "#Travel",
      day: "Day 12",
    },
    {
      src: "https://images.unsplash.com/photo-1516443537470-7c699131d0b0?q=80&w=2070&auto=format&fit=crop",
      alt: "南蓮園池 Nan Lian Garden",
      location: "香港 Hong Kong",
      dayId: "day-13",
      hashtag: "#HongKong",
      day: "Day 13",
    },
    {
      src: "https://images.unsplash.com/photo-1582652900184-2d0140c3fc28?q=80&w=2070&auto=format&fit=crop",
      alt: "西貢海鮮 Sai Kung Seafood",
      location: "香港 Hong Kong",
      dayId: "day-13",
      hashtag: "#HongKong #Food",
      day: "Day 13",
    },
    {
      src: "https://images.unsplash.com/photo-1517144447511-aebb25bbc5fa?q=80&w=2070&auto=format&fit=crop",
      alt: "廟街夜市 Temple Street Night Market",
      location: "香港 Hong Kong",
      dayId: "day-13",
      hashtag: "#HongKong #Shopping",
      day: "Day 13",
    },
    {
      src: "https://images.unsplash.com/photo-1624866635020-2c9bd7d52d3c?q=80&w=2070&auto=format&fit=crop",
      alt: "香港迪士尼 Hong Kong Disneyland",
      location: "香港 Hong Kong",
      dayId: "day-14",
      hashtag: "#HongKong",
      day: "Day 14",
    },
    {
      src: "https://images.unsplash.com/photo-1578950435899-d1c1bf932b1d?q=80&w=2070&auto=format&fit=crop",
      alt: "海洋公園 Ocean Park",
      location: "香港 Hong Kong",
      dayId: "day-15",
      hashtag: "#HongKong",
      day: "Day 15",
    },
    {
      src: "https://images.unsplash.com/photo-1506323548729-7bfb7e10ce3a?q=80&w=2070&auto=format&fit=crop",
      alt: "赤柱市集 Stanley Market",
      location: "香港 Hong Kong",
      dayId: "day-15",
      hashtag: "#HongKong #Shopping",
      day: "Day 15",
    },
    {
      src: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop",
      alt: "尖沙咀 Tsim Sha Tsui",
      location: "香港 Hong Kong",
      dayId: "day-16",
      hashtag: "#HongKong",
      day: "Day 16",
    },
    {
      src: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=2070&auto=format&fit=crop",
      alt: "阿聯酋航空 Emirates Airline",
      location: "交通 Travel",
      dayId: "day-17",
      hashtag: "#Travel",
      day: "Day 17",
    },
  ]

  const handleClick = (dayId: string) => {
    const element = document.getElementById(dayId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const filteredImages = filter ? images.filter((image) => image.hashtag.includes(filter)) : images

  const uniqueHashtags = Array.from(
    new Set(
      images.flatMap((image) => {
        return image.hashtag.split(" ").filter((tag) => tag.startsWith("#"))
      }),
    ),
  )

  return (
    <section id="gallery" className="scroll-mt-16">
      <Card className="border-primary/20">
        <CardHeader className="border-b border-border">
          <CardTitle className="flex items-center gap-2">
            <ImageIcon className="h-5 w-5 text-primary" />
            照片庫 | Photo Gallery
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="mb-6 flex flex-wrap gap-2">
            <Badge
              variant={filter === null ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setFilter(null)}
            >
              All
            </Badge>
            {uniqueHashtags.map((tag, i) => (
              <Badge
                key={i}
                variant={filter === tag ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setFilter(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="image-gallery">
            {filteredImages.map((image, idx) => (
              <div key={idx} className="image-card" onClick={() => handleClick(image.dayId)}>
                <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-64 object-cover" />
                <div className="image-overlay">
                  <p className="font-medium">{image.alt}</p>
                  <p className="text-sm opacity-80">{image.location}</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {image.hashtag.split(" ").map((tag, i) => (
                      <span key={i} className="text-xs bg-white/20 px-1.5 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                    <span className="text-xs bg-primary/30 px-1.5 py-0.5 rounded-full">{image.day}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">照片提示 | Photo Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-1">香港攝影景點 | Hong Kong Photo Spots</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• 太平山頂 - 日落時分拍攝香港天際線</li>
                  <li>• 尖沙咀海濱 - 晚上8點幻彩詠香江燈光秀</li>
                  <li>• 大嶼山天壇大佛 - 清晨光線最佳</li>
                  <li>• 中環石板街 - 經典香港街景</li>
                  <li>• 南蓮園池 - 傳統中式園林建築</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-1">日本九州攝影景點 | Kyushu Photo Spots</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• 熊本城 - 櫻花季節最美</li>
                  <li>• 阿蘇火山 - 清晨霧氣繚繞時最壯觀</li>
                  <li>• 由布院金鱗湖 - 晨霧中的湖景</li>
                  <li>• 柳川運河 - 搭船時拍攝水鄉風光</li>
                  <li>• 福岡中洲屋台 - 夜晚燈光下的美食街</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

