"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles-background"
import { ChatPopup } from "@/components/chat-popup"
import { FAQSection } from "@/components/faq-section"
import { SectionHeader } from "@/components/section-header"

export default function ProjectProgramManagementPage() {
  // FAQ data with required id field
  const faqs = [
    {
      id: "pmp-1",
      question: "What's the difference between PRINCE2 and PMP?",
      answer: "PRINCE2 is a process-based methodology with defined roles and steps, while PMP is a knowledge-based certification covering broader project management concepts. PRINCE2 is more popular in Europe and government projects, while PMP is globally recognized across industries. Many professionals get both certifications for comprehensive expertise.",
    },
    {
      id: "pmp-2",
      question: "Which certification is best for Agile project management?",
      answer: "For Agile, we recommend PMI-ACP (covers multiple Agile methodologies), SAFe (for enterprise-scale Agile), or PRINCE2 Agile (combining Agile with PRINCE2 structure). Scrum certifications (CSM, PSM) are also valuable for team-level Agile practices.",
    },
    {
      id: "pmp-3",
      question: "How do I choose between foundation and practitioner levels?",
      answer: "Foundation level provides basic knowledge and terminology, suitable for team members. Practitioner level demonstrates ability to apply the methodology and is required for project management roles. We can assess your experience to recommend the right starting point.",
    },
    {
      id: "pmp-4",
      question: "Do you offer combined training packages?",
      answer: "Yes, we offer popular combinations like PRINCE2 + PMP for comprehensive methodology coverage, or PMP + Agile certifications for hybrid project managers. We can customize packages based on your career goals and experience level.",
    },
    {
      id: "pmp-5",
      question: "What are the prerequisites for PMP certification?",
      answer: "PMP requires either: 1) Secondary degree + 5 years project management experience with 7,500 hours leading projects + 35 hours education, or 2) 4-year degree + 3 years experience with 4,500 hours leading projects + 35 hours education. Our PMP course includes the required 35 contact hours.",
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
              Advance Your Project Management Career
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Earn globally recognized certifications in PRINCE2, PMP, SAFe and more to lead successful projects
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

      {/* PRINCE2 Certification Path */}
      <section className="relative z-10 py-24 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="PRINCE2 (Projects in Controlled Environments)" 
            subtitle="Process-Based Project Management Framework"
            colorClass="cyan" 
            id="prince2-certification" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* PRINCE2 Foundation */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                PRINCE2 Foundation
              </h4>
              <p className="text-gray-400 mb-4">
                Introduction to PRINCE2 methodology, principles, themes and processes.
              </p>
              <div className="text-gray-400 mb-4">
                <p className="font-semibold text-cyan-400">Key Concepts:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>7 PRINCE2 principles</li>
                  <li>7 themes</li>
                  <li>7 processes</li>
                  <li>Project organization structure</li>
                </ul>
              </div>
              <Link href="#" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* PRINCE2 Practitioner */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                PRINCE2 Practitioner
              </h4>
              <p className="text-gray-400 mb-4">
                Learn to apply and tailor PRINCE2 in project scenarios.
              </p>
              <div className="text-gray-400 mb-4">
                <p className="font-semibold text-cyan-400">Skills Gained:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Applying PRINCE2 principles</li>
                  <li>Tailoring the methodology</li>
                  <li>Managing product delivery</li>
                  <li>Controlling project stages</li>
                </ul>
              </div>
              <Link href="#" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* PRINCE2 Agile */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                PRINCE2 Agile®
              </h4>
              <p className="text-gray-400 mb-4">
                Combine PRINCE2 structure with Agile delivery approaches.
              </p>
              <div className="text-gray-400 mb-4">
                <p className="font-semibold text-cyan-400">Coverage Includes:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>PRINCE2 Agile Foundation</li>
                  <li>PRINCE2 Agile Practitioner</li>
                  <li>Agile behaviors and techniques</li>
                  <li>Blending frameworks</li>
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

      {/* PMI Certification Path */}
      <section className="relative z-10 py-24" id="pmi-certification">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="PMI (Project Management Institute) Certifications" 
            subtitle="Globally Recognized Project Management Standards"
            colorClass="cyan" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* PMP */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                PMP Certification
              </h4>
              <p className="text-gray-400 mb-4">
                The gold standard in project management certification.
              </p>
              <div className="text-gray-400 mb-4">
                <p className="font-semibold text-cyan-400">Program Includes:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>35 contact hours training</li>
                  <li>Exam preparation materials</li>
                  <li>Practice tests</li>
                  <li>Application assistance</li>
                </ul>
              </div>
              <Link href="#" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* PMI-ACP */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                PMI-ACP Certification
              </h4>
              <p className="text-gray-400 mb-4">
                Agile Certified Practitioner certification covering multiple Agile methodologies.
              </p>
              <div className="text-gray-400 mb-4">
                <p className="font-semibold text-cyan-400">Methodologies Covered:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Scrum</li>
                  <li>Kanban</li>
                  <li>Lean</li>
                  <li>Extreme Programming (XP)</li>
                </ul>
              </div>
              <Link href="#" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* CAPM */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                CAPM Certification
              </h4>
              <p className="text-gray-400 mb-4">
                Certified Associate in Project Management - entry-level PMI certification.
              </p>
              <div className="text-gray-400 mb-4">
                <p className="font-semibold text-cyan-400">Ideal For:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>New project managers</li>
                  <li>Project team members</li>
                  <li>Those starting PM careers</li>
                  <li>Preparing for future PMP</li>
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

      {/* SAFe and Agile Certifications */}
      <section className="relative z-10 py-24 bg-black/50 backdrop-blur-sm" id="agile-certification">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Agile & SAFe Certifications" 
            subtitle="Scaled Agile Framework for Enterprises"
            colorClass="cyan" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* SAFe Agilist */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                SAFe Agilist (Leading SAFe)
              </h4>
              <p className="text-gray-400 mb-4">
                Learn to lead Lean-Agile transformation at enterprise scale.
              </p>
              <div className="text-gray-400 mb-4">
                <p className="font-semibold text-cyan-400">Key Topics:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>SAFe principles</li>
                  <li>Agile Release Trains</li>
                  <li>Building Agile teams</li>
                  <li>Lean portfolio management</li>
                </ul>
              </div>
              <Link href="#" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* SAFe Scrum Master */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                SAFe Scrum Master
              </h4>
              <p className="text-gray-400 mb-4">
                Facilitate Agile team events and support Agile Release Train execution.
              </p>
              <div className="text-gray-400 mb-4">
                <p className="font-semibold text-cyan-400">Focus Areas:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Scrum Master role in SAFe</li>
                  <li>Facilitating PI Planning</li>
                  <li>Coaching Agile teams</li>
                  <li>Removing impediments</li>
                </ul>
              </div>
              <Link href="#" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* SAFe Product Owner */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                SAFe Product Owner/Manager
              </h4>
              <p className="text-gray-400 mb-4">
                Learn to deliver value through effective backlog management in SAFe.
              </p>
              <div className="text-gray-400 mb-4">
                <p className="font-semibold text-cyan-400">Skills Covered:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Writing features and stories</li>
                  <li>Prioritizing team backlog</li>
                  <li>Program increment planning</li>
                  <li>Stakeholder collaboration</li>
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

      {/* Scrum Certifications */}
      <section className="relative z-10 py-24" id="scrum-certification">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Scrum Master Certifications" 
            subtitle="Team-Level Agile Leadership"
            colorClass="cyan" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CSM */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                Certified Scrum Master (CSM)
              </h4>
              <p className="text-gray-400 mb-4">
                Scrum Alliance certification for Scrum Masters and team facilitators.
              </p>
              <div className="text-gray-400 mb-4">
                <p className="font-semibold text-cyan-400">Program Includes:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>2-day interactive training</li>
                  <li>Scrum Alliance membership</li>
                  <li>Exam fee included</li>
                  <li>Practical Scrum techniques</li>
                </ul>
              </div>
              <Link href="#" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* PSM */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                Professional Scrum Master (PSM)
              </h4>
              <p className="text-gray-400 mb-4">
                Scrum.org certification with rigorous assessment of Scrum knowledge.
              </p>
              <div className="text-gray-400 mb-4">
                <p className="font-semibold text-cyan-400">Levels Available:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>PSM I (Foundation)</li>
                  <li>PSM II (Advanced)</li>
                  <li>PSM III (Expert)</li>
                </ul>
              </div>
              <Link href="#" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* AgilePM */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                AgilePM (Agile Project Management)
              </h4>
              <p className="text-gray-400 mb-4">
                Combines Agile flexibility with project management discipline.
              </p>
              <div className="text-gray-400 mb-4">
                <p className="font-semibold text-cyan-400">Certification Path:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>AgilePM Foundation</li>
                  <li>AgilePM Practitioner</li>
                  <li>Agile Business Analysis</li>
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
          <h3 className="text-2xl font-bold mb-8 text-center text-cyan-400">Why Choose Our Project Management Programs?</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-bold mb-3 text-white">Authorized Training</h4>
              <p className="text-gray-400">
                We're accredited by AXELOS, PMI, and Scrum Alliance to deliver official certification training.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-bold mb-3 text-white">Practical Focus</h4>
              <p className="text-gray-400">
                Learn from instructors who actively manage projects using these methodologies.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-bold mb-3 text-white">Exam Support</h4>
              <p className="text-gray-400">
                Includes exam vouchers, practice tests, and post-training coaching until you pass.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-bold mb-3 text-white">Career Guidance</h4>
              <p className="text-gray-400">
                Get advice on certification paths and career progression in project management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12 rounded-2xl border border-gray-800">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Lead Successful Projects?</h2>
            <p className="text-gray-300 mb-8">
              Our advisors can help you choose the right certification based on your experience and career goals.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
              onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
            >
              Get Personalized Certification Plan
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Project Management Certification FAQs"
        faqs={faqs}
        className="py-16 px-4"
        titleClassName="text-cyan-400"
        triggerClassName="hover:text-cyan-400"
        viewAllLink={{
          href: "/faq#project-management",
          text: "View all Project Management FAQs",
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