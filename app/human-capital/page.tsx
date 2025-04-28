"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles-background"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HumanCapitalPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <ParticlesBackground />

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
                <p className="text-sm text-pink-400 italic">Where passion meets excellence</p>
              </div>
            </Link>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                className="text-white hover:text-pink-400"
                onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
              >
                Contact Us
              </Button>
              <Link href="/">
                <Button variant="ghost" className="text-white hover:text-pink-400">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-500">
              Human Capital Services
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive talent transformation services designed to assess, develop, and empower your workforce. Our
              human capital solutions help organizations build high-performing teams and effective leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-24 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center text-pink-400">Talent Transformation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Talent Assessment */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-pink-500 transition-all group">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center">
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
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-pink-400 transition-colors">
                Talent Assessment
              </h3>
              <p className="text-gray-400 mb-4">
                Utilizing tools like behavioral and EQ assessments to understand and develop the workforce. Our
                comprehensive assessment approach helps identify strengths and growth areas.
              </p>
            </div>

            {/* Talent Development */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-pink-500 transition-all group">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center">
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
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-pink-400 transition-colors">
                Talent Development
              </h3>
              <p className="text-gray-400 mb-4">
                Focusing on nurturing professionals into confident, value-adding visionaries. Our development programs
                are designed to build capabilities and accelerate career growth.
              </p>
            </div>

            {/* Behavioral Assessments */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-pink-500 transition-all group">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center">
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
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-pink-400 transition-colors">
                Behavioral Assessments
              </h3>
              <p className="text-gray-400 mb-4">
                In partnership with The Omnia Group, offering sophisticated yet straightforward behavioral assessments
                that provide insights into work styles and preferences.
              </p>
            </div>

            {/* EQ Assessments */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-pink-500 transition-all group">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center">
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-pink-400 transition-colors">
                EQ Assessments
              </h3>
              <p className="text-gray-400 mb-4">
                Through TalentSmart EQ, providing accessible approaches to emotional intelligence development. Our EQ
                assessments help individuals understand and improve their emotional intelligence.
              </p>
            </div>

            {/* Leadership Development */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-pink-500 transition-all group">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-pink-400 transition-colors">
                Leadership Development
              </h3>
              <p className="text-gray-400 mb-4">
                Collaborating with The Pontefract Group to enhance leadership and organizational culture. Our leadership
                programs develop effective leaders who can drive organizational success.
              </p>
            </div>

            {/* ROI Evaluation */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-pink-500 transition-all group">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center">
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
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-pink-400 transition-colors">
                ROI Evaluation
              </h3>
              <p className="text-gray-400 mb-4">
                Partnering with ROI Institute, Inc. to evaluate the success of projects and programs, including
                measuring financial return on investment (ROI) for training and development initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8 text-center text-pink-400">Additional Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sales Development */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-white">Sales Development</h3>
              <p className="text-gray-400 mb-4">
                Offering tools to empower HR and business leaders to grow, develop, and inspire their sales teams. Our
                sales development programs focus on building high-performing sales organizations through effective
                training and coaching.
              </p>
              <ul className="list-disc pl-5 text-gray-400 space-y-2">
                <li>Sales leadership development</li>
                <li>Sales process optimization</li>
                <li>Customer relationship management</li>
                <li>Consultative selling techniques</li>
                <li>Sales performance metrics and analytics</li>
              </ul>
            </div>

            {/* Communication Training */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-white">Communication Training</h3>
              <p className="text-gray-400 mb-4">
                In collaboration with Fierce, providing programs that transform the way people communicate within
                organizations. Our communication training helps build a culture of transparency, trust, and effective
                collaboration.
              </p>
              <ul className="list-disc pl-5 text-gray-400 space-y-2">
                <li>Effective feedback conversations</li>
                <li>Conflict resolution strategies</li>
                <li>Team communication frameworks</li>
                <li>Leadership communication skills</li>
                <li>Cross-cultural communication</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12 rounded-2xl border border-gray-800">
            <h2 className="text-3xl font-bold mb-4 text-white">Transform Your Organization's Human Capital</h2>
            <p className="text-gray-300 mb-8">
              Schedule a consultation with our experts to discuss your talent development needs.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700 text-white border-0"
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
          <h3 className="text-2xl font-bold mb-8 text-center text-pink-400">Frequently Asked Questions</h3>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-1" className="border-b border-gray-800">
              <AccordionTrigger className="text-white hover:text-pink-400 py-4">
                What human capital services do you provide?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Our human capital services include Talent Assessment, Talent Development, Behavioral Assessments, EQ
                Assessments, Leadership Development, and ROI Evaluation. We also offer specialized services like Sales
                Development and Communication Training to help organizations build high-performing teams.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2" className="border-b border-gray-800">
              <AccordionTrigger className="text-white hover:text-pink-400 py-4">
                How do your talent assessments work?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Our talent assessments utilize a variety of tools and methodologies to evaluate skills, competencies,
                behavioral traits, and emotional intelligence. We use these insights to identify strengths, growth
                areas, and development opportunities for individuals and teams within your organization.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3" className="border-b border-gray-800">
              <AccordionTrigger className="text-white hover:text-pink-400 py-4">
                What is included in your leadership development programs?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Our leadership development programs include assessments, workshops, coaching, and practical application
                opportunities. We focus on developing essential leadership competencies such as strategic thinking,
                emotional intelligence, communication, team building, change management, and decision-making.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4" className="border-b border-gray-800">
              <AccordionTrigger className="text-white hover:text-pink-400 py-4">
                How can EQ assessments benefit my organization?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                EQ (Emotional Intelligence) assessments help individuals understand and improve their emotional
                intelligence, which is crucial for effective leadership, teamwork, and interpersonal relationships.
                Higher EQ in your organization can lead to better communication, conflict resolution, stress management,
                and overall workplace harmony.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5" className="border-b border-gray-800">
              <AccordionTrigger className="text-white hover:text-pink-400 py-4">
                What is ROI Evaluation and why is it important?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                ROI (Return on Investment) Evaluation measures the financial and non-financial returns of your training
                and development initiatives. It's important because it helps you quantify the impact of your investments
                in human capital, justify budgets, identify the most effective programs, and make data-driven decisions
                about future investments.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-center mt-8">
            <Link href="/faq#human-capital">
              <Button variant="outline" className="text-pink-400 border-pink-400 hover:bg-pink-950">
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
          <p className="text-gray-400 mb-4">theneovedaacademy.com | theneovedaacademy@gmail.com</p>
          <p className="text-gray-400 mb-4">(+91) 8147884482 | (+1) 689 240 9966</p>
          <p className="text-gray-500">&copy; {new Date().getFullYear()} The Neo Veda Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
