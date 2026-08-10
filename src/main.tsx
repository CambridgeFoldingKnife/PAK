import { lazy, Suspense, useLayoutEffect } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route, useLocation } from "react-router"
import CustomCursor from "./app/components/CustomCursor.tsx"
import SmoothScroll from "./app/components/SmoothScroll.tsx"
import "./styles/index.css"

// ─── 路由级代码分割：每个页面独立 chunk，按需加载 ────────────────────────────
const App = lazy(() => import("./app/App.tsx"))
const CoursePage = lazy(() => import("./app/CoursePage.tsx"))
const Part1Page = lazy(() => import("./app/Part1Page.tsx"))
const Part2Page = lazy(() => import("./app/Part2Page.tsx"))
const AlumniPage = lazy(() => import("./app/AlumniPage.tsx"))
const FaqPage = lazy(() => import("./app/FaqPage.tsx"))
const ContactPage = lazy(() => import("./app/ContactPage.tsx"))
const LiteraturePage = lazy(() => import("./app/LiteraturePage.tsx"))
const StudentScenesPage = lazy(() => import("./app/StudentScenesPage.tsx"))
const CourseCenterPage = lazy(() => import("./app/CourseCenterPage.tsx"))
const KnowledgePage = lazy(() => import("./app/KnowledgePage.tsx"))

// 禁用浏览器默认的滚动恢复，统一由 ScrollToTop 控制
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual"
}

// 路由切换时始终回到页面顶部。
// 用 useLayoutEffect（绘制前执行）+ 放在 <Routes> 之前挂载，
// 保证先重置滚动位置，再进入页面，避免读到旧位置产生跳变。
function ScrollToTop() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

// 页面 chunk 加载时的占位（极简，与站点风格一致）
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F0]">
      <div className="w-6 h-6 rounded-full border-2 border-[#4A7F7B]/30 border-t-[#4A7F7B] animate-spin" />
    </div>
  )
}

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ScrollToTop />
    <SmoothScroll />
    <CustomCursor />
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/course/part1" element={<Part1Page />} />
        <Route path="/course/part2" element={<Part2Page />} />
        <Route path="/pak-union" element={<AlumniPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/research" element={<LiteraturePage />} />
        <Route path="/student-scenes" element={<StudentScenesPage />} />
        <Route path="/course-center" element={<CourseCenterPage />} />
        <Route path="/knowledge" element={<KnowledgePage />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
)
