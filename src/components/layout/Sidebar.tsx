import Link from 'next/link'

export default function Sidebar() {
  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav className="flex flex-col text-start justify-center items-center">
        <Link href="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          Dashboard
        </Link>
        <Link href="/programs" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          Programs
        </Link>
        <Link href="/activities" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          Activities
        </Link>
        <Link href="/users" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          Users
        </Link>
        <Link href="/settings" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          Settings
        </Link>
      </nav>
    </div>
  )
} 


/**
 * finance
 * import { IoWalletOutline } from "react-icons/io5";
 * 
 * user
 * import { FaRegUser } from "react-icons/fa";
 * 
 * Rewards
 * import { RiMedalFill } from "react-icons/ri";
 * 
 * settings
 * import { CiSettings } from "react-icons/ci";
 * 
 * logout
 * import { TbLogout2 } from "react-icons/tb";
 * 
 * widgets
 * import { MdOutlineWidgets } from "react-icons/md";
 * 
 */