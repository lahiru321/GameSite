'use client'

import { Shield, Zap, Lock, Globe } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'Blockchain-verified purchases with Cryptomus integration for maximum security.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Instant order processing and delivery of digital assets to your account.'
    },
    {
      icon: Lock,
      title: 'Privacy First',
      description: 'Your data is encrypted and protected with industry-leading security standards.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access gaming products from anywhere in the world with multiple payment options.'
    }
  ]

  return (
    <section id="about" className="relative py-20 md:py-32 px-4 md:px-6 bg-muted/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm md:text-base text-primary font-semibold uppercase tracking-wider">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Experience the Future of Gaming Commerce
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            GameVault combines cutting-edge technology with premium gaming products for the ultimate shopping experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-6 rounded-lg glow-border bg-card hover-glow group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-foreground/60 text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
