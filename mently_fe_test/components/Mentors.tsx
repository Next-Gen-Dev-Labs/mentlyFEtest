import { BiPlusCircle } from "react-icons/bi";
import { FiMoreVertical } from "react-icons/fi";
import SectionRightHead from "./SectionRightHead";
import Image from "next/image";

const mentorsData = [
  {
    id: 1,
    name: "Maxwell Smitch",
    role: "Product Designer",
    image: "/profile1.png",
  },
  {
    id: 2,
    name: "Adeati Samuel",
    role: "Product Designer",
    image: "/profile2.png",
  },
];

export default function Mentors() {
  return (
    <section className="bg-[#FFFFFF] p-4">
      <div className="flex items-center justify-between">
        <SectionRightHead title="Mentors" />
        <div className="flex items-center gap-2">
          <BiPlusCircle color="#9D92A6" size={20} />
          <FiMoreVertical color="#000000" size={20} />
        </div>
      </div>

      <div className="py-6 space-y-4">
        {mentorsData.map((mentor) => (
          <div key={mentor.id} className="rounded-2xl gap-2 flex items-center">
            <Image
              src={mentor.image}
              alt={mentor.name}
              width={42}
              height={42}
              className="rounded-full object-cover"
            />
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col">
                <h2 className="text-[14px] font-semibold text-[#4F4F4F]">
                  {mentor.name}
                </h2>
                <p className="text-[10px] text-[#7D8DA6]">{mentor.role}</p>
              </div>
              <button className="text-[#F1EEFF] ml-5 rounded-full px-6 text-[12px] bg-[#6F01D0] hover:bg-purple-100">
                Message
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="bg-[#DDD6FB] flex mx-auto text-[#6F01D0] text-center text-[14px] py-2 px-24 rounded-full">
        See all
      </button>
    </section>
  );
}
