import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "lenis"

// 全局 Lenis 平滑滚动，并与 ScrollTrigger 联动，全站统一滚动手感。
// 挂载一次、全站生效；离开页面无需销毁（应用生命周期内常驻）。
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const lenis = new Lenis()
    lenis.on("scroll", ScrollTrigger.update)

    const raf = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(raf)
      gsap.ticker.lagSmoothing(500)
    }
  }, [])

  return null
}
