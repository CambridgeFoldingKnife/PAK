import alumniData from "@/data/alumni"
import { AlumniCard } from "@/app/components/alumni/AlumniCard"

export default function AlumniSection() {
  return (
    <section id="alumni" className="bg-[#E6E6E0] py-24 lg:py-36">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <p className="font-['Inter',sans-serif] text-xs font-medium tracking-[0.15em] uppercase text-accent mb-4">
            学员目录
          </p>
          <h2 className="font-['Playfair_Display',serif] text-4xl lg:text-5xl font-semibold leading-[1.15] text-foreground mb-5">
            他们已经在实践中验证了 PAK
          </h2>
          <p className="font-['Inter',sans-serif] text-base text-[#6B6B62] leading-relaxed max-w-[600px]">
            来自不同执业背景的学员，将应用肌动学融入各自的专业领域——
            点击获取联系方式，与同行直接交流，了解 PAK 真实落地效果。
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {alumniData.map((a) => (
            <AlumniCard key={a.id} alumni={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
