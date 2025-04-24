import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'My Dashboard',
  description: 'Built with Tailwind and Next.js',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
