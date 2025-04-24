import bg2 from "@/assets/images/program-card-bg-2.jpg";
import bg3 from "@/assets/images/bg-3.jpg";
import bg4 from "@/assets/images/bg-4.jpg";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import img1 from "@/assets/images/program-card-img-1.png";
import img2 from "@/assets/images/program-card-img-2.png";
import img3 from "@/assets/images/program-card-img-3.png";
import lambo from "@/assets/images/lambo.png";
import Calendar from "@/assets/svg/calendar";
import Time from "@/assets/svg/time";

export default function GroupCallsCard() {
  return (
    <div className="flex items-center gap-4 overflow-x-auto">
      <div className="min-w-72 w-full flex flex-col bg-[#F9F7FF] gap-1.5 px-3 py-4 rounded-[10px]">
        <div className="flex w-full h-[70px] relative overflow-hidden rounded-[10px]">
          <Image
            src={bg2}
            alt=""
            className="absolute inset-0 object-cover object-top opacity-80"
          />
        </div>
        <div className="flex">
          <div className="bg-[#2AC10033] py-[2.5px] px-3 flex items-center justify-center gap-[5px] rounded-full">
            <span className="size-1.5 rounded-full bg-[#1F8B01]" />
            <span className="text-[10px] text-[#1F8B01]">Ongoing</span>
          </div>
        </div>

        <h4 className="text-base text-[#595564]">
          Weekly Meeting - Product Demo Review with Testers
        </h4>

        <hr className="h-[0.8px] text-[#D0D5DD]" />

        <div className="flex items-center gap-8 px-1">
          <div className="flex items-center gap-2 pr-6 border-r-[0.8px] border-r-[#D0D5DD]">
            <Calendar />
            <p className="text-[8px]/4 text-[#595564] font-medium">
              Mon. Jul 30, 2024
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Time />
            <p className="text-[8px]/4 text-[#595564] font-medium">
              Mon. Jul 30, 2024
            </p>
          </div>
        </div>

        <div className="flex items-center gap-8 px-1">
          <div className="flex flex-col">
            <p className="text-[#A195C0] text-[6.47px]/[6.47px]">Study Group</p>
            <div className="flex items-center gap-1">
              <Image
                src={lambo}
                alt=""
                className="size-3 rounded-full object-fill object-center"
              />

              <p className="text-[#595564] text-[8.08px] font-semibold">
                UX Strategy Study group
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-[#A195C0] text-[6.47px]/[6.47px]">Mentors</p>
            <div className="relative flex [&>*:nth-child(1)]:ml-0 [&>*]:-ml-1">
              <span className="relative z-0">
                <Image
                  src={img1}
                  alt=""
                  className="size-4 rounded-full object-fill object-center"
                />
              </span>
              <span className="relative z-10">
                <Image
                  src={img2}
                  alt=""
                  className="size-4 rounded-full object-fill object-center"
                />
              </span>
              <span className="relative z-20">
                <Image
                  src={img3}
                  alt=""
                  className="size-4 rounded-full object-fill object-center"
                />
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2">
          <button className="border border-[var(--primary-light)] rounded-[7px] py-1.5 px-4 h-[35px] flex items-center justify-center text-[var(--primary-light)] text-sm font-medium">
            View Participants
          </button>
          <button className="pri-btn rounded-[7px] py-1.5 px-4 h-[35px] flex items-center justify-center gap-2 text-white text-sm font-medium">
            Join Now
            <ArrowRight className="stroke-white size-4" />
          </button>
        </div>
      </div>

      <div className="min-w-72 w-full flex flex-col bg-[#F9F7FF] gap-1.5 px-3 py-4 rounded-[10px]">
        <div className="flex w-full h-[70px] relative overflow-hidden rounded-[10px]">
          <Image
            src={bg3}
            alt=""
            className="absolute inset-0 object-cover object-top opacity-80"
          />
        </div>
        <div className="flex">
          <div className="bg-[#E0DDFF] py-[2.5px] px-3 flex items-center justify-center gap-[5px] rounded-full">
            <span className="size-1.5 rounded-full bg-[#1C0AE1]" />
            <span className="text-[10px] text-[#1C0AE1]">Ongoing</span>
          </div>
        </div>

        <h4 className="text-base text-[#595564]">
          Weekly Meeting - Product Demo Review with Testers
        </h4>
        <hr className="h-[0.8px] text-[#D0D5DD]" />

        <div className="flex items-center gap-8 px-1">
          <div className="flex items-center gap-2 pr-6 border-r-[0.8px] border-r-[#D0D5DD]">
            <Calendar />
            <p className="text-[8px]/4 text-[#595564] font-medium">
              Mon. Jul 30, 2024
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Time />
            <p className="text-[8px]/4 text-[#595564] font-medium">
              Mon. Jul 30, 2024
            </p>
          </div>
        </div>

        <div className="flex items-center gap-8 px-1">
          <div className="flex flex-col">
            <p className="text-[#A195C0] text-[6.47px]/[6.47px]">Study Group</p>
            <div className="flex items-center gap-1">
              <Image
                src={lambo}
                alt=""
                className="size-3 rounded-full object-fill object-center"
              />

              <p className="text-[#595564] text-[8.08px] font-semibold">
                UX Strategy Study group
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-[#A195C0] text-[6.47px]/[6.47px]">Mentors</p>
            <div className="relative flex [&>*:nth-child(1)]:ml-0 [&>*]:-ml-1">
              <span className="relative z-0">
                <Image
                  src={img1}
                  alt=""
                  className="size-4 rounded-full object-fill object-center"
                />
              </span>
              <span className="relative z-10">
                <Image
                  src={img2}
                  alt=""
                  className="size-4 rounded-full object-fill object-center"
                />
              </span>
              <span className="relative z-20">
                <Image
                  src={img3}
                  alt=""
                  className="size-4 rounded-full object-fill object-center"
                />
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2">
          <button className="border border-[var(--primary-light)] rounded-[7px] py-1.5 px-4 h-[35px] flex items-center justify-center text-[var(--primary-light)] text-sm font-medium">
            View Participants
          </button>
          <button className="bg-[#6F01D04D] rounded-[7px] py-1.5 px-4 h-[35px] flex items-center justify-center gap-2 text-white text-sm font-medium">
            Join Now
            <ArrowRight className="stroke-white size-4" />
          </button>
        </div>
      </div>

      <div className="min-w-72 w-full flex flex-col bg-[#F9F7FF] gap-1.5 px-3 py-4 rounded-[10px]">
        <div className="flex w-full h-[70px] relative overflow-hidden rounded-[10px]">
          <Image
            src={bg4}
            alt=""
            className="absolute inset-0 object-cover object-top opacity-80"
          />
        </div>
        <div className="flex">
          <div className="bg-[#2AC10033] py-[2.5px] px-3 flex items-center justify-center gap-[5px] rounded-full">
            <span className="size-1.5 rounded-full bg-[#1F8B01]" />
            <span className="text-[10px] text-[#1F8B01]">Ongoing</span>
          </div>
        </div>

        <h4 className="text-base text-[#595564]">
          Weekly Meeting - Product Demo Review with Testers
        </h4>

        <hr className="h-[0.8px] text-[#D0D5DD]" />

        <div className="flex items-center gap-8 px-1">
          <div className="flex items-center gap-2 pr-6 border-r-[0.8px] border-r-[#D0D5DD]">
            <Calendar />
            <p className="text-[8px]/4 text-[#595564] font-medium">
              Mon. Jul 30, 2024
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Time />
            <p className="text-[8px]/4 text-[#595564] font-medium">
              Mon. Jul 30, 2024
            </p>
          </div>
        </div>

        <div className="flex items-center gap-8 px-1">
          <div className="flex flex-col">
            <p className="text-[#A195C0] text-[6.47px]/[6.47px]">Study Group</p>
            <div className="flex items-center gap-1">
              <Image
                src={lambo}
                alt=""
                className="size-3 rounded-full object-fill object-center"
              />

              <p className="text-[#595564] text-[8.08px] font-semibold">
                UX Strategy Study group
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-[#A195C0] text-[6.47px]/[6.47px]">Mentors</p>
            <div className="relative flex [&>*:nth-child(1)]:ml-0 [&>*]:-ml-1">
              <span className="relative z-0">
                <Image
                  src={img1}
                  alt=""
                  className="size-4 rounded-full object-fill object-center"
                />
              </span>
              <span className="relative z-10">
                <Image
                  src={img2}
                  alt=""
                  className="size-4 rounded-full object-fill object-center"
                />
              </span>
              <span className="relative z-20">
                <Image
                  src={img3}
                  alt=""
                  className="size-4 rounded-full object-fill object-center"
                />
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2">
          <button className="border border-[var(--primary-light)] rounded-[7px] py-1.5 px-4 h-[35px] flex items-center justify-center text-[var(--primary-light)] text-sm font-medium">
            View Participants
          </button>
          <button className="pri-btn rounded-[7px] py-1.5 px-4 h-[35px] flex items-center justify-center gap-2 text-white text-sm font-medium">
            Join Now
            <ArrowRight className="stroke-white size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
