"use client"

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { createBrowserSupabase } from '../../lib/supabase/browser'

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState<string | null>(null)
  const router = useRouter()
  const search = useSearchParams()
  const redirectToRaw = search?.get('redirectTo')
  // basic sanitization: only allow internal paths starting with '/'
  const redirectTo = (redirectToRaw && redirectToRaw.startsWith('/') && !redirectToRaw.startsWith('//')) ? redirectToRaw : '/store'

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Signing in...')
    try {
      const supabase = createBrowserSupabase()
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
      setStatus('Signed in successfully. Redirecting...')
      router.push(redirectTo)
    } catch (err: any) {
      setStatus(err.message ?? 'Error signing in')
    }
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Creating account...')
    try {
      const supabase = createBrowserSupabase()
      const { error } = await supabase.auth.signUp({ email, password })
      if (error) throw error
      setStatus('Account created. Check your email to confirm (if required). Redirecting...')
      router.push(redirectTo)
    } catch (err: any) {
      setStatus(err.message ?? 'Error creating account')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 rounded-lg border bg-muted/50">
        <h2 className="text-xl font-semibold mb-4">Sign in</h2>

        <form className="flex flex-col gap-3" onSubmit={handleSignIn}>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-2 rounded-md border"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-2 rounded-md border"
          />
          <div className="flex items-center gap-3">
            <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground rounded-md">Sign in</button>
            <button onClick={handleSignUp} className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md">Create account</button>
            <button type="button" onClick={() => router.back()} className="px-3 py-2 bg-muted rounded-md">Back</button>
          </div>
        </form>

        {status && <p className="mt-3 text-sm">{status}</p>}
      </div>
    </div>
  )
}
