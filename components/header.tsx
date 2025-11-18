"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, ShoppingCart } from 'lucide-react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { createBrowserSupabase } from '../lib/supabase/browser'

type Props = { serverSession?: any }

export default function Header({ serverSession }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [session, setSession] = useState<any>(serverSession ?? null)
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentPath = pathname + (searchParams ? (searchParams.toString() ? `?${searchParams.toString()}` : '') : '')
  const signInHref = `/sign-in?redirectTo=${encodeURIComponent(currentPath)}`

  const supabase = createBrowserSupabase()

  React.useEffect(() => {
    let mounted = true
    const getSession = async () => {
      const { data } = await supabase.auth.getSession()
      if (!mounted) return
      setSession(data.session ?? null)
    }
    getSession()

    const { data: subData } = supabase.auth.onAuthStateChange((_event: string, s: any) => {
      setSession(s ?? null)
      router.refresh()
    })

    return () => {
      mounted = false
      subData.subscription.unsubscribe()
    }
  }, [supabase, router])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }

  return (
    <header className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="font-bold text-primary-foreground text-lg">GV</span>
            </div>
            <span className="text-xl font-bold hidden sm:inline">GameVault</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground/70 hover:text-foreground transition">Home</Link>
            <a href="#about" className="text-foreground/70 hover:text-foreground transition">About</a>
            <Link href="/store" className="text-foreground/70 hover:text-foreground transition">Store</Link>
            <Link href="/contact" className="text-foreground/70 hover:text-foreground transition">Contact</Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-muted rounded-lg transition">
              <ShoppingCart className="w-5 h-5" />
            </button>

            {session?.user ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-foreground/80">{session.user.email}</span>
                <button onClick={handleSignOut} className="px-3 py-1 bg-muted rounded-md text-sm">Sign out</button>
              </div>
            ) : (
              <Link href={signInHref} className="px-3 py-1 bg-muted rounded-md text-sm">Sign in</Link>
            )}

            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 flex flex-col gap-3">
            <Link href="/" className="text-foreground/70 hover:text-foreground transition block">Home</Link>
            <a href="#about" className="text-foreground/70 hover:text-foreground transition block">About</a>
            <Link href="/store" className="text-foreground/70 hover:text-foreground transition block">Store</Link>
            {!session?.user && (
              <Link href={signInHref} className="px-3 py-1 bg-muted rounded-md text-sm block">Sign in</Link>
            )}
            <Link href="/contact" className="text-foreground/70 hover:text-foreground transition block">Contact</Link>
          </nav>
        )}
      </div>
    </header>
  )
}
