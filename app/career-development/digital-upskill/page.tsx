"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles-background"
import { ChatPopup } from "@/components/chat-popup"
import { FAQSection } from "@/components/faq-section"
import { SectionHeader } from "@/components/section-header"

export default function DigitalUpskillPage() {
  const faqs = [
    {
      id: "digi-1",
      question: "Who is this program for?",
      answer:
        "This program is designed for individuals looking to transition into customer support, admin, sales, or tech support roles. It's perfect for warehouse, factory, retail, delivery, or field workers ready for a career change into digital roles.",
    },
    {
      id: "digi-2",
      question: "I'm not tech-savvy. Will this help me?",
      answer:
        "Absolutely! We start with foundational digital literacy and build up gradually. Our approach is designed for beginners who feel intimidated by the digital world but are eager to learn.",
    },
    {
      id: "digi-3",
      question: "How long does the program take?",
      answer:
        "The core program can be completed in 4-6 weeks with about 8-10 hours of commitment per week. You'll retain access to materials for 3 months after enrollment.",
    },
    {
      id: "digi-4",
      question: "What if I can't afford the full package?",
      answer:
        "We offer modular pricing so you can start with just the skills you need most (like Digital Literacy for ₹999/-) and add other components later as you're able.",
    },
    {
      id: "digi-5",
      question: "Will this help me actually get a job?",
      answer:
        "Yes! Beyond skills training, we focus on resume optimization, LinkedIn branding, and interview preparation specifically for career changers. Many of our graduates secure roles within 2-3 months of completing the program.",
    },
  ]

  const programSections = [
    {
      title: "Core Digital Skills Foundation",
      id: "core-skills",
      features: [
        "Master email, cloud storage & document editing",
        "Become proficient with workplace software (Google Workspace, MS Office, Zoom)",
        "Build digital confidence through hands-on practice",
        "Learn essential cybersecurity and data privacy basics",
      ],
      description: "Establish the fundamental digital literacy needed for any white-collar role.",
    },
    {
      title: "Career Transition Specialization",
      id: "career-transition",
      features: [
        "Personal Branding with AI tools",
        "LinkedIn optimization for recruiter visibility",
        "ATS-friendly resume & resume website creation",
        "Role-specific training (admin, IT support, sales, etc.)",
        "Workplace communication & professionalism",
      ],
      description: "Everything you need to successfully transition into your new career path.",
      bgClass: "bg-black/50 backdrop-blur-sm",
    },
  ]

  const benefits = [
    { title: "Digital Confidence", description: "Overcome tech intimidation with hands-on practice" },
    { title: "Career Roadmap", description: "Clear path from your current role to your target position" },
    { title: "Job-Ready Skills", description: "Learn exactly what employers want for entry-level roles" },
    { title: "Personal Branding", description: "Stand out with a strong online presence" },
    { title: "Recruiter Visibility", description: "Get noticed by employers through LinkedIn optimization" },
    { title: "Transition Story", description: "Learn to present your career change as an asset" },
  ]

  const pricing = [
    {
      title: "Digital Literacy & Computer Basics",
      price: "₹999/-",
      features: ["Email & cloud tools", "Document editing", "Cybersecurity basics"]
    },
    {
      title: "Specialized Training for White-Collar Roles",
      price: "₹1499/-",
      features: ["Role-specific skills", "Workplace software", "Task automation"]
    },
    {
      title: "Resume & LinkedIn Setup for Career Shift",
      price: "₹4999/-",
      features: ["ATS resume", "LinkedIn profile", "Portfolio website"]
    },
    {
      title: "Communication & Soft Skills Training",
      price: "₹2499/-",
      features: ["Professional etiquette", "Email communication", "Virtual meeting skills"]
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
            <Link href="/" className="flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-500 rounded-sm">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-04%2022.06.43%20-%20A%20futuristic%2C%20minimalist%20logo%20for%20%27The%20Neo%20Veda%20Academy%27.%20The%20design%20features%20sleek%2C%20modern%20typography%20with%20a%20glowing%20ambient%20blur%20effect.%20The%20color%20p.jpg-kenHNOUl8eEp4SHAKN09pB0VusPukp.jpeg"
                alt="The Neo Veda Academy Logo"
                width={50}
                height={50}
                className="mr-3"
                priority
              />
              <div>
                <h1 className="text-xl font-bold tracking-wider">THE NEO VEDA ACADEMY</h1>
                <p className="text-sm text-purple-400 italic">Where passion meets excellence</p>
              </div>
            </Link>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                className="text-white hover:text-purple-400 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
              >
                Contact Us
              </Button>
              <Link href="/">
                <Button variant="ghost" className="text-white hover:text-purple-400">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 py-20 md:py-32 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Digital Upskill Program
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Your roadmap from manual work to high-growth white-collar careers. Build digital confidence and land a better job.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white"
              onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
            >
              Enroll Now (₹2499)
            </Button>
            <Button variant="outline" size="lg" className="text-white border-purple-500 hover:bg-purple-950/50">
              Download Syllabus
            </Button>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="relative z-10 py-16 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <SectionHeader title="Tailored For" colorClass="purple" id="who-its-for" />
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-xl text-gray-300">
              You've got the drive – now unlock high-growth white-collar careers. Go beyond basic skills and launch into a brighter future with targeted training and digital confidence.
            </p>
          </div>
          
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Career Changers</h3>
              <p className="text-gray-300 mb-4">Looking to move into customer support, admin, sales, or tech support roles</p>
              <div className="text-left space-y-2 text-sm">
                <p>✓ From manual to digital work</p>
                <p>✓ No prior experience needed</p>
                <p>✓ Step-by-step transition plan</p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Industry Workers</h3>
              <p className="text-gray-300 mb-4">Warehouse, factory, retail, delivery, or field workers ready for a change</p>
              <div className="text-left space-y-2 text-sm">
                <p>✓ Transfer your existing skills</p>
                <p>✓ Learn during off-hours</p>
                <p>✓ Case studies from similar transitions</p>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Digital Beginners</h3>
              <p className="text-gray-300 mb-4">Eager to learn but intimidated by the digital world</p>
              <div className="text-left space-y-2 text-sm">
                <p>✓ Start from absolute basics</p>
                <p>✓ Patient, jargon-free instruction</p>
                <p>✓ Build confidence gradually</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills You'll Master */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto px-4">
          <SectionHeader title="Skills You'll Master" colorClass="purple" id="skills" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold text-purple-400 mb-3">Personal Branding</h3>
                <p className="text-gray-300">Enhance visibility, engagement, and authenticity of your personal brand using AI</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold text-purple-400 mb-3">LinkedIn Branding</h3>
                <p className="text-gray-300">Make your profile algorithm-friendly to boost visibility and recruiter outreach</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold text-purple-400 mb-3">Resume Website</h3>
                <p className="text-gray-300">Create an ATS-friendly resume and personal portfolio site</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold text-purple-400 mb-3">Role-Specific Training</h3>
                <p className="text-gray-300">Admin, IT support, sales, customer service with real-world simulations</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold text-purple-400 mb-3">Communication Skills</h3>
                <p className="text-gray-300">Workplace etiquette, professional email writing, and virtual meeting skills</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold text-purple-400 mb-3">Digital Tools Mastery</h3>
                <p className="text-gray-300">Google Workspace, MS Office, Zoom, and other essential workplace software</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Sections */}
      {programSections.map((section) => (
        <section key={section.id} className={`relative z-10 py-24 ${section.bgClass || ""}`} id={section.id}>
          <div className="container mx-auto px-4">
            <SectionHeader title={section.title} colorClass="purple" id={section.id} />
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-center">{section.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {section.features.map((feature) => (
                <div key={feature} className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition-all group">
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-400">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* What You're Getting */}
      <section className="relative z-10 py-24 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <SectionHeader title="Here's What You're Getting" colorClass="purple" id="what-you-get" />
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="text-purple-400 mr-4 mt-1">📧</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Digital Tools Mastery</h3>
                    <p className="text-gray-400">Email, cloud storage, spreadsheets, document editing, and more</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-purple-400 mr-4 mt-1">📚</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Role-Specific Training</h3>
                    <p className="text-gray-400">Administrative work, sales support, customer service, or tech helpdesk</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="text-purple-400 mr-4 mt-1">🔗</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">LinkedIn Profile Setup</h3>
                    <p className="text-gray-400">Get found by recruiters and connect with mentors</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="text-purple-400 mr-4 mt-1">🗣</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Transition Storytelling</h3>
                    <p className="text-gray-400">Learn how to talk about your career change effectively</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto px-4">
          <SectionHeader title="Program Pricing" colorClass="purple" id="pricing" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-12">
            {pricing.map((item, index) => (
              <div key={index} className="bg-gradient-to-b from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition-all">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-2xl font-bold text-purple-400 mb-4">{item.price}</p>
                <ul className="space-y-3 text-gray-300">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-purple-400 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full mt-6 bg-purple-600 hover:bg-purple-700"
                  onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
                >
                  Enroll Now
                </Button>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-6 rounded-xl border border-purple-500/30">
              <h3 className="text-xl font-bold text-white mb-2">FULL DIGITAL UPSKILL PACKAGE</h3>
              <p className="text-3xl font-bold text-purple-400 mb-4">₹2499/- <span className="text-gray-400 text-lg line-through">₹8996/-</span></p>
              <p className="text-gray-300 mb-4">Save 72% when you enroll in the complete program</p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white"
                onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
              >
                Get Full Package
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative z-10 py-24 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <SectionHeader title="Program Benefits" colorClass="purple" id="benefits" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800 hover:border-purple-500 transition-all group">
                <h3 className="text-xl font-bold text-white group-hover:text-purple-400">{benefit.title}</h3>
                <p className="text-gray-400 mt-2">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <FAQSection 
            faqs={faqs} 
            title="FAQ" 
            titleClassName="text-purple-400" 
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12 rounded-2xl border border-gray-800">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transition to a Digital Career?</h2>
            <p className="text-gray-300 mb-8">
              Take the first step toward a better job and brighter future with our Digital Upskill Program.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white"
                onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
              >
                Enroll Now (₹2499)
              </Button>
              <Button variant="outline" size="lg" className="text-white border-purple-500 hover:bg-purple-950/50">
                Speak to Advisor
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}