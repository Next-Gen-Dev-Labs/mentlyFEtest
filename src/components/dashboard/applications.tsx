import Mentor1 from "@/../public/mentor3.png";
import Mentor2 from "@/../public/mentor6.png";
import Link from "next/link";
import { HiDotsVertical } from "react-icons/hi";
import { IoIosMenu } from "react-icons/io";
import ApplicationsCard from "../applications/applications-card";

function Applications() {
  return (
    <div className="lg:row-span-2 md:col-span-1 lg:row-start-2 lg:col-start-2 flex flex-col gap-y-3 p-3 rounded-xl bg-white shadow-md min-w-full">
      <div className="flex items-center gap-x-3 justify-between">
        <div className="flex items-center gap-x-3">
          <IoIosMenu size={20} />
          <p className="font-bold text-sm md:text-base text-[#b0b0b0]">
            Applications
          </p>
        </div>
        <div className="flex items-center gap-x-3">
          <Link href="programs" className="font-semibold text-[#6f01d0] ">
            See all
          </Link>
          <HiDotsVertical />
        </div>
      </div>

      {/*mentors */}
      <div className="flex flex-col gap-y-3 mt-2 border-b border-gray-300">
        <p className="text-xs pl-3 font-medium text-[#7d8da6]">Mentors</p>

        {/*applications card */}
        <ApplicationsCard
          name="Maxwell Smith"
          email="maxwellsmith@gmail.com"
          banner={Mentor1}
          allowDetails={true}
        />
      </div>

      {/*students */}
      <div className="flex flex-col gap-y-3 mt-2 pb-3">
        <p className="text-xs pl-3 font-medium text-[#7d8da6]">Students</p>

        {/*applications card */}
        <ul className="divide-y divide-gray-300 space-y-4">
          <ApplicationsCard
            name="Adeati Samuel"
            email="maxwellsmith@gmail.com"
            banner={Mentor2}
          />
          <ApplicationsCard
            name="Maxwell Smith"
            email="maxwellsmith@gmail.com"
            banner={Mentor1}
          />
          <ApplicationsCard
            name="Adeati Samuel"
            email="maxwellsmith@gmail.com"
            banner={Mentor2}
          />
          <ApplicationsCard
            name="Maxwell Smith"
            email="maxwellsmith@gmail.com"
            banner={Mentor1}
          />
        </ul>
      </div>
    </div>
  );
}

export default Applications;
