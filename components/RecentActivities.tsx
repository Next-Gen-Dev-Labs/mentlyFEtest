import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export function RecentActivities() {

  const activities = [
    {
      title: "KYC Verification",
      subtext: "45 new persons just signed up on Mently.",
      images: "/images/mentor1.jpg",
    },
    {
      title: "New User Sign Up!",
      subtext: "45 new persons just signed up on Mently.",
      images: "/images/mentor2.jpg",
    },
    {
      title: "Withdrawal Request",
      subtext: "Mardian requested a withdrawal. 25 minutes ago",
      images: "/images/mentor1.jpg",
    },
  ];

  return (
    <Card className="mx-3 my-5">
      <CardContent className="p-6">
        <div className="text-lg font-bold text-gray-700 mb-4">Recent Activities</div>

        <div className="space-y-4">
          {activities.map((activity, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-gray-50 p-4 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <img
                  src={activity.images}// placeholder image
                  alt="activity"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-gray-800 text-sm">
                    {activity.title}
                  </div>
                  <div className="text-xs text-gray-500">
                    {activity.subtext}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
