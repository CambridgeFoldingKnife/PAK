import type { FAQCategory } from "./faq-types"

const course: FAQCategory = {
  id: "course",
  label: "课程体系",
  description: "课程安排、内容大纲与教学方式",
  items: [
    {
      id: "course-structure",
      question: "PAK 认证培训课程的整体结构是怎样的？分几个阶段？",
      answer: "课程遵循 DAEGAK（德国应用肌动学学会）标准，分为两个阶段，共 6 天密集培训：\n\n第一阶段·Part I 基础培训（3 天）\n- 应用肌动学历程与哲学体系\n- 基础徒手肌肉测试技术（上肢+下肢核心肌群）\n- 脊柱相关肌肉功能评估\n- Chapman 反射点与淋巴治疗\n- 颅骶系统与 PAK 关联\n- 营养反应测试入门\n\n第二阶段·Part II 进阶培训（3 天）\n- 高阶肌肉测试与脑神经系统\n- 颞颌关节与咬合功能评估\n- 化学毒素负荷检测方法\n- 五因素诊断模型深化\n- 情绪心理层面的肌肉反应\n- ESR 情绪压力释放技术\n- 针灸经络与肌肉功能关联\n- 复杂病例综合分析\n\n每期限额 24 人，保证实操指导质量。",
      keywords: ["课程结构", "培训安排", "Part I", "Part II", "6天", "密集培训"],
      related: ["how-many-days", "certification-path", "hands-on-ratio"],
    },
    {
      id: "how-many-days",
      question: "整个 PAK 课程要学多久？培训是连续的还是分期的？",
      answer: "全部认证所需课时为 100 小时（含理论与实操），以面授集训+课后实践的方式完成：\n\n- Part I 基础培训：3 天面授（约 24 小时）\n- Part II 进阶培训：3 天面授（约 24 小时）\n- 课后临床实践+案例报告：约 52 小时（学员在各自诊所/机构完成，有导师远程指导）\n\n两阶段面授通常间隔 2-4 个月，以便学员在临床中消化 Part I 内容后再进入 Part II。两个阶段可分开报名，也可连报享受优惠。",
      keywords: ["学习时长", "100小时", "培训周期", "面授集训", "分期"],
      related: ["course-structure", "hands-on-ratio", "certification-path"],
    },
    {
      id: "hands-on-ratio",
      question: "课程的理论和实操比例是多少？是否有真实患者演示？",
      answer: "理论与实操比例约 40% : 60%，以动手能力培养为核心：\n\n- 每种肌肉测试技术均安排讲师演示、学员分组对练、讲师逐组纠错三个环节\n- 每日下午设临床模拟环节，由讲师邀请真实患者或志愿者进行完整 PAK 评估流程展示\n- 学员之间互相作为测试对象，积累至少 50+ 次真实手感经验\n- Part II 阶段包含学员自带案例的汇报与讲师点评\n\nDAEGAK 认证要求学员在课程结束后提交规定数量的临床案例报告，确保不仅学会了，而且能用出来。",
      keywords: ["实操比例", "动手练习", "患者演示", "临床模拟", "分组对练"],
      related: ["course-structure", "certification-path", "beginner-path"],
    },
    {
      id: "teaching-language",
      question: "课程是中文授课吗？教材是中文的吗？",
      answer: "课程采用中文授课，确保学员无障碍理解所有技术细节：\n\n- 主讲讲师为中文母语，经 DAEGAK 认证\n- 教材为中文翻译版，关键术语同时标注英文/德文原文\n- 所有解剖术语均以中文讲解，辅以国际通用解剖图谱\n- 课程中涉及的国际认证考试内容，会特别标注英文术语以帮助学员后续的国际交流\n\nHans Garten 博士的权威教材《应用肌动学：临床诊断与治疗》已有中文译本，作为课程核心参考书。",
      keywords: ["中文授课", "中文教材", "中文翻译", "教学语言"],
      related: ["certification-path", "course-structure"],
    },
  ],
}

export default course
