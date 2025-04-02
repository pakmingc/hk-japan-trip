import { Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Participants() {
  const participants = [
    {
      name: "Kit",
      role: "媽媽 | Mom",
      description: "旅行的組織者，負責整體行程規劃和協調。",
      descriptionEn: "Trip organizer, responsible for overall itinerary planning and coordination.",
    },
    {
      name: "Ugene",
      role: "家庭成員 | Family Member",
      description: "對日本文化和美食特別感興趣，期待體驗當地生活。",
      descriptionEn:
        "Particularly interested in Japanese culture and cuisine, looking forward to experiencing local life.",
    },
    {
      name: "Gianna",
      role: "家庭成員 | Family Member",
      description: "喜歡攝影，負責記錄旅途中的美好時刻。",
      descriptionEn: "Photography enthusiast, responsible for capturing beautiful moments during the trip.",
    },
    {
      name: "婆婆",
      role: "祖母 | Grandmother",
      description: "享受與家人一起旅行的時光，特別期待香港的美食。",
      descriptionEn: "Enjoys traveling with family, especially looking forward to Hong Kong cuisine.",
    },
    {
      name: "大舅父",
      role: "舅父 | Uncle",
      description: "對歷史和文化景點有濃厚興趣，將在日本部分行程中擔任嚮導。",
      descriptionEn:
        "Has a strong interest in historical and cultural sites, will serve as a guide during the Japan portion of the trip.",
    },
    {
      name: "Coke",
      role: "姐姐 | Auntie",
      description: "熱愛探索新地方，對日本的飲食和購物特別感興趣。",
      descriptionEn: "Loves exploring new places, particularly interested in Japanese cuisine and shopping.",
    },
  ]

  return (
    <section id="participants" className="scroll-mt-16">
      <Card className="border-primary/20">
        <CardHeader className="border-b border-border">
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            旅行成員 | Trip Participants
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/94d2fb67-60ef-43d2-8cbe-52e3b234c1f6-ov5uJufdHwblVNodhgyc1IN6jaJNX2.png"
              alt="家庭在機場自拍 | Family selfie at airport"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Apr%201%2C%202025%2C%2002_56_07%20PM-PIp84Kyz5lWUMJNhZjWd48Yqs4iXTt.png"
              alt="家庭在機場 | Family at airport"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6 mt-6">
            <div className="space-y-2">
              <img
                src="/images/family-cartoon-spa.png"
                alt="家庭溫泉卡通 | Family Onsen Cartoon"
                className="w-full h-auto rounded-lg shadow-md"
              />
              <p className="text-sm text-center text-muted-foreground">
                溫泉後的歡樂時光 | Fun time after onsen (Day 8)
              </p>
            </div>
            <div className="space-y-2">
              <img
                src="/images/family-spa-day.png"
                alt="家庭溫泉體驗 | Family Onsen Experience"
                className="w-full h-auto rounded-lg shadow-md"
              />
              <p className="text-sm text-center text-muted-foreground">
                由布院溫泉體驗 | Yufuin Onsen Experience (Day 8)
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-6">
            {participants.map((participant, idx) => (
              <div
                key={idx}
                className="participant-card bg-white rounded-lg shadow-sm border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <span className="text-xl font-bold text-primary">{participant.name.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-semibold text-primary">{participant.name}</h3>
                <p className="text-xs text-muted-foreground mb-2">{participant.role}</p>
                <p className="text-xs">{participant.description}</p>
                <p className="text-xs text-muted-foreground mt-1">{participant.descriptionEn}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

