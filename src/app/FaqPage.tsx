import FaqSection from "@/app/components/faq/FaqSection"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function FaqPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-['Inter',sans-serif] overflow-x-hidden">
      <Navbar />
      <main className="pt-16">
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}
