import MentlyLogo from "../../../../public/logo.svg"
import Image from "next/image"

export default function TestLoading() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <Image src={MentlyLogo} alt="Loading..." className="w-20 h-20 animate-pulse" />
        </div>
    )
}