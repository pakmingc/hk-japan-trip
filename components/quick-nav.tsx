"use client"

import { useState, useEffect, useRef } from "react"
import { MapPin, Calendar, Plane, Users, ImageIcon, HelpCircle, ScrollText, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function QuickNav() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [isSticky, setIsSticky] = useState(false)
  const [showDaySelector, setShowDaySelector] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-collapse menu after period of inactivity on mobile
  const startCollapseTimer = () => {
    if (isMobile && timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    if (isMobile && isExpanded) {
      timeoutRef.current = setTimeout(() => {
        setIsExpanded(false)
      }, 5000) // Collapse after 5 seconds of inactivity
    }
  }

  // Reset timer when user interacts with the menu
  const resetTimer = () => {
    if (isMobile && timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      startCollapseTimer()
    }
  }

  useEffect(() => {
    startCollapseTimer()

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [isExpanded, isMobile])

  useEffect(() => {
    const handleScroll = () => {
      // Make the navigation sticky after scrolling past the hero section
      if (window.scrollY > 300) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }

      // Determine which section is currently in view
      const sections = ["overview", "participants", "flights", "itinerary", "map", "gallery", "faq"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    // Handle clicks outside the nav to collapse it on mobile
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node) && isMobile && isExpanded) {
        setIsExpanded(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isExpanded, isMobile])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      if (isMobile) {
        setIsExpanded(false)
      }
    }
  }

  const scrollToDay = (day: number) => {
    const element = document.getElementById(`day-${day}`)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setShowDaySelector(false)
      if (isMobile) {
        setIsExpanded(false)
      }
    }
  }

  const navItems = [
    { id: "overview", label: "概覽", labelEn: "Overview", icon: <ScrollText className="h-4 w-4" /> },
    { id: "participants", label: "成員", labelEn: "Members", icon: <Users className="h-4 w-4" /> },
    { id: "flights", label: "航班", labelEn: "Flights", icon: <Plane className="h-4 w-4" /> },
    { id: "itinerary", label: "行程", labelEn: "Itinerary", icon: <Calendar className="h-4 w-4" /> },
    { id: "map", label: "地圖", labelEn: "Map", icon: <MapPin className="h-4 w-4" /> },
    { id: "gallery", label: "照片", labelEn: "Photos", icon: <ImageIcon className="h-4 w-4" /> },
    { id: "faq", label: "問答", labelEn: "FAQ", icon: <HelpCircle className="h-4 w-4" /> },
  ]

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          "fixed z-50 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 md:hidden",
          isSticky ? "opacity-100" : "opacity-0 pointer-events-none",
          isExpanded
            ? "right-4 top-20 bg-white/90 backdrop-blur-sm w-10 h-10 border border-gray-200"
            : "right-4 top-20 bg-primary text-white w-12 h-12",
        )}
      >
        {isExpanded ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Navigation menu */}
      <div
        ref={navRef}
        onMouseEnter={() => isMobile && setIsExpanded(true)}
        onMouseMove={resetTimer}
        onClick={resetTimer}
        className={cn(
          "fixed z-50 transition-all duration-300",
          isSticky ? "opacity-100" : "opacity-0 pointer-events-none",
          isMobile ? (isExpanded ? "right-4 top-32 transform-none" : "right-[-250px] top-32") : "right-4 top-20",
        )}
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-2 border border-gray-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-md w-full text-left text-sm transition-colors",
                activeSection === item.id
                  ? "bg-primary/10 text-primary font-medium"
                  : "hover:bg-gray-100 text-gray-700",
              )}
            >
              {item.icon}
              <span className="md:inline">
                {item.label} {!isMobile && `| ${item.labelEn}`}
              </span>
            </button>
          ))}
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-2 border border-gray-200 mt-2">
          <div className="text-xs font-medium text-center mb-2 text-gray-500">地區 | Regions</div>
          <div className="flex flex-col gap-1">
            <button
              onClick={() => {
                const element = document.querySelector('[value="hong-kong"]')
                if (element instanceof HTMLElement) {
                  element.click()
                }
                scrollToSection("itinerary")
              }}
              className="flex items-center justify-center gap-1 px-3 py-2 rounded-md bg-red-50 hover:bg-red-100 text-red-600 text-sm"
            >
              <MapPin className="h-3 w-3" />
              香港 | Hong Kong
            </button>
            <button
              onClick={() => {
                const element = document.querySelector('[value="japan"]')
                if (element instanceof HTMLElement) {
                  element.click()
                }
                scrollToSection("itinerary")
              }}
              className="flex items-center justify-center gap-1 px-3 py-2 rounded-md bg-blue-50 hover:bg-blue-100 text-blue-600 text-sm"
            >
              <MapPin className="h-3 w-3" />
              日本 | Japan
            </button>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-2 border border-gray-200 mt-2">
          <button
            onClick={() => setShowDaySelector(!showDaySelector)}
            className="flex items-center justify-center gap-1 px-3 py-2 rounded-md bg-primary/10 hover:bg-primary/20 text-primary text-sm w-full"
          >
            <Calendar className="h-3 w-3" />
            跳至日期 | Jump to Day
          </button>

          {showDaySelector && (
            <div className="mt-2 grid grid-cols-4 gap-1">
              {Array.from({ length: 17 }, (_, i) => i + 1).map((day) => (
                <button
                  key={day}
                  onClick={() => scrollToDay(day)}
                  className="px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded"
                >
                  {day}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

