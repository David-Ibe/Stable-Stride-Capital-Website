import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"
import { ClerkProvider } from "@clerk/nextjs"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "%s | Stable Stride Capital",
    default: "Stable Stride Capital - Investment Management Firm",
  },
  description:
    "Stable Stride Capital is an investment management firm that employs mathematical and statistical methods in the design and execution of its investment programs.",
  keywords: ["investment management", "mathematical methods", "statistical methods", "investment programs"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <body className={inter.className}>
          {children}
          
        </body>
      </html>
    </ClerkProvider>
  )
}

