import { useState, useMemo } from "react"
import faqData from "@/data/faq"
import type { FAQItem } from "@/data/faq-types"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion"
import { Input } from "@/app/components/ui/input"
import { Badge } from "@/app/components/ui/badge"

function highlightText(text: string, query: string): string {
  if (!query.trim()) return text
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  return text.replace(
    new RegExp(`(${escaped})`, "gi"),
    "<mark class='bg-accent/25 text-foreground rounded-sm px-0.5'>$1</mark>"
  )
}

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState(faqData[0]?.id ?? "")
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const currentCategory = useMemo(
    () => faqData.find((c) => c.id === activeCategory) ?? faqData[0],
    [activeCategory]
  )

  const filteredItems: FAQItem[] = useMemo(() => {
    if (!searchQuery.trim()) return currentCategory.items
    const q = searchQuery.toLowerCase()
    const allItems = searchQuery.trim()
      ? faqData.flatMap((c) => c.items)
      : currentCategory.items
    return allItems.filter(
      (item) =>
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.keywords.some((k) => k.toLowerCase().includes(q))
    )
  }, [searchQuery, currentCategory])

  const relatedById = useMemo(() => {
    const map = new Map<string, FAQItem>()
    faqData.forEach((c) => c.items.forEach((item) => map.set(item.id, item)))
    return map
  }, [])

  const handleRelatedClick = (rid: string) => {
    const cat = faqData.find((c) => c.items.some((i) => i.id === rid))
    if (cat) setActiveCategory(cat.id)
    setSearchQuery("")
    setExpandedItems((prev) => (prev.includes(rid) ? prev : [...prev, rid]))
  }

  return (
    <section id="faq" className="max-w-[1200px] mx-auto px-6 py-24 lg:py-36">
      {/* Header */}
      <div className="mb-14">
        <p className="font-['Inter',sans-serif] text-xs font-medium tracking-[0.15em] uppercase text-accent mb-4">
          常见问题
        </p>
        <h2 className="font-['Playfair_Display',serif] text-4xl lg:text-5xl font-semibold leading-[1.15] text-foreground mb-5">
          关于 PAK，你想知道的都在这里
        </h2>
        <p className="font-['Inter',sans-serif] text-base text-[#6B6B62] leading-relaxed max-w-[560px]">
          从基础概念到认证路径，从临床技术到报名咨询——
          我们整理了学员最常问的问题，帮助你快速了解应用肌动学。
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-10 max-w-[520px]">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9B9B90]"
          width="16" height="16" viewBox="0 0 16 16" fill="none"
        >
          <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.3" />
          <line x1="11" y1="11" x2="14.5" y2="14.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
        <Input
          type="text"
          placeholder="搜索问题关键词，如：认证、肌肉测试、费用..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-11 h-12 bg-[#EEEEE9] border-border text-sm font-['Inter',sans-serif] placeholder:text-[#9B9B90] focus-visible:ring-accent rounded-sm"
        />
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-12 border-b border-border pb-4">
        {faqData.map((cat) => (
          <button
            key={cat.id}
            onClick={() => { setActiveCategory(cat.id); setSearchQuery("") }}
            className={`px-4 py-2 font-['Inter',sans-serif] text-sm rounded-sm transition-colors duration-200 ${
              activeCategory === cat.id
                ? "bg-foreground text-[#F5F5F0]"
                : "text-[#6B6B62] hover:text-foreground hover:bg-[#E6E6E0]"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Category desc */}
      {!searchQuery.trim() && (
        <p className="font-['Inter',sans-serif] text-sm text-[#6B6B62] mb-8">
          {currentCategory.description}
        </p>
      )}

      {/* Search result count */}
      {searchQuery.trim() && (
        <p className="font-['Inter',sans-serif] text-sm text-[#6B6B62] mb-8">
          搜索 "{searchQuery}" 找到 {filteredItems.length} 个相关问题
          {filteredItems.length === 0 && "，请尝试其他关键词"}
        </p>
      )}

      {/* FAQ Accordion */}
      {filteredItems.length > 0 && (
        <Accordion
          type="multiple"
          value={expandedItems}
          onValueChange={setExpandedItems}
          className="border border-border divide-y divide-border"
        >
          {filteredItems.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-0">
              <AccordionTrigger className="px-8 py-5 hover:bg-[#E6E6E0]/50 transition-colors duration-150 font-['Inter',sans-serif] text-base font-medium text-foreground hover:no-underline data-[state=open]:bg-[#E6E6E0]/40">
                <span
                  className="text-left"
                  dangerouslySetInnerHTML={{
                    __html: searchQuery.trim() ? highlightText(item.question, searchQuery) : item.question,
                  }}
                />
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 pt-2">
                <div className="font-['Inter',sans-serif] text-sm text-[#4A4A45] leading-relaxed whitespace-pre-line">
                  {item.answer}
                </div>

                {/* Keywords */}
                {item.keywords.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-5">
                    {item.keywords.map((kw) => (
                      <Badge
                        key={kw} variant="secondary"
                        className="font-['Inter',sans-serif] text-xs cursor-pointer hover:bg-accent/20 transition-colors rounded-sm"
                        onClick={() => setSearchQuery(kw)}
                      >
                        {kw}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Related questions */}
                {item.related.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-border/60">
                    <p className="font-['Inter',sans-serif] text-xs font-medium text-[#9B9B90] mb-3">相关问题</p>
                    <div className="flex flex-wrap gap-2">
                      {item.related.map((rid) => {
                        const related = relatedById.get(rid)
                        if (!related) return null
                        return (
                          <button
                            key={rid}
                            className="font-['Inter',sans-serif] text-xs text-accent hover:text-[#4A7F7B] underline underline-offset-2 transition-colors text-left"
                            onClick={() => handleRelatedClick(rid)}
                          >
                            {related.question}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}

      {/* Empty state */}
      {filteredItems.length === 0 && (
        <div className="text-center py-20">
          <p className="font-['Inter',sans-serif] text-[#9B9B90] text-base mb-4">
            没有找到与 "{searchQuery}" 相关的问题
          </p>
          <p className="font-['Inter',sans-serif] text-sm text-[#B0B0A8]">
            试试搜索：认证、肌肉测试、费用、慢性疼痛
          </p>
        </div>
      )}
    </section>
  )
}
