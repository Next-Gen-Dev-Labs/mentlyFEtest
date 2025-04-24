"use client";

import WelcomeSection from "@/components/WelcomeSection";
import SectionHeader from "../components/SectionHeader";
import ProgramCard from "../components/ProgramCard";
import MeetingCard from "../components/MeetingCard";
import UserCard from "../components/UserCard";
import ActivityCard from "../components/ActivityCard";
import { useState } from "react";
import ManageWidgetModal from "@/components/ManageWidgetModal";
import NewUserCard from "@/components/NewUserCard";
import { motion } from "framer-motion";

export default function Home() {
  const [isManageWidgetModalOpen, setIsManageWidgetModalOpen] = useState(false);

  const openManageWidgetModal = () => {
    setIsManageWidgetModalOpen(true);
  };

  const closeManageWidgetModal = () => {
    setIsManageWidgetModalOpen(false);
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const popIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const hoverScale = {
    scale: 1.03,
    boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.08)",
    transition: { type: "spring", stiffness: 400, damping: 10 },
  };

  return (
    <motion.div
      className=""
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div>
        <div className="flex justify-end items-center px-4 pb-4">
          <motion.div
            className="flex items-center gap-2"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            <motion.button
              className="p-2 text-gray-500 hover:bg-gray-100 focus:outline-none"
              whileHover={{ rotate: 90, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                width="24"
                height="18"
                viewBox="0 0 24 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 10.5H16.5V18H24V10.5ZM22.5 16.5H18V12H22.5V16.5ZM24 0H16.5V7.5H24V0ZM22.5 6H18V1.5H22.5V6ZM0 1.5V3H13.5V1.5H0ZM4.5 6H13.5V4.5H4.5V6ZM13.5 12H0V13.5H13.5V12ZM13.5 15H4.5V16.5H13.5V15Z"
                  fill="#A4A5B8"
                />
              </svg>
            </motion.button>
            <motion.button
              className="text-purple-800 hover:bg-gray-100 p-2 rounded focus:outline-none cursor-pointer"
              whileHover={{ rotate: 180, transition: { duration: 0.5 } }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                width="22"
                height="15"
                viewBox="0 0 22 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.444458 14.0833V0.837723H13.6901V14.0833H0.444458ZM15.8977 6.35673V0.837723H21.4167V6.35673H15.8977ZM17.0015 5.25293H20.3129V1.94152H17.0015V5.25293ZM1.54826 12.9795H12.5863V1.94152H1.54826V12.9795ZM2.86399 10.666H11.2705L8.58499 7.07862L6.51536 9.83812L4.99764 7.82368L2.86399 10.666ZM15.8977 14.0833V8.56433H21.4167V14.0833H15.8977ZM17.0015 12.9795H20.3129V9.66813H17.0015V12.9795Z"
                  fill="#6F01D0"
                />
              </svg>
            </motion.button>
            <motion.button
              className="text-sm font-medium cursor-pointer hover:text-gray-700"
              onClick={openManageWidgetModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Manage Widgets
            </motion.button>
          </motion.div>
        </div>
      </div>
      {/* Manage Widget Modal */}
      <ManageWidgetModal
        isOpen={isManageWidgetModalOpen}
        onClose={closeManageWidgetModal}
      />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <WelcomeSection />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-3"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="lg:col-span-1" variants={slideUp}>
          {/* Programs section  */}
          <motion.div
            className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 mb-8"
            variants={popIn}
            whileHover={hoverScale}
          >
            <SectionHeader title="Programs" filter={true} />
            <div className="mt-4">
              <div className="flex items-center justify-end text-sm gap-2 mb-6">
                <span className="mr-2 text-[#918C9C]">Filter</span>
                <motion.button
                  className="text-[#595564] px-3 py-1 rounded flex items-center border border-[#E1E7EC] cursor-pointer hover:bg-[#E1E7EC]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Active
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{
                      repeat: Infinity,
                      repeatDelay: 3,
                      duration: 0.5,
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </motion.button>
              </div>

              <motion.div
                variants={slideUp}
                custom={0}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <ProgramCard
                  title="Fundamentals of User Interface & Experience"
                  description="This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach..."
                  status="Bootcamp"
                  mentors={[
                    { image: "/Frame 1000003208 (1).png" },
                    { image: "/Frame 1000003208 (1).png" },
                  ]}
                  headerImage="../../Program banner with Image.png"
                />
              </motion.div>

              <motion.div
                variants={slideUp}
                custom={1}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <ProgramCard
                  title="Colour Hack Practical Group Call"
                  description="This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach..."
                  status="ongoing"
                  mentors={[]}
                  hosted={{
                    name: "Faith Ojeih",
                    image: "/Frame 1000003208 (1).png",
                  }}
                  headerImage="/Rectangle 12322.png"
                />
              </motion.div>

              <motion.div
                variants={slideUp}
                custom={2}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <ProgramCard
                  title="Colour Hack Practical Group Call"
                  description="This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach..."
                  status="ongoing"
                  mentors={[]}
                  hosted={{ name: "Saf", image: "/Frame 1000003208 (1).png" }}
                  headerImage="/Rectangle 12322.png"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Users section  */}
          <motion.div variants={popIn} whileHover={hoverScale}>
            <NewUserCard />
          </motion.div>
        </motion.div>

        <motion.div className="lg:col-span-2" variants={slideUp}>
          {/* Group Calls section  */}
          <motion.div
            className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 mb-8"
            variants={popIn}
            whileHover={hoverScale}
          >
            <SectionHeader title="Group Calls" />
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mt-4"
              variants={staggerContainer}
            >
              <motion.div
                variants={popIn}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <MeetingCard
                  title="Weekly Meeting - Product Demo Review with Testers"
                  date="Mon, Jul 30, 2024"
                  time="9:00 - 11:00AM"
                  status="ongoing"
                  group="UX Strategy Study group"
                  image="/Rectangle 12322.png"
                />
              </motion.div>

              <motion.div
                variants={popIn}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <MeetingCard
                  title="Weekly Meeting - Product Demo Review with Testers"
                  date="Mon, Jul 30, 2024"
                  time="9:00 - 11:00AM"
                  status="upcoming"
                  group="UX Strategy Study group"
                  image="/Rectangle 12322 (1).png"
                />
              </motion.div>

              <motion.div
                variants={popIn}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <MeetingCard
                  title="Weekly Meeting - Product Demo Review with Testers"
                  date="Mon, Jul 30, 2024"
                  time="9:00 - 11:00AM"
                  status="ongoing"
                  group="UX Strategy Study group"
                  image="/muuk.png"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8"
            variants={staggerContainer}
          >
            <motion.div
              className="md:col-span-7 bg-white rounded-lg shadow-sm border border-gray-100 p-4"
              variants={popIn}
              whileHover={hoverScale}
            >
              {/* Applications section */}
              <div>
                <SectionHeader title="Applications" />
                <motion.div
                  className="flex pb-3 mb-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: 1, duration: 0.5, delay: 1.5 }}
                >
                  <button className="text-sm text-gray-400 pb-1 mr-4">
                    Mentors
                  </button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <UserCard
                    name="Maxwell Smith"
                    email="maxwellsmith@gmail.com"
                    role="Product Designer"
                    image="/Ellipse 56.png"
                  />
                </motion.div>

                <motion.div
                  className="flex items-center justify-center gap-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.span
                    className="text-[10px] px-2 py-2 rounded-sm bg-[#F3ECF9] text-[#9985A7]"
                    whileHover={{ scale: 1.1 }}
                  >
                    Product Designer
                  </motion.span>
                  <motion.span
                    className="text-[10px] px-2 py-2 rounded-sm bg-[#E8FDFB] text-[#58948E]"
                    whileHover={{ scale: 1.1 }}
                  >
                    4 years Experience
                  </motion.span>
                  <motion.span
                    className="text-[10px] px-2 py-2 rounded-sm bg-[#E3ECF9] text-[#8196B5]"
                    whileHover={{ scale: 1.1 }}
                  >
                    Lagos Nigeria
                  </motion.span>
                  <motion.span
                    className="text-[10px] px-2 py-2 rounded-sm bg-[#2AC10033] text-[#1F8B01]"
                    whileHover={{ scale: 1.1 }}
                  >
                    GMT +1
                  </motion.span>
                </motion.div>
              </div>

              {/* Divider line */}
              <motion.div
                className="border-t border-gray-200 my-4"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              ></motion.div>

              {/* Students section */}
              <div>
                <SectionHeader title="Students" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <UserCard
                    name="Adeati Samuel"
                    email="maxwellsmith@gmail.com"
                    role="Product Designer"
                    image="/Ellipse 56 (1).png"
                  />
                </motion.div>

                <motion.div
                  className="border border-gray-200 my-4"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                ></motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <UserCard
                    name="Maxwell Smith"
                    email="maxwellsmith@gmail.com"
                    role="Product Designer"
                    image="/Ellipse 56.png"
                  />
                </motion.div>

                <motion.div
                  className="border border-gray-200 my-4"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 1 }}
                ></motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <UserCard
                    name="Adeati Samuel"
                    email="maxwellsmith@gmail.com"
                    role="Product Designer"
                    image="/Ellipse 56 (1).png"
                  />
                </motion.div>

                <motion.div
                  className="border border-gray-200 my-4"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 1 }}
                ></motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <UserCard
                    name="Maxwell Smith"
                    email="maxwellsmith@gmail.com"
                    role="Product Designer"
                    image="/Ellipse 56.png"
                  />
                </motion.div>

                <motion.div
                  className="border border-gray-200 my-4"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 1 }}
                ></motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <UserCard
                    name="Adeati Samuel"
                    email="maxwellsmith@gmail.com"
                    role="Product Designer"
                    image="/Ellipse 56 (1).png"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Mentors section  */}
            <motion.div
              className="md:col-span-5 bg-white rounded-lg shadow-sm border border-gray-100 p-4"
              variants={popIn}
              whileHover={hoverScale}
            >
              <div>
                <SectionHeader title="Mentors" />
                <motion.div
                  className="flex items-center justify-between mb-4 mt-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      <img
                        src="/Ellipse 56.png"
                        alt="Maxwell Smith"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div>
                      <h4 className="font-medium">Maxwell Smith</h4>
                      <p className="text-xs text-gray-500">Product Designer</p>
                    </div>
                  </div>
                  <motion.button
                    className="text-xs bg-purple-600 text-white rounded-full px-3 py-1 font-bold"
                    whileHover={{ scale: 1.1, backgroundColor: "#4C1D95" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Message
                  </motion.button>
                </motion.div>

                <motion.div
                  className="flex items-center justify-between mb-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden"
                      whileHover={{ scale: 1.2, rotate: -10 }}
                    >
                      <img
                        src="/Ellipse 56 (1).png"
                        alt="Adeati Samuel"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div>
                      <h4 className="font-medium">Adeati Samuel</h4>
                      <p className="text-xs text-gray-500">Product Designer</p>
                    </div>
                  </div>
                  <motion.button
                    className="text-xs bg-purple-600 text-white rounded-full px-3 py-1 font-bold"
                    whileHover={{ scale: 1.1, backgroundColor: "#4C1D95" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Message
                  </motion.button>
                </motion.div>

                <div className="w-full">
                  <motion.button
                    className="flex items-center justify-center text-center text-xs bg-purple-100 rounded-full py-3 font-bold w-full text-purple-600 cursor-pointer"
                    whileHover={{ scale: 1.05, backgroundColor: "#DDD6FE" }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      boxShadow: [
                        "0px 0px 0px rgba(111, 1, 208, 0)",
                        "0px 0px 15px rgba(111, 1, 208, 0.3)",
                        "0px 0px 0px rgba(111, 1, 208, 0)",
                      ],
                    }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    See All
                  </motion.button>
                </div>
              </div>

              {/* Recent Activities */}
              <motion.div
                className="border-t border-gray-200 mt-4 pt-4"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 1 }}
              >
                <SectionHeader title="Recent Activities" />
                <motion.div className="mt-4" variants={staggerContainer}>
                  <motion.div variants={fadeIn} custom={0}>
                    <ActivityCard
                      type="verification"
                      count={45}
                      time="25 minutes Ago"
                    />
                  </motion.div>

                  <motion.div variants={fadeIn} custom={1}>
                    <ActivityCard
                      type="signup"
                      count={45}
                      time="25 minutes Ago"
                    />
                  </motion.div>

                  <motion.div variants={fadeIn} custom={2}>
                    <ActivityCard
                      type="withdrawal"
                      user="Mardian"
                      time="25 minutes Ago"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
