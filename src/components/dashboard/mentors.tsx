import { HiDotsVertical } from "react-icons/hi";
import { IoIosMenu } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";
import MentorCard from "../mentor/mentor-card";
import Mentor1 from "@/../public/mentor3.png";
import Mentor2 from "@/../public/mentor7.jpg";
import Button from "@/ui/Button";

function Mentors() {
  return (
    <div className="row-span-1 md:col-start-2 md:row-start-2 lg:col-start-3 flex flex-col gap-y-3 p-3 rounded-xl bg-white shadow-md min-w-full">
      <div className="flex items-center gap-x-3 justify-between">
        <div className="flex items-center gap-x-3">
          <IoIosMenu size={20} />
          <p className="font-bold text-[#b0b0b0]">Mentors</p>
        </div>
        <div className="flex items-center gap-x-1">
          {/* <Link href="programs" className="font-semibold text-[#6f01d0] ">  
            See all
          </Link> */}
          <IoAddCircleOutline size={25} className="text-[#9d92a6]" />
          <HiDotsVertical />
        </div>
      </div>

      <MentorCard
        name="Maxwell Smith"
        work="Product Designer"
        banner={Mentor1}
      />
      <MentorCard
        name="Adeati Samuel"
        work="Product Designer"
        banner={Mentor2}
      />

      <Button variant="secondary" size="sm" className="rounded-full">
        See all
      </Button>
    </div>
  );
}

export default Mentors;
