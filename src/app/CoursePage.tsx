import { Link } from "react-router"
import Navbar from "@/app/components/Navbar"

// ─── Section wrapper ──────────────────────────────────────────────────────────
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

// ─── Sub-components ───────────────────────────────────────────────────────────
function Hero() {
  return (
    <Section className="pt-32 lg:pt-40 pb-24">
      <p className="font-['Inter',sans-serif] text-xs font-medium tracking-[0.15em] uppercase text-accent mb-6">
        ICAK 亚太地区合作伙伴 · 德国 DÄGAK 官方认证
      </p>
      <h1 className="font-['Playfair_Display',serif] text-5xl lg:text-6xl font-semibold leading-[1.12] text-foreground mb-6">
        PAK 应用肌动学
        <br />
        认证培训课程
      </h1>
      <p className="font-['Inter',sans-serif] text-base text-[#6B6B62] leading-relaxed max-w-[600px]">
        健衡学园是 ICAK 亚太地区官方合作机构。本课程遵循德国 DÄGAK 标准，
        由创始人 Hans Garten 博士亲授，系统训练结构、化学与心理三维平衡诊疗思维。
      </p>
    </Section>
  )
}

function WhatIsPak() {
  return (
    <Section alt>
      <p className="font-['Inter',sans-serif] text-xs font-medium tracking-[0.15em] uppercase text-accent mb-4">
        课程背景
      </p>
      <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-4xl font-semibold leading-[1.15] text-foreground mb-8">
        什么是应用肌动学（PAK）
      </h2>
      <div className="prose-custom space-y-5">
        <p className="font-['Inter',sans-serif] text-base text-[#4A4A45] leading-relaxed">
          应用肌动学（Professional Applied Kinesiology，简称 PAK）由美国脊医 George
          Goodheart 博士于 1964 年创立，是目前全球唯一经 ICAK（国际应用肌动学学院）认证的临床肌动学体系。
        </p>
        <p className="font-['Inter',sans-serif] text-base text-[#4A4A45] leading-relaxed">
          它的核心方法是<strong className="text-foreground font-medium">徒手肌肉测试</strong>——通过温和的等长收缩对抗，评估神经系统对特定肌肉的运动控制状态。肌肉能否在压力下稳定锁定，直接反映了对应神经通路的完整性。这不是测力量大小，而是读取身体发出的功能信号。
        </p>
        <p className="font-['Inter',sans-serif] text-base text-[#4A4A45] leading-relaxed">
          基于这些信号，PAK 从<strong className="text-foreground font-medium">三个维度</strong>交叉排查身体失衡的根源：
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">
        {[
          {
            title: "结构维度",
            desc: "筋膜张力、关节对位、神经肌肉代偿模式评估",
          },
          {
            title: "化学维度",
            desc: "营养缺乏、食物敏感、毒素负荷、代谢功能检测",
          },
          {
            title: "心理维度",
            desc: "情绪压力、创伤记忆、信念模式对身体的深层影响",
          },
        ].map((dim) => (
          <div
            key={dim.title}
            className="bg-[#F5F5F0] border border-border p-6 rounded-sm"
          >
            <div className="w-2 h-2 rounded-full bg-accent mb-4" />
            <h4 className="font-['Playfair_Display',serif] text-lg font-semibold text-foreground mb-2">
              {dim.title}
            </h4>
            <p className="font-['Inter',sans-serif] text-sm text-[#6B6B62] leading-relaxed">
              {dim.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function CourseStructure() {
  const phases = [
    {
      title: "第一阶段 · Part I 基础培训",
      duration: "3 天面授",
      topics: [
        "应用肌动学历史与哲学体系",
        "基本徒手肌肉测试技术（上肢 + 下肢核心肌群）",
        "脊柱相关肌肉功能评估",
        "Chapman 反射点与淋巴治疗",
        "颅骶系统与应用肌动学关联",
        "营养反应测试入门",
        "IRT 损伤回忆技术基础",
      ],
    },
    {
      title: "第二阶段 · Part II 进阶培训",
      duration: "3 天面授",
      topics: [
        "高阶肌肉测试与脑神经系统",
        "颞颌关节与咬合功能评估",
        "化学毒素负荷检测方法",
        "五因素诊断模型深化",
        "ESR 情绪压力释放技术",
        "针灸经络与肌肉功能关联",
        "多疗法整合实操练习",
        "复杂病例综合分析",
      ],
    },
  ]

  return (
    <Section>
      <p className="font-['Inter',sans-serif] text-xs font-medium tracking-[0.15em] uppercase text-accent mb-4">
        课程体系
      </p>
      <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-4xl font-semibold leading-[1.15] text-foreground mb-4">
        系统化课程体系
      </h2>
      <p className="font-['Inter',sans-serif] text-base text-[#6B6B62] leading-relaxed mb-14 max-w-[600px]">
        课程遵循德国 DÄGAK 标准。两个阶段面授通常间隔 2–4 个月，可分阶段报名也可连报享优惠。
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
        {phases.map((phase) => (
          <div key={phase.title} className="border border-border rounded-sm">
            <div className="bg-[#E6E6E0] px-7 py-5 border-b border-border">
              <p className="font-['Playfair_Display',serif] text-lg font-semibold text-foreground">
                {phase.title}
              </p>
              <p className="font-['Inter',sans-serif] text-xs text-[#6B6B62] mt-1">
                {phase.duration}
              </p>
            </div>
            <div className="px-7 py-5">
              <ul className="flex flex-col gap-2.5">
                {phase.topics.map((t) => (
                  <li
                    key={t}
                    className="font-['Inter',sans-serif] text-sm text-[#4A4A45] flex items-start gap-2.5"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* After-class practice */}
      <div className="bg-[#1C1C1A] px-8 py-8 rounded-sm">
        <p className="font-['Playfair_Display',serif] text-lg font-semibold text-[#F5F5F0] mb-3">
          课后临床实践（约 52 学时）
        </p>
        <p className="font-['Inter',sans-serif] text-sm text-[#9B9B90] leading-relaxed">
          面授结束后，学员需在各自诊所完成规定数量的临床案例评估与报告，期间有导师远程指导。
          这是认证的必备环节，确保你真正把课堂所学转化为临床能力。
        </p>
      </div>
    </Section>
  )
}

function TeachingFeatures() {
  const features = [
    {
      num: "01",
      title: "60% 实操，40% 理论",
      desc: "每种技术都经过讲师演示 → 学员分组对练 → 讲师逐组纠错三个环节。手上要会，不止听懂。",
    },
    {
      num: "02",
      title: "真实患者演示",
      desc: "每天下午由讲师邀请真实患者，进行完整的 PAK 评估流程展示。你看的是真实临床场景，不是模拟。",
    },
    {
      num: "03",
      title: "限额小班教学",
      desc: "每期限额 24 人，保证每位学员都能得到充分的实操指导和一对一反馈。",
    },
    {
      num: "04",
      title: "中文授课，国际标准",
      desc: "全程中文教学，关键术语同步标注英文和德文。课程内容、考核标准与国际体系完全一致。",
    },
  ]

  return (
    <Section alt>
      <p className="font-['Inter',sans-serif] text-xs font-medium tracking-[0.15em] uppercase text-accent mb-4">
        教学特色
      </p>
      <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-4xl font-semibold leading-[1.15] text-foreground mb-12">
        不止听课，更要上手
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
        {features.map((f) => (
          <div key={f.num} className="bg-[#F5F5F0] p-7 flex flex-col gap-3">
            <span className="font-['Inter',sans-serif] text-xs font-medium tracking-[0.15em] text-accent">
              {f.num}
            </span>
            <h4 className="font-['Playfair_Display',serif] text-lg font-semibold text-foreground">
              {f.title}
            </h4>
            <p className="font-['Inter',sans-serif] text-sm text-[#6B6B62] leading-relaxed flex-1">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Certification() {
  const steps = [
    "面授课程（6 天）",
    "课后临床实践（约 52 学时）",
    "临床案例报告提交",
    "DÄGAK 认证考核（笔试 + 实操）",
    "获得 DÄGAK 从业者证书",
    "可申请 ICAK 国际认证",
  ]

  return (
    <Section>
      <p className="font-['Inter',sans-serif] text-xs font-medium tracking-[0.15em] uppercase text-accent mb-4">
        认证路径
      </p>
      <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-4xl font-semibold leading-[1.15] text-foreground mb-4">
        国际认证路径
      </h2>
      <p className="font-['Inter',sans-serif] text-base text-[#6B6B62] leading-relaxed mb-12 max-w-[600px]">
        完成全部 100 学时并通过考核后，获得 DÄGAK 证书和 ICAK 国际认证资格。往期认真完成课程和课后实践的学员，通过率在 90% 以上。
      </p>

      {/* Step chain */}
      <div className="flex flex-col gap-0 mb-14">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-4">
            <div className="flex flex-col items-center">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${
                  i < steps.length - 1
                    ? "bg-accent text-accent-foreground"
                    : "bg-foreground text-[#F5F5F0]"
                }`}
              >
                <span className="font-['Inter',sans-serif] text-xs font-semibold">
                  {i + 1}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="w-px h-6 bg-border" />
              )}
            </div>
            <span className="font-['Inter',sans-serif] text-sm text-[#4A4A45] py-2">
              {step}
            </span>
          </div>
        ))}
      </div>

      {/* Certification outcomes */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {[
          {
            title: "DÄGAK 证书",
            desc: "证明你的 PAK 执业能力达到德国应用肌动学学会标准",
          },
          {
            title: "ICAK 国际认证",
            desc: "全球最高等级应用肌动学认证，可参与国际学术交流",
          },
          {
            title: "全球从业者网络",
            desc: "加入 ICAK 全球会员体系，与各国同行持续交流成长",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="border border-border p-6 rounded-sm"
          >
            <h4 className="font-['Playfair_Display',serif] text-lg font-semibold text-foreground mb-2">
              {item.title}
            </h4>
            <p className="font-['Inter',sans-serif] text-sm text-[#6B6B62] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function TargetAudience() {
  const audiences = [
    {
      role: "物理治疗师 / 康复治疗师",
      value: "从只看局部升级为系统排查，将三维评估整合到运动损伤康复方案中",
    },
    {
      role: "整脊医生 / 正骨医师",
      value: "矫正前通过肌肉测试精准定位问题节段，提升手法针对性",
    },
    {
      role: "自然疗法师 / 功能医学从业者",
      value: "利用化学维度检测评估营养缺乏与毒素负荷，完善功能诊断体系",
    },
    {
      role: "全科医生 / 专科医生",
      value: "获取超越影像学检查的功能性诊断信息",
    },
    {
      role: "针灸师 / 中医师",
      value: "将经络理论与神经肌肉评估相互印证，为选穴提供客观参考",
    },
    {
      role: "运动康复教练 / 体能训练师",
      value: "优化运动员动作模式，建立科学的损伤预防策略",
    },
  ]

  return (
    <Section alt>
      <p className="font-['Inter',sans-serif] text-xs font-medium tracking-[0.15em] uppercase text-accent mb-4">
        适合人群
      </p>
      <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-4xl font-semibold leading-[1.15] text-foreground mb-4">
        适合谁学
      </h2>
      <p className="font-['Inter',sans-serif] text-base text-[#6B6B62] leading-relaxed mb-12 max-w-[600px]">
        具备医学背景会让你事半功倍。如缺少解剖学基础，建议先掌握基础人体解剖知识。
      </p>

      <div className="border border-border divide-y divide-border rounded-sm overflow-hidden">
        {audiences.map((a) => (
          <div
            key={a.role}
            className="grid grid-cols-1 sm:grid-cols-[2fr_3fr] gap-4 px-7 py-5 items-start bg-[#F5F5F0]"
          >
            <p className="font-['Inter',sans-serif] text-sm font-medium text-foreground">
              {a.role}
            </p>
            <p className="font-['Inter',sans-serif] text-sm text-[#6B6B62] leading-relaxed">
              {a.value}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function LeadInstructor() {
  const timeline = [
    { year: "1987", desc: "取得医学博士学位，专攻运动医学与物理治疗领域" },
    { year: "1992", desc: "成为 ICAK 国际认证讲师，开始全球教学" },
    { year: "1996", desc: "创立 DÄGAK（德国应用肌动学学会），担任首任会长" },
    {
      year: "2015",
      desc: "出版权威教材《应用肌动学：临床诊断与治疗》，已译为 9 种语言",
    },
  ]

  return (
    <Section>
      <p className="font-['Inter',sans-serif] text-xs font-medium tracking-[0.15em] uppercase text-accent mb-4">
        首席讲师
      </p>
      <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-4xl font-semibold leading-[1.15] text-foreground mb-2">
        Dr. Med. Hans Garten
      </h2>
      <p className="font-['Inter',sans-serif] text-base text-[#6B6B62] mb-10">
        DÄGAK 创始人 · ICAK 资深讲师 · 35+ 年临床经验
      </p>

      <p className="font-['Inter',sans-serif] text-base text-[#4A4A45] leading-relaxed mb-12 max-w-[660px]">
        教学风格以严谨的科学态度与直觉性的临床洞察相结合，既尊重循证医学标准，
        又保留应用肌动学对人体整体性的深刻理解。30 余年来培养了数千名 PAK 从业者，
        其教材已成为全球应用肌动学教育的标准参考。
      </p>

      {/* Timeline */}
      <div className="relative max-w-[600px]">
        <div className="absolute left-[56px] top-2 bottom-2 w-px bg-border" />
        <div className="flex flex-col gap-8">
          {timeline.map((t) => (
            <div key={t.year} className="flex gap-6 items-start">
              <span className="font-['Playfair_Display',serif] text-sm font-semibold text-accent w-[56px] flex-shrink-0 pt-0.5">
                {t.year}
              </span>
              <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-1.5 relative z-10" />
              <p className="font-['Inter',sans-serif] text-sm text-[#4A4A45] leading-relaxed">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

function CTA() {
  return (
    <Section alt>
      <div className="text-center">
        <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-4xl font-semibold leading-[1.2] text-foreground mb-5">
          准备好提升你的临床诊疗能力了吗？
        </h2>
        <p className="font-['Inter',sans-serif] text-base text-[#6B6B62] mb-10 max-w-[520px] mx-auto leading-relaxed">
          每期限额 24 人，预约课程顾问获取最新开课安排与报名详情。
        </p>
        <Link
          to="/#contact"
          className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-['Inter',sans-serif] text-sm font-medium rounded-sm hover:bg-[#4A7F7B] transition-colors duration-200"
        >
          预约课程咨询
        </Link>
      </div>
    </Section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function CoursePage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-['Inter',sans-serif] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <WhatIsPak />
        <CourseStructure />
        <TeachingFeatures />
        <Certification />
        <TargetAudience />
        <LeadInstructor />
        <CTA />
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
