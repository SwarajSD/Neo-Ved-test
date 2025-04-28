"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { NavMenu } from "@/components/nav-menu";
import { ParticlesBackground } from "@/components/particles-background"
import { ChatPopup } from "@/components/chat-popup"

export default function Home() {
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
                width={60}
                height={60}
                className="mr-3"
              />
              <div>
                <h1 className="text-xl md:text-2xl font-bold tracking-wider">THE NEO VEDA ACADEMY</h1>
                <p className="text-sm text-cyan-400 italic">Where passion meets excellence</p>
              </div>
            </Link>

            <NavMenu />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
              Where Passion Meets Excellence
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-10">
              A premium platform for upskilling through expert training and personalized consultations
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
                onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-16 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Career Development */}
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
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                Career Development
              </h3>
              <p className="text-gray-400 mb-4">
                Comprehensive career services including personal branding, AI-powered job search, and professional
                growth resources.
              </p>
              <ul className="text-gray-400 space-y-1 mb-4">
                <li>🚀 Career Growth & Personal Branding</li>
                <li>🛠 AI & Next-Gen Tools</li>
                <li>📈 Upskilling & Career Transformation</li>
              </ul>
              <Link href="/career-development" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
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

            {/* IT Training */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition-all group">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
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
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                IT Training
              </h3>
              <p className="text-gray-400 mb-4">
                Comprehensive IT and technology training programs, consulting services, and digital transformation
                solutions.
              </p>
              <ul className="text-gray-400 space-y-1 mb-4">
                <li>IT Training Programs</li>
                <li>Technology Courses</li>
                <li>Consulting Services</li>
              </ul>
              <Link href="/it-training" className="text-blue-400 hover:text-blue-300 inline-flex items-center">
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

            {/* Human Resources / SATH */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-pink-500 transition-all group">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-pink-500 to-amber-500 flex items-center justify-center">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-pink-400 transition-colors">
                Human Resources / SATH
              </h3>
              <p className="text-gray-400 mb-4">
                Human capital services and team-building experiences designed to assess, develop, and empower your
                workforce.
              </p>
              <ul className="text-gray-400 space-y-1 mb-4">
                <li>Human Capital Services</li>
                <li>Team-Building Experiences (SATH)</li>
                <li>Leadership Development</li>
              </ul>
              <Link href="/human-capital" className="text-pink-400 hover:text-pink-300 inline-flex items-center">
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

      {/* Career Development Highlight Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-cyan-400">Career Development Programs</h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Explore our comprehensive career development programs designed to accelerate your professional growth and
            help you stay ahead in today's competitive job market.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* LinkedIn Enhancement */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                1️⃣ LinkedIn Enhancement & Personal Branding
              </h3>
              <p className="text-gray-400 mb-4">
                Master LinkedIn's algorithm, optimize your profile, and leverage AI for thought leadership.
              </p>
              <Link
                href="/career-development#linkedin-section"
                className="text-cyan-400 hover:text-cyan-300 inline-flex items-center"
              >
                Explore Programs
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

            {/* AI-Powered Job Search */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                3️⃣ AI-Powered Job Search & Automation
              </h3>
              <p className="text-gray-400 mb-4">
                Leverage AI tools for resume optimization, job applications, and interview preparation.
              </p>
              <Link
                href="/career-development#ai-tools-section"
                className="text-cyan-400 hover:text-cyan-300 inline-flex items-center"
              >
                Explore Programs
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

            {/* Professional Growth */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                6️⃣ Professional Growth & High-Performance Skills
              </h3>
              <p className="text-gray-400 mb-4">
                Develop leadership skills, master communication, and learn how to become a top performer in any
                industry.
              </p>
              <Link
                href="/career-development#upskilling-section"
                className="text-cyan-400 hover:text-cyan-300 inline-flex items-center"
              >
                Explore Programs
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

          <div className="text-center mt-10">
            <Link href="/career-development">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
                View All Career Development Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12 rounded-2xl border border-gray-800">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Elevate Your Skills?</h2>
            <p className="text-gray-300 mb-8">
              Book a one-on-one consultation with our experts to create a personalized learning path.
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
      <footer className="relative z-10 bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Link href="https://v0-saa-s-landing-page-design-roan.vercel.app/">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-04%2022.06.43%20-%20A%20futuristic%2C%20minimalist%20logo%20for%20%27The%20Neo%20Veda%20Academy%27.%20The%20design%20features%20sleek%2C%20modern%20typography%20with%20a%20glowing%20ambient%20blur%20effect.%20The%20color%20p.jpg-kenHNOUl8eEp4SHAKN09pB0VusPukp.jpeg"
                  alt="The Neo Veda Academy Logo"
                  width={80}
                  height={80}
                  className="mb-4"
                />
              </Link>
              <h3 className="text-xl font-bold mb-2">THE NEO VEDA ACADEMY</h3>
              <p className="text-gray-400 mb-4">
                <span className="text-sm text-cyan-400 italic">Where passion meets excellence</span>
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
              <p className="text-gray-400 mb-2">
                <a href="https://v0-saa-s-landing-page-design-roan.vercel.app/" className="hover:text-cyan-400">
                  theneovedaacademy.com
                </a>
              </p>
              <p className="text-gray-400 mb-2">theneovedaacademy@gmail.com</p>
              <p className="text-gray-400 mb-2">(+91) 8147884482</p>
              <p className="text-gray-400">(+1) 689 240 9966</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/career-development" className="text-gray-400 hover:text-cyan-400">
                    Career Development
                  </Link>
                </li>
                <li>
                  <Link href="/consulting" className="text-gray-400 hover:text-cyan-400">
                    Consulting
                  </Link>
                </li>
                <li>
                  <Link href="/technology" className="text-gray-400 hover:text-purple-400">
                    Technology
                  </Link>
                </li>
                <li>
                  <Link href="/human-capital" className="text-gray-400 hover:text-pink-400">
                    Human Capital Services
                  </Link>
                </li>
                <li>
                  <Link href="/it-training" className="text-gray-400 hover:text-blue-400">
                    IT Training
                  </Link>
                </li>
                <li>
                  <Link href="/sath" className="text-gray-400 hover:text-amber-400">
                    SATH
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-green-400">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} The Neo Veda Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
