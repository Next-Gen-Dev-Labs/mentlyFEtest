"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Logout() {
  const router = useRouter()

  useEffect(() => {
    // In a real app, you would handle logout logic here
    // For now, just redirect to the dashboard
    setTimeout(() => {
      router.push('/dashboard')
    }, 1500)
  }, [router])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-sm text-center max-w-md">
        <h2 className="text-3xl font-bold text-[#6F01D0] mb-4">Logging Out</h2>
        <p className="text-[#374557] text-sm mb-6">
          You are being logged out of your account...
        </p>
        <div className="animate-pulse">
          <img 
            src="/images/logo.png" 
            alt="Techrity Logo" 
            className="h-8 mx-auto" 
          />
        </div>
      </div>
    </div>
  )
}