import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ChatBubble } from "@/components/chat-bubble"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The Neo Veda Academy - Where Passion Meets Excellence",
  description:
    "Elevate your skills with AI-powered learning through our cutting-edge training programs and personalized consultations.",
  keywords: "training, consultancy, AI learning, skill development, professional development",
  openGraph: {
    title: "The Neo Veda Academy",
    description: "Where Passion meets Excellence",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-04%2022.06.43%20-%20A%20futuristic%2C%20minimalist%20logo%20for%20%27The%20Neo%20Veda%20Academy%27.%20The%20design%20features%20sleek%2C%20modern%20typography%20with%20a%20glowing%20ambient%20blur%20effect.%20The%20color%20p.jpg-FCITwoWxrGgicUm8P9z60D3V5OW0xZ.jpeg",
        width: 1200,
        height: 1200,
        alt: "The Neo Veda Academy Logo",
      },
    ],
    type: "website",
    siteName: "The Neo Veda Academy",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Neo Veda Academy",
    description: "Where Passion meets Excellence",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-04%2022.06.43%20-%20A%20futuristic%2C%20minimalist%20logo%20for%20%27The%20Neo%20Veda%20Academy%27.%20The%20design%20features%20sleek%2C%20modern%20typography%20with%20a%20glowing%20ambient%20blur%20effect.%20The%20color%20p.jpg-FCITwoWxrGgicUm8P9z60D3V5OW0xZ.jpeg",
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
          <ChatBubble />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'