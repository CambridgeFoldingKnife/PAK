import { useEffect, useRef } from "react"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import gsap from "gsap"

const scenes = [
  { label: "Day 1", src: "https://icak-website.oss-cn-hangzhou.aliyuncs.com/assets/student-showcase/day1_IMG_9489.JPG" },
  { label: "Day 1", src: "https://icak-website.oss-cn-hangzhou.aliyuncs.com/assets/student-showcase/day1_IMG_9491.JPG" },
  { label: "Day 2", src: "https://icak-website.oss-cn-hangzhou.aliyuncs.com/assets/student-showcase/day2_IMG_0001.JPG" },
  { label: "Day 2", src: "https://icak-website.oss-cn-hangzhou.aliyuncs.com/assets/student-showcase/day2_IMG_0003.JPG" },
  { label: "Day 3", src: "https://icak-website.oss-cn-hangzhou.aliyuncs.com/assets/student-showcase/day3_IMG_0082.JPG" },
  { label: "Day 3", src: "https://icak-website.oss-cn-hangzhou.aliyuncs.com/assets/student-showcase/day3_IMG_0083.JPG" },
  { label: "Day 4", src: "https://icak-website.oss-cn-hangzhou.aliyuncs.com/assets/student-showcase/day4_IMG_0436.JPG" },
  { label: "Day 4", src: "https://icak-website.oss-cn-hangzhou.aliyuncs.com/assets/student-showcase/day4_IMG_0438.JPG" },
  { label: "Day 5", src: "https://icak-website.oss-cn-hangzhou.aliyuncs.com/assets/student-showcase/day5_IMG_0657.JPG" },
  { label: "Day 5", src: "https://icak-website.oss-cn-hangzhou.aliyuncs.com/assets/student-showcase/day5_IMG_0660.JPG" },
  { label: "Day 6", src: "https://icak-website.oss-cn-hangzhou.aliyuncs.com/assets/student-showcase/day6_IMG_8867.JPG" },
  { label: "Day 6", src: "https://icak-website.oss-cn-hangzhou.aliyuncs.com/assets/student-showcase/day6_IMG_8868.JPG" },
]

const reviews = [
  { src: "https://icak-website.oss-cn-hangzhou.aliyuncs.com/assets/student-reviews/review1.jpg" },
  { src: "https://icak-website.oss-cn-hangzhou.aliyuncs.com/assets/student-reviews/review2.jpg" },
  { src: "https://icak-website.oss-cn-hangzhou.aliyuncs.com/assets/student-reviews/review3.jpg" },
  { src: "https://icak-website.oss-cn-hangzhou.aliyuncs.com/assets/student-reviews/review4.jpg" },
  { src: "https://icak-website.oss-cn-hangzhou.aliyuncs.com/assets/student-reviews/review5.jpg" },
  { src: "https://icak-website.oss-cn-hangzhou.aliyuncs.com/assets/student-reviews/review6.jpg" },
  { src: "https://icak-website.oss-cn-hangzhou.aliyuncs.com/assets/student-reviews/review7.jpg" },
]

export default function StudentScenesPage() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 尊重系统「减弱动态效果」设置：跳过动画
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    // 朋友圈图片：鼠标悬浮时 3D 倾斜 + 上浮 + 阴影 + 图片放大
    const cards = gsap.utils.toArray<HTMLElement>(".moments-card", pageRef.current)
    const handlers: Array<[HTMLElement, (e: MouseEvent) => void, () => void]> = []

    cards.forEach((card) => {
      const img = card.querySelector("img")

      const tilt = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect()
        const px = (e.clientX - rect.left) / rect.width - 0.5
        const py = (e.clientY - rect.top) / rect.height - 0.5
        gsap.to(card, {
          rotationY: px * 8,
          rotationX: -py * 8,
          transformPerspective: 900,
          scale: 1.02,
          y: -4,
          boxShadow: "0 20px 45px rgba(0,0,0,0.16)",
          duration: 0.4,
          ease: "power2.out",
        })
        if (img) {
          gsap.to(img, { scale: 1.07, duration: 0.4, ease: "power2.out" })
        }
      }
      const reset = () => {
        gsap.to(card, {
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          y: 0,
          boxShadow: "0 0 0 rgba(0,0,0,0)",
          duration: 0.6,
          ease: "elastic.out(1, 0.5)",
        })
        if (img) {
          gsap.to(img, { scale: 1, duration: 0.6, ease: "elastic.out(1, 0.5)" })
        }
      }
      card.addEventListener("mousemove", tilt)
      card.addEventListener("mouseleave", reset)
      handlers.push([card, tilt, reset])
    })

    return () => {
      handlers.forEach(([card, tilt, reset]) => {
        card.removeEventListener("mousemove", tilt)
        card.removeEventListener("mouseleave", reset)
      })
    }
  }, [])

  return (
    <div ref={pageRef} className="min-h-screen bg-background text-foreground font-['Inter',sans-serif] overflow-x-hidden">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-32 lg:pt-40 pb-16">
          <div className="max-w-[1200px] mx-auto px-6">
            <p className="font-['Inter',sans-serif] text-xs font-medium tracking-[0.15em] uppercase text-accent mb-6">
              学员目录 · 课堂实录
            </p>
            <h1 className="font-['Playfair_Display',serif] text-5xl lg:text-6xl font-semibold leading-[1.12] text-foreground mb-6">
              走进 PAK
              <br />
              课堂现场
            </h1>
            <p className="font-['Inter',sans-serif] text-base text-[#6B6B62] leading-relaxed max-w-[620px]">
              60% 实操 + 40% 理论，每天下午真实患者演示。
              在这里你能看到学员们如何从理论走向临床实践。
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="pb-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-3 gap-px bg-border rounded-sm overflow-hidden">
              {[
                { value: "6", unit: "天", label: "面授课程" },
                { value: "60%", unit: "", label: "实操占比" },
                { value: "30", unit: "人", label: "每期限额" },
              ].map((s) => (
                <div key={s.label} className="bg-[#EEEEE9] px-6 py-7 text-center">
                  <p className="font-['Playfair_Display',serif] text-3xl lg:text-4xl font-semibold text-accent mb-1">
                    {s.value}
                    <span className="text-lg font-normal text-[#9B9B90] ml-1">{s.unit}</span>
                  </p>
                  <p className="font-['Inter',sans-serif] text-xs text-[#6B6B62]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo grid */}
        <section className="pb-24 lg:pb-36">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {scenes.map((s, i) => (
                <div
                  key={i}
                  className="aspect-[4/3] relative bg-[#E6E6E0] border border-border rounded-sm flex items-center justify-center overflow-hidden group hover:border-accent/40 transition-colors duration-200"
                >
                  <img
                    src={s.src}
                    alt={s.label}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <p className="absolute bottom-4 left-4 font-['Inter',sans-serif] text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-1 group-hover:translate-y-0">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Student reviews */}
        <section className="bg-[#EEEEE9] py-24 lg:py-36">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-14">
              <p className="font-['Inter',sans-serif] text-xs font-medium tracking-[0.15em] uppercase text-accent mb-4">
                学员评价
              </p>
              <h2 className="font-['Playfair_Display',serif] text-4xl lg:text-5xl font-semibold leading-[1.15] text-foreground mb-5">
                来自学员朋友圈的真实分享
              </h2>
              <p className="font-['Inter',sans-serif] text-base text-[#6B6B62] leading-relaxed max-w-[600px]">
                每一条评价都来自学员的真实朋友圈，是他们课堂体验与学习成果的第一手记录。
              </p>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
              {reviews.map((r, i) => (
                <figure
                  key={i}
                  className="moments-card break-inside-avoid bg-[#E6E6E0] border border-border rounded-sm p-3 group hover:border-accent/40 transition-colors duration-200"
                >
                  <img
                    src={r.src}
                    alt={`学员评价 ${i + 1}`}
                    className="w-full h-auto rounded-sm"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#E6E6E0] py-20 lg:py-28">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-4xl font-semibold leading-[1.2] text-foreground mb-5">
              亲临课堂，感受实操魅力
            </h2>
            <p className="font-['Inter',sans-serif] text-base text-[#6B6B62] mb-10 max-w-[520px] mx-auto leading-relaxed">
              每期限额 30 人，预约课程顾问获取最新开课安排与报名详情。
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-['Inter',sans-serif] text-sm font-medium rounded-sm hover:bg-[#4A7F7B] transition-colors duration-200"
            >
              预约课程咨询
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
