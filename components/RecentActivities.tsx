import { EllipsisVertical, Menu } from "lucide-react";
import Image from "next/image";

const recent = [
  {
    name: "KYC Verification",
    img: "/kyc.jpg",
    desc: "45 new persons just signed up on Mently.",
  },
  {
    name: "New User Sign Up!",
    img: "/new.png",
    desc: "45 new persons just signed up on Mently.",
  },
  {
    name: "Withdrawal Request",
    img: "/ade.jpg",
    desc: "Mardian requested a withdrawal.",
  },
];

const RecentActivities = () => {
  return (
    <section className="bg-[#ffffff] rounded-[8px] space-y-5 px-4 py-6">
      <div className="flex justify-between">
        <div className="flex gap-6 items-center">
          <button>
            <Menu className="text-[#000000]" />
          </button>
          <p className="text-[#B0B0B0] font-bold text-base">
            Recent Activities
          </p>
        </div>
        <div className="flex items-center gap-6">
          <p className="font-semibold text-[#6F01D0] text-[12.27px]">See all</p>
          <button>
            <EllipsisVertical className="text-[#000000]" />
          </button>
        </div>
      </div>
      <div className="space-y-6 px-6">
        {recent.map((r, index) => (
          <div
            className={`flex gap-2  pb-2 ${
              index === recent.length - 1 ? "" : "border-b border-[#F3F3F3]"
            }`}
            key={index}
          >
            <Image
              src={r.img}
              alt="avatar"
              width={34}
              height={34}
              className={`rounded-full h-10 w-10`}
            />
            <div className="space-y-1">
              <h1 className="text-[#011627] font-bold text-sm">{r.name}</h1>
              <p className="text-[#707991] text-xs">{r.desc}</p>
              <p className="text-[#707991] text-xs">25 minutes Ago</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentActivities;
