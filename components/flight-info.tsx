import { Plane, Calendar, Clock, MapPin, Briefcase } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FlightInfo() {
  const createFlightSearchUrl = (flightNumber: string) => {
    return `https://www.google.com/search?q=${encodeURIComponent(flightNumber)}`
  }

  return (
    <section id="flights" className="scroll-mt-16">
      <Card className="border-primary/20">
        <CardHeader className="border-b border-border">
          <CardTitle className="flex items-center gap-2">
            <Plane className="h-5 w-5 text-primary" />
            航班信息 | Flight Information
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <Tabs defaultValue="outbound">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
              <TabsTrigger value="outbound">去程 | Outbound</TabsTrigger>
              <TabsTrigger value="hk-kumamoto">香港 - 熊本 | Hong Kong - Kumamoto</TabsTrigger>
              <TabsTrigger value="fukuoka-hk">福岡 - 香港 | Fukuoka - Hong Kong</TabsTrigger>
            </TabsList>
            <TabsContent value="outbound" className="pt-4">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flight-card">
                  <div className="flight-header">
                    <h3 className="font-bold text-lg">倫敦 - 杜拜 | London - Dubai</h3>
                  </div>
                  <div className="flight-content">
                    <div className="flight-detail">
                      <Calendar className="flight-detail-icon h-4 w-4" />
                      <span>2025年3月31日 20:40，倫敦希斯羅機場 T3</span>
                    </div>
                    <div className="flight-detail">
                      <Clock className="flight-detail-icon h-4 w-4" />
                      <span>2025年4月1日 06:35，杜拜國際機場 T3</span>
                    </div>
                    <div className="flight-detail">
                      <Plane className="flight-detail-icon h-4 w-4" />
                      <span>
                        <a
                          href={createFlightSearchUrl("Emirates EK004")}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          阿聯酋航空 (Emirates) EK004
                        </a>
                      </span>
                    </div>
                    <div className="flight-detail">
                      <Clock className="flight-detail-icon h-4 w-4" />
                      <span>轉機時間: 3小時25分鐘</span>
                    </div>
                    <div className="flight-detail">
                      <Briefcase className="flight-detail-icon h-4 w-4" />
                      <span>行李: 已托運至最終目的地</span>
                    </div>
                  </div>
                </div>

                <div className="flight-card">
                  <div className="flight-header">
                    <h3 className="font-bold text-lg">杜拜 - 香港 | Dubai - Hong Kong</h3>
                  </div>
                  <div className="flight-content">
                    <div className="flight-detail">
                      <Calendar className="flight-detail-icon h-4 w-4" />
                      <span>2025年4月1日 10:00，杜拜國際機場 T3</span>
                    </div>
                    <div className="flight-detail">
                      <Clock className="flight-detail-icon h-4 w-4" />
                      <span>2025年4月1日 21:15，香港國際機場 T1</span>
                    </div>
                    <div className="flight-detail">
                      <Plane className="flight-detail-icon h-4 w-4" />
                      <span>
                        <a
                          href={createFlightSearchUrl("Emirates EK380")}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          阿聯酋航空 (Emirates) EK380
                        </a>
                      </span>
                    </div>
                    <div className="flight-detail">
                      <MapPin className="flight-detail-icon h-4 w-4" />
                      <span>抵達後: 前往酒店休息</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="hk-kumamoto" className="pt-4">
              <div className="flight-card">
                <div className="flight-header">
                  <h3 className="font-bold text-lg">香港 - 熊本 | Hong Kong - Kumamoto</h3>
                </div>
                <div className="flight-content">
                  <div className="flight-detail">
                    <Calendar className="flight-detail-icon h-4 w-4" />
                    <span>2025年4月5日 11:40，香港國際機場 T1</span>
                  </div>
                  <div className="flight-detail">
                    <Clock className="flight-detail-icon h-4 w-4" />
                    <span>2025年4月5日 15:40，熊本機場</span>
                  </div>
                  <div className="flight-detail">
                    <Plane className="flight-detail-icon h-4 w-4" />
                    <span>
                      <a
                        href={createFlightSearchUrl("Hong Kong Airlines HX686")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        香港航空 (Hong Kong Airlines) HX686
                      </a>
                    </span>
                  </div>
                  <div className="flight-detail">
                    <Clock className="flight-detail-icon h-4 w-4" />
                    <span>飛行時間: 約4小時</span>
                  </div>
                  <div className="flight-detail">
                    <MapPin className="flight-detail-icon h-4 w-4" />
                    <span>抵達後: 租車前往熊本市區</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 aspect-video w-full rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2070&auto=format&fit=crop"
                  alt="Airplane"
                  className="w-full h-full object-cover"
                />
              </div>
            </TabsContent>
            <TabsContent value="fukuoka-hk" className="pt-4">
              <div className="flight-card">
                <div className="flight-header">
                  <h3 className="font-bold text-lg">福岡 - 香港 | Fukuoka - Hong Kong</h3>
                </div>
                <div className="flight-content">
                  <div className="flight-detail">
                    <Calendar className="flight-detail-icon h-4 w-4" />
                    <span>2025年4月12日 16:00，福岡機場</span>
                  </div>
                  <div className="flight-detail">
                    <Clock className="flight-detail-icon h-4 w-4" />
                    <span>2025年4月12日 18:45，香港國際機場 T1</span>
                  </div>
                  <div className="flight-detail">
                    <Plane className="flight-detail-icon h-4 w-4" />
                    <span>
                      <a
                        href={createFlightSearchUrl("Hong Kong Airlines HX641")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        香港航空 (Hong Kong Airlines) HX641
                      </a>
                    </span>
                  </div>
                  <div className="flight-detail">
                    <Clock className="flight-detail-icon h-4 w-4" />
                    <span>飛行時間: 約3小時45分鐘</span>
                  </div>
                  <div className="flight-detail">
                    <MapPin className="flight-detail-icon h-4 w-4" />
                    <span>抵達後: 前往VWalk和滿記甜品</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 aspect-video w-full rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
                  alt="Airplane"
                  className="w-full h-full object-cover"
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-6 flight-card">
            <div className="flight-header">
              <h3 className="font-bold text-lg">回程 | Return</h3>
            </div>
            <div className="flight-content">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <div className="flight-detail">
                    <Calendar className="flight-detail-icon h-4 w-4" />
                    <span>
                      香港 - 杜拜: 2025年4月16日 18:15 - 23:10，
                      <a
                        href={createFlightSearchUrl("Emirates EK383")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        阿聯酋航空 EK383
                      </a>
                    </span>
                  </div>
                  <div className="flight-detail">
                    <Calendar className="flight-detail-icon h-4 w-4" />
                    <span>
                      杜拜 - 倫敦: 2025年4月17日 02:30 - 07:05，
                      <a
                        href={createFlightSearchUrl("Emirates EK007")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        阿聯酋航空 EK007
                      </a>
                    </span>
                  </div>
                  <div className="flight-detail">
                    <MapPin className="flight-detail-icon h-4 w-4" />
                    <span>抵達後: 由爸爸Philip在機場等候與揸車回家中</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=2070&auto=format&fit=crop"
                    alt="Emirates Airplane"
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

