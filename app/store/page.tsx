import Header from '@/components/header'
import Footer from '@/components/footer'
import ProductCard from '@/components/product-card'
import { createServerSupabase } from '@/lib/supabase/server'

export const metadata = {
  title: 'Store - GameVault',
  description: 'Browse and purchase products from GameVault store.'
}

export default async function StorePage() {
  // Server-side fetch from Supabase
  let products: any[] = []
  let errorMsg: string | null = null

  try {
    const supabase = await createServerSupabase()
    const { data, error } = await supabase
      .from('products')
      .select('id, title, image, description, price, status, platform, category')
      .in('status', ['active', 'available'])
      .order('id', { ascending: true })

    if (error) {
      errorMsg = error.message
    } else if (!data || data.length === 0) {
      products = []
    } else {
      // Map DB rows into ProductCard shape
      products = data.map((p: any) => ({
        id: p.id,
        title: p.title,
        platform: p.platform ?? 'PC',
        image: p.image ?? '/placeholder.svg',
        priceUsd: Number(p.price) || 1,
        cryptoPrice: `${Number(p.price) || 1} USDT`,
        category: p.category ?? '',
        description: p.description ?? '',
      }))
    }
  } catch (e: any) {
    errorMsg = e?.message ?? String(e)
  }

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

          {errorMsg ? (
            <div className="text-center text-red-500">Error loading products: {errorMsg}</div>
          ) : products.length === 0 ? (
            <div className="text-center text-foreground/60 py-16">No products available</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
