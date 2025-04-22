"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Applications() {
  const applications = [
    {
      id: 1,
      name: "Maxwell Smith",
      email: "maxwellsmith@gmail.com",
      role: "Product Designer",
      status: "pending",
    },
    {
      id: 2,
      name: "Adeati Samuel",
      email: "maxwellsmith@gmail.com",
      role: "Product Designer",
      status: "pending",
    },
    {
      id: 3,
      name: "Maxwell Smith",
      email: "maxwellsmith@gmail.com",
      role: "Product Designer",
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
          Applications
        </h2>
        <a href="#" className="text-purple-600 text-sm hover:underline">
          See all
        </a>
      </div>

      <div className="space-y-3 max-h-80 overflow-y-auto">
        {applications.map((application) => (
          <div
            key={application.id}
            className="flex items-center justify-between p-3 border rounded-lg"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <div className="h-10 w-10 rounded-full bg-gray-200 mx-3"></div>
              <div>
                <h3 className="font-medium text-sm">{application.name}</h3>
                <p className="text-xs text-gray-500">{application.email}</p>
                <p className="text-xs text-gray-500">
                  <span className="inline-block px-2 py-0.5 bg-gray-100 rounded text-gray-600 mt-1">
                    {application.role}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex space-x-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-1 text-xs bg-red-50 text-red-600 rounded"
              >
                Reject
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-1 text-xs bg-purple-600 text-white rounded"
              >
                Accept
              </motion.button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
