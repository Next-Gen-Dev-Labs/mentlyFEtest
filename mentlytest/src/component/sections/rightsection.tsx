import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import React from "react";
import Infocard from "../card";

interface ProgramInfo {
  title: string;
  subtitle: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

const Rightsection: React.FC<{
  programInfo: ProgramInfo;
  onEdit: () => void;
}> = ({ programInfo, onEdit }) => {
  return (
    <div className="space-y-6 py-4 pb-8 font-[Chivo] bg-white dark:bg-background px-6">
      <div className="w-full flex px-2">
        <span className="w-full text-right lg:text-sm text-[10px] text-[#809FB8] dark:text-muted-foreground">
          13th February 2024, 12:15 PM (Local time).
        </span>
      </div>
      <div className="border rounded-lg px-2 pt-2 pb-10 flex flex-col gap-4 dark:border-border">
        <div>
          <h2 className="lg:text-3xl text-lg font-bold mb-1 dark:text-foreground">
            {programInfo.title}
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl bg-[url('/banner.png')] bg-cover bg-center text-white h-[200px]"
          >
            <div className="relative z-10  justify-between flex lg:flex-row flex-col items-center gap-6 lg:py-8 lg:px-10 py-6 px-8">
              <div className="flex-[0.8] flex items-start gap-4">
                <div className="lg:h-36 lg:w-24 h-18 w-14 overflow-hidden rounded-sm flex-shrink-0">
                  <img
                    src="/eventimg.png"
                    alt="speaker"
                    className="h-full w-full object-cover  bg-center"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <h2 className="lg:text-2xl text-[14px] font-semibold text-white">
                    Mastering the <br /> Work Life Equation
                  </h2>
                  <p className="mt-1 text-zinc-300 lg:text-sm text-[10px]">
                    With:{" "}
                    <span className=" text-white">Nwachukwu Peculiar</span>
                  </p>

                  <button className="mt-2 self-start rounded-lg bg-gradient-to-r from-[#FF0044] to-[#F6A000] px-8  py-1 flex item-center w-fit">
                    <span className="text-[12px] font-medium">Masterclass</span>
                  </button>
                </div>
              </div>

              <div className="flex lg:flex-col flex-col items-center text-zinc-400">
                <p className="pb-2 flex flex-row lg:flex-col lg:text-[14px] text-[10px] font-bold text-white gap-2 lg:gap-1">
                  <span>20TH</span>
                  <span>OCT,</span>
                  <span>2024</span>
                </p>

                <div className="lg:w-full w-[0px] h-[0px] bg-zinc-400 mx-2 lg:mx-0"></div>

                <span className="lg:text-[12px] text-[10px] lg:mt-1 font-bold text-white">
                  2PM
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-between flex-col lg:flex-row gap-6 py-6"
        >
          <div className="flex-1">
            <p className="font-[Chivo] lg:text-[16px] text-[14px] font-normal text-justify dark:text-foreground">
              {programInfo.description}
            </p>
          </div>

          <div className="flex-1 bg-card dark:bg-secondary rounded-xl shadow-lg p-8">
            <div className="flex flex-col gap-6 ">
              <div className="flex justify-between items-center">
                <Briefcase className="w-5 h-5 text-primary dark:text-foreground" />
                <span className="w-full text-right text-sm dark:text-foreground">
                  Mentorship Program
                </span>
              </div>
              <div className="flex justify-between items-center">
                <Calendar className="w-5 h-5 text-primary dark:text-foreground" />
                <span className="w-full text-right text-sm dark:text-foreground">
                  21/4/2024 - 21/5/2024
                </span>
              </div>
              <div className="flex justify-between items-center">
                <MapPin className="w-5 h-5 text-primary dark:text-foreground" />
                <span className="w-full text-right text-sm dark:text-foreground">
                  {programInfo.location}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full"
        >
          <Infocard variant="grid" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full"
        >
          <Infocard variant="list" />
        </motion.div>
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="hidden max-sm:block px-4 py-1.5 bg-purple-900 text-white rounded-lg hover:bg-purple-800 shadow-sm hover:shadow transition-all"
        onClick={onEdit}
      >
        Edit
      </motion.button>
    </div>
  );
};

export default Rightsection;
