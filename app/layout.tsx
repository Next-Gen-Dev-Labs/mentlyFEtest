import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'John',
  description: 'Created By Akinmolayan John',
  generator: 'Akinmolayan John',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
