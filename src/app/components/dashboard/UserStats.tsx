"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { ChartOptions } from "chart.js";
import { BsChevronDown } from "react-icons/bs";

ChartJS.register(ArcElement, Tooltip, Legend);

interface UserCategory {
  name: string;
  value: number;
  color: string;
}

export default function UserStats() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [isClient, setIsClient] = useState(false);
  const chartRef = useRef(null);

  // Prevent hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  const userData = {
    totalUsers: 240,
    students: 200,
    mentors: 8,
    programs: 22,
    others: 10,
  };

  const categories: UserCategory[] = [
    { name: "Students", value: userData.students, color: "#60A5FA" },
    { name: "Mentors", value: userData.mentors, color: "#F59E0B" },
    { name: "Programs", value: userData.programs, color: "#E879F9" },
    { name: "Others", value: userData.others, color: "#10B981" },
  ];

  const chartData = {
    labels: categories.map((c) => c.name),
    datasets: [
      {
        data: categories.map((c) => c.value),
        backgroundColor: categories.map((c) => c.color),
        borderColor: "transparent",
        borderWidth: 0,
        hoverOffset: 5,
        spacing: 2,
      },
    ],
  };

  const chartOptions: ChartOptions<"doughnut"> = {
    cutout: "65%",
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.raw}`;
          },
        },
      },
    },
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 1000,
      easing: "easeOutQuart",
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      className="bg-[#E7DDFF] p-6 rounded-lg w-full mx-auto h-full overflow-y-hidden"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex justify-between items-center mb-6 ">
        <h2 className="text-xl font-semibold text-gray-800">Users</h2>

        <div className="relative">
          <select
            className=" bg-[#E7DDFF] text-gray-700 text-sm border border-[#D0D5DD] rounded-md py-2 px-3 pr-8 appearance-none focus:outline-none focus:ring-0  focus:border-none transition-all"
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            aria-label="Filter users"
          >
            <option value="all">All</option>
            <option value="students">Students</option>
            <option value="mentors">Mentors</option>
            <option value="programs">Programs</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
            <BsChevronDown className="w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="h-px bg-[#D0D5DD] my-3"></div>
      {/* Chart and Legend  */}
      <div className="max-w-xl w-full mx-auto flex flex-col lg:flex-row lg:flex-wrap justify-between items-center lg:items-start gap-4 md:gap-6">
        <motion.div className="w-fit relative mx-auto" variants={itemVariants}>
          <div className="w-40 h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 relative mx-auto">
            {isClient && (
              <Doughnut
                ref={chartRef}
                data={chartData}
                options={chartOptions}
              />
            )}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <motion.span
                className="text-3xl font-bold text-gray-800"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                {userData.totalUsers}
              </motion.span>
              <motion.span
                className="text-sm text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.4 }}
              >
                Users
              </motion.span>
            </div>
          </div>
        </motion.div>

        {/* Legend */}
        <div className="w-full space-y-4 md:flex-1 md:self-center">
          {categories.map((category) => (
            <motion.div
              key={category.name}
              className="flex items-center justify-between w-full"
              variants={itemVariants}
              whileHover={{
                x: 4,
                transition: { duration: 0.2 },
              }}
            >
              <div className=" flex items-center">
                <span
                  className="w-3 h-3 rounded-full mr-3"
                  style={{ backgroundColor: category.color }}
                ></span>
                <span className="text-sm text-gray-700">{category.name}</span>
              </div>
              <span className="text-sm font-medium text-gray-800">
                {category.value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
