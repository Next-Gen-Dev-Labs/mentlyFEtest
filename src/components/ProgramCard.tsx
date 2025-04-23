import Button from "@/ui/Button";
import Image, { StaticImageData } from "next/image";

interface ProgramData {
  id: number;
  type: string;
  title: string;
  image: StaticImageData;
  mentors: StaticImageData[];
  host?: string;
  description: string;
}

const ProgramCard = ({ programData }: { programData: ProgramData }) => {
  return (
    <div className="w-full shadow-[0px_4.93px_5.17px_0px_#AFABAB4D] rounded-lg p-3.5">
      <div className="relative">
        <Image
          src={programData.image}
          alt="icon"
          width={100}
          className="w-full h-[72px] object-cover rounded-md"
        />
        <div className="absolute top-2 left-2">
          <h1 className="text-base max-w-[200px] font-bold text-white">
            {programData.title}
          </h1>

          <div className="text-[#0077FF] text-[7px] font-bold rounded-[10px] bg-[#D4E0F3] w-[59px]  flex items-center gap-1 justify-center ">
            <div className="bg-[#0077FF] rounded-full size-[4px]"></div>
            <p>{programData.type}</p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="my-2 text-[#2C5070] font-normal text-xs">
          {programData.description}
        </h1>

        <div className="md:flex justify-between">
          <div className="flex items-center gap-2">
            <div className="flex ">
              {programData.mentors.map(
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
            {programData.host ? (
              <p className="text-[#6C6C6C] text-[9px] font-normal">
                {programData.host}
              </p>
            ) : (
              <p className="text-[#6C6C6C] text-[9px]">Mentors</p>
            )}
          </div>

          <div className="flex items-center gap-2 mt-5 md:mt-0">
            <Button
              label="View Details"
              type="button"
              className="bg-transparent! w-[90px] border border-primary text-primary!  text-[9px] font-normal"
            />
            <Button
              label="Analysis"
              type="button"
              className="text-[9px] w-[90px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
