"use client";

import { motion } from "framer-motion";
import MentorCard from "./MentorCard";

export default function MentorsList() {
  const mentors = [
    {
      id: 1,
      name: "Maxwell Smith",
      title: "Product Designer",
      email: "maxwellsmith@gmail.com",
      location: "Lagos, Nigeria",
      timezone: "GMT+1",
      status: "pending",
    },
    {
      id: 2,
      name: "Adeati Samuel",
      title: "Product Designer",
      email: "maxwellsmith@gmail.com",
      status: "pending",
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold flex items-center">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          Mentors
        </h2>

        <div className="flex items-center">
          <button
            className="p-1 rounded-full bg-gray-100 mr-2"
            aria-label="Add mentor"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
          <a href="#" className="text-purple-600 text-sm hover:underline">
            See all
          </a>
        </div>
      </div>

      <div className="space-y-3">
        {mentors.map((mentor) => (
          <MentorCard key={mentor.id} mentor={mentor} />
        ))}
      </div>
    </div>
  );
}
