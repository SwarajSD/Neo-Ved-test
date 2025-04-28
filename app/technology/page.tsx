"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles-background"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function TechnologyPage() {
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
      <section className="relative z-10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Technology Training
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Cutting-edge technology training programs designed to keep you ahead in the rapidly evolving tech
              landscape. From Agile methodologies to emerging technologies, we offer comprehensive courses to enhance
              your technical skills.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="relative z-10 py-16 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="agile" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 bg-gray-900 rounded-lg p-1 mb-8">
              <TabsTrigger value="agile" className="data-[state=active]:bg-purple-900 data-[state=active]:text-white">
                Agile
              </TabsTrigger>
              <TabsTrigger
                value="data-science"
                className="data-[state=active]:bg-purple-900 data-[state=active]:text-white"
              >
                Data Science
              </TabsTrigger>
              <TabsTrigger
                value="blockchain"
                className="data-[state=active]:bg-purple-900 data-[state=active]:text-white"
              >
                Blockchain
              </TabsTrigger>
              <TabsTrigger
                value="emerging"
                className="data-[state=active]:bg-purple-900 data-[state=active]:text-white"
              >
                Emerging Tech
              </TabsTrigger>
              <TabsTrigger value="cloud" className="data-[state=active]:bg-purple-900 data-[state=active]:text-white">
                Cloud Computing
              </TabsTrigger>
            </TabsList>

            {/* Agile Content */}
            <TabsContent value="agile" className="mt-0">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Agile Training Programs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Lean Kanban KMP 1</h4>
                    <p className="text-gray-400 text-sm">
                      Learn the fundamentals of Kanban method for evolutionary change.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Lean Kanban KMP 2</h4>
                    <p className="text-gray-400 text-sm">
                      Advanced Kanban implementation strategies for organizations.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">DSDM</h4>
                    <p className="text-gray-400 text-sm">
                      Dynamic Systems Development Method for agile project management.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Distributed Agile Teams</h4>
                    <p className="text-gray-400 text-sm">
                      Strategies for effective remote and distributed agile team collaboration.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Organizational/Business Agility</h4>
                    <p className="text-gray-400 text-sm">
                      Implementing agility across the entire organization for better adaptability.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Agile TFS</h4>
                    <p className="text-gray-400 text-sm">Using Team Foundation Server for agile project management.</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Agile JIRA</h4>
                    <p className="text-gray-400 text-sm">
                      Leveraging JIRA for effective agile project tracking and management.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Agile Estimation</h4>
                    <p className="text-gray-400 text-sm">
                      Techniques for accurate estimation in development and QA processes.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Agile PM Scrum</h4>
                    <p className="text-gray-400 text-sm">Project management using Scrum framework and methodologies.</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Data Science Content */}
            <TabsContent value="data-science" className="mt-0">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Data Science Training Programs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Data Analytics Foundation</h4>
                    <p className="text-gray-400 text-sm">Introduction to data analytics concepts and methodologies.</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Data Science Foundation</h4>
                    <p className="text-gray-400 text-sm">Core principles and practices of data science.</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Data Analytics for Beginners</h4>
                    <p className="text-gray-400 text-sm">Entry-level course for those new to data analytics.</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">AI/ML Foundation</h4>
                    <p className="text-gray-400 text-sm">
                      Introduction to artificial intelligence and machine learning concepts.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Data Visualization & Preparation</h4>
                    <p className="text-gray-400 text-sm">
                      Techniques for effective data visualization and preparation.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Statistics for Machine Learning</h4>
                    <p className="text-gray-400 text-sm">
                      Statistical concepts essential for machine learning applications.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Machine Learning with R</h4>
                    <p className="text-gray-400 text-sm">
                      Implementing machine learning algorithms using R programming.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Machine Learning with Excel</h4>
                    <p className="text-gray-400 text-sm">Using Excel for basic machine learning applications.</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">AI Deep Learning & NLP</h4>
                    <p className="text-gray-400 text-sm">
                      Advanced AI techniques including deep learning and natural language processing.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Blockchain Content */}
            <TabsContent value="blockchain" className="mt-0">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Blockchain Training Programs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Blockchain Business Foundations</h4>
                    <p className="text-gray-400 text-sm">
                      Introduction to blockchain technology and its business applications.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Blockchain Solution Architect</h4>
                    <p className="text-gray-400 text-sm">
                      Design and implement blockchain solutions for enterprise applications.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Blockchain Developer Ethereum</h4>
                    <p className="text-gray-400 text-sm">Develop applications on the Ethereum blockchain platform.</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Blockchain Developer Hyperledger Fabric</h4>
                    <p className="text-gray-400 text-sm">
                      Building enterprise blockchain applications with Hyperledger Fabric.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Blockchain Security Professional</h4>
                    <p className="text-gray-400 text-sm">
                      Security best practices for blockchain implementations and smart contracts.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Emerging Technologies Content */}
            <TabsContent value="emerging" className="mt-0">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Emerging Technologies Training</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Artificial Intelligence</h4>
                    <p className="text-gray-400 text-sm">
                      Comprehensive training on AI concepts, applications, and implementation.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Machine Learning</h4>
                    <p className="text-gray-400 text-sm">
                      Algorithms, models, and practical applications of machine learning.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Internet of Things</h4>
                    <p className="text-gray-400 text-sm">IoT architecture, protocols, and implementation strategies.</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Robotic Process Automation</h4>
                    <p className="text-gray-400 text-sm">Automating business processes using RPA technologies.</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Edge Cloud</h4>
                    <p className="text-gray-400 text-sm">
                      Edge computing technologies and their integration with cloud systems.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Quantum Computing</h4>
                    <p className="text-gray-400 text-sm">
                      Introduction to quantum computing principles and applications.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Virtual Reality</h4>
                    <p className="text-gray-400 text-sm">
                      VR development, design principles, and business applications.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">5G</h4>
                    <p className="text-gray-400 text-sm">
                      Understanding 5G technology and its impact on digital transformation.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Cloud Computing Content */}
            <TabsContent value="cloud" className="mt-0">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Cloud Computing Training</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Cloud Computing Fundamentals</h4>
                    <p className="text-gray-400 text-sm">
                      Introduction to cloud computing concepts, models, and services.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">AWS Developer</h4>
                    <p className="text-gray-400 text-sm">Developing applications on Amazon Web Services platform.</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">AWS Admin</h4>
                    <p className="text-gray-400 text-sm">Administration and management of AWS infrastructure.</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Cloud & Native DevOps</h4>
                    <p className="text-gray-400 text-sm">DevOps practices for cloud-native application development.</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Cloud Security & Data</h4>
                    <p className="text-gray-400 text-sm">
                      Security best practices for cloud environments and data protection.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Private Cloud</h4>
                    <p className="text-gray-400 text-sm">
                      Implementation and management of private cloud infrastructure.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Google Cloud Platform</h4>
                    <p className="text-gray-400 text-sm">Development and administration on Google Cloud Platform.</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Azure Cloud</h4>
                    <p className="text-gray-400 text-sm">
                      Microsoft Azure cloud services and implementation strategies.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Azure DevOps & Security</h4>
                    <p className="text-gray-400 text-sm">
                      DevOps practices and security implementation in Azure environments.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12 rounded-2xl border border-gray-800">
            <h2 className="text-3xl font-bold mb-4 text-white">Accelerate Your Tech Career</h2>
            <p className="text-gray-300 mb-8">
              Enroll in our technology training programs and stay ahead in the rapidly evolving tech landscape.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white border-0"
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
          <h3 className="text-2xl font-bold mb-8 text-center text-purple-400">Frequently Asked Questions</h3>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-1" className="border-b border-gray-800">
              <AccordionTrigger className="text-white hover:text-purple-400 py-4">
                What technology training programs do you offer?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                We offer a wide range of technology training programs including Agile methodologies, Data Science,
                Blockchain, Cloud Computing, and Emerging Technologies. Our programs are designed to keep professionals
                ahead in the rapidly evolving tech landscape.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2" className="border-b border-gray-800">
              <AccordionTrigger className="text-white hover:text-purple-400 py-4">
                Are your technology courses suitable for beginners?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Yes, we offer courses for all skill levels, from beginners to advanced professionals. Our entry-level
                courses provide a solid foundation in the subject matter, while our advanced courses delve deeper into
                specialized topics for experienced practitioners.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3" className="border-b border-gray-800">
              <AccordionTrigger className="text-white hover:text-purple-400 py-4">
                Do you provide certifications for your technology courses?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Yes, many of our technology courses prepare you for industry-recognized certifications. We also provide
                certificates of completion for all our training programs, which can be valuable additions to your
                professional portfolio.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4" className="border-b border-gray-800">
              <AccordionTrigger className="text-white hover:text-purple-400 py-4">
                How are the technology training programs delivered?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Our technology training programs are delivered through a combination of instructor-led sessions,
                hands-on workshops, case studies, and practical exercises. We offer both in-person and virtual options
                to accommodate different learning preferences and locations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5" className="border-b border-gray-800">
              <AccordionTrigger className="text-white hover:text-purple-400 py-4">
                Can you customize technology training for our organization?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Absolutely! We specialize in creating customized technology training programs tailored to your
                organization's specific needs, industry context, and skill gaps. Our experts work with you to design a
                curriculum that addresses your unique challenges and objectives.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-center mt-8">
            <Link href="/faq#technology">
              <Button variant="outline" className="text-purple-400 border-purple-400 hover:bg-purple-950">
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
