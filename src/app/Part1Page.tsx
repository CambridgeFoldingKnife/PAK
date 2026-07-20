import { Link } from "react-router"
import Navbar from "@/app/components/Navbar"

function Section({
  children,
  className = "",
  alt = false,
}: {
  children: React.ReactNode
  className?: string
  alt?: boolean
}) {
  return (
    <section className={`py-24 lg:py-32 ${alt ? "bg-[#E6E6E0]" : ""} ${className}`}>
      <div className="max-w-[900px] mx-auto px-6">{children}</div>
    </section>
  )
}

function Hero() {
  return (
    <Section className="pt-32 lg:pt-40 pb-24">
      <p className="font-['Inter',sans-serif] text-xs font-medium tracking-[0.15em] uppercase text-accent mb-6">
        PAK Part I · 3 天入门证书课程
      </p>
      <h1 className="font-['Playfair_Display',serif] text-5xl lg:text-6xl font-semibold leading-[1.12] text-foreground mb-6">
        AK 导论 +
        <br />
        代谢系统 IRT
      </h1>
      <p className="font-['Inter',sans-serif] text-base text-[#6B6B62] leading-relaxed max-w-[600px]">
        大陆首场官方授权落地的 DÄGAK-PAK 初阶课程第一板块。
        从应用肌动学底层逻辑切入，搭建结构-生化-心理 健康金三角核心思维。
      </p>
    </Section>
  )
}

function CourseContent() {
  const modules = [
    {
      title: "AK 基础理论与肌肉测试",
      desc: "从 AK 发展史、肌肉测试 MMT 神经生理根基切入，系统学习徒手肌肉测试基础判定逻辑。掌握上肢 + 下肢核心肌群的标准测试方法，理解肌肉锁定反应的神经通路意义。",
      topics: ["应用肌动学历史与哲学体系", "基本徒手肌肉测试技术（上肢 + 下肢核心肌群）", "脊柱相关肌肉功能评估", "Chapman 反射点与淋巴治疗"],
    },
    {
      title: "AK-GS 代谢系统筛查",
      desc: "依托 AK-GS 模块，学习全科隐性问题的 AK 筛查方案。覆盖过敏、风湿、肠道菌群、毒素负荷等多种常见但易被忽视的健康问题。",
      topics: ["过敏与食物敏感筛查", "风湿与念珠菌感染检测", "菌群紊乱与消化功能评估", "重金属 / 农药毒素负荷检测", "牙源性病灶筛查"],
    },
    {
      title: "IRT 损伤回忆技术",
      desc: "分阶学习 IRT 损伤回忆技术 1、2 阶，掌握身体潜藏旧伤病灶如何诱发慢性疼痛、消化、免疫失衡。跳出单一对症治疗的误区，从根源解决问题。",
      topics: ["IRT 一阶：基础损伤回忆技术", "IRT 二阶：进阶损伤回忆", "旧伤与慢性疼痛的关联分析", "损伤回忆在消化/免疫失衡中的应用"],
    },
  ]

  return (
    <Section alt>
      <p className="font-['Inter',sans-serif] text-xs font-medium tracking-[0.15em] uppercase text-accent mb-4">
        课程内容
      </p>
      <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-4xl font-semibold leading-[1.15] text-foreground mb-12">
        Part I 核心模块
      </h2>

      <div className="flex flex-col gap-8">
        {modules.map((m, i) => (
          <div key={m.title} className="border border-border rounded-sm overflow-hidden">
            <div className="bg-[#F5F5F0] px-7 py-5 border-b border-border flex items-center gap-4">
              <span className="font-['Inter',sans-serif] text-xs font-medium tracking-[0.15em] text-accent">
                0{i + 1}
              </span>
              <p className="font-['Playfair_Display',serif] text-lg font-semibold text-foreground">
                {m.title}
              </p>
            </div>
            <div className="px-7 py-6">
              <p className="font-['Inter',sans-serif] text-sm text-[#4A4A45] leading-relaxed mb-5">
                {m.desc}
              </p>
              <ul className="flex flex-col gap-2">
                {m.topics.map((t) => (
                  <li key={t} className="font-['Inter',sans-serif] text-sm text-[#6B6B62] flex items-start gap-2.5">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Certification() {
  return (
    <Section>
      <p className="font-['Inter',sans-serif] text-xs font-medium tracking-[0.15em] uppercase text-accent mb-4">
        证书与学分
      </p>
      <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-4xl font-semibold leading-[1.15] text-foreground mb-6">
        官方学时认证
      </h2>
      <div className="prose-custom space-y-5">
        <p className="font-['Inter',sans-serif] text-base text-[#4A4A45] leading-relaxed">
          完成 Part I 课程后，可获得 DÄGAK 官方颁发的<strong className="text-foreground font-medium">学时证书</strong>。
          此证书是未来申请正式 ICAK-DÄGAK PAK 认证所需的核心课时证明。
        </p>
        <p className="font-['Inter',sans-serif] text-base text-[#4A4A45] leading-relaxed">
          本次 Part I 课程共计 <strong className="text-foreground font-medium">26 官方学时</strong>，
          计入 PAK 国际执业认证考核所需 100 学时档案。
        </p>
        <p className="font-['Inter',sans-serif] text-sm text-[#6B6B62] leading-relaxed border-l-2 border-accent pl-4 mt-6">
          重要说明：完成 Part I 课程不等同于获得 PAK 认证。获得正式 PAK 认证文凭，
          需完成 Part I + Part II 共计 100 课时要求且通过考核。
        </p>
      </div>
    </Section>
  )
}

function CTA() {
  return (
    <Section alt>
      <div className="text-center">
        <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-4xl font-semibold leading-[1.2] text-foreground mb-5">
          开启你的 PAK 学习之旅
        </h2>
        <p className="font-['Inter',sans-serif] text-base text-[#6B6B62] mb-10 max-w-[520px] mx-auto leading-relaxed">
          每期限额 30 人，预约课程顾问获取最新开课安排与报名详情。
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-['Inter',sans-serif] text-sm font-medium rounded-sm hover:bg-[#4A7F7B] transition-colors duration-200"
        >
          预约课程咨询
        </Link>
      </div>
    </Section>
  )
}

export default function Part1Page() {
  return (
    <div className="min-h-screen bg-background text-foreground font-['Inter',sans-serif] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <CourseContent />
        <Certification />
        <CTA />
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
