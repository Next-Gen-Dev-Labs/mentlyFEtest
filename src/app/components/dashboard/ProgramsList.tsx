"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProgramCard from "./ProgramCard";

export default function ProgramsList() {
  const [activeFilter, setActiveFilter] = useState("active");

  const programs = [
    {
      id: 1,
      title: "Fundamentals of User Interface & Experience",
      description:
        "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach...",
      status: "active",
      mentors: 3,
    },
    {
      id: 2,
      title: "Colour Hack Practical Group Call",
      description:
        "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach...",
      status: "active",
      mentor: "Faith Odulaja",
    },
    {
      id: 3,
      title: "Colour Hack Practical Group Call",
      description:
        "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach...",
      status: "active",
      mentor: "Sol",
    },
  ];

  const filteredPrograms = programs.filter(
    (program) => activeFilter === "all" || program.status === activeFilter
  );

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
          Programs
        </h2>
        <a href="#" className="text-purple-600 text-sm hover:underline">
          See all
        </a>
      </div>

      <div className="flex items-center mb-4">
        <span className="text-sm text-gray-500 mr-2">Filter:</span>
        <div className="relative">
          <select
            className="text-sm border rounded py-1 px-2 appearance-none pr-8 focus:outline-none focus:ring-2 focus:ring-purple-300"
            value={activeFilter}
            onChange={(e) => setActiveFilter(e.target.value)}
            aria-label="Filter programs"
          >
            <option value="active">Active</option>
            <option value="completed">Completed</option>
            <option value="upcoming">Upcoming</option>
            <option value="all">All</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {filteredPrograms.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
    </div>
  );
}
