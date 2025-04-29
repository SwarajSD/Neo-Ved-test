"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles-background"
import { ChatPopup } from "@/components/chat-popup"
import { FAQSection } from "@/components/faq-section"
import { SectionHeader } from "@/components/section-header"

export default function ExecutiveGrowthPage() {
  // FAQ data for this section
  const faqs = [
    {
      id: "exec-1",
      question: "Who is the Executive Growth Package designed for?",
      answer:
        "This package serves two groups: (1) Mid-career professionals (5-10 years experience) preparing for executive roles, and (2) Early retirees transitioning to advisory/consulting careers or passion projects.",
    },
    {
      id: "exec-2",
      question: "How does this differ from regular leadership programs?",
      answer:
        "We combine traditional leadership development with future-focused digital skills and flexible career design - addressing both corporate advancement and alternative career paths for experienced professionals.",
    },
    {
      id: "exec-3",
      question: "What executive education guidance is included?",
      answer:
        "We provide personalized recommendations for MBA/EMBA programs, executive certificates, and micro-credentials from top institutions, plus application strategy coaching.",
    },
    {
      id: "exec-4",
      question: "Can this help me transition to consulting?",
      answer:
        "Absolutely. The package includes consulting business setup guidance, client acquisition strategies, pricing models, and tools to establish your thought leadership in your industry.",
    },
    {
      id: "exec-5",
      question: "Is there ongoing support after program completion?",
      answer:
        "Yes, participants receive 12 months of alumni access including quarterly strategy reviews, networking events, and resource updates to support their continued growth.",
    },
  ]

  const programSections = [
    {
      title: "Mid-Career Professionals – Executive Growth",
      id: "mid-career",
      features: [
        "Strategic Mid-Career Transformation Plan",
        "Future-Proofing with AI, Automation & Digital Skills",
        "Executive Coaching for Leadership & Management",
        "MBA & Executive Education Guidance"
      ],
      description: "Transition from manager to visionary leader with strategic career positioning."
    },
    {
      title: "Early Retirees – Passion Career & Consulting",
      id: "early-retirees",
      features: [
        "Advisory & Consulting Career Planning",
        "Monetizing Passion Projects (coaching, speaking, writing)",
        "Building a Digital Presence (LinkedIn, website)",
        "Flexible Work & Remote Consulting Opportunities"
      ],
      description: "Redefine your professional identity and create meaningful post-corporate work.",
      bgClass: "bg-black/50 backdrop-blur-sm"
    }
  ]

  const benefits = [
    {
      title: "Executive Assessment",
      description: "Comprehensive skills gap and market positioning analysis"
    },
    {
      title: "Digital Transformation",
      description: "Master AI tools relevant to your industry"
    },
    {
      title: "Board-Ready Preparation",
      description: "Develop governance and strategic oversight skills"
    },
    {
      title: "Personal Brand Strategy",
      description: "Build executive presence online and offline"
    },
    {
      title: "Transition Roadmap",
      description: "Custom 3-year plan for career evolution"
    },
    {
      title: "Lifetime Network Access",
      description: "Connect with our global executive community"
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
                aria-label="Contact us"
              >
                Contact Us
              </Button>
              <Link href="/">
                <Button 
                  variant="ghost" 
                  className="text-white hover:text-purple-400 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Executive Growth Package
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Elevate your leadership and craft your next career chapter with strategic guidance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white border-0 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                aria-label="Enroll now"
              >
                Enroll Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-purple-500 hover:bg-purple-950/50 hover:text-white focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                aria-label="Schedule consultation"
              >
                Executive Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="relative z-10 py-16 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <SectionHeader title="Who It's For" colorClass="purple" id="who-its-for" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Mid-Career Professionals (5-10 Years Exp)</h3>
              <p className="text-gray-300 mb-4">
                Prepare for C-suite roles and strategic leadership positions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Transitioning from operational to strategic roles</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Need to modernize leadership approach</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Considering executive education options</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Early Retirees</h3>
              <p className="text-gray-300 mb-4">
                Leverage your experience into meaningful post-corporate work.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Exploring consulting/advisory opportunities</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Wanting to monetize expertise/passion</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Seeking flexible work arrangements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Program Sections */}
      {programSections.map((section) => (
        <section 
          key={section.id} 
          className={`relative z-10 py-24 ${section.bgClass || ''}`}
          id={section.id}
        >
          <div className="container mx-auto px-4">
            <SectionHeader title={section.title} colorClass="purple" id={section.id} />
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-center">
              {section.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {section.features.map((feature) => (
                <div
                  key={feature}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition-all group"
                >
                  <div className="flex items-start">
                    <div className="bg-purple-500/20 p-2 rounded-lg mr-4">
                      <svg className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors">
                        {feature.split('(')[0].trim()}
                      </h3>
                      {feature.includes('(') && (
                        <p className="text-sm text-purple-300">
                          {feature.match(/\(([^)]+)\)/)?.[1]}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Benefits Section */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto px-4">
          <SectionHeader title="Program Benefits" colorClass="purple" id="benefits" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800 hover:border-purple-500 transition-all group"
              >
                <div className="flex items-center mb-4">
                  <div className="text-purple-400 text-2xl font-bold mr-3">{index + 1}</div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-16 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <SectionHeader title="Executive Success Stories" colorClass="purple" id="testimonials" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-purple-400">R</span>
                </div>
                <div>
                  <h4 className="font-bold">Rajiv Malhotra</h4>
                  <p className="text-sm text-purple-300">Director → VP Operations</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "The executive coaching and digital transformation modules helped me modernize my leadership approach. I was promoted within 9 months of completing the program."
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-purple-400">A</span>
                </div>
                <div>
                  <h4 className="font-bold">Ananya Desai</h4>
                  <p className="text-sm text-purple-300">Retired Banker → Industry Advisor</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "The consulting career planning gave me the structure to turn 25 years of banking experience into a thriving advisory practice with complete schedule flexibility."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12 rounded-2xl border border-gray-800">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready for Your Next-Level Growth?</h2>
            <p className="text-gray-300 mb-8">
              Whether advancing to the C-suite or crafting your next chapter, we'll help you design your ideal professional future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white border-0 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
                aria-label="Enroll now"
              >
                Enroll Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-purple-500 hover:bg-purple-950/50 hover:text-white focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                aria-label="Schedule consultation"
              >
                Executive Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Frequently Asked Questions"
        faqs={faqs}
        className="py-16 px-4"
        titleClassName="text-purple-400"
        triggerClassName="hover:text-purple-400 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
        viewAllLink={{
          href: "/faq#executive-growth",
          text: "View all Executive Growth FAQs",
          className: "text-purple-400 hover:text-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 rounded-sm",
        }}
      />

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center mb-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-500 rounded-sm"
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
          <p className="text-gray-400 mb-4">
            <a 
              href="/" 
              className="hover:text-purple-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 rounded-sm"
              aria-label="Visit our website"
            >
              theneovedaacademy.com
            </a>{" "}
            | theneovedaacademy@gmail.com
          </p>
          <p className="text-gray-400 mb-4">(+91) 8147884482 | (+1) 689 240 9966</p>
          <p className="text-gray-400 mb-4">
            <span className="text-sm text-purple-400 italic">Where passion meets excellence</span>
          </p>
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} The Neo Veda Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}