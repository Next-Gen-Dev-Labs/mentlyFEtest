"use client";
import {
  Briefcase,
  Calendar2,
  Call,
  Location,
  Note1,
  People,
} from "iconsax-react";
import React, { Fragment } from "react";
import Image from "next/image";
import ProgramCard, { ProgramIconWithText } from "./program-card";
import Animate from "@/components/common/animate";

function ProgramDetail() {
  return (
    <Fragment>
      <Animate
        as={"p"}
        className="text-end text-xs text-[#809FB8] dark:text-[#8B8B8B]"
      >
        13th February 2024, 12:15 PM (Local time).
      </Animate>

      <Animate className="space-y-6 border border-[#D9E1E7] p-3 rounded mt-[50px] dark:border-[#3A3D4A]">
        <Animate
          as={"h2"}
          className="text-3xl font-bold mb-4 text-primary dark:text-[#D9D9D9]"
        >
          Mentorship Program
        </Animate>

        <Animate className="bg-gradient-to-r from-[#0F1013] to-[#5D6379] rounded-2xl px-[40px] text-white relative overflow-hidden pt-[56px] pb-[34px]">
          <div className="absolute top-0 left-0">
            <svg
              width="505"
              height="206"
              viewBox="0 0 505 206"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M504.247 100.832C504.247 168.437 391.418 223.242 252.238 223.242C113.057 223.242 0.228516 168.437 0.228516 100.832C0.228516 33.2261 113.057 -21.5791 252.238 -21.5791C391.418 -21.5791 504.247 33.2261 504.247 100.832Z"
                fill="#D9D9D9"
                style={{ mixBlendMode: "color-burn" }}
              />
            </svg>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <div className="flex items-center gap-6">
                <div className="w-[74px] h-[115px] relative">
                  <Image
                    src="/img/program.png"
                    fill
                    className=""
                    alt="program"
                  />
                </div>

                <div className="">
                  <h3 className="text-2xl font-bold mb-1 leading-none">
                    Mastering the
                    <br />
                    work life Equation
                  </h3>
                  <p className="text-sm opacity-80">with: Nwachukwu Peculiar</p>
                </div>
              </div>
            </div>
            <div className="w-[39px] divide-y">
              <h4>20TH OCT, 2024</h4>
              <h6>2PM</h6>
            </div>
          </div>
        </Animate>

        <div className="flex gap-2">
          <div className="flex-1">
            <Animate as={"p"} className="text-gray-600 dark:text-[#8B8B8B]">
              UI/UX Design check ins with faith is a way for beginners in UI/UX
              Design to get started about the fundamentals and how they can
              build a Design Career, share, document their progress on a weekly
              basis.
            </Animate>
          </div>

          <Animate className="shadow-[0px_6px_16px_0px_#0000000F] bg-white rounded-lg p-4 flex-1 text-grey-text font-bold space-y-4">
            <div className="flex justify-between">
              <Briefcase size={20} color="#777795" />
              <span className="">Mentorship Program</span>
            </div>

            <div className="flex justify-between">
              <Calendar2 size={20} color="#777795" />
              <span className="">21/4/2024-21/5/2024</span>
            </div>

            <div className="flex justify-between">
              <Location size={20} color="#777795" />
              <span className="">In Person</span>
            </div>
          </Animate>
        </div>

        <div className="space-y-4">
          <ProgramCard title="Program Information Text">
            <>
              <div className="grid grid-cols-2 gap-y-6">
                <ProgramIconWithText
                  text="Content"
                  icon={
                    <svg
                      width="17"
                      height="14"
                      viewBox="0 0 17 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.44626 6.99948C7.44626 7.11798 7.39919 7.23162 7.3154 7.3154C7.23162 7.39919 7.11798 7.44626 6.99948 7.44626H3.42528C3.30679 7.44626 3.19315 7.39919 3.10936 7.3154C3.02557 7.23162 2.9785 7.11798 2.9785 6.99948C2.9785 6.88099 3.02557 6.76735 3.10936 6.68357C3.19315 6.59978 3.30679 6.55271 3.42528 6.55271H6.99948C7.11798 6.55271 7.23162 6.59978 7.3154 6.68357C7.39919 6.76735 7.44626 6.88099 7.44626 6.99948ZM6.99948 4.16991H3.42528C3.30679 4.16991 3.19315 4.21698 3.10936 4.30076C3.02557 4.38455 2.9785 4.49819 2.9785 4.61668C2.9785 4.73517 3.02557 4.84881 3.10936 4.9326C3.19315 5.01639 3.30679 5.06346 3.42528 5.06346H6.99948C7.11798 5.06346 7.23162 5.01639 7.3154 4.9326C7.39919 4.84881 7.44626 4.73517 7.44626 4.61668C7.44626 4.49819 7.39919 4.38455 7.3154 4.30076C7.23162 4.21698 7.11798 4.16991 6.99948 4.16991ZM15.1904 8.83275V13.5522C15.1906 13.6307 15.17 13.7079 15.1309 13.7759C15.0918 13.844 15.0354 13.9005 14.9674 13.9399C14.8995 13.9792 14.8224 14 14.7439 14C14.6653 14 14.5882 13.9794 14.5202 13.9401L12.6586 12.8753L10.7971 13.9401C10.7291 13.9794 10.6519 14 10.5734 14C10.4949 14 10.4178 13.9792 10.3499 13.9399C10.2819 13.9005 10.2255 13.844 10.1864 13.7759C10.1472 13.7079 10.1267 13.6307 10.1269 13.5522V11.6162H1.04248C0.765994 11.6162 0.500837 11.5063 0.305334 11.3108C0.109832 11.1153 0 10.8502 0 10.5737V1.04248C0 0.765994 0.109832 0.500837 0.305334 0.305334C0.500837 0.109832 0.765994 0 1.04248 0H14.1479C14.4244 0 14.6895 0.109832 14.885 0.305334C15.0805 0.500837 15.1904 0.765994 15.1904 1.04248V3.37911C15.5661 3.72704 15.8658 4.14885 16.0708 4.61809C16.2758 5.08733 16.3817 5.59387 16.3817 6.10593C16.3817 6.618 16.2758 7.12454 16.0708 7.59378C15.8658 8.06302 15.5661 8.48483 15.1904 8.83275ZM12.6586 3.27635C12.099 3.27635 11.5519 3.44231 11.0866 3.75322C10.6213 4.06414 10.2586 4.50606 10.0445 5.0231C9.83029 5.54014 9.77425 6.10907 9.88343 6.65796C9.99261 7.20684 10.2621 7.71102 10.6578 8.10675C11.0535 8.50247 11.5577 8.77196 12.1066 8.88114C12.6555 8.99032 13.2244 8.93429 13.7415 8.72012C14.2585 8.50596 14.7004 8.14328 15.0113 7.67796C15.3223 7.21264 15.4882 6.66557 15.4882 6.10593C15.4882 5.35548 15.1901 4.63577 14.6595 4.10512C14.1288 3.57447 13.4091 3.27635 12.6586 3.27635ZM10.1269 10.7226V8.83275C9.47499 8.22435 9.06308 7.40217 8.9661 6.51574C8.86912 5.62931 9.09351 4.73751 9.59846 4.00254C10.1034 3.26757 10.8554 2.73823 11.7176 2.51081C12.5798 2.28339 13.4951 2.37299 14.2968 2.76331V1.04248C14.2968 1.00298 14.2811 0.965099 14.2532 0.93717C14.2253 0.909241 14.1874 0.893551 14.1479 0.893551H1.04248C1.00298 0.893551 0.965099 0.909241 0.93717 0.93717C0.909241 0.965099 0.893551 1.00298 0.893551 1.04248V10.5737C0.893551 10.6132 0.909241 10.6511 0.93717 10.679C0.965099 10.7069 1.00298 10.7226 1.04248 10.7226H10.1269ZM14.2968 9.44856C13.787 9.69891 13.2266 9.82909 12.6586 9.82909C12.0907 9.82909 11.5303 9.69891 11.0205 9.44856V12.7822L12.4353 11.9728C12.5032 11.9336 12.5802 11.913 12.6586 11.913C12.7371 11.913 12.8141 11.9336 12.882 11.9728L14.2968 12.7822V9.44856Z"
                        fill="#1F0954"
                      />
                    </svg>
                  }
                />

                <ProgramIconWithText
                  text="Content"
                  icon={<Briefcase size={20} color="#777795" />}
                />

                <ProgramIconWithText
                  text="Content"
                  icon={<People size={20} color="#777795" />}
                />
                <ProgramIconWithText
                  text="Content"
                  icon={<Note1 size={20} color="#777795" />}
                />

                <ProgramIconWithText
                  text="Content"
                  icon={<Call size={20} color="#777795" />}
                />

                <ProgramIconWithText
                  text="Content"
                  icon={
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.82115 9.32C2.67626 9.32 2.5547 9.27111 2.45648 9.17333C2.35826 9.07467 2.30915 8.95267 2.30915 8.80733V8.14067H10.1425L10.5651 8.564V2.5H11.2318C11.3771 2.5 11.4989 2.54911 11.5971 2.64733C11.6954 2.74556 11.7447 2.86733 11.7451 3.01267V11.372L9.69314 9.32067L2.82115 9.32ZM0.257812 8.85933V1.01267C0.257812 0.867333 0.306701 0.745556 0.404479 0.647333C0.50359 0.549111 0.625813 0.5 0.771146 0.5H8.71981C8.86514 0.5 8.98692 0.549111 9.08514 0.647333C9.18337 0.745556 9.23248 0.867333 9.23248 1.01267V6.29467C9.23248 6.44 9.18337 6.562 9.08514 6.66067C8.98692 6.75844 8.86514 6.80733 8.71981 6.80733H2.30915L0.257812 8.85933ZM8.56514 6.14133V1.16667H0.924479V7.064L1.84715 6.14133H8.56514Z"
                        fill="#1F0954"
                      />
                    </svg>
                  }
                />
              </div>
            </>
          </ProgramCard>

          <ProgramCard title="Program Information Text 2">
            <Animate
              as={"ul"}
              className="list-disc list-inside text-base font-semibold text-[#595564] dark:text-[#8B8B8B]"
            >
              <li>Content</li>
              <li>Content</li>
              <li>Content</li>
              <li>Content</li>
              <li>Content</li>
            </Animate>
          </ProgramCard>
        </div>
      </Animate>
    </Fragment>
  );
}

export default ProgramDetail;
