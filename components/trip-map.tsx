import { Map } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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
          <div className="aspect-[16/9] w-full rounded-lg overflow-hidden relative">
            {/* Using a more reliable Google Maps embed URL */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m64!1m12!1m3!1d7372.195545605988!2d130.70718231521196!3d32.80286598096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m49!3e0!4m5!1s0x3403e2db9e15c7bb%3A0x5b3a69941de919e6!2sHong%20Kong%20International%20Airport%2C%20Hong%20Kong!3m2!1d22.308047!2d113.9184808!4m5!1s0x3540f47f01a1b7c3%3A0x1e41d0c325b2a2f!2sKumamoto%20Castle%2C%20Honmaru%2C%20Chuo%20Ward%2C%20Kumamoto%2C%20860-0002%20Japan!3m2!1d32.8060398!2d130.7059224!4m5!1s0x35405c8eddf8cb35%3A0x87273d5d517d4c8a!2sMount%20Aso%2C%20Aso%2C%20Kumamoto%20869-2611%2C%20Japan!3m2!1d32.8841644!2d131.1040499!4m5!1s0x3546a7c4eea5e0bb%3A0x304d738132c8c232!2sYufuin%2C%20Yufu%2C%20Oita%20879-5102%2C%20Japan!3m2!1d33.2644444!2d131.3683333!4m5!1s0x3538c7a5a449b48d%3A0xd1a671c047d57c09!2sYanagawa%2C%20Fukuoka%2C%20Japan!3m2!1d33.1630463!2d130.4078355!4m5!1s0x3541eda1e9848429%3A0xf60a729936398783!2sDazaifu%20Tenmangu%2C%204%20Chome-7-1%20Saifu%2C%20Dazaifu%2C%20Fukuoka%20818-0117%2C%20Japan!3m2!1d33.5193234!2d130.5308552!4m5!1s0x3541eda1e9848429%3A0xf60a729936398783!2sFukuoka%2C%20Japan!3m2!1d33.5901838!2d130.4016888!4m5!1s0x3403e2db9e15c7bb%3A0x5b3a69941de919e6!2sHong%20Kong%20International%20Airport%2C%20Hong%20Kong!3m2!1d22.308047!2d113.9184808!5e0!3m2!1sen!2sus!4v1585678123456!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Map markers with tooltips */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="relative w-full h-full">
                {/* Hong Kong */}
                <div className="absolute top-[60%] left-[20%]">
                  <div className="map-marker" title="香港 | Hong Kong"></div>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded text-xs font-bold shadow-md">
                    香港
                    <br />
                    Hong Kong
                  </div>
                </div>

                {/* Kumamoto */}
                <div className="absolute top-[40%] left-[70%]">
                  <div className="map-marker" title="熊本 | Kumamoto"></div>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded text-xs font-bold shadow-md">
                    熊本
                    <br />
                    Kumamoto
                  </div>
                </div>

                {/* Aso */}
                <div className="absolute top-[30%] left-[75%]">
                  <div className="map-marker" title="阿蘇 | Aso"></div>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded text-xs font-bold shadow-md">
                    阿蘇
                    <br />
                    Aso
                  </div>
                </div>

                {/* Yufuin */}
                <div className="absolute top-[25%] left-[65%]">
                  <div className="map-marker" title="由布院 | Yufuin"></div>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded text-xs font-bold shadow-md">
                    由布院
                    <br />
                    Yufuin
                  </div>
                </div>

                {/* Yanagawa */}
                <div className="absolute top-[35%] left-[60%]">
                  <div className="map-marker" title="柳川 | Yanagawa"></div>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded text-xs font-bold shadow-md">
                    柳川
                    <br />
                    Yanagawa
                  </div>
                </div>

                {/* Dazaifu */}
                <div className="absolute top-[22%] left-[72%]">
                  <div className="map-marker" title="大宰府 | Dazaifu"></div>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded text-xs font-bold shadow-md">
                    大宰府
                    <br />
                    Dazaifu
                  </div>
                </div>

                {/* Fukuoka */}
                <div className="absolute top-[20%] left-[80%]">
                  <div className="map-marker" title="福岡 | Fukuoka"></div>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded text-xs font-bold shadow-md">
                    福岡
                    <br />
                    Fukuoka
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 text-muted-foreground">
            <p className="mb-2">
              此地圖顯示了香港和日本九州地區的主要景點，包括香港市區、熊本、阿蘇火山、由布院、柳川、大宰府和福岡。您可以點擊地圖上的標記查看詳細信息。
            </p>
            <p>
              This map shows the main attractions in Hong Kong and Japan's Kyushu region, including Hong Kong urban
              areas, Kumamoto, Aso Volcano, Yufuin, Yanagawa, Dazaifu, and Fukuoka. You can click on the markers to view
              detailed information.
            </p>
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
        </CardContent>
      </Card>
    </section>
  )
}

