"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles-background"
import { ChatPopup } from "@/components/chat-popup"
import { FAQSection } from "@/components/faq-section"
import { SectionHeader } from "@/components/section-header"

export default function BehavioralTrainingPage() {
  // FAQ data for this section
  const faqs = [
    {
      id: "behavioral-1",
      question: "What is Behavioral Training?",
      answer: "Behavioral Training focuses on improving workplace skills such as communication, emotional intelligence, teamwork, and professionalism. It helps individuals and teams enhance their interpersonal skills and work effectively in diverse environments.",
    },
    {
      id: "behavioral-2",
      question: "Who should attend Behavioral Training?",
      answer: "Behavioral Training is ideal for mid-level professionals, corporate teams, new hires, fresh graduates, managers, and supervisors. It is also beneficial for organizations looking to foster collaboration and emotional intelligence.",
    },
    {
      id: "behavioral-3",
      question: "What topics are covered in Behavioral Training?",
      answer: "Our Behavioral Training programs cover communication skills, emotional intelligence, collaboration, workplace ethics, stress management, mindfulness, and personal development.",
    },
    {
      id: "behavioral-4",
      question: "Can Behavioral Training be customized for my organization?",
      answer: "Yes, we offer tailored Behavioral Training programs to meet the specific needs of your organization. Whether it's for a small team or a large corporate group, we can design a program that aligns with your goals.",
    },
    {
      id: "behavioral-5",
      question: "How long does a Behavioral Training program last?",
      answer: "The duration varies depending on the program. Short workshops can be completed in a day, while comprehensive training programs may span multiple sessions over a few weeks.",
    },
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
              Master Workplace Skills with Behavioral Training
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Enhance communication, emotional intelligence, and teamwork to thrive in any professional environment.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
            >
              Explore Training Programs
            </Button>
          </div>
        </div>
      </section>

      {/* Behavioral Training Categories */}
      <section className="relative z-10 py-24 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <SectionHeader title="Behavioral Training Programs" colorClass="cyan" id="behavioral-training" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Communication Skills */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                Communication Skills
              </h4>
              <p className="text-gray-400 mb-4">
                Develop effective communication strategies for workplace success.
              </p>
              <ul className="text-gray-400 space-y-1 mb-4 list-disc pl-5">
                <li>Business Communication</li>
                <li>Public Speaking</li>
                <li>Email & Virtual Communication</li>
                <li>Active Listening</li>
              </ul>
              <Link href="#" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
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

            {/* Emotional Intelligence */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                Emotional Intelligence
              </h4>
              <p className="text-gray-400 mb-4">
                Build self-awareness, empathy, and resilience for personal and professional growth.
              </p>
              <ul className="text-gray-400 space-y-1 mb-4 list-disc pl-5">
                <li>Emotional Intelligence (EQ)</li>
                <li>Stress & Time Management</li>
                <li>Mindfulness & Resilience</li>
                <li>Self-Motivation</li>
              </ul>
              <Link href="#" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
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

            {/* Collaboration & Teamwork */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                Collaboration & Teamwork
              </h4>
              <p className="text-gray-400 mb-4">
                Foster teamwork and cross-cultural communication for a harmonious workplace.
              </p>
              <ul className="text-gray-400 space-y-1 mb-4 list-disc pl-5">
                <li>Effective Teamwork</li>
                <li>Cross-cultural Communication</li>
                <li>Workplace Etiquette</li>
                <li>Influencing & Negotiation Skills</li>
              </ul>
              <Link href="#" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
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

      {/* Why Choose Our Programs */}
      <section className="relative z-10 py-16 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8 text-center text-cyan-400">Why Choose Our Behavioral Training?</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-bold mb-3 text-white">Expert Trainers</h4>
              <p className="text-gray-400">
                Learn from certified professionals with extensive experience in behavioral training.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-bold mb-3 text-white">Practical Approach</h4>
              <p className="text-gray-400">
                Our training focuses on real-world applications and actionable insights.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-bold mb-3 text-white">Customizable Programs</h4>
              <p className="text-gray-400">
                Tailored training solutions to meet the unique needs of your organization.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-bold mb-3 text-white">Proven Results</h4>
              <p className="text-gray-400">
                Our programs have helped thousands of professionals enhance their workplace skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12 rounded-2xl border border-gray-800">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to transform your workplace skills?</h2>
            <p className="text-gray-300 mb-8">
              Take the first step toward personal and professional growth with our Behavioral Training programs.
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
        title="Frequently Asked Questions"
        faqs={faqs}
        className="py-16 px-4"
        titleClassName="text-cyan-400"
        triggerClassName="hover:text-cyan-400"
        viewAllLink={{
          href: "/faq#behavioral-training",
          text: "View all behavioral FAQs",
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