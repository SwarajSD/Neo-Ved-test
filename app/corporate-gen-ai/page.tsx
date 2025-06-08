"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles-background"
import { ChatPopup } from "@/components/chat-popup"

export default function CorporateGenAIPage() {
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
                <p className="text-sm text-cyan-400 italic">Shaping Tomorrow with Generative AI</p>
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
              Corporate Generative AI Solutions
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to build, learn, or level up in your career with Gen AI? Whether you want to brainstorm moonshot ideas, 
              build LLM-based systems, or just vibe with someone who eats prompts for breakfast — we're in.
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
                onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
              >
                Connect to Neural Link
              </Button>
              <Link href="#neural-architecture">
                <Button variant="outline" size="lg" className="text-white border-cyan-400 hover:bg-cyan-400/10">
                  Explore The Matrix
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Strategist Profile */}
      <section id="neural-architecture" className="relative z-10 py-16 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 rounded-full border-4 border-cyan-400 overflow-hidden">
                <Image
                  src="/path-to-vipin-image.jpg" // Replace with actual image path
                  alt="Vipin Vijay - AI Strategist"
                  width={256}
                  height={256}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-3xl font-bold mb-4 text-cyan-400">Vipin Vijay - AI Strategist</h3>
              <p className="text-xl text-gray-300 mb-6">
                Crafted by code, trained in tokens, fueled by caffeine and computation. A passionate Generative AI trainer 
                and strategist, with over 10 years of specialized Gen AI experience and 10+ years in enterprise AI.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-xl border border-gray-800">
                  <h4 className="text-2xl font-bold text-cyan-400 mb-2">1,500+</h4>
                  <p className="text-gray-400">Professionals Trained</p>
                  <p className="text-sm text-gray-500">Across 15+ Fortune 500 companies</p>
                </div>
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-xl border border-gray-800">
                  <h4 className="text-2xl font-bold text-cyan-400 mb-2">$20M+</h4>
                  <p className="text-gray-400">Enterprise AI Value</p>
                  <p className="text-sm text-gray-500">Delivered through strategic implementations</p>
                </div>
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-xl border border-gray-800">
                  <h4 className="text-2xl font-bold text-cyan-400 mb-2">10+ Years</h4>
                  <p className="text-gray-400">Gen AI Experience</p>
                  <p className="text-sm text-gray-500">Pioneering AI solutions since early development</p>
                </div>
              </div>
              <p className="text-gray-300">
                My mission is to democratize AI literacy by empowering organizations and professionals to confidently 
                implement and scale Gen AI solutions. An alumnus of IIM Indore, I have helped deliver $20M+ in enterprise 
                AI value, trained over 1,500 professionals across Fortune 500 companies, and led successful AI enablement 
                programs that blend innovation with impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neural Network Nodes - Timeline */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-12 text-center text-cyan-400">Neural Network Nodes</h3>
          <p className="text-xl text-gray-400 mb-12 text-center">
            From Data Whisperer to GenAI Corporate Maestro — A chronological matrix of my journey through the AI landscape.
          </p>

          {/* Timeline Items */}
          <div className="space-y-12">
            {/* 2024-Present */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
              <div className="flex items-start">
                <div className="bg-cyan-500/20 p-3 rounded-lg mr-6">
                  <span className="text-2xl">🌐</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">2024–Present</h4>
                  <h5 className="text-lg font-semibold text-cyan-400 mb-3">GenAI Corporate Trainer – Full Circle, Fully Charged</h5>
                  <p className="text-gray-400 mb-4">
                    Today, I'm living my final form:
                  </p>
                  <ul className="text-gray-400 space-y-2 list-disc pl-5 mb-4">
                    <li>Running GenAI bootcamps for enterprises globally (over 1000 professionals trained and counting)</li>
                    <li>Designing Train-the-AI-Trainer certifications to scale my knowledge through second-generation trainers</li>
                    <li>Coaching CXOs on Prompt Engineering, LLM Adoption, AI for Process Automation, and Responsible AI practices</li>
                    <li>Building an AI curriculum that blends technical depth, strategic insights, and humor—because dry AI is dead AI</li>
                  </ul>
                  <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-cyan-400">
                    <p className="text-gray-300 font-medium">🎯 The North Star Vision:</p>
                    <p className="text-gray-400">
                      To democratize Generative AI literacy, making enterprises future-proof and humans AI-fluent without losing their imagination, ethics, or sanity.
                    </p>
                    <p className="text-gray-400 mt-2">
                      Because in a world of Large Language Models, I train Large Thinking Humans.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2023-2024 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
              <div className="flex items-start">
                <div className="bg-cyan-500/20 p-3 rounded-lg mr-6">
                  <span className="text-2xl">🧩</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">2023–2024</h4>
                  <h5 className="text-lg font-semibold text-cyan-400 mb-3">Public Sector Jedi – Training the Toughest Crowd</h5>
                  <p className="text-gray-400 mb-4">
                    Senior Partner Manager – US Government (Federal, SLED)
                  </p>
                  <p className="text-gray-400 mb-2 font-medium">AI Connection:</p>
                  <ul className="text-gray-400 space-y-2 list-disc pl-5">
                    <li>Training government agencies is like teaching AI to a sentient rock (with due respect)</li>
                    <li>Built compliance-ready AI literacy programs for security-conscious clients—navigating policies, privacy, and ethics</li>
                    <li>Developed AI adoption playbooks for Public Sector, teaching bureaucrats how AI can be their ally, not enemy</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2020-2022 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
              <div className="flex items-start">
                <div className="bg-cyan-500/20 p-3 rounded-lg mr-6">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">2020–2022</h4>
                  <h5 className="text-lg font-semibold text-cyan-400 mb-3">The Scale Years – Architecting the AI Enablement Engine</h5>
                  <p className="text-gray-400 mb-4">
                    Partner Manager – GSIs (Americas)
                  </p>
                  <p className="text-gray-400 mb-2 font-medium">AI Connection: This was my Transformer Upgrade moment.</p>
                  <ul className="text-gray-400 space-y-2 list-disc pl-5">
                    <li>Designed AI capability training frameworks for Fortune 500s</li>
                    <li>Built joint GTM playbooks that explained deep-tech AI to non-technical decision-makers</li>
                    <li>Conducted over 50+ industry-specific GenAI enablement workshops across Banking, Healthcare, Retail, and Hi-Tech</li>
                  </ul>
                  <p className="text-gray-400 mt-3 italic">
                    This is where I realized: Selling AI is cool. Teaching AI is magic.
                  </p>
                </div>
              </div>
            </div>

            {/* Previous years sections would follow the same pattern */}
            {/* Only showing first 3 for brevity */}
          </div>
        </div>
      </section>

      {/* Neural Training Protocols */}
      <section className="relative z-10 py-16 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-12 text-center text-cyan-400">Neural Training Protocols</h3>
          <p className="text-xl text-gray-400 mb-12 text-center">
            Specialized training modules designed to upgrade your team's AI capabilities and unlock new dimensions of productivity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
              <h4 className="text-xl font-bold mb-3 text-white">Prompt Engineering & Role-based Personas</h4>
              <p className="text-gray-400 mb-4">
                Master the art of crafting precise prompts that yield optimal results from AI systems. Learn to create specialized personas for different business functions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
              <h4 className="text-xl font-bold mb-3 text-white">Generative AI for Business Leaders</h4>
              <p className="text-gray-400 mb-4">
                Strategic frameworks for executives to identify AI opportunities, manage implementation, and measure ROI across the organization.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
              <h4 className="text-xl font-bold mb-3 text-white">AI in Digital Transformation</h4>
              <p className="text-gray-400 mb-4">
                Specialized tracks for CX, HR, IT, and Marketing teams to leverage AI for process optimization and innovation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
              <h4 className="text-xl font-bold mb-3 text-white">No-Code AI Workflow Builders</h4>
              <p className="text-gray-400 mb-4">
                Create powerful AI agents and automated workflows without coding knowledge, perfect for business users and analysts.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
              <h4 className="text-xl font-bold mb-3 text-white">RAG & LLM Fine-tuning</h4>
              <p className="text-gray-400 mb-4">
                Technical deep-dives into Retrieval Augmented Generation, model fine-tuning, and enterprise deployment strategies.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
              <h4 className="text-xl font-bold mb-3 text-white">Custom Enterprise AI Strategy</h4>
              <p className="text-gray-400 mb-4">
                Tailored programs for organizations looking to build internal AI capabilities and governance frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neural Transmission Events */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-12 text-center text-cyan-400">Neural Transmission Events</h3>
          <p className="text-xl text-gray-400 mb-12 text-center">
            Immersive workshops and speaking engagements where knowledge transfer occurs at maximum bandwidth.
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

            {/* Additional events would follow same pattern */}
          </div>
        </div>
      </section>

      {/* Neural Feedback Loops */}
      <section className="relative z-10 py-16 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-12 text-center text-cyan-400">Neural Feedback Loops</h3>
          <p className="text-xl text-gray-400 mb-12 text-center">
            Signal transmissions from clients who have experienced quantum leaps in their AI capabilities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
              <div className="flex items-start">
                <div className="text-cyan-400 mr-4 text-2xl">{">"}</div>
                <div>
                  <p className="text-gray-300 mb-4 italic">
                    "Vipin's training transformed our approach to AI. Our team now builds solutions in days that would have taken months before."
                  </p>
                  <p className="text-cyan-400">@ CTO, Enterprise SaaS Company</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
              <div className="flex items-start">
                <div className="text-cyan-400 mr-4 text-2xl">{">"}</div>
                <div>
                  <p className="text-gray-300 mb-4 italic">
                    "The most practical AI training I've attended. No fluff, just actionable strategies we implemented immediately."
                  </p>
                  <p className="text-cyan-400">@ Head of Innovation, Fortune 100 Retail</p>
                </div>
              </div>
            </div>

            {/* Additional feedback would follow same pattern */}
          </div>
        </div>
      </section>

      {/* Neural Toolkit Arsenal */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-12 text-center text-cyan-400">Neural Toolkit Arsenal: Gen AI Tools</h3>
          <p className="text-xl text-gray-400 mb-12 text-center">
            The advanced instruments we wield to bend reality and shape the future of AI implementation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Personal AI Assistants */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
              <h4 className="text-lg font-bold mb-4 text-white flex items-center">
                <span className="mr-2">🧠</span> Personal AI Assistants
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-400 hover:text-cyan-400 cursor-pointer">
                  <span className="mr-2">•</span> ChatGPT
                </li>
                <li className="flex items-center text-gray-400 hover:text-cyan-400 cursor-pointer">
                  <span className="mr-2">•</span> Claude AI
                </li>
                <li className="flex items-center text-gray-400 hover:text-cyan-400 cursor-pointer">
                  <span className="mr-2">•</span> Perplexity
                </li>
                {/* Additional tools */}
              </ul>
            </div>

            {/* Productivity Tools */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
              <h4 className="text-lg font-bold mb-4 text-white flex items-center">
                <span className="mr-2">📋</span> Productivity Tools
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-400 hover:text-cyan-400 cursor-pointer">
                  <span className="mr-2">•</span> Notion AI
                </li>
                <li className="flex items-center text-gray-400 hover:text-cyan-400 cursor-pointer">
                  <span className="mr-2">•</span> Microsoft Copilot
                </li>
                <li className="flex items-center text-gray-400 hover:text-cyan-400 cursor-pointer">
                  <span className="mr-2">•</span> Todoist
                </li>
                {/* Additional tools */}
              </ul>
            </div>

            {/* Additional tool categories would follow same pattern */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12 rounded-2xl border border-gray-800">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Organization with Gen AI?</h2>
            <p className="text-gray-300 mb-8">
              Connect with our AI strategists to design a custom Generative AI roadmap for your enterprise.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
              onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
            >
              Initiate Neural Link
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
            <span className="text-sm text-cyan-400 italic">Shaping Tomorrow with Generative AI</span>
          </p>
          <p className="text-gray-500">&copy; {new Date().getFullYear()} The Neo Veda Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}