"use client"

import Link from "next/link"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"

export function NavBar() {
  return (
    <header className="w-full border-b border-[#C8C8C8] bg-[#0D1B2A]">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-[#FFD700] hover:text-[#00C9A7] transition-colors">
            Stable Stride Capital
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="text-[#F5F5F5] hover:text-[#00C9A7] transition-colors font-medium">
            About
          </Link>
          <Link href="/careers" className="text-[#F5F5F5] hover:text-[#00C9A7] transition-colors font-medium">
            Careers
          </Link>
          <Link href="/contact" className="text-[#F5F5F5] hover:text-[#00C9A7] transition-colors font-medium">
            Contact
          </Link>
          <SignedOut>
            <div className="flex items-center space-x-4">
              <SignInButton mode="modal">
                <Button variant="primary" size="md" className="font-bold">
                  Log In
                </Button>
              </SignInButton>
              
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </nav>
      </div>
    </header>
  )
}

