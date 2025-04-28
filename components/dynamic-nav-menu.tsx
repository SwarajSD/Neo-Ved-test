"use client"

import Link from "next/link"
import { useState } from "react"

export function DynamicNavMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  const menuItems = [
    {
      title: "IT Process & Business",
      href: "/it-process-business",
      subItems: [
        { title: "ITIL & Service Management", href: "/it-process-business#itil" },
        { title: "Project Management", href: "/it-process-business#project" },
        { title: "Quality & Process Improvement", href: "/it-process-business#quality" },
      ],
    },
    {
      title: "Tech & Finance",
      href: "/tech-finance",
      subItems: [
        { title: "IT & Development", href: "/tech-finance#it" },
        { title: "Finance & Analytics", href: "/tech-finance#finance" },
      ],
    },
    {
      title: "Human Capital & HR",
      href: "/human-capital",
      subItems: [
        { title: "Behavioral Training", href: "/human-capital#behavioral" },
        { title: "HR Professional Development", href: "/human-capital#hr" },
        { title: "Leadership Development", href: "/human-capital#leadership" },
      ],
    },
    {
      title: "Career Development",
      href: "/career-development",
      subItems: [
        { title: "Graduate Launch Package", href: "/career-development#graduate" },
        { title: "Career Accelerator Package", href: "/career-development#accelerator" },
        { title: "Executive Growth Package", href: "/career-development#executive" },
      ],
    },
    {
      title: "Consulting",
      href: "/consulting",
    },
    {
      title: "FAQ",
      href: "/faq",
    },
  ]

  return (
    <nav className="flex items-center space-x-4">
      {menuItems.map((item) => (
        <div 
          key={item.title}
          className="relative"
          onMouseEnter={() => setActiveMenu(item.title)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <Link
            href={item.href}
            className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
          >
            {item.title}
            {item.subItems && (
              <span className="ml-1 inline-block transition-transform group-hover:rotate-180">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            )}
          </Link>

          {item.subItems && activeMenu === item.title && (
            <div className="absolute left-0 mt-2 w-56 origin-top-right rounded-md bg-gray-900 shadow-lg ring-1 ring-gray-800 z-50">
              <div className="py-1">
                {item.subItems.map((subItem) => (
                  <Link
                    key={subItem.title}
                    href={subItem.href}
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}