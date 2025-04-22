import ActivityItem from "./ActivityItem";

export default function RecentActivitiesSection() {
  const activities = [
    {
      id: 1,
      type: "KYC Verification",
      description: "45 new persons just signed up on Mently",
      time: "25 minutes Ago",
      icon: "alert-triangle"
    },
    {
      id: 2,
      type: "New User Sign Up!",
      description: "45 new persons just signed up on Mently",
      time: "25 minutes Ago",
      icon: "user-plus"
    },
    {
      id: 3,
      type: "Withdrawal Request",
      description: "Marshall requested a withdrawal",
      time: "25 minutes Ago",
      icon: "dollar-sign"
    }
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Recent Activities</h2>
        <a href="#" className="text-purple-600 text-sm hover:underline">
          See all
        </a>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
}
