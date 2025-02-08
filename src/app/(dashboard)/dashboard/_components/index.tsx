"use client";
import {
  ArrowLeft,
  Briefcase,
  Calendar2,
  Copy,
  Location,
  Setting2,
} from "iconsax-react";
import React, { Fragment, useState } from "react";
import ProgramInfo from "./program-info";
import { DropdownMenu } from "@/components/common/dropdown";
import Image from "next/image";

// const ImageResize = dynamic(() => import('quill-image-resize-module-react'), {
//     ssr: false
//   })

function DashboardPage() {
  return (
    <Fragment>
      <div className="flex gap-[47px]">
        <div className="w-[532px]">
          <div className="flex justify-between items-center mb-8">
            <button className="text-orange-400 flex items-center gap-2">
              <ArrowLeft size={20} />
              Back to Home
            </button>

            <div className="flex items-center gap-4">
              <DropdownMenu
                trigger={<Setting2 size={20} color="#C2C2C2" />}
                items={[
                  {
                    label: "Edit",
                    onClick: () => console.log("Edit"),
                  },
                  {
                    label: "Delete",
                    onClick: () => console.log("Delete"),
                  },
                ]}
              />

              <button>
                <Copy size={20} color="#C2C2C2" />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <ProgramInfo />
          </div>
        </div>

        <div className="flex-1">
          <p className="text-end">13th February 2024, 12:15 PM (Local time).</p>

          <div className="space-y-6 border border-[#D9E1E7] p-3 rounded">
            <h2 className="text-3xl font-bold mb-4 text-primary">
              Mentorship Program
            </h2>

            <div className="bg-gradient-to-r from-[#0F1013] to-[#5D6379] rounded-2xl px-[40px] text-white relative overflow-hidden pt-[56px] pb-[34px]">
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
                      <p className="text-sm opacity-80">
                        with: Nwachukwu Peculiar
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-[39px] divide-y">
                  <h4>20TH OCT, 2024</h4>
                  <h6>2PM</h6>
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="flex-1">
                <p className="text-gray-600">
                  UI/UX Design check ins with faith is a way for beginners in
                  UI/UX Design to get started about the fundamentals and how
                  they can build a Design Career, share, document their progress
                  on a weekly basis.
                </p>
              </div>

              <div className="shadow-[0px_6px_16px_0px_#0000000F] bg-white rounded-lg p-4 flex-1 text-grey-text font-bold space-y-4">
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
              </div>
            </div>

            <div className="space-y-4">
              <div className="border bg-[#FFFAF2] border-[#FEE0B1] p-4 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default DashboardPage;
