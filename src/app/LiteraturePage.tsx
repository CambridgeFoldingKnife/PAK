import { useState } from "react"
import { Link } from "react-router"
import Navbar from "@/app/components/Navbar"
import ScrollReveal from "@/app/components/ScrollReveal"

const tabs = [
  { key: "all", label: "全部" },
  { key: "book", label: "AK经典教材" },
  { key: "note", label: "PAK课程讲义" },
  { key: "manual", label: "AK科普手册" },
  { key: "video", label: "教学视频" },
  { key: "chart", label: "挂图/图谱" },
  { key: "recommend", label: "推荐书单" },
  { key: "ima", label: "ima知识库" },
]

const imaImages = [
  { src: "/assets/ima下载.png", alt: "ima 下载" },
  { src: "/assets/【PAK专业应用肌动学文献】知识码.png", alt: "PAK专业应用肌动学文献知识码" },
]

const resources = [
  {
    type: "manual",
    typeLabel: "PDF",
    title: "ICAK-USA Status Statement",
    source: "ICAK-USA",
    action: "下载",
  },
  {
    type: "book",
    typeLabel: "教材",
    title: "AK 100-Hour Course教材",
    source: "ICAK-USA",
    action: "下载",
  },
  {
    type: "note",
    typeLabel: "讲义",
    title: "DÄGAK课程讲义",
    source: "DÄGAK",
    action: "下载",
  },
  {
    type: "book",
    typeLabel: "教材",
    title: "Applied Kinesiology Synopsis",
    source: "David Walther",
    action: "购买",
  },
  {
    type: "chart",
    typeLabel: "图谱",
    title: "AK肌肉测试挂图",
    source: "ICAK-USA",
    action: "下载",
  },
]

const typeStyles: Record<string, string> = {
  PDF: "bg-[#fee2e2] text-[#991b1b]",
  教材: "bg-[#dbeafe] text-[#1e40af]",
  讲义: "bg-[#fef3c7] text-[#92400e]",
  视频: "bg-[#d1fae5] text-[#065f46]",
  图谱: "bg-[#e0e7ff] text-[#3730a3]",
  书单: "bg-[#f3e8ff] text-[#6b21a8]",
}

export default function LiteraturePage() {
  const [activeTab, setActiveTab] = useState("all")

  const filtered =
    activeTab === "all"
      ? resources
      : resources.filter((r) => r.type === activeTab)

  return (
    <div className="min-h-screen bg-background text-foreground font-['Inter',sans-serif] overflow-x-hidden">
      <Navbar />

      <main>
        {/* Hero */}
        <ScrollReveal>
          <section className="pt-32 lg:pt-40 pb-16">
            <div className="max-w-[1200px] mx-auto px-6">
              <p className="font-['Inter',sans-serif] text-xs font-medium tracking-[0.15em] uppercase text-accent mb-6">
                Learning Resources
              </p>
              <h1 className="font-['Playfair_Display',serif] text-5xl lg:text-6xl font-semibold leading-[1.12] text-foreground mb-6">
                学习资源
              </h1>
              <p className="font-['Inter',sans-serif] text-base text-[#6B6B62] leading-relaxed max-w-[620px]">
                教材、讲义、图谱与推荐书单
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* Tabs & Grid */}
        <section className="pb-24 lg:pb-36">
          <div className="max-w-[1200px] mx-auto px-6">
            <ScrollReveal>
              <div className="flex flex-wrap gap-3 justify-center mb-12">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                      activeTab === tab.key
                        ? "bg-accent text-accent-foreground border-accent"
                        : "bg-[#F5F5F0] text-[#6B6B62] border-border hover:border-accent/40 hover:text-foreground"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </ScrollReveal>

            {activeTab === "ima" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {imaImages.map((img, i) => (
                  <ScrollReveal key={img.src} delay={i * 0.05}>
                    <a
                      href={img.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-[#F5F5F0] border border-border rounded-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                    >
                      <div className="aspect-[4/3] w-full bg-[#E6E6E0] flex items-center justify-center p-4">
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <p className="px-4 py-3 font-['Inter',sans-serif] text-sm text-[#6B6B62] text-center">
                        {img.alt}
                      </p>
                    </a>
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((item, i) => (
                  <ScrollReveal key={item.title} delay={i * 0.05}>
                    <div className="bg-[#F5F5F0] border border-border rounded-sm p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                      <span
                        className={`inline-block px-2.5 py-1 rounded text-xs font-semibold mb-4 ${
                          typeStyles[item.typeLabel] || "bg-[#EEEEE9] text-[#4A4A45]"
                        }`}
                      >
                        {item.typeLabel}
                      </span>
                      <h3 className="font-['Playfair_Display',serif] text-lg font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="font-['Inter',sans-serif] text-sm text-[#9B9B90] mb-6">
                        来源：{item.source}
                      </p>
                      <button className="inline-flex items-center px-4 py-2 border border-accent text-accent font-['Inter',sans-serif] text-sm font-medium rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors duration-200">
                        {item.action}
                      </button>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            )}

          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#E6E6E0] py-20 lg:py-28">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-4xl font-semibold leading-[1.2] text-foreground mb-5">
              需要更多学习支持？
            </h2>
            <p className="font-['Inter',sans-serif] text-base text-[#6B6B62] mb-10 max-w-[520px] mx-auto leading-relaxed">
              联系课程顾问，获取推荐书单与配套学习资料。
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-['Inter',sans-serif] text-sm font-medium rounded-sm hover:bg-[#4A7F7B] transition-colors duration-200"
            >
              课程咨询
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-[#1C1C1A] py-10">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="font-['Inter',sans-serif] text-xs text-[#4A4A45]">
            © 2026 PAK 健衡学园. 保留所有权利。
          </p>
        </div>
      </footer>
    </div>
  )
}
