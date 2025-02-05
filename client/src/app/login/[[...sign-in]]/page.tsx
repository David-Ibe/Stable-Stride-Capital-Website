"use client"

import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { SignIn } from "@clerk/nextjs"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow bg-[#0D1B2A] py-12 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-sm sm:max-w-md mx-auto">
            <SignIn 
              appearance={{
                elements: {
                  rootBox: "mx-auto",
                  card: "bg-[#1A2837] p-6 sm:p-8 rounded-lg shadow-lg",
                  headerTitle: "text-3xl sm:text-4xl font-light text-[#FFD700] mb-6 sm:mb-8 text-center",
                  formButtonPrimary: "bg-[#FFD700] hover:bg-[#00C9A7] text-black",
                }
              }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 