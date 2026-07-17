import type { FAQCategory } from "./faq-types"

const learning: FAQCategory = {
  id: "learning",
  label: "学习路径",
  description: "如何入门、进阶与持续成长",
  items: [
    {
      id: "beginner-path",
      question: "我是完全的新手，应该如何一步步开始学习 PAK？",
      answer: "推荐学习路径如下：\n\n第一步：打好解剖基础（自学，约 2-4 周）\n- 重点复习上肢、下肢、脊柱的核心肌群的起止点和神经支配\n- 了解基本的神经通路概念（传入/传出、反射弧）\n- 推荐资源：Netter 解剖图谱+任意一本标准解剖学教材\n\n第二步：完成 Part I 基础培训（3 天面授）\n- 掌握 40+ 块核心肌肉的标准测试方法\n- 建立肌肉测试=神经系统窗口的核心思维\n\n第三步：临床消化期（2-4 个月）\n- 在你的日常工作中逐项应用所学技术\n- 记录遇到困难的病例，带到 Part II 课堂讨论\n\n第四步：完成 Part II 进阶培训（3 天面授）\n- 学习高阶技术和多维整合\n- 准备认证考核\n\n第五步：持续成长\n- 参加 ICAK 年会和国际研讨会\n- 阅读 PAK 相关临床研究文献\n- 与同行交流，加入全球 PAK 从业者社区",
      keywords: ["新手", "入门", "学习路径", "零基础", "如何开始", "步骤"],
      related: ["course-structure", "certification-path", "prerequisite"],
    },
    {
      id: "prerequisite",
      question: "参加 PAK 培训前需要做哪些准备？有什么推荐书目？",
      answer: "课前准备建议：\n\n必做\n- 复习人体解剖学，重点掌握四肢和脊柱主要肌肉的起止点、功能和神经支配\n- 了解基本的神经生理学概念\n\n推荐书目\n- 《应用肌动学：临床诊断与治疗》——Hans Garten 博士著（课程核心教材，中文译本）\n- 《Netter 人体解剖图谱》——解剖学标准参考\n- 《基础临床按摩治疗学》——了解徒手治疗基本理念\n- ICAK 官方网站（icak.com）的入门文章和案例分享\n\n不必提前练习：不建议在未受训的情况下自行尝试肌肉测试，错误手法形成习惯后反而需要更多时间纠正。课程设计为零基础可入门——先建立正确手法，再做课后练习。",
      keywords: ["准备", "推荐书目", "教材", "解剖", "Garten", "Netter"],
      related: ["beginner-path", "teaching-language", "course-structure"],
    },
  ],
}

export default learning
