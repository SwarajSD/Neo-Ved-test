"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles-background"
import { ChatPopup } from "@/components/chat-popup"
import { FAQSection } from "@/components/faq-section"
import { SectionHeader } from "@/components/section-header"

export default function LeadershipDevelopmentPage() {
  // FAQ data for Leadership Development
  const faqs = [
    {
      id: "leadership-1",
      question: "What leadership levels do your programs target?",
      answer: "We offer programs for all leadership stages: emerging leaders, mid-level managers, senior executives, and C-suite leaders."
    },
    {
      id: "leadership-2",
      question: "How are your leadership programs different?",
      answer: "Our programs combine evidence-based frameworks with real-world application, personalized coaching, and measurable outcomes."
    },
    {
      id: "leadership-3",
      question: "Do you offer customized leadership programs?",
      answer: "Yes, we tailor programs to your organization's specific challenges, culture, and leadership competency framework."
    },
    {
      id: "leadership-4",
      question: "What is the typical duration of a program?",
      answer: "Programs range from intensive 2-day workshops to 6-month leadership journeys with ongoing coaching."
    },
    {
      id: "leadership-5",
      question: "Can you measure leadership development ROI?",
      answer: "We use 360° assessments, business impact metrics, and behavioral change measurements to demonstrate ROI."
    }
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <ParticlesBackground />
      <ChatPopup />

      {/* Header */}
      <header className="relative z-10 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
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
      <section className="relative z-10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Develop Exceptional Leaders at Every Level
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your leadership pipeline with our comprehensive development programs for emerging, mid-level, and executive leaders
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
            >
              Explore Leadership Programs
            </Button>
          </div>
        </div>
      </section>

      {/* Key Demographics Section */}
      <section className="relative z-10 py-24 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <SectionHeader title="Leadership Development Audience" colorClass="cyan" id="audience" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Ideal Audience */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Ideal Audience</h3>
              
              <ul className="space-y-4">
                <li>
                  <h4 className="text-lg font-semibold text-white">Emerging Leaders & Managers</h4>
                  <p className="text-gray-300">Mid-level professionals stepping into leadership roles</p>
                </li>
                <li>
                  <h4 className="text-lg font-semibold text-white">Senior Executives & C-Suite</h4>
                  <p className="text-gray-300">Those making strategic decisions at a high level</p>
                </li>
                <li>
                  <h4 className="text-lg font-semibold text-white">Team Leaders & Project Managers</h4>
                  <p className="text-gray-300">Professionals managing teams and stakeholders</p>
                </li>
                <li>
                  <h4 className="text-lg font-semibold text-white">HR & L&D Professionals</h4>
                  <p className="text-gray-300">Those responsible for leadership development programs</p>
                </li>
              </ul>
            </div>

            {/* Industries That Benefit */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Industries That Benefit</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Corporate & Enterprise</h4>
                  <p className="text-gray-300 text-sm">Leadership pipelines for large organizations</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Government & Public Sector</h4>
                  <p className="text-gray-300 text-sm">Public service leadership development</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Non-Profit Organizations</h4>
                  <p className="text-gray-300 text-sm">Mission-driven leadership training</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2">Startups & Scale-ups</h4>
                  <p className="text-gray-300 text-sm">Founder-led leadership growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Programs Section */}
      <section className="relative z-10 py-24" id="programs">
        <div className="container mx-auto px-4">
          <SectionHeader title="Leadership Development Programs" colorClass="cyan" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Leadership Development */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <div className="h-12 w-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                <svg className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Leadership Development</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Effective Leadership Styles</li>
                <li>Strategic Decision Making</li>
                <li>Change Management</li>
                <li>Visionary Leadership</li>
              </ul>
            </div>

            {/* Team Management */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <div className="h-12 w-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                <svg className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Team Management</h3>
              <ul className="space-y-2 text-gray-300">
                <li>High-Performing Teams</li>
                <li>Conflict Resolution</li>
                <li>Coaching & Mentoring</li>
                <li>Positive Work Culture</li>
              </ul>
            </div>

            {/* Executive Leadership */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <div className="h-12 w-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                <svg className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Executive Leadership</h3>
              <ul className="space-y-2 text-gray-300">
                <li>C-Suite Development</li>
                <li>Organizational Transformation</li>
                <li>Stakeholder Management</li>
                <li>Crisis Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SATH Team Building */}
      <section className="relative z-10 py-24 bg-black/50 backdrop-blur-sm" id="team-building">
        <div className="container mx-auto px-4">
          <SectionHeader title="SATH Team-Building Experiences" colorClass="cyan" />

          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Exciting Challenges & Adventures</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "The Energy Boost Challenge",
                  "The Great Collaboration Quest",
                  "The Rapid Innovation Sprint",
                  "The Office Olympics",
                  "The Resilience Reset Workshop",
                  "The Ultimate Leadership Sprint",
                  "The Agile Innovation Challenge",
                  "The Communication Mastery Bootcamp",
                  "Mystery Team Escape Challenge",
                  "Corporate Adventure Day"
                ].map((activity) => (
                  <div key={activity} className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span className="text-gray-300">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8 text-center text-cyan-400">Why Choose Our Leadership Programs?</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-bold mb-3 text-white">Evidence-Based</h4>
              <p className="text-gray-400">
                Programs grounded in leadership research and proven methodologies
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-bold mb-3 text-white">Experiential Learning</h4>
              <p className="text-gray-400">
                Hands-on activities, simulations, and real-world applications
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-bold mb-3 text-white">Executive Coaches</h4>
              <p className="text-gray-400">
                Learn from seasoned executives with real leadership experience
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-bold mb-3 text-white">Measurable Impact</h4>
              <p className="text-gray-400">
                Clear metrics to track leadership growth and organizational impact
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12 rounded-2xl border border-gray-800">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to build exceptional leaders?</h2>
            <p className="text-gray-300 mb-8">
              Transform your leadership pipeline with our development programs tailored to your organization's needs
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
              onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Leadership Development FAQs"
        faqs={faqs}
        className="py-16 px-4"
        titleClassName="text-cyan-400"
        triggerClassName="hover:text-cyan-400"
        viewAllLink={{
          href: "/faq#leadership-development",
          text: "View all leadership FAQs",
          className: "text-cyan-400 hover:text-cyan-300"
        }}
      />

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <Link href="/" className="inline-flex items-center mb-4">
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
            <a href="/" className="hover:text-cyan-400">
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