import { Link } from "react-router"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

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
      <p className="font-['Noto_Sans_SC',sans-serif] text-xs font-medium tracking-[0.15em] uppercase text-accent mb-6">
        PAK Part II · 3 天基础文凭课程
      </p>
      <h1 className="font-['Noto_Serif_SC',serif] text-5xl lg:text-6xl font-semibold leading-[1.12] text-foreground mb-6">
        M1 骨骼肌病 +
        <br />
        特色针灸 eIRT
      </h1>
      <p className="font-['Noto_Sans_SC',sans-serif] text-base text-[#6B6B62] leading-relaxed max-w-[600px] mb-8">
        在 Part I 理论基础上深耕临床实操。涵盖脊柱骨盆专项诊断矫正与 PAK 特色针灸体系，
        打通「肌肉测试 + 西医评估 + 传统针灸」跨学科整合路径。
      </p>
      <div className="inline-block bg-[#F5F5F0] border border-border rounded-sm px-6 py-4">
        <p className="font-['Noto_Sans_SC',sans-serif] text-sm text-[#4A4A45] leading-relaxed">
          <span className="font-medium text-accent">前置要求：</span>学员须已完成 <strong className="text-foreground font-medium">PAK Part I 基础培训</strong>。
          Part I 覆盖的徒手肌肉测试、AK-GS 代谢筛查及 IRT 损伤回忆技术，是 Part II 临床实操的基础。
        </p>
      </div>
    </Section>
  )
}

function CourseContent() {
  const modules = [
    {
      title: "脊柱骨盆专项评估与矫正",
      desc: "深入骨关节慢性疼痛的根源诊疗。覆盖肌肉起止点损伤、肌筋膜障碍、椎体半脱位、呼吸失衡等全维度诊断矫正，补齐结构层面的核心能力。",
      topics: ["肌肉起止点损伤评估", "肌筋膜障碍诊断与治疗", "椎体半脱位矫正技术", "呼吸模式失衡评估与纠正", "1/2 类骨盆错位全维度诊断矫正"],
    },
    {
      title: "PAK 特色针灸与 eIRT 体系",
      desc: "融合传统针灸与现代肌动学，学习 PAK 特色针灸技术。掌握 eIRT 二、三级高阶损伤回忆技术，落地成瘾干预与体感定位疗法。",
      topics: ["山本颅骨针灸技术", "定点疼痛 B&E 技术", "成瘾干预方法", "体感定位疗法", "eIRT 二阶高阶损伤回忆", "eIRT 三阶高级损伤回忆"],
    },
    {
      title: "跨学科整合实操",
      desc: "将肌肉测试、西医评估与传统针灸三者有机整合。通过复杂病例综合分析，建立多维度的临床诊疗思维，形成完整的 PAK 干预方案。",
      topics: ["肌肉测试 + 西医评估整合", "针灸经络与肌肉功能关联", "复杂病例综合分析", "多疗法整合实操练习"],
    },
  ]

  return (
    <Section>
      <p className="font-['Noto_Sans_SC',sans-serif] text-xs font-medium tracking-[0.15em] uppercase text-accent mb-4">
        课程内容
      </p>
      <h2 className="font-['Noto_Serif_SC',serif] text-3xl lg:text-4xl font-semibold leading-[1.15] text-foreground mb-12">
        Part II 核心模块
      </h2>

      <div className="flex flex-col gap-8">
        {modules.map((m, i) => (
          <div key={m.title} className="border border-border rounded-sm overflow-hidden">
            <div className="bg-[#F5F5F0] px-7 py-5 border-b border-border flex items-center gap-4">
              <span className="font-['Noto_Sans_SC',sans-serif] text-xs font-medium tracking-[0.15em] text-accent">
                0{i + 1}
              </span>
              <p className="font-['Noto_Serif_SC',serif] text-lg font-semibold text-foreground">
                {m.title}
              </p>
            </div>
            <div className="px-7 py-6">
              <p className="font-['Noto_Sans_SC',sans-serif] text-sm text-[#4A4A45] leading-relaxed mb-5">
                {m.desc}
              </p>
              <ul className="flex flex-col gap-2">
                {m.topics.map((t) => (
                  <li key={t} className="font-['Noto_Sans_SC',sans-serif] text-sm text-[#6B6B62] flex items-start gap-2.5">
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
    <Section alt>
      <p className="font-['Noto_Sans_SC',sans-serif] text-xs font-medium tracking-[0.15em] uppercase text-accent mb-4">
        证书与学分
      </p>
      <h2 className="font-['Noto_Serif_SC',serif] text-3xl lg:text-4xl font-semibold leading-[1.15] text-foreground mb-6">
        官方学时认证
      </h2>
      <div className="prose-custom space-y-5">
        <p className="font-['Noto_Sans_SC',sans-serif] text-base text-[#4A4A45] leading-relaxed">
          完成 Part I + Part II 课程后，可获得 <strong className="text-foreground font-medium">DÄGAK 官方颁发的学时证书</strong>。
          此证书是未来申请正式 ICAK-DÄGAK PAK 认证所需的核心课时证明。
        </p>
        <p className="font-['Noto_Sans_SC',sans-serif] text-base text-[#4A4A45] leading-relaxed">
          本次 Part I + Part II 课程共计 <strong className="text-foreground font-medium">52 官方学时</strong>，
          计入 PAK 国际执业认证考核所需 100 学时档案。
        </p>
        <p className="font-['Noto_Sans_SC',sans-serif] text-sm text-[#6B6B62] leading-relaxed border-l-2 border-accent pl-4">
          重要说明：完成 Part I + Part II 课程不等同于获得 PAK 认证！
          本次课程可算做 PAK 认证的所需课时。获得正式 PAK 认证文凭，
          需满足 100 课时要求且通过考核。
        </p>
      </div>

      <div className="mt-10">
        <p className="font-['Noto_Sans_SC',sans-serif] text-xs font-medium tracking-[0.15em] uppercase text-accent mb-4">
          考核说明
        </p>
        <div className="bg-[#F5F5F0] border border-border rounded-sm p-8 space-y-4">
          <div>
            <p className="font-['Noto_Sans_SC',sans-serif] text-sm font-medium text-foreground mb-1">笔试</p>
            <p className="font-['Noto_Sans_SC',sans-serif] text-sm text-[#6B6B62] leading-relaxed">
              100 道选择题，考查理论知识掌握程度。
            </p>
          </div>
          <div className="border-t border-border pt-4">
            <p className="font-['Noto_Sans_SC',sans-serif] text-sm font-medium text-foreground mb-1">实践考试</p>
            <p className="font-['Noto_Sans_SC',sans-serif] text-sm text-[#6B6B62] leading-relaxed">
              仅考核与临床实践相关的内容。往期认真完成课程和课后实践的学员，通过率在 90% 以上。
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

function CTA() {
  return (
    <Section>
      <div className="text-center">
        <h2 className="font-['Noto_Serif_SC',serif] text-3xl lg:text-4xl font-semibold leading-[1.2] text-foreground mb-5">
          完成你的 PAK 认证之路
        </h2>
        <p className="font-['Noto_Sans_SC',sans-serif] text-base text-[#6B6B62] mb-10 max-w-[520px] mx-auto leading-relaxed">
          每期限额 30 人，预约课程顾问获取最新开课安排与报名详情。
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-['Noto_Sans_SC',sans-serif] text-sm font-medium rounded-sm hover:bg-[#4A7F7B] transition-colors duration-200"
        >
          预约课程咨询
        </Link>
      </div>
    </Section>
  )
}

export default function Part2Page() {
  return (
    <div className="min-h-screen bg-background text-foreground font-['Noto_Sans_SC',sans-serif] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <CourseContent />
        <Certification />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
