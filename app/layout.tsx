import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import Providers from '@/providers/Poviders'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quill App',
  description: 'Created by Talha Ramay',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='light'>
      <Providers>
        <body className={cn(`min-h-screen font-sans text-secondary-foreground antialiased grainy`, inter.className)}>
          <Navbar />
          {children}
        </body>
      </Providers>
    </html>
  )
}
