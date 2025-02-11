import type { Metadata } from "next"
import { Chivo } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React

const chivo = Chivo({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Program Information",
  description: "Program information management interface",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={chivo.className}>{children}</body>
    </html>
  )
}

