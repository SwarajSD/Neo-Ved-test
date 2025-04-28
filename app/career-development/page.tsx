"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles-background"
import { ChatPopup } from "@/components/chat-popup"

export default function CareerDevelopmentPage() {
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
                <p className="text-sm text-cyan-400 italic">Where passion meets excellence</p>
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
              Career Development
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive career services designed to accelerate your professional growth, enhance your personal
              brand, and leverage cutting-edge AI tools for career advancement.
            </p>
          </div>
        </div>
      </section>

      {/* Main Categories */}
      <section className="relative z-10 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Career Growth & Personal Branding */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                🚀 Career Growth & Personal Branding
              </h3>
              <p className="text-gray-400 mb-4">
                Enhance your professional presence, optimize your LinkedIn profile, and build a compelling personal
                brand that attracts opportunities.
              </p>
              <Link href="#linkedin-section" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* AI & Next-Gen Tools */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                🛠 AI & Next-Gen Tools for Career Growth
              </h3>
              <p className="text-gray-400 mb-4">
                Leverage AI-powered tools and automation to streamline your job search, enhance your productivity, and
                stay ahead in your career.
              </p>
              <Link href="#ai-tools-section" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Upskilling & Career Transformation */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                📈 Upskilling & Career Transformation
              </h3>
              <p className="text-gray-400 mb-4">
                Master next-generation tools, develop high-performance skills, and transform your career trajectory with
                cutting-edge learning strategies.
              </p>
              <Link href="#upskilling-section" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="relative z-10 py-24 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          {/* LinkedIn Enhancement & Personal Branding */}
          <div id="linkedin-section" className="mb-24">
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-cyan-400">
              1️⃣ LinkedIn Enhancement & Personal Branding
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-lg font-semibold mb-3 text-white">LinkedIn Profile Optimization</h4>
                <p className="text-gray-400 mb-4">
                  Master LinkedIn's algorithm, profile optimization, and engagement strategies for career growth.
                </p>
                <ul className="text-gray-400 space-y-1 list-disc pl-5">
                  <li>Algorithm-friendly profile setup</li>
                  <li>Keyword optimization for recruiters</li>
                  <li>Strategic content engagement</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-lg font-semibold mb-3 text-white">LinkedIn Lead Generation & Networking</h4>
                <p className="text-gray-400 mb-4">
                  Automate connections, find high-value opportunities, and leverage AI-powered networking.
                </p>
                <ul className="text-gray-400 space-y-1 list-disc pl-5">
                  <li>Strategic connection building</li>
                  <li>Opportunity identification</li>
                  <li>AI-enhanced networking</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-lg font-semibold mb-3 text-white">AI-Driven Thought Leadership</h4>
                <p className="text-gray-400 mb-4">
                  Use AI (e.g., ChatGPT, Claude, Perplexity) to generate viral content & position yourself as an expert.
                </p>
                <ul className="text-gray-400 space-y-1 list-disc pl-5">
                  <li>AI content generation</li>
                  <li>Thought leadership positioning</li>
                  <li>Viral content strategies</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-lg font-semibold mb-3 text-white">LinkedIn Monetization & Freelancing</h4>
                <p className="text-gray-400 mb-4">
                  Learn how to land high-ticket consulting & freelance gigs via LinkedIn outreach.
                </p>
                <ul className="text-gray-400 space-y-1 list-disc pl-5">
                  <li>Consulting opportunity creation</li>
                  <li>Freelance client acquisition</li>
                  <li>High-ticket service positioning</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-lg font-semibold mb-3 text-white">LinkedIn Automation & Growth Hacking</h4>
                <p className="text-gray-400 mb-4">
                  Use Phantombuster, Make.com, and Zapier to automate outreach and engagement.
                </p>
                <ul className="text-gray-400 space-y-1 list-disc pl-5">
                  <li>Outreach automation</li>
                  <li>Engagement scaling</li>
                  <li>Growth hacking techniques</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Resume Website & Digital Presence */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-cyan-400">2️⃣ Resume Website & Digital Presence</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-lg font-semibold mb-3 text-white">Building a Resume Website</h4>
                <p className="text-gray-400 mb-4">
                  Learn how to build an ATS-optimized online resume using Notion, Webflow, or Framer.
                </p>
                <ul className="text-gray-400 space-y-1 list-disc pl-5">
                  <li>ATS-friendly design</li>
                  <li>No-code website building</li>
                  <li>Resume optimization</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-lg font-semibold mb-3 text-white">Portfolio Website Mastery</h4>
                <p className="text-gray-400 mb-4">
                  Showcase your projects, skills, and achievements with a professional online portfolio.
                </p>
                <ul className="text-gray-400 space-y-1 list-disc pl-5">
                  <li>Project showcasing</li>
                  <li>Skills presentation</li>
                  <li>Achievement highlighting</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-lg font-semibold mb-3 text-white">SEO & Digital Presence</h4>
                <p className="text-gray-400 mb-4">Optimize your website for recruiters and industry visibility.</p>
                <ul className="text-gray-400 space-y-1 list-disc pl-5">
                  <li>Recruiter-focused SEO</li>
                  <li>Industry visibility tactics</li>
                  <li>Digital presence optimization</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-lg font-semibold mb-3 text-white">Personal Branding via Content</h4>
                <p className="text-gray-400 mb-4">
                  Create a content-driven authority that attracts job offers and consulting opportunities.
                </p>
                <ul className="text-gray-400 space-y-1 list-disc pl-5">
                  <li>Twitter/X strategy</li>
                  <li>Medium publication</li>
                  <li>Substack newsletter</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-lg font-semibold mb-3 text-white">Reputation Management</h4>
                <p className="text-gray-400 mb-4">
                  Learn how to clean up your digital presence and create a credible professional brand.
                </p>
                <ul className="text-gray-400 space-y-1 list-disc pl-5">
                  <li>Digital cleanup strategies</li>
                  <li>Credibility building</li>
                  <li>Professional image management</li>
                </ul>
              </div>
            </div>
          </div>

          {/* AI-Powered Job Search & Automation */}
          <div id="ai-tools-section" className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-cyan-400">3️⃣ AI-Powered Job Search & Automation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-lg font-semibold mb-3 text-white">Job Search Automation</h4>
                <p className="text-gray-400 mb-4">
                  Leverage job trackers, AI-driven alerts, and outreach automation for faster job hunting.
                </p>
                <ul className="text-gray-400 space-y-1 list-disc pl-5">
                  <li>Automated job tracking</li>
                  <li>AI-powered job alerts</li>
                  <li>Outreach automation</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-lg font-semibold mb-3 text-white">AI-Generated Resumes & Cover Letters</h4>
                <p className="text-gray-400 mb-4">
                  Learn how to craft highly optimized resumes using OpenAI & Claude-based tools.
                </p>
                <ul className="text-gray-400 space-y-1 list-disc pl-5">
                  <li>AI resume optimization</li>
                  <li>Tailored cover letters</li>
                  <li>ATS-friendly formatting</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-lg font-semibold mb-3 text-white">Automating Job Applications</h4>
                <p className="text-gray-400 mb-4">
                  Use GPT, Zapier, and Notion to auto-apply for jobs & track responses efficiently.
                </p>
                <ul className="text-gray-400 space-y-1 list-disc pl-5">
                  <li>Application automation</li>
                  <li>Response tracking</li>
                  <li>Follow-up systems</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-lg font-semibold mb-3 text-white">Salary Negotiation with AI Insights</h4>
                <p className="text-gray-400 mb-4">Use AI-powered market research tools to negotiate the best salary.</p>
                <ul className="text-gray-400 space-y-1 list-disc pl-5">
                  <li>Market rate analysis</li>
                  <li>Negotiation scripts</li>
                  <li>Compensation optimization</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-lg font-semibold mb-3 text-white">Mastering AI Interview Prep</h4>
                <p className="text-gray-400 mb-4">Train with AI interviewers & improve answers using AI feedback.</p>
                <ul className="text-gray-400 space-y-1 list-disc pl-5">
                  <li>AI mock interviews</li>
                  <li>Answer optimization</li>
                  <li>Performance feedback</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Prompt Engineering & AI for Work Efficiency */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-cyan-400">4️⃣ Prompt Engineering & AI for Work Efficiency</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-lg font-semibold mb-3 text-white">Prompt Engineering for Career Growth</h4>
                <p className="text-gray-400 mb-4">
                  Learn how to craft powerful AI prompts for research, automation, and productivity.
                </p>
                <ul className="text-gray-400 space-y-1 list-disc pl-5">
                  <li>Advanced prompt techniques</li>
                  <li>Research optimization</li>
                  <li>Productivity enhancement</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-lg font-semibold mb-3 text-white">AI-Augmented Writing</h4>
                <p className="text-gray-400 mb-4">
                  Use ChatGPT, Claude, and Bard to generate reports, emails, and business documents.
                </p>
                <ul className="text-gray-400 space-y-1 list-disc pl-5">
                  <li>Professional document creation</li>
                  <li>Email optimization</li>
                  <li>Report generation</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-lg font-semibold mb-3 text-white">AI-Powered Productivity</h4>
                <p className="text-gray-400 mb-4">
                  Master AI task management, scheduling, and note-taking for efficiency.
                </p>
                <ul className="text-gray-400 space-y-1 list-disc pl-5">
                  <li>Task automation</li>
                  <li>Smart scheduling</li>
                  <li>Enhanced note-taking</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-lg font-semibold mb-3 text-white">Building AI Assistants</h4>
                <p className="text-gray-400 mb-4">Create your own AI chatbot to automate career-related tasks.</p>
                <ul className="text-gray-400 space-y-1 list-disc pl-5">
                  <li>Custom AI development</li>
                  <li>Task-specific assistants</li>
                  <li>Workflow automation</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-lg font-semibold mb-3 text-white">Leveraging AI in Freelancing</h4>
                <p className="text-gray-400 mb-4">Monetize your AI skills and automate your freelance work.</p>
                <ul className="text-gray-400 space-y-1 list-disc pl-5">
                  <li>AI service offerings</li>
                  <li>Freelance automation</li>
                  <li>Side hustle optimization</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Learning Next-Gen Tools */}
          <div id="upskilling-section" className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-cyan-400">5️⃣ Learning Next-Gen Tools for Career Acceleration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-lg font-semibold mb-3 text-white">Next-Gen Productivity Tools</h4>
                <p className="text-gray-400 mb-4">
                  Learn how to build workflows & automate tasks for workplace efficiency.
                </p>
                <ul className="text-gray-400 space-y-1 list-disc pl-5">
                  <li>Notion mastery</li>
                  <li>Make.com automation</li>
                  <li>Airtable workflows</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-lg font-semibold mb-3 text-white">AI-Powered Data Analysis</h4>
                <p className="text-gray-400 mb-4">
                  Use ChatGPT, Google Sheets AI, and Python automation for data-driven decisions.
                </p>
                <ul className="text-gray-400 space-y-1 list-disc pl-5">
                  <li>Non-technical data analysis</li>
                  <li>AI-assisted insights</li>
                  <li>Automated reporting</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-lg font-semibold mb-3 text-white">No-Code Tools for Career Enhancement</h4>
                <p className="text-gray-400 mb-4">
                  Build simple automation & apps without coding using Bubble, Glide, and Webflow.
                </p>
                <ul className="text-gray-400 space-y-1 list-disc pl-5">
                  <li>App building without code</li>
                  <li>Workflow automation</li>
                  <li>Digital tool integration</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-lg font-semibold mb-3 text-white">Learning AI for Workplace Efficiency</h4>
                <p className="text-gray-400 mb-4">
                  Master AI-powered tools like Perplexity, Otter.ai, and Fireflies for workplace communication.
                </p>
                <ul className="text-gray-400 space-y-1 list-disc pl-5">
                  <li>AI research tools</li>
                  <li>Meeting transcription</li>
                  <li>Communication enhancement</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-lg font-semibold mb-3 text-white">AI for Business & Consulting</h4>
                <p className="text-gray-400 mb-4">
                  Learn how to integrate AI into your job role, consultancy, or entrepreneurship.
                </p>
                <ul className="text-gray-400 space-y-1 list-disc pl-5">
                  <li>Business AI integration</li>
                  <li>Consulting enhancement</li>
                  <li>Entrepreneurial AI applications</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Professional Growth & High-Performance Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-cyan-400">6️⃣ Professional Growth & High-Performance Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-lg font-semibold mb-3 text-white">Becoming a Top 1% Performer</h4>
                <p className="text-gray-400 mb-4">
                  Frameworks for mastering skills, networking, and growth hacking your career.
                </p>
                <ul className="text-gray-400 space-y-1 list-disc pl-5">
                  <li>Skill mastery frameworks</li>
                  <li>Strategic networking</li>
                  <li>Career growth hacking</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-lg font-semibold mb-3 text-white">Leadership & Executive Presence</h4>
                <p className="text-gray-400 mb-4">Develop C-suite level leadership skills for career advancement.</p>
                <ul className="text-gray-400 space-y-1 list-disc pl-5">
                  <li>Executive communication</li>
                  <li>Strategic thinking</li>
                  <li>Presence development</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-lg font-semibold mb-3 text-white">Corporate Communication & Negotiation</h4>
                <p className="text-gray-400 mb-4">
                  Improve business writing, client communication, and negotiation skills.
                </p>
                <ul className="text-gray-400 space-y-1 list-disc pl-5">
                  <li>Professional writing</li>
                  <li>Client relationship management</li>
                  <li>Advanced negotiation tactics</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-lg font-semibold mb-3 text-white">How to Pivot Your Career Using AI</h4>
                <p className="text-gray-400 mb-4">
                  Transition into new industries with AI-driven skill acquisition strategies.
                </p>
                <ul className="text-gray-400 space-y-1 list-disc pl-5">
                  <li>Career transition planning</li>
                  <li>AI-assisted skill building</li>
                  <li>Industry pivot strategies</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-lg font-semibold mb-3 text-white">Monetizing Your Expertise</h4>
                <p className="text-gray-400 mb-4">
                  Learn how to package your skills into profitable knowledge products.
                </p>
                <ul className="text-gray-400 space-y-1 list-disc pl-5">
                  <li>Online course creation</li>
                  <li>Digital product development</li>
                  <li>Knowledge monetization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12 rounded-2xl border border-gray-800">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Accelerate Your Career?</h2>
            <p className="text-gray-300 mb-8">
              Book a consultation with our career development experts to create a personalized growth plan.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
              onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
            >
              Schedule Consultation
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
            <span className="text-sm text-cyan-400 italic">Where passion meets excellence</span>
          </p>
          <p className="text-gray-500">&copy; {new Date().getFullYear()} The Neo Veda Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
