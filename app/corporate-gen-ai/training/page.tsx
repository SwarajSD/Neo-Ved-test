"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles-background"
import { ChatPopup } from "@/components/chat-popup"

export default function TrainingPage() {
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
              Neural Training Protocols
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Specialized training modules designed to upgrade your team's AI capabilities and unlock new dimensions of productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Prompt Engineering */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center group-hover:rotate-12 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                Prompt Engineering & Role-based Personas
              </h3>
              <p className="text-gray-400 mb-6">
                Master the art of crafting precise prompts that yield optimal results from AI systems. Learn to create specialized personas for different business functions.
              </p>
              <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-cyan-400">
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">YOU'LL LEARN TO:</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Craft effective prompts for various AI models</li>
                  <li>• Develop role-specific AI personas</li>
                  <li>• Optimize outputs for business needs</li>
                  <li>• Implement prompt chaining strategies</li>
                </ul>
              </div>
            </div>

            {/* Generative AI for Business Leaders */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center group-hover:rotate-12 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                Generative AI for Business Leaders
              </h3>
              <p className="text-gray-400 mb-6">
                Strategic frameworks for executives to identify AI opportunities, manage implementation, and measure ROI across the organization.
              </p>
              <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-cyan-400">
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">YOU'LL LEARN TO:</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Assess AI opportunities in your industry</li>
                  <li>• Develop an AI implementation roadmap</li>
                  <li>• Measure and communicate AI ROI</li>
                  <li>• Lead ethical AI adoption</li>
                </ul>
              </div>
            </div>

            {/* AI in Digital Transformation */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center group-hover:rotate-12 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                AI in Digital Transformation
              </h3>
              <p className="text-gray-400 mb-6">
                Specialized tracks for CX, HR, IT, and Marketing teams to leverage AI for process optimization and innovation.
              </p>
              <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-cyan-400">
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">YOU'LL LEARN TO:</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Identify automation opportunities</li>
                  <li>• Implement AI-driven process improvements</li>
                  <li>• Develop department-specific AI solutions</li>
                  <li>• Measure transformation impact</li>
                </ul>
              </div>
            </div>

            {/* No-Code AI Workflow Builders */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center group-hover:rotate-12 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                No-Code AI Workflow Builders
              </h3>
              <p className="text-gray-400 mb-6">
                Create powerful AI agents and automated workflows without coding knowledge, perfect for business users and analysts.
              </p>
              <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-cyan-400">
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">YOU'LL LEARN TO:</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Build AI workflows with visual tools</li>
                  <li>• Connect business applications</li>
                  <li>• Automate repetitive processes</li>
                  <li>• Deploy AI agents for specific tasks</li>
                </ul>
              </div>
            </div>

            {/* RAG & LLM Fine-tuning */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center group-hover:rotate-12 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                RAG & LLM Fine-tuning
              </h3>
              <p className="text-gray-400 mb-6">
                Technical deep-dives into Retrieval Augmented Generation, model fine-tuning, and enterprise deployment strategies.
              </p>
              <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-cyan-400">
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">YOU'LL LEARN TO:</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Implement RAG architectures</li>
                  <li>• Fine-tune models with proprietary data</li>
                  <li>• Deploy LLMs in enterprise environments</li>
                  <li>• Optimize model performance</li>
                </ul>
              </div>
            </div>

            {/* Custom Enterprise AI Strategy */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center group-hover:rotate-12 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                Custom Enterprise AI Strategy
              </h3>
              <p className="text-gray-400 mb-6">
                Tailored programs for organizations looking to build internal AI capabilities and governance frameworks.
              </p>
              <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-cyan-400">
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">YOU'LL LEARN TO:</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Develop AI governance policies</li>
                  <li>• Build internal AI competencies</li>
                  <li>• Create center of excellence models</li>
                  <li>• Align AI with business objectives</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12 rounded-2xl border border-gray-800">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Upgrade Your Team's AI Capabilities?</h2>
            <p className="text-gray-300 mb-8">
              Customize these training protocols to match your organization's specific needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
                onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
              >
                Request Training Proposal
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-cyan-400 hover:bg-cyan-400/10"
                onClick={() => window.open("mailto:theneovedaacademy@gmail.com", "_blank")}
              >
                Schedule Consultation
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
            <span className="text-sm text-cyan-400 italic">Where AI meets human potential</span>
          </p>
          <p className="text-gray-500">&copy; {new Date().getFullYear()} The Neo Veda Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}