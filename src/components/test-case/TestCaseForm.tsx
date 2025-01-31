'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'

interface TestCaseFormData {
  title: string
  steps: string
  expected: string
}

export default function TestCaseForm({ onSubmit }: { 
  onSubmit: (data: TestCaseFormData) => Promise<void> 
}) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<TestCaseFormData>()
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null)

  const handleFormSubmit = async (data: TestCaseFormData) => {
    try {
      await onSubmit(data)
      setMessage({ text: 'Test case saved successfully!', type: 'success' })
      reset()
    } catch (error) {
      console.error('Submission error:', error)
      setMessage({ 
        text: error instanceof Error ? error.message : 'Error saving test case', 
        type: 'error' 
      })
    }
  }

  return (
    <div className="space-y-4">
      {message && (
        <div className={`p-4 rounded-lg ${
          message.type === 'success' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {message.text}
        </div>
      )}
      
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Test Title</label>
          <input
            {...register('title', { required: true })}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          />
          {errors.title && <span className="text-red-500 text-sm">Title is required</span>}
        </div>
        
        <div>
          <label className="block text-sm font-medium">Test Steps</label>
          <textarea
            {...register('steps', { required: true })}
            rows={4}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          />
          {errors.steps && <span className="text-red-500 text-sm">Steps are required</span>}
        </div>
        
        <div>
          <label className="block text-sm font-medium">Expected Result</label>
          <input
            {...register('expected', { required: true })}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          />
          {errors.expected && <span className="text-red-500 text-sm">Expected result is required</span>}
        </div>
        
        <button
          type="submit"
          className="bg-accent text-primary px-4 py-2 rounded-md font-semibold hover:bg-opacity-90"
        >
          Save Test Case
        </button>
      </form>
    </div>
  )
}
