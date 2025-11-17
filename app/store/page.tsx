import Header from '@/components/header'
import Footer from '@/components/footer'
import ProductCard from '@/components/product-card'

export const metadata = {
  title: 'Store - GameVault',
  description: 'Browse and purchase products from GameVault store.'
}

export default function StorePage() {
  const products = [
    { id: 1, title: 'Cyberpunk 2077', platform: 'Steam', image: '/cyberpunk-game-cover.jpg', priceUsd: 1, cryptoPrice: '1 USDT', category: 'Action RPG' },
    { id: 2, title: 'Elden Ring', platform: 'PlayStation', image: '/elden-ring-game-cover.jpg', priceUsd: 2, cryptoPrice: '2 USDT', category: 'RPG' },
    { id: 3, title: "Baldur's Gate 3", platform: 'PC', image: '/baldurs-gate-3-game-cover.jpg', priceUsd: 3, cryptoPrice: '3 USDT', category: 'RPG' },
    { id: 4, title: 'Starfield', platform: 'Xbox', image: '/starfield-game-cover.jpg', priceUsd: 1, cryptoPrice: '1 USDT', category: 'Sci-Fi RPG' },
    { id: 5, title: 'Palworld', platform: 'Steam', image: '/palworld-game-cover.jpg', priceUsd: 2, cryptoPrice: '2 USDT', category: 'Adventure' },
    { id: 6, title: "Dragon's Dogma 2", platform: 'PlayStation', image: '/dragons-dogma-2-game-cover.jpg', priceUsd: 3, cryptoPrice: '3 USDT', category: 'Fantasy RPG' },
    { id: 7, title: 'Final Fantasy VII Rebirth', platform: 'PlayStation', image: '/final-fantasy-vii-rebirth.jpg', priceUsd: 1, cryptoPrice: '1 USDT', category: 'RPG' },
    { id: 8, title: 'Indiana Jones Game', platform: 'PC', image: '/indiana-jones-adventure-game.jpg', priceUsd: 2, cryptoPrice: '2 USDT', category: 'Action Adventure' }
  ]

  return (
    <main className="min-h-screen bg-background pt-16">
      <Header />

      <section className="relative py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-sm md:text-base text-primary font-semibold uppercase tracking-wider">Store</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">All Products</h1>
            <p className="text-foreground/60 max-w-2xl mx-auto mt-3">Browse our full catalog and purchase items using USDT.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product as any} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
