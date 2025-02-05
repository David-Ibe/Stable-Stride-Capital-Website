import { NavBar } from "../components/nav-bar"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"


export const metadata = {
  title: "Stable Stride Capital - Investment Management Firm",
  description:
    "Stable Stride Capital is an investment management firm that employs mathematical and statistical methods in the design and execution of its investment programs.",
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <HeroSection />
      </main>
      <Footer />
    </div>
  )
}

