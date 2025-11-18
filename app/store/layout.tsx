import Header from '@/components/header'
import Footer from '@/components/footer'
import { redirect } from 'next/navigation'
import { getServerSession } from '@/lib/supabase/server'

export default async function StoreLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession()

  if (!session) {
    // redirect to sign-in and return to /store after login
    redirect(`/sign-in?redirectTo=${encodeURIComponent('/store')}`)
  }

  return (
    <>
      <Header serverSession={session} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
