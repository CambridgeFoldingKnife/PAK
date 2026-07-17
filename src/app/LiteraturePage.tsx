import Navbar from "./components/Navbar"
import { Link } from "react-router"

const dimensions = [
  {
    title: "基础与药典",
    desc: "厘清概念，梳理 20 世纪至今的发展脉络与关键方法论",
    file: "肌动学的源流.pdf",
  },
  {
    title: "身心调节",
    desc: "应用于心理健康、教育、缓解情绪（如焦虑）",
    file: "肌动学在心理健康教育中的应用.pdf",
  },
  {
    title: "临床康复",
    desc: "针对具体肌骨疼痛问题，提供西学中结合的诊疗体系",
    file: "肌动学和运动平衡理论在冻结肩诊疗中的应用.pdf",
  },
]

const audiences = [
  {
    role: "医疗康复与健康领域的专业人士",
    examples: "康复师、物理治疗师、医生",
    value: "从临床肌动学、触康健、中医微创等资料中，获取前沿的诊疗思路和实操技术。告别单一疗法，掌握一套融合解剖、运动、经络的整体评估与干预体系。",
  },
  {
    role: "心理健康与教育工作者",
    examples: "心理咨询师、教师",
    value: "肌动学在心理健康领域的应用已被证实有效。无论是缓解学生考试焦虑的肌动学与音乐治疗结合方案，还是心理课上的健脑操、交叉爬行等放松训练，都能直接补充到您的工具箱中。",
  },
  {
    role: "肌动学与相关专业的从业者、学习者",
    examples: "身脑平衡教练、健身教练、中医爱好者",
    value: "从肌动学的源流（厘清 AK、触康健、教育肌动学的区别）到最新的临床应用研究一应俱全。既有理论根基，又有详实的案例和操作指南。",
  },
]

export default function LiteraturePage() {
  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <p className="font-['Inter',sans-serif] text-xs font-medium tracking-[0.12em] uppercase text-accent mb-4">
            Literature
          </p>
          <h1 className="font-['Playfair_Display',serif] text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-4">
            肌动学文献知识库
          </h1>
          <p className="font-['Inter',sans-serif] text-base text-[#6B6B62] max-w-2xl leading-relaxed">
            肌动学不仅是研究人体运动的科学，更是一门融合了西方生理学与东方能量疗愈的艺术。
            它以独特的<strong className="text-foreground">肌能检测</strong>为桥梁，连接身体、心理与能量，
            为解决运动、学习与情绪问题提供了全新视角。
          </p>
        </div>
      </section>

      {/* ── 适合人群 ─────────────────────────────────────────── */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-['Playfair_Display',serif] text-2xl font-semibold text-foreground mb-10">
            适合人群
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {audiences.map((a) => (
              <div
                key={a.role}
                className="bg-[#EEEEE9] border border-border p-6 rounded-sm"
              >
                <p className="font-['Inter',sans-serif] text-sm font-semibold text-foreground mb-1">
                  {a.role}
                </p>
                <p className="font-['Inter',sans-serif] text-xs text-accent mb-4">
                  {a.examples}
                </p>
                <p className="font-['Inter',sans-serif] text-sm text-[#4A4A45] leading-relaxed">
                  {a.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 知识库亮点 ───────────────────────────────────────── */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-['Playfair_Display',serif] text-2xl font-semibold text-foreground mb-4">
            知识库亮点：主题鲜明，方向全面
          </h2>
          <p className="font-['Inter',sans-serif] text-sm text-[#6B6B62] mb-10 max-w-2xl">
            本知识库不是单一论文的堆砌，而是围绕「肌动学」构建的完整知识矩阵，涵盖三大核心维度，具备「知原理、能教学、可治病」的完整链条。
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {dimensions.map((d) => (
              <div
                key={d.title}
                className="bg-white border border-border p-6 rounded-sm"
              >
                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center mb-4">
                  <span className="font-['Playfair_Display',serif] text-lg font-semibold text-accent">
                    {d.title[0]}
                  </span>
                </div>
                <p className="font-['Inter',sans-serif] text-base font-semibold text-foreground mb-2">
                  {d.title}
                </p>
                <p className="font-['Inter',sans-serif] text-sm text-[#6B6B62] leading-relaxed mb-4">
                  {d.desc}
                </p>
                <p className="font-['Inter',sans-serif] text-xs text-[#9B9B90]">
                  代表文献：{d.file}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 多维度理由 ───────────────────────────────────────── */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-['Playfair_Display',serif] text-2xl font-semibold text-foreground mb-10">
            为什么加入我们
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                tag: "实用技术派",
                text: "别再只做传统的推拿了！结合肌动学与经络理论，能让疗效数字说话。想重现疗效优于常规推拿近 10% 的临床奇迹吗？加入知识库，获取第一手治疗细节！",
              },
              {
                tag: "理论探索派",
                text: "别再为 AK、触康健、健脑操傻傻分不清了！《肌动学的源流》是华人世界理解肌动学的必读文献，帮你打通肌动学的「任督二脉」，让你不仅会用，更懂得为什么有效。",
              },
              {
                tag: "教育场景",
                text: "学生考试焦虑怎么破？别只靠心理咨询了！经过 16 次团体辅导验证的《肌动学与音乐治疗结合方案》，让你的心理课堂成为孩子最期待的治愈时间。",
              },
              {
                tag: "内容创作者",
                text: "专业科普无法量产？知识库就是你的选题金矿！无论是「达芬奇与运动学」的冷门知识，还是「交叉爬行改善肩颈」的简易动作指南，都是现成的爆款素材。",
              },
            ].map((item) => (
              <div
                key={item.tag}
                className="bg-[#EEEEE9] border border-border p-6 rounded-sm"
              >
                <span className="font-['Inter',sans-serif] text-[11px] font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                  {item.tag}
                </span>
                <p className="font-['Inter',sans-serif] text-sm text-[#4A4A45] leading-relaxed mt-4">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 如何加入 ─────────────────────────────────────────── */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-['Playfair_Display',serif] text-2xl font-semibold text-foreground mb-4">
            如何加入知识库
          </h2>
          <p className="font-['Inter',sans-serif] text-sm text-[#6B6B62] mb-10 max-w-2xl">
            通过 ima App 扫描知识码，即可申请加入「PAK 专业应用肌动学文献」知识库。以下是详细步骤：
          </p>

          <div className="space-y-8">
            {/* Steps — 3 columns */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: "下载 ima App",
                  desc: "在手机应用商店搜索「ima」，下载并安装。安卓用户也可通过下方二维码直接下载。",
                },
                {
                  step: "02",
                  title: "扫描知识码",
                  desc: "打开 ima App，使用内置扫码功能扫描「PAK 专业应用肌动学文献」知识码，即可发起加入申请。",
                },
                {
                  step: "03",
                  title: "等待审核",
                  desc: "提交申请后，管理员将在 1-2 个工作日内审核通过，届时你即可浏览和下载知识库中的全部文献。",
                },
              ].map((s) => (
                <div key={s.step} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <span className="font-['Playfair_Display',serif] text-lg font-semibold text-accent">
                      {s.step}
                    </span>
                  </div>
                  <div>
                    <p className="font-['Inter',sans-serif] text-sm font-semibold text-foreground mb-1">
                      {s.title}
                    </p>
                    <p className="font-['Inter',sans-serif] text-sm text-[#6B6B62] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* QR codes — side by side */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-border p-6 rounded-sm flex flex-col items-center">
                <img
                  src="/assets/ima下载.png"
                  alt="ima 下载二维码"
                  className="w-44 h-44 object-contain mb-4"
                />
                <p className="font-['Inter',sans-serif] text-sm font-medium text-foreground">
                  下载 ima App
                </p>
                <p className="font-['Inter',sans-serif] text-xs text-[#9B9B90] mt-1">
                  扫码下载安卓版
                </p>
              </div>
              <div className="bg-white border border-border p-6 rounded-sm flex flex-col items-center">
                <img
                  src="/assets/【PAK专业应用肌动学文献】知识码.png"
                  alt="PAK 知识库知识码"
                  className="w-44 h-44 object-contain mb-4"
                />
                <p className="font-['Inter',sans-serif] text-sm font-medium text-foreground">
                  加入知识库
                </p>
                <p className="font-['Inter',sans-serif] text-xs text-[#9B9B90] mt-1">
                  扫码申请加入文献知识库
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="font-['Inter',sans-serif] text-sm text-[#6B6B62] mb-6 max-w-lg mx-auto">
            希望您能将这些宝贵资料分享给更多人。我们诚挚邀请您与我们一起，构建这个中西合璧、实操性强的肌动学知识库。
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground font-['Inter',sans-serif] text-sm font-medium rounded-sm hover:bg-[#4A7F7B] transition-colors duration-200"
          >
            课程咨询
          </Link>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="bg-[#1C1C1A] py-16 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between gap-10">
          <div>
            <img
              src="/assets/LOGO_健衡学园.png"
              alt="健衡学园"
              className="h-8 w-auto mb-4 brightness-0 invert"
            />
            <p className="font-['Inter',sans-serif] text-sm text-[#9B9B90]">
              健衡学园 · PAK 专业应用肌动学
            </p>
          </div>
          <div className="flex gap-12 text-sm font-['Inter',sans-serif] text-[#9B9B90]">
            <div className="flex flex-col gap-2">
              <Link to="/course" className="hover:text-white transition-colors">课程介绍</Link>
              <Link to="/faq" className="hover:text-white transition-colors">FAQ 问答</Link>
              <Link to="/pak-union" className="hover:text-white transition-colors">PAK 联盟</Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link to="/research" className="hover:text-white transition-colors">获取文献</Link>
              <Link to="/contact" className="hover:text-white transition-colors">课程咨询</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
