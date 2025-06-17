"use client"

import { NavigationMenuLink } from "@/components/ui/navigation-menu"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { ExternalLink } from "lucide-react"

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* IT Process & Business Certifications */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-cyan-400 hover:bg-gray-800">
            IT Process & Business Certifications
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[400px] p-4 bg-gray-950/80 backdrop-blur-md border border-gray-800 transition-all duration-200 ease-in-out">
              <div>
                <h3 className="text-lg font-medium text-cyan-400 mb-3">IT Process & Business Certifications</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Master IT governance, project management, and digital transformation with our expert-led programs.
                </p>
                <ul className="grid gap-3">
                  <ListItem title="IT Service Management & Governance" href="/it-process-business/it-service" />
                  <ListItem title="Project & Program Management" href="/it-process-business/project-program" />
                  <ListItem title="Quality & Process Improvement" href="/it-process-business/quality-process" />
                  <ListItem title="Risk & Security Management" href="/it-process-business/risk-security" />
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <Link
                    href="/it-process-business"
                    className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center"
                    target="_blank"
                  >
                    Know More
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Tech & Finance Academy */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-cyan-400 hover:bg-gray-800">
            Tech & Finance Academy
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[400px] p-4 bg-gray-950/80 backdrop-blur-md border border-gray-800 transition-all duration-200 ease-in-out">
              <div>
                <h3 className="text-lg font-medium text-cyan-400 mb-3">Tech & Finance Academy</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Master in-demand tech and finance skills to launch or advance your career in these high-growth fields.
                </p>
                <ul className="grid gap-3">
                  <ListItem title="IT & Development" href="/tech-finance/it-dev" />
                  <ListItem title="Finance & Analytics" href="/tech-finance" />
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <Link
                    href="/tech-finance"
                    className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center"
                    target="_blank"
                  >
                    Know More
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Human Capital & HR Trainings */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-cyan-400 hover:bg-gray-800">
            Human Capital & HR Trainings
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[400px] p-4 bg-gray-950/80 backdrop-blur-md border border-gray-800 transition-all duration-200 ease-in-out">
              <div>
                <h3 className="text-lg font-medium text-cyan-400 mb-3">Human Capital & HR Trainings</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Develop critical HR expertise and leadership capabilities for organizational success.
                </p>
                <ul className="grid gap-3">
                  <ListItem title="Behavioral Training" href="/human-capital/behavioral" />
                  <ListItem title="HR Professional Development" href="/human-capital/hr-professional" />
                  <ListItem title="Leadership Development" href="/human-capital/leadership-dev" />
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <Link
                    href="/human-capital"
                    className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center"
                    target="_blank"
                  >
                    Know More
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Corporate Gen AI Training - Know More Link Updated */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-cyan-400 hover:bg-gray-800">
            Corporate Gen AI Training
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[400px] p-4 bg-gray-950/80 backdrop-blur-md border border-gray-800 transition-all duration-200 ease-in-out">
              <div>
                <h3 className="text-lg font-medium text-cyan-400 mb-3">Corporate Gen AI Training</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Empower your workforce with comprehensive Generative AI skills and strategies.
                </p>
                <ul className="grid gap-3">
                  <ListItem title="About Gen AI Training" href="/corporate-gen-ai/about" />
                  <ListItem title="Training Programs" href="/corporate-gen-ai/training" />
                  <ListItem title="Workshops" href="/corporate-gen-ai/workshop" />
                  <ListItem title="Client Experience" href="/corporate-gen-ai/experience" />
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <Link
                    href="https://v0-neon-ai-portfolio.vercel.app/" // Updated href to the new website
                    className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center"
                  >
                    Know More
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Career Development Packages */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-cyan-400 hover:bg-gray-800">
            Career Development Packages
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[400px] p-4 bg-gray-950/80 backdrop-blur-md border border-gray-800 transition-all duration-200 ease-in-out">
              <div>
                <h3 className="text-lg font-medium text-cyan-400 mb-3">Career Development Packages</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Tailored programs for every career stage - from students to executives.
                </p>
                <ul className="grid gap-3">
                  <ListItem title="Graduate Launch Package" href="/career-development/grad-launch" />
                  <ListItem title="Career Accelerator Package" href="/career-development/carr-acc" />
                  <ListItem title="Executive Growth Package" href="/career-development/exec-grow" />
                  <ListItem title="Career Transition Package" href="/career-development/carr-tran" />
                  {/* NEW ELEMENT ADDED HERE */}
                  <ListItem title="Digital Upskilling Package" href="/career-development/digital-upskill" />
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <Link
                    href="/career-development"
                    className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center"
                    target="_blank"
                  >
                    Know More
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* About Us */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-cyan-400 hover:bg-gray-800">
            About Us
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[400px] p-4 bg-gray-950/80 backdrop-blur-md border border-gray-800 transition-all duration-200 ease-in-out">
              <div>
                <h3 className="text-lg font-medium text-cyan-400 mb-3">About Us</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Learn more about The Neo Veda Academy and our mission to transform professional education.
                </p>
                <ul className="grid gap-3">
                  <ListItem title="Mission" href="#mission" />
                  <ListItem title="Vision" href="#vision" />
                  <ListItem title="Our Approach" href="#approach" />
                  <ListItem title="Our Team" href="#team" />
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-cyan-400",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none text-gray-100">{title}</div>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"