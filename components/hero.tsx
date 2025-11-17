"use client"

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import dynamic from 'next/dynamic'

const Spline = dynamic(() => import('@splinetool/react-spline').then(mod => mod.default), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-muted animate-pulse rounded-lg" />
})

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Spotlights */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl spotlight" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl spotlight" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl spotlight transform -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto w-full h-full px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8 z-10">
            <div className="space-y-4">
              <p className="text-sm md:text-base text-primary font-semibold uppercase tracking-wider">
                Welcome to GameVault
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Next-Gen Gaming <span className="gradient-text">Unleashed</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-lg text-balance">
                Discover the future of gaming. Premium products, crypto payments, and endless possibilities await you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/store" className="w-full sm:w-auto">
                <button className="w-full px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover-glow flex items-center justify-center gap-2 transition">
                  Explore Store
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <button className="px-8 py-3 border border-primary/30 text-foreground font-semibold rounded-lg hover:border-primary/60 hover:bg-primary/5 transition w-full sm:w-auto">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/30">
              <div>
                <p className="text-2xl font-bold text-primary">500+</p>
                <p className="text-sm text-foreground/60">Products</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-secondary">100K+</p>
                <p className="text-sm text-foreground/60">Users</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">24/7</p>
                <p className="text-sm text-foreground/60">Support</p>
              </div>
            </div>
          </div>

          {/* Right 3D Model */}
          <div className="relative h-full min-h-96 lg:min-h-full rounded-lg bg-transparent border-0 overflow-visible">
            {/* Soft spotlight behind the 3D model (uses theme colors) */}
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
              style={{
                width: '70vmin',
                height: '70vmin',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                opacity: 0.18,
                filter: 'blur(120px)'
              }}
            />

            <div className="relative z-10 w-full h-full">
              <Spline scene="https://prod.spline.design/Tar16GCINiUhL6p6/scene.splinecode" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
