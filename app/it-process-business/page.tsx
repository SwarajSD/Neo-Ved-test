"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles-background"
import { ChatPopup } from "@/components/chat-popup"
import { FAQSection } from "@/components/faq-section"
import { SectionHeader } from "@/components/section-header"

export default function ITProcessBusinessPage() {
  // FAQ data for this section
  const faqs = [
    {
      question: "What IT certifications do you offer?",
      answer:
        "We offer a comprehensive range of IT certifications including ITIL 4, COBIT, ISO 20000, TOGAF, PRINCE2, PMP, SAFe, Six Sigma, Lean Six Sigma, Agile methodologies, DevOps, and various security certifications like ISO 27001, CISA, CISM, and CISSP.",
    },
    {
      question: "How long does it take to complete a certification program?",
      answer:
        "The duration varies by certification. Foundation level courses typically take 2-3 days, while practitioner or advanced levels may take 3-5 days. Preparation time for exams varies based on your experience and background. We offer flexible learning options to accommodate your schedule.",
    },
    {
      question: "Are your certification programs recognized globally?",
      answer:
        "Yes, all our certification programs are internationally recognized and accredited by the respective governing bodies. Our training partners are authorized training providers for all the certifications we offer.",
    },
    {
      question: "Do you provide exam vouchers with the training?",
      answer:
        "Yes, most of our certification packages include exam vouchers. We also offer exam preparation materials, practice tests, and post-training support to ensure you're fully prepared for your certification exam.",
    },
    {
      question: "Can I get training for my entire team or organization?",
      answer:
        "We offer corporate training packages that can be customized to meet your organization's specific needs. We can deliver training on-site at your location or virtually, depending on your preference.",
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
              Transform Your IT Career with Industry-Recognized Certifications
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Master IT governance, project management, and digital transformation with our expert-led programs
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
            >
              Explore Certification Paths
            </Button>
          </div>
        </div>
      </section>

      {/* Certification Categories */}
      <section className="relative z-10 py-24 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <SectionHeader title="IT Service Management & Governance" colorClass="cyan" id="it-service-management" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* ITIL 4 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                ITIL 4 Certification Path
              </h4>
              <p className="text-gray-400 mb-4">
                Master the world's leading framework for IT service management and digital transformation.
              </p>
              <ul className="text-gray-400 space-y-1 mb-4 list-disc pl-5">
                <li>ITIL 4 Foundation</li>
                <li>ITIL 4 Specialist Modules</li>
                <li>ITIL 4 Strategist</li>
                <li>ITIL 4 Leader</li>
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

            {/* COBIT */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                COBIT Certification Path
              </h4>
              <p className="text-gray-400 mb-4">
                Develop expertise in IT governance and enterprise IT management with COBIT.
              </p>
              <ul className="text-gray-400 space-y-1 mb-4 list-disc pl-5">
                <li>COBIT Foundation</li>
                <li>COBIT Design & Implementation</li>
                <li>COBIT Assessor</li>
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

            {/* ISO 20000 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                ISO 20000 Certification Path
              </h4>
              <p className="text-gray-400 mb-4">Learn the international standard for IT service management systems.</p>
              <ul className="text-gray-400 space-y-1 mb-4 list-disc pl-5">
                <li>ISO 20000 Foundation</li>
                <li>ISO 20000 Practitioner</li>
                <li>ISO 20000 Auditor</li>
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

      {/* Project & Program Management Section */}
      <section className="relative z-10 py-24" id="project-management">
        <div className="container mx-auto px-4">
          <SectionHeader title="Project & Program Management" colorClass="cyan" id="project-management" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* PRINCE2 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                PRINCE2 Certification Path
              </h4>
              <p className="text-gray-400 mb-4">Master the world's most widely adopted project management method.</p>
              <ul className="text-gray-400 space-y-1 mb-4 list-disc pl-5">
                <li>PRINCE2 Foundation</li>
                <li>PRINCE2 Practitioner</li>
                <li>PRINCE2 Agile® Foundation</li>
                <li>PRINCE2 Agile® Practitioner</li>
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

            {/* PMP */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                PMP Certification Program
              </h4>
              <p className="text-gray-400 mb-4">
                Prepare for the globally recognized Project Management Professional certification.
              </p>
              <ul className="text-gray-400 space-y-1 mb-4 list-disc pl-5">
                <li>PMP Exam Preparation</li>
                <li>35 Contact Hours Certificate</li>
                <li>Practice Exams & Simulations</li>
                <li>Application Assistance</li>
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

            {/* SAFe */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                SAFe Certification Path
              </h4>
              <p className="text-gray-400 mb-4">
                Learn the Scaled Agile Framework for enterprise-scale agile development.
              </p>
              <ul className="text-gray-400 space-y-1 mb-4 list-disc pl-5">
                <li>SAFe Agilist (Leading SAFe)</li>
                <li>SAFe Scrum Master</li>
                <li>SAFe Product Owner/Manager</li>
                <li>SAFe Advanced Scrum Master</li>
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

      {/* More sections would go here for other categories */}

      {/* Why Choose Our Programs */}
      <section className="relative z-10 py-16 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8 text-center text-cyan-400">Why Choose Our Programs?</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-bold mb-3 text-white">Accredited Training</h4>
              <p className="text-gray-400">
                All our courses are delivered by accredited training partners recognized by official certification
                bodies.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-bold mb-3 text-white">Expert Instructors</h4>
              <p className="text-gray-400">
                Learn from certified professionals with extensive real-world experience in their respective fields.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-bold mb-3 text-white">Flexible Learning</h4>
              <p className="text-gray-400">
                Choose from in-person, virtual, or self-paced learning options to fit your schedule and preferences.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-bold mb-3 text-white">Career Support</h4>
              <p className="text-gray-400">
                Receive guidance on certification paths, career planning, and job opportunities in your field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12 rounded-2xl border border-gray-800">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to certify your skills?</h2>
            <p className="text-gray-300 mb-8">
              Take the first step toward advancing your career with our industry-recognized certification programs.
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
        colorClass="cyan"
        linkHref="/faq#it-process-business"
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
