import { Menu, EllipsisVertical } from "lucide-react";
import React from "react";
import Image from "next/image";

const activities = [
  {
    title: "KYC Verification",
    description: "45 new persons just signed up on Mently.",
    time: "25 minutes Ago",
    image: "/man.svg",
  },
  {
    title: "New User Sign Up!",
    description: "12 users signed up to Mently.",
    time: "1 hour Ago",
    image: "/man.svg",
  },
  {
    title: "Withdrawal Request",
    description: "8 new application for withdrawals.",
    time: "2 hours Ago",
    image: "/man.svg",
  },
];

const ActivityCards = () => {
  return (
    <div className="h-auto rounded-xl bg-card py-3 pb-3 md:px-2 px-4 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Menu className="w-4 h-4 text-muted-foreground" />
          <h2 className="text-base font-bold text-muted-foreground/100">
            Recent Activities
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-sm font-medium text-primary hover:underline">
            See all
          </button>
          <EllipsisVertical className="w-4 h-4 text-muted-foreground" />
        </div>
      </div>

      {/* Activities List */}
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <React.Fragment key={activity.title + index}>
            <div className="flex items-start gap-2 group hover:bg-accent/50 rounded-lg transition-colors">
              <Image
                src={activity.image}
                alt={`${activity.title} activity`}
                width={32}
                height={32}
                className="rounded-full border-2 border-muted flex-shrink-0"
              />

              <div className="flex-1">
                <h3 className="text-sm font-semibold">{activity.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {activity.description}
                </p>
                <span className="text-xs text-muted-foreground">
                  {activity.time}
                </span>
              </div>
            </div>

            {index !== activities.length - 1 && (
              <hr className="border-t border-muted" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ActivityCards;
