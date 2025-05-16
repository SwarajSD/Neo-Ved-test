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
      id: "exec-growth-1",
      question: "Who is this package designed for?",
      answer: "This package is perfect for ambitious professionals with less than 5 years of experience, those feeling stuck in their current role, or anyone seeking clarity on pursuing leadership, consulting, or entrepreneurship.",
    },
    {
      id: "exec-growth-2",
      question: "How is this different from the Job Market Readiness package?",
      answer: "While both packages optimize your professional presence, the Executive Growth Package focuses on strategic career advancement, leadership development, and future-proofing your skills for long-term success.",
    },
    {
      id: "exec-growth-3",
      question: "What's included in the Future-Proofing Roadmap?",
      answer: "You'll receive strategic pathways to stay relevant in evolving industries, learn to communicate innovation effectively, and develop tech-enabled skills to avoid career obsolescence.",
    },
    {
      id: "exec-growth-4",
      question: "How soon can I expect to see results?",
      answer: "Most participants report increased confidence and clarity within weeks, with measurable career advancement typically occurring within 3-6 months of implementing our strategies.",
    },
    {
      id: "exec-growth-5",
      question: "Is there mentorship included?",
      answer: "Yes, the package includes two 1:1 strategy sessions with our career growth experts to personalize your roadmap.",
    },
  ]

  const packageFeatures = [
    {
      title: "Strategic Career Growth Plan",
      description: "Design a customized roadmap to accelerate your career progression with clear milestones and actionable steps.",
      icon: "📊",
      highlight: true
    },
    {
      title: "Leadership & Influence Skills",
      description: "Master essential leadership competencies and influence tactics to stand out in your organization.",
      icon: "👔",
      highlight: false
    },
    {
      title: "Future-Proof Tech Skills",
      description: "Learn in-demand technical skills that will keep you relevant in evolving industries.",
      icon: "💻",
      highlight: true
    },
    {
      title: "AI-Powered Brand Optimization",
      description: "Enhance your LinkedIn visibility, engagement, and authenticity using cutting-edge AI tools.",
      icon: "🤖",
      highlight: false
    },
    {
      title: "Career Health Check",
      description: "Comprehensive assessment of your professional strengths and gaps with personalized recommendations.",
      icon: "🩺",
      highlight: true
    },
    {
      title: "Pivot Potential Assessment",
      description: "Identify high-growth opportunities perfectly aligned with your unique skill set and aspirations.",
      icon: "🔀",
      highlight: false
    }
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <ParticlesBackground />
      <ChatPopup />

      {/* Header */}
      <header className="relative z-10 border-b border-purple-900/50">
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-purple-500 to-purple-600">
              Executive Growth Package
            </h1>
            <p className="text-xl text-purple-200 mb-8">
              Ready to go beyond just competing? Become the sought-after professional you're meant to be.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white border-0 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 shadow-lg shadow-purple-900/30"
                aria-label="Get the package now"
              >
                Get Package @ ₹4999
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-purple-500 hover:bg-purple-900/30 hover:text-purple-100 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                aria-label="Learn more"
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="relative z-10 py-16 bg-purple-900/10 backdrop-blur-sm border-y border-purple-900/30">
        <div className="container mx-auto px-4">
          <SectionHeader title="Tailored For" colorClass="purple" id="tailored-for" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 p-8 rounded-xl border border-purple-900/30 hover:border-purple-500 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Ambitious Professionals</h3>
              <p className="text-purple-100">
                For those with less than 5 years experience ready to accelerate their career trajectory.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 p-8 rounded-xl border border-purple-900/30 hover:border-purple-500 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Career Transitioners</h3>
              <p className="text-purple-100">
                Professionals feeling stuck in their current role and seeking meaningful change.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 p-8 rounded-xl border border-purple-900/30 hover:border-purple-500 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Pathway Seekers</h3>
              <p className="text-purple-100">
                Those needing clarity on whether to pursue leadership, consulting, or entrepreneurship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Package Features */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Skills You'll Master" 
            colorClass="purple" 
            id="skills-youll-master"
            subtitle="Gain the edge to lead, grow exponentially, and future-proof your career"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {packageFeatures.map((feature, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${feature.highlight ? 'from-purple-900/30 via-gray-900 to-purple-900/20 border-purple-500/30' : 'from-gray-900 to-gray-800 border-gray-800'} p-8 rounded-xl border hover:border-purple-500 transition-all group`}
              >
                <div className="text-4xl mb-4 group-hover:text-purple-400 transition-colors">
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${feature.highlight ? 'text-purple-300' : 'text-white'} group-hover:text-purple-400 transition-colors`}>
                  {feature.title}
                </h3>
                <p className={`${feature.highlight ? 'text-purple-100' : 'text-gray-400'} group-hover:text-purple-200 transition-colors`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="relative z-10 py-16 bg-purple-900/10 backdrop-blur-sm border-y border-purple-900/30">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Why It Matters" 
            colorClass="purple" 
            id="why-it-matters"
            subtitle="Stop settling, start dominating - your career acceleration begins now"
          />
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-900/20 to-gray-900 p-8 rounded-xl border border-purple-900/30">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Future-Proofing Roadmap</h3>
              <ul className="space-y-3 text-purple-100">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  Strategic pathways to stay relevant in evolving industries
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  Speak the language of innovation with clarity and credibility
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  Avoid obsolescence and become a champion of tech-enabled progress
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-900/20 to-gray-900 p-8 rounded-xl border border-purple-900/30">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Career Transformation</h3>
              <ul className="space-y-3 text-purple-100">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  Diagnose your professional strengths and gaps with our Career Health Check
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  Spot high-growth opportunities with our Pivot Potential Assessment
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">✓</span>
                  Develop executive presence and strategic thinking capabilities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial/Results Section */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Career Acceleration Results" 
            colorClass="purple" 
            id="results"
          />
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-purple-900/30 to-gray-900 p-8 md:p-12 rounded-2xl border border-purple-900/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-300 mb-2">3-5x</div>
                <p className="text-purple-100">Faster career progression</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-300 mb-2">87%</div>
                <p className="text-purple-100">Report increased confidence</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-300 mb-2">6-9mo</div>
                <p className="text-purple-100">To measurable advancement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-black text-white">
  <SectionHeader
    subtitle="Pricing"
    title="Individual Product Pricing"
    description="Choose the service that fits your re-entry journey."
  />

  <div className="max-w-md mx-auto overflow-x-auto">
    <table className="table-auto border border-white w-full text-left text-sm">
      <thead>
        <tr>
          <th className="border border-white px-4 py-2 font-semibold">INDIVIDUAL PRODUCT</th>
          <th className="border border-white px-4 py-2 font-semibold">PRICE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-white px-4 py-2">Resume, Bio Update</td>
          <td className="border border-white px-4 py-2">Rs.1999/-</td>
        </tr>
        <tr>
          <td className="border border-white px-4 py-2">LinkedIn Update</td>
          <td className="border border-white px-4 py-2">Rs.1999/-</td>
        </tr>
        <tr>
          <td className="border border-white px-4 py-2">Leadership & Management Tools Upskilling</td>
          <td className="border border-white px-4 py-2">Rs.2499/-</td>
        </tr>
        <tr>
          <td className="border border-white px-4 py-2">Resume Website</td>
          <td className="border border-white px-4 py-2">Rs.2499/- / Rs.4999/-</td>
        </tr>
        <tr>
          <td className="border border-white px-4 py-2">Personal Branding</td>
          <td className="border border-white px-4 py-2">Rs.4999/-</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

      {/* CTA Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-purple-900/30 via-gray-900 to-purple-900/20 p-8 md:p-12 rounded-2xl border border-purple-900/30 shadow-lg shadow-purple-900/20">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready for Next-Level Career Success?</h2>
            <p className="text-purple-200 mb-8 text-xl">
              Gain the strategic edge to lead, grow exponentially, and future-proof your career.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white border-0 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 shadow-lg shadow-purple-900/30"
                onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
                aria-label="Get the package now"
              >
                Get Executive Package @ ₹4999
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-purple-500 hover:bg-purple-900/30 hover:text-purple-100 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                aria-label="Schedule consultation"
              >
                Schedule 1:1 Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Executive Growth FAQs"
        faqs={faqs}
        className="py-16 px-4 bg-gray-900/50"
        titleClassName="text-purple-400"
        triggerClassName="hover:text-purple-400 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
        viewAllLink={{
          href: "/faq#executive-growth",
          text: "View all Executive Growth FAQs",
          className: "text-purple-400 hover:text-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 rounded-sm",
        }}
      />

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 border-t border-purple-900/30 py-8">
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
          <p className="text-purple-300 mb-4">
            <a 
              href="/" 
              className="hover:text-purple-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 rounded-sm"
              aria-label="Visit our website"
            >
              theneovedaacademy.com
            </a>{" "}
            | theneovedaacademy@gmail.com
          </p>
          <p className="text-purple-300 mb-4">(+91) 8147884482 | (+1) 689 240 9966</p>
          <p className="text-purple-300 mb-4">
            <span className="text-sm text-purple-400 italic">Where passion meets excellence</span>
          </p>
          <p className="text-purple-900">
            &copy; {new Date().getFullYear()} The Neo Veda Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}