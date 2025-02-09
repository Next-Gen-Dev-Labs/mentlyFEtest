"use client";
import { ArrowLeft, Copy, Setting2 } from "iconsax-react";
import React, { Fragment, useState } from "react";
import ProgramInfo from "./program-info";
import { DropdownMenu } from "@/components/ui/dropdown";
import { useApp } from "@/context/main";
import ProgramDetail from "./program-detail";
import Animate from "@/components/common/animate";

function DashboardPage() {
  const { theme, mounted } = useApp();
  return (
    <Fragment>
      <div className="flex max-md:flex-col gap-[47px]">
        <div className="w-[532px] max-md:w-full">
          <Animate className="flex justify-between items-center mb-8">
            {mounted && (
              <button className="text-[#F0C074] flex items-center gap-2">
                <ArrowLeft
                  size={20}
                  color={theme === "light" ? "#F0C074" : "#FFD8A8"}
                />
                Back to Home
              </button>
            )}

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

              <button className="flex items-center gap-2 bg-primary text-white px-2 py-1 rounded-full font-bold text-sm dark:bg-[#1E2139] dark:text-[#D9D9D9]">
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.2771 5.82528L9.91966 0.23509C9.84478 0.156863 9.74934 0.103565 9.64542 0.0819363C9.54151 0.0603078 9.43378 0.0713201 9.33586 0.113581C9.23794 0.155841 9.15423 0.227451 9.09532 0.319355C9.03641 0.411259 9.00494 0.519329 9.00489 0.629897V3.44945C7.26775 3.60458 5.34914 4.49202 3.77072 5.88887C1.87018 7.57152 0.686871 9.73981 0.438422 11.9941C0.419007 12.1693 0.453062 12.3465 0.535742 12.5004C0.618421 12.6543 0.745512 12.777 0.898928 12.8512C1.05234 12.9254 1.22427 12.9471 1.39023 12.9134C1.55619 12.8797 1.70774 12.7923 1.82331 12.6635C2.55995 11.8452 5.18105 9.25766 9.00489 9.02986V11.8103C9.00494 11.9208 9.03641 12.0289 9.09532 12.1208C9.15423 12.2127 9.23794 12.2843 9.33586 12.3266C9.43378 12.3689 9.54151 12.3799 9.64542 12.3582C9.74934 12.3366 9.84478 12.2833 9.91966 12.2051L15.2771 6.61489C15.3772 6.5101 15.4335 6.36811 15.4335 6.22009C15.4335 6.07206 15.3772 5.93008 15.2771 5.82528ZM10.0764 10.4609V8.45616C10.0764 8.3079 10.0199 8.16571 9.91945 8.06088C9.81898 7.95604 9.68271 7.89714 9.54063 7.89714C7.66018 7.89714 5.82863 8.40934 4.09685 9.42047C3.21486 9.93774 2.39308 10.5596 1.64785 11.2736C2.03626 9.60774 3.01533 8.02362 4.46383 6.74137C6.01881 5.36549 7.91667 4.54303 9.54063 4.54303C9.68271 4.54303 9.81898 4.48413 9.91945 4.3793C10.0199 4.27446 10.0764 4.13227 10.0764 3.98401V1.97993L14.1406 6.22009L10.0764 10.4609Z"
                    fill="white"
                  />
                </svg>

                <span>Share</span>
              </button>
            </div>
          </Animate>

          <div className="space-y-6">
            <ProgramInfo />
          </div>
        </div>

        <div className="flex-1">
          <ProgramDetail />
        </div>
      </div>
    </Fragment>
  );
}

export default DashboardPage;
