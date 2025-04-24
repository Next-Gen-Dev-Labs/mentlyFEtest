import { ActivityCard, WidgetCard } from "~/_components/ui";

const activities: Array<{
  userImage: string;
  activity: string;
  title: string;
  time: string;
}> = [
    {
      userImage: "/images/person-3.jpg",
      activity: "45 new persons just signed up on Mently.",
      title: "KYC Verification",
      time: "25 minutes Ago",
    },
    {
      userImage: "/images/person-4.png",
      activity: "45 new persons just signed up on Mently.",
      title: "New User Sign Up!",
      time: "25 minutes Ago",
    },
    {
      userImage: "/images/person-2.jpg",
      activity: "Mardian requested a withdrawal.",
      title: "Withdrawal Request",
      time: "25 minutes Ago",
    },
  ];

export const ActivitiesWidget = () => {
  return (
    <WidgetCard title="Recent Activities">
      <div className="w-full flex flex-col items-start p-4 gap-4">
        {activities.map((activity, index) => (
          <ActivityCard key={index} {...activity} />
        ))}
      </div>
    </WidgetCard>
  );
};
