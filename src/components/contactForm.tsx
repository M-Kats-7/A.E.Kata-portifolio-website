import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function ContactForm() {

  const navigate = useNavigate()

  // 1. Core Managed Input States
  const [email, setEmail] = useState('')
  const [requestType, setRequestType] = useState('General Inquiry')
  const [description, setDescription] = useState('')

  // 2. Validation & UX States
  const [emailError, setEmailError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  const [showModal, setShowModal] = useState<boolean>(false)

  // Email Regex Validator
  const validateEmail = (val: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!val) {
      setEmailError('Email address is required.')
      return false
    } else if (!emailRegex.test(val)) {
      setEmailError('Please enter a valid email address (e.g., name@domain.com).')
      return false
    }
    setEmailError(null)
    return true
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    if (emailError) validateEmail(value) // Clear error on edit if valid
  }

  // 3. Native asynchronous submission handler using Web3Forms
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus(null)

    // Pre-flight validation check
    const isEmailValid = validateEmail(email)
    if (!isEmailValid) return

    setIsSubmitting(true)

    // Access Key from Vite env
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          email: email,
          subject: `New Portfolio Inquiry: ${requestType}`,
          request_type: requestType,
          message: description,
          from_name: "Portfolio Contact Form"
        }),
      })

      const data = await response.json()

      if (data.success) {
        // Clear inputs upon successful pipeline resolution
        setEmail('')
        setDescription('')
        setEmailError(null)
        
        // Trigger the success modal popup
        setShowModal(true)
      } else {
        setSubmitStatus({ type: 'error', message: data.message || 'Pipeline execution failed. Please check your config.' })
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Network connection breakdown. Please try again later.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-center items-center px-6 py-12">
      <div className="w-full max-w-2xl bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm sm:p-10">
        
        {/* Navigation back to main single-page layout */}
        <Link to="/" className="inline-flex items-center text-sm font-medium text-teal-700 hover:underline mb-6">
          ← Back to Portfolio
        </Link>

        <p className="text-sm uppercase tracking-[0.35em] text-teal-700">Contact</p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-950">Let’s build something together</h2>
        <p className="mt-2 text-slate-600">
          Fill out your build requirements, and the custom serverless microservice will handle the data payload instantly.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">
              Your Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={handleEmailChange}
              onBlur={() => validateEmail(email)}
              className={`mt-1 block w-full rounded-xl border bg-white px-4 py-2.5 text-sm shadow-sm transition focus:outline-none focus:ring-1 ${
                emailError 
                  ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500' 
                  : 'border-slate-300 focus:border-teal-500 focus:ring-teal-500'
              }`}
              placeholder="developer@example.com"
            />
            {emailError && (
              <p className="mt-1.5 text-xs text-rose-600 font-medium">{emailError}</p>
            )}
          </div>

          {/* Request Type Dropdown */}
          <div>
            <label htmlFor="requestType" className="block text-sm font-medium text-slate-700">
              Project Classification
            </label>
            <select
              id="requestType"
              value={requestType}
              onChange={(e) => setRequestType(e.target.value)}
              className="mt-1 block w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
            >
              <option>General Inquiry</option>
              <option>Full-Stack Web App Build</option>
              <option>CAD Modeling or Engineering Design</option>
              <option>Performance Optimization Audit</option>
            </select>
          </div>

          {/* Project Blueprint Textarea */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-slate-700">
              Project Blueprint Summary
            </label>
            <textarea
              id="description"
              required
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              placeholder="Outline the core technical scope or features you are aiming to build..."
            />
          </div>

          {/* Status Notifications */}
          {submitStatus && submitStatus.type === 'error' && (
            <div className="p-4 rounded-xl text-sm font-medium bg-rose-50 text-rose-800">
              {submitStatus.message}
            </div>
          )}

          {/* Submit Control Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {isSubmitting ? 'Transmitting Specs...' : 'Initialize Build Request'}
          </button>
        </form>
      </div>

      {/* --- SUCCESS MODAL POPUP --- */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-xl text-center border border-slate-100">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h3 className="text-xl font-semibold text-slate-950">Transmission Complete</h3>
            <p className="mt-2 text-sm text-slate-600">
              Your build requirements have been received. I will review the specification details and follow up shortly.
            </p>

            <button
              onClick={() => navigate('/')}
              className="mt-6 w-full inline-flex items-center justify-center rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Back to Portfolio
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ContactForm