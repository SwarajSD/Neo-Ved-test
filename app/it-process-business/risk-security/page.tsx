"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles-background"
import { ChatPopup } from "@/components/chat-popup"
import { FAQSection } from "@/components/faq-section"
import { SectionHeader } from "@/components/section-header"

export default function RiskSecurityManagementPage() {
  // FAQ data with required id field
  const faqs = [
    {
      id: "security-1",
      question: "What's the difference between CISA and CISM certifications?",
      answer: "CISA focuses on IT auditing, control, and assurance, while CISM concentrates on information security management. CISA is ideal for auditors, while CISM is better suited for security managers. Many professionals earn both to demonstrate comprehensive security expertise.",
    },
    {
      id: "security-2",
      question: "Which certification should I start with in cybersecurity?",
      answer: "ISO 27001 Foundation is excellent for understanding security frameworks. For technical roles, start with CISSP Associate. For audit roles, begin with CISA. We can assess your background to recommend the best starting point for your career goals.",
    },
    {
      id: "security-3",
      question: "Are these certifications globally recognized?",
      answer: "Yes, all our security certifications are internationally recognized. ISO 27001 is an international standard, while CISSP, CISA, CISM, and CRISC are globally accepted credentials from (ISC)² and ISACA, respected worldwide in the security industry.",
    },
    {
      id: "security-4",
      question: "How long does it take to prepare for CISSP?",
      answer: "Typically 2-3 months with consistent study. Our CISSP bootcamp provides intensive preparation in 5 days, followed by 6 weeks of mentoring. Most students pass within 6-8 weeks of completing our program.",
    },
    {
      id: "security-5",
      question: "Do you offer corporate security training packages?",
      answer: "Yes, we provide customized enterprise security training programs, including on-site ISO 27001 implementation workshops, team CISSP preparation, and security awareness programs tailored to your organization's needs and industry requirements.",
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
              Secure Your Future in Cybersecurity
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Earn globally recognized certifications in information security, risk management, and compliance
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
            >
              Explore Security Certifications
            </Button>
          </div>
        </div>
      </section>

      {/* ISO 27001 Certification Path */}
      <section className="relative z-10 py-24 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="ISO 27001" 
            subtitle="Information Security Management System (ISMS)"
            colorClass="cyan" 
            id="iso27001-certification" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* ISO 27001 Foundation */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                ISO 27001 Foundation
              </h4>
              <p className="text-gray-400 mb-4">
                Introduction to information security management systems based on ISO/IEC 27001.
              </p>
              <div className="text-gray-400 mb-4">
                <p className="font-semibold text-cyan-400">Key Topics:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>ISMS fundamentals</li>
                  <li>ISO 27001 structure</li>
                  <li>Risk management approach</li>
                  <li>Continual improvement</li>
                </ul>
              </div>
              <Link href="#" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* ISO 27001 Lead Auditor */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                ISO 27001 Lead Auditor
              </h4>
              <p className="text-gray-400 mb-4">
                Learn to audit ISMS against ISO 27001 requirements and report findings.
              </p>
              <div className="text-gray-400 mb-4">
                <p className="font-semibold text-cyan-400">Skills Gained:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Audit principles and process</li>
                  <li>Evidence collection</li>
                  <li>Nonconformity identification</li>
                  <li>Reporting audit results</li>
                </ul>
              </div>
              <Link href="#" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* ISO 27001 Implementer */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                ISO 27001 Implementer
              </h4>
              <p className="text-gray-400 mb-4">
                Practical guidance for implementing ISMS in organizations.
              </p>
              <div className="text-gray-400 mb-4">
                <p className="font-semibold text-cyan-400">Implementation Focus:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>ISMS planning</li>
                  <li>Risk assessment methodology</li>
                  <li>Documentation requirements</li>
                  <li>Certification preparation</li>
                </ul>
              </div>
              <Link href="#" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ISACA Certifications */}
      <section className="relative z-10 py-24" id="isaca-certification">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="ISACA Certifications" 
            subtitle="Gold Standard in IT Governance and Security"
            colorClass="cyan" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* CISA */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                CISA Certification
              </h4>
              <p className="text-gray-400 mb-4">
                Certified Information Systems Auditor - the global standard for IT audit professionals.
              </p>
              <div className="text-gray-400 mb-4">
                <p className="font-semibold text-cyan-400">Domains Covered:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Information System Auditing</li>
                  <li>Governance & Management</li>
                  <li>Information Systems Acquisition</li>
                  <li>Protection of Information Assets</li>
                </ul>
              </div>
              <Link href="#" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* CISM */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                CISM Certification
              </h4>
              <p className="text-gray-400 mb-4">
                Certified Information Security Manager - for security leaders and managers.
              </p>
              <div className="text-gray-400 mb-4">
                <p className="font-semibold text-cyan-400">Focus Areas:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Information Security Governance</li>
                  <li>Risk Management</li>
                  <li>Security Program Development</li>
                  <li>Incident Management</li>
                </ul>
              </div>
              <Link href="#" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* CRISC */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                CRISC Certification
              </h4>
              <p className="text-gray-400 mb-4">
                Certified in Risk and Information Systems Control - for IT risk professionals.
              </p>
              <div className="text-gray-400 mb-4">
                <p className="font-semibold text-cyan-400">Key Domains:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>IT Risk Identification</li>
                  <li>Risk Assessment & Analysis</li>
                  <li>Risk Response & Mitigation</li>
                  <li>Risk Monitoring & Reporting</li>
                </ul>
              </div>
              <Link href="#" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* CDPSE */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                CDPSE Certification
              </h4>
              <p className="text-gray-400 mb-4">
                Certified Data Privacy Solutions Engineer - for privacy technology professionals.
              </p>
              <div className="text-gray-400 mb-4">
                <p className="font-semibold text-cyan-400">Coverage Includes:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Privacy Governance</li>
                  <li>Privacy Architecture</li>
                  <li>Data Lifecycle</li>
                  <li>Privacy Technology</li>
                </ul>
              </div>
              <Link href="#" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* (ISC)² Certifications */}
      <section className="relative z-10 py-24 bg-black/50 backdrop-blur-sm" id="isc2-certification">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="(ISC)² Certifications" 
            subtitle="World's Leading Cybersecurity Professional Organization"
            colorClass="cyan" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* CISSP */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                CISSP Certification
              </h4>
              <p className="text-gray-400 mb-4">
                Certified Information Systems Security Professional - the gold standard in security certifications.
              </p>
              <div className="text-gray-400 mb-4">
                <p className="font-semibold text-cyan-400">Domains:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Security & Risk Management</li>
                  <li>Asset Security</li>
                  <li>Security Architecture</li>
                  <li>Communication & Network Security</li>
                  <li>Identity & Access Management</li>
                </ul>
              </div>
              <Link href="#" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* CCSP */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                CCSP Certification
              </h4>
              <p className="text-gray-400 mb-4">
                Certified Cloud Security Professional - for cloud security architects and engineers.
              </p>
              <div className="text-gray-400 mb-4">
                <p className="font-semibold text-cyan-400">Cloud Focus Areas:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Cloud Concepts & Architecture</li>
                  <li>Cloud Data Security</li>
                  <li>Cloud Platform Security</li>
                  <li>Cloud Security Operations</li>
                </ul>
              </div>
              <Link href="#" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* SSCP */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                SSCP Certification
              </h4>
              <p className="text-gray-400 mb-4">
                Systems Security Certified Practitioner - for security administrators and practitioners.
              </p>
              <div className="text-gray-400 mb-4">
                <p className="font-semibold text-cyan-400">Technical Focus:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Access Controls</li>
                  <li>Security Operations</li>
                  <li>Risk Identification</li>
                  <li>Cryptography</li>
                  <li>Network/Communications Security</li>
                </ul>
              </div>
              <Link href="#" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Security Certifications */}
      <section className="relative z-10 py-24" id="additional-certification">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Specialized Security Certifications" 
            subtitle="Targeted Expertise for Security Professionals"
            colorClass="cyan" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CEH */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                CEH Certification
              </h4>
              <p className="text-gray-400 mb-4">
                Certified Ethical Hacker - learn to think like a hacker to better defend systems.
              </p>
              <div className="text-gray-400 mb-4">
                <p className="font-semibold text-cyan-400">Coverage Includes:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Footprinting & Reconnaissance</li>
                  <li>Scanning Networks</li>
                  <li>System Hacking</li>
                  <li>Malware Threats</li>
                  <li>Social Engineering</li>
                </ul>
              </div>
              <Link href="#" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* CompTIA Security+ */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                CompTIA Security+
              </h4>
              <p className="text-gray-400 mb-4">
                Foundational cybersecurity certification validating core security skills.
              </p>
              <div className="text-gray-400 mb-4">
                <p className="font-semibold text-cyan-400">Key Areas:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Threats, Attacks & Vulnerabilities</li>
                  <li>Architecture & Design</li>
                  <li>Implementation</li>
                  <li>Operations & Incident Response</li>
                  <li>Governance, Risk & Compliance</li>
                </ul>
              </div>
              <Link href="#" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* PCI DSS */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                PCI Professional
              </h4>
              <p className="text-gray-400 mb-4">
                Payment Card Industry certifications for security professionals in financial services.
              </p>
              <div className="text-gray-400 mb-4">
                <p className="font-semibold text-cyan-400">Certifications:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>PCIP (PCI Professional)</li>
                  <li>QSA (Qualified Security Assessor)</li>
                  <li>ISA (Internal Security Assessor)</li>
                  <li>PFI (PCI Forensic Investigator)</li>
                </ul>
              </div>
              <Link href="#" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <h3 className="text-2xl font-bold mb-8 text-center text-cyan-400">Why Choose Our Security Certifications?</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-bold mb-3 text-white">Authorized Training</h4>
              <p className="text-gray-400">
                Official training partner for (ISC)², ISACA, EC-Council, and PECB certifications.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-bold mb-3 text-white">Expert Instructors</h4>
              <p className="text-gray-400">
                Learn from certified professionals with real-world security implementation experience.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-bold mb-3 text-white">Exam Pass Guarantee</h4>
              <p className="text-gray-400">
                Free retake if you don't pass on first attempt (terms apply).
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-bold mb-3 text-white">Hands-On Labs</h4>
              <p className="text-gray-400">
                Practical exercises using real security tools and scenarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12 rounded-2xl border border-gray-800">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Advance Your Security Career?</h2>
            <p className="text-gray-300 mb-8">
              Our security certification advisors can help you build the right certification path based on your experience and career goals.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
              onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
            >
              Get Your Security Career Plan
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Security Certification FAQs"
        faqs={faqs}
        className="py-16 px-4"
        titleClassName="text-cyan-400"
        triggerClassName="hover:text-cyan-400"
        viewAllLink={{
          href: "/faq#security-management",
          text: "View all Security Certification FAQs",
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