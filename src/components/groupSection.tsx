import { CiCalendar } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import Image from "next/image";
import banner2 from "../assets/Rectangle 12322 (1).png";
import banner3 from "../assets/Rectangle 12322 (2).png";
import banner4 from "../assets/Rectangle 12322 (3).png";
import Mentors from "../components/mentors";
import JoinBtn from "../components/joinBtn";
import ViewBtn from "../components/viewBtn";

export default function GroupSection() {
  return (
    <>
      <div className="w-full bg-white rounded-[10px] lg:h-[320px] pt-4 mt-2 px-2 ">
        <div className="flex justify-between pb-[10px] px-4">
          <div className="">
            <span className="inline-block align-middle mr-4">
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 6.9996H11M1 3.9996H11M1 0.999603H11M1 9.9996H11"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h2 className="inline-block align-middle mr-2 font-[700] text-[16px] leading-[16px] text-(--darkGrey)">
              Group Calls
            </h2>
          </div>
          <div className="">
            <h2 className="inline-block align-middle mr-4 font-[600] text-[12.27px] leading-[16px] text-(--primary)">
              See all
            </h2>
            <span className="inline-block align-middle">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.875 2.25H10.125V4.5H7.875V2.25ZM7.875 7.875H10.125V10.125H7.875V7.875ZM7.875 13.5H10.125V15.75H7.875V13.5Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* section 1 */}
        <div className="flex items-center flex-col lg:gap-2 gap-4 lg:flex-row">
          <div className="lg:h-[264px] h-[350px] rounded-[9px] bg-[#f9f7ff] lg:w-[213px] w-full lg:px-2 px-4">
            <Image
              src={banner2}
              alt=""
              className="lg:h-[70px] h-[100px] w-full pt-2"
            />
            {/* Status + Host */}
            <div className="flex items-center justify-between my-2">
              <span className="text-[9px] text-[#1f8b01] bg-[#d0eccc] px-2 py-0.5 rounded-full font-medium">
                ● Ongoing
              </span>
            </div>
            {/* title */}
            <div className="text-[16px] font-[400] text-[#595564] mb-2 border-b-[1px] border-(--Grey-100)">
              Weekly Meeting - Product Demo Review with Testers
            </div>
            <div className="flex justify-between">
              <div className=" border-r flex items-center gap-[5px] border-[#D0D5DD] pr-4">
                <CiCalendar className="lg:h-[11px] lg:w-[11px] h-[15px] w-[15px] text-[#1F0954]" />
                <h2 className="lg:text-[8px] text-[15px] font-[500] leading-[16px] text-[#595564]">
                  Mon. Jul 30, 2024
                </h2>
              </div>
              <div className="flex items-center gap-[5px]">
                <GoClock className="lg:h-[11px] lg:w-[11px] h-[15px] w-[15px] text-[#1F0954]" />
                <h2 className="lg:text-[8px] text-[15px] font-[500] leading-[16px] text-[#595564]">
                  9:00 - 11:00AM
                </h2>
              </div>
            </div>
            {/* Study Group + Mentors */}
            <div>
              <Mentors />
            </div>
            {/* buttons */}
            <div className="flex items-center justify-between gap-[26px]">
              <ViewBtn />
              <JoinBtn className="bg-(--primary)" />
            </div>
          </div>

          {/* section 2 */}
          <div className="lg:h-[264px] h-[350px] rounded-[9px] bg-[#f9f7ff] lg:w-[213px] w-full lg:px-2 px-4">
            <Image
              src={banner3}
              alt=""
              className="lg:h-[70px] h-[100px] w-full pt-2"
            />
            {/* Status + Host */}
            <div className="flex items-center justify-between my-2">
              <span className="text-[9px] text-[#1c0ae1] bg-[#e0ddff] px-2 py-0.5 rounded-full font-medium">
                ● UpComing
              </span>
            </div>
            {/* title */}
            <div className="text-[16px] font-[400] text-[#595564] mb-2 border-b-[1px] border-(--Grey-100)">
              Weekly Meeting - Product Demo Review with Testers
            </div>
            <div className="flex justify-between">
              <div className=" border-r flex items-center gap-[5px] border-[#D0D5DD] pr-4">
                <CiCalendar className="lg:h-[11px] lg:w-[11px] h-[15px] w-[15px] text-[#1F0954]" />
                <h2 className="lg:text-[8px] text-[15px] font-[500] leading-[16px] text-[#595564]">
                  Mon. Jul 30, 2024
                </h2>
              </div>
              <div className="flex items-center gap-[5px]">
                <GoClock className="lg:h-[11px] lg:w-[11px] h-[15px] w-[15px] text-[#1F0954]" />
                <h2 className="lg:text-[8px] text-[15px] font-[500] leading-[16px] text-[#595564]">
                  9:00 - 11:00AM
                </h2>
              </div>
            </div>
            {/* Study Group + Mentors */}
            <div>
              <Mentors />
            </div>
            {/* buttons */}
            <div className="flex items-center justify-between gap-[26px]">
              <ViewBtn />
              <JoinBtn className="bg-[#d0adf1]" />
            </div>
          </div>

          {/* section 3 */}
          <div className="lg:h-[264px] h-[350px] rounded-[9px] bg-[#f9f7ff] lg:w-[213px] w-full px-2">
            <Image
              src={banner4}
              alt=""
              className="lg:h-[70px] h-[100px] w-full pt-2"
            />
            {/* Status + Host */}
            <div className="flex items-center justify-between my-2">
              <span className="text-[9px] text-[#1f8b01] bg-[#d0eccc] px-2 py-0.5 rounded-full font-medium">
                ● Ongoing
              </span>
            </div>
            {/* title */}
            <div className="text-[16px] font-[400] text-[#595564] mb-2 border-b-[1px] border-(--Grey-100)">
              Weekly Meeting - Product Demo Review with Testers
            </div>
            <div className="flex justify-between">
              <div className=" border-r border-[#D0D5DD] pr-4 flex items-center gap-[5px]">
                <CiCalendar className="lg:h-[11px] lg:w-[11px] h-[15px] w-[15px] text-[#1F0954]" />
                <h2 className="lg:text-[8px] text-[15px] font-[500] leading-[16px] text-[#595564] ">
                  Mon. Jul 30, 2024
                </h2>
              </div>
              <div className="flex items-center gap-[5px]">
                <GoClock className="lg:h-[11px] lg:w-[11px] h-[15px] w-[15px] text-[#1F0954]" />
                <h2 className="lg:text-[8px] text-[15px] font-[500] leading-[16px] text-[#595564]">
                  9:00 - 11:00AM
                </h2>
              </div>
            </div>
            {/* Study Group + Mentors */}
            <div>
              <Mentors />
            </div>
            {/* buttons */}
            <div className="flex items-center justify-between gap-[26px]">
              <ViewBtn />
              <JoinBtn className="bg-(--primary)" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
