"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted before accessing theme
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    if (mounted) {
      setTheme(theme === "dark" ? "light" : "dark")
    }
  }

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="bg-white/80 backdrop-blur-sm border-primary/20 shadow-md">
        <Sun className="h-[1.2rem] w-[1.2rem] text-amber-500" />
        <span className="sr-only">載入中</span>
      </Button>
    )
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="bg-white/80 backdrop-blur-sm border-primary/20 shadow-md"
          >
            {theme === "dark" ? (
              <Moon className="h-[1.2rem] w-[1.2rem] text-primary" />
            ) : (
              <Sun className="h-[1.2rem] w-[1.2rem] text-amber-500" />
            )}
            <span className="sr-only">切換主題 | Toggle theme</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{theme === "dark" ? "切換至亮色模式 | Switch to Light Mode" : "切換至暗色模式 | Switch to Dark Mode"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

