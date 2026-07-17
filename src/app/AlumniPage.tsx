import { useState, useMemo } from "react"
import { Link } from "react-router"
import alumniData from "@/data/alumni"
import { AlumniCard } from "@/app/components/alumni/AlumniCard"
import Navbar from "@/app/components/Navbar"

const filters = [
  { key: "all", label: "全部学员" },
  { key: "physio", label: "物理治疗与康复" },
  { key: "health", label: "健康管理" },
  { key: "holistic", label: "自然疗法" },
  { key: "sports", label: "运动与体能" },
]

const stats = [
  { value: alumniData.length, unit: "位", label: "已结业学员" },
  {
    value: new Set(alumniData.map((a) => a.location)).size,
    unit: "座",
    label: "覆盖城市",
  },
  {
    value: new Set(alumniData.flatMap((a) => a.specialties)).size,
    unit: "个",
    label: "擅长领域",
  },
]

function classify(occupation: string): string {
  if (/物理治疗|康复|整脊|正骨/.test(occupation)) return "physio"
  if (/健康管理/.test(occupation)) return "health"
  if (/自然疗法|中医|针灸/.test(occupation)) return "holistic"
  if (/运动|体能|教练|运动员|ACSM|培训师/.test(occupation)) return "sports"
  return "other"
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AlumniPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filtered = useMemo(() => {
    if (activeFilter === "all") return alumniData
    return alumniData.filter((a) => classify(a.title) === activeFilter)
  }, [activeFilter])

  const visibleOthers = alumniData.filter(
    (a) => !filters.slice(1).some((f) => classify(a.title) === f.key)
  )

  return (
    <div className="min-h-screen bg-background text-foreground font-['Inter',sans-serif] overflow-x-hidden">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-32 lg:pt-40 pb-16">
          <div className="max-w-[1200px] mx-auto px-6">
            <p className="font-['Inter',sans-serif] text-xs font-medium tracking-[0.15em] uppercase text-accent mb-6">
              Alumni · 学员风采
            </p>
            <h1 className="font-['Playfair_Display',serif] text-5xl lg:text-6xl font-semibold leading-[1.12] text-foreground mb-6">
              他们已在实践中
              <br />
              验证了 PAK 的价值
            </h1>
            <p className="font-['Inter',sans-serif] text-base text-[#6B6B62] leading-relaxed max-w-[620px]">
              来自不同执业背景的学员将应用肌动学融入各自的专业领域。
              点击任意学员卡片获取其联系方式，健衡学园将作为中间人为你对接——
              既是同行交流，也为往期学员带来更多获客机会。
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="pb-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-[#EEEEE9] px-6 py-7 text-center"
                >
                  <p className="font-['Playfair_Display',serif] text-3xl lg:text-4xl font-semibold text-accent mb-1">
                    {s.value}
                    <span className="text-lg font-normal text-[#9B9B90] ml-1">
                      {s.unit}
                    </span>
                  </p>
                  <p className="font-['Inter',sans-serif] text-xs text-[#6B6B62]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter tabs */}
        <section className="pb-6">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`px-5 py-2.5 font-['Inter',sans-serif] text-sm rounded-sm transition-colors duration-200 ${
                    activeFilter === f.key
                      ? "bg-foreground text-[#F5F5F0]"
                      : "text-[#6B6B62] hover:text-foreground hover:bg-[#E6E6E0]"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <p className="font-['Inter',sans-serif] text-xs text-[#9B9B90] mt-4">
              共 {filtered.length} 位学员
            </p>
          </div>
        </section>

        {/* Cards grid */}
        <section className="pb-24 lg:pb-36">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((a) => (
                <AlumniCard key={a.id} alumni={a} />
              ))}
            </div>

            {/* Show "other" category if visible */}
            {activeFilter === "all" && visibleOthers.length === 0 && null}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#E6E6E0] py-20 lg:py-28">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-4xl font-semibold leading-[1.2] text-foreground mb-5">
              成为下一个故事的主角
            </h2>
            <p className="font-['Inter',sans-serif] text-base text-[#6B6B62] mb-10 max-w-[520px] mx-auto leading-relaxed">
              加入 PAK 认证培训，与全国数百位优秀从业者一起，
              用应用肌动学为你的临床工作打开新的可能。
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-['Inter',sans-serif] text-sm font-medium rounded-sm hover:bg-[#4A7F7B] transition-colors duration-200"
            >
              预约课程咨询
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-[#1C1C1A] py-10">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="font-['Inter',sans-serif] text-xs text-[#4A4A45]">
            © 2024 PAK 健衡学园. 保留所有权利。
          </p>
        </div>
      </footer>
    </div>
  )
}
