'use client'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

interface ContactFormData {
  name: string
  email: string
  message: string
}

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>()
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null)
  const [honeypot, setHoneypot] = useState('')

  const onSubmit = async (data: ContactFormData) => {
    try {
      if (honeypot) {
        throw new Error('Bot detected')
      }
      setMessage(null)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to send message')
      }

      setMessage({ text: 'Message sent successfully!', type: 'success' })
      reset()
    } catch (error) {
      console.error('Submission error:', error)
      setMessage({ 
        text: error instanceof Error ? error.message : 'Error sending message. Please try again.', 
        type: 'error' 
      })
    }
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-header font-bold mb-8">
        Let&apos;s Build the Future of QA Together
      </h1>
      
      {/* Message Notification */}
      {message && (
        <div className={`mb-6 p-4 rounded-lg ${
          message.type === 'success' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          <div className="flex justify-between items-center">
            <span>{message.text}</span>
            <button 
              onClick={() => setMessage(null)}
              className="text-lg font-semibold hover:opacity-75"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Honeypot Field */}
        <div className="absolute opacity-0 h-0 w-0 overflow-hidden">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            className="absolute opacity-0 h-0 w-0"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            {...register('name', { required: true })}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          />
          {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            {...register('email', { required: true })}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          />
          {errors.email && <span className="text-red-500 text-sm">Valid email is required</span>}
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            {...register('message', { required: true })}
            rows={4}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          />
          {errors.message && <span className="text-red-500 text-sm">Message is required</span>}
        </div>
        <button
          type="submit"
          className="bg-accent text-primary px-6 py-2 rounded-md font-semibold hover:bg-opacity-90 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
