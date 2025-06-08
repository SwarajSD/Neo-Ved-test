"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles-background"
import { ChatPopup } from "@/components/chat-popup"
import { FAQSection } from "@/components/faq-section"
import { SectionHeader } from "@/components/section-header"

export default function ITServiceManagementPage() {
  // FAQ data with required id field
  const faqs = [
    {
      id: "itsm-1",
      question: "What's the difference between ITIL and COBIT?",
      answer: "ITIL focuses on IT service management best practices, while COBIT provides a framework for IT governance and control. ITIL is more operational, COBIT is more strategic. Many organizations use both frameworks together - COBIT for governance and ITIL for service management implementation.",
    },
    {
      id: "itsm-2",
      question: "Which certification should I start with in IT service management?",
      answer: "ITIL 4 Foundation is the most widely recognized starting point. For those interested in governance, COBIT Foundation is recommended. ISO 20000 Foundation is ideal if you work in organizations that need to comply with international service management standards.",
    },
    {
      id: "itsm-3",
      question: "How do these certifications help my career?",
      answer: "These certifications demonstrate your expertise in industry-standard frameworks, making you more valuable to employers. They're particularly valuable for roles like IT service manager, process owner, IT auditor, or anyone involved in IT governance and service delivery.",
    },
    {
      id: "itsm-4",
      question: "Do you offer combined training programs?",
      answer: "Yes, we offer combined learning paths like ITIL + COBIT for comprehensive service management and governance expertise, or ITIL + ISO 20000 for those focused on standards compliance. We can customize training to match your specific career goals.",
    },
    {
      id: "itsm-5",
      question: "Are there prerequisites for these certifications?",
      answer: "Foundation levels typically have no prerequisites. Advanced certifications may require foundation-level knowledge or work experience. For example, ITIL 4 Specialist requires ITIL 4 Foundation, and COBIT Assessor requires COBIT Foundation.",
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
              Master IT Service Management & Governance
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Gain globally recognized certifications in ITIL, COBIT, ISO 20000 and more to excel in IT service delivery and governance
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
            >
              Explore ITSM Certifications
            </Button>
          </div>
        </div>
      </section>

      {/* ITIL Certification Path */}
      <section className="relative z-10 py-24 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="ITIL (Information Technology Infrastructure Library)" 
            subtitle="Best Practices for IT Service Management"
            colorClass="cyan" 
            id="itil-certification" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* ITIL 4 Foundation */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                ITIL 4 Foundation
              </h4>
              <p className="text-gray-400 mb-4">
                The entry-level certification introducing the key concepts of ITIL 4 and the service management framework.
              </p>
              <div className="text-gray-400 mb-4">
                <p className="font-semibold text-cyan-400">Key Topics:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>ITIL service value system</li>
                  <li>Four dimensions of service management</li>
                  <li>Key ITIL practices</li>
                  <li>Service value chain</li>
                </ul>
              </div>
            </div>

            {/* ITIL 4 Specialist Modules */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                ITIL 4 Specialist Modules
              </h4>
              <p className="text-gray-400 mb-4">
                Deep dive into specific aspects of service management with these intermediate certifications.
              </p>
              <div className="text-gray-400 mb-4">
                <p className="font-semibold text-cyan-400">Modules Include:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Create, Deliver & Support</li>
                  <li>Drive Stakeholder Value</li>
                  <li>High Velocity IT</li>
                  <li>Direct, Plan & Improve (Strategist)</li>
                </ul>
              </div>
            </div>

            {/* ITIL 4 Leader */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                ITIL 4 Leader: Digital & IT Strategy
              </h4>
              <p className="text-gray-400 mb-4">
                Advanced certification for leaders shaping digital transformation and IT strategy.
              </p>
              <div className="text-gray-400 mb-4">
                <p className="font-semibold text-cyan-400">Focus Areas:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Digital transformation strategy</li>
                  <li>IT strategy development</li>
                  <li>Business and IT alignment</li>
                  <li>Emerging technologies impact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COBIT Certification Path */}
      <section className="relative z-10 py-24" id="cobit-certification">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="COBIT (Control Objectives for Information and Related Technologies)" 
            subtitle="IT Governance Framework"
            colorClass="cyan" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* COBIT Foundation */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                COBIT Foundation
              </h4>
              <p className="text-gray-400 mb-4">
                Introduction to the COBIT framework for governance and management of enterprise IT.
              </p>
              <div className="text-gray-400 mb-4">
                <p className="font-semibold text-cyan-400">Key Concepts:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>COBIT framework components</li>
                  <li>Governance vs. management</li>
                  <li>Performance management</li>
                  <li>Design factors</li>
                </ul>
              </div>
            </div>

            {/* COBIT Design & Implementation */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                COBIT Design & Implementation
              </h4>
              <p className="text-gray-400 mb-4">
                Learn to design and implement tailored governance systems using COBIT.
              </p>
              <div className="text-gray-400 mb-4">
                <p className="font-semibold text-cyan-400">Skills Gained:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Designing governance frameworks</li>
                  <li>Implementation roadmaps</li>
                  <li>Process capability assessment</li>
                  <li>Performance measurement</li>
                </ul>
              </div>
            </div>

            {/* COBIT Assessor */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                COBIT Assessor
              </h4>
              <p className="text-gray-400 mb-4">
                Become qualified to perform COBIT-based capability assessments.
              </p>
              <div className="text-gray-400 mb-4">
                <p className="font-semibold text-cyan-400">Assessment Focus:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Process capability levels</li>
                  <li>Assessment methodology</li>
                  <li>Reporting results</li>
                  <li>Improvement planning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ISO 20000 Certification Path */}
      <section className="relative z-10 py-24 bg-black/50 backdrop-blur-sm" id="iso20000-certification">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="ISO 20000" 
            subtitle="International Standard for IT Service Management"
            colorClass="cyan" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* ISO 20000 Foundation */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                ISO 20000 Foundation
              </h4>
              <p className="text-gray-400 mb-4">
                Understand the requirements of the ISO/IEC 20000 standard for service management.
              </p>
              <div className="text-gray-400 mb-4">
                <p className="font-semibold text-cyan-400">Coverage Includes:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>ISO 20000-1 requirements</li>
                  <li>Service management system (SMS)</li>
                  <li>Process relationships</li>
                  <li>Certification process</li>
                </ul>
              </div>
            </div>

            {/* ISO 20000 Practitioner */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                ISO 20000 Practitioner
              </h4>
              <p className="text-gray-400 mb-4">
                Learn to implement and manage an ISO 20000 compliant service management system.
              </p>
              <div className="text-gray-400 mb-4">
                <p className="font-semibold text-cyan-400">Implementation Skills:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>SMS implementation planning</li>
                  <li>Documentation requirements</li>
                  <li>Process integration</li>
                  <li>Continual improvement</li>
                </ul>
              </div>
            </div>

            {/* ISO 20000 Auditor */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                ISO 20000 Auditor
              </h4>
              <p className="text-gray-400 mb-4">
                Learn to audit IT service management systems against ISO 20000 requirements.
              </p>
              <div className="text-gray-400 mb-4">
                <p className="font-semibold text-cyan-400">Audit Competencies:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Audit principles and process</li>
                  <li>Evidence collection</li>
                  <li>Nonconformity identification</li>
                  <li>Audit reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Frameworks Section */}
      <section className="relative z-10 py-24" id="additional-frameworks">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Complementary Frameworks" 
            subtitle="Expand Your Governance Expertise"
            colorClass="cyan" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* TOGAF */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                TOGAF Certification
              </h4>
              <p className="text-gray-400 mb-4">
                Enterprise architecture framework that complements IT governance implementations.
              </p>
              <div className="text-gray-400 mb-4">
                <p className="font-semibold text-cyan-400">Levels:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>TOGAF Foundation (Level 1)</li>
                  <li>TOGAF Certified (Level 2)</li>
                </ul>
              </div>
            </div>

            {/* SIAM */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                SIAM Certification
              </h4>
              <p className="text-gray-400 mb-4">
                Service Integration and Management framework for multi-sourced environments.
              </p>
              <div className="text-gray-400 mb-4">
                <p className="font-semibold text-cyan-400">Path:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>SIAM Foundation</li>
                  <li>SIAM Professional</li>
                  <li>Service Integration Manager</li>
                </ul>
              </div>
            </div>

            {/* IT4IT */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                IT4IT Certification
              </h4>
              <p className="text-gray-400 mb-4">
                Reference architecture for managing the business of IT in the digital era.
              </p>
              <div className="text-gray-400 mb-4">
                <p className="font-semibold text-cyan-400">Offering:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>IT4IT Foundation</li>
                  <li>IT4IT Practitioner</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Programs */}
      <section className="relative z-10 py-16 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8 text-center text-cyan-400">Why Choose Our ITSM Programs?</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-bold mb-3 text-white">Accredited Training</h4>
              <p className="text-gray-400">
                Our ITIL, COBIT and ISO 20000 courses are delivered by accredited training organizations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-bold mb-3 text-white">Real-World Focus</h4>
              <p className="text-gray-400">
                Learn from instructors with extensive experience implementing these frameworks in organizations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-bold mb-3 text-white">Exam Support</h4>
              <p className="text-gray-400">
                Includes exam vouchers, practice tests, and post-training support to ensure your success.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-bold mb-3 text-white">Framework Integration</h4>
              <p className="text-gray-400">
                Learn how to integrate ITIL, COBIT and ISO 20000 for comprehensive governance and service management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12 rounded-2xl border border-gray-800">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to advance your ITSM career?</h2>
            <p className="text-gray-300 mb-8">
              Our expert advisors can help you choose the right certification path based on your experience and goals.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
              onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
            >
              Get Personalized Guidance
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="IT Service Management & Governance FAQs"
        faqs={faqs}
        className="py-16 px-4"
        titleClassName="text-cyan-400"
        triggerClassName="hover:text-cyan-400"
        viewAllLink={{
          href: "/faq#it-service-management",
          text: "View all ITSM FAQs",
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