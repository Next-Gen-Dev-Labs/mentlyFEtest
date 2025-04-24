import Image from "next/image";

export default function RecentActivities() {
    return (
        <div className="mt-2 p-4 space-y-3">
            <div className="flex items-start gap-2 border-b border-[#F1EFEF] py-1">
                <div className="rounded-full w-10 h-10 relative overflow-hidden">
                    <Image fill priority src="/profile8.webp" alt="Widget Image" className="object-cover" />
                </div>
                <div className="grid content-between">
                    <p className="text-[#011627] font-bold text-[16px]">KYC Verification</p>
                    <span className="text-[#7D8DA6] font-[400] text-sm">45 new persons just signed up on Mently.</span>
                    <span className="text-[#707991] font-[300] text-sm">25 minutes Ago</span>
                </div>
            </div>
            <div className="flex items-start gap-2 border-b border-[#F1EFEF] py-1">
                <div className="rounded-full w-10 h-10 relative overflow-hidden">
                    <Image fill priority src="/profile9.webp" alt="Widget Image" className="object-cover" />
                </div>
                <div className="grid content-between">
                    <p className="text-[#011627] font-bold text-[16px]">New User Sign Up!</p>
                    <span className="text-[#7D8DA6] font-[400] text-sm">45 new persons just signed up on Mently.</span>
                    <span className="text-[#707991] font-[300] text-sm">25 minutes Ago</span>
                </div>
            </div>
            <div className="flex items-start gap-2 border-b border-[#F1EFEF] py-1">
                <div className="rounded-full w-10 h-10 relative overflow-hidden">
                    <Image fill priority src="/profile7.webp" alt="Widget Image" className="object-cover" />
                </div>
                <div className="grid content-between">
                    <p className="text-[#011627] font-bold text-[16px]">Withdrawal Request</p>
                    <span className="text-[#7D8DA6] font-[400] text-sm">45 new persons just signed up on Mently.</span>
                    <span className="text-[#707991] font-[300] text-sm">25 minutes Ago</span>
                </div>
            </div>
        </div>
    );
}
