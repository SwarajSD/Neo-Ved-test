"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles-background"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChatPopup } from "@/components/chat-popup"

export default function ConsultingPage() {
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
                <p className="text-sm text-cyan-400 italic">Where passion meets excellence</p>
              </div>
            </Link>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                className="text-white hover:text-cyan-400"
                onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
              >
                Contact Us
              </Button>
              <Link href="/">
                <Button variant="ghost" className="text-white hover:text-cyan-400">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Consulting Services
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Strategic consulting services to help organizations navigate digital transformation, optimize processes,
              and achieve sustainable growth in today's rapidly evolving business landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-8">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8 text-center text-cyan-400">Our Consulting Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Digital Strategy */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
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
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                Digital Strategy
              </h3>
              <p className="text-gray-400 mb-4">
                Develop a comprehensive digital strategy aligned with your business goals to drive innovation and
                growth.
              </p>
              <ul className="text-gray-400 space-y-1 mb-4">
                <li>Digital Transformation Roadmap</li>
                <li>Technology Stack Assessment</li>
                <li>Digital Maturity Assessment</li>
                <li>Innovation Strategy</li>
                <li>Digital Customer Experience</li>
              </ul>
            </div>

            {/* Lean-Agile Enterprise */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
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
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                Lean-Agile Enterprise
              </h3>
              <p className="text-gray-400 mb-4">
                Transform your organization with lean-agile principles to increase efficiency, adaptability, and
                customer value.
              </p>
              <ul className="text-gray-400 space-y-1 mb-4">
                <li>Agile Transformation</li>
                <li>Lean Process Optimization</li>
                <li>Scaled Agile Framework (SAFe®) Implementation</li>
                <li>Agile Leadership Coaching</li>
                <li>Value Stream Mapping</li>
              </ul>
            </div>

            {/* Enterprise Cloud */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
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
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                Enterprise Cloud
              </h3>
              <p className="text-gray-400 mb-4">
                Leverage cloud technologies to enhance scalability, security, and cost-efficiency of your IT
                infrastructure.
              </p>
              <ul className="text-gray-400 space-y-1 mb-4">
                <li>Cloud Migration Strategy</li>
                <li>Multi-Cloud Architecture</li>
                <li>Cloud Security & Compliance</li>
                <li>Cloud Cost Optimization</li>
                <li>DevOps Implementation</li>
              </ul>
            </div>

            {/* IT Service Management */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
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
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                IT Service Management
              </h3>
              <p className="text-gray-400 mb-4">
                Optimize your IT service delivery with best practices and frameworks to improve efficiency and user
                satisfaction.
              </p>
              <ul className="text-gray-400 space-y-1 mb-4">
                <li>ITIL® Implementation</li>
                <li>Service Desk Optimization</li>
                <li>IT Process Improvement</li>
                <li>IT Governance</li>
                <li>IT Service Catalog Design</li>
              </ul>
            </div>

            {/* Data & Analytics */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
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
                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                Data & Analytics
              </h3>
              <p className="text-gray-400 mb-4">
                Harness the power of your data with advanced analytics solutions to drive informed decision-making.
              </p>
              <ul className="text-gray-400 space-y-1 mb-4">
                <li>Data Strategy Development</li>
                <li>Business Intelligence Implementation</li>
                <li>Data Governance</li>
                <li>Predictive Analytics</li>
                <li>Data Visualization</li>
              </ul>
            </div>

            {/* Digital Workplace */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
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
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                Digital Workplace
              </h3>
              <p className="text-gray-400 mb-4">
                Create a modern, collaborative digital workplace that enhances productivity and employee experience.
              </p>
              <ul className="text-gray-400 space-y-1 mb-4">
                <li>Remote Work Strategy</li>
                <li>Collaboration Tools Implementation</li>
                <li>Employee Experience Design</li>
                <li>Digital Workplace Assessment</li>
                <li>Knowledge Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="relative z-10 py-16 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8 text-center text-cyan-400">Additional Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* IT Security Consulting */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-white">IT Security Consulting</h3>
              <p className="text-gray-400 mb-4">
                Comprehensive security consulting to protect your organization's digital assets and respond to evolving
                threats.
              </p>
              <ul className="list-disc pl-5 text-gray-400 space-y-2">
                <li>Security Assessment & Audit</li>
                <li>Cybersecurity Strategy</li>
                <li>Security Architecture Design</li>
                <li>Incident Response Planning</li>
                <li>Compliance & Risk Management</li>
              </ul>
            </div>

            {/* Business Process Optimization */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-white">Business Process Optimization</h3>
              <p className="text-gray-400 mb-4">
                Streamline your business processes to improve efficiency, reduce costs, and enhance customer
                satisfaction.
              </p>
              <ul className="list-disc pl-5 text-gray-400 space-y-2">
                <li>Process Mapping & Analysis</li>
                <li>Workflow Automation</li>
                <li>Business Process Reengineering</li>
                <li>Continuous Improvement Programs</li>
                <li>Change Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12 rounded-2xl border border-gray-800">
            <h2 className="text-3xl font-bold mb-4 text-white">Transform Your Business</h2>
            <p className="text-gray-300 mb-8">
              Partner with our expert consultants to navigate digital transformation and achieve your business goals.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
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
          <h3 className="text-2xl font-bold mb-8 text-center text-cyan-400">Frequently Asked Questions</h3>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-1" className="border-b border-gray-800">
              <AccordionTrigger className="text-white hover:text-cyan-400 py-4">
                What consulting services do you offer?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                We offer a comprehensive range of consulting services including Digital Strategy, Lean-Agile Enterprise,
                Enterprise Cloud, IT Service Management, Data & Analytics, and Digital Workplace. Our services are
                designed to help organizations navigate digital transformation, optimize processes, and achieve
                sustainable growth.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2" className="border-b border-gray-800">
              <AccordionTrigger className="text-white hover:text-cyan-400 py-4">
                How can digital transformation benefit my organization?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Digital transformation can benefit your organization in multiple ways, including improved operational
                efficiency, enhanced customer experience, increased agility and innovation, new revenue streams, and
                better data-driven decision making. Our consultants can help you identify the specific benefits for your
                organization and develop a tailored transformation roadmap.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3" className="border-b border-gray-800">
              <AccordionTrigger className="text-white hover:text-cyan-400 py-4">
                What is Lean-Agile Enterprise consulting?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Lean-Agile Enterprise consulting helps organizations adopt lean and agile principles to increase
                efficiency, adaptability, and customer value. This includes implementing frameworks like SAFe®, coaching
                leadership teams, optimizing processes, and fostering a culture of continuous improvement. The goal is
                to create an organization that can respond quickly to market changes while delivering high-quality
                products and services.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4" className="border-b border-gray-800">
              <AccordionTrigger className="text-white hover:text-cyan-400 py-4">
                How do you approach cloud migration projects?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Our approach to cloud migration begins with a thorough assessment of your current infrastructure,
                applications, and business requirements. We then develop a tailored migration strategy, considering
                factors like security, compliance, cost, and performance. We implement the migration in phases, starting
                with less critical workloads, and provide ongoing support to ensure a smooth transition. Our goal is to
                minimize disruption while maximizing the benefits of cloud technology.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5" className="border-b border-gray-800">
              <AccordionTrigger className="text-white hover:text-cyan-400 py-4">
                Do you offer customized consulting solutions?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Yes, we offer customized consulting solutions tailored to the specific needs, challenges, and goals of
                your organization. We begin with a thorough assessment to understand your unique situation and then
                develop a personalized approach that aligns with your business objectives. Our consultants work closely
                with your team to ensure the solutions we provide are practical, effective, and sustainable.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-center mt-8">
            <Link href="/faq#consulting">
              <Button variant="outline" className="text-cyan-400 border-cyan-400 hover:bg-cyan-950">
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
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-04%2022.06.43%20-%20A%20futuristic%2C%20minimalist%20logo%20for%20%27The%20Neo%20Veda%20Academy%27.%20The%20design%20features%20sleek%2C%20modern%20typography%20with%20a%20glowing%20ambient%20blur%20effect.%20The%20color%20p.jpg-kenHNOUl8eEp4SHAKN09pB0VusPukp.jpeg"
              alt="The Neo Veda Academy Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-lg font-bold">THE NEO VEDA ACADEMY</span>
          </Link>
          <p className="text-gray-400 mb-4">
            <a href="https://v0-saa-s-landing-page-design-roan.vercel.app/" className="hover:text-cyan-400">
              theneovedaacademy.com
            </a>{" "}
            | theneovedaacademy@gmail.com
          </p>
          <p className="text-gray-400 mb-4">(+91) 8147884482 | (+1) 689 240 9966</p>
          <p className="text-gray-400 mb-4">
            <span className="text-sm text-cyan-400 italic">Where passion meets excellence</span>
          </p>
          <p className="text-gray-500">&copy; {new Date().getFullYear()} The Neo Veda Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
