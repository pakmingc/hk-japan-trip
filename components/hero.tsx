import { CalendarDays, MapPin } from "lucide-react"

export default function Hero() {
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=2071&auto=format&fit=crop')",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
          香港日本之旅 | Hong Kong & Japan Trip 2025
        </h1>
        <p className="text-xl md:text-2xl mb-6 animate-fade-in delay-100">
          17天的冒險與文化體驗 | 17 Days of Adventure & Culture
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center animate-fade-in delay-200">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-5 w-5" />
            <span>2025年4月1日 - 4月17日 | April 1 - April 17, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <span>香港 & 日本九州 | Hong Kong & Kyushu, Japan</span>
          </div>
        </div>
      </div>
    </div>
  )
}

