"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles-background"
import { ChatPopup } from "@/components/chat-popup"
import { FAQSection } from "@/components/faq-section"
import { SectionHeader } from "@/components/section-header"

export default function CareerTransitionPage() {
  // FAQ data for this section
  const faqs = [
    {
      id: "transition-1",
      question: "Who is the Career Transition Package for?",
      answer:
        "This package is designed for professionals navigating career changes, including career gap professionals, maternity leave returnees, career switchers, and blue-collar to white-collar transitions. It provides tailored support for reintegration or transitioning into new industries.",
    },
    {
      id: "transition-2",
      question: "How does this package help with career gaps?",
      answer:
        "We offer a structured back-to-work plan, including skill refreshers, confidence rebuilding, and updated resume and LinkedIn profiles. Mock interviews and networking strategies ensure a smooth re-entry into the workforce.",
    },
    {
      id: "transition-3",
      question: "What certifications are included?",
      answer:
        "Certifications vary based on your transition goals. For career switchers, we offer bridging courses in new industries. For blue-collar to white-collar transitions, we provide digital literacy and office tools training. All certifications are industry-recognized.",
    },
    {
      id: "transition-4",
      question: "How long does the program take to complete?",
      answer:
        "The program duration depends on your needs. Most participants complete it in 6-8 weeks with 8-10 hours weekly commitment. Flexible scheduling options are available, including weekend and evening sessions.",
    },
    {
      id: "transition-5",
      question: "Do you provide job placement assistance?",
      answer:
        "Yes, we offer job placement support, including access to our employer network, job matching services, and referral opportunities. We also provide ongoing support for the first 3 job applications after program completion.",
    },
  ]

  const programSections = [
    {
      title: "Career Gap Professionals – Back-to-Work Plan",
      id: "career-gap",
      features: [
        "Confidence Rebuilding & Skill Refreshers",
        "Resume, LinkedIn & Networ for Re-entry",
        "Technical Upskilling & Mock Interview Coaching"
      ],
      description: "Reintegrate into the workforce with updated skills and a strategic re-entry plan."
    },
    {
      title: "Maternity Leave Professionals – Flexible Comeback",
      id: "maternity-leave",
      features: [
        "Remote & Part-Time Career Strategy",
        "Work-Life Balance & Confidence Coaching",
        "Freelancing & Consulting Training"
      ],
      description: "Transition back to work with flexible options and renewed confidence.",
      bgClass: "bg-black/50 backdrop-blur-sm"
    },
    {
      title: "Career Switchers – Industry Transition",
      id: "career-switchers",
      features: [
        "Career Change Coaching & Strategy",
        "Transferable Skills Branding",
        "Bridging Courses & Certifications",
        "Resume & LinkedIn Repositioning"
      ],
      description: "Successfully pivot to a new industry with tailored coaching and certifications."
    },
    {
      title: "Blue Collar to White Collar – Digital Upskilling",
      id: "blue-to-white",
      features: [
        "Digital Literacy Training & Office Tools",
        "Targeted White-Collar Skills (Admin, Sales, IT Support)",
        "Communication & Workplace Etiquette Training",
        "Professional Resume & LinkedIn Setup"
      ],
      description: "Transition to white-collar roles with essential digital and professional skills.",
      bgClass: "bg-black/50 backdrop-blur-sm"
    }
  ]

  const benefits = [
    {
      title: "Tailored Transition Plan",
      description: "Personalized roadmap for your specific career transition goals"
    },
    {
      title: "Industry-Recognized Certifications",
      description: "Certifications to validate your new skills and knowledge"
    },
    {
      title: "Job Placement Support",
      description: "Access to our employer network and job matching services"
    },
    {
      title: "1:1 Coaching",
      description: "Personalized guidance from career transition specialists"
    },
    {
      title: "Flexible Learning Options",
      description: "Weekend, evening, and self-paced learning tracks"
    },
    {
      title: "Money-Back Guarantee",
      description: "We guarantee satisfaction or your money back"
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
              Career Transition Package
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Navigate career changes with confidence and updated skillsets tailored to your goals.
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
                aria-label="Download brochure"
              >
                Download Brochure
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
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Career Gap Professionals</h3>
              <p className="text-gray-300 mb-4">
                Reintegrate into the workforce with updated skills and a strategic re-entry plan.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Returning after a career break</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Seeking updated skills and confidence</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Wanting to re-enter the workforce smoothly</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Maternity Leave Professionals</h3>
              <p className="text-gray-300 mb-4">
                Transition back to work with flexible options and renewed confidence.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Returning after maternity leave</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Seeking remote or part-time opportunities</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Wanting to balance work and family life</span>
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
          <SectionHeader title="Success Stories" colorClass="purple" id="testimonials" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-purple-400">S</span>
                </div>
                <div>
                  <h4 className="font-bold">Sneha Patel</h4>
                  <p className="text-sm text-purple-300">Placed at Accenture</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "After a 3-year career gap, I was unsure about re-entering the workforce. The Career Transition Package gave me the confidence and skills to land a role at Accenture within 2 months!"
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-purple-400">R</span>
                </div>
                <div>
                  <h4 className="font-bold">Rahul Mehta</h4>
                  <p className="text-sm text-purple-300">Placed at Amazon</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "The mock interviews gave me so much confidence. I went into my actual interviews feeling prepared and landed a role with 20% higher salary than I expected thanks to the negotiation training."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12 rounded-2xl border border-gray-800">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transition Your Career?</h2>
            <p className="text-gray-300 mb-8">
              Join our next cohort and gain the skills and confidence to navigate your career transition successfully.
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
                Schedule Consultation
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
          href: "/faq#career-transition",
          text: "View all Career Transition FAQs",
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