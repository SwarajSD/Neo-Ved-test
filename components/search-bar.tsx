"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

// Sample course data - this would typically come from an API or database
const courses = [
  // ITIL Courses
  { id: 1, name: "ITIL® Awareness", category: "ITIL" },
  { id: 2, name: "ITIL® 4 Foundation", category: "ITIL" },
  { id: 3, name: "ITIL® 4 Create, Deliver & Support", category: "ITIL" },
  { id: 4, name: "ITIL® 4 High Velocity IT", category: "ITIL" },
  { id: 5, name: "ITIL® 4 Direct, Plan & Improve", category: "ITIL" },

  // Lean IT Courses
  { id: 6, name: "Lean IT Foundation", category: "Lean IT" },
  { id: 7, name: "Lean IT Kaizen Lead", category: "Lean IT" },
  { id: 8, name: "Lean IT Leadership", category: "Lean IT" },

  // Lean Six Sigma Courses
  { id: 9, name: "Lean Six Sigma Yellow Belt", category: "Lean Six Sigma" },
  { id: 10, name: "Lean Six Sigma Green Belt", category: "Lean Six Sigma" },
  { id: 11, name: "Lean Six Sigma Black Belt", category: "Lean Six Sigma" },

  // SAFe Courses
  { id: 12, name: "Leading SAFe®", category: "SAFe" },
  { id: 13, name: "SAFe® for Teams", category: "SAFe" },
  { id: 14, name: "SAFe® Lean Portfolio Management", category: "SAFe" },

  // DevOps Courses
  { id: 15, name: "DevOps Bootcamp", category: "DevOps" },
  { id: 16, name: "DASA DevOps Fundamentals", category: "DevOps" },
  { id: 17, name: "DevOps Simulation – The Phoenix Project", category: "DevOps" },

  // Agile & Scrum Courses
  { id: 18, name: "Scrum Master", category: "Agile & Scrum" },
  { id: 19, name: "Agile Scrum Foundation", category: "Agile & Scrum" },
  { id: 20, name: "Certified Scrum Developer® (CSD)", category: "Agile & Scrum" },
]

export function SearchBar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="relative w-full max-w-sm">
        <Button
          variant="outline"
          className="relative h-9 w-full justify-start rounded-md border border-gray-700 bg-gray-900/80 text-sm text-gray-400 shadow-sm sm:pr-12 md:w-40 lg:w-64"
          onClick={() => setOpen(true)}
        >
          <span className="inline-flex">
            <Search className="mr-2 h-4 w-4" />
            Search courses...
          </span>
          <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border border-gray-700 bg-gray-800 px-1.5 font-mono text-[10px] font-medium text-gray-400 opacity-100 sm:flex">
            ⌘K
          </kbd>
        </Button>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search all courses..." />
        <CommandList>
          <CommandEmpty>No courses found.</CommandEmpty>
          {Object.entries(
            courses.reduce(
              (acc, course) => {
                acc[course.category] = acc[course.category] || []
                acc[course.category].push(course)
                return acc
              },
              {} as Record<string, typeof courses>,
            ),
          ).map(([category, categoryCourses]) => (
            <CommandGroup key={category} heading={category}>
              {categoryCourses.map((course) => (
                <CommandItem
                  key={course.id}
                  onSelect={() => {
                    // Handle course selection - could navigate to course page
                    console.log(`Selected course: ${course.name}`)
                    setOpen(false)
                  }}
                >
                  <Search className="mr-2 h-4 w-4 text-gray-400" />
                  <span>{course.name}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}
