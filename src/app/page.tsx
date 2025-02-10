import Link from 'next/link'
import { useAppContext } from './context/AppContext';

export default function Home() {
  const { darktheme, setDarkTheme } = useAppContext();
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${darktheme ? "bg-appDeepTextBlue text-white" : "bg-[#FDFDFD]"}`}>
      <p className=''>This is home.
      </p>
      <Link
        href="/programs"
        className='cursor-pointer hover:underline focus:underline'>
        Go to Programs
      </Link>
    </ div>
  )
}
