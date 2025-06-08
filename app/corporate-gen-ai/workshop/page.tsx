"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles-background"
import { ChatPopup } from "@/components/chat-popup"

export default function WorkshopPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <ParticlesBackground />
      <ChatPopup />

      {/* Header */}
      <header className="relative z-10 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="https://v0-saa-s-landing-page-design-roan.vercel.app/" className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-04%2022.06.43%20-%20A%20futuristic%2C%20minimalist%20logo%20for%20%27The%20Neo%20Veda%20Academy%27.%20The%20design%20features%20sleek%2C%20modern%20typography%20with%20a%20glowing%20ambient%20blur%20effect.%20The%20color%20p.jpg-kenHNOUl8eEp4SHAKN09pB0VusPukp.jpeg"
                alt="The Neo Veda Academy Logo"
                width={50}
                height={50}
                className="mr-3"
              />
              <div>
                <h1 className="text-xl font-bold tracking-wider">THE NEO VEDA ACADEMY</h1>
                <p className="text-sm text-cyan-400 italic">Where knowledge meets transformation</p>
              </div>
            </Link>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                className="text-white hover:text-cyan-400"
                onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
              >
                Contact Us
              </Button>
              <Link href="/">
                <Button variant="ghost" className="text-white hover:text-cyan-400">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Neural Transmission Events
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Immersive workshops and speaking engagements where knowledge transfer occurs at maximum bandwidth.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
              onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
            >
              Request Custom Workshop
            </Button>
          </div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Enterprise AI Transformation */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all overflow-hidden group">
              <div className="h-48 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 flex items-center justify-center">
                <div className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity">🌐</div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-cyan-400">March 2024</span>
                  <span className="text-xs px-3 py-1 bg-gray-800 rounded-full text-gray-300">Corporate Workshop</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  Enterprise AI Transformation
                </h3>
                <p className="text-gray-400 mb-4">Fortune 500 Financial Services</p>
                <p className="text-gray-300 mb-6">
                  3-day immersive workshop for 50+ executives on implementing Gen AI across customer service operations.
                </p>
                <div className="flex justify-between items-center">
                  <Button variant="outline" className="text-cyan-400 border-cyan-400 hover:bg-cyan-400/10">
                    View Details
                  </Button>
                  <div className="text-xs text-gray-500">On-site Delivery</div>
                </div>
              </div>
            </div>

            {/* Prompt Engineering Masterclass */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all overflow-hidden group">
              <div className="h-48 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 flex items-center justify-center">
                <div className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity">🔮</div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-cyan-400">January 2024</span>
                  <span className="text-xs px-3 py-1 bg-gray-800 rounded-full text-gray-300">Technical Deep Dive</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  Prompt Engineering Masterclass
                </h3>
                <p className="text-gray-400 mb-4">Global Consulting Firm</p>
                <p className="text-gray-300 mb-6">
                  Technical deep-dive for consultants on creating effective prompts for different business scenarios.
                </p>
                <div className="flex justify-between items-center">
                  <Button variant="outline" className="text-cyan-400 border-cyan-400 hover:bg-cyan-400/10">
                    View Details
                  </Button>
                  <div className="text-xs text-gray-500">Virtual Delivery</div>
                </div>
              </div>
            </div>

            {/* AI for HR Innovation */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all overflow-hidden group">
              <div className="h-48 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 flex items-center justify-center">
                <div className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity">🤖</div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-cyan-400">November 2023</span>
                  <span className="text-xs px-3 py-1 bg-gray-800 rounded-full text-gray-300">Departmental Workshop</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  AI for HR Innovation
                </h3>
                <p className="text-gray-400 mb-4">Multinational Technology Company</p>
                <p className="text-gray-300 mb-6">
                  Workshop focused on automating HR workflows and enhancing employee experience with Gen AI.
                </p>
                <div className="flex justify-between items-center">
                  <Button variant="outline" className="text-cyan-400 border-cyan-400 hover:bg-cyan-400/10">
                    View Details
                  </Button>
                  <div className="text-xs text-gray-500">Hybrid Delivery</div>
                </div>
              </div>
            </div>

            {/* Future of Work with AI */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all overflow-hidden group">
              <div className="h-48 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 flex items-center justify-center">
                <div className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity">🚀</div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-cyan-400">October 2023</span>
                  <span className="text-xs px-3 py-1 bg-gray-800 rounded-full text-gray-300">Keynote Address</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  Future of Work with AI
                </h3>
                <p className="text-gray-400 mb-4">Industry Conference</p>
                <p className="text-gray-300 mb-6">
                  Keynote presentation on how AI is reshaping workforce skills and organizational structures.
                </p>
                <div className="flex justify-between items-center">
                  <Button variant="outline" className="text-cyan-400 border-cyan-400 hover:bg-cyan-400/10">
                    View Details
                  </Button>
                  <div className="text-xs text-gray-500">Live Event</div>
                </div>
              </div>
            </div>

            {/* Additional workshop cards would follow same pattern */}
          </div>
        </div>
      </section>

      {/* Workshop Types */}
      <section className="relative z-10 py-16 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-12 text-center text-cyan-400">Workshop Formats</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">Corporate Workshops</h4>
              <p className="text-gray-400">
                Tailored, in-depth sessions for executive teams and departments, delivered on-site or virtually.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">Technical Deep Dives</h4>
              <p className="text-gray-400">
                Hands-on sessions for technical teams focusing on implementation, fine-tuning, and deployment.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">Keynote Presentations</h4>
              <p className="text-gray-400">
                Inspirational and strategic talks for conferences and leadership summits on AI trends and futures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12 rounded-2xl border border-gray-800">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Host Your AI Workshop?</h2>
            <p className="text-gray-300 mb-8">
              Custom-designed workshops tailored to your organization's needs, delivered by industry-leading AI practitioners.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
                onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
              >
                Request Workshop Proposal
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-cyan-400 hover:bg-cyan-400/10"
                onClick={() => window.open("mailto:theneovedaacademy@gmail.com?subject=Workshop Inquiry", "_blank")}
              >
                Discuss Customization
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <Link href="https://v0-saa-s-landing-page-design-roan.vercel.app/" className="inline-flex items-center mb-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-04%2022.06.43%20-%20A%20futuristic%2C%20minimalist%20logo%20for%20%27The%20Neo%20Veda%20Academy%27.%20The%20design%20features%20sleek%2C%20modern%20typography%20with%20a%20glowing%20ambient%20blur%20effect.%20The%20color%20p.jpg-kenHNOUl8eEp4SHAKN09pB0VusPukp.jpeg"
              alt="The Neo Veda Academy Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-lg font-bold">THE NEO VEDA ACADEMY</span>
          </Link>
          <p className="text-gray-400 mb-4">
            <a href="https://v0-saa-s-landing-page-design-roan.vercel.app/" className="hover:text-cyan-400">
              theneovedaacademy.com
            </a>{" "}
            | theneovedaacademy@gmail.com
          </p>
          <p className="text-gray-400 mb-4">(+91) 8147884482 | (+1) 689 240 9966</p>
          <p className="text-gray-400 mb-4">
            <span className="text-sm text-cyan-400 italic">Where knowledge meets transformation</span>
          </p>
          <p className="text-gray-500">&copy; {new Date().getFullYear()} The Neo Veda Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}