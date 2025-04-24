"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Menu from "../../../../public/images/icons/programMenu.svg";
import { BiDotsVertical } from "react-icons/bi";
import Maxwell from "../../../../public/images/images/maxwell.png";
import Adeati from "../../../../public/images/images/adeati.jpg";
import NigeriaFlag from "../../../../public/images/icons/nigeriaFlag.svg";

type Application = {
  id: number;
  name: string;
  email: string;
  role?: string;
  experience?: string;
  location?: string;
  timezone?: string;
  type: "mentor" | "student";
  avatar: StaticImageData;
  selected?: boolean;
};

export default function Applications() {
  const [applications, setApplications] = useState<Application[]>([
    {
      id: 1,
      name: "Maxwell Smith",
      email: "maxwellsmith@gmail.com",
      role: "Product Designer",
      experience: "4 years Experience",
      location: "Lagos, Nigeria",
      timezone: "GMT +1",
      type: "mentor",
      avatar: Maxwell,
      selected: false,
    },
    {
      id: 2,
      name: "Adeati Samuel",
      email: "maxwellsmith@gmail.com",
      type: "student",
      avatar: Adeati,
      selected: false,
    },
    {
      id: 3,
      name: "Maxwell Smith",
      email: "maxwellsmith@gmail.com",
      type: "student",
      avatar: Maxwell,
      selected: false,
    },
    {
      id: 4,
      name: "Adeati Samuel",
      email: "maxwellsmith@gmail.com",
      type: "student",
      avatar: Adeati,
      selected: false,
    },
    {
      id: 5,
      name: "Maxwell Smith",
      email: "maxwellsmith@gmail.com",
      type: "student",
      avatar: Maxwell,
      selected: false,
    },
  ]);

  const toggleSelection = (id: number) => {
    setApplications(
      applications.map((app) =>
        app.id === id ? { ...app, selected: !app.selected } : app
      )
    );
  };

  const handleAction = (id: number, action: "accept" | "reject") => {
    console.log(`Application ${id} ${action}ed`);

    setTimeout(() => {
      setApplications(applications.filter((app) => app.id !== id));
    }, 300);
  };

  const mentors = applications.filter((app) => app.type === "mentor");
  const students = applications.filter((app) => app.type === "student");

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
      },
    },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm w-full mx-auto h-full">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <Image src={Menu} alt="programs" className="h-5 w-5" />

          <h2 className="text-xl font-bold text-[#B0B0B0]">Applications</h2>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-[#6F01D0] text-sm font-bold transition-colors"
          >
            See all
          </a>
          <BiDotsVertical className="h-5 w-5" />
        </div>
      </div>

      {/* Mentors Section */}
      <div className="mb-6">
        <h3 className="text-sm text-gray-500 mb-4">Mentors</h3>
        <AnimatePresence>
          {mentors.map((application) => (
            <motion.div
              key={application.id}
              className="flex items-center justify-between py-3 border-b border-gray-100 relative"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={cardVariants}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full flex flex-col items-center space-y-2">
                <div className="w-full flex items-center flex-wrap space-y-2">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-[#6F01D0] bg-[#6F01D0] focus:ring-purple-500 border-gray-300 rounded"
                    checked={application.selected}
                    onChange={() => toggleSelection(application.id)}
                    aria-label={`Select ${application.name}`}
                  />
                  <div className="h-10 w-10 rounded-full bg-gray-200 mx-3 overflow-hidden relative">
                    <Image
                      src={application.avatar}
                      alt={application.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">
                      {application.name}
                    </h3>
                    <p className="text-xs text-gray-500">{application.email}</p>
                  </div>
                  <div className="flex ml-auto gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 text-xs bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition-colors"
                      onClick={() => handleAction(application.id, "reject")}
                    >
                      Reject
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 text-xs bg-[#6F01D0] text-white rounded-md hover:bg-purple-700 transition-colors"
                      onClick={() => handleAction(application.id, "accept")}
                    >
                      Accept
                    </motion.button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mt-1 items-center">
                  {application.role && (
                    <span className="inline-block px-3 py-1 bg-[#F3ECF9] rounded-[5.19px] text-xs text-[#DDCEEE] border border-[#DDCEEE]">
                      {application.role}
                    </span>
                  )}
                  {application.experience && (
                    <span className="inline-block px-3 py-1 bg-[#E8FDFB] rounded-[5.19px] text-xs text-[#A1BDBA] border border-[#A1BDBA]">
                      {application.experience}
                    </span>
                  )}
                  {application.location && (
                    <span className="inline-flex px-3 py-1 bg-[#E3ECF9] rounded-[5.19px] text-xs text-[#ABBEE0] border border-[#ABBEE0] items-center gap-2">
                      {/* <span className="inline-block w-4 h-3 mr-1 bg-green-500 rounded-sm"></span> */}
                      <Image
                        src={NigeriaFlag}
                        alt="programs"
                        className="h-5 w-5"
                      />
                      <span>{application.location}</span>
                    </span>
                  )}
                  {application.timezone && (
                    <span className="inline-block px-3 py-1 bg-[F4F4F4] rounded-[5.19px] text-xs text-[#C8C8C8] border border-[#C8C8C8]">
                      {application.timezone}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="h-px bg-[#D0D5DD] my-3"></div>

      {/* Students Section */}
      <div>
        <h3 className="text-sm text-gray-500 mb-4">Students</h3>
        <AnimatePresence>
          {students.map((application) => (
            <motion.div
              key={application.id}
              className="flex flex-wrap space-y-2 items-center justify-between py-3 border-b border-[#D0D5DD] last:border-0"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={cardVariants}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  checked={application.selected}
                  onChange={() => toggleSelection(application.id)}
                  aria-label={`Select ${application.name}`}
                />
                <div className="h-10 w-10 rounded-full bg-gray-200 mx-3 overflow-hidden relative">
                  <Image
                    src={application.avatar}
                    alt={application.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">
                    {application.name}
                  </h3>
                  <p className="text-xs text-gray-500">{application.email}</p>
                </div>
              </div>

              <div className="flex gap-2 ml-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 text-xs bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition-colors"
                  onClick={() => handleAction(application.id, "reject")}
                >
                  Reject
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 text-xs bg-[#6F01D0] text-white rounded-md hover:bg-purple-700 transition-colors"
                  onClick={() => handleAction(application.id, "accept")}
                >
                  Accept
                </motion.button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
