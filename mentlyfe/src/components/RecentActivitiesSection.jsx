import ActivityItem from "./ActivityItem";
import Link from "next/link";
import Image1 from "../assets/maxwell2.jpg";
import Image2 from "../assets/maxwell3.png";
import Image3 from "../assets/maxwell4.jpg";

export default function RecentActivitiesSection() {
  const activities = [
    {
      id: 1,
      type: "KYC Verification",
      description: "45 new persons just signed up on Mently",
      time: "25 minutes Ago",
      icon: "alert-triangle",
      image: Image1
    },
    {
      id: 2,
      type: "New User Sign Up!",
      description: "45 new persons just signed up on Mently",
      time: "25 minutes Ago",
      icon: "user-plus",
      image: Image2
    },
    {
      id: 3,
      type: "Withdrawal Request",
      description: "Marshall requested a withdrawal",
      time: "25 minutes Ago",
      icon: "dollar-sign",
      image: Image3
    }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg text-gray-400 font-normal">Recent Activities</h2>
        <Link
          href="#"
          className="text-purple-600 text-sm hover:underline cursor-pointer"
        >
          See all
        </Link>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
}
