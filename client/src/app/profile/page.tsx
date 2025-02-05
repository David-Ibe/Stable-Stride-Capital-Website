"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { database } from "@/lib/database"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import type { Profile } from '@/types/database.types'

export default function ProfilePage() {
  const { user } = useAuth()
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProfile = async () => {
      if (!user) return
      try {
        const data = await database.getUserProfile(user.id)
        setProfile(data)
      } catch (error) {
        console.error('Error loading profile:', error)
      } finally {
        setLoading(false)
      }
    }

    loadProfile()
  }, [user])

  if (loading) return <div>Loading...</div>

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow bg-[#0D1B2A] py-12 sm:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-light text-[#FFD700] mb-6">Profile</h1>
          
          <div className="bg-[#1A2837] p-6 rounded-lg max-w-2xl">
            {profile && (
              <div className="space-y-4">
                <div>
                  <label className="block text-[#F5F5F5] mb-2">Email</label>
                  <p className="text-[#F5F5F5]">{user?.email}</p>
                </div>
                {/* Add more profile fields as needed */}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 