import React from "react";
import Header from "../ui/Header";
import { motion } from "framer-motion";
import {
  MentorApplications,
  StudentApplications,
} from "@/data/application.item";
import { ApplicationTypeMentor, ApplicationTypeStudent } from "@/types/data";
import { Cards } from "../ui/Cards";

const Applications = () => {
  return (
    <div className="w-full rounded-[10px] py-2 bg-white">
      <Header title="Applications" />

      {/* Mentor Applications */}
      <div className="px-5">
        <h1 className="text-[10px] text-[#7D8DA6]">Mentors</h1>
        <div className="w-full pb-5">
          {MentorApplications.map(
            (app: ApplicationTypeMentor, index: number) => (
              <Cards.ApplicationCard app={app} key={index} />
            )
          )}
        </div>
      </div>

      {/* Student Applications */}
      <div className="px-5">
        <h1 className="text-[10px] text-[#7D8DA6]">Students</h1>
        <div className="w-full pb-5">
          {StudentApplications.map(
            (app: ApplicationTypeStudent, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Cards.ApplicationCard app={app} />
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Applications;
