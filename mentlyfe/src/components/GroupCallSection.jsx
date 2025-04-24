import CallCard from "./CallCard";
import Image1 from "../assets/groupcall1.jpg";
import Image2 from "../assets/groupcall2.jpg";
import Image3 from "../assets/groupcall3.jpg";
import Mentor1 from "../assets/userinterface1.png";
import Mentor2 from "../assets/userinterface2.png";
import Mentor3 from "../assets/userinterface3.png";
import Link from "next/link";

export default function GroupCallSection() {
  const calls = [
    {
      id: 1,
      title: "Weekly Meeting - Product Demo Review with Testers",
      date: "Mon. Jul 30, 2024",
      time: "9:00 - 11:00AM",
      studyGroup: "UX Strategy Study group",
      status: "Ongoing",
      image: Image1,
      mentors: [Mentor1, Mentor2, Mentor3]
    },
    {
      id: 2,
      title: "Weekly Meeting - Product Demo Review with Testers",
      date: "Mon. Jul 30, 2024",
      time: "9:00 - 11:00AM",
      studyGroup: "UX Strategy Study group",
      status: "Upcoming",
      image: Image2,
      mentors: [Mentor1, Mentor2, Mentor3]
    },
    {
      id: 3,
      title: "Weekly Meeting - Product Demo Review with Testers",
      date: "Mon. Jul 30, 2024",
      time: "9:00 - 11:00AM",
      studyGroup: "UX Strategy Study group",
      status: "Ongoing",
      image: Image3,
      mentors: [Mentor1, Mentor2, Mentor3]
    }
  ];

  return (
    <div className="w-full">
      <div className="px-4 py-3 mx-auto">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <h2 className="text-lg text-gray-400 font-normal">Group Calls</h2>
          </div>
          <Link href="#" className="text-purple-600 text-sm hover:underline">
            See all
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {calls.map((call) => (
            <CallCard key={call.id} call={call} />
          ))}
        </div>
      </div>
    </div>
  );
}
