export interface ContactForm {
  id: number
  created_at: string
  name: string
  company?: string
  email: string
  phone?: string
  reason: string
  message: string
}

export interface User {
  id: string
  email: string
  created_at: string
}

export interface Profile {
  id: string
  user_id: string
  created_at: string
  email: string
  name?: string
  avatar_url?: string
} 