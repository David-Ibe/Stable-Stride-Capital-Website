"use client"

import { useEffect, useState } from "react"

import { database } from "@/lib/database"
import { ContactForm } from "@/types/database.types"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"

export default function DashboardPage() {
  const [forms, setForms] = useState<ContactForm[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadForms = async () => {
      try {
        const data = await database.getContactForms()
        setForms(data)
      } catch (error) {
        console.error('Error loading forms:', error)
      } finally {
        setLoading(false)
      }
    }

    loadForms()
  }, [])

  const handleDelete = async (formId: number) => {
    try {
      await database.deleteContactForm(formId)
      setForms(forms.filter(form => form.id !== formId))
    } catch (error) {
      console.error('Error deleting form:', error)
    }
  }

  if (loading) return <div>Loading...</div>

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow bg-[#0D1B2A] py-12 sm:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-light text-[#FFD700] mb-6">Dashboard</h1>
          
          <div className="space-y-6">
            {forms.map(form => (
              <div key={form.id} className="bg-[#1A2837] p-6 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-[#FFD700] text-xl mb-2">{form.name}</h3>
                    <p className="text-[#F5F5F5] mb-1">{form.email}</p>
                    <p className="text-[#F5F5F5] mb-2">{form.reason}</p>
                    <p className="text-[#F5F5F5]">{form.message}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(form.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 