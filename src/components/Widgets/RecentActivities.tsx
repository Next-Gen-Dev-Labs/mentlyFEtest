import Avatar from "../Avatar";

export default function RecentActivities() {
    return (
        <div className="p-2 space-y-2">
            <div className="flex items-start gap-2 border-b border-[#F1EFEF] py-1">
                <Avatar
                    size="md"
                    images={[{ src: "/profile8.webp", alt: "KYC Verification", tooltip: "KYC Verification" }]}
                />
                <div className="grid content-between">
                    <p className="text-[#011627] font-bold text-[16px]">KYC Verification</p>
                    <span className="text-[#7D8DA6] font-[400] text-sm">45 new persons just signed up on Mently.</span>
                    <span className="text-[#707991] font-[300] text-sm">25 minutes Ago</span>
                </div>
            </div>
            <div className="flex items-start gap-2 border-b border-[#F1EFEF] py-1">
                <Avatar
                    size="md"
                    images={[{ src: "/profile9.webp", alt: "New User Sign Up", tooltip: "New User Sign Up" }]}
                />
                <div className="grid content-between">
                    <p className="text-[#011627] font-bold text-[16px]">New User Sign Up!</p>
                    <span className="text-[#7D8DA6] font-[400] text-sm">45 new persons just signed up on Mently.</span>
                    <span className="text-[#707991] font-[300] text-sm">25 minutes Ago</span>
                </div>
            </div>
            <div className="flex items-start gap-2 border-b border-[#F1EFEF] py-1">
                <Avatar
                    size="md"
                    images={[{ src: "/profile7.webp", alt: "Withdrawal Request", tooltip: "Withdrawal Request" }]}
                />
                <div className="grid content-between">
                    <p className="text-[#011627] font-bold text-[16px]">Withdrawal Request</p>
                    <span className="text-[#7D8DA6] font-[400] text-sm">45 new persons just signed up on Mently.</span>
                    <span className="text-[#707991] font-[300] text-sm">25 minutes Ago</span>
                </div>
            </div>
        </div>
    );
}
