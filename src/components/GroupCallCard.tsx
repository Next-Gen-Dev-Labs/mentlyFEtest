import Button from "@/ui/Button";
import Image, { StaticImageData } from "next/image";
import date from "@/assets/date-icon.png";
import time from "@/assets/time-icon.png";
import arrowRight from "@/assets/arrow-right-icon.png";
interface GroupCallData {
  id: number;
  status: string;
  studyGroup: string;
  title: string;
  image: StaticImageData;
  mentors: StaticImageData[];
  time: string;
  date: string;
}

const GroupCallCard = ({ groupCallData }: { groupCallData: GroupCallData }) => {
  return (
    <div className="bg-[#F9F7FF] rounded-lg p-3.5">
      <div>
        <Image
          src={groupCallData.image}
          alt="icon"
          width={100}
          className="w-full h-[72px] object-cover rounded-md"
        />
      </div>
      <div>
        <div className="border-b border-[#E1E7EC] py-2">
          <div
            className={`${
              groupCallData.status === "Upcoming"
                ? "bg-[#E0DDFF] text-[#1C0AE1]"
                : "bg-[#2AC10033] text-[#1F8B01]"
            }  text-[7px] font-bold rounded-[10px]  w-[59px]  flex items-center gap-1 justify-center py-0.5`}
          >
            <div
              className={`${
                groupCallData.status === "Upcoming"
                  ? "bg-[#1C0AE1]"
                  : "bg-[#1F8B01]"
              } rounded-full size-[4px]`}
            ></div>
            <p>{groupCallData.status}</p>
          </div>
          <h1 className="text- mt-[7px] max-w-[220px] font-normal text-[#595564]">
            {groupCallData.title}
          </h1>
        </div>
        <div>
          <div className="flex gap-5 justify-between  my-2">
            <div>
              <div className="flex items-center gap-1">
                <Image src={date} alt="icon" width={11} height={11} />
                <p className="text-[8px] text-[#595564] font-medium">
                  {groupCallData.date}
                </p>
              </div>
              <div className="my-2">
                <p className="pl-4 text-[#A195C0] text-[6px] font-normal">
                  Study Group
                </p>
                <div className="flex gap-1">
                  <div>
                    <Image src={time} alt="icon" width={11} height={11} />
                  </div>
                  <p className="text-[8px] text-[#595564] font-bold">
                    {groupCallData.studyGroup}
                  </p>
                </div>
              </div>

              <div>
                <Button
                  label="View Participants"
                  type="button"
                  className="bg-transparent! text-nowrap lg:w-[110px] border border-primary text-primary!  text-[9px] font-normal"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1">
                <Image src={time} alt="icon" width={11} height={11} />
                <p className="text-[8px] text-[#595564] font-medium">
                  {groupCallData.time}
                </p>
              </div>

              <div className="my-2">
                <p className="text-[6px] text-[#A195C0] font-normal">Mentors</p>
                <div className="flex ">
                  {groupCallData.mentors.map(
                    (mentor: StaticImageData, index: number) => (
                      <Image
                        key={index}
                        src={mentor}
                        alt="icon"
                        width={14}
                        height={14}
                        className={`size-[14px] object-cover rounded-full ${
                          index > 0 ? "-ml-1" : ""
                        }`}
                      />
                    )
                  )}
                </div>
              </div>

              <div>
                <Button
                  label="Join Now"
                  type="button"
                  className={`${
                    groupCallData.status === "Upcoming" ? "bg-[#6F01D04D]!" : ""
                  } text-[9px] text-nowrap lg:w-[100px]`}
                  icon={<Image src={arrowRight} alt="icon" />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupCallCard;
