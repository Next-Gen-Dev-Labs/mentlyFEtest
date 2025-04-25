'use client'

import { useRouter } from 'next/navigation'
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/dashboard');
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button
        onClick={handleRedirect}
        className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition-all"
      >
        Hello there, this will take you to the dashboard
      </button>
    </div>
  );
}
