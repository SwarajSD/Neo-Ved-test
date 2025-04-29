'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

type FAQItem = {
  id: string
  question: string
  answer: string | React.ReactNode
}

type FAQSectionProps = {
  title?: string
  faqs: FAQItem[]
  className?: string
  titleClassName?: string
  itemClassName?: string
  triggerClassName?: string
  contentClassName?: string
  viewAllLink?: {
    href: string
    text?: string
    className?: string
  }
}

export function FAQSection({ 
  title = "Frequently Asked Questions", 
  faqs, 
  className = "",
  titleClassName = "",
  itemClassName = "border-b border-gray-200 dark:border-gray-700",
  triggerClassName = "py-4 hover:no-underline text-left font-medium",
  contentClassName = "pb-4 text-gray-600 dark:text-gray-300",
  viewAllLink
}: FAQSectionProps) {
  return (
    <section className={`max-w-4xl mx-auto ${className}`}>
      {title && (
        <h2 className={`text-3xl font-bold text-center mb-8 ${titleClassName}`}>
          {title}
        </h2>
      )}
      
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq) => (
          <AccordionItem 
            key={faq.id} 
            value={faq.id}
            className={itemClassName}
          >
            <AccordionTrigger className={triggerClassName}>
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className={contentClassName}>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {viewAllLink && (
        <div className="mt-8 text-center">
          <Link 
            href={viewAllLink.href}
            className={`text-primary-600 hover:underline ${viewAllLink.className || ''}`}
          >
            {viewAllLink.text || 'View all FAQs'}
          </Link>
        </div>
      )}
    </section>
  )
}