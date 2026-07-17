export interface FAQItem {
  id: string
  question: string
  answer: string
  keywords: string[]
  related: string[]
}

export interface FAQCategory {
  id: string
  label: string
  description: string
  items: FAQItem[]
}
