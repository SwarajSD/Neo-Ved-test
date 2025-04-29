"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles-background"
import { ChatPopup } from "@/components/chat-popup"
import { FAQSection } from "@/components/faq-section"
import { SectionHeader } from "@/components/section-header"

export default function FinanceAnalyticsPage() {
  // FAQ data for this section
  const faqs = [
    {
      id: "finance-1",
      question: "What finance and analytics courses do you offer?",
      answer:
        "We offer comprehensive training in financial accounting, investment management, ERP systems, banking services, and financial data analysis. Our courses cover IFRS/GAAP compliance, SAP/Oracle financials, risk management, FinTech trends, and tools like Power BI, Tableau, and Python for financial analytics.",
    },
    {
      id: "finance-2",
      question: "Are these courses suitable for beginners?",
      answer:
        "Yes, we offer courses for all levels. Beginners can start with fundamentals like financial accounting principles, while experienced professionals can take advanced courses in financial modeling, ERP systems, or risk management. Each course description indicates the required prerequisites.",
    },
    {
      id: "finance-3",
      question: "Do you provide certification preparation?",
      answer:
        "Absolutely. Many of our courses prepare you for industry-recognized certifications like CPA, CFA, FRM, SAP FICO certification, and various business intelligence tool certifications.",
    },
    {
      id: "finance-4",
      question: "How practical are your finance courses?",
      answer:
        "All our courses emphasize hands-on learning. You'll work with real financial data, case studies, and industry-standard software like SAP, Oracle Financials, Power BI, and Tableau to gain practical, job-ready skills.",
    },
    {
      id: "finance-5",
      question: "Can I get corporate training for my finance team?",
      answer:
        "Yes, we offer customized corporate training programs tailored to your organization's specific needs in financial management, ERP systems, or analytics tools. Contact us for group rates and tailored curriculum options.",
    },
  ]

  const courseSections = [
    {
      title: "Financial Accounting & Compliance",
      id: "financial-accounting",
      courses: [
        "IFRS (International Financial Reporting Standards)",
        "GAAP (Generally Accepted Accounting Principles)",
        "Financial Statement Analysis",
        "Taxation & Compliance"
      ],
      description: (course: string) => `Master ${course} for accurate financial reporting and regulatory compliance.`
    },
    {
      title: "Investment & Risk Management",
      id: "investment-risk",
      courses: [
        "Portfolio Management",
        "Risk Assessment & Mitigation",
        "Credit Risk & Market Risk Analysis",
        "Financial Modelling"
      ],
      description: (course: string) => `Develop expertise in ${course} for sound investment decisions and risk control.`,
      bgClass: "bg-black/50 backdrop-blur-sm"
    },
    {
      title: "Enterprise Resource Planning (ERP) Tools",
      id: "erp-tools",
      courses: [
        "SAP Financials (FICO, S/4HANA Finance)",
        "Oracle Financials Cloud",
        "Microsoft Dynamics 365 Finance",
        "Workday Financial Management"
      ],
      description: (course: string) => `Become proficient in ${course} for enterprise financial management.`
    },
    {
      title: "Banking & Financial Services",
      id: "banking-services",
      courses: [
        "FinTech & Digital Banking Trends",
        "Payment Processing Systems",
        "Anti-Money Laundering (AML) & Compliance",
        "Financial Fraud Detection & Prevention"
      ],
      description: (course: string) => `Understand ${course} for modern banking operations and financial services.`,
      bgClass: "bg-black/50 backdrop-blur-sm"
    },
    {
      title: "Financial Data Analysis & Business Intelligence",
      id: "financial-analytics",
      courses: [
        "Power BI for Financial Reporting",
        "Tableau for Finance Analytics",
        "Excel & VBA for Financial Modelling",
        "Python & R for Financial Data Science"
      ],
      description: (course: string) => `Leverage ${course} to extract insights from financial data and drive decisions.`
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
              Master Financial Expertise & Analytics
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              From accounting standards to financial modeling, ERP systems to FinTech - advance your finance career with cutting-edge training.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white border-0 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
              aria-label="Browse all courses"
            >
              Browse All Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Course Sections */}
      {courseSections.map((section) => (
        <section 
          key={section.id} 
          className={`relative z-10 py-24 ${section.bgClass || ''}`}
          id={section.id}
        >
          <div className="container mx-auto px-4">
            <SectionHeader title={section.title} colorClass="purple" id={section.id} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {section.courses.map((course) => (
                <div
                  key={course}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition-all group"
                >
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                    {course}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {section.description(course)}
                  </p>
                  <Link 
                    href="#" 
                    className="text-purple-400 hover:text-purple-300 inline-flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 rounded-sm"
                    aria-label={`Learn more about ${course}`}
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12 rounded-2xl border border-gray-800">
            <h2 className="text-3xl font-bold mb-4 text-white">Launch Your Finance Career Today!</h2>
            <p className="text-gray-300 mb-8">
              Gain the financial expertise and analytical skills that are in high demand across industries.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white border-0 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
              onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
              aria-label="Enroll now"
            >
              Enroll Now
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
          href: "/faq#finance-analytics",
          text: "View all Finance & Analytics FAQs",
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