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
              <span className="font-['Playfair_Display',serif] text-xl font-semibold text-accent">
                {initials(alumni.name)}
              </span>
            </div>
            <div>
              <p className="font-['Playfair_Display',serif] text-xl font-semibold text-foreground">
                {alumni.name}
              </p>
              {alumni.englishName && (
                <p className="font-['Inter',sans-serif] text-xs text-[#6B6B62] mt-0.5">
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
              <label className="font-['Inter',sans-serif] text-xs font-medium tracking-[0.05em] text-[#9B9B90]">
                {field!.label}
              </label>
              <p className="font-['Inter',sans-serif] text-sm text-foreground">
                {field!.value}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-8 py-4 border-t border-border bg-[#EEEEE9]">
          <button
            onClick={onClose}
            className="w-full bg-foreground text-[#F5F5F0] font-['Inter',sans-serif] text-sm font-medium py-3 rounded-sm hover:bg-[#333330] transition-colors duration-200"
          >
            关闭
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Contact request modal ────────────────────────────────────────────────────
export function ContactModal({
  alumni,
  onClose,
}: {
  alumni: Alumni
  onClose: () => void
}) {
  const [form, setForm] = useState({ name: "", phone: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact request:", { visitor: form, alumni: alumni.id, alumniName: alumni.name })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1C1C1A]/60 backdrop-blur-sm p-6">
        <div className="bg-[#F5F5F0] border border-border max-w-[420px] w-full p-10 text-center rounded-sm">
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-5">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M4 11l5 5 9-9" stroke="#5A8F8B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h4 className="font-['Playfair_Display',serif] text-xl font-semibold text-foreground mb-3">
            已收到你的请求
          </h4>
          <p className="font-['Inter',sans-serif] text-sm text-[#6B6B62] mb-6">
            我们将在一个工作日内把{alumni.name}的联系方式发送到你预留的手机号，请注意查收。
          </p>
          <button
            onClick={onClose}
            className="font-['Inter',sans-serif] text-sm text-accent hover:text-[#4A7F7B] underline underline-offset-2 transition-colors"
          >
            关闭
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1C1C1A]/60 backdrop-blur-sm p-6">
      <div className="bg-[#F5F5F0] border border-border max-w-[420px] w-full p-8 lg:p-10 rounded-sm relative">
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

        <p className="font-['Inter',sans-serif] text-xs font-medium tracking-[0.12em] uppercase text-accent mb-4">
          获取联系方式
        </p>
        <p className="font-['Playfair_Display',serif] text-lg font-semibold text-foreground mb-1">
          {alumni.name}
        </p>
        <p className="font-['Inter',sans-serif] text-sm text-[#6B6B62] mb-6">
          {alumni.title}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block font-['Inter',sans-serif] text-xs font-medium text-[#6B6B62] mb-2">
              你的姓名 <span className="text-accent">*</span>
            </label>
            <input
              required
              type="text"
              placeholder="请输入你的姓名"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-white border border-border px-4 py-3 font-['Inter',sans-serif] text-sm text-foreground placeholder:text-[#9B9B90] focus:outline-none focus:border-accent transition-colors rounded-sm"
            />
          </div>
          <div>
            <label className="block font-['Inter',sans-serif] text-xs font-medium text-[#6B6B62] mb-2">
              手机号 <span className="text-accent">*</span>
            </label>
            <input
              required
              type="tel"
              placeholder="请输入你的手机号"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full bg-white border border-border px-4 py-3 font-['Inter',sans-serif] text-sm text-foreground placeholder:text-[#9B9B90] focus:outline-none focus:border-accent transition-colors rounded-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-accent text-accent-foreground font-['Inter',sans-serif] text-sm font-medium py-3.5 rounded-sm hover:bg-[#4A7F7B] transition-colors duration-200 mt-2"
          >
            确认获取
          </button>
        </form>

        <p className="font-['Inter',sans-serif] text-xs text-[#9B9B90] mt-4 text-center">
          你的信息仅用于本次联系对接，不会用于其他商业用途。
        </p>
      </div>
    </div>
  )
}

// ─── Alumni card ──────────────────────────────────────────────────────────────
export function AlumniCard({ alumni }: { alumni: Alumni }) {
  const [detailOpen, setDetailOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <>
      <div className="bg-[#EEEEE9] border border-border p-6 flex flex-col gap-4 hover:border-accent/40 transition-colors duration-200 group rounded-sm">
        {/* Avatar + name row */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
            <span className="font-['Playfair_Display',serif] text-lg font-semibold text-accent">
              {initials(alumni.name)}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-['Inter',sans-serif] text-sm font-semibold text-foreground truncate">
              {alumni.name}
            </p>
            <p className="font-['Inter',sans-serif] text-xs text-[#6B6B62] truncate">
              {alumni.title}
            </p>
          </div>
          <span className="font-['Inter',sans-serif] text-[10px] font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full flex-shrink-0">
            {courseLabels[alumni.course] ?? alumni.course}
          </span>
        </div>

        {/* Bio */}
        <p className="font-['Inter',sans-serif] text-sm text-[#4A4A45] leading-relaxed flex-1 line-clamp-4">
          {alumni.bio}
        </p>

        {/* Specialties */}
        <div className="flex flex-wrap gap-1.5">
          {alumni.specialties.map((s) => (
            <span
              key={s}
              className="font-['Inter',sans-serif] text-[11px] text-[#6B6B62] bg-[#F5F5F0] border border-border/50 px-2 py-0.5 rounded-sm"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Meta footer */}
        <div className="flex items-center justify-between pt-2 border-t border-border/40">
          <div className="flex items-center gap-3 text-[11px] font-['Inter',sans-serif] text-[#9B9B90]">
            <span>{alumni.location}</span>
            <span className="w-px h-3 bg-border" />
            <span>{alumni.graduationYear} 届</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDetailOpen(true)}
              className="font-['Inter',sans-serif] text-xs font-medium text-[#6B6B62] hover:text-foreground transition-colors underline underline-offset-2"
            >
              详情
            </button>
            <button
              onClick={() => setContactOpen(true)}
              className="font-['Inter',sans-serif] text-xs font-medium text-accent hover:text-[#4A7F7B] transition-colors underline underline-offset-2"
            >
              获取联系方式
            </button>
          </div>
        </div>
      </div>

      {detailOpen && (
        <DetailModal alumni={alumni} onClose={() => setDetailOpen(false)} />
      )}
      {contactOpen && (
        <ContactModal alumni={alumni} onClose={() => setContactOpen(false)} />
      )}
    </>
  )
}
