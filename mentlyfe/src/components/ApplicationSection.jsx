import Image from "next/image";
import Link from "next/link";
import Student1 from "../assets/maxwell.png";
import Student4 from "../assets/maxwell4.jpg";
import flag from "../assets/flag.jpg";

export default function ApplicationSection() {
  const mentors = [
    {
      id: 1,
      name: "Maxwell Smith",
      email: "maxwellsmith@gmail.com",
      role: "Product Designer",
      experience: "4years Experience",
      country: flag,
      location: "Lagos, Nigeria",
      timezone: "GMT +1",
      image: Student1
    }
  ];

  const students = [
    {
      id: 2,
      name: "Adeati Samuel",
      email: "maxwellsmith@gmail.com",
      image: Student4
    },
    {
      id: 3,
      name: "Maxwell Smith",
      email: "maxwellsmith@gmail.com",
      image: Student1
    },
    {
      id: 4,
      name: "Adeati Samuel",
      email: "maxwellsmith@gmail.com",
      image: Student1
    },
    {
      id: 5,
      name: "Maxwell Smith",
      email: "maxwellsmith@gmail.com",
      image: Student1
    }
  ];

  return (
    <div className="bg-white">
      <div className="flex justify-between items-center px-4 py-2">
        <h2 className="text-lg text-gray-400 font-normal">Applications</h2>
        <Link href="#" className="text-purple-600 text-sm hover:underline">
          See all
        </Link>
      </div>

      {/* Mentors Section */}
      <div className="p-4">
        <h3 className="text-gray-500 mb-4">Mentors</h3>

        {mentors.map((mentor) => (
          <div
            key={mentor.id}
            className="flex flex-wrap items-center justify-between mb-4"
          >
            <div className="flex items-center">
              <input type="checkbox" className="mr-4" />
              <div className="w-10 h-10 rounded-full bg-gray-200 mr-4 flex items-center justify-center text-xs">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <div className="font-medium">{mentor.name}</div>
                <div className="text-sm text-gray-500">{mentor.email}</div>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="px-3 py-1 border border-red-200 text-red-500 rounded bg-red-50 hover:bg-red-100">
                Reject
              </button>
              <button className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700">
                Accept
              </button>
            </div>

            <div className="flex items-center gap-2 mt-4 mx-auto">
              <span className="px-3 py-1 bg-[#DDCEEE] text-gray-600 text-sm rounded">
                {mentor.role}
              </span>
              <span className="px-3 py-1 bg-[#58948E] text-gray-600 text-sm rounded">
                {mentor.experience}
              </span>
              <span className="px-3 py-1 bg-[#ABBEE0] text-gray-600 text-sm rounded">
                <span className="inline-block mr-1 items-center justify-center">
                  <Image
                    src={mentor.country}
                    alt="Nigeria"
                    width={14}
                    height={14}
                    className="object-cover"
                  />
                </span>
                {mentor.location}
              </span>
              <span className="px-3 py-1 bg-[#C8C8C8] text-gray-600 text-sm rounded">
                {mentor.timezone}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Students Section */}
      <div className="m-2 p-4">
        <h3 className="text-gray-500 mb-4">Students</h3>

        {students.map((student) => (
          <div
            key={student.id}
            className="flex items-center justify-between mb-4 last:mb-0"
          >
            <div className="flex items-center my-2">
              <input type="checkbox" className="mr-4" />
              <div className="w-10 h-10 rounded-full bg-gray-200 mr-4 flex items-center justify-center text-xs">
                <Image
                  src={student.image}
                  alt={student.name}
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <div className="font-medium">{student.name}</div>
                <div className="text-sm text-gray-500">{student.email}</div>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="px-3 py-1 border border-red-200 text-red-500 rounded bg-red-50 hover:bg-red-100">
                Reject
              </button>
              <button className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700">
                Accept
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
