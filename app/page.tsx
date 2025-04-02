import { Toaster } from "@/components/ui/toaster"
import Hero from "@/components/hero"
import Timeline from "@/components/timeline"
import FlightInfo from "@/components/flight-info"
import Overview from "@/components/overview"
import TripMap from "@/components/trip-map"
import Gallery from "@/components/gallery"
import Faq from "@/components/faq"
import WhatsAppButton from "@/components/whatsapp-button"
import ThemeToggle from "@/components/theme-toggle"
import Participants from "@/components/participants"
import QuickNav from "@/components/quick-nav"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster />
      <Hero />
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:gap-12">
          <Overview />
          <Participants />
          <FlightInfo />
          <Timeline />
          <TripMap />
          <Gallery />
          <Faq />
        </div>
      </main>
      <footer className="bg-white py-8 mt-16 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">香港日本之旅 | Hong Kong & Japan Trip 2025</h2>
          <p className="mb-2">2025年4月1日 - 4月17日 | April 1 - April 17, 2025</p>
          <p className="text-sm text-muted-foreground">© 2025 Pak Design. All Rights Reserved</p>
        </div>
      </footer>
      <WhatsAppButton />
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <QuickNav />
    </div>
  )
}

