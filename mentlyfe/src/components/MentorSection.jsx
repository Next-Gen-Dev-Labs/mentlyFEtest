import MentorCard from "./MentorCard";

export default function MentorSection() {
  const mentors = [
    {
      id: 1,
      name: "Maxwell Smith",
      role: "Product Designer",
      location: "USA",
      image: "/mentors/maxwell.jpg"
    },
    {
      id: 2,
      name: "Adeati Samuel",
      role: "Product Designer",
      location: "Nigeria",
      image: "/mentors/adeati.jpg"
    }
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Mentors</h2>
        <button className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
        </button>
      </div>

      <div className="space-y-4">
        {mentors.map((mentor) => (
          <MentorCard key={mentor.id} mentor={mentor} />
        ))}

        <div className="flex justify-center">
          <button className="text-sm text-purple-600 hover:underline">
            See all
          </button>
        </div>
      </div>
    </div>
  );
}
