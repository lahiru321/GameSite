"use client"

import Link from 'next/link'
import ProductCard from './product-card'

export default function Products() {
  const products = [
    {
      id: 1,
      title: 'Cyberpunk 2077',
      platform: 'Steam',
      image: '/cyberpunk-game-cover.jpg',
      priceUsd: 59.99,
      cryptoPrice: '0.0012 BTC',
      category: 'Action RPG'
    },
    {
      id: 2,
      title: 'Elden Ring',
      platform: 'PlayStation',
      image: '/elden-ring-game-cover.jpg',
      priceUsd: 49.99,
      cryptoPrice: '0.001 BTC',
      category: 'RPG'
    },
    {
      id: 3,
      title: 'Baldur\'s Gate 3',
      platform: 'PC',
      image: '/baldurs-gate-3-game-cover.jpg',
      priceUsd: 69.99,
      cryptoPrice: '0.0015 BTC',
      category: 'RPG'
    },
    {
      id: 4,
      title: 'Starfield',
      platform: 'Xbox',
      image: '/starfield-game-cover.jpg',
      priceUsd: 69.99,
      cryptoPrice: '0.0015 BTC',
      category: 'Sci-Fi RPG'
    },
    {
      id: 5,
      title: 'Palworld',
      platform: 'Steam',
      image: '/palworld-game-cover.jpg',
      priceUsd: 29.99,
      cryptoPrice: '0.0006 BTC',
      category: 'Adventure'
    },
    {
      id: 6,
      title: 'Dragon\'s Dogma 2',
      platform: 'PlayStation',
      image: '/dragons-dogma-2-game-cover.jpg',
      priceUsd: 59.99,
      cryptoPrice: '0.0012 BTC',
      category: 'Fantasy RPG'
    },
    {
      id: 7,
      title: 'Final Fantasy VII Rebirth',
      platform: 'PlayStation',
      image: '/final-fantasy-vii-rebirth.jpg',
      priceUsd: 69.99,
      cryptoPrice: '0.0015 BTC',
      category: 'RPG'
    },
    {
      id: 8,
      title: 'Indiana Jones Game',
      platform: 'PC',
      image: '/indiana-jones-adventure-game.jpg',
      priceUsd: 64.99,
      cryptoPrice: '0.0013 BTC',
      category: 'Action Adventure'
    }
  ]

  return (
    <section id="products" className="relative py-20 md:py-32 px-4 md:px-6">
      {/* Background Spotlight */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl spotlight opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm md:text-base text-primary font-semibold uppercase tracking-wider">Our Collection</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Premium Gaming Products
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            Handpicked games and digital products for every platform. All purchases secured with crypto payments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <Link href="/store">
            <button className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover-glow transition">
              View All Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
