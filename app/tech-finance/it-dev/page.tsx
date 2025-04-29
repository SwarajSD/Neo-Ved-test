"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles-background"
import { ChatPopup } from "@/components/chat-popup"
import { FAQSection } from "@/components/faq-section"
import { SectionHeader } from "@/components/section-header"

export default function ITDevelopmentPage() {
  // FAQ data for this section
  const faqs = [
    {
      id: "it-dev-1",
      question: "What IT and development courses do you offer?",
      answer:
        "We offer a wide range of courses including programming languages (Java, Python, C++, JavaScript), database management (SQL, MongoDB, Oracle), cloud computing (AWS, Azure, GCP), DevOps (Docker, Kubernetes, CI/CD), IT security (Cybersecurity, Ethical Hacking), and automation (RPA, AI, Machine Learning).",
    },
    {
      id: "it-dev-2",
      question: "Do I need prior experience to enroll in your courses?",
      answer:
        "Our courses cater to various skill levels. While some advanced courses may require prior knowledge, many of our programs are designed for beginners with no previous experience. Each course description clearly indicates the prerequisites, if any.",
    },
    {
      id: "it-dev-3",
      question: "How are the courses delivered?",
      answer:
        "We offer flexible learning options including instructor-led virtual classes, in-person training, and self-paced online courses. All options include hands-on labs, practical exercises, and real-world projects to ensure you gain practical experience.",
    },
    {
      id: "it-dev-4",
      question: "Do you provide job placement assistance?",
      answer:
        "Yes, we offer job placement assistance for eligible students. This includes resume building, interview preparation, networking opportunities, and connections with our industry partners who are looking to hire skilled professionals.",
    },
    {
      id: "it-dev-5",
      question: "Are there any discounts available for multiple courses?",
      answer:
        "Yes, we offer package deals and discounts for students who enroll in multiple courses or learning paths. We also have special rates for corporate training and group enrollments. Contact our admissions team for more details.",
    },
  ]

  const courseSections = [
    {
      title: "Programming Languages",
      id: "programming-languages",
      courses: ["Java", "Python", "C++", "JavaScript", "Ruby", "Go", "Swift"],
      description: (lang: string) => `Master ${lang} for software development, web applications, and more.`
    },
    {
      title: "Database Management",
      id: "database-management",
      courses: ["SQL", "MySQL", "PostgreSQL", "MongoDB", "Oracle Database", "Microsoft SQL Server"],
      description: (db: string) => `Learn to design, manage, and optimize ${db} databases for modern applications.`
    },
    {
      title: "Cloud Computing & DevOps",
      id: "cloud-devops",
      courses: [
        "AWS (Amazon Web Services)",
        "Microsoft Azure",
        "Google Cloud Platform (GCP)",
        "Docker & Kubernetes",
        "CI/CD Pipelines (Jenkins, GitHub Actions, GitLab CI)",
        "Terraform & Infrastructure as Code",
      ],
      description: (topic: string) => `Master ${topic} for scalable, efficient and secure IT infrastructure.`,
      bgClass: "bg-black/50 backdrop-blur-sm"
    },
    {
      title: "IT Security & Networking",
      id: "it-security",
      courses: [
        "Cybersecurity Fundamentals",
        "Ethical Hacking & Penetration Testing",
        "Network Security",
        "Firewall Management",
        "VPN & Remote Access Security",
      ],
      description: (topic: string) => `Learn to secure IT systems and networks with ${topic}.`
    },
    {
      title: "Automation & AI",
      id: "automation-ai",
      courses: [
        "Robotic Process Automation (RPA) – UiPath, Automation Anywhere, Blue Prism",
        "Machine Learning & AI Fundamentals",
        "Chatbots & AI Assistants",
        "Data Science & Big Data Analytics",
      ],
      description: (topic: string) => `Master ${topic} for automating processes and leveraging AI.`,
      bgClass: "bg-black/50 backdrop-blur-sm"
    },
    {
      title: "Software Development & Project Management Tools",
      id: "dev-tools",
      courses: [
        "Jira & Agile Methodologies",
        "Scrum & Kanban Frameworks",
        "Git & Version Control",
        "CI/CD Pipeline Tools",
      ],
      description: (tool: string) => `Master ${tool} for efficient software development and project management.`
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
              Master In-Demand IT & Development Skills
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              From programming to cloud computing, DevOps to automation - launch your IT career with us.
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
            <h2 className="text-3xl font-bold mb-4 text-white">Start your IT & Development journey today!</h2>
            <p className="text-gray-300 mb-8">
              Enroll in our courses and gain the skills needed to excel in today's competitive job market.
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
          href: "/faq#it-development",
          text: "View all IT & Development FAQs",
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