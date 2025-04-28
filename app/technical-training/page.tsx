import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function TechnicalTrainingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold">TrainingPro</h1>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Solutions
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Courses
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              About Us
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline">Sign Up</Button>
            <Button>Contact</Button>
          </div>
        </nav>
      </header>

      {/* Page Header */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Technical Training Programs</h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Comprehensive technical training solutions to enhance your team's skills and capabilities.
            </p>
            <Link href="/" className="mt-6">
              <Button variant="outline">Back to Home</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Accordion type="single" collapsible className="space-y-6">
            {/* ITIL */}
            <AccordionItem value="item-1" className="border rounded-lg p-4">
              <AccordionTrigger className="text-xl font-semibold">
                1. ITIL® (Information Technology Infrastructure Library)
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-6 list-disc">
                  <li>ITIL® Awareness</li>
                  <li>ITIL® 4 Foundation</li>
                  <li>ITIL® 4 Create, Deliver & Support</li>
                  <li>ITIL® 4 High Velocity IT</li>
                  <li>ITIL® 4 Direct, Plan & Improve</li>
                  <li>ITIL® 4 Digital & IT Strategy</li>
                  <li>ITIL® 4 Specialist Drive Stakeholder Value</li>
                  <li>ITIL® 4 Specialist Acquiring & Managing Cloud Services</li>
                  <li>ITIL® 4 Specialist Sustainability In Digital & IT</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Lean IT */}
            <AccordionItem value="item-2" className="border rounded-lg p-4">
              <AccordionTrigger className="text-xl font-semibold">2. Lean IT</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-6 list-disc">
                  <li>Lean IT Foundation</li>
                  <li>Lean IT Kaizen Lead</li>
                  <li>Lean IT Leadership</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Lean Six Sigma */}
            <AccordionItem value="item-3" className="border rounded-lg p-4">
              <AccordionTrigger className="text-xl font-semibold">3. Lean Six Sigma</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-6 list-disc">
                  <li>Lean Six Sigma Yellow Belt</li>
                  <li>Lean Six Sigma Team Member</li>
                  <li>Lean Six Sigma Project Selection Process</li>
                  <li>Lean Six Sigma Green Belt</li>
                  <li>Lean Six Sigma Champion</li>
                  <li>Lean Six Sigma Black Belt</li>
                  <li>Lean Six Sigma Awareness</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* SAFe */}
            <AccordionItem value="item-4" className="border rounded-lg p-4">
              <AccordionTrigger className="text-xl font-semibold">4. SAFe® (Scaled Agile Framework)</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-6 list-disc">
                  <li>Leading SAFe®</li>
                  <li>SAFe® for Teams</li>
                  <li>SAFe® Lean Portfolio Management</li>
                  <li>SAFe® Agile Software Engineering</li>
                  <li>SAFe® for Architects</li>
                  <li>SAFe® Advanced Scrum Master</li>
                  <li>SAFe® DevOps Practitioner</li>
                  <li>SAFe® Scrum Master</li>
                  <li>SAFe® Product Owner / Product Manager</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* PMP */}
            <AccordionItem value="item-5" className="border rounded-lg p-4">
              <AccordionTrigger className="text-xl font-semibold">
                5. PMP® (Project Management Professional)
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-6 list-disc">
                  <li>PMP® Project Management Professional</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* DevOps */}
            <AccordionItem value="item-6" className="border rounded-lg p-4">
              <AccordionTrigger className="text-xl font-semibold">6. DevOps</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-6 list-disc">
                  <li>DevOps Bootcamp</li>
                  <li>DevOps Simulation – The Phoenix Project</li>
                  <li>DevOps & IT Service Management</li>
                  <li>DASA DevOps Fundamentals</li>
                  <li>DASA DevOps Professional: Enable and Scale</li>
                  <li>DASA DevOps Product Owner</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* ISO/IEC 20000 */}
            <AccordionItem value="item-7" className="border rounded-lg p-4">
              <AccordionTrigger className="text-xl font-semibold">7. ISO/IEC 20000</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-6 list-disc">
                  <li>ISO/IEC 20000 Foundation</li>
                  <li>ISO/IEC 20000 Auditor</li>
                  <li>ISO/IEC 20000 Practitioner</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Agile & Scrum */}
            <AccordionItem value="item-8" className="border rounded-lg p-4">
              <AccordionTrigger className="text-xl font-semibold">8. Agile & Scrum</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-6 list-disc">
                  <li>Certified Scrum Developer® (CSD)</li>
                  <li>PMI Agile Certified Practitioner</li>
                  <li>Scrum Product Owner</li>
                  <li>Advanced Agile Scrum Product Owner</li>
                  <li>Scrum Master</li>
                  <li>Agile Scrum Foundation</li>
                  <li>Agile Awareness</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* COBIT */}
            <AccordionItem value="item-9" className="border rounded-lg p-4">
              <AccordionTrigger className="text-xl font-semibold">9. COBIT®</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-6 list-disc">
                  <li>COBIT® 2019 Foundation Bridge</li>
                  <li>COBIT® 2019 Foundation</li>
                  <li>COBIT® 5 Foundation</li>
                  <li>COBIT® 5 Assessor</li>
                  <li>COBIT® 5 Implementation</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Business Simulation */}
            <AccordionItem value="item-10" className="border rounded-lg p-4">
              <AccordionTrigger className="text-xl font-semibold">10. Business Simulation</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-6 list-disc">
                  <li>Lean IT Simulation Game – Crazy Kitchen</li>
                  <li>ITIL® 4 Business Simulation – MarsLander</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* SDI Service Desk */}
            <AccordionItem value="item-11" className="border rounded-lg p-4">
              <AccordionTrigger className="text-xl font-semibold">11. SDI® Service Desk</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-6 list-disc">
                  <li>SDI® Service Desk Analyst</li>
                  <li>SDI® Service Desk Manager</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Data Science */}
            <AccordionItem value="item-12" className="border rounded-lg p-4">
              <AccordionTrigger className="text-xl font-semibold">12. Data Science</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-6 list-disc">
                  <li>Enterprise Big Data Professional (EBDP)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Agile Project Management */}
            <AccordionItem value="item-13" className="border rounded-lg p-4">
              <AccordionTrigger className="text-xl font-semibold">13. Agile Project Management</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-6 list-disc">
                  <li>AgilePM® Foundation</li>
                  <li>AgilePM® Practitioner</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Cloud Computing */}
            <AccordionItem value="item-14" className="border rounded-lg p-4">
              <AccordionTrigger className="text-xl font-semibold">14. Cloud Computing</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-6 list-disc">
                  <li>Cloud Computing Fundamentals</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* SIAM */}
            <AccordionItem value="item-15" className="border rounded-lg p-4">
              <AccordionTrigger className="text-xl font-semibold">
                15. SIAM (Service Integration and Management)
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-6 list-disc">
                  <li>Service Integration and Management Foundation</li>
                  <li>Service Integration And Management Professional</li>
                  <li>Service Integration Manager</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Digital Transformation */}
            <AccordionItem value="item-16" className="border rounded-lg p-4">
              <AccordionTrigger className="text-xl font-semibold">16. Digital Transformation</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-6 list-disc">
                  <li>Digital Transformation Journey – Implementation Workshop</li>
                  <li>Digital Transformation Fundamentals</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* ISTQB */}
            <AccordionItem value="item-17" className="border rounded-lg p-4">
              <AccordionTrigger className="text-xl font-semibold">
                17. ISTQB® (International Software Testing Qualifications Board)
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-6 list-disc">
                  <li>ISTQB® Foundation</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* PRINCE2 */}
            <AccordionItem value="item-18" className="border rounded-lg p-4">
              <AccordionTrigger className="text-xl font-semibold">
                18. PRINCE2® (Projects IN Controlled Environments)
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-6 list-disc">
                  <li>PRINCE2® Foundation</li>
                  <li>PRINCE2® Practitioner</li>
                  <li>PRINCE2® Bootcamp</li>
                  <li>PRINCE2 Agile® Foundation</li>
                  <li>PRINCE2 Agile® Practitioner</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Change Management */}
            <AccordionItem value="item-19" className="border rounded-lg p-4">
              <AccordionTrigger className="text-xl font-semibold">19. Change Management</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-6 list-disc">
                  <li>Change Management Foundation</li>
                  <li>Change Management Practitioner</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Sourcing Governance */}
            <AccordionItem value="item-20" className="border rounded-lg p-4">
              <AccordionTrigger className="text-xl font-semibold">20. Sourcing Governance</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-6 list-disc">
                  <li>Sourcing Governance Foundation</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to enhance your team's skills?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact us today to discuss your training needs and how we can help your organization succeed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg">Contact Us</Button>
            <Button size="lg" variant="outline">
              Download Course Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TrainingPro</h3>
              <p className="text-gray-400">Professional training solutions for modern organizations.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Training Categories</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    IT Service Management
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Project Management
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Agile & DevOps
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Technical Training
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p className="text-gray-400">Email: info@trainingpro.com</p>
              <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TrainingPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
