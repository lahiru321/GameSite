import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export const createServerSupabase = async () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string | undefined
  const anon = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string | undefined) || (process.env.NEXT_PUBLIC_SUPABASE_URL_PUBLISHABLE_KEY as string | undefined)

  if (!url || !anon) {
    throw new Error('either NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY env variables or supabaseUrl and supabaseKey are required!')
  }

  // create cookie methods that work with Next 16's async cookies() API
  const cookieMethods = {
    get: async (name: string) => {
      const store = await cookies()
      const c = store.get(name as any)
      if (!c) return undefined
      return (c as any).value ?? c
    },
    set: async (name: string, value: string, options?: any) => {
      const store = await cookies()
      if ('set' in store) {
        // @ts-ignore
        await store.set(name, value, options)
      }
    },
    remove: async (name: string, options?: any) => {
      const store = await cookies()
      if ('remove' in store) {
        // @ts-ignore
        await store.remove(name, options)
      }
    },
    getAll: async () => {
      const store = await cookies()
      if ('getAll' in store) {
        // @ts-ignore
        return await store.getAll()
      }
      // fallback: try to read a few likely cookie names
      return []
    },
    setAll: async (setCookies: any[]) => {
      const store = await cookies()
      if ('setAll' in store) {
        // @ts-ignore
        await store.setAll(setCookies)
      } else if ('set' in store) {
        for (const c of setCookies) {
          // @ts-ignore
          await store.set(c.name, c.value, c.options)
        }
      }
    },
  }

  return createServerClient(url, anon, { cookies: cookieMethods })
}

export async function getServerSession() {
  const supabase = await createServerSupabase()
  const {
    data: { session },
  } = await supabase.auth.getSession()
  return session
}
