"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ChevronRight, Mail, Phone, Globe, Menu, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { NavMenu } from "@/components/nav-menu"
import { RegistrationDialog } from "@/components/registration-dialog"
import { AboutSection } from "@/components/about-section"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ExploreButton from "@/components/ExploreButton";

export default function LandingPage() {
  const [registrationOpen, setRegistrationOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-gray-950 to-gray-900 text-gray-50 overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-500 opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-cyan-500 opacity-20 blur-3xl"></div>
      </div>

      {/* Header */}
{/* Header */}
{/* Header */}
<header className="sticky top-0 z-40 w-full border-b border-gray-800 bg-gray-950/80 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60">
  {/* The main container should use `flex` and `gap` to space items correctly */}
  <div className="container flex h-16 items-center py-4 gap-8"> {/* Adjusted: Removed justify-between, added gap-8 */}

    {/* Logo and Title */}
    <div className="flex items-center gap-2">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-04%2022.06.43%20-%20A%20futuristic%2C%20minimalist%20logo%20for%20%27The%20Neo%20Veda%20Academy%27.%20The%20design%20features%20sleek%2C%20modern%20typography%20with%20a%20glowing%20ambient%20blur%20effect.%20The%20color%20p.jpg-u5KPrysR5mjA8ySlPXVK1WJYI1mmH4.jpeg"
          alt="The Neo Veda Academy Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="text-xl font-bold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
          The Neo Veda Academy
        </span>
      </Link>
    </div>

    {/* Navigation Menu (desktop) */}
    <div className="hidden md:flex items-center space-x-6 ml-auto"> {/* Added ml-auto and space-x-6 */}
      <NavMenu />
    </div>

    {/* Mobile Menu Trigger */}
          <div className="flex items-center md:ml-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden border-gray-700 text-gray-300">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-gray-950 border-gray-800 p-0">
                <div className="flex flex-col h-full">
                  <div className="p-4 border-b border-gray-800">
                    <div className="flex items-center gap-2 mb-6">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-04%2022.06.43%20-%20A%20futuristic%2C%20minimalist%20logo%20for%20%27The%20Neo%20Veda%20Academy%27.%20The%20design%20features%20sleek%2C%20modern%20typography%20with%20a%20glowing%20ambient%20blur%20effect.%20The%20color%20p.jpg-u5KPrysR5mjA8ySlPXVK1WJYI1mmH4.jpeg"
                        alt="The Neo Veda Academy Logo"
                        width={30}
                        height={30}
                        className="rounded-full"
                      />
                      <span className="text-lg font-bold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                        The Neo Veda Academy
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 overflow-auto py-2">
                    <Accordion type="single" collapsible className="w-full">
                      {/* IT Process & Business Certifications - Updated Sub-options */}
                      <AccordionItem value="it-process-business" className="border-b border-gray-800">
                        <AccordionTrigger className="px-4 py-3 text-gray-100 hover:text-cyan-400">
                          IT Process & Business Certifications
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-3">
                          <ul className="space-y-2">
                            <li>
                              <Link href="/it-process-business/it-service" className="text-sm text-gray-300 hover:text-cyan-400">
                                IT Service Management & Governance
                              </Link>
                            </li>
                            <li>
                              <Link href="/it-process-business/project-program" className="text-sm text-gray-300 hover:text-cyan-400">
                                Project & Program Management
                              </Link>
                            </li>
                            <li>
                              <Link href="/it-process-business/quality-process" className="text-sm text-gray-300 hover:text-cyan-400">
                                Quality & Process Improvement
                              </Link>
                            </li>
                            <li>
                              <Link href="/it-process-business/risk-security" className="text-sm text-gray-300 hover:text-cyan-400">
                                Risk & Security Management
                              </Link>
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      {/* Tech & Finance Academy */}
                      <AccordionItem value="tech-finance" className="border-b border-gray-800">
                        <AccordionTrigger className="px-4 py-3 text-gray-100 hover:text-cyan-400">
                          Tech & Finance Academy
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-3">
                          <ul className="space-y-2">
                            <li>
                              <Link href="/tech-finance/it-dev" className="text-sm text-gray-300 hover:text-cyan-400">
                                IT & Development
                              </Link>
                            </li>
                            <li>
                              <Link href="/tech-finance" className="text-sm text-gray-300 hover:text-cyan-400">
                                Finance & Analytics
                              </Link>
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      {/* Human Capital & HR Trainings - Updated Sub-options */}
                      <AccordionItem value="human-capital" className="border-b border-gray-800">
                        <AccordionTrigger className="px-4 py-3 text-gray-100 hover:text-cyan-400">
                          Human Capital & HR Trainings
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-3">
                          <ul className="space-y-2">
                            <li>
                              <Link href="/human-capital/behavioral" className="text-sm text-gray-300 hover:text-cyan-400">
                                Behavioral Training
                              </Link>
                            </li>
                            <li>
                              <Link href="/human-capital/hr-professional" className="text-sm text-gray-300 hover:text-cyan-400">
                                HR Professional Development
                              </Link>
                            </li>
                            <li>
                              <Link href="/human-capital/leadership-dev" className="text-sm text-gray-300 hover:text-cyan-400">
                                Leadership Development
                              </Link>
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      {/* Corporate Gen AI Training */}
                      <AccordionItem value="corporate-gen-ai-training" className="border-b border-gray-800">
                        <AccordionTrigger className="px-4 py-3 text-gray-100 hover:text-cyan-400">
                          Corporate Gen AI Training
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-3">
                          <ul className="space-y-2">
                            <li>
                              <Link href="/corporate-gen-ai/about" className="text-sm text-gray-300 hover:text-cyan-400">
                                About Gen AI Training
                              </Link>
                            </li>
                            <li>
                              <Link href="/corporate-gen-ai/training" className="text-sm text-gray-300 hover:text-cyan-400">
                                Training Programs
                              </Link>
                            </li>
                            <li>
                              <Link href="/corporate-gen-ai/workshop" className="text-sm text-gray-300 hover:text-cyan-400">
                                Workshops
                              </Link>
                            </li>
                            <li>
                              <Link href="/corporate-gen-ai/experience" className="text-sm text-gray-300 hover:text-cyan-400">
                                Experience
                              </Link>
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      {/* Career Development Packages - Updated Sub-options */}
                      <AccordionItem value="career-development" className="border-b border-gray-800">
                        <AccordionTrigger className="px-4 py-3 text-gray-100 hover:text-cyan-400">
                          Career Development Packages
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-3">
                          <ul className="space-y-2">
                            <li>
                              <Link href="/career-development/grad-launch" className="text-sm text-gray-300 hover:text-cyan-400">
                                Graduate Launch Package
                              </Link>
                            </li>
                            <li>
                              <Link href="/career-development/carr-acc" className="text-sm text-gray-300 hover:text-cyan-400">
                                Career Accelerator Package
                              </Link>
                            </li>
                            <li>
                              <Link href="/career-development/exec-grow" className="text-sm text-gray-300 hover:text-cyan-400">
                                Executive Growth Package
                              </Link>
                            </li>
                            <li>
                              <Link href="/career-development/carr-tran" className="text-sm text-gray-300 hover:text-cyan-400">
                                Career Transition Package
                              </Link>
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      {/* About Us - Updated Sub-options */}
                      <AccordionItem value="about" className="border-b border-gray-800">
                        <AccordionTrigger className="px-4 py-3 text-gray-100 hover:text-cyan-400">
                          About Us
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-3">
                          <ul className="space-y-2">
                            <li>
                              <Link href="#mission" className="text-sm text-gray-300 hover:text-cyan-400">
                                Mission
                              </Link>
                            </li>
                            <li>
                              <Link href="#vision" className="text-sm text-gray-300 hover:text-cyan-400">
                                Vision
                              </Link>
                            </li>
                            <li>
                              <Link href="#approach" className="text-sm text-gray-300 hover:text-cyan-400">
                                Our Approach
                              </Link>
                            </li>
                            <li>
                              <Link href="#team" className="text-sm text-gray-300 hover:text-cyan-400">
                                Our Team
                              </Link>
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      {/* Removed the following AccordionItems to align with desktop menu:
                          - Consulting
                          - FAQ
                          - IT Training
                          - SATH
                          - Technical Training
                          - Technology
                      */}

                    </Accordion>
                  </div>
                  <div className="p-4 border-t border-gray-800">
                    <div className="flex gap-4 justify-center">
                      <Link href="#" className="text-gray-500 hover:text-cyan-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect width="4" height="12" x="2" y="9"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-4 md:py-6 lg:py-8 relative overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid gap-4 lg:grid-cols-[1fr_350px] lg:gap-8 xl:grid-cols-[1fr_500px] items-center">
              <div className="flex flex-col justify-center space-y-3">
                <div className="inline-flex items-center space-x-1 rounded-full bg-gray-800/60 px-3 py-1.5 text-base text-gray-300">
                  <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span>Where passion meets excellence</span>
                </div>
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold whitespace-nowrap tracking-tighter sm:text-4xl xl:text-5xl/none bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                    Elevate Your Skills with AI-Powered Learning
                  </h1>
                  <p className="max-w-[500px] text-gray-400 text-sm md:text-base">
                    Join our cutting-edge training programs and personalized consultations to master the skills of
                    tomorrow, today.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <ExploreButton />
                </div>
                <div className="flex items-center space-x-4 text-xs text-gray-400">
                  <div className="flex items-center">
                    <Check className="mr-1 h-3 w-3 text-cyan-400" />
                    <span>Expert Trainers</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="mr-1 h-3 w-3 text-cyan-400" />
                    <span>Personalized Learning</span>
                  </div>
                </div>
              </div>
              <div className="relative lg:order-last">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-2xl blur-3xl"></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-04%2022.06.43%20-%20A%20futuristic%2C%20minimalist%20logo%20for%20%27The%20Neo%20Veda%20Academy%27.%20The%20design%20features%20sleek%2C%20modern%20typography%20with%20a%20glowing%20ambient%20blur%20effect.%20The%20color%20p.jpg-u5KPrysR5mjA8ySlPXVK1WJYI1mmH4.jpeg"
                  width={500}
                  height={500}
                  alt="The Neo Veda Academy"
                  className="relative mx-auto rounded-2xl object-cover border border-gray-800 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* IT Process & Business Certifications Section */}
        <section id="it-process-business" className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-1/2 bg-purple-600/20 rounded-full blur-3xl -z-10"></div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-800/60 px-3 py-1 text-sm text-gray-300">
                  Featured Programs
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                  IT Process & Business Certifications
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Master IT governance, project management, and digital transformation with our expert-led programs.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {/* IT Service Management & Governance */}
              <Card className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all overflow-hidden">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-5xl text-cyan-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-100">IT Service Management & Governance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Comprehensive certification programs in ITIL 4, COBIT, ISO 20000, and TOGAF to master IT service
                    management and governance.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">ITIL 4 Foundation & Specialist Modules</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">COBIT Foundation & Implementation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">ISO 20000 Certification Path</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/it-process-business/it-service">
                    <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white">
                      Know More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Project & Program Management */}
              <Card className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all overflow-hidden">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-600/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-5xl text-purple-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M8 6h10"></path>
                        <path d="M6 12h9"></path>
                        <path d="M11 18h7"></path>
                        <path d="M3 6v.01"></path>
                        <path d="M3 12v.01"></path>
                        <path d="M3 18v.01"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-100">Project & Program Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Industry-recognized certifications in project management methodologies including PRINCE2, PMP, and
                    Agile frameworks.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">PRINCE2 Foundation & Practitioner</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">PMP Certification Training</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">SAFe Agile Certifications</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/it-process-business/project-program">
                    <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white">
                      Know More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Quality & Process Improvement */}
              <Card className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all overflow-hidden">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-600/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-5xl text-blue-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"></path>
                        <path d="M2 20h20"></path>
                        <path d="M14 12v.01"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-100">Quality & Process Improvement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Specialized training in Six Sigma, Lean methodologies, and quality management systems to drive
                    continuous improvement.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Six Sigma Belt Programs</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Lean Six Sigma Certifications</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">ISO 9001 Quality Management</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/it-process-business/quality-process">
                    <Button className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white">
                      Know More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Tech & Finance Academy Section */}
        <section id="tech-finance" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900/50 relative">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-cyan-600/20 rounded-full blur-3xl -z-10"></div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-800/60 px-3 py-1 text-sm text-gray-300">
                  Featured Programs
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                  Tech & Finance Academy
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Master in-demand tech and finance skills to launch or advance your career in these high-growth fields.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* IT & Development */}
              <Card className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all overflow-hidden">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-5xl text-cyan-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-100">IT & Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Comprehensive training in programming languages, cloud computing, DevOps, and cybersecurity
                    fundamentals.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Programming Languages (Python, Java, JavaScript)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Cloud Computing (AWS, Azure, GCP)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">DevOps & CI/CD Pipelines</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/tech-finance/it-dev">
                    <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
                      Know More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Finance & Analytics */}
              <Card className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all overflow-hidden">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-600/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-5xl text-green-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 20h.01"></path>
                        <path d="M7 20v-4"></path>
                        <path d="M12 20v-8"></path>
                        <path d="M17 20V8"></path>
                        <path d="M22 4v16"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-100">Finance & Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Specialized training in financial accounting, investment management, ERP systems, and data analysis
                    tools.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Financial Accounting Certifications</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">ERP Systems Training (SAP, Oracle)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Financial Data Analysis (Power BI, Tableau)</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/tech-finance/fin-ana">
                    <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white">
                      Know More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Human Capital & HR Trainings Section */}
        <section id="human-capital" className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-1/2 bg-pink-600/20 rounded-full blur-3xl -z-10"></div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-800/60 px-3 py-1 text-sm text-gray-300">
                  Featured Programs
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                  Human Capital & HR Trainings
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Develop critical HR expertise and leadership capabilities for organizational success.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3 mt-12">
              {/* Behavioral Training */}
              <Card className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all overflow-hidden">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-600/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-5xl text-pink-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M8 19a5 5 0 0 1-1-2 5 5 0 0 0-5-3 5 5 0 0 1 5-3c.5-.9 1.5-1.5 2-2 1-1.5.5-4 3-4 2.5 0 2 2.5 3 4 .5.5 1.5 1.1 2 2a5 5 0 0 1 5 3 5 5 0 0 0-5 3 5 5 0 0 1-1 2"></path>
                        <path d="M12 19c-1-1-1-3-2-3s-3 1-3 1"></path>
                        <path d="M12 19c1-1 1-3 2-3s3 1 3 1"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-100">Behavioral Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Enhance workplace communication, emotional intelligence, and collaboration skills.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-pink-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Communication Mastery</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-pink-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Emotional Intelligence</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-pink-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Workplace Collaboration</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/human-capital/behavioral">
                    <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
                      Know More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* HR Professional Development */}
              <Card className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all overflow-hidden">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-600/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-5xl text-purple-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-100">HR Professional Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Specialized training in talent acquisition, performance management, and HR technology.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Talent Acquisition</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Performance Management</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">HR Compliance & Technology</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/human-capital/hr-professional">
                    <Button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white">
                      Know More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Leadership Development */}
              <Card className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all overflow-hidden">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-600/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-5xl text-blue-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                        <path d="M12 10v6"></path>
                        <path d="m9 13 3-3 3 3"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-100">Leadership Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Comprehensive programs to develop effective leaders at all organizational levels.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Emerging Leaders Program</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Executive Leadership</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Team Building Workshops</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/human-capital/leadership-dev">
                    <Button className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white">
                      Know More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Corporate AI Training Section */}
<section id="ai-training" className="w-full py-12 md:py-24 lg:py-32 relative">
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-1/2 bg-purple-600/20 rounded-full blur-3xl -z-10"></div>
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <div className="inline-block rounded-lg bg-gray-800/60 px-3 py-1 text-sm text-gray-300">
          Cutting-Edge Programs
        </div>
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          Corporate AI Training Programs
        </h2>
        <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Transform your workforce with AI-powered solutions and next-generation digital skills.
        </p>
      </div>
    </div>

    <div className="grid gap-8 md:grid-cols-3 mt-12">
      {/* AI Fundamentals */}
      <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all overflow-hidden">
        <div className="relative h-48">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-600/20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-5xl text-purple-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                <path d="M12 12v9"></path>
                <path d="m8 17 4 4 4-4"></path>
              </svg>
            </div>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-xl text-gray-100">AI Fundamentals</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400">
            Master the core concepts of artificial intelligence and machine learning for business applications.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
              <span className="text-gray-300">AI Concepts & Terminology</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
              <span className="text-gray-300">Machine Learning Basics</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
              <span className="text-gray-300">Business Use Cases</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Link href="https://v0-neon-ai-portfolio.vercel.app/">
            <Button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white">
              Know More <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>

      {/* Generative AI */}
      <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all overflow-hidden">
        <div className="relative h-48">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-600/20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-5xl text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                <path d="M15 5l3 3"></path>
              </svg>
            </div>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-xl text-gray-100">Generative AI</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400">
            Harness the power of generative AI for content creation, design, and business innovation.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
              <span className="text-gray-300">Text Generation (LLMs)</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
              <span className="text-gray-300">Image & Video Generation</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
              <span className="text-gray-300">Workflow Automation</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Link href="https://v0-neon-ai-portfolio.vercel.app/">
            <Button className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white">
              Know More <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>

      {/* AI Implementation */}
      <Card className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all overflow-hidden">
        <div className="relative h-48">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-emerald-600/20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-5xl text-cyan-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
                <path d="M12 13v-1"></path>
              </svg>
            </div>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-xl text-gray-100">AI Implementation</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400">
            Practical strategies for integrating AI solutions into your existing business infrastructure.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" />
              <span className="text-gray-300">AI Deployment Frameworks</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" />
              <span className="text-gray-300">Ethical Considerations</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" />
              <span className="text-gray-300">Change Management</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Link href="https://v0-neon-ai-portfolio.vercel.app/">
            <Button className="bg-gradient-to-r from-cyan-500 to-emerald-600 hover:from-cyan-600 hover:to-emerald-700 text-white">
              Know More <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  </div>
</section>

{/* Career Development Packages Section */}
<section id="career-development" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900/50 relative">
  <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-cyan-600/20 rounded-full blur-3xl -z-10"></div>
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
      <div className="space-y-2">
        <div className="inline-block rounded-lg bg-gray-800/60 px-3 py-1 text-sm text-gray-300">
          Career Development Packages
        </div>
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          Tailored Career Solutions
        </h2>
        <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Specialized programs designed for every career stage and transition need.
        </p>
      </div>
    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Job Market Readiness Package - Cyan */}
      <Card className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all overflow-hidden flex flex-col h-full">
        <div className="relative h-48">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-5xl text-cyan-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5l2 2h8a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="2"></circle>
                <line x1="12" y1="15" x2="12" y2="18"></line>
              </svg>
            </div>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-xl text-gray-100">Job Market Readiness</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-gray-400">
            For final year students and freshers applying for jobs.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" />
              <span className="text-gray-300">ATS Optimized Resume</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" />
              <span className="text-gray-300">LinkedIn Profile Makeover</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" />
              <span className="text-gray-300">Interview Preparation</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 mt-auto">
          <div className="text-sm text-gray-300">Price: ₹2499/-</div>
          <Link href="sevenopp\job-mar" className="w-full">
            <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
              Know More <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>

      {/* Executive Growth Package - Purple */}
      <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all overflow-hidden flex flex-col h-full">
        <div className="relative h-48">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-fuchsia-600/20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-5xl text-purple-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-xl text-gray-100">Executive Growth</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-gray-400">
            For ambitious professionals with less than 5 years experience.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
              <span className="text-gray-300">Career Health Check</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
              <span className="text-gray-300">Pivot Potential Assessment</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
              <span className="text-gray-300">Future-Proofing Roadmap</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 mt-auto">
          <div className="text-sm text-gray-300">Price: ₹4999/-</div>
          <Link href="sevenopp\exec-grow" className="w-full">
            <Button className="w-full bg-gradient-to-r from-purple-500 to-fuchsia-600 hover:from-purple-600 hover:to-fuchsia-700 text-white">
              Know More <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>

      {/* Industry Transition Package - Blue */}
      <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all overflow-hidden flex flex-col h-full">
        <div className="relative h-48">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-5xl text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </div>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-xl text-gray-100">Industry Transition</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-gray-400">
            For professionals transitioning between different fields.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
              <span className="text-gray-300">Custom Transition Roadmap</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
              <span className="text-gray-300">Transferable Skills Mapping</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
              <span className="text-gray-300">Resume & LinkedIn Overhaul</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 mt-auto">
          <div className="text-sm text-gray-300">Price: ₹5999/-</div>
          <Link href="sevenopp\indus-trans" className="w-full">
            <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white">
              Know More <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>

      {/* Back-to-Work Package - Pink */}
      <Card className="bg-gray-900/50 border-gray-800 hover:border-pink-500/50 transition-all overflow-hidden flex flex-col h-full">
        <div className="relative h-48">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-rose-600/20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-5xl text-pink-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                <path d="M18 16h-4l-2 3-2-3H6"></path>
              </svg>
            </div>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-xl text-gray-100">Back-to-Work</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-gray-400">
            For professionals returning after a career break.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-pink-400 mr-2 mt-0.5" />
              <span className="text-gray-300">Confidence Rebuilding</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-pink-400 mr-2 mt-0.5" />
              <span className="text-gray-300">Job Market Re-Entry Strategy</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-pink-400 mr-2 mt-0.5" />
              <span className="text-gray-300">Technical Upskilling</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 mt-auto">
          <div className="text-sm text-gray-300">Price: ₹5999/-</div>
          <Link href="sevenopp\back-to-work" className="w-full">
            <Button className="w-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white">
              Know More <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>

      {/* Personal Branding Package - Green */}
      <Card className="bg-gray-900/50 border-gray-800 hover:border-green-500/50 transition-all overflow-hidden flex flex-col h-full">
        <div className="relative h-48">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-600/20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-5xl text-green-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-10 0z"></path>
                <path d="M16.5 16.5a9 9 0 1 0-9-9"></path>
                <path d="M12 12v9"></path>
                <path d="M15 12h6"></path>
              </svg>
            </div>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-xl text-gray-100">Personal Branding</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-gray-400">
            For corporate professionals, freelancers, and entrepreneurs.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
              <span className="text-gray-300">High Impact Personal Brand</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
              <span className="text-gray-300">LinkedIn Optimization</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
              <span className="text-gray-300">Consulting Skills</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 mt-auto">
          <div className="text-sm text-gray-300">Price: ₹5999/-</div>
          <Link href="sevenopp\person-brand" className="w-full">
            <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white">
              Know More <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>

      {/* Digital Upskilling Package - Yellow */}
      <Card className="bg-gray-900/50 border-gray-800 hover:border-yellow-500/50 transition-all overflow-hidden flex flex-col h-full">
        <div className="relative h-48">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-amber-600/20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-5xl text-yellow-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                <circle cx="12" cy="8" r="2"></circle>
                <path d="M15 13a3 3 0 1 0-6 0"></path>
              </svg>
            </div>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-xl text-gray-100">Digital Upskilling</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-gray-400">
            For workers transitioning to white-collar digital roles.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" />
              <span className="text-gray-300">Digital Tools Mastery</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" />
              <span className="text-gray-300">Role-Specific Training</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" />
              <span className="text-gray-300">Workplace Communication</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 mt-auto">
          <div className="text-sm text-gray-300">Price: ₹2499/-</div>
          <Link href="sevenopp\digi-upskill" className="w-full">
            <Button className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white">
              Know More <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>

      {/* Upskilling Future Generations Package - Orange */}
      <Card className="bg-gray-900/50 border-gray-800 hover:border-orange-500/50 transition-all overflow-hidden flex flex-col h-full">
        <div className="relative h-48">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-600/20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-5xl text-orange-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
                <path d="M8.5 8.5v.01"></path>
                <path d="M16 15.5v.01"></path>
                <path d="M12 12v.01"></path>
                <path d="M11 17v.01"></path>
                <path d="M7 14v.01"></path>
              </svg>
            </div>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-xl text-gray-100">Upskilling Future Generations</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-gray-400">
            For kids (8+) and parents to learn AI fundamentals together.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-orange-400 mr-2 mt-0.5" />
              <span className="text-gray-300">Foundational AI Literacy</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-orange-400 mr-2 mt-0.5" />
              <span className="text-gray-300">Critical Thinking Skills</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-orange-400 mr-2 mt-0.5" />
              <span className="text-gray-300">Interactive Learning</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 mt-auto">
          <div className="text-sm text-gray-300">Price: ₹5999/-</div>
          <Link href="sevenopp\upskill-fut" className="w-full">
            <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white">
              Know More <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  </div>
</section>

        {/* About Section */}
        <AboutSection />

        {/* Final CTA Section */}
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-900 to-gray-950 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-500 opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-cyan-500 opacity-20 blur-3xl"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                  Ready to transform your skills?
                </h2>
                <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of professionals who are future-proofing their careers with The Neo Veda Academy.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="https://v0-saas-landing-page-updates.vercel.app/">
                  <Button className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 text-white border-0">
                    Start Your Journey <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://www.surveymonkey.com/r/VNYZ55R" target="_blank">
                  <Button
                    variant="outline"
                    className="inline-flex h-10 items-center justify-center rounded-md border-gray-700 bg-transparent px-8 text-gray-300 hover:bg-gray-800 hover:text-gray-50"
                  >
                    Schedule a Demo <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-gray-400">No commitments. Learn at your own pace.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-gray-800 py-8 md:py-12 lg:py-16 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-4 lg:gap-6 lg:grid-cols-5 items-start">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-04%2022.06.43%20-%20A%20futuristic%2C%20minimalist%20logo%20for%20%27The%20Neo%20Veda%20Academy%27.%20The%20design%20features%20sleek%2C%20modern%20typography%20with%20a%20glowing%20ambient%20blur%20effect.%20The%20color%20p.jpg-u5KPrysR5mjA8ySlPXVK1WJYI1mmH4.jpeg"
                  alt="The Neo Veda Academy Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-xl font-bold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                  The Neo Veda Academy
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-400 max-w-xs">
                Where passion meets excellence. Empowering professionals with future-ready skills through AI-enhanced
                learning.
              </p>
              <div className="mt-4 flex gap-4">
                <Link href="#" className="text-gray-500 hover:text-cyan-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-100">Programs</h3>
              <ul className="mt-4 grid gap-2 text-sm">
                <li>
                  <Link href="#it-process-business" className="text-gray-400 hover:text-cyan-400">
                    IT Process & Business Certifications
                  </Link>
                </li>
                <li>
                  <Link href="#tech-finance" className="text-gray-400 hover:text-cyan-400">
                    Tech & Finance Academy
                  </Link>
                </li>
                <li>
                  <Link href="#human-capital" className="text-gray-400 hover:text-cyan-400">
                    Human Capital & HR Trainings
                  </Link>
                </li>
                <li>
                  <Link href="#career-development" className="text-gray-400 hover:text-cyan-400">
                    Career Development Packages
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-100">Resources</h3>
              <ul className="mt-4 grid gap-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-cyan-400">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.surveymonkey.com/r/VNYZ55R"
                    target="_blank"
                    className="text-gray-400 hover:text-cyan-400"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-100">Contact</h3>
              <ul className="mt-4 grid gap-3 text-sm">
                <li className="flex items-start gap-2">
                  <Mail className="h-5 w-5 text-cyan-400 mt-0.5" />
                  <span className="text-gray-400">theneovedaacademy@gmail.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="h-5 w-5 text-cyan-400 mt-0.5" />
                  <div className="text-gray-400">
                    <p>(+91) 8147884482</p>
                    <p>(+1) 689 240 9966</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Globe className="h-5 w-5 text-cyan-400 mt-0.5" />
                  <Link
                    href="https://theneovedaacademy.in/"
                    // target="_blank"
                    className="text-gray-400 hover:text-cyan-400"
                  >
                    theneovedaacademy.in
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} The Neo Veda Academy. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs text-gray-500">
              <Link href="#" className="hover:text-cyan-400">
                Terms
              </Link>
              <Link href="#" className="hover:text-cyan-400">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <RegistrationDialog open={registrationOpen} onOpenChange={setRegistrationOpen} />
    </div>
  )
}
