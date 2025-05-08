"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles-background"
import { ChatPopup } from "@/components/chat-popup"
import { FAQSection } from "@/components/faq-section"
import { SectionHeader } from "@/components/section-header"

export default function BackToWorkPage() {
  // FAQ data for this section
  const faqs = [
    {
      id: "back-to-work-1",
      question: "How does this help with career gaps?",
      answer: "We help reframe your career break as a period of growth, teaching you to highlight transferable skills gained during your time away while providing up-to-date industry knowledge to bridge any gaps.",
    },
    {
      id: "back-to-work-2",
      question: "What if I need to change industries?",
      answer: "Our package includes skills assessment and transferable skills mapping to help pivot industries smoothly, along with targeted upskilling recommendations for your desired field.",
    },
    {
      id: "back-to-work-3",
      question: "How do you help rebuild confidence?",
      answer: "Through personalized coaching, mock interviews, and success frameworks specifically designed for professionals returning to work after extended breaks.",
    },
    {
      id: "back-to-work-4",
      question: "Is this suitable for long career breaks?",
      answer: "Absolutely! We've helped professionals with breaks ranging from 1-10+ years successfully re-enter the workforce at various levels.",
    },
    {
      id: "back-to-work-5",
      question: "Do you offer parenting-specific strategies?",
      answer: "Yes, we provide specialized time management, boundary setting, and negotiation techniques for working parents balancing career and family.",
    },
  ]

  const packageFeatures = [
    {
      title: "Career Break Reframing",
      description: "Turn your time away into a powerful story of growth and resilience that enhances your professional narrative.",
      icon: "🔄",
      highlight: true
    },
    {
      title: "Gap-Friendly Resume & LinkedIn",
      description: "Create profiles that tactfully address your gap while showcasing your strengths and current capabilities.",
      icon: "📝",
      highlight: false
    },
    {
      title: "Confidence Rebuilding",
      description: "Overcome imposter syndrome with targeted coaching and success frameworks for returning professionals.",
      icon: "💪",
      highlight: true
    },
    {
      title: "Job Market Re-Entry Strategy",
      description: "Step-by-step plan tailored to your specific break duration and career goals.",
      icon: "🎯",
      highlight: false
    },
    {
      title: "Working Parent Strategies",
      description: "Time blocking, task management, and boundary setting techniques for parents balancing career and family.",
      icon: "👨‍👩‍👧‍👦",
      highlight: true
    },
    {
      title: "Mock Interviews & Coaching",
      description: "Practice sessions focusing on addressing career gaps confidently and showcasing your value.",
      icon: "🎤",
      highlight: false
    }
  ]

  const whoBenefits = [
    {
      group: "Parental Leavers",
      description: "Returning after maternity/paternity leave with confidence and updated skills"
    },
    {
      group: "Career Breakers",
      description: "Coming back after health, family, or personal transitions"
    },
    {
      group: "Relocators",
      description: "Re-establishing careers after geographic moves"
    },
    {
      group: "Reinventors",
      description: "Those seeking to rebuild professional identity after extended breaks"
    }
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-pink-950 text-white overflow-hidden">
      <ParticlesBackground />
      <ChatPopup />

      {/* Header */}
      <header className="relative z-10 border-b border-pink-900/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-500 rounded-sm">
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
                <p className="text-sm text-pink-400 italic">Where passion meets excellence</p>
              </div>
            </Link>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                className="text-white hover:text-pink-400 focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
                aria-label="Contact us"
              >
                Contact Us
              </Button>
              <Link href="/">
                <Button 
                  variant="ghost" 
                  className="text-white hover:text-pink-400 focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                  aria-label="Back to home"
                >
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-pink-400 to-pink-600">
              Back-to-Work Package
            </h1>
            <p className="text-xl text-pink-200 mb-8">
              Return stronger, smarter, and with absolute confidence. This isn't just a return to work—it's your powerful career reinvention.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-pink-700 hover:from-pink-600 hover:to-pink-800 text-white border-0 focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 shadow-lg shadow-pink-900/30"
                aria-label="Get the package now"
              >
                Get Package @ ₹5999
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-pink-400 hover:bg-pink-900/30 hover:text-pink-100 focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                aria-label="Schedule consultation"
              >
                Free Re-Entry Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="relative z-10 py-16 bg-pink-900/10 backdrop-blur-sm border-y border-pink-900/30">
        <div className="container mx-auto px-4">
          <SectionHeader title="Tailored For" colorClass="pink" id="tailored-for" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whoBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-pink-900/20 p-6 rounded-xl border border-pink-900/30 hover:border-pink-400 transition-colors"
              >
                <h3 className="text-xl font-bold mb-3 text-pink-300">{benefit.group}</h3>
                <p className="text-pink-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Re-Entry Success Stories" 
            colorClass="pink" 
            id="success-stories"
          />
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-gray-900 to-pink-900/20 p-8 md:p-12 rounded-2xl border border-pink-900/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-300 mb-2">92%</div>
                <p className="text-pink-100">Success rate in 6 months</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-300 mb-2">3.5x</div>
                <p className="text-pink-100">More interview invitations</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-300 mb-2">2-4mo</div>
                <p className="text-pink-100">Average time to placement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Features */}
      <section className="relative z-10 py-24 bg-pink-950/5">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="What You'll Master" 
            colorClass="pink" 
            id="what-youll-master"
            subtitle="Get the essential tools to not just re-enter, but thrive and reclaim your professional space"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {packageFeatures.map((feature, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${feature.highlight ? 'from-pink-900/30 via-gray-900 to-pink-900/20 border-pink-400/30' : 'from-gray-900 to-gray-800 border-gray-800'} p-8 rounded-xl border hover:border-pink-400 transition-all group`}
              >
                <div className="text-4xl mb-4 group-hover:text-pink-400 transition-colors">
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${feature.highlight ? 'text-pink-300' : 'text-white'} group-hover:text-pink-400 transition-colors`}>
                  {feature.title}
                </h3>
                <p className={`${feature.highlight ? 'text-pink-100' : 'text-gray-400'} group-hover:text-pink-200 transition-colors`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Break Reframing Section */}
      <section className="relative z-10 py-16 bg-pink-900/10 backdrop-blur-sm border-y border-pink-900/30">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Transform Your Career Break" 
            colorClass="pink" 
            id="career-break-reframing"
            subtitle="Turn time away into a professional advantage"
          />
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-pink-900/20 to-gray-900 p-8 rounded-xl border border-pink-900/30">
              <h3 className="text-2xl font-bold mb-4 text-pink-300">Before Reframing</h3>
              <ul className="space-y-3 text-pink-100">
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">✗</span>
                  "I've been out of the workforce too long"
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">✗</span>
                  "My skills are outdated"
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">✗</span>
                  "I'll have to start from scratch"
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-pink-900/20 to-gray-900 p-8 rounded-xl border border-pink-900/30">
              <h3 className="text-2xl font-bold mb-4 text-pink-300">After Reframing</h3>
              <ul className="space-y-3 text-pink-100">
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">✓</span>
                  "I gained valuable life experience and transferable skills"
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">✓</span>
                  "I've refreshed my skills with current industry knowledge"
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">✓</span>
                  "I'm returning with renewed perspective and energy"
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Working Parent Strategies */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Working Parent Strategies" 
            colorClass="pink" 
            id="parent-strategies"
          />
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-gray-900 to-pink-900/20 p-8 rounded-xl border border-pink-900/30">
            <h3 className="text-2xl font-bold mb-6 text-pink-300 text-center">Balancing Career & Family</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl text-pink-400 mb-2">⏱️</div>
                <h4 className="font-bold text-pink-200 mb-2">Time Blocking</h4>
                <p className="text-pink-100 text-sm">Maximize productivity during work hours</p>
              </div>
              <div className="text-center">
                <div className="text-3xl text-pink-400 mb-2">🛑</div>
                <h4 className="font-bold text-pink-200 mb-2">Boundary Setting</h4>
                <p className="text-pink-100 text-sm">Protect family time without guilt</p>
              </div>
              <div className="text-center">
                <div className="text-3xl text-pink-400 mb-2">🗣️</div>
                <h4 className="font-bold text-pink-200 mb-2">Negotiation</h4>
                <p className="text-pink-100 text-sm">Advocate for flexible arrangements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-pink-900/30 via-gray-900 to-pink-900/20 p-8 md:p-12 rounded-2xl border border-pink-900/30 shadow-lg shadow-pink-900/20">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready for Your Powerful Comeback?</h2>
            <p className="text-pink-200 mb-8 text-xl">
              Re-enter the workforce with confidence and renewed skills.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-pink-700 hover:from-pink-600 hover:to-pink-800 text-white border-0 focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 shadow-lg shadow-pink-900/30"
                onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
                aria-label="Get the package now"
              >
                Get Back-to-Work Package @ ₹5999
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-pink-400 hover:bg-pink-900/30 hover:text-pink-100 focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                aria-label="Get free assessment"
              >
                Get Free Re-Entry Plan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Back-to-Work FAQs"
        faqs={faqs}
        className="py-16 px-4 bg-pink-950/50"
        titleClassName="text-pink-400"
        triggerClassName="hover:text-pink-400 focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
        viewAllLink={{
          href: "/faq#back-to-work",
          text: "View all Back-to-Work FAQs",
          className: "text-pink-400 hover:text-pink-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500 rounded-sm",
        }}
      />

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 border-t border-pink-900/30 py-8">
        <div className="container mx-auto px-4 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center mb-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-500 rounded-sm"
            aria-label="Go to home page"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-04%2022.06.43%20-%20A%20futuristic%2C%20minimalist%20logo%20for%20%27The%20Neo%20Veda%20Academy%27.%20The%20design%20features%20sleek%2C%20modern%20typography%20with%20a%20glowing%20ambient%20blur%20effect.%20The%20color%20p.jpg-kenHNOUl8eEp4SHAKN09pB0VusPukp.jpeg"
              alt="The Neo Veda Academy Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-lg font-bold">THE NEO VEDA ACADEMY</span>
          </Link>
          <p className="text-pink-300 mb-4">
            <a 
              href="/" 
              className="hover:text-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500 rounded-sm"
              aria-label="Visit our website"
            >
              theneovedaacademy.com
            </a>{" "}
            | theneovedaacademy@gmail.com
          </p>
          <p className="text-pink-300 mb-4">(+91) 8147884482 | (+1) 689 240 9966</p>
          <p className="text-pink-300 mb-4">
            <span className="text-sm text-pink-400 italic">Where passion meets excellence</span>
          </p>
          <p className="text-pink-900">
            &copy; {new Date().getFullYear()} The Neo Veda Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}