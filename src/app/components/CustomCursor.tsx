import { useEffect, useRef } from "react"
import gsap from "gsap"

// 自定义光标：一个滞后跟随鼠标的圆环（lerp 缓动），悬停链接/按钮时放大。
// 保留系统光标，圆环作为拖尾点缀；触摸设备自动隐藏。
export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (window.matchMedia("(pointer: coarse)").matches) return

    const ring = ringRef.current!
    const state = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      rx: window.innerWidth / 2,
      ry: window.innerHeight / 2,
    }

    const onMove = (e: MouseEvent) => {
      state.x = e.clientX
      state.y = e.clientY
    }
    const onOver = (e: MouseEvent) => {
      const interactive = (e.target as HTMLElement).closest(
        "a, button, [role='button'], input, textarea, .tilt-card"
      )
      gsap.to(ring, { scale: interactive ? 1.7 : 1, duration: 0.3, ease: "power2.out" })
    }
    const tick = () => {
      state.rx += (state.x - state.rx) * 0.14
      state.ry += (state.y - state.ry) * 0.14
      gsap.set(ring, { x: state.rx, y: state.ry, xPercent: -50, yPercent: -50 })
    }

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseover", onOver)
    gsap.ticker.add(tick)

    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseover", onOver)
      gsap.ticker.remove(tick)
    }
  }, [])

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null
  }

  return (
    <div
      ref={ringRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] h-8 w-8 rounded-full border border-[#4A7F7B]/60 opacity-70"
    />
  )
}
