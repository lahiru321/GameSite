import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createServerClient } from '@supabase/ssr'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) || (process.env.NEXT_PUBLIC_SUPABASE_URL_PUBLISHABLE_KEY)
  if (!url || !key) return res

  // cookie helpers for middleware using req and res
  const cookieMethods = {
    getAll: async () => {
      const all = [] as any[]
      // NextRequest.cookies has getAll in Edge runtime
      if (req.cookies) {
        try {
          const names = [] as string[]
          // attempt to read some cookies (getAll may not be available on this API), fall back to header
          if (typeof (req as any).cookies.getAll === 'function') {
            return (req as any).cookies.getAll()
          }
        } catch (e) {}
      }
      const header = req.headers.get('cookie')
      if (header) {
        // naive parse
        header.split(';').forEach((c) => {
          const [name, ...rest] = c.split('=')
          all.push({ name: name.trim(), value: rest.join('=').trim() })
        })
      }
      return all
    },
    setAll: async (setCookies: any[]) => {
      for (const c of setCookies) {
        if (res.cookies && typeof res.cookies.set === 'function') {
          // @ts-ignore
          res.cookies.set(c.name, c.value, c.options)
        }
      }
    },
  }

  const supabase = createServerClient(url, key, { cookies: cookieMethods })
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    const attempted = req.nextUrl.pathname + (req.nextUrl.search || '')
    const redirectUrl = new URL(`/sign-in?redirectTo=${encodeURIComponent(attempted)}`, req.url)
    return NextResponse.redirect(redirectUrl)
  }

  return res
}

export const config = {
  matcher: ['/store/:path*'],
}
