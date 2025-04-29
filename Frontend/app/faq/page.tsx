"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles-background"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
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
                <p className="text-sm text-green-400 italic">Where passion meets excellence</p>
              </div>
            </Link>

            <Link href="/">
              <Button variant="ghost" className="text-white hover:text-green-400">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Find answers to common questions about our services, programs, and how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="relative z-10 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Link
              href="#general"
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-green-500 transition-all group"
            >
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-green-400 transition-colors">
                General Questions
              </h3>
              <p className="text-gray-400">Basic information about The Neo Veda Academy and our approach.</p>
            </Link>

            <Link
              href="#consulting"
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all group"
            >
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                Consulting
              </h3>
              <p className="text-gray-400">Questions about our digital strategy and transformation services.</p>
            </Link>

            <Link
              href="#technology"
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition-all group"
            >
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
                Technology
              </h3>
              <p className="text-gray-400">Information about our technology training programs.</p>
            </Link>

            <Link
              href="#human-capital"
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-pink-500 transition-all group"
            >
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-pink-400 transition-colors">
                Human Capital Services
              </h3>
              <p className="text-gray-400">Questions about talent assessment and development.</p>
            </Link>

            <Link
              href="#it-training"
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition-all group"
            >
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                IT Training
              </h3>
              <p className="text-gray-400">Details about our specialized IT training programs.</p>
            </Link>

            <Link
              href="#sath"
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-amber-500 transition-all group"
            >
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-amber-400 transition-colors">SATH</h3>
              <p className="text-gray-400">Information about our team-building experiences.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="relative z-10 py-8 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          {/* General Questions */}
          <div id="general" className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-green-400">General Questions</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="general-1" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-green-400 py-4">
                  What is The Neo Veda Academy?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  The Neo Veda Academy is a premium platform for upskilling through expert training and personalized
                  consultations. We offer a wide range of services including consulting, technology training, human
                  capital services, IT training, and team-building experiences to help individuals and organizations
                  achieve their goals.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="general-2" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-green-400 py-4">
                  How can I contact The Neo Veda Academy?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  You can reach us via email at theneovedaacademy@gmail.com or by phone at (+91) 8147884482 or (+1) 689
                  240 9966. You can also schedule a consultation through our website by clicking on the "Book
                  Consultation" button.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="general-3" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-green-400 py-4">
                  Do you offer customized programs for organizations?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Yes, we specialize in creating customized programs tailored to the specific needs of your
                  organization. Our experts work closely with you to understand your requirements and design programs
                  that address your unique challenges and goals.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="general-4" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-green-400 py-4">
                  How do I schedule a consultation?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  You can schedule a consultation by clicking on the "Book Consultation" or "Schedule Consultation"
                  buttons throughout our website. This will direct you to our booking form where you can provide your
                  details and preferred time for the consultation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="general-5" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-green-400 py-4">
                  Where are your services available?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Our services are available globally. We offer both in-person and virtual options to accommodate
                  clients from different locations. Our team has experience working with organizations across various
                  countries and industries.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Consulting */}
          <div id="consulting" className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">Consulting</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="consulting-1" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-cyan-400 py-4">
                  What consulting services do you offer?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  We offer a comprehensive range of consulting services including Digital Strategy, Lean-Agile
                  Enterprise, IT & Sourcing Governance, Enterprise Cloud, Enterprise DevOps, and Enterprise Automation.
                  Our consulting services are designed to help organizations navigate digital transformation and achieve
                  their business objectives.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="consulting-2" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-cyan-400 py-4">
                  How does your digital strategy consulting work?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Our digital strategy consulting begins with a thorough assessment of your current digital landscape
                  and business goals. We then work with you to develop a roadmap that leverages digital resources, data
                  intelligence, and talent optimization to create more customer value and drive business growth.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="consulting-3" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-cyan-400 py-4">
                  What is Lean-Agile Enterprise consulting?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Lean-Agile Enterprise consulting helps organizations adapt to rapid technological changes by
                  implementing agile methodologies at scale. We guide you in creating a more responsive, efficient, and
                  innovative organization that can "disrupt before being disrupted" in today's fast-paced business
                  environment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="consulting-4" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-cyan-400 py-4">
                  How can Enterprise Cloud consulting benefit my organization?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Our Enterprise Cloud consulting helps organizations leverage cloud technologies to enhance
                  scalability, reduce costs, and improve operational efficiency. We assist with cloud strategy
                  development, migration planning, implementation, and optimization to ensure you get the maximum value
                  from your cloud investments.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="consulting-5" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-cyan-400 py-4">
                  What does the consulting process look like?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Our consulting process typically includes: 1) Initial consultation to understand your needs, 2)
                  Assessment of your current state, 3) Strategy development, 4) Implementation planning, 5) Execution
                  support, and 6) Continuous improvement. We work collaboratively with your team throughout the process
                  to ensure successful outcomes.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Technology */}
          <div id="technology" className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-purple-400">Technology</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="technology-1" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-purple-400 py-4">
                  What technology training programs do you offer?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  We offer a wide range of technology training programs including Agile methodologies, Data Science,
                  Blockchain, Cloud Computing, and Emerging Technologies. Our programs are designed to keep
                  professionals ahead in the rapidly evolving tech landscape.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="technology-2" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-purple-400 py-4">
                  Are your technology courses suitable for beginners?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Yes, we offer courses for all skill levels, from beginners to advanced professionals. Our entry-level
                  courses provide a solid foundation in the subject matter, while our advanced courses delve deeper into
                  specialized topics for experienced practitioners.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="technology-3" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-purple-400 py-4">
                  Do you provide certifications for your technology courses?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Yes, many of our technology courses prepare you for industry-recognized certifications. We also
                  provide certificates of completion for all our training programs, which can be valuable additions to
                  your professional portfolio.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="technology-4" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-purple-400 py-4">
                  How are the technology training programs delivered?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Our technology training programs are delivered through a combination of instructor-led sessions,
                  hands-on workshops, case studies, and practical exercises. We offer both in-person and virtual options
                  to accommodate different learning preferences and locations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="technology-5" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-purple-400 py-4">
                  Can you customize technology training for our organization?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  We specialize in creating customized technology training programs tailored to your organization's
                  specific needs, industry context, and skill gaps. Our experts work with you to design a curriculum
                  that addresses your unique challenges and objectives.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Human Capital Services */}
          <div id="human-capital" className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-pink-400">Human Capital Services</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="human-capital-1" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-pink-400 py-4">
                  What human capital services do you provide?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Our human capital services include Talent Assessment, Talent Development, Behavioral Assessments, EQ
                  Assessments, Leadership Development, and ROI Evaluation. We also offer specialized services like Sales
                  Development and Communication Training to help organizations build high-performing teams.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="human-capital-2" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-pink-400 py-4">
                  How do your talent assessments work?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Our talent assessments utilize a variety of tools and methodologies to evaluate skills, competencies,
                  behavioral traits, and emotional intelligence. We use these insights to identify strengths, growth
                  areas, and development opportunities for individuals and teams within your organization.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="human-capital-3" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-pink-400 py-4">
                  What is included in your leadership development programs?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Our leadership development programs include assessments, workshops, coaching, and practical
                  application opportunities. We focus on developing essential leadership competencies such as strategic
                  thinking, emotional intelligence, communication, team building, change management, and
                  decision-making.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="human-capital-4" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-pink-400 py-4">
                  How can EQ assessments benefit my organization?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  EQ (Emotional Intelligence) assessments help individuals understand and improve their emotional
                  intelligence, which is crucial for effective leadership, teamwork, and interpersonal relationships.
                  Higher EQ in your organization can lead to better communication, conflict resolution, stress
                  management, and overall workplace harmony.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="human-capital-5" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-pink-400 py-4">
                  What is ROI Evaluation and why is it important?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  ROI (Return on Investment) Evaluation measures the financial and non-financial returns of your
                  training and development initiatives. It's important because it helps you quantify the impact of your
                  investments in human capital, justify budgets, identify the most effective programs, and make
                  data-driven decisions about future investments.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* IT Training */}
          <div id="it-training" className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">IT Training</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="it-training-1" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-blue-400 py-4">
                  What IT training programs do you offer?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  We offer a comprehensive range of IT training programs including ITIL®, SAFe®, DevOps, Lean Six Sigma,
                  Agile & Scrum, Project Management, and many more. Our programs are designed to enhance technical
                  skills and advance careers in the IT industry.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="it-training-2" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-blue-400 py-4">
                  Are your IT training programs certified?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Yes, many of our IT training programs prepare you for industry-recognized certifications such as
                  ITIL®, SAFe®, PMP®, PRINCE2®, and more. These certifications are highly valued in the IT industry and
                  can significantly enhance your career prospects.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="it-training-3" className="border-b border-gray-800">
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

              <AccordionItem value="it-training-4" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-blue-400 py-4">
                  How can DevOps training benefit my organization?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  DevOps training can benefit your organization by improving collaboration between development and
                  operations teams, accelerating software delivery, enhancing product quality, increasing operational
                  efficiency, and fostering a culture of continuous improvement and innovation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="it-training-5" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-blue-400 py-4">
                  Do you offer corporate IT training programs?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Yes, we offer corporate IT training programs tailored to the specific needs of your organization.
                  These programs can be delivered on-site or virtually and can be customized to address your unique
                  challenges, technologies, and business objectives.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* SATH */}
          <div id="sath" className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-amber-400">SATH</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="sath-1" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-amber-400 py-4">What is SATH?</AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  SATH stands for "Sprint a Trainer – Corporate Team-Building Experiences." It's our specialized program
                  designed to energize, engage, and unite teams through various interactive and fun activities that
                  enhance collaboration, communication, and team spirit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sath-2" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-amber-400 py-4">
                  What team-building experiences do you offer?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  We offer five main team-building experiences: The Energy Boost Challenge, The Great Collaboration
                  Quest, The Rapid Innovation Sprint, The Office Olympics, and The Resilience Reset Workshop. Each
                  experience is designed to address different aspects of team dynamics and workplace challenges.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sath-3" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-amber-400 py-4">
                  How long do the team-building sessions last?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Our team-building sessions typically last between 2-4 hours, depending on the specific experience and
                  your team's needs. We can also customize the duration to fit your schedule and objectives.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sath-4" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-amber-400 py-4">
                  Can you accommodate large teams for SATH experiences?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Yes, our SATH experiences are scalable and can accommodate teams of various sizes, from small
                  departments to entire organizations. For larger groups, we can organize multiple concurrent sessions
                  or design activities specifically for large-scale participation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sath-5" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-amber-400 py-4">
                  How do I book a SATH experience for my team?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  You can book a SATH experience by clicking on the "Book for Your Team" button on our SATH page or by
                  contacting us directly via email or phone. We'll discuss your team's needs, recommend the most
                  suitable experience, and schedule a session at your convenience.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12 rounded-2xl border border-gray-800">
            <h2 className="text-3xl font-bold mb-4 text-white">Still Have Questions?</h2>
            <p className="text-gray-300 mb-8">
              Contact our team for personalized answers to your specific questions or to learn more about our services.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white border-0"
              onClick={() => window.open("https://www.surveymonkey.com/r/VNYZ55R", "_blank")}
            >
              Contact Us
            </Button>
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
