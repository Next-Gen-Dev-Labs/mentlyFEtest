import CallCard from "./CallCard";

export default function GroupCallSection() {
  const calls = [
    {
      id: 1,
      title: "Weekly Meeting - Product Demo Review with Testers",
      host: "Wisdom Ndara",
      time: "11:00 AM",
      date: "Mon, Jan 30, 2023",
      participants: 7,
      status: "Ongoing"
    },
    {
      id: 2,
      title: "Weekly Meeting - Product Demo Review with Testers",
      host: "Samuel Ngene",
      time: "11:00 AM",
      date: "Mon, Jan 30, 2023",
      participants: 5,
      status: "Upcoming"
    },
    {
      id: 3,
      title: "Weekly Meeting - Product Demo Review with Testers",
      host: "Samuel Ngene",
      time: "11:00 AM",
      date: "Mon, Jan 30, 2023",
      participants: 5,
      status: "Ongoing"
    }
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Group Calls</h2>
        <a href="#" className="text-purple-600 text-sm hover:underline">
          See all
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {calls.map((call) => (
          <CallCard key={call.id} call={call} />
        ))}
      </div>
    </div>
  );
}
