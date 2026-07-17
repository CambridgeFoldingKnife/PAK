import type { FAQCategory } from "./faq-types"

const comparison: FAQCategory = {
  id: "comparison",
  label: "对比选择",
  description: "PAK 与其他疗法/体系的比较",
  items: [
    {
      id: "pak-vs-ak",
      question: "应用肌动学（PAK）和触康健（Touch for Health）一样吗？",
      answer: "两者有关联但定位完全不同：\n\n- 应用肌动学（PAK）：面向医疗专业人士的临床诊断与治疗体系，需系统学习解剖、生理、病理基础，通过徒手肌肉测试进行功能性诊断并制定整合治疗方案。要求从业者具备医学专业背景。\n- 触康健（Touch for Health）：由 John Thie 博士基于应用肌动学原理简化后开发的大众健康自护方法，面向普通公众和非医疗从业者，侧重于日常健康维护和压力管理，不涉及疾病诊断。\n\n可以这样理解：触康健是 PAK 的民用简化版，而 PAK 是完整的临床诊疗工具。如果你是有执业资质的医疗健康专业人士，PAK 认证培训会是更适合的选择。",
      keywords: ["触康健", "Touch for Health", "John Thie", "区别", "对比", "简化版"],
      related: ["what-is-pak", "who-for", "pak-vs-others"],
    },
    {
      id: "pak-vs-acupuncture",
      question: "PAK 和针灸/中医有什么异同？可以结合使用吗？",
      answer: "PAK 与针灸/中医有深层的相通之处，也有各自的独特性：\n\n相通之处：都强调整体观，不把症状孤立看待；都关注功能而非仅仅是结构；PAK 的肌肉-经络对应关系与中医经络学说高度吻合；Chapman 反射点与中医腧穴有大量位置重叠。\n\n互补之处：PAK 提供了一套可操作、可重复的功能性评估工具（肌肉测试），可以客观化中医辨证中的一些判断；针灸治疗师可以通过 PAK 评估来验证选穴的准确性——针刺后肌肉功能是否改善；PAK 的化学/营养维度补充了中医药食同源理论在现代营养学层面的解释。\n\n实际结合：许多针灸师学完 PAK 后，会在针刺前后用肌肉测试确认疗效，也通过 PAK 筛查出隐藏在证背后的化学因素。两者绝非竞争关系，而是互相赋能。",
      keywords: ["针灸", "中医", "经络", "穴位", "结合", "中西医结合", "腧穴"],
      related: ["three-dimensions", "muscle-testing", "who-for"],
    },
    {
      id: "pak-vs-pt",
      question: "我是物理治疗师，PAK 和常规物理治疗有什么不同？需要替代现有方法吗？",
      answer: "PAK 不是物理治疗的替代品，而是升级插件：\n\n常规物理治疗的强项：基于生物力学的评估（ROM、MMT 分级、特殊测试等）；运动疗法、手法治疗、物理因子治疗的标准化方案；循证医学证据丰富，保险报销体系认可。\n\nPAK 的补充价值：常规 MMT 分级告诉你这块肌肉力量是 4 级，PAK 告诉你这块肌肉为什么不能是 5 级——是神经抑制？营养缺乏？内脏反射？PAK 提供超越生物力学层面的筛查工具（化学和心理维度），帮助判断患者的腰痛是腰部本身的问题还是食物过敏引起的反射或旧伤记忆。\n\n实际上，许多物理治疗师在临床中已经无意识地在使用类似的整体思维，PAK 只是给了你一套系统化的工具来执行它。你不需要放弃现有方法，PAK 是叠加在你的物理治疗技能之上的一层新能力。",
      keywords: ["物理治疗", "physiotherapy", "PT", "康复", "区别", "补充"],
      related: ["who-for", "what-is-pak", "three-dimensions", "chronic-pain"],
    },
  ],
}

export default comparison
