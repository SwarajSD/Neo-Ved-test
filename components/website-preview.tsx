"use client"

import Image from "next/image"
import Link from "next/link"

export function WebsitePreview() {
  return (
    <Link href="/" className="block group">
      <div className="relative overflow-hidden rounded-lg border border-gray-800 bg-gray-950 transition-all hover:border-cyan-500/50">
        <div className="aspect-square relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-04%2022.06.43%20-%20A%20futuristic%2C%20minimalist%20logo%20for%20%27The%20Neo%20Veda%20Academy%27.%20The%20design%20features%20sleek%2C%20modern%20typography%20with%20a%20glowing%20ambient%20blur%20effect.%20The%20color%20p.jpg-FCITwoWxrGgicUm8P9z60D3V5OW0xZ.jpeg"
            alt="The Neo Veda Academy"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-950 to-transparent p-4">
          <h3 className="font-semibold text-gray-100 text-lg">The Neo Veda Academy</h3>
          <p className="text-sm text-gray-400">Where Passion meets Excellence</p>
        </div>
      </div>
    </Link>
  )
}
