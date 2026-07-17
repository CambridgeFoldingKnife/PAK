import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router"
import App from "./app/App.tsx"
import CoursePage from "./app/CoursePage.tsx"
import Part1Page from "./app/Part1Page.tsx"
import Part2Page from "./app/Part2Page.tsx"
import IntroPage from "./app/IntroPage.tsx"
import AlumniPage from "./app/AlumniPage.tsx"
import FaqPage from "./app/FaqPage.tsx"
import ContactPage from "./app/ContactPage.tsx"
import LiteraturePage from "./app/LiteraturePage.tsx"
import "./styles/index.css"

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/course" element={<CoursePage />} />
      <Route path="/course/part1" element={<Part1Page />} />
      <Route path="/course/part2" element={<Part2Page />} />
      <Route path="/intro" element={<IntroPage />} />
      <Route path="/pak-union" element={<AlumniPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/research" element={<LiteraturePage />} />
    </Routes>
  </BrowserRouter>
)
