"use client"

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus(null)
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body?.error || 'Failed to submit')
      }

      setStatus('Message sent. We will get back to you shortly.')
      setName('')
      setEmail('')
      setMessage('')
    } catch (err: any) {
      setStatus(err?.message ?? 'Error submitting the form')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-background pt-16">
      <Header />

      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <p className="text-sm text-primary font-semibold uppercase tracking-wider">Contact</p>
            <h1 className="text-3xl md:text-4xl font-bold mt-2">Get in touch</h1>
            <p className="text-foreground/60 mt-2">Have questions or need help? Send us a message and we'll respond as soon as possible.</p>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div>
                <label className="text-sm font-medium">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full mt-2 p-2 rounded-md border"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full mt-2 p-2 rounded-md border"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full mt-2 p-2 rounded-md border h-36"
                  placeholder="How can we help?"
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-md font-semibold disabled:opacity-60"
                >
                  {loading ? 'Sending...' : 'Send message'}
                </button>
                <button
                  type="button"
                  onClick={() => { setName(''); setEmail(''); setMessage(''); setStatus(null) }}
                  className="px-3 py-2 bg-muted rounded-md"
                >
                  Reset
                </button>
              </div>

              {status && <p className="text-sm mt-2">{status}</p>}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
