"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles-background"
import { ChatPopup } from "@/components/chat-popup"

export default function ExperiencePage() {
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
                <p className="text-sm text-cyan-400 italic">Where AI meets human potential</p>
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
              Neural Network Nodes
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              ⚡ From Data Whisperer to GenAI Corporate Maestro — A chronological matrix of my journey through the AI landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {/* 2024-Present */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="bg-cyan-500/20 p-4 rounded-lg w-16 h-16 flex items-center justify-center">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <div className="mt-4 text-center md:text-left">
                    <span className="text-sm text-gray-400">2024–Present</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">GenAI Corporate Trainer – Full Circle, Fully Charged</h3>
                  <p className="text-gray-400 mb-4">Senior Partner Manager – MSP Strategy & Digital Transformation</p>
                  
                  <p className="text-gray-300 mb-4">Today, I'm living my final form:</p>
                  <ul className="text-gray-400 space-y-3 list-disc pl-5 mb-6">
                    <li>Running GenAI bootcamps for enterprises globally (over 1000 professionals trained and counting)</li>
                    <li>Designing Train-the-AI-Trainer certifications to scale my knowledge through second-generation trainers</li>
                    <li>Coaching CXOs on Prompt Engineering, LLM Adoption, AI for Process Automation, and Responsible AI practices</li>
                    <li>Building an AI curriculum that blends technical depth, strategic insights, and humor—because dry AI is dead AI</li>
                  </ul>
                  
                  <div className="bg-gray-800/50 p-5 rounded-lg border-l-4 border-cyan-400">
                    <p className="text-gray-300 font-medium mb-2">🎯 The North Star Vision:</p>
                    <p className="text-gray-400">
                      To democratize Generative AI literacy, making enterprises future-proof and humans AI-fluent without losing their imagination, ethics, or sanity.
                    </p>
                    <p className="text-gray-400 mt-2 italic">
                      Because in a world of Large Language Models, I train Large Thinking Humans.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2023-2024 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="bg-cyan-500/20 p-4 rounded-lg w-16 h-16 flex items-center justify-center">
                    <span className="text-2xl">🧩</span>
                  </div>
                  <div className="mt-4 text-center md:text-left">
                    <span className="text-sm text-gray-400">2023–2024</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">Public Sector Jedi – Training the Toughest Crowd</h3>
                  <p className="text-gray-400 mb-4">Senior Partner Manager – US Government (Federal, SLED)</p>
                  
                  <p className="text-gray-300 mb-2 font-medium">AI Connection:</p>
                  <ul className="text-gray-400 space-y-3 list-disc pl-5">
                    <li>Training government agencies is like teaching AI to a sentient rock (with due respect)</li>
                    <li>Built compliance-ready AI literacy programs for security-conscious clients—navigating policies, privacy, and ethics while making GenAI sound less like Skynet and more like an assistant manager</li>
                    <li>Developed AI adoption playbooks for Public Sector, teaching bureaucrats how AI can be their ally, not enemy</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2020-2022 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="bg-cyan-500/20 p-4 rounded-lg w-16 h-16 flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div className="mt-4 text-center md:text-left">
                    <span className="text-sm text-gray-400">2020–2022</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">The Scale Years – Architecting the AI Enablement Engine</h3>
                  <p className="text-gray-400 mb-4">Partner Manager – GSIs (Americas)</p>
                  
                  <p className="text-gray-300 mb-2 font-medium">AI Connection: This was my Transformer Upgrade moment.</p>
                  <ul className="text-gray-400 space-y-3 list-disc pl-5 mb-4">
                    <li>Designed AI capability training frameworks for Fortune 500s</li>
                    <li>Built joint GTM playbooks that explained deep-tech AI to non-technical decision-makers (hello, corporate training DNA)</li>
                    <li>Conducted over 50+ industry-specific GenAI enablement workshops, demystifying AI across Banking, Healthcare, Retail, and Hi-Tech sectors</li>
                  </ul>
                  <p className="text-gray-400 italic">
                    This is where I realized: Selling AI is cool. Teaching AI is magic.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional timeline items would follow same pattern */}
          </div>
        </div>
      </section>

      {/* Training Protocols */}
      <section className="relative z-10 py-16 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-12 text-center text-cyan-400">Neural Training Protocols</h3>
          <p className="text-xl text-gray-400 mb-12 text-center">
            Specialized training modules designed to upgrade your team's AI capabilities
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
              <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">Prompt Engineering & Role-based Personas</h4>
              <p className="text-gray-400">
                Master the art of crafting precise prompts that yield optimal results from AI systems. Learn to create specialized personas for different business functions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
              <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">Generative AI for Business Leaders</h4>
              <p className="text-gray-400">
                Strategic frameworks for executives to identify AI opportunities, manage implementation, and measure ROI across the organization.
              </p>
            </div>

            {/* Additional protocol cards would follow same pattern */}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-12 text-center text-cyan-400">Neural Transmission Events</h3>
          <p className="text-xl text-gray-400 mb-12 text-center">
            Immersive workshops and speaking engagements where knowledge transfer occurs at maximum bandwidth
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
              <div className="flex items-start">
                <div className="bg-cyan-500/20 p-3 rounded-lg mr-4">
                  <span className="text-xl">📅</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">March 2024</h4>
                  <h5 className="text-xl font-semibold text-cyan-400 mb-3">Enterprise AI Transformation</h5>
                  <p className="text-gray-400 mb-4">Fortune 500 Financial Services</p>
                  <p className="text-gray-400">
                    3-day immersive workshop for 50+ executives on implementing Gen AI across customer service operations.
                  </p>
                  <Button variant="link" className="text-cyan-400 p-0 mt-3">
                    View Details
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
              <div className="flex items-start">
                <div className="bg-cyan-500/20 p-3 rounded-lg mr-4">
                  <span className="text-xl">📅</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">January 2024</h4>
                  <h5 className="text-xl font-semibold text-cyan-400 mb-3">Prompt Engineering Masterclass</h5>
                  <p className="text-gray-400 mb-4">Global Consulting Firm</p>
                  <p className="text-gray-400">
                    Technical deep-dive for consultants on creating effective prompts for different business scenarios.
                  </p>
                  <Button variant="link" className="text-cyan-400 p-0 mt-3">
                    View Details
                  </Button>
                </div>
              </div>
            </div>

            {/* Additional event cards would follow same pattern */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12 rounded-2xl border border-gray-800">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your AI Journey?</h2>
            <p className="text-gray-300 mb-8">
              Leverage this experience to accelerate your organization's AI capabilities and strategic advantage.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
              onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
            >
              Connect for AI Strategy Session
            </Button>
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
            <span className="text-sm text-cyan-400 italic">Where AI meets human potential</span>
          </p>
          <p className="text-gray-500">&copy; {new Date().getFullYear()} The Neo Veda Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}