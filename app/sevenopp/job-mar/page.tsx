"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles-background"
import { ChatPopup } from "@/components/chat-popup"
import { FAQSection } from "@/components/faq-section"
import { SectionHeader } from "@/components/section-header"

export default function JobMarketReadinessPage() {
  // FAQ data for this section
  const faqs = [
    {
      id: "job-market-1",
      question: "Who is this package for?",
      answer: "This package is specifically designed for final year students and fresh graduates who are applying for jobs and want to stand out in the competitive job market.",
    },
    {
      id: "job-market-2",
      question: "How does the LinkedIn optimization work?",
      answer: "Our experts will optimize your profile to work with LinkedIn's algorithm, using the right keywords, formatting, and content strategy to make your profile more visible to recruiters.",
    },
    {
      id: "job-market-3",
      question: "What makes your resumes ATS-optimized?",
      answer: "Our resumes are designed to beat applicant tracking systems by using the right keywords, proper formatting, and structure that these systems look for, ensuring your resume reaches human eyes.",
    },
    {
      id: "job-market-4",
      question: "How long does it take to see results?",
      answer: "Most students see increased recruiter contacts within 2-4 weeks after implementing our strategies, though results may vary based on your field and experience level.",
    },
    {
      id: "job-market-5",
      question: "Is there any ongoing support after purchase?",
      answer: "Yes, we offer 30 days of email support to answer any questions you have about implementing the strategies in your job search.",
    },
  ]

  const packageFeatures = [
    {
      title: "ATS Optimized Resume",
      description: "Beat applicant tracking systems and ensure your resume actually reaches human eyes with proper formatting and keyword optimization.",
      icon: "📄"
    },
    {
      title: "LinkedIn Profile Makeover",
      description: "Get discovered by recruiters and build a professional brand that attracts opportunities through our comprehensive optimization.",
      icon: "🔍"
    },
    {
      title: "Job Search Strategy Guide",
      description: "Save time by applying smarter, not harder, with a system that gets results and maximizes your interview conversion rate.",
      icon: "🎯"
    },
    {
      title: "AI Visibility Enhancement",
      description: "Learn to use AI tools to enhance your visibility and engagement with recruiters and hiring managers.",
      icon: "🤖"
    },
    {
      title: "Interview Preparation",
      description: "Get ready for interviews with expert guidance on common questions, body language, and negotiation tactics.",
      icon: "💼"
    },
    {
      title: "Strategic Application Plan",
      description: "Build a relevant and strategic job search plan tailored to your skills and career goals.",
      icon: "📈"
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
              Job Market Readiness Package
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Tired of being just another applicant? Crack your dream job - master the skills, nail the interviews, get the offer.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white border-0 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                aria-label="Get the package now"
              >
                Get Package @ ₹2499
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-purple-500 hover:bg-purple-900/30 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                aria-label="Learn more"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="relative z-10 py-16 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <SectionHeader title="Tailored For" colorClass="purple" id="tailored-for" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Final Year Students</h3>
              <p className="text-gray-300">
                Get ahead of your peers by preparing for the job market before you graduate. Our package gives you the competitive edge you need.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Fresh Graduates</h3>
              <p className="text-gray-300">
                Stand out in the crowded job market with professional resume, LinkedIn profile, and job search strategies that get results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Package Features */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto px-4">
          <SectionHeader title="What You'll Master" colorClass="purple" id="what-you-get" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {packageFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition-all group"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="relative z-10 py-16 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <SectionHeader title="Why It Matters" colorClass="purple" id="why-it-matters" />
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Your Career Success Story Starts Here</h3>
              <p className="text-gray-300 mb-4">
                In today's competitive job market, having the right qualifications isn't enough. You need to present yourself effectively to both algorithms and humans.
              </p>
              <p className="text-gray-300">
                Our package gives you the tools to navigate the modern hiring landscape, from getting past ATS systems to making a lasting impression in interviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12 rounded-2xl border border-gray-800">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to transform your job search?</h2>
            <p className="text-gray-300 mb-8">
              Get the Job Market Readiness Package today and start getting noticed by recruiters.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white border-0 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
              onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
              aria-label="Get the package now"
            >
              Get Package @ ₹2499
            </Button>
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
          href: "/faq#job-market",
          text: "View all Job Market FAQs",
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