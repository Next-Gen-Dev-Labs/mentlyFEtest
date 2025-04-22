"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BsChevronRight } from "react-icons/bs";

export default function GroupCalls() {
  const [activeTab, setActiveTab] = useState("all");

  const calls = [
    {
      id: 1,
      title: "Weekly Meeting - Product Demo Review with Testers",
      date: "Mon, Jul 30, 2024",
      time: "11:00AM",
      status: "ongoing",
      group: "UX Strategy Study group",
      participants: 3,
    },
    {
      id: 2,
      title: "Weekly Meeting - Product Demo Review with Testers",
      date: "Mon, Jul 30, 2024",
      time: "11:00AM",
      status: "upcoming",
      group: "UX Strategy Study group",
      participants: 3,
    },
    {
      id: 3,
      title: "Weekly Meeting - Product Demo Review with Testers",
      date: "Mon, Jul 30, 2024",
      time: "11:00AM",
      status: "ongoing",
      group: "UX Strategy Study group",
      participants: 3,
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
          Group Calls
        </h2>
        <a href="#" className="text-purple-600 text-sm hover:underline">
          See all
        </a>
      </div>

      <div className="space-y-4">
        {calls.map((call) => (
          <div key={call.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <span
                  className={`
                  inline-flex items-center px-2 py-1 rounded-full text-xs
                  ${
                    call.status === "ongoing"
                      ? "bg-green-100 text-green-800"
                      : "bg-blue-100 text-blue-800"
                  }
                `}
                >
                  {call.status === "ongoing" ? "Ongoing" : "Upcoming"}
                </span>
                <h3 className="font-medium mt-2">{call.title}</h3>
                <div className="flex items-center text-gray-500 text-sm mt-2">
                  <span className="mr-4">📅 {call.date}</span>
                  <span>🕐 {call.time}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center text-gray-600 text-sm">
                <span className="inline-block w-2 h-2 rounded-full bg-gray-400 mr-2"></span>
                <span>{call.group}</span>
              </div>

              <div className="flex space-x-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 text-sm text-purple-600 border border-purple-600 rounded hover:bg-purple-50"
                  aria-label="View participants"
                >
                  View Participants
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 text-sm text-white bg-purple-600 rounded hover:bg-purple-700 flex items-center"
                  aria-label="Join call now"
                >
                  Join Now
                  <BsChevronRight className="h-4 w-4 ml-1" />
                </motion.button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
