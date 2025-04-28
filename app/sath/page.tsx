"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles-background"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function SathPage() {
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
                <p className="text-sm text-amber-400 italic">Where passion meets excellence</p>
              </div>
            </Link>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                className="text-white hover:text-amber-400"
                onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
              >
                Contact Us
              </Button>
              <Link href="/">
                <Button variant="ghost" className="text-white hover:text-amber-400">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-500">
              Sprint a Trainer – Corporate Team-Building Experiences
            </h2>
            <p className="text-xl text-gray-300 mb-8">Energizing, Engaging, and Designed to Unite Your Team!</p>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="relative z-10 py-8" id="energy-boost">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Energy Boost Challenge */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-amber-500 transition-all group">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center">
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
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-amber-400 transition-colors">
                The Energy Boost Challenge
              </h3>
              <p className="text-gray-400 mb-4">
                Recharge, Refocus, and Reignite Your Team's Drive! A dynamic session to shake off work fatigue, reset
                the mind, and energize your team.
              </p>
              <Button
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white border-0"
                onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
              >
                Book for Your Team
              </Button>
            </div>

            {/* Collaboration Quest */}
            <div
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-amber-500 transition-all group"
              id="collaboration"
            >
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center">
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
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-amber-400 transition-colors">
                The Great Collaboration Quest
              </h3>
              <p className="text-gray-400 mb-4">
                Break Silos, Build Bridges, and Win Together! A series of problem-solving tasks designed to enhance
                communication and teamwork.
              </p>
              <Button
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white border-0"
                onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
              >
                Book for Your Team
              </Button>
            </div>

            {/* Innovation Sprint */}
            <div
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-amber-500 transition-all group"
              id="innovation"
            >
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center">
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-amber-400 transition-colors">
                The Rapid Innovation Sprint
              </h3>
              <p className="text-gray-400 mb-4">
                Think Fast, Adapt Faster, and Innovate on the Go! A creativity-boosting workshop to enhance
                brainstorming and quick thinking.
              </p>
              <Button
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white border-0"
                onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
              >
                Book for Your Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Programs */}
      <section className="relative z-10 py-16 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8 text-center text-amber-400">Our Team-Building Experiences</h3>

          <div className="space-y-8">
            {/* Energy Boost Challenge */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-amber-400">1. The Energy Boost Challenge</h3>
              <p className="text-gray-300 mb-4">Recharge, Refocus, and Reignite Your Team's Drive!</p>
              <p className="text-gray-400 mb-4">
                A dynamic session to shake off work fatigue, reset the mind, and energize your team.
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span className="text-gray-300">Engaging icebreakers to spark creativity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span className="text-gray-300">Mind-refreshing activities to enhance focus</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span className="text-gray-300">Quick, light movement to boost energy (no sweat required!)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span className="text-gray-300">Guided breathing exercises for a mental reset</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span className="text-gray-300">
                    End with a fun, interactive challenge to set the tone for success
                  </span>
                </li>
              </ul>

              <Button
                className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white border-0"
                onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
              >
                Book for Your Team
              </Button>
            </div>

            {/* Collaboration Quest */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-amber-400">2. The Great Collaboration Quest</h3>
              <p className="text-gray-300 mb-4">Break Silos, Build Bridges, and Win Together!</p>
              <p className="text-gray-400 mb-4">
                A series of problem-solving tasks designed to enhance communication and teamwork.
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span className="text-gray-300">Team-based challenges to encourage collaboration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span className="text-gray-300">Fun role-playing exercises to improve problem-solving</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span className="text-gray-300">Interactive activities to strengthen team synergy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span className="text-gray-300">Real-world scenarios to enhance workplace communication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span className="text-gray-300">Friendly competition with prizes to celebrate teamwork</span>
                </li>
              </ul>

              <Button
                className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white border-0"
                onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
              >
                Book for Your Team
              </Button>
            </div>

            {/* Innovation Sprint */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-amber-400">3. The Rapid Innovation Sprint</h3>
              <p className="text-gray-300 mb-4">Think Fast, Adapt Faster, and Innovate on the Go!</p>
              <p className="text-gray-400 mb-4">
                A creativity-boosting workshop to enhance brainstorming and quick thinking.
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span className="text-gray-300">Speed challenges to encourage out-of-the-box thinking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span className="text-gray-300">Group idea-building exercises for real-time innovation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span className="text-gray-300">Time-sensitive problem-solving scenarios</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span className="text-gray-300">Fast-paced team discussions to build decision-making confidence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span className="text-gray-300">Wrap-up session with actionable takeaways for the workplace</span>
                </li>
              </ul>

              <Button
                className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white border-0"
                onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
              >
                Book for Your Team
              </Button>
            </div>

            {/* Office Olympics */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-amber-400">4. The Office Olympics</h3>
              <p className="text-gray-300 mb-4">Light Competition, Big Laughs, and Team Spirit!</p>
              <p className="text-gray-400 mb-4">
                A mix of hilarious office-themed challenges to bring out friendly competition.
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span className="text-gray-300">Desk chair relay races and mini obstacle courses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span className="text-gray-300">Trivia rounds with fun workplace facts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span className="text-gray-300">Team-based charades or Pictionary challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span className="text-gray-300">Quick-fire problem-solving puzzles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span className="text-gray-300">Celebration and awards for standout performances</span>
                </li>
              </ul>

              <Button
                className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white border-0"
                onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
              >
                Book for Your Team
              </Button>
            </div>

            {/* Resilience Reset */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-amber-400">5. The Resilience Reset Workshop</h3>
              <p className="text-gray-300 mb-4">Stay Cool, Stay Strong, and Conquer Workplace Stress!</p>
              <p className="text-gray-400 mb-4">
                A balance of mental resilience techniques and light movement to refresh the mind.
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span className="text-gray-300">Guided relaxation techniques to reduce stress</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span className="text-gray-300">Interactive team discussions on overcoming challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span className="text-gray-300">Quick, light movement session for a mid-day boost</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span className="text-gray-300">Strategies for building long-term resilience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  <span className="text-gray-300">Personalized action plans to apply at work</span>
                </li>
              </ul>

              <Button
                className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white border-0"
                onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
              >
                Book for Your Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12 rounded-2xl border border-gray-800">
            <h2 className="text-3xl font-bold mb-4 text-white">Transform Your Team Today</h2>
            <p className="text-gray-300 mb-8">
              Book a team-building experience with our expert trainers and watch your team's collaboration and
              productivity soar.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white border-0"
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
          <h3 className="text-2xl font-bold mb-8 text-center text-amber-400">Frequently Asked Questions</h3>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-1" className="border-b border-gray-800">
              <AccordionTrigger className="text-white hover:text-amber-400 py-4">What is SATH?</AccordionTrigger>
              <AccordionContent className="text-gray-400">
                SATH stands for "Sprint a Trainer – Corporate Team-Building Experiences." It's our specialized program
                designed to energize, engage, and unite teams through various interactive and fun activities that
                enhance collaboration, communication, and team spirit.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2" className="border-b border-gray-800">
              <AccordionTrigger className="text-white hover:text-amber-400 py-4">
                What team-building experiences do you offer?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                We offer five main team-building experiences: The Energy Boost Challenge, The Great Collaboration Quest,
                The Rapid Innovation Sprint, The Office Olympics, and The Resilience Reset Workshop. Each experience is
                designed to address different aspects of team dynamics and workplace challenges.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3" className="border-b border-gray-800">
              <AccordionTrigger className="text-white hover:text-amber-400 py-4">
                How long do the team-building sessions last?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Our team-building sessions typically last between 2-4 hours, depending on the specific experience and
                your team's needs. We can also customize the duration to fit your schedule and objectives.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4" className="border-b border-gray-800">
              <AccordionTrigger className="text-white hover:text-amber-400 py-4">
                Can you accommodate large teams for SATH experiences?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Yes, our SATH experiences are scalable and can accommodate teams of various sizes, from small
                departments to entire organizations. For larger groups, we can organize multiple concurrent sessions or
                design activities specifically for large-scale participation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5" className="border-b border-gray-800">
              <AccordionTrigger className="text-white hover:text-amber-400 py-4">
                How do I book a SATH experience for my team?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                You can book a SATH experience by clicking on the "Book for Your Team" button on our SATH page or by
                contacting us directly via email or phone. We'll discuss your team's needs, recommend the most suitable
                experience, and schedule a session at your convenience.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-center mt-8">
            <Link href="/faq#sath">
              <Button variant="outline" className="text-amber-400 border-amber-400 hover:bg-amber-950">
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
