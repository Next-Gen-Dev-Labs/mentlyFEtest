import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/layout/Sidebar'
import Header from '@/components/layout/Header'
import RightBar from '@/components/layout/RightBar'
import Providers from '@/components/providers/Providers'

// Load font outside component
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard App',
  description: 'Modern dashboard application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
              <Header />
             
              <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
                {children}
              </main>
            </div>
            <RightBar />
          </div>
        </Providers>
      </body>
    </html>
  )
}
