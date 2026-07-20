import { Link } from "react-router"
import Navbar from "@/app/components/Navbar"
import ScrollReveal from "@/app/components/ScrollReveal"

const courses = [
  {
    name: "2027 广州班 — AK应用肌动学基础课程",
    status: "open" as const,
    module: "Part I + Part II",
    instructor: "Hans Garten",
    part1: "2027年2月26-28日（3天）",
    part2: "2027年3月2-4日（3天）",
    location: "广州",
    seats: 30,
    price: "¥12,800",
    earlyBird: "¥10,800",
  },
  {
    name: "2027 北京班 — AK应用肌动学基础课程",
    status: "upcoming" as const,
    module: "Part I + Part II",
    instructor: "Hans Garten",
    part1: "2027年5月21-23日（3天）",
    part2: "2027年5月25-27日（3天）",
    location: "北京",
    seats: 30,
    price: "¥12,800",
    earlyBird: "¥10,800",
  },
  {
    name: "2027 郑州班 — AK应用肌动学基础课程",
    status: "upcoming" as const,
    module: "Part I + Part II",
    instructor: "Hans Garten",
    part1: "2027年9月10-12日（3天）",
    part2: "2027年9月14-16日（3天）",
    location: "郑州",
    seats: 30,
    price: "¥12,800",
    earlyBird: "¥10,800",
  },
  {
    name: "2027 南京班 — AK应用肌动学基础课程",
    status: "upcoming" as const,
    module: "Part I + Part II",
    instructor: "Hans Garten",
    part1: "2027年11月26-28日（3天）",
    part2: "2027年11月30-12月2日（3天）",
    location: "南京",
    seats: 30,
    price: "¥12,800",
    earlyBird: "¥10,800",
  },
]

function Hero() {
  return (
    <section className="pt-32 lg:pt-40 pb-16 bg-[#E6E6E0]">
      <div className="max-w-[900px] mx-auto px-6">
        <p className="font-['Inter',sans-serif] text-xs font-medium tracking-[0.15em] uppercase text-accent mb-6">
          课程中心
        </p>
        <h1 className="font-['Playfair_Display',serif] text-5xl lg:text-6xl font-semibold leading-[1.12] text-foreground mb-6">
          2027 年线下课程排期
        </h1>
        <p className="font-['Inter',sans-serif] text-base text-[#6B6B62] leading-relaxed max-w-[600px]">
          线下实操与线上理论学习，系统掌握 AK 技术。每期限额 30 人，选择适合你的城市与班次。
        </p>
      </div>
    </section>
  )
}

function CourseSchedule() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="flex flex-col gap-6">
          {courses.map((c) => (
            <div
              key={c.name}
              className="bg-[#F5F5F0] border border-border rounded-sm p-6 hover:shadow-sm transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <h3 className="font-['Playfair_Display',serif] text-lg font-semibold text-foreground">
                  {c.name}
                </h3>
                <span
                  className={`inline-flex self-start px-3 py-1 rounded-full text-xs font-semibold ${
                    c.status === "open"
                      ? "bg-[#d1fae5] text-[#065f46]"
                      : "bg-[#dbeafe] text-[#1e40af]"
                  }`}
                >
                  {c.status === "open" ? "开放报名" : "即将开放"}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
                <div className="text-sm text-[#6B6B62]">
                  <span className="text-[#9B9B90]">模块：</span>{c.module}
                </div>
                <div className="text-sm text-[#6B6B62]">
                  <span className="text-[#9B9B90]">讲师：</span>{c.instructor}
                </div>
                <div className="text-sm text-[#6B6B62]">
                  <span className="text-[#9B9B90]">地点：</span>{c.location}
                </div>
                <div className="text-sm text-[#6B6B62]">
                  <span className="text-[#9B9B90]">Part I：</span>{c.part1}
                </div>
                <div className="text-sm text-[#6B6B62]">
                  <span className="text-[#9B9B90]">Part II：</span>{c.part2}
                </div>
                <div className="text-sm text-[#6B6B62]">
                  <span className="text-[#9B9B90]">名额：</span>限{c.seats}人
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 mb-5">
                <span className="font-['Playfair_Display',serif] text-2xl font-bold text-accent">
                  {c.price}
                </span>
                <span className="inline-flex px-3 py-1 bg-[#d1fae5] text-[#065f46] text-sm font-semibold rounded">
                  早鸟价 {c.earlyBird}
                </span>
                <span className="text-sm text-[#6B6B62]">剩余名额：{c.seats}</span>
              </div>

              <div className="flex gap-3">
                <Link
                  to="/contact"
                  className={`inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-sm transition-colors duration-200 ${
                    c.status === "open"
                      ? "bg-accent text-accent-foreground hover:bg-[#4A7F7B]"
                      : "border border-border text-[#6B6B62] hover:bg-[#E6E6E0]"
                  }`}
                >
                  {c.status === "open" ? "立即报名" : "即将开放报名"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function CourseCenterPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-['Inter',sans-serif] overflow-x-hidden">
      <Navbar />
      <main>
        <ScrollReveal>
          <Hero />
        </ScrollReveal>
        <ScrollReveal>
          <CourseSchedule />
        </ScrollReveal>
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
