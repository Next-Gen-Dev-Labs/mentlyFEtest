"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/dashboard');
    }, 50);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-primaryDark">
      <div className="text-center">
        <Image
          src="/logo.png"
          alt="Loading..."
          className="mx-auto animate-ping"
          width="96"
          height="36"
        />
      </div>
    </div>
  );
}
