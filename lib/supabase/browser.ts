"use client"

import { createBrowserClient } from '@supabase/ssr'

let supabase: any = null

export function createBrowserSupabase() {
  if (supabase) return supabase
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string | undefined
  const anon = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string | undefined) || (process.env.NEXT_PUBLIC_SUPABASE_URL_PUBLISHABLE_KEY as string | undefined)

  if (!url) {
    throw new Error('NEXT_PUBLIC_SUPABASE_URL is required in your environment')
  }
  if (!anon) {
    throw new Error('NEXT_PUBLIC_SUPABASE_ANON_KEY or NEXT_PUBLIC_SUPABASE_URL_PUBLISHABLE_KEY is required in your environment')
  }

  supabase = createBrowserClient(url, anon, { isSingleton: true })
  return supabase
}
