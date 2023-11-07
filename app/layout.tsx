import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fortnite item alert',
  description: 'Get notified when your favorite item is available in the shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar></Navbar>
        </header>
        <main className='relative overflox-hidden'>
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  )
}
