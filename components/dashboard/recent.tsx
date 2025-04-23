import { Avatar } from "@radix-ui/react-avatar";
import { Menu, MoreHorizontal } from "lucide-react";
import Image from "next/image";
export default function Recent() {
  return (
    <div className="border rounded-lg bg-white p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg text-gray-700 font-bold flex items-center gap-2">
          <Menu className="h-5 w-5 text-gray-500" />
          Recent Activities
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-purple-600">See all</span>
          <MoreHorizontal className="h-5 w-5 text-gray-500" />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex gap-3">
          <Avatar className="h-10 w-10 bg-yellow-100 text-yellow-600 rounded-full">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="KYC"
              width={40}
              height={40}
            />
          </Avatar>
          <div>
            <h3 className="font-medium">KYC Verification</h3>
            <p className="text-sm text-gray-500">
              45 new persons just signed up on Mentify.
            </p>
            <p className="text-xs text-gray-400 mt-1">25 minutes Ago</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Avatar className="h-10 w-10 rounded-full">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="User"
              width={40}
              height={40}
            />
          </Avatar>
          <div>
            <h3 className="font-medium">New User Sign Up!</h3>
            <p className="text-sm text-gray-500">
              45 new persons just signed up on Mentify.
            </p>
            <p className="text-xs text-gray-400 mt-1">25 minutes Ago</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Avatar className="h-10 w-10 rounded-full">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="User"
              width={40}
              height={40}
            />
          </Avatar>
          <div>
            <h3 className="font-medium">Withdrawal Request</h3>
            <p className="text-sm text-gray-500">
              Meridian requested a withdrawal.
            </p>
            <p className="text-xs text-gray-400 mt-1">25 minutes Ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}
