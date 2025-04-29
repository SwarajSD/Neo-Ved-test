"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles-background"
import { ChatPopup } from "@/components/chat-popup"
import { FAQSection } from "@/components/faq-section"
import { SectionHeader } from "@/components/section-header"

export default function HRProfessionalDevelopmentPage() {
  // FAQ data for HR Training
  const faqs = [
    {
      id: "hr-1",
      question: "What types of HR certifications do you offer?",
      answer: "We offer certifications in HR fundamentals, talent acquisition, employee relations, compensation & benefits, HR analytics, and diversity & inclusion programs."
    },
    {
      id: "hr-2",
      question: "Can these trainings be customized for our organization?",
      answer: "Yes, we tailor all programs to your company's specific needs, culture, and industry requirements."
    },
    {
      id: "hr-3",
      question: "How do you measure training effectiveness?",
      answer: "We use pre/post assessments, skills application tracking, and ROI measurement tools to demonstrate impact."
    },
    {
      id: "hr-4",
      question: "Do you offer virtual training options?",
      answer: "Yes, we provide live virtual sessions, self-paced e-learning, and hybrid models to suit your workforce."
    },
    {
      id: "hr-5",
      question: "What makes your HR training different?",
      answer: "Our programs combine latest HR tech knowledge with practical, real-world application and case studies from top organizations."
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
              Transform Your Workforce with Strategic HR Development
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Elevate your human capital through cutting-edge training programs designed for modern HR challenges
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
            >
              Explore HR Programs
            </Button>
          </div>
        </div>
      </section>

      {/* Key Demographics Section */}
      <section className="relative z-10 py-24 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <SectionHeader title="Key Demographics for Human Capital & HR Trainings" colorClass="cyan" id="demographics" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {/* Behavioral Trainings */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Behavioral Trainings</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Ideal Audience:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Mid-Level Professionals: Employees looking to improve workplace communication and teamwork</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Corporate Teams: Organizations aiming to foster collaboration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>New Hires & Fresh Graduates: Those needing foundational workplace skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Managers & Supervisors: Leaders refining soft skills</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">Industries That Benefit:</h4>
                <div className="flex flex-wrap gap-2">
                  {['IT & Tech', 'Finance', 'Healthcare', 'Education', 'Hospitality'].map((industry) => (
                    <span key={industry} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* HR Trainings */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Human Resource (HR) Trainings</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Ideal Audience:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>HR Professionals & Recruiters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>People Managers & Team Leads</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Aspiring HR Professionals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Business Owners & Entrepreneurs</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">Industries That Benefit:</h4>
                <div className="flex flex-wrap gap-2">
                  {['Corporate HR', 'Recruitment', 'Startups', 'Consulting'].map((industry) => (
                    <span key={industry} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="relative z-10 py-24" id="training-programs">
        <div className="container mx-auto px-4">
          <SectionHeader title="Training Programs" colorClass="cyan" />

          {/* Behavioral Trainings */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-8 text-cyan-400">Behavioral Trainings</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Communication Skills */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-xl font-bold mb-3">Communication Skills</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>Business Communication</li>
                  <li>Public Speaking</li>
                  <li>Email & Virtual Communication</li>
                  <li>Active Listening</li>
                </ul>
              </div>

              {/* Emotional Intelligence */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-xl font-bold mb-3">Emotional Intelligence</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>Emotional Intelligence (EQ)</li>
                  <li>Stress & Time Management</li>
                  <li>Mindfulness & Resilience</li>
                  <li>Self-Motivation</li>
                </ul>
              </div>

              {/* Collaboration & Teamwork */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-xl font-bold mb-3">Collaboration & Teamwork</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>Effective Teamwork</li>
                  <li>Cross-cultural Communication</li>
                  <li>Workplace Etiquette</li>
                  <li>Influencing & Negotiation</li>
                </ul>
              </div>

              {/* Workplace Ethics */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-xl font-bold mb-3">Workplace Ethics</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>Diversity, Equity & Inclusion</li>
                  <li>Ethics & Integrity</li>
                  <li>Personal Branding</li>
                </ul>
              </div>
            </div>
          </div>

          {/* HR Trainings */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-cyan-400">Human Resource (HR) Trainings</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Recruitment */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-xl font-bold mb-3">Recruitment & Talent</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>Strategic Hiring</li>
                  <li>Behavioral Interviewing</li>
                  <li>Employer Branding</li>
                </ul>
              </div>

              {/* Employee Relations */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-xl font-bold mb-3">Employee Relations</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>HR Policies & Compliance</li>
                  <li>Employment Laws</li>
                  <li>Conflict Resolution</li>
                </ul>
              </div>

              {/* Performance Management */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-xl font-bold mb-3">Performance Management</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>Goal Setting & Reviews</li>
                  <li>Learning & Development</li>
                  <li>Employee Engagement</li>
                </ul>
              </div>

              {/* Compensation */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-xl font-bold mb-3">Compensation & Benefits</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>Payroll Management</li>
                  <li>Benefits Administration</li>
                  <li>HR Analytics</li>
                </ul>
              </div>

              {/* HR Technology */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-xl font-bold mb-3">HR Technology</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>HRIS Training</li>
                  <li>AI in HR</li>
                  <li>Data-driven HR</li>
                </ul>
              </div>

              {/* Diversity & Inclusion */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all">
                <h4 className="text-xl font-bold mb-3">Diversity & Inclusion</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>Unconscious Bias</li>
                  <li>Inclusive Workplace</li>
                  <li>Equal Opportunity</li>
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
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to transform your HR capabilities?</h2>
            <p className="text-gray-300 mb-8">
              Empower your team with strategic HR training tailored to your organization's needs
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
              onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="HR Training FAQs"
        faqs={faqs}
        className="py-16 px-4"
        titleClassName="text-cyan-400"
        triggerClassName="hover:text-cyan-400"
        viewAllLink={{
          href: "/faq#hr-training",
          text: "View all HR training FAQs",
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