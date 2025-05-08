"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles-background"
import { ChatPopup } from "@/components/chat-popup"
import { FAQSection } from "@/components/faq-section"
import { SectionHeader } from "@/components/section-header"

export default function PersonalBrandingPage() {
  // FAQ data for this section
  const faqs = [
    {
      id: "branding-1",
      question: "Who needs a personal branding package?",
      answer: "This package is essential for corporate professionals wanting to stand out, freelancers needing to differentiate themselves, entrepreneurs building credibility, and thought leaders looking to expand their influence.",
    },
    {
      id: "branding-2",
      question: "How does AI help with personal branding?",
      answer: "We use AI tools to analyze market positioning, optimize your LinkedIn profile for visibility, generate content ideas tailored to your audience, and identify your unique value proposition.",
    },
    {
      id: "branding-3",
      question: "What's included in the digital presence optimization?",
      answer: "Complete LinkedIn overhaul, resume website creation, content strategy development, and network growth tactics to establish you as an authority in your field.",
    },
    {
      id: "branding-4",
      question: "How long does it take to see results?",
      answer: "Most clients see increased visibility within 30 days, with significant traction in 3-6 months as the strategies compound.",
    },
    {
      id: "branding-5",
      question: "Do you help with service pricing strategies?",
      answer: "Yes, we provide frameworks to price, package, and pitch your services or expertise competitively based on your market position.",
    },
  ]

  const packageFeatures = [
    {
      title: "AI-Powered Brand Strategy",
      description: "Define your niche, audience, and unique value proposition using data-driven insights.",
      icon: "🤖",
      highlight: true
    },
    {
      title: "LinkedIn & Digital Presence",
      description: "Complete optimization of your LinkedIn profile and growth of your professional network.",
      icon: "🔗",
      highlight: false
    },
    {
      title: "Resume Website",
      description: "Create an ATS-optimized resume website that showcases your personal brand.",
      icon: "🌐",
      highlight: true
    },
    {
      title: "Income Stream Development",
      description: "Establish predictable revenue streams from your expertise and personal brand.",
      icon: "💰",
      highlight: false
    },
    {
      title: "Consulting Skills Mastery",
      description: "Learn to position yourself as an expert and deliver high-value advisory services.",
      icon: "🎓",
      highlight: true
    },
    {
      title: "Content Strategy",
      description: "Develop a content plan that builds authority and engages your target audience.",
      icon: "✍️",
      highlight: false
    }
  ]

  const whoBenefits = [
    {
      group: "Corporate Professionals",
      description: "Stand out in competitive environments and accelerate your career growth"
    },
    {
      group: "Freelancers",
      description: "Craft a profile that shines in crowded markets and attracts premium clients"
    },
    {
      group: "Entrepreneurs",
      description: "Build credibility and attract better business opportunities"
    },
    {
      group: "Thought Leaders",
      description: "Amplify your voice and expand your professional impact"
    }
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-green-950 text-white overflow-hidden">
      <ParticlesBackground />
      <ChatPopup />

      {/* Header */}
      <header className="relative z-10 border-b border-green-900/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-500 rounded-sm">
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
                <p className="text-sm text-green-400 italic">Where passion meets excellence</p>
              </div>
            </Link>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                className="text-white hover:text-green-400 focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
                aria-label="Contact us"
              >
                Contact Us
              </Button>
              <Link href="/">
                <Button 
                  variant="ghost" 
                  className="text-white hover:text-green-400 focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-green-400 to-green-600">
              Personal Branding Package
            </h1>
            <p className="text-xl text-green-200 mb-8">
              Crave freedom and purpose in your next chapter? It's time to own your work and build a brand that opens doors.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white border-0 focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 shadow-lg shadow-green-900/30"
                aria-label="Get the package now"
              >
                Get Package @ ₹5999
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-green-400 hover:bg-green-900/30 hover:text-green-100 focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                aria-label="Brand assessment"
              >
                Free Brand Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="relative z-10 py-16 bg-green-900/10 backdrop-blur-sm border-y border-green-900/30">
        <div className="container mx-auto px-4">
          <SectionHeader title="Tailored For" colorClass="green" id="tailored-for" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whoBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-green-900/20 p-6 rounded-xl border border-green-900/30 hover:border-green-400 transition-colors"
              >
                <h3 className="text-xl font-bold mb-3 text-green-300">{benefit.group}</h3>
                <p className="text-green-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Impact Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="The Power of Personal Branding" 
            colorClass="green" 
            id="brand-impact"
          />
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-gray-900 to-green-900/20 p-8 md:p-12 rounded-2xl border border-green-900/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-300 mb-2">5-10x</div>
                <p className="text-green-100">More visibility in your field</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-300 mb-2">3.5x</div>
                <p className="text-green-100">Higher earning potential</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-300 mb-2">87%</div>
                <p className="text-green-100">More inbound opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Features */}
      <section className="relative z-10 py-24 bg-green-950/5">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="What You'll Master" 
            colorClass="green" 
            id="what-youll-master"
            subtitle="Build a high-impact personal brand that attracts opportunities"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {packageFeatures.map((feature, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${feature.highlight ? 'from-green-900/30 via-gray-900 to-green-900/20 border-green-400/30' : 'from-gray-900 to-gray-800 border-gray-800'} p-8 rounded-xl border hover:border-green-400 transition-all group`}
              >
                <div className="text-4xl mb-4 group-hover:text-green-400 transition-colors">
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${feature.highlight ? 'text-green-300' : 'text-white'} group-hover:text-green-400 transition-colors`}>
                  {feature.title}
                </h3>
                <p className={`${feature.highlight ? 'text-green-100' : 'text-gray-400'} group-hover:text-green-200 transition-colors`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Branding Section */}
      <section className="relative z-10 py-16 bg-green-900/10 backdrop-blur-sm border-y border-green-900/30">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="AI-Powered Brand Building" 
            colorClass="green" 
            id="ai-branding"
            subtitle="Leverage cutting-edge technology to accelerate your brand growth"
          />
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-900/20 to-gray-900 p-8 rounded-xl border border-green-900/30">
              <h3 className="text-2xl font-bold mb-4 text-green-300">Market Positioning Analysis</h3>
              <ul className="space-y-3 text-green-100">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  AI-driven niche identification
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Competitive landscape mapping
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Unique value proposition development
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-900/20 to-gray-900 p-8 rounded-xl border border-green-900/30">
              <h3 className="text-2xl font-bold mb-4 text-green-300">Digital Presence Optimization</h3>
              <ul className="space-y-3 text-green-100">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  LinkedIn profile scoring & enhancement
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  AI-generated content recommendations
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Network growth automation strategies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Income Stream Development */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Monetize Your Expertise" 
            colorClass="green" 
            id="income-streams"
          />
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-gray-900 to-green-900/20 p-8 rounded-xl border border-green-900/30">
            <h3 className="text-2xl font-bold mb-6 text-green-300 text-center">Revenue Stream Strategies</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl text-green-400 mb-2">💼</div>
                <h4 className="font-bold text-green-200 mb-2">Consulting</h4>
                <p className="text-green-100 text-sm">Position yourself as a high-value advisor</p>
              </div>
              <div className="text-center">
                <div className="text-3xl text-green-400 mb-2">🎤</div>
                <h4 className="font-bold text-green-200 mb-2">Speaking</h4>
                <p className="text-green-100 text-sm">Leverage your brand for paid engagements</p>
              </div>
              <div className="text-center">
                <div className="text-3xl text-green-400 mb-2">📚</div>
                <h4 className="font-bold text-green-200 mb-2">Content</h4>
                <p className="text-green-100 text-sm">Monetize your knowledge through multiple channels</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-green-900/30 via-gray-900 to-green-900/20 p-8 md:p-12 rounded-2xl border border-green-900/30 shadow-lg shadow-green-900/20">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Build Your Powerful Personal Brand?</h2>
            <p className="text-green-200 mb-8 text-xl">
              Attract better opportunities and command premium rates for your expertise.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white border-0 focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 shadow-lg shadow-green-900/30"
                onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
                aria-label="Get the package now"
              >
                Get Branding Package @ ₹5999
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-green-400 hover:bg-green-900/30 hover:text-green-100 focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                aria-label="Get brand assessment"
              >
                Get Free Brand Audit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Personal Branding FAQs"
        faqs={faqs}
        className="py-16 px-4 bg-green-950/50"
        titleClassName="text-green-400"
        triggerClassName="hover:text-green-400 focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
        viewAllLink={{
          href: "/faq#personal-branding",
          text: "View all Branding FAQs",
          className: "text-green-400 hover:text-green-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 rounded-sm",
        }}
      />

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 border-t border-green-900/30 py-8">
        <div className="container mx-auto px-4 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center mb-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-500 rounded-sm"
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
          <p className="text-green-300 mb-4">
            <a 
              href="/" 
              className="hover:text-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 rounded-sm"
              aria-label="Visit our website"
            >
              theneovedaacademy.com
            </a>{" "}
            | theneovedaacademy@gmail.com
          </p>
          <p className="text-green-300 mb-4">(+91) 8147884482 | (+1) 689 240 9966</p>
          <p className="text-green-300 mb-4">
            <span className="text-sm text-green-400 italic">Where passion meets excellence</span>
          </p>
          <p className="text-green-900">
            &copy; {new Date().getFullYear()} The Neo Veda Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}