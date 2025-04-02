import { ScrollText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Overview() {
  return (
    <section id="overview" className="scroll-mt-16">
      <Card className="border-primary/20">
        <CardHeader className="border-b border-border">
          <CardTitle className="flex items-center gap-2">
            <ScrollText className="h-5 w-5 text-primary" />
            行程概覽 | Trip Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid gap-4">
            <p className="text-muted-foreground leading-relaxed">
              這次旅行將帶您遊覽香港和日本九州地區的精彩景點。行程的前四天和最後五天將在香港度過，體驗這座國際大都市的獨特魅力。中間的八天將在日本九州地區，包括熊本、阿蘇火山、由布院、柳川、大宰府和福岡等地。您將體驗日本獨特的文化、美食和自然風光，同時探索香港的城市魅力。
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This trip will take you through the amazing attractions of Hong Kong and Japan's Kyushu region. The first
              four days and the last five days will be spent in Hong Kong, experiencing the unique charm of this
              international metropolis. The middle eight days will be in Japan's Kyushu region, including Kumamoto, Aso
              Volcano, Yufuin, Yanagawa, Dazaifu, and Fukuoka. You will experience Japan's unique culture, cuisine, and
              natural scenery, while also exploring the urban charm of Hong Kong.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

