"use client"

import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { database } from "@/lib/database"

const countries = [
  { name: "United States", code: "+1", id: "US+1" },
  { name: "United Kingdom", code: "+44", id: "UK+44" },
  { name: "China", code: "+86", id: "CN+86" },
  { name: "India", code: "+91", id: "IN+91" },
  { name: "Japan", code: "+81", id: "JP+81" },
  { name: "Germany", code: "+49", id: "DE+49" },
  { name: "France", code: "+33", id: "FR+33" },
  { name: "Italy", code: "+39", id: "IT+39" },
  { name: "Canada", code: "+1", id: "CA+1" },
  { name: "Nigeria", code: "+234", id: "NG+234" },
  { name: "Australia", code: "+61", id: "AU+61" },
  { name: "Brazil", code: "+55", id: "BR+55" },
  { name: "Russia", code: "+7", id: "RU+7" },
  { name: "South Korea", code: "+82", id: "KR+82" },
  { name: "Spain", code: "+34", id: "ES+34" },
  { name: "Mexico", code: "+52", id: "MX+52" },
  { name: "Indonesia", code: "+62", id: "ID+62" },
  { name: "Netherlands", code: "+31", id: "NL+31" },
  { name: "Saudi Arabia", code: "+966", id: "SA+966" },
  { name: "Switzerland", code: "+41", id: "CH+41" },
  { name: "Singapore", code: "+65", id: "SG+65" }
].sort((a, b) => a.name.localeCompare(b.name))

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
    captcha: ""
  })
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [responseMessage, setResponseMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formData.captcha !== "11") {
      setResponseMessage("Incorrect captcha answer")
      setSubmitStatus('error')
      return
    }

    setSubmitStatus('loading')
    try {
      console.log('Submitting form data:', formData)
      
      const response = await database.submitContactForm({
        name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        reason: formData.reason,
        message: formData.message
      })
      
      console.log('Supabase response:', response)
      
      setResponseMessage("Thank you for your message. We'll get back to you soon!")
      setSubmitStatus('success')
      setFormData({ name: "", company: "", email: "", phone: "", reason: "", message: "", captcha: "" })
    } catch (error: unknown) {
      console.error('Error details:', error instanceof Error ? error.message : error)
      setResponseMessage(`Failed to send message: ${error instanceof Error ? error.message : 'Unknown error'}`)
      setSubmitStatus('error')
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow bg-[#0D1B2A] py-12 sm:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-light text-[#FFD700] mb-6">Contact Us</h1>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="text-[#F5F5F5] space-y-6">
              <p className="text-lg">
                For career-related inquiries, please visit our <a href="/careers" className="text-[#FFD700] hover:text-[#00C9A7]">Jobs page</a>.
              </p>
              <p className="text-lg">
                For all other inquiries, please submit the form below.
              </p>
              <div className="space-y-4">
                <p>Email: info@stablestride.com</p>
                <p>Phone: +1 (212) 555-0123</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-[#1A2837] p-6 rounded-lg">
              <div>
                <label htmlFor="name" className="block text-[#F5F5F5] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full p-3 rounded-lg bg-white text-gray-900"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-[#F5F5F5] mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full p-3 rounded-lg bg-white text-gray-900"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#F5F5F5] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full p-3 rounded-lg bg-white text-gray-900"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-[#F5F5F5] mb-2">
                  Phone
                </label>
                <div className="flex">
                  <select className="p-3 rounded-l-lg bg-white text-gray-900 border-r">
                    {countries.map((country) => (
                      <option key={country.id} value={country.code}>
                        {country.name} {country.code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-3 rounded-r-lg bg-white text-gray-900"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="reason" className="block text-[#F5F5F5] mb-2">
                  Reason for Contact *
                </label>
                <select
                  id="reason"
                  required
                  className="w-full p-3 rounded-lg bg-white text-gray-900"
                  value={formData.reason}
                  onChange={(e) => setFormData({...formData, reason: e.target.value})}
                >
                  <option value="">Select a reason</option>
                  <option value="investment">Investment Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-[#F5F5F5] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full p-3 rounded-lg bg-white text-gray-900"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="captcha" className="block text-[#F5F5F5] mb-2">
                  What is the sum of 3 and 8? *
                </label>
                <input
                  type="text"
                  id="captcha"
                  required
                  className="w-full p-3 rounded-lg bg-white text-gray-900"
                  value={formData.captcha}
                  onChange={(e) => setFormData({...formData, captcha: e.target.value})}
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={submitStatus === 'loading'}
              >
                {submitStatus === 'loading' ? 'Submitting...' : 'Submit'}
              </Button>
            </form>
          </div>

          {submitStatus === 'success' && (
            <p className="text-green-500 text-center mt-4">{responseMessage}</p>
          )}

          {submitStatus === 'error' && (
            <p className="text-red-500 text-center mt-4">{responseMessage}</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
} 