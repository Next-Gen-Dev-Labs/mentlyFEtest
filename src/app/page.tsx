import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <p className=''>This is home.
      </p>
      <Link href="/programs" className='cursor-pointer hover:underline focus:underline'>
          Go to Programs
        </Link>
    </ div>
  )
}
