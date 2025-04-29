'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What services do you offer?</AccordionTrigger>
          <AccordionContent>
            We offer consulting, IT training, and human capital development solutions tailored to your business needs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How can I get in touch for a consultation?</AccordionTrigger>
          <AccordionContent>
            You can reach out through our contact form or use the chat popup in the lower corner of the site.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Do you provide customized training?</AccordionTrigger>
          <AccordionContent>
            Yes, we tailor our training sessions based on your team's skill level and organizational goals.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
