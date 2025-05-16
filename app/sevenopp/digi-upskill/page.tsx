"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles-background"
import { ChatPopup } from "@/components/chat-popup"
import { FAQSection } from "@/components/faq-section"
import { SectionHeader } from "@/components/section-header"

export default function DigitalUpskillingPage() {
  // FAQ data for this section
  const faqs = [
    {
      id: "upskill-1",
      question: "I'm not tech-savvy. Is this for me?",
      answer: "Absolutely! This package is specifically designed for beginners. We start with foundational digital skills and build up gradually at your pace.",
    },
    {
      id: "upskill-2",
      question: "What jobs can I qualify for after this?",
      answer: "Our graduates land roles in customer support, administrative assistance, sales support, tech helpdesk, and other entry-level white-collar positions.",
    },
    {
      id: "upskill-3",
      question: "How long does it take to complete?",
      answer: "Most students complete the core program in 4-6 weeks, with ongoing support as you apply for jobs. You can learn at your own pace.",
    },
    {
      id: "upskill-4",
      question: "Do I need any prior experience?",
      answer: "No prior experience needed! We specialize in helping career changers transition from manual/field work to digital roles.",
    },
    {
      id: "upskill-5",
      question: "What if I don't know which role to pursue?",
      answer: "We include career path assessment tools to help identify the best roles matching your skills and interests.",
    },
  ]

  const packageFeatures = [
    {
      title: "Digital Foundations",
      description: "Master email, cloud storage, spreadsheets, and document editing - the essentials for any office job.",
      icon: "💻",
      highlight: true
    },
    {
      title: "LinkedIn & Resume Makeover",
      description: "Create an ATS-friendly resume and LinkedIn profile that gets you noticed by recruiters.",
      icon: "📄",
      highlight: false
    },
    {
      title: "Role-Specific Training",
      description: "Choose your path: admin, customer service, sales support, or tech helpdesk training.",
      icon: "🎯",
      highlight: true
    },
    {
      title: "Workplace Software",
      description: "Get comfortable with Google Workspace, MS Office, Zoom, and other common tools.",
      icon: "🛠️",
      highlight: false
    },
    {
      title: "Professional Communication",
      description: "Learn workplace etiquette, email writing, and professional phone/video skills.",
      icon: "🗣️",
      highlight: true
    },
    {
      title: "Career Transition Coaching",
      description: "Learn to frame your experience as an asset when moving to white-collar roles.",
      icon: "🔄",
      highlight: false
    }
  ]

  const careerPaths = [
    {
      role: "Customer Support",
      skills: ["Email/chat support", "CRM systems", "Problem-solving", "Patience"]
    },
    {
      role: "Administrative Assistant",
      skills: ["Calendar management", "Document preparation", "Data entry", "Organization"]
    },
    {
      role: "Sales Support",
      skills: ["CRM usage", "Lead management", "Client communication", "Follow-ups"]
    },
    {
      role: "Tech Helpdesk",
      skills: ["Troubleshooting basics", "Ticket systems", "User support", "Documentation"]
    }
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-amber-950 text-white overflow-hidden">
      <ParticlesBackground />
      <ChatPopup />

      {/* Header */}
      <header className="relative z-10 border-b border-amber-900/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 rounded-sm">
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
                <p className="text-sm text-amber-400 italic">Where passion meets excellence</p>
              </div>
            </Link>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                className="text-white hover:text-amber-400 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
                aria-label="Contact us"
              >
                Contact Us
              </Button>
              <Link href="/">
                <Button 
                  variant="ghost" 
                  className="text-white hover:text-amber-400 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600">
              Digital Upskilling Package
            </h1>
            <p className="text-xl text-amber-200 mb-8">
              You've got the drive — now unlock high-growth white-collar careers. Your roadmap to a better job starts here.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white border-0 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 shadow-lg shadow-amber-900/30"
                aria-label="Get the package now"
              >
                Get Package @ ₹2499
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-amber-400 hover:bg-amber-900/30 hover:text-amber-100 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                aria-label="Career assessment"
              >
                Free Career Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="relative z-10 py-16 bg-amber-900/10 backdrop-blur-sm border-y border-amber-900/30">
        <div className="container mx-auto px-4">
          <SectionHeader title="Tailored For" colorClass="amber" id="tailored-for" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-amber-900/20 p-8 rounded-xl border border-amber-900/30 hover:border-amber-400 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-amber-300">Career Changers</h3>
              <p className="text-amber-100">
                Warehouse, factory, retail, delivery, or field workers ready for digital roles.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-amber-900/20 p-8 rounded-xl border border-amber-900/30 hover:border-amber-400 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-amber-300">Role Seekers</h3>
              <p className="text-amber-100">
                Looking to move into customer support, admin, sales, or tech support positions.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-amber-900/20 p-8 rounded-xl border border-amber-900/30 hover:border-amber-400 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-amber-300">Digital Beginners</h3>
              <p className="text-amber-100">
                Eager to learn but intimidated by the digital workplace environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Your Potential Career Paths" 
            colorClass="amber" 
            id="career-paths"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {careerPaths.map((path, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-amber-900/20 p-6 rounded-xl border border-amber-900/30 hover:border-amber-400 transition-colors"
              >
                <h3 className="text-xl font-bold mb-4 text-amber-300">{path.role}</h3>
                <h4 className="text-lg font-semibold text-amber-200 mb-3">Skills You'll Learn:</h4>
                <ul className="space-y-2">
                  {path.skills.map((skill, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-amber-400 mr-2">•</span>
                      <span className="text-amber-100">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="relative z-10 py-16 bg-amber-900/10">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Proven Results" 
            colorClass="amber" 
            id="success-metrics"
          />
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-gray-900 to-amber-900/20 p-8 md:p-12 rounded-2xl border border-amber-900/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-300 mb-2">89%</div>
                <p className="text-amber-100">Job placement rate within 3 months</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-300 mb-2">2.7x</div>
                <p className="text-amber-100">Average salary increase</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-300 mb-2">4-6wks</div>
                <p className="text-amber-100">Average time to complete training</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Features */}
      <section className="relative z-10 py-24 bg-amber-950/5">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Skills You'll Master" 
            colorClass="amber" 
            id="skills-youll-master"
            subtitle="Go beyond basic skills with targeted training for digital confidence"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {packageFeatures.map((feature, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${feature.highlight ? 'from-amber-900/30 via-gray-900 to-amber-900/20 border-amber-400/30' : 'from-gray-900 to-gray-800 border-gray-800'} p-8 rounded-xl border hover:border-amber-400 transition-all group`}
              >
                <div className="text-4xl mb-4 group-hover:text-amber-400 transition-colors">
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${feature.highlight ? 'text-amber-300' : 'text-white'} group-hover:text-amber-400 transition-colors`}>
                  {feature.title}
                </h3>
                <p className={`${feature.highlight ? 'text-amber-100' : 'text-gray-400'} group-hover:text-amber-200 transition-colors`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Tools Section */}
      <section className="relative z-10 py-16 bg-amber-900/10 backdrop-blur-sm border-y border-amber-900/30">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Master Workplace Software" 
            colorClass="amber" 
            id="digital-tools"
            subtitle="Get comfortable with essential digital tools employers expect"
          />
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-amber-900/20 to-gray-900 p-8 rounded-xl border border-amber-900/30">
              <h3 className="text-2xl font-bold mb-4 text-amber-300">Core Productivity Tools</h3>
              <ul className="space-y-3 text-amber-100">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  Email (Gmail, Outlook)
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  Google Workspace & MS Office
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  Cloud storage (Drive, Dropbox)
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  Video conferencing (Zoom, Teams)
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-amber-900/20 to-gray-900 p-8 rounded-xl border border-amber-900/30">
              <h3 className="text-2xl font-bold mb-4 text-amber-300">Role-Specific Software</h3>
              <ul className="space-y-3 text-amber-100">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  CRM systems (Salesforce, Zoho)
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  Helpdesk ticketing systems
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  Calendar & scheduling tools
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  Basic spreadsheet formulas
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Transition Story Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Framing Your Career Transition" 
            colorClass="amber" 
            id="transition-story"
          />
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-gray-900 to-amber-900/20 p-8 rounded-xl border border-amber-900/30">
            <h3 className="text-2xl font-bold mb-6 text-amber-300 text-center">Turn Your Experience Into an Asset</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl text-amber-400 mb-2">🔄</div>
                <h4 className="font-bold text-amber-200 mb-2">Transferable Skills</h4>
                <p className="text-amber-100 text-sm">Highlight how your past experience applies to new roles</p>
              </div>
              <div className="text-center">
                <div className="text-3xl text-amber-400 mb-2">📖</div>
                <h4 className="font-bold text-amber-200 mb-2">Your Story</h4>
                <p className="text-amber-100 text-sm">Learn to talk about your career change positively</p>
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
          <td className="border border-white px-4 py-2">Digital Literacy & Computer Basics</td>
          <td className="border border-white px-4 py-2">Rs.999/-</td>
        </tr>
        <tr>
          <td className="border border-white px-4 py-2">Specialized Training for White-Collar Roles</td>
          <td className="border border-white px-4 py-2">Rs.1499/-</td>
        </tr>
        <tr>
          <td className="border border-white px-4 py-2">Resume & LinkedIn Setup for Career Shift</td>
          <td className="border border-white px-4 py-2">Rs.2999/-</td>
        </tr>
        <tr>
          <td className="border border-white px-4 py-2">Communication & Soft Skills Training</td>
          <td className="border border-white px-4 py-2">Rs.2499/-</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

      {/* CTA Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-amber-900/30 via-gray-900 to-amber-900/20 p-8 md:p-12 rounded-2xl border border-amber-900/30 shadow-lg shadow-amber-900/20">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Launch Your White-Collar Career?</h2>
            <p className="text-amber-200 mb-8 text-xl">
              Get the digital skills and professional branding you need to make the transition.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white border-0 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 shadow-lg shadow-amber-900/30"
                onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
                aria-label="Get the package now"
              >
                Get Upskilling Package @ ₹2499
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-amber-400 hover:bg-amber-900/30 hover:text-amber-100 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                aria-label="Get career assessment"
              >
                Get Free Career Match
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Digital Upskilling FAQs"
        faqs={faqs}
        className="py-16 px-4 bg-amber-950/50"
        titleClassName="text-amber-400"
        triggerClassName="hover:text-amber-400 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
        viewAllLink={{
          href: "/faq#digital-upskilling",
          text: "View all Upskilling FAQs",
          className: "text-amber-400 hover:text-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 rounded-sm",
        }}
      />

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 border-t border-amber-900/30 py-8">
        <div className="container mx-auto px-4 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center mb-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 rounded-sm"
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
          <p className="text-amber-300 mb-4">
            <a 
              href="/" 
              className="hover:text-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 rounded-sm"
              aria-label="Visit our website"
            >
              theneovedaacademy.com
            </a>{" "}
            | theneovedaacademy@gmail.com
          </p>
          <p className="text-amber-300 mb-4">(+91) 8147884482 | (+1) 689 240 9966</p>
          <p className="text-amber-300 mb-4">
            <span className="text-sm text-amber-400 italic">Where passion meets excellence</span>
          </p>
          <p className="text-amber-900">
            &copy; {new Date().getFullYear()} The Neo Veda Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}