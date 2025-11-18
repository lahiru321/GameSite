'use client'

import { ShoppingCart, Cpu } from 'lucide-react'
import Image from 'next/image'

interface ProductCardProps {
  product: {
    id: number
    title: string
    platform: string
    image: string
    priceUsd: number
    cryptoPrice: string
    category: string
  }
}

const platformColors: Record<string, string> = {
  Steam: 'bg-blue-900/30 text-blue-300 border border-blue-500/30',
  PlayStation: 'bg-blue-900/30 text-blue-300 border border-blue-500/30',
  Xbox: 'bg-green-900/30 text-green-300 border border-green-500/30',
  PC: 'bg-purple-900/30 text-purple-300 border border-purple-500/30',
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="relative group h-full flex flex-col glow-border rounded-lg overflow-hidden bg-card hover-glow transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="flex-1 p-4 flex flex-col">
        <div className="mb-3 flex items-start justify-between gap-2">
          <div className="flex-1">
            <h3 className="font-bold text-foreground line-clamp-2 group-hover:text-primary transition">
              {product.title}
            </h3>
            <p className="text-xs text-foreground/50 mt-1">{product.category}</p>
          </div>
        </div>

        {/* Platform Badge */}
        <div className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold mb-3 w-fit ${platformColors[product.platform] || 'bg-muted text-foreground/70'}`}>
          <Cpu className="w-3 h-3" />
          {product.platform}
        </div>

        {/* Prices */}
        <div className="space-y-1 mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-primary">${product.priceUsd}</span>
            <span className="text-xs text-foreground/50">USD</span>
          </div>
          <p className="text-xs text-foreground/60 flex items-center gap-1">
            <span className="text-primary">₿</span> {product.cryptoPrice}
          </p>
        </div>

        {/* Buy Button */}
        <button
          className="mt-auto w-full px-4 py-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all flex items-center justify-center gap-2 group/btn"
          data-product-id={product.id}
          data-price-usd={product.priceUsd}
          data-crypto-price={product.cryptoPrice}
          aria-label={`Buy ${product.title} for ${product.cryptoPrice}`}
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Buy Now</span>
        </button>
      </div>
    </div>
  )
}
