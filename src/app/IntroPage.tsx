import Navbar from "@/app/components/Navbar"

export default function IntroPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-['Inter',sans-serif] overflow-x-hidden">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="max-w-[900px] mx-auto px-6 pt-32 lg:pt-40 pb-16">
          <p className="font-['Inter',sans-serif] text-xs font-medium tracking-[0.15em] uppercase text-accent mb-6">
            应用肌动学入门
          </p>
          <h1 className="font-['Playfair_Display',serif] text-5xl lg:text-6xl font-semibold leading-[1.12] text-foreground mb-6">
            专业入门介绍
          </h1>
          <p className="font-['Inter',sans-serif] text-base text-[#6B6B62] leading-relaxed max-w-[600px]">
            应用肌动学（Applied Kinesiology，简称 AK）是现代肌动学体系的源头，
            由美国脊医佐治·古赫特博士（Dr. George Goodheart）于 1964 年正式创立。
          </p>
        </section>

        {/* Content */}
        <section className="max-w-[900px] mx-auto px-6 pb-32 space-y-16">
          {/* 01 定义与核心特征 */}
          <div>
            <p className="font-['Inter',sans-serif] text-xs font-medium tracking-[0.15em] uppercase text-accent mb-4">
              01 · 定义与核心特征
            </p>
            <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-4xl font-semibold leading-[1.15] text-foreground mb-8">
              什么是应用肌动学
            </h2>
            <div className="prose-custom space-y-5">
              <p className="font-['Inter',sans-serif] text-base text-[#4A4A45] leading-relaxed">
                区别于传统研究人体运动系统的运动学（Kinesiology），应用肌动学是一门融合了
                <strong className="text-foreground font-medium">西方生理学</strong>（神经、肌肉、淋巴、血管系统）与
                <strong className="text-foreground font-medium">东方能量医学</strong>（经络、穴位理论）的新兴健康科学。
              </p>
              <p className="font-['Inter',sans-serif] text-base text-[#4A4A45] leading-relaxed">
                其最核心的特征是使用<strong className="text-foreground font-medium">肌能检测</strong>作为生物反馈机制。
                与传统测量肌肉力量的"肌力测试"不同，肌能检测旨在评估神经系统对肌肉的实时控制能力。
                通过观察肌肉反应（扣紧或松软），获取意识之外的生理和能量失衡信息，从而指导诊断、评估疗效。
              </p>
            </div>
          </div>

          <div className="border-t border-border" />

          {/* 02 开创性起源与理论基石 */}
          <div>
            <p className="font-['Inter',sans-serif] text-xs font-medium tracking-[0.15em] uppercase text-accent mb-4">
              02 · 开创性起源与理论基石
            </p>
            <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-4xl font-semibold leading-[1.15] text-foreground mb-8">
              从一次临床突破到完整体系
            </h2>
            <div className="prose-custom space-y-5">
              <p className="font-['Inter',sans-serif] text-base text-[#4A4A45] leading-relaxed">
                应用肌动学的创立源于一次临床突破。古赫特医生在治疗一位顽固性肩胛骨竖立患者时，
                发现其前锯肌功能失调。在没有现有方法可用的情况下，他通过按压该肌肉的肌腱附着点，
                意外恢复了肌肉功能，并使肩胛骨复位。
              </p>
              <p className="font-['Inter',sans-serif] text-base text-[#4A4A45] leading-relaxed">
                这一成功促使他将现代运动学中的肌肉检查与<strong className="text-foreground font-medium">查普曼神经淋巴反射点</strong>、
                <strong className="text-foreground font-medium">贝内特血管反射点</strong>及
                <strong className="text-foreground font-medium">中医经络穴位理论</strong>相结合，
                构建了独特的"肌肉-经络-脏器"功能关系模型。
              </p>
              <p className="font-['Inter',sans-serif] text-base text-[#4A4A45] leading-relaxed">
                其理论精髓在于：特定肌肉的功能状态（肌能检测结果）可以反映相应经络和内脏器官的健康状况。
                这一模型为解读人体功能障碍提供了全新的、可验证的视角。
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">
              {[
                { title: "神经淋巴反射点", desc: "查普曼发现的体表反射点，与特定脏器功能相关" },
                { title: "血管反射点", desc: "贝内特发现的血管反射区域，影响局部循环" },
                { title: "经络穴位理论", desc: "融合中医经络体系，建立肌肉-脏器功能关联" },
              ].map((item) => (
                <div key={item.title} className="bg-[#F5F5F0] border border-border p-6 rounded-sm">
                  <div className="w-2 h-2 rounded-full bg-accent mb-4" />
                  <h4 className="font-['Playfair_Display',serif] text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="font-['Inter',sans-serif] text-sm text-[#6B6B62] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-border" />

          {/* 03 功效与应用范围 */}
          <div>
            <p className="font-['Inter',sans-serif] text-xs font-medium tracking-[0.15em] uppercase text-accent mb-4">
              03 · 功效与应用范围
            </p>
            <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-4xl font-semibold leading-[1.15] text-foreground mb-8">
              显著的临床功效
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
              {[
                { title: "清除肌肉骨骼功能障碍", desc: "对缓解颈肩腰腿痛等肌骨问题有良好的信度和效度，能精准定位并处理功能受限的肌肉。" },
                { title: "缓解压力与调节身心", desc: "肌动学的核心功能之一是缓解身体、心理和情绪上的压力。通过调和程序，可改善因压力引发的各类问题。" },
                { title: "提升注意力和学习效能", desc: "其分支「教育肌动学/健脑操」已证实能有效提升注意力、协调能力和学习效率。" },
                { title: "改善身心健康水平", desc: "通过恢复身体的能量平衡和结构功能，促进整体健康，化解焦虑。" },
              ].map((item) => (
                <div key={item.title} className="bg-[#F5F5F0] p-7 flex flex-col gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <h4 className="font-['Playfair_Display',serif] text-lg font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="font-['Inter',sans-serif] text-sm text-[#6B6B62] leading-relaxed flex-1">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-border" />

          {/* 04 新模式的演进 */}
          <div>
            <p className="font-['Inter',sans-serif] text-xs font-medium tracking-[0.15em] uppercase text-accent mb-4">
              04 · 新模式的演进
            </p>
            <h2 className="font-['Playfair_Display',serif] text-3xl lg:text-4xl font-semibold leading-[1.15] text-foreground mb-4">
              从治疗模型到教育模型
            </h2>
            <p className="font-['Inter',sans-serif] text-base text-[#6B6B62] leading-relaxed mb-8 max-w-[600px]">
              应用肌动学在发展中分化出了多个经典的"新模式"，代表了从"治疗疾病"到"赋能个体"的理念变迁。
            </p>
            <div className="flex flex-col gap-6">
              {[
                {
                  tag: "治疗模型",
                  title: "应用肌动学（AK）",
                  items: [
                    { label: "侧重", text: "由专业医疗人员（如脊医）主导，精准诊断并治疗特定的生理功能障碍。" },
                    { label: "核心技术", text: "复杂的肌能检测组合及多元矫正技术。" },
                  ],
                },
                {
                  tag: "自愈模型",
                  title: "触康健肌动学（Touch for Health）",
                  items: [
                    { label: "侧重", text: "由施约翰脊医创立，将 AK 技术简化为大众可用的自我保健体系。强调责任自负和启动人体自愈能力，而非被动接受治疗。" },
                    { label: "核心转变", text: "从「病人」到「调和人」，从「治疗」到「自我觉察」。" },
                  ],
                },
                {
                  tag: "教育模型",
                  title: "教育肌动学（Educational Kinesiology / Brain Gym）",
                  items: [
                    { label: "侧重", text: "由保罗·丹尼逊博士创立，将肌动学应用于学习和个人成长领域。强调通过特定的运动程序（如健脑操）来促进大脑整合，提升学习能力，属于教育而非医疗范畴。" },
                    { label: "核心转变", text: "从「解决问题」到「促进发育与学习」，调和过程以调和人主动参与运动为主。" },
                  ],
                },
              ].map((model) => (
                <div key={model.title} className="border border-border rounded-sm overflow-hidden">
                  <div className="bg-[#F5F5F0] px-7 py-5 border-b border-border">
                    <p className="font-['Inter',sans-serif] text-xs font-medium tracking-[0.15em] text-accent mb-1">
                      {model.tag}
                    </p>
                    <p className="font-['Playfair_Display',serif] text-lg font-semibold text-foreground">
                      {model.title}
                    </p>
                  </div>
                  <div className="px-7 py-6 space-y-4">
                    {model.items.map((item) => (
                      <div key={item.label}>
                        <p className="font-['Inter',sans-serif] text-sm font-medium text-foreground mb-1">{item.label}</p>
                        <p className="font-['Inter',sans-serif] text-sm text-[#6B6B62] leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
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
