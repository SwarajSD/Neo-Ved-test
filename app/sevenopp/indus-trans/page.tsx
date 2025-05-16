"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles-background"
import { ChatPopup } from "@/components/chat-popup"
import { FAQSection } from "@/components/faq-section"
import { SectionHeader } from "@/components/section-header"

export default function IndustryTransitionPage() {
  // FAQ data for this section
  const faqs = [
    {
      id: "transition-1",
      question: "How is this different from other career packages?",
      answer: "This package specifically focuses on helping professionals successfully transition between industries by identifying and highlighting transferable skills, while rebranding your professional identity for your new field.",
    },
    {
      id: "transition-2",
      question: "What industries can I transition to with this package?",
      answer: "We've helped clients transition between all major industries including finance to tech, healthcare to consulting, hospitality to HR, and more. The strategies are adaptable to any industry shift.",
    },
    {
      id: "transition-3",
      question: "How long does the transition process typically take?",
      answer: "Most clients see meaningful traction within 3-6 months, though this varies based on your target industry and how aggressively you implement the strategies from your Custom Transition Roadmap.",
    },
    {
      id: "transition-4",
      question: "Will this help if I don't know which industry to transition to?",
      answer: "Absolutely. Our skills mapping process helps identify industries where your existing skills are most valuable, and our Pivot Potential Assessment clarifies the best options for your unique background.",
    },
    {
      id: "transition-5",
      question: "What if I need to gain new technical skills?",
      answer: "Our Credential Selection Guide helps you identify only the most essential certifications or courses needed for your transition, saving you time and money on irrelevant upskilling.",
    },
  ]

  const packageFeatures = [
    {
      title: "Custom Transition Roadmap",
      description: "A clear, actionable plan to pivot industries without wasting time on wrong moves.",
      icon: "🗺️",
      highlight: true
    },
    {
      title: "Transferable Skills Mapping",
      description: "Identify and articulate how your existing skills apply to your new industry.",
      icon: "🧩",
      highlight: false
    },
    {
      title: "Strategic Personal Branding",
      description: "Position yourself as adaptable, not 'starting over' in your new field.",
      icon: "🎯",
      highlight: true
    },
    {
      title: "Credential Selection Guide",
      description: "Avoid costly, irrelevant courses—learn only what actually matters for your transition.",
      icon: "📚",
      highlight: false
    },
    {
      title: "Resume & LinkedIn Overhaul",
      description: "Get noticed for your skills, not just past job titles with ATS-optimized materials.",
      icon: "📄",
      highlight: true
    },
    {
      title: "AI-Powered Brand Enhancement",
      description: "Leverage AI tools to enhance visibility and engagement in your target industry.",
      icon: "🤖",
      highlight: false
    }
  ]

  const transitionExamples = [
    {
      from: "Finance",
      to: "Tech",
      skills: ["Analytical thinking", "Data interpretation", "Risk assessment"]
    },
    {
      from: "Hospitality",
      to: "HR",
      skills: ["People management", "Conflict resolution", "Customer service"]
    },
    {
      from: "Healthcare",
      to: "Consulting",
      skills: ["Problem-solving", "Process optimization", "Stakeholder communication"]
    },
    {
      from: "Education",
      to: "Corporate Training",
      skills: ["Curriculum design", "Presentation skills", "Performance evaluation"]
    }
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-blue-950 text-white overflow-hidden">
      <ParticlesBackground />
      <ChatPopup />

      {/* Header */}
      <header className="relative z-10 border-b border-blue-900/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 rounded-sm">
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
                <p className="text-sm text-blue-400 italic">Where passion meets excellence</p>
              </div>
            </Link>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                className="text-white hover:text-blue-400 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
                aria-label="Contact us"
              >
                Contact Us
              </Button>
              <Link href="/">
                <Button 
                  variant="ghost" 
                  className="text-white hover:text-blue-400 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600">
              Industry Transition Package
            </h1>
            <p className="text-xl text-blue-200 mb-8">
              Make it smart, smooth, and a massive success. Reinvent your career with confidence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white border-0 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 shadow-lg shadow-blue-900/30"
                aria-label="Get the package now"
              >
                Get Package @ ₹5999
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-blue-400 hover:bg-blue-900/30 hover:text-blue-100 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                aria-label="Learn more"
              >
                Transition Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="relative z-10 py-16 bg-blue-900/10 backdrop-blur-sm border-y border-blue-900/30">
        <div className="container mx-auto px-4">
          <SectionHeader title="Tailored For" colorClass="blue" id="tailored-for" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-blue-900/20 p-8 rounded-xl border border-blue-900/30 hover:border-blue-400 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-blue-300">Industry Transitioners</h3>
              <p className="text-blue-100">
                Professionals moving between fields (finance to tech, hospitality to HR, etc.)
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-blue-900/20 p-8 rounded-xl border border-blue-900/30 hover:border-blue-400 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-blue-300">Skills Translators</h3>
              <p className="text-blue-100">
                Those unsure how to effectively translate their skills across industries
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-blue-900/20 p-8 rounded-xl border border-blue-900/30 hover:border-blue-400 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-blue-300">Career Changers</h3>
              <p className="text-blue-100">
                Professionals needing clarity on transferable skills and industry-fit
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transition Examples */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Successful Transition Examples" 
            colorClass="blue" 
            id="transition-examples"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {transitionExamples.map((example, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-blue-900/20 p-6 rounded-xl border border-blue-900/30 hover:border-blue-400 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <span className="text-blue-400 font-bold mr-2">{example.from}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-blue-300 font-bold ml-2">{example.to}</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-200 mb-3">Transferable Skills:</h4>
                <ul className="space-y-2">
                  {example.skills.map((skill, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span className="text-blue-100">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Features */}
      <section className="relative z-10 py-24 bg-blue-900/5">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="What You'll Master" 
            colorClass="blue" 
            id="what-youll-master"
            subtitle="Turn your experience into your biggest advantage in a new industry"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {packageFeatures.map((feature, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${feature.highlight ? 'from-blue-900/30 via-gray-900 to-blue-900/20 border-blue-400/30' : 'from-gray-900 to-gray-800 border-gray-800'} p-8 rounded-xl border hover:border-blue-400 transition-all group`}
              >
                <div className="text-4xl mb-4 group-hover:text-blue-400 transition-colors">
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${feature.highlight ? 'text-blue-300' : 'text-white'} group-hover:text-blue-400 transition-colors`}>
                  {feature.title}
                </h3>
                <p className={`${feature.highlight ? 'text-blue-100' : 'text-gray-400'} group-hover:text-blue-200 transition-colors`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transition Playbook Section */}
      <section className="relative z-10 py-16 bg-blue-900/10 backdrop-blur-sm border-y border-blue-900/30">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Transition Playbook" 
            colorClass="blue" 
            id="transition-playbook"
            subtitle="Step-by-step guidance for a successful career shift"
          />
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-900/20 to-gray-900 p-8 rounded-xl border border-blue-900/30">
              <h3 className="text-2xl font-bold mb-4 text-blue-300">Phase 1: Strategic Foundation</h3>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">1.</span>
                  Skills audit & transferable skills identification
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">2.</span>
                  Target industry research & opportunity mapping
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">3.</span>
                  Credential gap analysis & upskilling plan
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-900/20 to-gray-900 p-8 rounded-xl border border-blue-900/30">
              <h3 className="text-2xl font-bold mb-4 text-blue-300">Phase 2: Rebrand & Launch</h3>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">4.</span>
                  Resume/LinkedIn overhaul for target industry
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">5.</span>
                  Strategic networking plan implementation
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">6.</span>
                  Interview preparation & salary negotiation
                </li>
              </ul>
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
          <td className="border border-white px-4 py-2">Resume & Bio update</td>
          <td className="border border-white px-4 py-2">Rs.1999/-</td>
        </tr>
        <tr>
          <td className="border border-white px-4 py-2">LinkedIn Upgrade</td>
          <td className="border border-white px-4 py-2">Rs.1999/-</td>
        </tr>
        <tr>
          <td className="border border-white px-4 py-2">Resume Website</td>
          <td className="border border-white px-4 py-2">Rs.2499/- / Rs.4999/-</td>
        </tr>
        <tr>
          <td className="border border-white px-4 py-2">Transferable skills mapping</td>
          <td className="border border-white px-4 py-2">Rs.2499/-</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

      {/* CTA Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-900/30 via-gray-900 to-blue-900/20 p-8 md:p-12 rounded-2xl border border-blue-900/30 shadow-lg shadow-blue-900/20">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready for a Successful Industry Transition?</h2>
            <p className="text-blue-200 mb-8 text-xl">
              Craft a winning strategic plan for your pivot with expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white border-0 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 shadow-lg shadow-blue-900/30"
                onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
                aria-label="Get the package now"
              >
                Get Transition Package @ ₹5999
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-blue-400 hover:bg-blue-900/30 hover:text-blue-100 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                aria-label="Get transition assessment"
              >
                Get Free Transition Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Industry Transition FAQs"
        faqs={faqs}
        className="py-16 px-4 bg-blue-950/50"
        titleClassName="text-blue-400"
        triggerClassName="hover:text-blue-400 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
        viewAllLink={{
          href: "/faq#industry-transition",
          text: "View all Transition FAQs",
          className: "text-blue-400 hover:text-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded-sm",
        }}
      />

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 border-t border-blue-900/30 py-8">
        <div className="container mx-auto px-4 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center mb-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 rounded-sm"
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
          <p className="text-blue-300 mb-4">
            <a 
              href="/" 
              className="hover:text-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded-sm"
              aria-label="Visit our website"
            >
              theneovedaacademy.com
            </a>{" "}
            | theneovedaacademy@gmail.com
          </p>
          <p className="text-blue-300 mb-4">(+91) 8147884482 | (+1) 689 240 9966</p>
          <p className="text-blue-300 mb-4">
            <span className="text-sm text-blue-400 italic">Where passion meets excellence</span>
          </p>
          <p className="text-blue-900">
            &copy; {new Date().getFullYear()} The Neo Veda Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}