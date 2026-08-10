import { useState } from "react"
import type { Alumni } from "@/data/alumni"

const courseLabels: Record<string, string> = {
  "PAK Part I · 基础培训": "Part I",
  "PAK Part II · 进阶培训": "Part II",
  "两阶段连续报名": "Part I+II",
}

function initials(name: string) {
  return name.slice(0, 1)
}

// ─── Detail modal ─────────────────────────────────────────────────────────────
export function DetailModal({
  alumni,
  onClose,
}: {
  alumni: Alumni
  onClose: () => void
}) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1C1C1A]/60 backdrop-blur-sm p-6">
      <div className="bg-[#F5F5F0] border border-border max-w-[520px] w-full rounded-sm relative overflow-hidden">
        {/* Header */}
        <div className="bg-[#E6E6E0] px-8 py-6 border-b border-border">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#9B9B90] hover:text-foreground transition-colors"
            aria-label="关闭"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <line x1="2" y1="2" x2="14" y2="14" stroke="currentColor" strokeWidth="1.3" />
              <line x1="14" y1="2" x2="2" y2="14" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          </button>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
              <span className="font-['Noto_Serif_SC',serif] text-xl font-semibold text-accent">
                {initials(alumni.name)}
              </span>
            </div>
            <div>
              <p className="font-['Noto_Serif_SC',serif] text-xl font-semibold text-foreground">
                {alumni.name}
              </p>
              {alumni.englishName && (
                <p className="font-['Noto_Sans_SC',sans-serif] text-xs text-[#6B6B62] mt-0.5">
                  {alumni.englishName}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Fields */}
        <div className="px-8 py-6 space-y-5">
          {[
            { label: "姓名", value: alumni.name },
            alumni.englishName && { label: "英文名", value: alumni.englishName },
            { label: "职业", value: alumni.occupation },
            { label: "工作单位", value: alumni.workplace },
            alumni.address && { label: "地址", value: alumni.address },
            alumni.email && { label: "邮箱", value: alumni.email },
          ].filter(Boolean).map((field) => (
            <div key={field!.label} className="flex flex-col gap-1.5">
              <label className="font-['Noto_Sans_SC',sans-serif] text-xs font-medium tracking-[0.05em] text-[#9B9B90]">
                {field!.label}
              </label>
              <p className="font-['Noto_Sans_SC',sans-serif] text-sm text-foreground">
                {field!.value}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-8 py-4 border-t border-border bg-[#EEEEE9]">
          <button
            onClick={onClose}
            className="w-full bg-foreground text-[#F5F5F0] font-['Noto_Sans_SC',sans-serif] text-sm font-medium py-3 rounded-sm hover:bg-[#333330] transition-colors duration-200"
          >
            关闭
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Alumni card ──────────────────────────────────────────────────────────────
export function AlumniCard({ alumni }: { alumni: Alumni }) {
  const [detailOpen, setDetailOpen] = useState(false)

  return (
    <>
      <div className="bg-[#EEEEE9] border border-border p-6 flex flex-col gap-4 hover:border-accent/40 transition-colors duration-200 group rounded-sm">
        {/* Avatar + name row */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
            <span className="font-['Noto_Serif_SC',serif] text-lg font-semibold text-accent">
              {initials(alumni.name)}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-['Noto_Sans_SC',sans-serif] text-sm font-semibold text-foreground truncate">
              {alumni.name}
            </p>
            <p className="font-['Noto_Sans_SC',sans-serif] text-xs text-[#6B6B62] truncate">
              {alumni.title}
            </p>
          </div>
          <span className="font-['Noto_Sans_SC',sans-serif] text-[10px] font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full flex-shrink-0">
            {courseLabels[alumni.course] ?? alumni.course}
          </span>
        </div>

        {/* Bio */}
        <p className="font-['Noto_Sans_SC',sans-serif] text-sm text-[#4A4A45] leading-relaxed flex-1 line-clamp-4">
          {alumni.bio}
        </p>

        {/* Specialties */}
        <div className="flex flex-wrap gap-1.5">
          {alumni.specialties.map((s) => (
            <span
              key={s}
              className="font-['Noto_Sans_SC',sans-serif] text-[11px] text-[#6B6B62] bg-[#F5F5F0] border border-border/50 px-2 py-0.5 rounded-sm"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Meta footer */}
        <div className="flex items-center justify-between pt-2 border-t border-border/40">
          <div className="flex items-center gap-3 text-[11px] font-['Noto_Sans_SC',sans-serif] text-[#9B9B90]">
            <span>{alumni.location}</span>
            <span className="w-px h-3 bg-border" />
            <span>{alumni.graduationYear} 届</span>
          </div>
          <button
            onClick={() => setDetailOpen(true)}
            className="font-['Noto_Sans_SC',sans-serif] text-xs font-medium text-[#6B6B62] hover:text-foreground transition-colors underline underline-offset-2"
          >
            详情
          </button>
        </div>
      </div>

      {detailOpen && (
        <DetailModal alumni={alumni} onClose={() => setDetailOpen(false)} />
      )}
    </>
  )
}
