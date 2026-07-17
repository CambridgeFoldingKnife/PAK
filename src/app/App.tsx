import { Link } from "react-router";
import Navbar from "@/app/components/Navbar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/app/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// ─── Reusable placeholder rectangle ───────────────────────────────────────────
function Placeholder({
  label,
  className = "",
  aspectRatio = "aspect-[4/3]",
}: {
  label: string;
  className?: string;
  aspectRatio?: string;
}) {
  return (
    <div
      className={`${aspectRatio} ${className} bg-[#C8C8C2] flex items-center justify-center rounded-sm overflow-hidden`}
    >
      <span
        className="text-[#6B6B62] text-sm font-['Inter',sans-serif] tracking-wide px-4 text-center"
        style={{ fontStyle: "italic" }}
      >
        {label}
      </span>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 pt-24 pb-32 lg:pt-32 lg:pb-40">
      <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-16 items-center">
        {/* Left text */}
        <div>
          <p className="font-['Inter',sans-serif] text-xs font-medium tracking-[0.15em] uppercase text-accent mb-6">
            ICAK 亚太地区合作伙伴 · 德国 DÄGAK 官方认证
          </p>
          <h1
            className="font-['Playfair_Display',serif] text-5xl lg:text-6xl font-semibold leading-[1.12] text-foreground mb-6"
          >
            掌握应用肌动学，
            <br />
            <em className="not-italic font-normal" style={{ fontStyle: "italic" }}>
              读懂身体的语言
            </em>
          </h1>
          <p className="font-['Inter',sans-serif] text-base text-[#6B6B62] mb-10 leading-relaxed max-w-[440px]">
            DÄGAK 创始人 Hans Garten 博士亲授 — 全球权威应用肌动学课程，
            系统训练结构、化学与心理三维平衡诊疗思维。
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              to="/contact"
              className="inline-flex items-center px-7 py-3.5 bg-foreground text-[#F5F5F0] font-['Inter',sans-serif] text-sm font-medium rounded-sm hover:bg-[#333330] transition-colors duration-200"
            >
              预约课程咨询
            </Link>
          </div>

          {/* Instructor brief */}
          <div className="border-t border-border pt-8">
            <p className="font-['Inter',sans-serif] text-xs font-medium tracking-[0.12em] uppercase text-accent mb-2">
              首席讲师
            </p>
            <h3 className="font-['Playfair_Display',serif] text-2xl font-semibold text-foreground mb-1">
              Dr. Med. Hans Garten
            </h3>
            <p className="font-['Inter',sans-serif] text-sm text-[#6B6B62] mb-4">
              DÄGAK 创始人 · ICAK 资深讲师
            </p>
            <p className="font-['Inter',sans-serif] text-sm text-[#4A4A45] leading-relaxed mb-4">
              全球应用肌动学领域最具影响力的教育者之一，35+ 年临床与教学经验，
              将严谨科学与直觉性临床洞察相结合，帮助数千名医疗专业人士掌握 PAK 体系。
            </p>
            <div className="flex flex-wrap gap-2">
              {["ICAK 国际认证讲师", "DÄGAK 创始会员", "德国运动医学协会"].map((tag) => (
                <span
                  key={tag}
                  className="font-['Inter',sans-serif] text-xs text-[#4A4A45] border border-border/60 px-3 py-1.5 rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="relative">
          <img
            src="/assets/汉斯.jpg"
            alt="Dr. Med. Hans Garten"
            className="w-full aspect-[3/4] object-cover rounded-sm"
          />
          <div className="absolute -bottom-6 -left-6 bg-[#F5F5F0] border border-border px-5 py-4 max-w-[220px] shadow-sm">
            <p className="font-['Playfair_Display',serif] text-2xl font-semibold text-foreground">30+</p>
            <p className="font-['Inter',sans-serif] text-xs text-[#6B6B62] mt-0.5">年临床与教学经验</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Quote block ──────────────────────────────────────────────────────────────
function QuoteBlock() {
  return (
    <section className="bg-[#E6E6E0] py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[760px] mx-auto text-center mb-16">
          <p
            className="font-['Playfair_Display',serif] text-3xl lg:text-4xl font-normal leading-snug text-foreground"
            style={{ fontStyle: "italic" }}
          >
            "当你准备好提升诊疗能力，
            <br />
            PAK 就是你的全新起点。"
          </p>
        </div>
        <Carousel
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
          className="w-full"
        >
          <CarouselContent>
            {[
              { src: "/assets/1.jpg", alt: "课程实操教学" },
              { src: "/assets/2.jpeg", alt: "培训教室" },
              { src: "/assets/4.png", alt: "课程讲授" },
              { src: "/assets/5.png", alt: "课程实操教学" },
              { src: "/assets/6.png", alt: "培训教室" },
            ].map((img) => (
              <CarouselItem key={img.src}>
                <div className="aspect-[16/9] overflow-hidden rounded-sm">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 -translate-y-0 top-1/2 bg-[#F5F5F0]/80 hover:bg-[#F5F5F0] text-foreground border-border" />
          <CarouselNext className="right-4 -translate-y-0 top-1/2 bg-[#F5F5F0]/80 hover:bg-[#F5F5F0] text-foreground border-border" />
        </Carousel>
      </div>
    </section>
  );
}

// ─── Feature split ────────────────────────────────────────────────────────────
function FeatureSplit() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-24 lg:py-36">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Text */}
        <div>
          <p className="font-['Inter',sans-serif] text-xs font-medium tracking-[0.15em] uppercase text-accent mb-5">
            临床思维重构
          </p>
          <h2 className="font-['Playfair_Display',serif] text-4xl lg:text-5xl font-semibold leading-[1.15] text-foreground mb-7">
            重新定义你的
            <br />
            临床诊疗路径
          </h2>
          <p className="font-['Inter',sans-serif] text-base text-[#6B6B62] leading-relaxed mb-6">
            应用肌动学（PAK）将人体视为结构、化学与心理三者相互交织的整体系统。
            传统诊疗往往只关注症状所在，而 PAK 让你能透过徒手肌肉测试，
            精准识别各系统之间的失衡关联，从而制定更有效的干预方案。
          </p>
          <p className="font-['Inter',sans-serif] text-base text-[#6B6B62] leading-relaxed mb-10">
            无论你是物理治疗师、整脊医生、自然疗法师还是全科医生，
            PAK 都能为你的临床工作带来全新的视角与工具。
          </p>
          <div className="flex flex-col gap-3">
            {[
              "结构层面：筋膜、关节与神经肌肉失衡评估",
              "化学层面：营养、毒素负荷与代谢功能检测",
              "心理层面：情绪模式对身体张力的影响分析",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1.5 w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent block" />
                </span>
                <span className="font-['Inter',sans-serif] text-sm text-[#4A4A45]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div>
          <img
            src="/assets/3.jpeg"
            alt="脊柱模型讲解"
            className="w-full aspect-[4/3] object-cover rounded-sm"
          />
        </div>
      </div>
    </section>
  );
}

// ─── Four features ────────────────────────────────────────────────────────────
const features = [
  {
    number: "01",
    title: "徒手肌肉测试",
    desc: "掌握标准化徒手肌肉测试技术，精确评估神经肌肉功能，识别机体失代偿模式，建立客观诊断指标。",
  },
  {
    number: "02",
    title: "损伤回忆技术 IRT",
    desc: "学习 IRT（Injury Recall Technique）解锁陈旧性损伤残留的神经抑制模式，恢复组织正常功能表达。",
  },
  {
    number: "03",
    title: "多疗法整合",
    desc: "将 PAK 与针灸、颅骶、营养医学等疗法深度整合，构建个性化、多维度的综合干预方案。",
  },
  {
    number: "04",
    title: "国际认证路径",
    desc: "完成 DÄGAK 规定的 100 小时理论与实操培训，通过考核后即可获得 ICAK 国际认证资格。",
  },
];

function Features() {
  return (
    <section className="bg-[#F5F5F0] py-24 lg:py-36">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 mb-20 items-end">
          <h2 className="font-['Playfair_Display',serif] text-4xl lg:text-5xl font-semibold leading-[1.15] text-foreground">
            健衡学园提供全方位、系统化的 PAK 认证培训体系
          </h2>
          <p className="font-['Inter',sans-serif] text-base text-[#6B6B62] leading-relaxed">
            从基础理论到高阶临床应用，每一个模块均由 DÄGAK 认证讲师设计，
            确保内容与国际最新临床标准保持同步，助力学员在真实诊疗情境中快速落地。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {features.map((f) => (
            <div
              key={f.number}
              className="bg-[#F5F5F0] p-8 flex flex-col gap-6 hover:bg-[#E6E6E0] transition-colors duration-200 group"
            >
              <span className="font-['Inter',sans-serif] text-xs font-medium tracking-[0.15em] text-accent">
                {f.number}
              </span>
              <h3 className="font-['Playfair_Display',serif] text-xl font-semibold text-foreground leading-snug">
                {f.title}
              </h3>
              <p className="font-['Inter',sans-serif] text-sm text-[#6B6B62] leading-relaxed flex-1">
                {f.desc}
              </p>
              <div className="w-6 h-px bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
const footerCols = [
  {
    title: "课程",
    links: [{ label: "PAK Part I 基础培训", href: "/course/part1" }, { label: "PAK Part II 进阶培训", href: "/course/part2" }],
  },
  {
    title: "关于",
    links: [
      { label: "健衡学园简介", href: "http://jianhengkf.com/lists/50.html" },
      { label: "ICAK 合作关系", href: "#" },
      { label: "DÄGAK 官方认证", href: "#" },
    ],
  },
  {
    title: "资源",
    links: [{ label: "应用肌动学入门", href: "/intro" }, { label: "临床研究文献", href: "/research" }],
  },
];

function Footer() {
  return (
    <footer className="bg-[#1C1C1A] pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[4fr_2fr_2fr_2fr] gap-12 mb-16">
          {/* Brand */}
          <div>
            <p className="font-['Playfair_Display',serif] text-lg font-semibold text-[#F5F5F0] mb-4">
              PAK · 健衡学园
            </p>
            <p className="font-['Inter',sans-serif] text-sm text-[#6B6B62] leading-relaxed max-w-[280px]">
              ICAK 亚太地区官方合作伙伴，提供德国 DÄGAK 认证的应用肌动学培训课程。
              致力于为中文医疗社群带来世界级的整体诊疗教育。
            </p>
            <div className="flex gap-6 mt-6">
              <div className="flex flex-col items-center gap-2">
                <img src="/assets/微信公众号.png" alt="微信公众号" className="h-16 w-auto rounded-sm" />
                <span className="font-['Inter',sans-serif] text-xs text-[#6B6B62]">微信公众号</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img src="/assets/Theratools公众号.png" alt="Theratools" className="h-16 w-auto rounded-sm" />
                <span className="font-['Inter',sans-serif] text-xs text-[#6B6B62]">Theratools</span>
              </div>
            </div>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              <p className="font-['Inter',sans-serif] text-xs font-medium tracking-[0.12em] uppercase text-[#9B9B90] mb-5">
                {col.title}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-['Inter',sans-serif] text-sm text-[#6B6B62] hover:text-[#9B9B90] transition-colors duration-200"
                    >{link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#333330] pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="font-['Inter',sans-serif] text-xs text-[#4A4A45]">
            © 2026 PAK（应用肌动学） 健衡学园. 保留所有权利。
          </p>
          <div className="flex gap-6">
            {["隐私政策", "使用条款", "联系我们"].map((l) => (
              <a
                key={l}
                href="#"
                className="font-['Inter',sans-serif] text-xs text-[#4A4A45] hover:text-[#6B6B62] transition-colors duration-200"
              >{l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-['Inter',sans-serif] overflow-x-hidden">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <QuoteBlock />
        <FeatureSplit />
        <Features />
      </main>
      <Footer />
    </div>
  );
}