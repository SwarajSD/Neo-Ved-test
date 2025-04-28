"use client"

import type React from "react"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail } from "lucide-react"

interface RegistrationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function RegistrationDialog({ open, onOpenChange }: RegistrationDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
    setSubmitted(true)
  }

  const handleEmailClick = () => {
    const subject = encodeURIComponent(`Inquiry about ${formData.interest || "your services"}`)
    const body = encodeURIComponent(
      `Hello,\n\nI'm interested in learning more about ${formData.interest || "your services"}.\n\nName: ${formData.name || "[Your Name]"}\nPhone: ${formData.phone || "[Your Phone]"}\n\nLooking forward to hearing from you.\n\nBest regards,\n${formData.name || "[Your Name]"}`,
    )
    window.location.href = `mailto:theneovedaacademy@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-gray-950 border-gray-800">
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-gray-100">Get Started</DialogTitle>
              <DialogDescription className="text-gray-400">
                Fill in your details to begin your learning journey with The Neo Veda Academy.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-200">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  className="bg-gray-900 border-gray-800 text-gray-100"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-200">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-900 border-gray-800 text-gray-100"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-200">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="bg-gray-900 border-gray-800 text-gray-100"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="interest" className="text-gray-200">
                  Interested In
                </Label>
                <Select
                  value={formData.interest}
                  onValueChange={(value) => setFormData({ ...formData, interest: value })}
                >
                  <SelectTrigger className="bg-gray-900 border-gray-800 text-gray-100">
                    <SelectValue placeholder="Select a program" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-gray-800">
                    <SelectItem value="group-training">Group Training (₹299/session)</SelectItem>
                    <SelectItem value="basic-consultation">Basic Consultation (₹999/session)</SelectItem>
                    <SelectItem value="premium-consultation">Premium Consultation (₹2499/session)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white"
              >
                Submit
              </Button>
            </form>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-gray-100">Thank You!</DialogTitle>
              <DialogDescription className="text-gray-400">
                Please send us an email to complete your registration.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col items-center justify-center py-6 space-y-4">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <p className="text-center text-gray-300">
                Click the button below to send an email to{" "}
                <span className="text-cyan-400">theneovedaacademy@gmail.com</span> with your details.
              </p>
            </div>
            <DialogFooter>
              <Button
                onClick={handleEmailClick}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white"
              >
                Send Email
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
