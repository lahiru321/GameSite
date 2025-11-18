import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Optional: if you have server supabase helper, try to insert into contacts table.
import { createServerSupabase } from '@/lib/supabase/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const name = String(body.name || '').trim()
    const email = String(body.email || '').trim()
    const message = String(body.message || '').trim()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Try to insert into Supabase if available
    try {
      const supabase = await createServerSupabase()
      const { error } = await supabase.from('contacts').insert([{ name, email, message, status: 'new' }])
      if (error) {
        // If insert fails, log and continue to return success to client to avoid user frustration
        console.error('Supabase insert error:', error)
      }
    } catch (e) {
      // If Supabase helper not configured or errors, just log and continue
      console.warn('Supabase contacts insert skipped:', e)
    }

    // TODO: optionally send notification email here

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.error('Contact API error', err)
    return NextResponse.json({ error: err?.message ?? 'Server error' }, { status: 500 })
  }
}
