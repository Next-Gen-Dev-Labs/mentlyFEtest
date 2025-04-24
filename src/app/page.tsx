"use client";

import Menu from "@/assets/svg/menu";
import More from "@/assets/svg/more";
import Thumbnail from "@/assets/svg/thumbnail";
import ThumbnailOutline from "@/assets/svg/thumbnail-outline";
import Chart from "@/components/chart";
import GroupCallsCard from "@/components/group-calls";
import ManageWidget from "@/components/manage-widget";
import ProgramCard from "@/components/program-card";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import max from "@/assets/images/max.png";
import sam from "@/assets/images/sam.jpg";
import w1 from "@/assets/images/woman1.jpg";
import w2 from "@/assets/images/woman2.png";
import Plus from "@/assets/svg/plus";

export default function Home() {
  const [openWidget, setOpenWidget] = useState(false);
  const close = () => setOpenWidget(false);
  const open = () => setOpenWidget(true);

  return (
    <>
      {openWidget && <ManageWidget onClose={close} />}
      <div className="py-[1.125rem] px-2 sm:px-6 md:px-12 xl:px-16 max-w-screen-2xl flex flex-col min-h-[calc(100vh-82px)]">
        <div className="flex gap-4 md:gap-6 items-center ml-auto">
          <Thumbnail />
          <ThumbnailOutline />
          <p
            onClick={open}
            className="cursor-pointer text-sm md:text-base font-bold leading-4 text-[var(--primary-light)]"
          >
            Manage Widgets
          </p>
        </div>

        <div className="rounded-sm bg-[var(--primary-light)] mt-6 mb-2 w-full px-6 py-2 flex items-center justify-between gap-x-4 gap-y-2 flex-wrap xl:flex-nowrap">
          <h2 className="text-white text-base sm:text-lg md:text-[26px] leading-[140%] tracking-[-1%]">
            Welcome Aboard, Blessing <span className="font-semibold">👋</span>
          </h2>

          <p className="text-sm md:text-base xl:text-xl text-[#bdbdbd] leading-[140%] tracking-[-1%]">
            We&apos;re thrilled to have you join Techrity Team!
          </p>

          <button className="text-[var(--primary)] text-sm md:text-base font-bold leading-4 bg-white py-2.5 px-4 md:px-6 rounded-lg flex items-center justify-center">
            Update Profile
          </button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <div className="col-span-1 flex flex-col gap-4">
            <div className="p-4 w-full rounded-xl bg-white space-y-4">
              <div className="w-full flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="cursor-pointer">
                    <Menu />
                  </span>
                  <p className="text-[#B0B0B0] text-sm sm:text-base leading-4 font-bold">
                    Programs
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-[10px] sm:text-xs text-[var(--primary-light)]">
                    See all
                  </p>
                  <span className="cursor-pointer">
                    <More />
                  </span>
                </div>
              </div>
              <div className="justify-end flex gap-4 items-center pr-4">
                <p className="text-[#918C9C] text-xs">Filter</p>
                <div className="border border-[#e1e7ec] rounded-sm py-2 px-3 gap-3 flex items-center justify-center">
                  <span className="text-sm/4 font-medium text-[#595564]">
                    Active
                  </span>
                  <span className="cursor-pointer">
                    <ChevronDown color="#595564" size={"16px"} />
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4 size-full overflow-auto h-[500px]">
                <ProgramCard />
              </div>
            </div>
            <Chart />
          </div>
          <div className="col-span-1 xl:col-span-2 flex flex-col gap-8">
            <div className="p-4 w-full rounded-[10.52px] bg-white flex flex-col gap-4">
              <div className="w-full flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="cursor-pointer">
                    <Menu />
                  </span>
                  <p className="text-[#B0B0B0] text-sm sm:text-base leading-4 font-bold">
                    Group Calls
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-[10px] sm:text-xs text-[var(--primary-light)]">
                    See all
                  </p>
                  <span className="cursor-pointer">
                    <More />
                  </span>
                </div>
              </div>
              <GroupCallsCard />
            </div>
            <div className="flex flex-col md:flex-row size-full gap-4">
              <div className="md:flex-[55%] flex flex-col gap-4">
                <div className="p-4 w-full bg-white space-y-4">
                  <div className="w-full flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="cursor-pointer">
                        <Menu />
                      </span>
                      <p className="text-[#B0B0B0] text-sm sm:text-base leading-4 font-bold">
                        Applications
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-[10px] sm:text-xs text-[var(--primary-light)]">
                        See all
                      </p>
                      <span className="cursor-pointer">
                        <More />
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 pb-6 border-b border-b-[#DBDBDB]">
                    <p className="sm:pl-4 text-[10px] text-[#7D8DA6]">
                      Mentors
                    </p>
                    <div className="flex justify-between flex-wrap gap-y-2">
                      <div className="flex items-center gap-2 sm:gap-4">
                        <span className="rounded-[2px] size-3.5 shrink-0 border border-[#A5A5A5]" />
                        <Image
                          src={max}
                          alt=""
                          className="size-8 rounded-full object-cover object-center"
                        />
                        <div>
                          <h4 className="font-bold text-[14.4px]/[150%] text-[#4f4f4f]">
                            Maxwell Smith
                          </h4>
                          <p className="text-[#7D8DA6] text-[10px]">
                            maxwellsmith@gmail.com
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="border-[0.61px] border-[#D09696] rounded-[6px] py-[10px] px-6 flex items-center justify-center text-[#D83535] text-[10px] font-medium">
                          Reject
                        </button>
                        <button className="pri-btn rounded-[6px] py-[10px] px-6 flex items-center justify-center text-white text-[10px] font-medium">
                          Accept
                        </button>
                      </div>
                    </div>
                    <div className="flex gap-2 sm:pl-4 flex-wrap">
                      <span className="bg-[#F3ECF9] border-[0.86px] border-[#DDCEEE] px-1 rounded-[5px] text-[#9985A7] font-medium text-[8.65px]/[22.48px]">
                        Product Designer
                      </span>
                      <span className="bg-[#E8FDFB] border-[0.86px] border-[#A1BDBA] px-1 rounded-[5px] text-[#58948E] font-medium text-[8.65px]/[22.48px]">
                        4years Experience
                      </span>
                      <span className="bg-[#E3ECF9] border-[0.86px] border-[#ABBEE0] px-1 rounded-[5px] text-[#8196B5] font-medium text-[8.65px]/[22.48px]">
                        Lagos, Nigeria
                      </span>
                      <span className="bg-[#F4F4F4] border-[0.86px] border-[#C8C8C8] px-1 rounded-[5px] text-[#595564] font-medium text-[8.65px]/[22.48px]">
                        GMT +1
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="sm:pl-4 text-[10px] text-[#7D8DA6]">
                      Students
                    </p>
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-between border-b gap-y-2 flex-wrap border-b-[#DBDBDB] pb-4">
                        <div className="flex items-center gap-2 sm:gap-4">
                          <span className="rounded-[2px] size-3.5 shrink-0 border border-[#A5A5A5]" />
                          <Image
                            src={sam}
                            alt=""
                            className="size-8 rounded-full object-cover object-center"
                          />
                          <div>
                            <h4 className="font-bold text-[14.4px]/[150%] text-[#4f4f4f]">
                              Adeati Samuel
                            </h4>
                            <p className="text-[#7D8DA6] text-[10px]">
                              adeatisamuel@gmail.com
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="border-[0.61px] border-[#D09696] rounded-[6px] py-[10px] px-6 flex items-center justify-center text-[#D83535] text-[10px] font-medium">
                            Reject
                          </button>
                          <button className="pri-btn rounded-[6px] py-[10px] px-6 flex items-center justify-center text-white text-[10px] font-medium">
                            Accept
                          </button>
                        </div>
                      </div>

                      <div className="flex justify-between border-b gap-y-2 flex-wrap border-b-[#DBDBDB] pb-4">
                        <div className="flex items-center gap-2 sm:gap-4">
                          <span className="rounded-[2px] size-3.5 shrink-0 border border-[#A5A5A5]" />
                          <Image
                            src={max}
                            alt=""
                            className="size-8 rounded-full object-cover object-center"
                          />
                          <div>
                            <h4 className="font-bold text-[14.4px]/[150%] text-[#4f4f4f]">
                              Maxwell Smith
                            </h4>
                            <p className="text-[#7D8DA6] text-[10px]">
                              maxwellsmith@gmail.com
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="border-[0.61px] border-[#D09696] rounded-[6px] py-[10px] px-6 flex items-center justify-center text-[#D83535] text-[10px] font-medium">
                            Reject
                          </button>
                          <button className="pri-btn rounded-[6px] py-[10px] px-6 flex items-center justify-center text-white text-[10px] font-medium">
                            Accept
                          </button>
                        </div>
                      </div>

                      <div className="flex justify-between flex-wrap gap-y-2 border-b border-b-[#DBDBDB] pb-4">
                        <div className="flex items-center gap-2 sm:gap-4">
                          <span className="rounded-[2px] size-3.5 shrink-0 border border-[#A5A5A5]" />
                          <Image
                            src={sam}
                            alt=""
                            className="size-8 rounded-full object-cover object-center"
                          />
                          <div>
                            <h4 className="font-bold text-[14.4px]/[150%] text-[#4f4f4f]">
                              Adeati Samuel
                            </h4>
                            <p className="text-[#7D8DA6] text-[10px]">
                              adeatisamuel@gmail.com
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="border-[0.61px] border-[#D09696] rounded-[6px] py-[10px] px-6 flex items-center justify-center text-[#D83535] text-[10px] font-medium">
                            Reject
                          </button>
                          <button className="pri-btn rounded-[6px] py-[10px] px-6 flex items-center justify-center text-white text-[10px] font-medium">
                            Accept
                          </button>
                        </div>
                      </div>

                      <div className="flex justify-between flex-wrap gap-y-2 border-b border-b-[#DBDBDB] pb-4">
                        <div className="flex items-center gap-2 sm:gap-4">
                          <span className="rounded-[2px] size-3.5 shrink-0 border border-[#A5A5A5]" />
                          <Image
                            src={max}
                            alt=""
                            className="size-8 rounded-full object-cover object-center"
                          />
                          <div>
                            <h4 className="font-bold text-[14.4px]/[150%] text-[#4f4f4f]">
                              Maxwell Smith
                            </h4>
                            <p className="text-[#7D8DA6] text-[10px]">
                              maxwellsmith@gmail.com
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="border-[0.61px] border-[#D09696] rounded-[6px] py-[10px] px-6 flex items-center justify-center text-[#D83535] text-[10px] font-medium">
                            Reject
                          </button>
                          <button className="pri-btn rounded-[6px] py-[10px] px-6 flex items-center justify-center text-white text-[10px] font-medium">
                            Accept
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:flex-[45%] flex flex-col gap-4">
                <div className="p-4 w-full rounded-xl bg-white space-y-4">
                  <div className="w-full flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="cursor-pointer">
                        <Menu />
                      </span>
                      <p className="text-[#B0B0B0] text-sm sm:text-base leading-4 font-bold">
                        Mentors
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="cursor-pointer">
                        <Plus />
                      </span>
                      <span className="cursor-pointer">
                        <More />
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center flex-wrap gap-y-2 border-b border-b-[#DBDBDB] pb-4">
                      <div className="flex items-center gap-2 sm:gap-4">
                        <Image
                          src={max}
                          alt=""
                          className="size-8 rounded-full object-cover object-center"
                        />
                        <div>
                          <h4 className="font-bold text-[14.4px]/[150%] text-[#4f4f4f]">
                            Maxwell Smith
                          </h4>
                          <p className="text-[#7D8DA6] text-[10px]">
                            Product Designer
                          </p>
                        </div>
                      </div>
                      <div>
                        <button className="py-1 px-3 rounded-2xl bg-[#6F01D0] text-[#F1EEFF] text-xs/3 font-normal">
                          Message
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center flex-wrap gap-y-2 border-b border-b-[#DBDBDB] pb-4">
                      <div className="flex items-center gap-2 sm:gap-4">
                        <Image
                          src={sam}
                          alt=""
                          className="size-8 rounded-full object-cover object-center"
                        />
                        <div>
                          <h4 className="font-bold text-[14.4px]/[150%] text-[#4f4f4f]">
                            Adeati Samuel
                          </h4>
                          <p className="text-[#7D8DA6] text-[10px]">
                            Product Designer
                          </p>
                        </div>
                      </div>
                      <div>
                        <button className="py-1 px-3 rounded-2xl bg-[#6F01D0] text-[#F1EEFF] text-xs/3 font-normal">
                          Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 w-full rounded-xl bg-white space-y-4">
                  <div className="w-full flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="cursor-pointer">
                        <Menu />
                      </span>
                      <p className="text-[#B0B0B0] leading-4 text-sm sm:text-base font-bold">
                        Recent Activities
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-[10px] sm:text-xs text-[var(--primary-light)]">
                        See all
                      </p>
                      <span className="cursor-pointer">
                        <More />
                      </span>
                    </div>
                  </div>
                  <div className="sm:p-2 space-y-4">
                    <div className="flex gap-2 pb-2 border-b border-b-[#F1EFEF]">
                      <Image
                        src={w1}
                        alt=""
                        className="rounded-full size-8 shrink-0"
                      />
                      <div className="">
                        <h4 className="font-bold text-sm/5 text-[#011627]">
                          KYC Verification
                        </h4>
                        <p className="text-[#707991] text-xs">
                          45 new persons just signed up on Mently.
                        </p>
                        <p className="text-[#707991] font-light text-xs/5">
                          25 minutes Ago
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 pb-2 border-b border-b-[#F1EFEF]">
                      <Image
                        src={w2}
                        alt=""
                        className="rounded-full size-8 shrink-0"
                      />
                      <div className="">
                        <h4 className="font-bold text-sm/5 text-[#011627]">
                          KYC Verification
                        </h4>
                        <p className="text-[#707991] text-xs">
                          45 new persons just signed up on Mently.
                        </p>
                        <p className="text-[#707991] font-light text-xs/5">
                          25 minutes Ago
                        </p>
                      </div>
                    </div>{" "}
                    <div className="flex gap-2 pb-2 border-b border-b-[#F1EFEF]">
                      <Image
                        src={sam}
                        alt=""
                        className="rounded-full size-8 shrink-0"
                      />
                      <div className="">
                        <h4 className="font-bold text-sm/5 text-[#011627]">
                          KYC Verification
                        </h4>
                        <p className="text-[#707991] text-xs">
                          45 new persons just signed up on Mently.
                        </p>
                        <p className="text-[#707991] font-light text-xs/5">
                          25 minutes Ago
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
