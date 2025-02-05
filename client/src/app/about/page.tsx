import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow bg-[#0D1B2A] py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-light text-[#FFD700] mb-8">About Us</h1>
          <div className="text-[#F5F5F5] space-y-6">
            <p>
              Stable Stride Capital is a leading quantitative investment management firm that combines 
              advanced mathematical modeling with rigorous statistical analysis to generate consistent returns.
            </p>
            <p>
              Our team of researchers and engineers work together to develop and implement sophisticated 
              trading strategies across global markets.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}