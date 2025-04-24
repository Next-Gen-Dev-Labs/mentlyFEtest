import Image from "next/image";
import SectionLeftHead from "./SectionLeftHead";
import SectionRightHead from "./SectionRightHead";

export default function RecentActivities() {
  return (
    <section className="w-[300px] shadow p-4 rounded">
      <div className="flex justify-between">
        <SectionRightHead title="Recent Activities" />
        <SectionLeftHead />
      </div>

      <div className=" rounded-2xl  gap-2 py-6 flex items-center">
        <Image
          src="/profile1.png"
          alt="profile"
          width={42}
          height={42}
          className="rounded-full object-cover"
        />
        <div className="flex">
          <div className="flex flex-col">
            <h2 className="text-[14px] font-semibold text-[#011627]">
              KYC Verification
            </h2>
            <p className="text-[12px] text-[#707991]">
              45 new persons just signed up on Mently.
            </p>
            <p className="text-[12px] text-[#707991]">25 minnutes Ago</p>
          </div>
        </div>
      </div>
    </section>
  );
}
