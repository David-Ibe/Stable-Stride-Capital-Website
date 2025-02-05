"use client"

import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow bg-[#0D1B2A] py-12 sm:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-3xl sm:text-4xl font-light text-[#FFD700] mb-6 sm:mb-8">Careers</h1>
          <div className="text-[#F5F5F5] space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg">
              Join our team of exceptional individuals who are passionate about quantitative finance 
              and technology.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
              {/* Job Card 1 */}
              <div className="border border-[#C8C8C8] p-4 sm:p-6 rounded-lg hover:border-[#FFD700] transition-colors">
                <h3 className="text-[#FFD700] text-lg sm:text-xl mb-2">Quantitative Researcher</h3>
                <p className="text-[#F5F5F5] mb-4 text-sm sm:text-base">
                  Design and implement statistical arbitrage strategies.
                </p>
                <Button 
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  Apply Now
                </Button>
              </div>
              
              {/* Job Card 2 */}
              <div className="border border-[#C8C8C8] p-4 sm:p-6 rounded-lg hover:border-[#FFD700] transition-colors">
                <h3 className="text-[#FFD700] text-lg sm:text-xl mb-2">Software Engineer</h3>
                <p className="text-[#F5F5F5] mb-4 text-sm sm:text-base">
                  Build high-performance trading systems.
                </p>
                <Button 
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  Apply Now
                </Button>
              </div>
              
              {/* Job Card 3 */}
              <div className="border border-[#C8C8C8] p-4 sm:p-6 rounded-lg hover:border-[#FFD700] transition-colors">
                <h3 className="text-[#FFD700] text-lg sm:text-xl mb-2">Data Scientist</h3>
                <p className="text-[#F5F5F5] mb-4 text-sm sm:text-base">
                  Analyze market data and develop predictive models.
                </p>
                <Button 
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 