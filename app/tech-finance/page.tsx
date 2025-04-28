"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles-background"
import { ChatPopup } from "@/components/chat-popup"
import { FAQSection } from "@/components/faq-section"
// Import the SectionHeader component
import { SectionHeader } from "@/components/section-header"

export default function TechFinancePage() {
  // FAQ data for this section
  const faqs = [
    {
      question: "What tech and finance courses do you offer?",
      answer:
        "We offer a wide range of courses including programming languages (Python, Java, JavaScript), cloud computing (AWS, Azure, GCP), DevOps, cybersecurity, financial accounting, investment management, ERP systems (SAP, Oracle), and financial data analysis using tools like Power BI and Tableau.",
    },
    {
      question: "Do I need prior experience to enroll in your courses?",
      answer:
        "Our courses cater to various skill levels. While some advanced courses may require prior knowledge, many of our programs are designed for beginners with no previous experience. Each course description clearly indicates the prerequisites, if any.",
    },
    {
      question: "How are the courses delivered?",
      answer:
        "We offer flexible learning options including instructor-led virtual classes, in-person training, and self-paced online courses. All options include hands-on labs, practical exercises, and real-world projects to ensure you gain practical experience.",
    },
    {
      question: "Do you provide job placement assistance?",
      answer:
        "Yes, we offer job placement assistance for eligible students. This includes resume building, interview preparation, networking opportunities, and connections with our industry partners who are looking to hire skilled professionals.",
    },
    {
      question: "Are there any discounts available for multiple courses?",
      answer:
        "Yes, we offer package deals and discounts for students who enroll in multiple courses or learning paths. We also have special rates for corporate training and group enrollments. Contact our admissions team for more details.",
    },
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <ParticlesBackground />
      <ChatPopup />

      {/* Header */}
      <header className="relative z-10 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-04%2022.06.43%20-%20A%20futuristic%2C%20minimalist%20logo%20for%20%27The%20Neo%20Veda%20Academy%27.%20The%20design%20features%20sleek%2C%20modern%20typography%20with%20a%20glowing%20ambient%20blur%20effect.%20The%20color%20p.jpg-kenHNOUl8eEp4SHAKN09pB0VusPukp.jpeg"
                alt="The Neo Veda Academy Logo"
                width={50}
                height={50}
                className="mr-3"
              />
              <div>
                <h1 className="text-xl font-bold tracking-wider">THE NEO VEDA ACADEMY</h1>
                <p className="text-sm text-purple-400 italic">Where passion meets excellence</p>
              </div>
            </Link>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                className="text-white hover:text-purple-400"
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

      {/* Hero Section */}
      <section className="relative z-10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Master In-Demand Tech & Finance Skills
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              From coding to cloud computing, financial analysis to ERP systems - launch your tech-finance career
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white border-0"
            >
              Browse All Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="relative z-10 py-24 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <SectionHeader title="IT & Development" colorClass="purple" id="it-development" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Programming Languages */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                Programming Languages
              </h4>
              <p className="text-gray-400 mb-4">
                Master the most in-demand programming languages for web, mobile, and software development.
              </p>
              <ul className="text-gray-400 space-y-1 mb-4 list-disc pl-5">
                <li>Python for Data Science & AI</li>
                <li>Java Development</li>
                <li>JavaScript & Modern Frameworks</li>
                <li>Full-Stack Web Development</li>
              </ul>
              <Link href="#" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Cloud Computing */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                Cloud Computing
              </h4>
              <p className="text-gray-400 mb-4">
                Develop expertise in cloud platforms and technologies for modern IT infrastructure.
              </p>
              <ul className="text-gray-400 space-y-1 mb-4 list-disc pl-5">
                <li>AWS Certified Solutions Architect</li>
                <li>Microsoft Azure Administrator</li>
                <li>Google Cloud Platform Engineer</li>
                <li>Cloud Security Specialist</li>
              </ul>
              <Link href="#" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* DevOps & CI/CD */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                DevOps & CI/CD Pipelines
              </h4>
              <p className="text-gray-400 mb-4">
                Learn modern DevOps practices and tools for continuous integration and deployment.
              </p>
              <ul className="text-gray-400 space-y-1 mb-4 list-disc pl-5">
                <li>Docker & Kubernetes</li>
                <li>Jenkins & GitLab CI</li>
                <li>Infrastructure as Code</li>
                <li>Site Reliability Engineering</li>
              </ul>
              <Link href="#" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Finance & Analytics Section */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto px-4">
          <SectionHeader title="Finance & Analytics" colorClass="purple" id="finance-analytics" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Financial Accounting */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                Financial Accounting Certifications
              </h4>
              <p className="text-gray-400 mb-4">
                Master financial accounting principles and practices for professional certification.
              </p>
              <ul className="text-gray-400 space-y-1 mb-4 list-disc pl-5">
                <li>Certified Public Accountant (CPA)</li>
                <li>Chartered Financial Analyst (CFA)</li>
                <li>Certified Management Accountant (CMA)</li>
                <li>Financial Modeling & Valuation</li>
              </ul>
              <Link href="#" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* ERP Systems */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                ERP Systems Training
              </h4>
              <p className="text-gray-400 mb-4">
                Develop expertise in enterprise resource planning systems for business operations.
              </p>
              <ul className="text-gray-400 space-y-1 mb-4 list-disc pl-5">
                <li>SAP FICO Certification</li>
                <li>Oracle EBS Financial Applications</li>
                <li>Microsoft Dynamics 365 Finance</li>
                <li>ERP Implementation Specialist</li>
              </ul>
              <Link href="#" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Financial Data Analysis */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                Financial Data Analysis
              </h4>
              <p className="text-gray-400 mb-4">Learn to analyze financial data using modern tools and techniques.</p>
              <ul className="text-gray-400 space-y-1 mb-4 list-disc pl-5">
                <li>Power BI for Financial Reporting</li>
                <li>Tableau for Financial Analytics</li>
                <li>Financial Data Modeling with Python</li>
                <li>Advanced Excel for Finance Professionals</li>
              </ul>
              <Link href="#" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Features */}
      <section className="relative z-10 py-24 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <SectionHeader title="Learning Features" colorClass="purple" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-bold mb-3 text-white">Hands-on Labs & Projects</h4>
              <p className="text-gray-400">
                Apply your knowledge with practical exercises and real-world projects that build your portfolio.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-bold mb-3 text-white">Industry-Aligned Curriculum</h4>
              <p className="text-gray-400">
                Learn skills that are in high demand with curriculum designed in collaboration with industry experts.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-bold mb-3 text-white">Certification Preparation</h4>
              <p className="text-gray-400">
                Get comprehensive preparation for industry certifications with practice exams and study materials.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h4 className="text-lg font-bold mb-3 text-white">Job Placement Assistance</h4>
              <p className="text-gray-400">
                Receive career guidance, resume building, and connections with our industry partners for job
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12 rounded-2xl border border-gray-800">
            <h2 className="text-3xl font-bold mb-4 text-white">Start your tech-finance journey today!</h2>
            <p className="text-gray-300 mb-8">
              Enroll in our courses and gain the skills needed to excel in today's competitive job market.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white border-0"
              onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
            >
              Enroll Now
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection title="Frequently Asked Questions" faqs={faqs} colorClass="purple" linkHref="/faq#tech-finance" />

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <Link href="/" className="inline-flex items-center mb-4">
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
            <a href="/" className="hover:text-purple-400">
              theneovedaacademy.com
            </a>{" "}
            | theneovedaacademy@gmail.com
          </p>
          <p className="text-gray-400 mb-4">(+91) 8147884482 | (+1) 689 240 9966</p>
          <p className="text-gray-400 mb-4">
            <span className="text-sm text-purple-400 italic">Where passion meets excellence</span>
          </p>
          <p className="text-gray-500">&copy; {new Date().getFullYear()} The Neo Veda Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
