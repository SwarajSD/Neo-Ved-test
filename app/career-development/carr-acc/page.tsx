"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles-background"
import { ChatPopup } from "@/components/chat-popup"
import { FAQSection } from "@/components/faq-section"
import { SectionHeader } from "@/components/section-header"

export default function CareerAcceleratorPage() {
  const faqs = [
    {
      id: "accel-1",
      question: "Who is the Career Accelerator Package for?",
      answer:
        "This package is designed for early-career professionals with less than 5 years of experience and freelancers/gig workers looking to fast-track their careers. It’s ideal for those seeking to enhance their skills, credibility, and career trajectory.",
    },
    {
      id: "accel-2",
      question: "How does this help freelancers and gig workers?",
      answer:
        "We focus on personal branding, financial literacy, and client acquisition strategies to help freelancers build a sustainable and profitable career. You’ll also learn digital marketing and portfolio development to stand out in competitive markets.",
    },
    {
      id: "accel-3",
      question: "What certifications are included?",
      answer:
        "For professionals: PMP, Data Analytics, and AI/automation certifications. For freelancers: Digital marketing and financial literacy certifications. All are industry-recognized and designed to boost your credibility.",
    },
    {
      id: "accel-4",
      question: "How long does the program take to complete?",
      answer:
        "The program can be completed in 6-8 weeks with 10-12 hours weekly commitment. We offer flexible schedules, including weekend tracks, and provide access to resources for up to 6 months post-enrollment.",
    },
    {
      id: "accel-5",
      question: "Do you provide mentorship?",
      answer:
        "Yes, the package includes personalized mentorship from industry experts to guide you through career growth, leadership development, and personal branding strategies.",
    },
  ]

  const programSections = [
    {
      title: "Early-Career Professionals – Career Acceleration",
      id: "early-career",
      features: [
        "Career Growth Blueprint & Mentorship",
        "Leadership & Communication Mastery",
        "AI & Automation Upskilling for Relevance",
        "Industry Certifications (e.g., PMP, Data Analytics)",
      ],
      description: "Fast-track your career with advanced skills, mentorship, and industry-recognized certifications.",
    },
    {
      title: "Freelancers & Gig Workers – Personal Branding & Growth",
      id: "freelancers",
      features: [
        "High-Impact Personal Branding Workshops",
        "Financial Literacy for Income Stability",
        "Client Acquisition & Networking Tactics",
        "Digital Marketing & Online Portfolio Development",
      ],
      description: "Build a sustainable freelance career with strategies for branding, client acquisition, and financial stability.",
      bgClass: "bg-black/50 backdrop-blur-sm",
    },
  ]

  const benefits = [
    { title: "Career Growth Roadmap", description: "A personalized plan to accelerate your career trajectory" },
    { title: "Industry Certifications", description: "Boost your credibility with recognized credentials" },
    { title: "Mentorship", description: "Guidance from experienced professionals" },
    { title: "Personal Branding", description: "Stand out with a strong personal brand" },
    { title: "Financial Literacy", description: "Learn to manage income and expenses effectively" },
    { title: "Networking Opportunities", description: "Access to exclusive events and industry connections" },
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
            Career Accelerator Package
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Fast-track your career with advanced skills, mentorship, and industry-recognized certifications.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white"
              onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
            >
              Enroll Now
            </Button>
            <Button variant="outline" size="lg" className="text-white border-purple-500 hover:bg-purple-950/50">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="relative z-10 py-16 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <SectionHeader title="Who It's For" colorClass="purple" id="who-its-for" />
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Early Career */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Early-Career Professionals</h3>
              <p className="text-gray-300 mb-4">Professionals with less than 5 years of experience looking to accelerate their career growth.</p>
              <ul className="space-y-3 text-sm">
                <li>✓ Seeking leadership roles or promotions</li>
                <li>✓ Wanting to upskill in AI, automation, or data analytics</li>
                <li>✓ Looking for mentorship and career guidance</li>
              </ul>
            </div>
            {/* Freelancers */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Freelancers & Gig Workers</h3>
              <p className="text-gray-300 mb-4">Freelancers and gig workers aiming to build a sustainable and profitable career.</p>
              <ul className="space-y-3 text-sm">
                <li>✓ Wanting to enhance personal branding</li>
                <li>✓ Seeking financial literacy and stability</li>
                <li>✓ Looking to improve client acquisition and networking</li>
              </ul>
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

      {/* Benefits */}
      <section className="relative z-10 py-24">
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
      <section className="relative z-10 py-16 bg-black/50 backdrop-blur-sm">
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
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Accelerate Your Career?</h2>
            <p className="text-gray-300 mb-8">
              Take the next step in your professional journey with our Career Accelerator Package.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white"
                onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
              >
                Enroll Now
              </Button>
              <Button variant="outline" size="lg" className="text-white border-purple-500 hover:bg-purple-950/50">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
