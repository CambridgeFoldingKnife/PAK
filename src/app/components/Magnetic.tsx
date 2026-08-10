import { useEffect, useRef } from "react"
import gsap from "gsap"

// 磁吸按钮：鼠标靠近时按钮向光标方向微偏移（lerp 缓动），移开弹性回弹。
// 桌面端专用，触摸设备无 hover 自动不生效。
export default function Magnetic({
  children,
  strength = 0.35,
}: {
  children: React.ReactNode
  strength?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const el = ref.current!
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      const x = e.clientX - (r.left + r.width / 2)
      const y = e.clientY - (r.top + r.height / 2)
      gsap.to(el, { x: x * strength, y: y * strength, duration: 0.4, ease: "power2.out" })
    }
    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" })
    }
    el.addEventListener("mousemove", onMove)
    el.addEventListener("mouseleave", onLeave)
    return () => {
      el.removeEventListener("mousemove", onMove)
      el.removeEventListener("mouseleave", onLeave)
    }
  }, [strength])

  return (
    <div ref={ref} className="inline-block will-change-transform">
      {children}
    </div>
  )
}
