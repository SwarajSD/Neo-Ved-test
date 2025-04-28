"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-lg p-4 mb-4 w-72 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-04%2022.06.43%20-%20A%20futuristic%2C%20minimalist%20logo%20for%20%27The%20Neo%20Veda%20Academy%27.%20The%20design%20features%20sleek%2C%20modern%20typography%20with%20a%20glowing%20ambient%20blur%20effect.%20The%20color%20p.jpg-AMLYUvqvTrgyNxiqEpOwAP1sUfN7B1.jpeg"
                alt="Neo Veda Academy Logo"
                width={30}
                height={30}
                className="rounded-full"
              />
              <span className="font-medium text-gray-100">Neo Veda Assistant</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-gray-400 hover:text-gray-100"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="text-gray-300 mb-4">Want to know more? Connect with us by clicking</div>
          <Link href="https://www.surveymonkey.com/r/VNYZ55R" target="_blank">
            <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white">
              Contact Us <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      ) : null}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 shadow-lg flex items-center justify-center"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-04%2022.06.43%20-%20A%20futuristic%2C%20minimalist%20logo%20for%20%27The%20Neo%20Veda%20Academy%27.%20The%20design%20features%20sleek%2C%20modern%20typography%20with%20a%20glowing%20ambient%20blur%20effect.%20The%20color%20p.jpg-AMLYUvqvTrgyNxiqEpOwAP1sUfN7B1.jpeg"
              alt="Neo Veda Academy Logo"
              width={24}
              height={24}
              className="rounded-full"
            />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full animate-pulse"></span>
          </div>
        )}
      </Button>
    </div>
  )
}
