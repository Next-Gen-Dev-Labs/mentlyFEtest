import MentorCard from "./MentorCard";
import Link from "next/link";
import Mentor from "../assets/maxwell.png";
import Mentor2 from "../assets/maxwell4.jpg";
import { IoAddCircleOutline } from "react-icons/io5";

export default function MentorSection() {
  const mentors = [
    {
      id: 1,
      name: "Maxwell Smith",
      role: "Product Designer",
      location: "USA",
      image: Mentor
    },
    {
      id: 2,
      name: "Adeati Samuel",
      role: "Product Designer",
      location: "Nigeria",
      image: Mentor2
    }
  ];

  return (
    <div className="bg-white p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg text-gray-400 font-normal">Mentors</h2>
        <button className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
          <IoAddCircleOutline className="text-gray-500" size={24} />
        </button>
      </div>

      <div className="space-y-4">
        {mentors.map((mentor) => (
          <MentorCard key={mentor.id} mentor={mentor} />
        ))}

        <div className="flex justify-center cursor-pointer">
          <Link href="#" className="text-purple-600 text-sm hover:underline">
            See all
          </Link>
        </div>
      </div>
    </div>
  );
}
