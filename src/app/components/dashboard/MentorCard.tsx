"use client";

import { motion } from "framer-motion";

interface MentorCardProps {
  mentor: {
    id: number;
    name: string;
    title: string;
    email: string;
    location?: string;
    timezone?: string;
    status: string;
  };
}

export default function MentorCard({ mentor }: MentorCardProps) {
  return (
    <div className="flex items-center justify-between p-3 border rounded-lg">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
        />
        <div className="h-10 w-10 rounded-full bg-gray-200 mx-3"></div>
        <div>
          <h3 className="font-medium text-sm">{mentor.name}</h3>
          <div className="flex items-center text-xs text-gray-500">
            <span>{mentor.title}</span>
            {mentor.location && (
              <>
                <span className="mx-2 text-gray-300">|</span>
                <span className="flex items-center">
                  <span className="inline-block w-4 h-3 bg-green-500 mr-1 rounded-sm"></span>
                  {mentor.location}
                </span>
              </>
            )}
            {mentor.timezone && <span className="ml-2">{mentor.timezone}</span>}
          </div>
          <p className="text-xs text-gray-500">{mentor.email}</p>
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
  );
}
