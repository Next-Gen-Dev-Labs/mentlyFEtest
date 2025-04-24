"use client";
import Sidebar from "../components/Sidebar";
import Programs from "../components/Programs";
import Navbar from "../components/MainNavbar";
import WelcomeBanner from "../components/WelcomeBanner";
import GroupCalls from "../components/Groups";
import Applications from "../components/Applications";
import MentorCardSection from "../components/Card/MentorCardSection";
import RecentActivities from "../components/RecentActivities";
import UsersBox from "../components/UserBox";
import ManageWidgets from "../components/ManageWidget";
import { motion } from "framer-motion";
import FadeInOnScroll from "@/components/animation/FadeInOnScroll";

export default function Dashboard() {
  return (
    <div className="min-h-screen md:pb-0 pb-4 flex flex-col md:flex-row bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="w-full h-screen px pt-2 overflow-y-scroll  space-y-2">
        <Navbar />
        <div className="px-4">
          <div className="max-w-[1440px] mx-auto">
            <ManageWidgets />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <WelcomeBanner />
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-3">
              <div>
                <FadeInOnScroll>

                <Programs />
                </FadeInOnScroll>

                <UsersBox
                  data={{ students: 200, mentors: 8, programs: 22, others: 10 }}
                />
              </div>
              <div className="col-span-2">
                <FadeInOnScroll>

                <GroupCalls />
                </FadeInOnScroll>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 mt-2">
                  <Applications />
                  <div className="col-span-2 flex flex-col gap-2">
                    <MentorCardSection
                      mentors={[
                        {
                          name: "Maxwell Smith",
                          title: "Product Designer",
                          profile: "/asset/m1.png",
                        },
                        {
                          name: "Adeati Samuel",
                          title: "Product Designer",
                          profile: "/asset/m2.png",
                        },
                      ]}
                    />
                    <RecentActivities
                      activities={[
                        {
                          title: "KYC Verification",
                          time: "45 mins ago",
                          detail: "45 new persons just signed up on Mently.",
                          profile: "/asset/R1.png",
                        },
                        {
                          title: "New User Sign Up!",
                          time: "25 mins ago",
                          detail: "45 new persons just signed up on Mently.",
                          profile: "/asset/R2.png",
                        },
                        {
                          title: "Withdrawal Request!",
                          time: "25 mins ago",
                          detail: "Mardian requested a withdrawal.",
                          profile: "/asset/m2.png",
                        },
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
