"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles-background"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChatPopup } from "@/components/chat-popup"

export default function ITTrainingPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <ParticlesBackground />
      <ChatPopup />

      {/* Header */}
      <header className="relative z-10 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="https://v0-saa-s-landing-page-design-roan.vercel.app/" className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-04%2022.06.43%20-%20A%20futuristic%2C%20minimalist%20logo%20for%20%27The%20Neo%20Veda%20Academy%27.%20The%20design%20features%20sleek%2C%20modern%20typography%20with%20a%20glowing%20ambient%20blur%20effect.%20The%20color%20p.jpg-kenHNOUl8eEp4SHAKN09pB0VusPukp.jpeg"
                alt="The Neo Veda Academy Logo"
                width={50}
                height={50}
                className="mr-3"
              />
              <div>
                <h1 className="text-xl font-bold tracking-wider">THE NEO VEDA ACADEMY</h1>
                <p className="text-sm text-blue-400 italic">Where passion meets excellence</p>
              </div>
            </Link>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                className="text-white hover:text-blue-400"
                onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
              >
                Contact Us
              </Button>
              <Link href="/">
                <Button variant="ghost" className="text-white hover:text-blue-400">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
              IT Training Programs
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive IT training programs designed to enhance your technical skills and advance your career. From
              ITIL® to DevOps, we offer a wide range of courses to meet your professional development needs.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="relative z-10 py-8">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8 text-center text-blue-400">Featured Training Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* ITIL */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition-all group">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">ITIL®</h3>
              <p className="text-gray-400 mb-4">
                Information Technology Infrastructure Library framework for IT service management.
              </p>
              <ul className="text-gray-400 space-y-1 mb-4">
                <li>ITIL® 4 Foundation</li>
                <li>ITIL® 4 Create, Deliver & Support</li>
                <li>ITIL® 4 High Velocity IT</li>
                <li>ITIL® 4 Digital & IT Strategy</li>
                <li>ITIL® 4 Specialist courses</li>
              </ul>
            </div>

            {/* SAFe */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition-all group">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">SAFe®</h3>
              <p className="text-gray-400 mb-4">Scaled Agile Framework for enterprise-scale agile development.</p>
              <ul className="text-gray-400 space-y-1 mb-4">
                <li>Leading SAFe®</li>
                <li>SAFe® for Teams</li>
                <li>SAFe® Lean Portfolio Management</li>
                <li>SAFe® Scrum Master</li>
                <li>SAFe® Product Owner / Product Manager</li>
              </ul>
            </div>

            {/* DevOps */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition-all group">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">DevOps</h3>
              <p className="text-gray-400 mb-4">Practices that combine software development and IT operations.</p>
              <ul className="text-gray-400 space-y-1 mb-4">
                <li>DevOps Bootcamp</li>
                <li>DevOps Simulation – The Phoenix Project</li>
                <li>DASA DevOps Fundamentals</li>
                <li>DASA DevOps Professional</li>
                <li>DevOps & IT Service Management</li>
              </ul>
            </div>

            {/* Lean Six Sigma */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition-all group">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                Lean Six Sigma
              </h3>
              <p className="text-gray-400 mb-4">
                Methodology that relies on collaborative team effort to improve performance.
              </p>
              <ul className="text-gray-400 space-y-1 mb-4">
                <li>Lean Six Sigma Yellow Belt</li>
                <li>Lean Six Sigma Green Belt</li>
                <li>Lean Six Sigma Black Belt</li>
                <li>Lean Six Sigma Champion</li>
                <li>Lean Six Sigma Awareness</li>
              </ul>
            </div>

            {/* Agile & Scrum */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition-all group">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                Agile & Scrum
              </h3>
              <p className="text-gray-400 mb-4">Frameworks for project management that emphasize iterative progress.</p>
              <ul className="text-gray-400 space-y-1 mb-4">
                <li>Certified Scrum Developer®</li>
                <li>Scrum Product Owner</li>
                <li>Scrum Master</li>
                <li>Agile Scrum Foundation</li>
                <li>PMI Agile Certified Practitioner</li>
              </ul>
            </div>

            {/* Project Management */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition-all group">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                Project Management
              </h3>
              <p className="text-gray-400 mb-4">
                Methodologies and frameworks for effective project planning and execution.
              </p>
              <ul className="text-gray-400 space-y-1 mb-4">
                <li>PMP® Project Management Professional</li>
                <li>PRINCE2® Foundation & Practitioner</li>
                <li>AgilePM® Foundation & Practitioner</li>
                <li>Change Management</li>
                <li>PRINCE2 Agile®</li>
              </ul>
            </div>

            {/* Lean IT */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition-all group">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">Lean IT</h3>
              <p className="text-gray-400 mb-4">
                Applying lean manufacturing principles to IT operations and software development.
              </p>
              <ul className="text-gray-400 space-y-1 mb-4">
                <li>Lean IT Foundation</li>
                <li>Lean IT Kaizen Lead</li>
                <li>Lean IT Leadership</li>
                <li>Lean IT Simulation Game</li>
                <li>Lean IT Implementation</li>
              </ul>
            </div>

            {/* ISO/IEC 20000 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition-all group">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                ISO/IEC 20000
              </h3>
              <p className="text-gray-400 mb-4">
                International standard for IT service management system requirements.
              </p>
              <ul className="text-gray-400 space-y-1 mb-4">
                <li>ISO/IEC 20000 Foundation</li>
                <li>ISO/IEC 20000 Auditor</li>
                <li>ISO/IEC 20000 Practitioner</li>
                <li>ISO/IEC 20000 Implementation</li>
                <li>ISO/IEC 20000 Consultant</li>
              </ul>
            </div>

            {/* COBIT */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition-all group">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">COBIT®</h3>
              <p className="text-gray-400 mb-4">
                Framework for governance and management of enterprise information and technology.
              </p>
              <ul className="text-gray-400 space-y-1 mb-4">
                <li>COBIT® 2019 Foundation Bridge</li>
                <li>COBIT® 2019 Foundation</li>
                <li>COBIT® 5 Foundation</li>
                <li>COBIT® 5 Assessor</li>
                <li>COBIT® 5 Implementation</li>
              </ul>
            </div>

            {/* Cloud Computing */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition-all group">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                Cloud Computing
              </h3>
              <p className="text-gray-400 mb-4">
                Training on cloud technologies, platforms, and implementation strategies.
              </p>
              <ul className="text-gray-400 space-y-1 mb-4">
                <li>Cloud Computing Fundamentals</li>
                <li>AWS Developer</li>
                <li>AWS Admin</li>
                <li>Google Cloud Platform</li>
                <li>Azure Cloud</li>
              </ul>
            </div>

            {/* Digital Transformation */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition-all group">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                Digital Transformation
              </h3>
              <p className="text-gray-400 mb-4">Training on digital transformation strategies and implementation.</p>
              <ul className="text-gray-400 space-y-1 mb-4">
                <li>Digital Transformation Journey – Implementation Workshop</li>
                <li>Digital Transformation Fundamentals</li>
                <li>Digital Strategy Development</li>
                <li>Digital Leadership</li>
                <li>Digital Innovation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="relative z-10 py-16 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8 text-center text-blue-400">Additional Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* IT Security Training */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-white">IT Security Training</h3>
              <p className="text-gray-400 mb-4">
                Comprehensive security training programs to help organizations protect their digital assets and respond
                to threats effectively.
              </p>
              <ul className="list-disc pl-5 text-gray-400 space-y-2">
                <li>Certified Information Systems Security Professional (CISSP)</li>
                <li>Certified Ethical Hacker (CEH)</li>
                <li>CompTIA Security+</li>
                <li>Cybersecurity Awareness Training</li>
                <li>Security Incident Response</li>
              </ul>
            </div>

            {/* IT Infrastructure Training */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-white">IT Infrastructure Training</h3>
              <p className="text-gray-400 mb-4">
                Training programs focused on designing, implementing, and managing robust IT infrastructure systems.
              </p>
              <ul className="list-disc pl-5 text-gray-400 space-y-2">
                <li>Network Administration</li>
                <li>System Administration</li>
                <li>Virtualization Technologies</li>
                <li>Storage Solutions</li>
                <li>Disaster Recovery Planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12 rounded-2xl border border-gray-800">
            <h2 className="text-3xl font-bold mb-4 text-white">Advance Your IT Career</h2>
            <p className="text-gray-300 mb-8">
              Enroll in our IT training programs and gain the skills needed to excel in today's technology-driven world.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white border-0"
              onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
            >
              Know More
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-16 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8 text-center text-blue-400">Frequently Asked Questions</h3>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-1" className="border-b border-gray-800">
              <AccordionTrigger className="text-white hover:text-blue-400 py-4">
                What IT training programs do you offer?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                We offer a comprehensive range of IT training programs including ITIL®, SAFe®, DevOps, Lean Six Sigma,
                Agile & Scrum, Project Management, and many more. Our programs are designed to enhance technical skills
                and advance careers in the IT industry.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2" className="border-b border-gray-800">
              <AccordionTrigger className="text-white hover:text-blue-400 py-4">
                Are your IT training programs certified?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Yes, many of our IT training programs prepare you for industry-recognized certifications such as ITIL®,
                SAFe®, PMP®, PRINCE2®, and more. These certifications are highly valued in the IT industry and can
                significantly enhance your career prospects.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3" className="border-b border-gray-800">
              <AccordionTrigger className="text-white hover:text-blue-400 py-4">
                What is ITIL® and why is it important?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                ITIL® (Information Technology Infrastructure Library) is a framework for IT service management that
                focuses on aligning IT services with business needs. It's important because it provides a structured
                approach to IT service management, helps improve service quality, reduces costs, and enhances customer
                satisfaction.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4" className="border-b border-gray-800">
              <AccordionTrigger className="text-white hover:text-blue-400 py-4">
                How can DevOps training benefit my organization?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                DevOps training can benefit your organization by improving collaboration between development and
                operations teams, accelerating software delivery, enhancing product quality, increasing operational
                efficiency, and fostering a culture of continuous improvement and innovation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5" className="border-b border-gray-800">
              <AccordionTrigger className="text-white hover:text-blue-400 py-4">
                Do you offer corporate IT training programs?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Yes, we offer corporate IT training programs tailored to the specific needs of your organization. These
                programs can be delivered on-site or virtually and can be customized to address your unique challenges,
                technologies, and business objectives.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-center mt-8">
            <Link href="/faq#it-training">
              <Button variant="outline" className="text-blue-400 border-blue-400 hover:bg-blue-950">
                View All FAQs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <Link href="https://v0-saa-s-landing-page-design-roan.vercel.app/" className="inline-flex items-center mb-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-04%2022.06.43%20-%20A%20futuristic%2C%20minimalist%20logo%20for%20%27The%20Neo%20Veda%20Academy%27.%20The%20design%E%202025-03-04%2022.06.43%20-%20A%20futuristic%2C%20minimalist%20logo%20for%20%27The%20Neo%20Veda%20Academy%27.%20The%20design%20features%20sleek%2C%20modern%20typography%20with%20a%20glowing%20ambient%20blur%20effect.%20The%20color%20p.jpg-kenHNOUl8eEp4SHAKN09pB0VusPukp.jpeg"
              alt="The Neo Veda Academy Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-lg font-bold">THE NEO VEDA ACADEMY</span>
          </Link>
          <p className="text-gray-400 mb-4">
            <a href="https://v0-saa-s-landing-page-design-roan.vercel.app/" className="hover:text-blue-400">
              theneovedaacademy.com
            </a>{" "}
            | theneovedaacademy@gmail.com
          </p>
          <p className="text-gray-400 mb-4">(+91) 8147884482 | (+1) 689 240 9966</p>
          <p className="text-gray-400 mb-4">
            <span className="text-sm text-blue-400 italic">Where passion meets excellence</span>
          </p>
          <p className="text-gray-500">&copy; {new Date().getFullYear()} The Neo Veda Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
