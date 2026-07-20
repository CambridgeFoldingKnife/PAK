import Navbar from "@/app/components/Navbar"

const scenes = [
  { label: "课堂实景 · 理论讲授", src: "/assets/1.jpg" },
  { label: "实操演示 · 徒手肌肉测试", src: "/assets/3.jpeg" },
  { label: "讲师指导 · 逐组纠错", src: "/assets/4.png" },
  { label: "小组讨论 · 病例分析", src: "/assets/5.png" },
  { label: "结业合影 · 证书颁发", src: "/assets/6.png" },
  { label: "课堂花絮 · 学习氛围", src: "/assets/2.jpeg" },
]

export default function StudentScenesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-['Inter',sans-serif] overflow-x-hidden">
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
