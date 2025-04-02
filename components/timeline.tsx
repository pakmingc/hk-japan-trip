"use client"

import { useState } from "react"
import {
  CalendarDays,
  MapPin,
  Clock,
  Coffee,
  Utensils,
  Camera,
  Train,
  Landmark,
  ShoppingBag,
  Mountain,
  Waves,
  Droplets,
  Flame,
  Home,
  Scissors,
  FileText,
  Plane,
  Building,
  Ticket,
  Shirt,
  Leaf,
  Sparkles,
  Umbrella,
  Palette,
  Music,
  Luggage,
  Car,
  Navigation,
  Map,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface DayData {
  day: number
  date: string
  location: string
  locationChinese: string
  activities: {
    time: string
    title: string
    titleChinese: string
    details?: string[]
    detailsChinese?: string[]
    icon?: string
    description?: string
    descriptionChinese?: string
    image?: string
    location?: string // For directions
  }[]
  images: string[]
  mapUrl: string
  description?: string
  descriptionChinese?: string
  coordinates?: {
    lat: number
    lng: number
  }
}

export default function Timeline() {
  const [openMap, setOpenMap] = useState<string | null>(null)

  const days: DayData[] = [
    {
      day: 1,
      date: "April 1",
      location: "Hong Kong",
      locationChinese: "香港",
      description: "抵達香港的第一天，我們將從機場前往酒店休息，為接下來的行程做準備。",
      descriptionChinese:
        "First day arriving in Hong Kong, we'll head from the airport to the hotel to rest and prepare for the upcoming journey.",
      activities: [
        {
          time: "Evening",
          title: "Arrival at Hong Kong International Airport",
          titleChinese: "抵達香港國際機場",
          details: ["Emirates EK380 from Dubai", "Arrival time: 21:15"],
          detailsChinese: ["從杜拜乘坐阿聯酋航空 EK380", "抵達時間: 21:15"],
          icon: "Plane",
          description: "從倫敦經杜拜飛往香港，抵達香港國際機場後，我們將前往酒店休息。",
          descriptionChinese:
            "Flying from London via Dubai to Hong Kong, after arriving at Hong Kong International Airport, we'll head to the hotel to rest.",
          location: "Hong Kong International Airport, Hong Kong",
        },
        {
          time: "Night",
          title: "Check-in at Hotel",
          titleChinese: "酒店入住",
          details: ["Cordis Hotel, Mong Kok", "Rest and prepare for the next day"],
          detailsChinese: ["旺角康得思酒店", "休息並為明天做準備"],
          icon: "Home",
          description: "入住旺角康得思酒店，休息並為接下來的行程做準備。",
          descriptionChinese: "Check in at Cordis Hotel in Mong Kok, rest and prepare for the upcoming journey.",
          location: "Cordis Hotel, 555 Shanghai St, Mong Kok, Hong Kong",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1518599807935-37015b9cefcb?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2070&auto=format&fit=crop",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14764.363091472723!2d114.16965673955077!3d22.31897470000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400f179a6bb57%3A0x8c3a7e5f1c2e4bd9!2Z5rKZ5bC85bSH5Y-w!5e0!3m2!1szh-TW!2shk!4v1617235689721!5m2!1szh-TW!2shk",
      coordinates: {
        lat: 22.3189747,
        lng: 114.1696567,
      },
    },
    {
      day: 2,
      date: "April 2",
      location: "Hong Kong",
      locationChinese: "香港",
      description: "今天我們將探索香港島，參觀著名景點並體驗當地美食。",
      descriptionChinese:
        "Today we'll explore Hong Kong Island, visit famous attractions and experience local cuisine.",
      activities: [
        {
          time: "Morning",
          title: "Victoria Peak",
          titleChinese: "太平山頂",
          details: ["Peak Tram experience", "Sky Terrace 428 viewing platform"],
          detailsChinese: ["山頂纜車體驗", "凌霄閣428觀景台"],
          icon: "Mountain",
          description: "乘坐山頂纜車前往太平山頂，在凌霄閣428觀景台欣賞香港壯麗的全景。",
          descriptionChinese:
            "Take the Peak Tram to Victoria Peak and enjoy the magnificent panorama of Hong Kong from the Sky Terrace 428 viewing platform.",
          location: "Victoria Peak, Hong Kong",
        },
        {
          time: "Afternoon",
          title: "Central & Mid-levels Exploration",
          titleChinese: "中環和半山區探索",
          details: ["Mid-levels Escalator", "Man Mo Temple", "PMQ creative hub"],
          detailsChinese: ["半山扶手電梯", "文武廟", "元創方創意中心"],
          icon: "Landmark",
          description: "探索中環和半山區，乘坐世界最長的戶外扶手電梯系統，參觀歷史悠久的文武廟和充滿創意的元創方。",
          descriptionChinese:
            "Explore Central and Mid-levels, ride the world's longest outdoor escalator system, visit the historic Man Mo Temple and the creative PMQ hub.",
          location: "Central, Hong Kong",
        },
        {
          time: "Evening",
          title: "Dinner at Lan Kwai Fong",
          titleChinese: "蘭桂坊晚餐",
          details: ["International cuisine", "Vibrant nightlife district"],
          detailsChinese: ["國際美食", "充滿活力的夜生活區"],
          icon: "Utensils",
          description: "在香港著名的蘭桂坊享用晚餐，體驗這個充滿活力的國際美食和夜生活區。",
          descriptionChinese:
            "Enjoy dinner at Hong Kong's famous Lan Kwai Fong, experiencing this vibrant international dining and nightlife district.",
          location: "Lan Kwai Fong, Central, Hong Kong",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1513326738677-b964603b9061?q=80&w=2049&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?q=80&w=2070&auto=format&fit=crop",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14764.363091472723!2d114.15965673955077!3d22.27897470000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404007c40b42f8b%3A0xfe9ddfd450686fd1!2z5aSp5bmz5bGx6aas!5e0!3m2!1szh-TW!2shk!4v1617235689721!5m2!1szh-TW!2shk",
      coordinates: {
        lat: 22.2789747,
        lng: 114.1596567,
      },
    },
    {
      day: 3,
      date: "April 3",
      location: "Hong Kong",
      locationChinese: "香港",
      description: "今天我們將探索九龍區，體驗當地文化和購物。",
      descriptionChinese: "Today we'll explore Kowloon area, experience local culture and shopping.",
      activities: [
        {
          time: "Morning",
          title: "Wong Tai Sin Temple",
          titleChinese: "黃大仙祠",
          details: ["Famous Taoist temple", "Fortune telling"],
          detailsChinese: ["著名的道教廟宇", "求籤問卜"],
          icon: "Landmark",
          description: "參觀香港最著名的道教廟宇之一黃大仙祠，體驗傳統的求籤問卜文化。",
          descriptionChinese:
            "Visit Wong Tai Sin Temple, one of Hong Kong's most famous Taoist temples, and experience the traditional fortune-telling culture.",
          location: "Wong Tai Sin Temple, Kowloon, Hong Kong",
        },
        {
          time: "Afternoon",
          title: "Shopping in Mong Kok",
          titleChinese: "旺角購物",
          details: ["Ladies' Market", "Sneaker Street", "Electronics shopping"],
          detailsChinese: ["女人街", "波鞋街", "電子產品購物"],
          icon: "ShoppingBag",
          description: "在旺角的特色市場購物，包括售賣各種商品的女人街、專賣運動鞋的波鞋街和電子產品商店。",
          descriptionChinese:
            "Shop at Mong Kok's distinctive markets, including Ladies' Market selling various goods, Sneaker Street specializing in sports shoes, and electronics stores.",
          location: "Mong Kok, Kowloon, Hong Kong",
        },
        {
          time: "Evening",
          title: "Symphony of Lights & Dinner",
          titleChinese: "幻彩詠香江和晚餐",
          details: ["Harbour light show at 8pm", "Dinner with harbour view"],
          detailsChinese: ["晚上8點的海港燈光秀", "海景晚餐"],
          icon: "Sparkles",
          description: "在尖沙咀海濱欣賞每晚8點的幻彩詠香江燈光秀，然後在附近享用海景晚餐。",
          descriptionChinese:
            "Watch the Symphony of Lights show at 8pm from the Tsim Sha Tsui waterfront, then enjoy dinner with harbour views nearby.",
          image: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=2071&auto=format&fit=crop",
          location: "Tsim Sha Tsui Promenade, Kowloon, Hong Kong",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1536599424071-0b215a388ba7?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=2071&auto=format&fit=crop",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14764.363091472723!2d114.17965673955077!3d22.31897470000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400b0b8620c51%3A0xd89c839c5c6f13ba!2z5peX5aSn5LuU56aP!5e0!3m2!1szh-TW!2shk!4v1617235689721!5m2!1szh-TW!2shk",
      coordinates: {
        lat: 22.3189747,
        lng: 114.1796567,
      },
    },
    {
      day: 4,
      date: "April 4",
      location: "Hong Kong",
      locationChinese: "香港",
      description: "今天我們將探索香港的離島區，體驗與市區不同的風景和文化。",
      descriptionChinese:
        "Today we'll explore Hong Kong's outlying islands, experiencing scenery and culture different from the urban areas.",
      activities: [
        {
          time: "Morning",
          title: "Ngong Ping 360 & Big Buddha",
          titleChinese: "昂坪360和大佛",
          details: ["Cable car ride", "Tian Tan Buddha", "Po Lin Monastery"],
          detailsChinese: ["纜車之旅", "天壇大佛", "寶蓮禪寺"],
          icon: "Landmark",
          description: "乘坐昂坪360纜車前往大嶼山，參觀天壇大佛和寶蓮禪寺，欣賞壯麗的山景。",
          descriptionChinese:
            "Take the Ngong Ping 360 cable car to Lantau Island, visit the Tian Tan Buddha and Po Lin Monastery, enjoying the magnificent mountain views.",
          location: "Ngong Ping, Lantau Island, Hong Kong",
        },
        {
          time: "Afternoon",
          title: "Tai O Fishing Village",
          titleChinese: "大澳漁村",
          details: ["Traditional stilt houses", "Boat tour", "Dried seafood market"],
          detailsChinese: ["傳統棚屋", "船遊", "曬魚乾市場"],
          icon: "Waves",
          description: "參觀有「東方威尼斯」之稱的大澳漁村，欣賞傳統棚屋，乘船遊覽，探索當地市場。",
          descriptionChinese:
            "Visit Tai O Fishing Village, known as the 'Venice of the East', admire traditional stilt houses, take a boat tour, and explore the local market.",
          location: "Tai O, Lantau Island, Hong Kong",
        },
        {
          time: "Evening",
          title: "Return to Hotel & Packing",
          titleChinese: "返回酒店和打包",
          details: ["Prepare for Japan trip", "Early night"],
          detailsChinese: ["為日本之旅做準備", "早點休息"],
          icon: "Luggage",
          description: "返回酒店，為明天前往日本的行程做準備，整理行李並早點休息。",
          descriptionChinese:
            "Return to the hotel, prepare for tomorrow's journey to Japan, pack luggage and get an early night's rest.",
          location: "Cordis Hotel, Mong Kok, Hong Kong",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=2129&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1624866635020-2c9bd7d52d3c?q=80&w=2070&auto=format&fit=crop",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14764.363091472723!2d113.90965673955077!3d22.25897470000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3401553ede4a3fb5%3A0x6c2e9a4f6d5b4bcb!2z5aSp5aOr5aSn5L2V!5e0!3m2!1szh-TW!2shk!4v1617235689721!5m2!1szh-TW!2shk",
      coordinates: {
        lat: 22.2589747,
        lng: 113.9096567,
      },
    },
    {
      day: 5,
      date: "April 5",
      location: "Hong Kong → Kumamoto, Japan",
      locationChinese: "香港 → 熊本，日本",
      description: "今天我們將從香港飛往日本熊本，開始我們的日本九州之旅。",
      descriptionChinese: "Today we'll fly from Hong Kong to Kumamoto, Japan, starting our Kyushu journey.",
      activities: [
        {
          time: "Morning",
          title: "Flight to Kumamoto",
          titleChinese: "飛往熊本",
          details: ["Hong Kong Airlines HX686", "Departure: 11:40, Arrival: 15:40"],
          detailsChinese: ["香港航空 HX686", "出發: 11:40，抵達: 15:40"],
          icon: "Plane",
          description: "從香港國際機場乘坐香港航空HX686航班飛往日本熊本機場，飛行時間約4小時。",
          descriptionChinese:
            "Fly from Hong Kong International Airport to Kumamoto Airport, Japan on Hong Kong Airlines flight HX686, with a flight time of about 4 hours.",
          image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2070&auto=format&fit=crop",
          location: "Hong Kong International Airport → Kumamoto Airport",
        },
        {
          time: "Afternoon",
          title: "Arrival & Car Rental",
          titleChinese: "抵達和租車",
          details: ["Pick up rental car", "Drive to Kumamoto city"],
          detailsChinese: ["取租車", "駕車前往熊本市"],
          icon: "Car",
          description: "抵達熊本機場後，取租車並駕車前往熊本市區的酒店。",
          descriptionChinese:
            "After arriving at Kumamoto Airport, pick up the rental car and drive to the hotel in Kumamoto city.",
          location: "Kumamoto Airport, Japan",
        },
        {
          time: "Evening",
          title: "Shimotori Shopping Street",
          titleChinese: "下通商店街",
          details: ["Local shopping district", "Dinner at local restaurant"],
          detailsChinese: ["當地購物區", "在當地餐廳晚餐"],
          icon: "ShoppingBag",
          description: "探索熊本市最熱鬧的購物區下通商店街，體驗當地文化並在傳統餐廳享用晚餐。",
          descriptionChinese:
            "Explore Shimotori Shopping Street, Kumamoto's busiest shopping district, experience local culture and enjoy dinner at a traditional restaurant.",
          image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1974&auto=format&fit=crop",
          location: "Shimotori Shopping Street, Kumamoto, Japan",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1974&auto=format&fit=crop",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13293.060054034367!2d130.70835!3d32.80286598096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3540f47f01a1b7c3%3A0x1e41d0c325b2a2f!2sKumamoto%20Castle!5e0!3m2!1sen!2sus!4v1617235689721!5m2!1sen!2sus",
      coordinates: {
        lat: 32.8028659,
        lng: 130.70835,
      },
    },
    {
      day: 6,
      date: "April 6",
      location: "Kumamoto, Japan",
      locationChinese: "熊本，日本",
      description: "今天我們將探索熊本市，參觀著名的熊本城和其他景點。",
      descriptionChinese:
        "Today we'll explore Kumamoto city, visiting the famous Kumamoto Castle and other attractions.",
      activities: [
        {
          time: "Morning",
          title: "Kumamoto Castle",
          titleChinese: "熊本城",
          details: ["Historic Japanese castle", "Recently renovated after 2016 earthquake"],
          detailsChinese: ["歷史悠久的日本城堡", "2016年地震後最近翻修"],
          icon: "Landmark",
          description: "參觀日本三大名城之一的熊本城，了解其悠久歷史和2016年地震後的修復工作。",
          descriptionChinese:
            "Visit Kumamoto Castle, one of Japan's three premier castles, learn about its long history and the restoration work after the 2016 earthquake.",
          image: "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?q=80&w=1974&auto=format&fit=crop",
          location: "Kumamoto Castle, Kumamoto, Japan",
        },
        {
          time: "Afternoon",
          title: "Suizenji Garden",
          titleChinese: "水前寺公園",
          details: ["Traditional Japanese garden", "Miniature representation of Tokaido route"],
          detailsChinese: ["傳統日本庭園", "東海道路線的微型表現"],
          icon: "Leaf",
          description: "參觀美麗的水前寺公園，這是一個代表東海道53個驛站的微型景觀日本庭園。",
          descriptionChinese:
            "Visit the beautiful Suizenji Garden, a miniature landscape Japanese garden representing the 53 stations of the Tokaido route.",
          location: "Suizenji Garden, Kumamoto, Japan",
        },
        {
          time: "Evening",
          title: "Kumamon Square & Dinner",
          titleChinese: "熊本熊廣場和晚餐",
          details: ["Kumamoto's mascot shop and exhibition", "Local cuisine dinner"],
          detailsChinese: ["熊本吉祥物商店和展覽", "當地美食晚餐"],
          icon: "Utensils",
          description: "參觀熊本熊廣場，了解這個著名的吉祥物，然後享用熊本當地特色料理，如馬肉刺身（馬刺し）。",
          descriptionChinese:
            "Visit Kumamon Square to learn about this famous mascot, then enjoy Kumamoto's local specialties such as horse meat sashimi (basashi).",
          location: "Kumamon Square, Kumamoto, Japan",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1580694505395-a8bc4caa5b1c?q=80&w=2070&auto=format&fit=crop",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13293.060054034367!2d130.70835!3d32.80286598096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3540f47f01a1b7c3%3A0x1e41d0c325b2a2f!2sKumamoto%20Castle!5e0!3m2!1sen!2sus!4v1617235689721!5m2!1sen!2sus",
      coordinates: {
        lat: 32.8028659,
        lng: 130.70835,
      },
    },
    {
      day: 7,
      date: "April 7",
      location: "Aso, Japan",
      locationChinese: "阿蘇，日本",
      description: "今天我們將前往阿蘇火山區，體驗壯麗的自然風光。",
      descriptionChinese: "Today we'll head to the Aso volcanic area to experience magnificent natural scenery.",
      activities: [
        {
          time: "Morning",
          title: "Drive to Aso",
          titleChinese: "驅車前往阿蘇",
          details: ["Scenic drive through Kyushu countryside", "Approximately 1.5 hours from Kumamoto"],
          detailsChinese: ["穿越九州鄉村的風景驅車路線", "從熊本出發約1.5小時"],
          icon: "Car",
          description: "早上從熊本驅車前往阿蘇，沿途欣賞九州鄉村的美麗風景。",
          descriptionChinese:
            "Morning drive from Kumamoto to Aso, enjoying the beautiful scenery of Kyushu's countryside along the way.",
          location: "Aso, Kumamoto Prefecture, Japan",
        },
        {
          time: "Afternoon",
          title: "Aso Volcano & Aso Shrine",
          titleChinese: "阿蘇火山和阿蘇神社",
          details: ["One of world's largest calderas", "Historic Shinto shrine"],
          detailsChinese: ["世界最大的破火山口之一", "歷史悠久的神道神社"],
          icon: "Mountain",
          description: "參觀阿蘇火山，這是世界上最大的活火山之一，然後遊覽歷史悠久的阿蘇神社。",
          descriptionChinese:
            "Visit Aso Volcano, one of the world's largest active volcanoes, then tour the historic Aso Shrine.",
          image: "https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?q=80&w=2070&auto=format&fit=crop",
          location: "Mount Aso, Kumamoto Prefecture, Japan",
        },
        {
          time: "Evening",
          title: "Kurokawa Onsen Stay",
          titleChinese: "黑川溫泉住宿",
          details: ["Traditional ryokan experience", "Natural hot springs"],
          detailsChinese: ["傳統日式旅館體驗", "天然溫泉"],
          icon: "Droplets",
          description: "入住黑川溫泉的傳統日式旅館，體驗正宗的日本溫泉文化，享用會席料理晚餐。",
          descriptionChinese:
            "Stay at a traditional ryokan in Kurokawa Onsen, experience authentic Japanese hot spring culture, and enjoy a kaiseki dinner.",
          location: "Kurokawa Onsen, Kumamoto Prefecture, Japan",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1548567117-02328f050eaa?q=80&w=2070&auto=format&fit=crop",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13293.060054034367!2d131.08835!3d32.88286598096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3540f47f01a1b7c3%3A0x1e41d0c325b2a2f!2sMount%20Aso!5e0!3m2!1sen!2sus!4v1617235689721!5m2!1sen!2sus",
      coordinates: {
        lat: 32.8828659,
        lng: 131.08835,
      },
    },
    {
      day: 8,
      date: "April 8",
      location: "Yufuin, Japan",
      locationChinese: "由布院，日本",
      description: "今天我們將前往由布院，這是一個美麗的溫泉小鎮，以其藝術氛圍和美食而聞名。",
      descriptionChinese:
        "Today we'll head to Yufuin, a beautiful hot spring town known for its artistic atmosphere and cuisine.",
      activities: [
        {
          time: "Morning",
          title: "Drive to Yufuin",
          titleChinese: "驅車前往由布院",
          details: ["Scenic drive through mountains", "Approximately 2 hours from Aso"],
          detailsChinese: ["穿越山區的風景驅車路線", "從阿蘇出發約2小時"],
          icon: "Car",
          description: "早上從阿蘇驅車前往由布院，沿途欣賞九州山區的美麗風景。",
          descriptionChinese:
            "Morning drive from Aso to Yufuin, enjoying the beautiful scenery of Kyushu's mountainous region along the way.",
          location: "Yufuin",
        },
        {
          time: "Afternoon",
          title: "Yufuin Onsen Experience",
          titleChinese: "由布院溫泉體驗",
          details: ["Private family onsen", "Spa treatments"],
          detailsChinese: ["私人家庭溫泉", "水療護理"],
          icon: "Droplets",
          description: "下午在由布院享受溫泉體驗，包括私人家庭溫泉和水療護理，放鬆身心。",
          descriptionChinese:
            "Afternoon onsen experience in Yufuin, including private family hot springs and spa treatments, relaxing body and mind.",
          image: "/images/family-spa-day.png",
          location: "Yufuin",
        },
        {
          time: "Evening",
          title: "Yufuin Dining",
          titleChinese: "由布院晚餐",
          details: ["Kaiseki ryori (traditional multi-course dinner)", "Local Oita specialties"],
          detailsChinese: ["懷石料理（傳統多道菜晚餐）", "大分當地特色菜"],
          icon: "Utensils",
          description: "晚上在由布院的傳統日式旅館享用懷石料理，品嚐大分縣的當地特色菜，體驗正宗的日本美食文化。",
          descriptionChinese:
            "Evening kaiseki dinner at a traditional ryokan in Yufuin, tasting local Oita specialties and experiencing authentic Japanese culinary culture.",
          location: "Yufuin",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?q=80&w=2070&auto=format&fit=crop",
        "/images/family-cartoon-spa.png",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13293.060054034367!2d131.36835!3d33.264444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3546a7c4eea5e0bb%3A0x304d738132c8c232!2sYufuin%2C%20Yufu%2C%20Oita%20879-5102%2C%20Japan!5e0!3m2!1sen!2sus!4v1617235689721!5m2!1sen!2sus",
      coordinates: {
        lat: 33.264444,
        lng: 131.36835,
      },
    },
    {
      day: 9,
      date: "April 9",
      location: "Yufuin, Japan",
      locationChinese: "由布院，日本",
      description: "今天我們將繼續探索由布院，體驗這個藝術小鎮的魅力。",
      descriptionChinese: "Today we'll continue exploring Yufuin, experiencing the charm of this artistic town.",
      activities: [
        {
          time: "Morning",
          title: "Lake Kinrinko",
          titleChinese: "金鱗湖",
          details: ["Scenic lake with morning mist", "Walking trail around the lake"],
          detailsChinese: ["晨霧籠罩的風景湖", "環湖步道"],
          icon: "Waves",
          description: "早上參觀由布院著名的金鱗湖，欣賞晨霧籠罩下的美麗湖景，沿著環湖步道漫步。",
          descriptionChinese:
            "Morning visit to Yufuin's famous Lake Kinrinko, admiring the beautiful lake scenery under the morning mist, strolling along the lake trail.",
          location: "Lake Kinrinko, Yufuin, Japan",
        },
        {
          time: "Afternoon",
          title: "Yufuin Floral Village & Shopping",
          titleChinese: "由布院花卉村和購物",
          details: ["European-style village", "Specialty shops and cafes"],
          detailsChinese: ["歐式風格村莊", "特色商店和咖啡館"],
          icon: "ShoppingBag",
          description: "探索由布院花卉村，這是一個受英國科茨沃爾德地區啟發的歐式風格村莊，參觀特色商店和咖啡館。",
          descriptionChinese:
            "Explore Yufuin Floral Village, a European-style village inspired by the Cotswolds region of England, visiting specialty shops and cafes.",
          location: "Yufuin Floral Village, Yufuin, Japan",
        },
        {
          time: "Evening",
          title: "Yunotsubo Street Exploration",
          titleChinese: "湯之坪街道探索",
          details: ["Main shopping street", "Local crafts and souvenirs"],
          detailsChinese: ["主要購物街", "當地工藝品和紀念品"],
          icon: "ShoppingBag",
          description: "在由布院的主要購物街湯之坪街道漫步，購買當地工藝品和紀念品，品嚐當地小吃。",
          descriptionChinese:
            "Stroll along Yunotsubo Street, Yufuin's main shopping street, buying local crafts and souvenirs, tasting local snacks.",
          location: "Yunotsubo Street, Yufuin, Japan",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1548567117-02328f050eaa?q=80&w=2070&auto=format&fit=crop",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13293.060054034367!2d131.36835!3d33.264444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3546a7c4eea5e0bb%3A0x304d738132c8c232!2sYufuin%2C%20Yufu%2C%20Oita%20879-5102%2C%20Japan!5e0!3m2!1sen!2sus!4v1617235689721!5m2!1sen!2sus",
      coordinates: {
        lat: 33.264444,
        lng: 131.36835,
      },
    },
    {
      day: 10,
      date: "April 10",
      location: "Yanagawa, Japan",
      locationChinese: "柳川，日本",
      description: "今天我們將前往柳川，體驗這個水鄉城市的獨特魅力。",
      descriptionChinese: "Today we'll head to Yanagawa to experience the unique charm of this water town.",
      activities: [
        {
          time: "Morning",
          title: "Drive to Yanagawa",
          titleChinese: "驅車前往柳川",
          details: ["Scenic drive through Kyushu", "Approximately 2.5 hours from Yufuin"],
          detailsChinese: ["穿越九州的風景驅車路線", "從由布院出發約2.5小時"],
          icon: "Car",
          description: "早上從由布院驅車前往柳川，沿途欣賞九州的美麗風景。",
          descriptionChinese:
            "Morning drive from Yufuin to Yanagawa, enjoying the beautiful scenery of Kyushu along the way.",
          location: "Yanagawa, Fukuoka Prefecture, Japan",
        },
        {
          time: "Afternoon",
          title: "Yanagawa River Cruise",
          titleChinese: "柳川遊船",
          details: ["Traditional donkobune boat ride", "Canal network exploration"],
          detailsChinese: ["傳統的donkobune船遊", "運河網絡探索"],
          icon: "Waves",
          description: "乘坐傳統的平底船遊覽柳川的運河網絡，欣賞被稱為「九州威尼斯」的水鄉風光。",
          descriptionChinese:
            "Take a traditional flat-bottomed boat tour of Yanagawa's canal network, enjoying the water town scenery known as the 'Venice of Kyushu'.",
          image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2070&auto=format&fit=crop",
          location: "Yanagawa Canals, Yanagawa, Japan",
        },
        {
          time: "Evening",
          title: "Unagi Dinner & Ohana Villa",
          titleChinese: "鰻魚晚餐和大名莊",
          details: ["Famous local eel cuisine", "Historic samurai residence"],
          detailsChinese: ["著名的當地鰻魚料理", "歷史悠久的武士住宅"],
          icon: "Utensils",
          description: "品嚐柳川著名的鰻魚料理，然後參觀立花藩主的歷史住宅大名莊。",
          descriptionChinese:
            "Taste Yanagawa's famous eel cuisine, then visit Ohana Villa, the historical residence of the Tachibana clan lord.",
          location: "Yanagawa, Fukuoka Prefecture, Japan",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1580694505395-a8bc4caa5b1c?q=80&w=2070&auto=format&fit=crop",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13293.060054034367!2d130.40835!3d33.164444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3546a7c4eea5e0bb%3A0x304d738132c8c232!2sYanagawa%2C%20Fukuoka%20Prefecture%2C%20Japan!5e0!3m2!1sen!2sus!4v1617235689721!5m2!1sen!2sus",
      coordinates: {
        lat: 33.164444,
        lng: 130.40835,
      },
    },
    {
      day: 11,
      date: "April 11",
      location: "Dazaifu & Fukuoka, Japan",
      locationChinese: "大宰府和福岡，日本",
      description: "今天我們將參觀大宰府，然後前往九州最大的城市福岡。",
      descriptionChinese: "Today we'll visit Dazaifu, then head to Fukuoka, Kyushu's largest city.",
      activities: [
        {
          time: "Morning",
          title: "Dazaifu Tenmangu Shrine",
          titleChinese: "大宰府天滿宮",
          details: ["Important Shinto shrine", "Dedicated to scholar Sugawara no Michizane"],
          detailsChinese: ["重要的神道神社", "供奉學者菅原道真"],
          icon: "Landmark",
          description: "參觀供奉學問之神菅原道真的大宰府天滿宮，這是日本最重要的神社之一。",
          descriptionChinese:
            "Visit Dazaifu Tenmangu Shrine dedicated to Sugawara no Michizane, the god of learning, one of Japan's most important shrines.",
          image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=2070&auto=format&fit=crop",
          location: "Dazaifu Tenmangu Shrine, Dazaifu, Japan",
        },
        {
          time: "Afternoon",
          title: "Drive to Fukuoka & Canal City",
          titleChinese: "驅車前往福岡和運河城",
          details: ["Shopping and entertainment complex", "Water features and architecture"],
          detailsChinese: ["購物和娛樂綜合體", "水景和建築"],
          icon: "ShoppingBag",
          description: "驅車前往福岡，參觀運河城博多，這是一個結合了購物、餐飲和娛樂的大型綜合設施。",
          descriptionChinese:
            "Drive to Fukuoka and visit Canal City Hakata, a large complex combining shopping, dining, and entertainment.",
          image: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?q=80&w=2070&auto=format&fit=crop",
          location: "Canal City Hakata, Fukuoka, Japan",
        },
        {
          time: "Evening",
          title: "Nakasu Yatai Experience",
          titleChinese: "中洲屋台體驗",
          details: ["Famous food stalls", "Local ramen and street food"],
          detailsChinese: ["著名的小吃攤", "當地拉麵和街頭小吃"],
          icon: "Utensils",
          description: "在福岡著名的中洲屋台街體驗當地美食文化，品嚐豚骨拉麵和其他街頭小吃。",
          descriptionChinese:
            "Experience local food culture at Fukuoka's famous Nakasu Yatai street, tasting tonkotsu ramen and other street foods.",
          image: "https://images.unsplash.com/photo-1580694505395-a8bc4caa5b1c?q=80&w=2070&auto=format&fit=crop",
          location: "Nakasu, Fukuoka, Japan",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?q=80&w=2070&auto=format&fit=crop",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13293.060054034367!2d130.40835!3d33.584444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3546a7c4eea5e0bb%3A0x304d738132c8c232!2sFukuoka%2C%20Japan!5e0!3m2!1sen!2sus!4v1617235689721!5m2!1sen!2sus",
      coordinates: {
        lat: 33.584444,
        lng: 130.40835,
      },
    },
    {
      day: 12,
      date: "April 12",
      location: "Fukuoka → Hong Kong",
      locationChinese: "福岡 → 香港",
      description: "今天是我們在日本的最後一天，我們將從福岡飛回香港。",
      descriptionChinese: "Today is our last day in Japan. We'll fly back to Hong Kong from Fukuoka.",
      activities: [
        {
          time: "Morning",
          title: "Ohori Park & Last-minute Shopping",
          titleChinese: "大濠公園和最後購物",
          details: ["Scenic park with lake", "Souvenir shopping"],
          detailsChinese: ["風景優美的湖泊公園", "紀念品購物"],
          icon: "ShoppingBag",
          description: "早上參觀福岡市中心的大濠公園，然後進行最後的購物，購買紀念品和禮物。",
          descriptionChinese:
            "Morning visit to Ohori Park in central Fukuoka, then do some last-minute shopping for souvenirs and gifts.",
          location: "Ohori Park, Fukuoka, Japan",
        },
        {
          time: "Afternoon",
          title: "Flight to Hong Kong",
          titleChinese: "飛往香港",
          details: ["Hong Kong Airlines HX641", "Departure: 16:00, Arrival: 18:45"],
          detailsChinese: ["香港航空 HX641", "出發: 16:00，抵達: 18:45"],
          icon: "Plane",
          description: "從福岡機場乘坐香港航空HX641航班飛往香港國際機場，飛行時間約3小時45分鐘。",
          descriptionChinese:
            "Fly from Fukuoka Airport to Hong Kong International Airport on Hong Kong Airlines flight HX641, with a flight time of about 3 hours 45 minutes.",
          image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
          location: "Fukuoka Airport → Hong Kong International Airport",
        },
        {
          time: "Evening",
          title: "V Walk & Dessert",
          titleChinese: "V Walk和甜品",
          details: ["Shopping mall in West Kowloon", "Hui Lau Shan dessert"],
          detailsChinese: ["西九龍購物中心", "許留山甜品"],
          icon: "Utensils",
          description: "抵達香港後，前往西九龍的V Walk購物中心，享用許留山的芒果甜品。",
          descriptionChinese:
            "After arriving in Hong Kong, head to V Walk shopping mall in West Kowloon and enjoy mango desserts at Hui Lau Shan.",
          location: "V Walk, West Kowloon, Hong Kong",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13293.060054034367!2d130.40835!3d33.584444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3546a7c4eea5e0bb%3A0x304d738132c8c232!2sFukuoka%20Airport%2C%20Fukuoka%2C%20Japan!5e0!3m2!1sen!2sus!4v1617235689721!5m2!1sen!2sus",
      coordinates: {
        lat: 33.584444,
        lng: 130.40835,
      },
    },
    {
      day: 13,
      date: "April 13",
      location: "Hong Kong",
      locationChinese: "香港",
      description: "今天我們將探索香港的新界地區，體驗與市區不同的風景和文化。",
      descriptionChinese:
        "Today we'll explore Hong Kong's New Territories, experiencing scenery and culture different from the urban areas.",
      activities: [
        {
          time: "Morning",
          title: "Nan Lian Garden & Chi Lin Nunnery",
          titleChinese: "南蓮園池和志蓮淨苑",
          details: ["Tang dynasty style garden", "Buddhist temple complex"],
          detailsChinese: ["唐朝風格花園", "佛教寺廟建築群"],
          icon: "Leaf",
          description: "參觀位於鑽石山的南蓮園池和志蓮淨苑，欣賞唐朝風格的建築和園林設計。",
          descriptionChinese:
            "Visit Nan Lian Garden and Chi Lin Nunnery in Diamond Hill, admiring Tang dynasty-style architecture and garden design.",
          location: "Nan Lian Garden, Diamond Hill, Hong Kong",
        },
        {
          time: "Afternoon",
          title: "Sai Kung Seafood",
          titleChinese: "西貢海鮮",
          details: ["Fresh seafood lunch", "Fishing village atmosphere"],
          detailsChinese: ["新鮮海鮮午餐", "漁村氛圍"],
          icon: "Utensils",
          description: "前往西貢，這個保存完好的漁村，在海濱餐廳享用新鮮的海鮮午餐。",
          descriptionChinese:
            "Head to Sai Kung, a well-preserved fishing village, and enjoy fresh seafood lunch at a waterfront restaurant.",
          location: "Sai Kung, New Territories, Hong Kong",
        },
        {
          time: "Evening",
          title: "Temple Street Night Market",
          titleChinese: "廟街夜市",
          details: ["Famous night market", "Street food and shopping"],
          detailsChinese: ["著名夜市", "街頭美食和購物"],
          icon: "ShoppingBag",
          description: "晚上探索九龍著名的廟街夜市，體驗當地文化，品嚐街頭小吃，購買紀念品。",
          descriptionChinese:
            "Evening exploration of Kowloon's famous Temple Street Night Market, experiencing local culture, tasting street food, and buying souvenirs.",
          location: "Temple Street, Yau Ma Tei, Hong Kong",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1513326738677-b964603b9061?q=80&w=2049&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1536599424071-0b215a388ba7?q=80&w=2070&auto=format&fit=crop",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14764.363091472723!2d114.20965673955077!3d22.33897470000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340406e1a9a0aa9f%3A0x32f49f4f5d3f4a!2z5Y2X6JOu5ZyS5rGg!5e0!3m2!1szh-TW!2shk!4v1617235689721!5m2!1szh-TW!2shk",
      coordinates: {
        lat: 22.3389747,
        lng: 114.2096567,
      },
    },
    {
      day: 14,
      date: "April 14",
      location: "Hong Kong",
      locationChinese: "香港",
      description: "今天我們將前往香港迪士尼樂園，享受一天的歡樂時光。",
      descriptionChinese: "Today we'll visit Hong Kong Disneyland for a day of fun.",
      activities: [
        {
          time: "Morning",
          title: "Hong Kong Disneyland",
          titleChinese: "香港迪士尼樂園",
          details: ["Full day at the theme park", "Various attractions and shows"],
          detailsChinese: ["主題公園全日遊", "各種景點和表演"],
          icon: "Sparkles",
          description: "全天在香港迪士尼樂園遊玩，體驗各種遊樂設施、觀看表演和與迪士尼角色互動。",
          descriptionChinese:
            "Full day at Hong Kong Disneyland, experiencing various attractions, watching shows, and interacting with Disney characters.",
          image: "https://images.unsplash.com/photo-1624866635020-2c9bd7d52d3c?q=80&w=2070&auto=format&fit=crop",
          location: "Hong Kong Disneyland, Lantau Island, Hong Kong",
        },
        {
          time: "Afternoon",
          title: "Disneyland Parades & Attractions",
          titleChinese: "迪士尼巡遊和景點",
          details: ["Afternoon parade", "Popular attractions"],
          detailsChinese: ["下午巡遊", "熱門景點"],
          icon: "Music",
          description:
            "繼續在迪士尼樂園遊玩，觀看下午的巡遊表演，體驗熱門景點如「鐵甲奇俠飛行之旅」和「星球大戰：入侵者突襲」。",
          descriptionChinese:
            "Continue at Disneyland, watching the afternoon parade, experiencing popular attractions like 'Iron Man Experience' and 'Star Wars: Command Post'.",
          location: "Hong Kong Disneyland, Lantau Island, Hong Kong",
        },
        {
          time: "Evening",
          title: "Fireworks & Return to Hotel",
          titleChinese: "煙花表演和返回酒店",
          details: ["Evening fireworks show", "Return to Cordis Hotel"],
          detailsChinese: ["晚上煙花表演", "返回康得思酒店"],
          icon: "Sparkles",
          description: "觀看迪士尼樂園的晚間煙花表演，然後返回旺角的康得思酒店。",
          descriptionChinese: "Watch Disneyland's evening fireworks show, then return to Cordis Hotel in Mong Kok.",
          location: "Hong Kong Disneyland, Lantau Island, Hong Kong",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1624866635020-2c9bd7d52d3c?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=2129&auto=format&fit=crop",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14764.363091472723!2d114.04565673955077!3d22.31297470000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403fc3a7a0d8a0f%3A0xdd0ba5adcd3d2a63!2z6aaZ5riv6L-q5aOr5bC85YWs5ZyS!5e0!3m2!1szh-TW!2shk!4v1617235689721!5m2!1szh-TW!2shk",
      coordinates: {
        lat: 22.3129747,
        lng: 114.0456567,
      },
    },
    {
      day: 15,
      date: "April 15",
      location: "Hong Kong",
      locationChinese: "香港",
      description: "今天我們將探索香港的海洋公園，體驗刺激的遊樂設施和海洋生物展覽。",
      descriptionChinese:
        "Today we'll explore Hong Kong's Ocean Park, experiencing thrilling rides and marine life exhibits.",
      activities: [
        {
          time: "Morning",
          title: "Ocean Park - Waterfront Area",
          titleChinese: "海洋公園 - 海濱樂園",
          details: ["Grand Aquarium", "Panda Village", "Old Hong Kong"],
          detailsChinese: ["海洋奇觀水族館", "熊貓之旅", "香港老大街"],
          icon: "Waves",
          description: "參觀海洋公園的海濱樂園區域，探索海洋奇觀水族館、熊貓之旅和香港老大街。",
          descriptionChinese:
            "Visit Ocean Park's Waterfront area, exploring the Grand Aquarium, Panda Village, and Old Hong Kong.",
          location: "Ocean Park, Hong Kong",
        },
        {
          time: "Afternoon",
          title: "Ocean Park - Summit Area",
          titleChinese: "海洋公園 - 高峰樂園",
          details: ["Thrill rides", "Marine animal shows", "Cable car experience"],
          detailsChinese: ["刺激遊樂設施", "海洋動物表演", "纜車體驗"],
          icon: "Mountain",
          description: "乘坐纜車前往海洋公園的高峰樂園區域，體驗刺激的遊樂設施，觀看海洋動物表演。",
          descriptionChinese:
            "Take the cable car to Ocean Park's Summit area, experience thrilling rides, watch marine animal shows.",
          location: "Ocean Park, Hong Kong",
        },
        {
          time: "Evening",
          title: "Stanley Market & Dinner",
          titleChinese: "赤柱市集和晚餐",
          details: ["Seaside shopping area", "Waterfront dining"],
          detailsChinese: ["海濱購物區", "海濱餐飲"],
          icon: "Utensils",
          description: "晚上前往赤柱市集，這是一個受歡迎的海濱購物區，在海濱餐廳享用晚餐，欣賞美麗的海景。",
          descriptionChinese:
            "Evening visit to Stanley Market, a popular seaside shopping area, enjoy dinner at a waterfront restaurant with beautiful sea views.",
          location: "Stanley, Hong Kong",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=2129&auto=format&fit=crop",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14764.363091472723!2d114.17365673955077!3d22.24897470000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404008f2a9a9d0d%3A0xc135d5e9e8d3c3b2!2z6aaZ5riv5rW35rSL5YWs5ZyS!5e0!3m2!1szh-TW!2shk!4v1617235689721!5m2!1szh-TW!2shk",
      coordinates: {
        lat: 22.2489747,
        lng: 114.1736567,
      },
    },
    {
      day: 16,
      date: "April 16",
      location: "Hong Kong",
      locationChinese: "香港",
      description: "今天是我們在香港的最後一天，我們將探索更多景點並準備回程。",
      descriptionChinese:
        "Today is our last day in Hong Kong. We'll explore more attractions and prepare for the return journey.",
      activities: [
        {
          time: "Morning",
          title: "Victoria Peak",
          titleChinese: "太平山頂",
          details: ["Iconic viewpoint of Hong Kong", "Peak Tram experience"],
          detailsChinese: ["香港標誌性的觀景點", "山頂纜車體驗"],
          icon: "Mountain",
          description:
            "早上乘坐山頂纜車前往太平山頂，這是香港最著名的觀景點，可以俯瞰整個香港島和維多利亞港的壯麗景色。",
          descriptionChinese:
            "Morning ride on the Peak Tram to Victoria Peak, Hong Kong's most famous viewpoint offering magnificent views of the entire Hong Kong Island and Victoria Harbour.",
          location: "Victoria Peak",
        },
        {
          time: "Afternoon",
          title: "Tsim Sha Tsui Promenade",
          titleChinese: "尖沙咀海濱長廊",
          details: ["Walk along Victoria Harbour", "Avenue of Stars"],
          detailsChinese: ["沿維多利亞港散步", "星光大道"],
          icon: "Camera",
          description:
            "下午在尖沙咀海濱長廊散步，參觀星光大道，欣賞維多利亞港的美景，這是拍攝香港天際線的最佳地點之一。",
          descriptionChinese:
            "Afternoon walk along the Tsim Sha Tsui Promenade, visiting the Avenue of Stars, enjoying the beautiful views of Victoria Harbour, one of the best spots for photographing Hong Kong's skyline.",
          image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop",
          location: "Tsim Sha Tsui Promenade",
        },
        {
          time: "Evening",
          title: "Farewell Dinner & Packing",
          titleChinese: "告別晚餐和打包",
          details: ["Dinner at a local restaurant", "Prepare for departure"],
          detailsChinese: ["在當地餐廳晚餐", "準備出發"],
          icon: "Utensils",
          description: "晚上在當地餐廳享用告別晚餐，然後返回酒店打包行李，為明天的回程做準備。",
          descriptionChinese:
            "Evening farewell dinner at a local restaurant, then return to the hotel to pack luggage and prepare for tomorrow's return journey.",
          location: "Hong Kong",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=2071&auto=format&fit=crop",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14764.363091472723!2d114.16965673955077!3d22.29897470000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400f179a6bb57%3A0x8c3a7e5f1c2e4bd9!2Z5bC85Y-w5rKZ5bC8!5e0!3m2!1szh-TW!2shk!4v1617235689721!5m2!1szh-TW!2shk",
      coordinates: {
        lat: 22.2989747,
        lng: 114.1696567,
      },
    },
    {
      day: 17,
      date: "April 17",
      location: "Hong Kong → London",
      locationChinese: "香港 → 倫敦",
      description: "今天是我們旅程的最後一天，我們將從香港飛回倫敦。",
      descriptionChinese: "Today is the last day of our journey. We'll fly back to London from Hong Kong.",
      activities: [
        {
          time: "Morning",
          title: "Check-out & Last-minute Shopping",
          titleChinese: "退房和最後購物",
          details: ["Hotel check-out", "Last-minute souvenirs"],
          detailsChinese: ["酒店退房", "最後紀念品"],
          icon: "ShoppingBag",
          description: "早上從酒店退房，然後利用剩餘的時間進行最後的購物，購買紀念品和禮物。",
          descriptionChinese:
            "Morning check-out from the hotel, then use the remaining time for last-minute shopping, buying souvenirs and gifts.",
          location: "Hong Kong",
        },
        {
          time: "Afternoon",
          title: "Transfer to Airport",
          titleChinese: "前往機場",
          details: ["Airport Express train", "Check-in for Emirates flight"],
          detailsChinese: ["機場快線", "辦理阿聯酋航空登機手續"],
          icon: "Train",
          description: "下午乘坐機場快線前往香港國際機場，辦理阿聯酋航空的登機手續。",
          descriptionChinese:
            "Afternoon ride on the Airport Express train to Hong Kong International Airport, checking in for the Emirates flight.",
          location: "Hong Kong International Airport",
        },
        {
          time: "Evening",
          title: "Flight to London via Dubai",
          titleChinese: "經杜拜飛往倫敦",
          details: ["Emirates EK383 to Dubai: 18:15-23:10", "Emirates EK007 to London: 02:30-07:05 (next day)"],
          detailsChinese: ["阿聯酋航空 EK383 飛往杜拜: 18:15-23:10", "阿聯酋航空 EK007 飛往倫敦: 02:30-07:05 (次日)"],
          icon: "Plane",
          description: "晚上乘坐阿聯酋航空EK383航班飛往杜拜，然後轉乘EK007航班飛往倫敦，於次日早上抵達。",
          descriptionChinese:
            "Evening flight on Emirates EK383 to Dubai, then transfer to EK007 to London, arriving the next morning.",
          location: "Hong Kong International Airport",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=2070&auto=format&fit=crop",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14764.363091472723!2d113.93565673955077!3d22.30897470000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403e2db9e15c7bb%3A0x5b3a69941de919e6!2sHong%20Kong%20International%20Airport!5e0!3m2!1szh-TW!2shk!4v1617235689721!5m2!1szh-TW!2shk",
      coordinates: {
        lat: 22.3089747,
        lng: 113.9356567,
      },
    },
  ]

  // Add location property to all activities in all days
  days.forEach((day) => {
    day.activities.forEach((activity) => {
      if (!activity.location) {
        activity.location = `${day.location}`
      }
    })
  })

  return (
    <section id="itinerary" className="scroll-mt-16">
      <Card className="border-primary/20">
        <CardHeader className="border-b border-border">
          <CardTitle className="flex items-center gap-2">
            <CalendarDays className="h-5 w-5 text-primary" />
            每日行程 | Daily Itinerary
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <Tabs defaultValue="all">
            <TabsList className="grid w-full grid-cols-3 bg-gray-50">
              <TabsTrigger value="all" className="data-[state=active]:bg-white">
                全部 | All
              </TabsTrigger>
              <TabsTrigger value="hong-kong" className="data-[state=active]:bg-white">
                香港 | Hong Kong
              </TabsTrigger>
              <TabsTrigger value="japan" className="data-[state=active]:bg-white">
                日本 | Japan
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="pt-4">
              <div className="space-y-8">
                {days.map((day) => (
                  <DayCard key={day.day} day={day} openMap={openMap} setOpenMap={setOpenMap} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="hong-kong" className="pt-4">
              <div className="space-y-8">
                {days
                  .filter((day) => day.location.includes("Hong Kong"))
                  .map((day) => (
                    <DayCard key={day.day} day={day} openMap={openMap} setOpenMap={setOpenMap} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="japan" className="pt-4">
              <div className="space-y-8">
                {days
                  .filter(
                    (day) =>
                      day.location.includes("Kumamoto") ||
                      day.location.includes("Aso") ||
                      day.location.includes("Yufuin") ||
                      day.location.includes("Yanagawa") ||
                      day.location.includes("Dazaifu") ||
                      day.location.includes("Fukuoka"),
                  )
                  .map((day) => (
                    <DayCard key={day.day} day={day} openMap={openMap} setOpenMap={setOpenMap} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  )
}

function DayCard({
  day,
  openMap,
  setOpenMap,
}: {
  day: DayData
  openMap: string | null
  setOpenMap: (url: string | null) => void
}) {
  const getIcon = (iconName: string | undefined) => {
    switch (iconName) {
      case "Landmark":
        return <Landmark className="h-4 w-4" />
      case "Coffee":
        return <Coffee className="h-4 w-4" />
      case "Utensils":
        return <Utensils className="h-4 w-4" />
      case "Camera":
        return <Camera className="h-4 w-4" />
      case "Train":
        return <Train className="h-4 w-4" />
      case "ShoppingBag":
        return <ShoppingBag className="h-4 w-4" />
      case "Mountain":
        return <Mountain className="h-4 w-4" />
      case "Waves":
        return <Waves className="h-4 w-4" />
      case "Droplets":
        return <Droplets className="h-4 w-4" />
      case "Flame":
        return <Flame className="h-4 w-4" />
      case "Home":
        return <Home className="h-4 w-4" />
      case "Car":
        return <Car className="h-4 w-4" />
      case "Plane":
        return <Plane className="h-4 w-4" />
      case "Building":
        return <Building className="h-4 w-4" />
      case "Ticket":
        return <Ticket className="h-4 w-4" />
      case "Shirt":
        return <Shirt className="h-4 w-4" />
      case "Leaf":
        return <Leaf className="h-4 w-4" />
      case "Sparkles":
        return <Sparkles className="h-4 w-4" />
      case "Umbrella":
        return <Umbrella className="h-4 w-4" />
      case "Palette":
        return <Palette className="h-4 w-4" />
      case "Music":
        return <Music className="h-4 w-4" />
      case "Luggage":
        return <Luggage className="h-4 w-4" />
      case "Scissors":
        return <Scissors className="h-4 w-4" />
      case "FileText":
        return <FileText className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  const getDirectionsUrl = (location: string) => {
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location)}&travelmode=driving`
  }

  return (
    <div id={`day-${day.day}`} className="timeline-card scroll-mt-28">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 p-6 bg-white border-r border-gray-100">
          <div className="mb-4 flex items-center gap-3">
            <div className="day-badge">Day {day.day}</div>
            <div>
              <h3 className="text-xl font-semibold mb-1">
                {day.date} | {day.locationChinese}
              </h3>
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                {day.location}
              </Badge>
            </div>
          </div>

          {day.description && <p className="mt-3 text-muted-foreground text-sm">{day.descriptionChinese}</p>}

          <div className="space-y-6 mt-4">
            {day.activities.map((activity, idx) => (
              <div key={idx} className="activity-item">
                <div className="activity-time">
                  {getIcon(activity.icon)}
                  <span className="ml-1">{activity.time}</span>
                </div>
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-lg">
                    {activity.titleChinese} | {activity.title}
                  </h4>
                  {activity.location && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={getDirectionsUrl(activity.location)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 ml-2"
                          >
                            <Navigation className="h-4 w-4" />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>獲取導航 | Get Directions</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
                {activity.description && (
                  <p className="mt-1 text-sm text-muted-foreground">{activity.descriptionChinese}</p>
                )}
                {activity.details && (
                  <ul className="mt-2 space-y-1">
                    {activity.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <span className="h-1 w-1 rounded-full bg-primary mr-2"></span>
                        <span>
                          {activity.detailsChinese?.[i] || ""} {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6">
            {day.coordinates && (
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${day.coordinates.lat},${day.coordinates.lng}&travelmode=driving`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary/80 hover:bg-primary/5 p-2 rounded-md transition-colors"
              >
                <MapPin className="h-5 w-5" />
                <span className="text-sm">導航到此地 | Navigate Here</span>
              </a>
            )}

            <Dialog open={openMap === day.mapUrl} onOpenChange={(open) => setOpenMap(open ? day.mapUrl : null)}>
              <DialogTrigger asChild>
                <button className="flex items-center gap-2 text-primary hover:text-primary/80 hover:bg-primary/5 p-2 rounded-md transition-colors w-full mt-2">
                  <Map className="h-5 w-5" />
                  <span className="text-sm">查看地圖 | View Map</span>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl w-[90vw] bg-white">
                <div className="aspect-video w-full">
                  <iframe
                    src={day.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="md:w-2/3 p-6 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {day.activities.map(
              (activity, idx) =>
                activity.image && (
                  <div key={idx} className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-md">
                    <img
                      src={activity.image || "/placeholder.svg?height=300&width=400"}
                      alt={`${activity.title} - ${day.location}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback if image fails to load
                        e.currentTarget.src = "/placeholder.svg?height=300&width=400"
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-primary/70 text-white p-2 text-sm">
                      {activity.titleChinese} | {activity.title}
                    </div>
                  </div>
                ),
            )}
            {day.images.map((img, idx) => (
              <div key={`img-${idx}`} className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-md">
                <img
                  src={img || "/placeholder.svg?height=300&width=400"}
                  alt={`Day ${day.day} - ${day.location}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.currentTarget.src = "/placeholder.svg?height=300&width=400"
                  }}
                />
              </div>
            ))}
          </div>

          <div className="map-embed aspect-[16/9] w-full">
            <iframe
              src={day.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

