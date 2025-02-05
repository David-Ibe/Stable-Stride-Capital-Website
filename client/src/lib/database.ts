import { supabase } from './supabase'
import type { User } from '@/types/database.types'

interface ContactFormData {
  name: string
  company?: string
  email: string
  phone?: string
  reason: string
  message: string
}

export const database = {
  async submitContactForm(formData: ContactFormData) {
    const { data, error } = await supabase
      .from('user_contacts')
      .insert([{
        name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        reason: formData.reason,
        message: formData.message,
        status: 'pending'
      }])
      .select()
      .single()

    if (error) throw error
    return data
  },

  async getContactForms() {
    const { data, error } = await supabase
      .from('contact_forms')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  },

  async getUserProfile(userId: string) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()

    if (error) throw error
    return data
  },

  async updateUserProfile(userId: string, updates: Partial<User>) {
    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', userId)
      .select()
      .single()

    if (error) throw error
    return data
  },

  async getContactFormById(formId: number) {
    const { data, error } = await supabase
      .from('contact_forms')
      .select('*')
      .eq('id', formId)
      .single()

    if (error) throw error
    return data
  },

  async deleteContactForm(formId: number) {
    const { error } = await supabase
      .from('contact_forms')
      .delete()
      .eq('id', formId)

    if (error) throw error
  }
} 