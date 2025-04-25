import Image from "next/image";
import Checkbox from "../checkbox";
import Button from "../button";
import applicationData from "../Application/data";

export default function ApplicationSection() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-2">
        <div className="lg:w-[420px] w-full bg-white mt-4 rounded-[12px]">
          <div className="flex justify-between pb-[10px] px-4 pt-4">
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
                Applications
              </h2>
            </div>
            <div className="">
              <h2 className="inline-block align-middle mr-4 font-[600] text-[14px] leading-[16px] text-(--primary)">
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
          <h2 className="px-4 text-[10px] leading-[100%] font-[400] text-[#7D8DA6] py-6 px-8">
            Mentors
          </h2>
          {applicationData.mentors.map((mentor) => (
            <div
              className="flex items-center justify-between mx-4 border-b-[1px] border-[#DBDBDB] pb-10"
              key={mentor.id}
            >
              <div className="flex items-center gap-[10px]">
                <Checkbox />
                <Image
                  src={mentor.avatar}
                  alt=""
                  className="h-[32px] w-[32px]"
                />
                <div>
                  <h2 className="md:text-[14px] text-[10px] text-[#4F4F4F] font-[700] leading-[150%]">
                    {mentor.name}
                  </h2>
                  <h6 className="md:text-[10px] text-[7px] text-[#7D8DA6] text-[400] leading-[100%]">
                    {mentor.email}
                  </h6>
                </div>
              </div>
              <div className="gap-[6px] flex items-center">
                <Button
                  text="Reject"
                  className="bg-[#ffeded] border-[1px] border-[#D09696] text-[#D83535]"
                />
                <Button text="Accept" className="bg-(--primary) text-white" />
              </div>
            </div>
          ))}
          <h2 className="px-4 text-[10px] leading-[100%] font-[400] text-[#7D8DA6] pt-8 px-10">
            Students
          </h2>
          {applicationData.students.map((student) => (
            <div
              className="flex items-center justify-between mx-4 border-b-[1px] border-[#DBDBDB] py-9"
              key={student.id}
            >
              <div className="flex items-center gap-[10px]">
                <Checkbox />
                <Image
                  src={student.avatar}
                  alt=""
                  className="h-[32px] w-[32px]"
                />
                <div>
                  <h2 className="md:text-[14px] text-[10px] text-[#4F4F4F] font-[700] leading-[150%]">
                    {student.name}
                  </h2>
                  <h6 className="md:text-[10px] text-[7px] text-[#7D8DA6] text-[400] leading-[100%]">
                    {student.email}
                  </h6>
                </div>
              </div>
              <div className="gap-[6px] flex items-center">
                <Button
                  text="Reject"
                  className="bg-[#ffeded] border-[1px] border-[#D09696] text-[#D83535]"
                />
                <Button text="Accept" className="bg-(--primary) text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* mentors section */}
        <div className="flex flex-col md:flex-row gap-6 lg:flex-col mt-4">
          <div className="bg-white w-full h-[310px] rounded-[12px] ">
            <div className="flex justify-between items-center pb-[10px] px-4 mt-4 pt-4 ">
              <div className="">
                <span className="inline-block align-middle mr-2">
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
                <h2 className="inline-block align-middle mr-2 font-[700] text-[12px] leading-[16px] text-(--darkGrey)">
                  Mentors
                </h2>
              </div>
              <div className="">
                <span className="inline-block align-middle mr-2 font-[600] text-[14px] leading-[16px] text-(--primary)">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="11.4286"
                      stroke="#9D92A6"
                      strokeWidth="1.14286"
                    />
                    <path
                      d="M16 12.5714H12.5714V16H11.4286V12.5714H8V11.4286H11.4286V8H12.5714V11.4286H16V12.5714Z"
                      fill="#9D92A6"
                    />
                  </svg>
                </span>
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
            {applicationData.tutors.map((tutors) => (
              <div
                className="flex justify-between items-center mx-2 px-2 lg:px-0 pb-4 pt-6 border-b-[1px] border-[#F3F3F3]"
                key={tutors.id}
              >
                <div className="flex items-center gap-[6px]">
                  <Image
                    src={tutors.avatar}
                    alt=""
                    className="w-[32px] h-[32px]"
                  />
                  <div>
                    <h2 className="font-[700] text-[13px] leading-[150%] text-[#4F4F4F]">
                      {tutors.name}
                    </h2>
                    <h6 className="font-[400] text-[10px] leading-[100%] text-[#7D8DA6]">
                      {tutors.title}
                    </h6>
                  </div>
                </div>

                <button className="w-[76px] h-[22px] mx-2 lg:mx-0 rounded-[16px] bg-(--primary) font-[400] text-[12px] leading-[100%] text-[#F1EEFF]">
                  Message
                </button>
              </div>
            ))}
            <div className="mx-2">
              <button className="h-[40px] w-full mt-6 rounded-[24px] bg-[#DDD6FB] text-(--primary) font-[600] text-[14px] leading-[100%] tracking-[-0.5]">
                See all
              </button>
            </div>
          </div>

          {/* recent activities */}
          <div className="rounded-[12px] bg-white w-full h-[310px] ">
            <div className="flex justify-between pb-[10px] px-4 mt-4 pt-4 ">
              <div className="">
                <span className="inline-block align-middle mr-2">
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
                <h2 className="inline-block align-middle mr-2 font-[700] text-[12px] leading-[16px] text-(--darkGrey)">
                  Recent Activites
                </h2>
              </div>
              <div className="">
                <span className="inline-block align-middle mr-2 font-[600] text-[12px] leading-[16px] text-(--primary)">
                  See all
                </span>
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
            {applicationData.recent.map((recent) => (
              <div
                className="flex pt-4 gap-[8px] mx-2 px-2 lg:px-0 border-b-[1px] border-[#F1EFEF] pb-2"
                key={recent.id}
              >
                <Image
                  src={recent.avatar}
                  alt=""
                  className="h-[32px] w-[32px]"
                />
                <div>
                  <h2 className="text-[14px] leading-[16px] font-[700] text-[#011627]">
                    {recent.name}
                  </h2>
                  <h6 className="text-[10px] leading-[14px] font-[400] text-[#707991]">
                    {recent.title}
                  </h6>
                  <p className="text-[12px] leading-[20px] font-[300] text-[#707991]">
                    {recent.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
