import { BiPlusCircle } from "react-icons/bi";
import SectionLeftHead from "./SectionLeftHead";
import SectionRightHead from "./SectionRightHead";
import { FiMoreVertical } from "react-icons/fi";
import Button from "./Button";
import Image from "next/image";

export default function Mentors() {
  return (
    <section className="w-[300px] shadow p-4 rounded">
      <div>
        <div className="flex justify-between">
          <SectionRightHead title="Mentors" />
          <div className="flex items-center">
            <BiPlusCircle color="#9D92A6" width={8} height={8} />
            <FiMoreVertical color="#000000" width={18} height={18} />
          </div>
        </div>

        <div className=" rounded-2xl  gap-2 py-6 flex items-center">
          <Image
            src="/profile1.png"
            alt="profile"
            width={42}
            height={42}
            className="rounded-full object-cover"
          />
          <div className="flex">
            <div className="flex flex-col">
              <h2 className="text-[14px] font-semibold text-[#4F4F4F]">
                Maxwell Smitch
              </h2>
              <p className="text-[10px] text-[#7D8DA6]">Product Designer</p>
            </div>

            <button className="text-[#F1EEFF] ml-5 rounded-full px-4 text-[12px] bg-[#6F01D0] hover:bg-red-50">
              Message
            </button>
          </div>
        </div>
        <div className=" rounded-2xl  gap-2 py-6 flex items-center">
          <Image
            src="/profile1.png"
            alt="profile"
            width={42}
            height={42}
            className="rounded-full object-cover"
          />
          <div className="flex">
            <div className="flex flex-col">
              <h2 className="text-[14px] font-semibold text-[#4F4F4F]">
                Maxwell Smitch
              </h2>
              <p className="text-[10px] text-[#7D8DA6]">Product Designer</p>
            </div>

            <button className="text-[#F1EEFF] ml-5 rounded-full px-4 text-[12px] bg-[#6F01D0] hover:bg-red-50">
              Message
            </button>
          </div>
        </div>
        <button className="bg-[#DDD6FB] flex mx-auto text-[#6F01D0] text-center text-[14px] py-3 px-24 rounded-full">
          See all
        </button>
      </div>
    </section>
  );
}
