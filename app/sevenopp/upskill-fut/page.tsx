"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles-background"
import { ChatPopup } from "@/components/chat-popup"
import { FAQSection } from "@/components/faq-section"
import { SectionHeader } from "@/components/section-header"

export default function FutureGenerationsPage() {
  // FAQ data for this section
  const faqs = [
    {
      id: "future-1",
      question: "Is this suitable for complete beginners?",
      answer: "Absolutely! We start from the very basics and use fun, interactive methods to make AI concepts accessible to both kids and parents with no prior tech knowledge.",
    },
    {
      id: "future-2",
      question: "What age group is this designed for?",
      answer: "The program is perfect for kids ages 8-15, with content adapted for different age groups. Parents participate alongside their children at any age.",
    },
    {
      id: "future-3",
      question: "How much time does it require?",
      answer: "Just 1-2 hours per week for 8 weeks, with flexible scheduling. The activities are designed to fit into busy family schedules.",
    },
    {
      id: "future-4",
      question: "Do parents need tech skills?",
      answer: "No tech skills required! We guide both parents and children through each concept with simple, engaging activities.",
    },
    {
      id: "future-5",
      question: "What devices do we need?",
      answer: "Just a computer or tablet with internet access. All tools we use are web-based and don't require special hardware.",
    },
  ]

  const packageFeatures = [
    {
      title: "AI Literacy Foundations",
      description: "Grasp core AI concepts, key terms, and how it differs from traditional coding.",
      icon: "🧠",
      highlight: true
    },
    {
      title: "Interactive Learning",
      description: "Game-like experiences that make complex concepts fun and engaging.",
      icon: "🎮",
      highlight: false
    },
    {
      title: "Critical Thinking",
      description: "Learn to assess AI-generated information and recognize its limitations.",
      icon: "🔍",
      highlight: true
    },
    {
      title: "Family Bonding",
      description: "Shared activities designed for parents and children to learn together.",
      icon: "👨‍👩‍👧‍👦",
      highlight: false
    },
    {
      title: "Responsible AI Use",
      description: "Guidance on productive and ethical use of AI tools.",
      icon: "🤖",
      highlight: true
    },
    {
      title: "Future Skills",
      description: "Build essential knowledge for tomorrow's tech-driven world.",
      icon: "🚀",
      highlight: false
    }
  ]

  const ageGroups = [
    {
      group: "Curious Kids (8-12)",
      benefits: ["Fun AI experiments", "Game-based learning", "Creative projects"]
    },
    {
      group: "Tech-Savvy Teens (13-15)",
      benefits: ["Practical applications", "Career connections", "Advanced concepts"]
    },
    {
      group: "Engaged Parents",
      benefits: ["Learning guides", "Discussion topics", "Safety guidelines"]
    }
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-orange-950 text-white overflow-hidden">
      <ParticlesBackground />
      <ChatPopup />

      {/* Header */}
      <header className="relative z-10 border-b border-orange-900/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500 rounded-sm">
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
                <p className="text-sm text-orange-400 italic">Where passion meets excellence</p>
              </div>
            </Link>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                className="text-white hover:text-orange-400 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
                aria-label="Contact us"
              >
                Contact Us
              </Button>
              <Link href="/">
                <Button 
                  variant="ghost" 
                  className="text-white hover:text-orange-400 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600">
              Upskilling Our Future Generations
            </h1>
            <p className="text-xl text-orange-200 mb-8">
              Discover the magic of AI together! Learn alongside your child in this powerful bonding experience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white border-0 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 shadow-lg shadow-orange-900/30"
                aria-label="Get the package now"
              >
                Get Package @ ₹5999
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-orange-400 hover:bg-orange-900/30 hover:text-orange-100 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                aria-label="Learn more"
              >
                Sample Lesson
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="relative z-10 py-16 bg-orange-900/10 backdrop-blur-sm border-y border-orange-900/30">
        <div className="container mx-auto px-4">
          <SectionHeader title="Tailored For" colorClass="orange" id="tailored-for" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ageGroups.map((group, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-orange-900/20 p-8 rounded-xl border border-orange-900/30 hover:border-orange-400 transition-colors"
              >
                <h3 className="text-2xl font-bold mb-4 text-orange-300">{group.group}</h3>
                <ul className="space-y-2 text-orange-100">
                  {group.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Benefits Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Family Learning Benefits" 
            colorClass="orange" 
            id="learning-benefits"
          />
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-gray-900 to-orange-900/20 p-8 md:p-12 rounded-2xl border border-orange-900/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-300 mb-2">👨‍👩‍👧‍👦</div>
                <h3 className="text-xl font-bold mb-2 text-orange-200">Stronger Bonds</h3>
                <p className="text-orange-100">Shared learning creates meaningful family connections</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-300 mb-2">💡</div>
                <h3 className="text-xl font-bold mb-2 text-orange-200">Confidence Boost</h3>
                <p className="text-orange-100">Parents gain skills to guide their children's tech use</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-300 mb-2">🔮</div>
                <h3 className="text-xl font-bold mb-2 text-orange-200">Future Ready</h3>
                <p className="text-orange-100">Prepares kids for tomorrow's AI-driven world</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Features */}
      <section className="relative z-10 py-24 bg-orange-950/5">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Skills You'll Master" 
            colorClass="orange" 
            id="skills-youll-master"
            subtitle="Learning together as a family builds stronger connections"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {packageFeatures.map((feature, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${feature.highlight ? 'from-orange-900/30 via-gray-900 to-orange-900/20 border-orange-400/30' : 'from-gray-900 to-gray-800 border-gray-800'} p-8 rounded-xl border hover:border-orange-400 transition-all group`}
              >
                <div className="text-4xl mb-4 group-hover:text-orange-400 transition-colors">
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${feature.highlight ? 'text-orange-300' : 'text-white'} group-hover:text-orange-400 transition-colors`}>
                  {feature.title}
                </h3>
                <p className={`${feature.highlight ? 'text-orange-100' : 'text-gray-400'} group-hover:text-orange-200 transition-colors`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Approach Section */}
      <section className="relative z-10 py-16 bg-orange-900/10 backdrop-blur-sm border-y border-orange-900/30">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Our Fun Learning Approach" 
            colorClass="orange" 
            id="learning-approach"
          />
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-900/20 to-gray-900 p-8 rounded-xl border border-orange-900/30">
              <h3 className="text-2xl font-bold mb-4 text-orange-300">For Kids</h3>
              <ul className="space-y-3 text-orange-100">
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">🎲</span>
                  Interactive games and challenges
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">🧩</span>
                  Hands-on creative projects
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">🤖</span>
                  Building simple AI models
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-900/20 to-gray-900 p-8 rounded-xl border border-orange-900/30">
              <h3 className="text-2xl font-bold mb-4 text-orange-300">For Parents</h3>
              <ul className="space-y-3 text-orange-100">
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">📚</span>
                  Clear, jargon-free explanations
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">💬</span>
                  Discussion guides for family talks
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">🛡️</span>
                  Safety and responsibility frameworks
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Families Love Our Program" 
            colorClass="orange" 
            id="testimonials"
          />
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-gray-900 to-orange-900/20 p-8 rounded-xl border border-orange-900/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl text-orange-400 mb-2">⭐️⭐️⭐️⭐️⭐️</div>
                <p className="text-orange-100 italic">"My 10-year-old now explains AI concepts to me! We bond over the weekly challenges."</p>
                <p className="text-orange-300 mt-2">- Priya, Parent</p>
              </div>
              <div className="text-center">
                <div className="text-3xl text-orange-400 mb-2">⭐️⭐️⭐️⭐️⭐️</div>
                <p className="text-orange-100 italic">"Finally understand what my tech-savvy teen is passionate about. Highly recommend!"</p>
                <p className="text-orange-300 mt-2">- Rohan, Parent</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-orange-900/30 via-gray-900 to-orange-900/20 p-8 md:p-12 rounded-2xl border border-orange-900/30 shadow-lg shadow-orange-900/20">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Future-Proof Your Family?</h2>
            <p className="text-orange-200 mb-8 text-xl">
              Join hundreds of families learning AI together in a fun, engaging way.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white border-0 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 shadow-lg shadow-orange-900/30"
                onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
                aria-label="Get the package now"
              >
                Enroll Now @ ₹5999
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-orange-400 hover:bg-orange-900/30 hover:text-orange-100 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                aria-label="Sample lesson"
              >
                Try Sample Lesson
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Family Learning FAQs"
        faqs={faqs}
        className="py-16 px-4 bg-orange-950/50"
        titleClassName="text-orange-400"
        triggerClassName="hover:text-orange-400 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
        viewAllLink={{
          href: "/faq#future-generations",
          text: "View all Family Learning FAQs",
          className: "text-orange-400 hover:text-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 rounded-sm",
        }}
      />

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 border-t border-orange-900/30 py-8">
        <div className="container mx-auto px-4 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center mb-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500 rounded-sm"
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
          <p className="text-orange-300 mb-4">
            <a 
              href="/" 
              className="hover:text-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 rounded-sm"
              aria-label="Visit our website"
            >
              theneovedaacademy.com
            </a>{" "}
            | theneovedaacademy@gmail.com
          </p>
          <p className="text-orange-300 mb-4">(+91) 8147884482 | (+1) 689 240 9966</p>
          <p className="text-orange-300 mb-4">
            <span className="text-sm text-orange-400 italic">Where passion meets excellence</span>
          </p>
          <p className="text-orange-900">
            &copy; {new Date().getFullYear()} The Neo Veda Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}