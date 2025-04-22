"use client";

import { motion } from "framer-motion";

interface Mentor {
  id: number;
  name: string;
  avatar: string;
}

interface ProgramProps {
  program: {
    id: number;
    title: string;
    description: string;
    status: string;
    mentors?: number;
    mentor?: string;
  };
}

export default function ProgramCard({ program }: ProgramProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="border rounded-lg p-4"
    >
      <div className="flex justify-end mb-2">
        <svg
          className="h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
          />
        </svg>
      </div>

      <h3 className="font-medium text-md mb-2">{program.title}</h3>

      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
        {program.description}
      </p>

      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {program.mentors ? (
            <div className="flex -space-x-2">
              {[...Array(Math.min(program.mentors, 3))].map((_, index) => (
                <div
                  key={index}
                  className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"
                ></div>
              ))}
              {program.mentors > 3 && (
                <div className="w-6 h-6 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs">
                  +{program.mentors - 3}
                </div>
              )}
            </div>
          ) : program.mentor ? (
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-gray-300 mr-2"></div>
              <span className="text-xs">Hosted by: {program.mentor}</span>
            </div>
          ) : null}
        </div>

        <div className="flex space-x-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-3 py-1 text-xs text-purple-600 border border-purple-600 rounded hover:bg-purple-50"
          >
            View Details
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-3 py-1 text-xs text-white bg-purple-600 rounded hover:bg-purple-700"
          >
            {program.mentor ? "Assign Mentor" : "Analyze"}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
