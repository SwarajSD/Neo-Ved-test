"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900/50 relative">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-purple-600/20 rounded-full blur-3xl -z-10"></div>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-800/60 px-3 py-1 text-sm text-gray-300">About Us</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              The Neo Veda Academy
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Learn more about our mission, vision, and the team behind The Neo Veda Academy.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div id="mission" className="mb-16">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
            🌟 Mission: Empowering Passion, Elevating Excellence 🌟
          </h3>
          <p className="text-gray-300 max-w-4xl mx-auto text-center">
            At The Neo Veda Academy, our mission is to bridge the gap between knowledge and mastery by delivering
            premium, hands-on learning experiences. We believe that passion is the spark, but excellence is the
            journey—and we're here to guide that transformation with AI-driven learning paths, expert mentorship, and
            real-world application. Whether you're a professional leveling up, a student stepping in, or an entrepreneur
            scaling up, we craft personalized, impactful learning that fuels your success. 🚀
          </p>
        </div>

        {/* Vision Section */}
        <div id="vision" className="mb-16">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
            🔭 Vision: A Future Where Learning Fuels Limitless Growth 🔭
          </h3>
          <p className="text-gray-300 max-w-4xl mx-auto text-center">
            We envision a world where upskilling isn't just an option—it's a lifestyle. A place where learning adapts to
            you, mentorship is always within reach, and career growth is not just a dream but a structured, achievable
            reality. The Neo Veda Academy is here to redefine learning, making it as engaging as your favorite
            binge-watch and as rewarding as your biggest career breakthrough. We're not just teaching skills; we're
            building futures. 🔥
          </p>
        </div>

        {/* Our Approach Section */}
        <div id="approach" className="mb-16">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
            🚀 Our Approach: The Neo Veda Way—Smart, Personalized, and Impactful 🚀
          </h3>
          <p className="text-gray-300 max-w-4xl mx-auto text-center">
            Forget boring lectures and one-size-fits-all courses. At The Neo Veda Academy, we blend structured learning
            with personalized guidance, ensuring every skill you gain is practical, relevant, and career-transforming.
            Our AI-driven paths match your unique goals, industry experts provide real-world insights, and hands-on
            projects cement your knowledge. It's learning that's as dynamic as your ambitions—because when passion meets
            excellence, the possibilities are endless! 🌟
          </p>
        </div>

        {/* Team Section */}
        <div id="team" className="mt-16">
          <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">Meet Our Co-Founders</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
            {/* Co-Founder 1 - Akhila Gopala Krishnan */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-64 h-[400px] mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-xl blur-xl"></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/akhila-ROM52lGNIxJZKCgHppz7NYEi0pTE12.jpeg"
                  width={256}
                  height={400}
                  alt="Akhila Gopala Krishnan"
                  className="rounded-xl border-2 border-cyan-500 relative object-cover h-full"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-100">Akhila Gopala Krishnan</h4>
              <p className="text-cyan-400 mb-2">Co-Founder, The Neo Veda Academy</p>
              <Link
                href="https://www.linkedin.com/in/akhila-gopalakrishnan-8133a2176/"
                target="_blank"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Linkedin className="h-5 w-5 mx-auto" />
              </Link>
            </div>

            {/* Co-Founder 2 - Vipin Vijayakumaran */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-64 h-[400px] mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-xl blur-xl"></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vipin.jpg-G4JDKc6Jpz4Mxibz8sIduaJzbHUxJc.jpeg"
                  width={256}
                  height={400}
                  alt="Vipin Vijayakumaran"
                  className="rounded-xl border-2 border-cyan-500 relative object-cover h-full"
                  style={{ objectPosition: "50% 15%" }} // Adjust vertical alignment
                />
              </div>
              <h4 className="text-xl font-bold text-gray-100">Vipin Vijayakumaran</h4>
              <p className="text-cyan-400 mb-2">Co-Founder, The Neo Veda Academy</p>
              <Link
                href="https://www.linkedin.com/in/vipin-vijay-143007"
                target="_blank"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Linkedin className="h-5 w-5 mx-auto" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Link href="https://v0-saas-landing-page-updates.vercel.app/" target="_blank">
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white">
              Explore Our Services <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
