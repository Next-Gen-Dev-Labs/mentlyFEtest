import Image from "next/image";
import banner from "../assets/banner.png";
import banner2 from "../assets/Rectangle 12322 (1).png";
import Users from "./users";
import Btn from "./btn";
import Participant from "./participant";
import SelectTag from "./selectTag";
import DoughnutChart from "./chart";
export default function ProgramSection() {
  const userData = [
    { name: "Students", value: 200, color: "#62b2fd" },
    { name: "Mentors", value: 8, color: "#9bdfc4" },
    { name: "Programs", value: 22, color: "#f99bab" },
    { name: "Others", value: 10, color: "#ffb44f" },
  ];
  return (
    <>
      <div className="">
        <div className="lg:w-[300px] w-full bg-white lg:h-[40rem] mt-2 rounded-[12px]">
          <div className=" flex items-center justify-between pt-4 px-4 ">
            <div className="flex items-center gap-[14px]">
              <div className="">
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
              </div>
              <h2 className="font-[700] text-[16px] leading-[16px] text-(--darkGrey)">
                Programs
              </h2>
            </div>
            <div className="flex items-center gap-[14px]">
              <h2 className="font-[600] text-[12.27px] leading-[16px] text-(--primary)">
                See all
              </h2>
              <span>
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
          <div className="flex justify-end items-center gap-[11px] p-4">
            <h2 className="text-[11px] text-[#918C9C] leading-[12px] font-[500]">
              Filter
            </h2>
            <SelectTag className="h-[23px] w-[78px] text-[11px] leading-[12px] font-[500] px-2">
              <option className="">Active</option>
            </SelectTag>
          </div>

          {/* section 1 */}
          <div className="lg:h-[171px] h-[320px] w-full relative rounded-[8px] shadow-lg mb-[14px]">
            <div className="relative">
              <Image
                src={banner}
                alt=""
                className="h-full w-full object-cover px-4"
              />
              <div className="flex items-center cursor-pointer justify-center absolute bottom-2 gap-[3px] bg-[#d4e0f3] mx-6 h-[11px] w-[59px] rounded-[9px]">
                <span className="h-[4px] w-[4px] rounded-full bg-[#278afd]"></span>
                <span className=" text-[6px] font-[700] leading-[100%] text-[#278afd]">
                  Bootcamp
                </span>
              </div>

              <h2 className="absolute top-2 pl-6 text-white lg:text-[16px] text-[20px] font-[700] leading-[100%]">
                Fundamentals of User <br /> interface & Experience
              </h2>
            </div>
            <p className="lg:text-[10px] text-[15px] md:text-[20px] font-[400] leading-[100%] text-(--Grey-300) px-4 pt-2">
              This program is a hands-on guide designed for designers who want
              to master color theory and confidently apply it to their designs.
              This practical approach
            </p>
            <div className="flex items-center justify-between ">
              <Users />
              <div className="flex items-center gap-[6px] pr-4">
                <Btn
                  className="border-[1px] border-(--primary) text-(--primary)"
                  text="View Details"
                />
                <Btn className="bg-(--primary) text-white" text="Analysis" />
              </div>
            </div>
          </div>

          {/* section 2 */}
          <div className="lg:h-[171px] h-[320px] w-full relative rounded-[8px] shadow-lg mb-[14px]">
            <div className="relative">
              <Image
                src={banner2}
                alt=""
                className="h-full w-full object-cover px-4"
              />
              <div className="flex items-center cursor-pointer justify-center absolute bottom-2 gap-[3px] bg-[#d4f3d4] mx-6 h-[11px] w-[59px] rounded-[9px]">
                <span className="h-[4px] w-[4px] rounded-full bg-[#008000]"></span>
                <span className=" text-[6px] font-[700] leading-[100%] text-[#008000]">
                  Group Call
                </span>
              </div>

              <h2 className="absolute top-2 pl-6 text-white lg:text-[16px] text-[20px] font-[700] leading-[100%]">
                Colour Hack Practical <br /> Group Call
              </h2>
            </div>
            <p className="lg:text-[10px] md:text-[20px] text-[15px] font-[400] leading-[100%] text-(--Grey-300) px-4 pt-2">
              This program is a hands-on guide designed for designers who want
              to master color theory and confidently apply it to their designs.
              This practical approach
            </p>
            <div className="flex items-center justify-between px-4 pt-4">
              <Participant />

              <div className="flex items-center gap-[6px]">
                <Btn
                  className="border-[1px] border-(--primary) text-(--primary)"
                  text="View Details"
                />
                <Btn className="bg-(--primary) text-white" text="Analysis" />
              </div>
            </div>
          </div>

          {/* section 3 */}
          <div className="lg:h-[171px] h-[320px] w-full relative rounded-[8px] shadow-lg">
            <div className="relative">
              <Image
                src={banner2}
                alt=""
                className="h-full w-full object-cover px-4"
              />
              <div className="flex items-center cursor-pointer justify-center absolute bottom-2 gap-[3px] bg-[#d4f3d4] mx-6 h-[11px] w-[59px] rounded-[9px]">
                <span className="h-[4px] w-[4px] rounded-full bg-[#008000]"></span>
                <span className=" text-[6px] font-[700] leading-[100%] text-[#008000]">
                  Group Call
                </span>
              </div>

              <h2 className="absolute top-2 pl-6 text-white lg:text-[16px] text-[20px] font-[700] leading-[100%]">
                Colour Hack Practical <br /> Group Call
              </h2>
            </div>
            <p className="lg:text-[10px] md:text-[20px] text-[15px] font-[400] leading-[100%] text-(--Grey-300) px-4 pt-2">
              This program is a hands-on guide designed for designers who want
              to master color theory and confidently apply it to their designs.
              This practical approach
            </p>
            <div className="flex items-center justify-between px-4 pt-4">
              <Participant />
              <div className="flex items-center gap-[6px]">
                <Btn
                  className="border-[1px] border-(--primary) text-(--primary)"
                  text="View Details"
                />
                <Btn
                  className="bg-(--primary) text-white"
                  text="Assign Mentor"
                />
              </div>
            </div>
          </div>
        </div>
        {/* chart section */}
        <div className="lg:h-[320px] h-[400px] rounded-[16px] lg:w-[300px] w-full bg-[#f8f5ff] lg:mt-4 mt-[2rem] border-[1px] border-(--Grey-100)">
          <div className="flex items-center justify-between px-4 pt-4 pb-2 border-b-[1px] border-(--Grey-100)">
            <h2 className="font-[600] leading-[22px] text-[16px]">Users</h2>
            <SelectTag className="h-[36px] w-[74px] px-2 text-[14px] font-[500] leading-[16px]">
              <option value="All">All</option>
            </SelectTag>
          </div>
          <DoughnutChart data={userData} />
        </div>
      </div>
    </>
  );
}
