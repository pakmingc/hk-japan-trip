import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "香港日本之旅 | Hong Kong & Japan Trip 2025",
  description: "17天的冒險與文化體驗 | 17 Days of Adventure & Culture",
  openGraph: {
    title: "香港日本之旅 | Hong Kong & Japan Trip 2025",
    description: "17天的冒險與文化體驗 | 17 Days of Adventure & Culture",
    images: [
      {
        url: "https://images.unsplash.com/photo-1506970845246-18f21d533b20?q=80&w=2070&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Hong Kong & Japan Trip 2025",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-tw" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'