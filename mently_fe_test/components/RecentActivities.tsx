import Image from "next/image";
import SectionLeftHead from "./SectionLeftHead";
import SectionRightHead from "./SectionRightHead";

const activities = [
  {
    id: 1,
    title: "KYC Verification",
    description: "45 new persons just signed up on Mently.",
    time: "25 minutes Ago",
    image: "/rcimg2.png",
  },
  {
    id: 2,
    title: "New User Sign Up!",
    description: "45 new persons just signed up on Mently.",
    time: "25 minutes Ago",
    image: "/rcimg3.jpg",
  },
  {
    id: 3,
    title: "Withdrawal Request",
    description: "Mardian requested a withdrawal.",
    time: "25 minutes Ago",
    image: "/profile2.png",
  },
];

export default function RecentActivities() {
  return (
    <section className="p-4 bg-[#FFFFFF] shadow rounded-2xl">
      <div className="flex justify-between">
        <SectionRightHead title="Recent Activities" />
        <SectionLeftHead />
      </div>

      <div className="space-y-4 py-6">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="rounded-2xl flex items-center gap-3"
          >
            <Image
              src={activity.image}
              alt="profile"
              width={38}
              height={38}
              className="rounded-full object-cover"
            />
            <div className="flex flex-col">
              <h2 className="text-[14px] font-semibold text-[#011627]">
                {activity.title}
              </h2>
              <p className="text-[12px] text-[#707991]">
                {activity.description}
              </p>
              <p className="text-[12px] text-[#707991]">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
