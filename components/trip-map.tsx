import { Map } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TripMap() {
  return (
    <section id="map" className="scroll-mt-16">
      <Card className="border-primary/20">
        <CardHeader className="border-b border-border">
          <CardTitle className="flex items-center gap-2">
            <Map className="h-5 w-5 text-primary" />
            行程地圖 | Trip Map
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <Tabs defaultValue="all">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="all">全部行程 | Full Trip</TabsTrigger>
              <TabsTrigger value="hong-kong">香港 | Hong Kong</TabsTrigger>
              <TabsTrigger value="japan">日本 | Japan</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="aspect-[16/9] w-full rounded-lg overflow-hidden relative">
                {/* Full trip map */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m64!1m12!1m3!1d7372.195545605988!2d130.70718231521196!3d32.80286598096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m49!3e0!4m5!1s0x3403e2db9e15c7bb%3A0x5b3a69941de919e6!2sHong%20Kong%20International%20Airport%2C%20Hong%20Kong!3m2!1d22.308047!2d113.9184808!4m5!1s0x3540f47f01a1b7c3%3A0x1e41d0c325b2a2f!2sKumamoto%20Castle%2C%20Honmaru%2C%20Chuo%20Ward%2C%20Kumamoto%2C%20860-0002%20Japan!3m2!1d32.8060398!2d130.7059224!4m5!1s0x35405c8eddf8cb35%3A0x87273d5d517d4c8a!2sMount%20Aso%2C%20Aso%2C%20Kumamoto%20869-2611%2C%20Japan!3m2!1d32.8841644!2d131.1040499!4m5!1s0x3546a7c4eea5e0bb%3A0x304d738132c8c232!2sYufuin%2C%20Yufu%2C%20Oita%20879-5102%2C%20Japan!3m2!1d33.2644444!2d131.3683333!4m5!1s0x3538c7a5a449b48d%3A0xd1a671c047d57c09!2sYanagawa%2C%20Fukuoka%2C%20Japan!3m2!1d33.1630463!2d130.4078355!4m5!1s0x3541eda1e9848429%3A0xf60a729936398783!2sDazaifu%20Tenmangu%2C%204%20Chome-7-1%20Saifu%2C%20Dazaifu%2C%20Fukuoka%20818-0117%2C%20Japan!3m2!1d33.5193234!2d130.5308552!4m5!1s0x3541eda1e9848429%3A0xf60a729936398783!2sFukuoka%2C%20Japan!3m2!1d33.5901838!2d130.4016888!4m5!1s0x3403e2db9e15c7bb%3A0x5b3a69941de919e6!2sHong%20Kong%20International%20Airport%2C%20Hong%20Kong!3m2!1d22.308047!2d113.9184808!5e0!3m2!1sen!2sus!4v1585678123456!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">香港行程亮點 | Hong Kong Highlights</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• 太平山頂 | Victoria Peak (Day 2, 16)</li>
                    <li>• 尖沙咀海濱 | Tsim Sha Tsui Promenade (Day 3, 16)</li>
                    <li>• 昂坪360和大佛 | Ngong Ping 360 & Big Buddha (Day 4)</li>
                    <li>• 香港迪士尼樂園 | Hong Kong Disneyland (Day 14)</li>
                    <li>• 海洋公園 | Ocean Park (Day 15)</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">日本九州行程亮點 | Kyushu Highlights</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• 熊本城 | Kumamoto Castle (Day 6)</li>
                    <li>• 阿蘇火山 | Aso Volcano (Day 7)</li>
                    <li>• 由布院溫泉 | Yufuin Onsen (Day 8-9)</li>
                    <li>• 柳川遊船 | Yanagawa River Cruise (Day 10)</li>
                    <li>• 大宰府天滿宮 | Dazaifu Tenmangu Shrine (Day 11)</li>
                    <li>• 福岡中洲屋台 | Fukuoka Nakasu Yatai (Day 11)</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="hong-kong">
              <div className="aspect-[16/9] w-full rounded-lg overflow-hidden relative">
                {/* Hong Kong map */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m52!1m12!1m3!1d236161.6389082634!2d113.98948847859352!3d22.352097722421845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m37!3e0!4m5!1s0x3403e2db9e15c7bb%3A0x5b3a69941de919e6!2sHong%20Kong%20International%20Airport%2C%20Hong%20Kong!3m2!1d22.308047!2d113.9184808!4m5!1s0x340400f179a6bb57%3A0x8c3a7e5f1c2e4bd9!2z5rKZ5bC85bSH5Y-w!3m2!1d22.3189747!2d114.1696567!4m5!1s0x3404007c40b42f8b%3A0xfe9ddfd450686fd1!2z5aSp5bmz5bGx6aas!3m2!1d22.2789747!2d114.1596567!4m5!1s0x340400b0b8620c51%3A0xd89c839c5c6f13ba!2z5peX5aSn5LuU56aP!3m2!1d22.3189747!2d114.1796567!4m5!1s0x3401553ede4a3fb5%3A0x6c2e9a4f6d5b4bcb!2z5aSn5aOr5aSn5L2V!3m2!1d22.2589747!2d113.9096567!4m5!1s0x3403fc3a7a0d8a0f%3A0xdd0ba5adcd3d2a63!2z6aaZ5riv6L-q5aOr5bC85YWs5ZyS!3m2!1d22.3129747!2d114.0456567!5e0!3m2!1sen!2sus!4v1585678123456!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">香港行程亮點 | Hong Kong Highlights</h3>
                <ul className="space-y-1 text-sm">
                  <li>• 太平山頂 | Victoria Peak (Day 2, 16) - 欣賞香港壯麗的全景</li>
                  <li>• 尖沙咀海濱 | Tsim Sha Tsui Promenade (Day 3, 16) - 觀賞幻彩詠香江燈光秀</li>
                  <li>• 昂坪360和大佛 | Ngong Ping 360 & Big Buddha (Day 4) - 體驗纜車和參觀天壇大佛</li>
                  <li>• 大澳漁村 | Tai O Fishing Village (Day 4) - 探索傳統棚屋和水鄉風光</li>
                  <li>• 南蓮園池和志蓮淨苑 | Nan Lian Garden & Chi Lin Nunnery (Day 13) - 欣賞唐朝風格的建築和園林</li>
                  <li>• 西貢海鮮 | Sai Kung Seafood (Day 13) - 品嚐新鮮海鮮</li>
                  <li>• 廟街夜市 | Temple Street Night Market (Day 13) - 體驗當地文化和購物</li>
                  <li>• 香港迪士尼樂園 | Hong Kong Disneyland (Day 14) - 享受主題公園的樂趣</li>
                  <li>• 海洋公園 | Ocean Park (Day 15) - 體驗刺激的遊樂設施和海洋生物展覽</li>
                  <li>• 赤柱市集 | Stanley Market (Day 15) - 在海濱購物區購物</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="japan">
              <div className="aspect-[16/9] w-full rounded-lg overflow-hidden relative">
                {/* Japan Kyushu map */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d1683825.3633170595!2d130.0718823582031!3d33.05286598096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e0!4m5!1s0x3540f47f01a1b7c3%3A0x1e41d0c325b2a2f!2sKumamoto%20Castle%2C%20Honmaru%2C%20Chuo%20Ward%2C%20Kumamoto%2C%20860-0002%20Japan!3m2!1d32.8060398!2d130.7059224!4m5!1s0x35405c8eddf8cb35%3A0x87273d5d517d4c8a!2sMount%20Aso%2C%20Aso%2C%20Kumamoto%20869-2611%2C%20Japan!3m2!1d32.8841644!2d131.1040499!4m5!1s0x3546a7c4eea5e0bb%3A0x304d738132c8c232!2sYufuin%2C%20Yufu%2C%20Oita%20879-5102%2C%20Japan!3m2!1d33.2644444!2d131.3683333!4m5!1s0x3538c7a5a449b48d%3A0xd1a671c047d57c09!2sYanagawa%2C%20Fukuoka%2C%20Japan!3m2!1d33.1630463!2d130.4078355!5e0!3m2!1sen!2sus!4v1585678123456!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">日本九州行程亮點 | Kyushu Highlights</h3>
                <ul className="space-y-1 text-sm">
                  <li>• 熊本城 | Kumamoto Castle (Day 6) - 參觀日本三大名城之一</li>
                  <li>• 水前寺公園 | Suizenji Garden (Day 6) - 欣賞代表東海道的微型景觀日本庭園</li>
                  <li>• 熊本熊廣場 | Kumamon Square (Day 6) - 了解熊本著名的吉祥物</li>
                  <li>• 阿蘇火山 | Aso Volcano (Day 7) - 參觀世界上最大的活火山之一</li>
                  <li>• 阿蘇神社 | Aso Shrine (Day 7) - 遊覽歷史悠久的神社</li>
                  <li>• 黑川溫泉 | Kurokawa Onsen (Day 7) - 體驗傳統日式溫泉</li>
                  <li>• 由布院溫泉 | Yufuin Onsen (Day 8-9) - 享受溫泉體驗和水療護理</li>
                  <li>• 金鱗湖 | Lake Kinrinko (Day 9) - 欣賞晨霧籠罩下的美麗湖景</li>
                  <li>• 由布院花卉村 | Yufuin Floral Village (Day 9) - 探索歐式風格村莊</li>
                  <li>• 柳川遊船 | Yanagawa River Cruise (Day 10) - 乘坐傳統平底船遊覽運河</li>
                  <li>• 大宰府天滿宮 | Dazaifu Tenmangu Shrine (Day 11) - 參觀供奉學問之神的重要神社</li>
                  <li>• 福岡運河城 | Canal City Hakata (Day 11) - 探索大型購物娛樂綜合設施</li>
                  <li>• 福岡中洲屋台 | Fukuoka Nakasu Yatai (Day 11) - 體驗當地美食文化</li>
                  <li>• 大濠公園 | Ohori Park (Day 12) - 參觀福岡市中心的風景公園</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  )
}

