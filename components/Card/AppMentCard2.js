import Image from "next/image";
import React from "react";
// import InfoTag from "../components/Card/InfoTag";
import InfoTag from "../Card/InfoTag";
import {
  UserGroupIcon,
  AcademicCapIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";

const AppMentorCard2 = ({ name, email, profile }) => {
  return (
    <div className="border-0 border-b-[1px] border-gray-400 py-3">
      <div className="flex items-center justify-between  gap-2  py-2 ">
        <input type="checkbox" />
        <div className="h-8 w-8  rounded-full">
          {profile ? (
            <Image
              className="h-full w-full"
              src={profile}
              alt="Profile Image"
              width={80}
              height={30}
            />
          ) : null}
        </div>
        <div className="flex flex-col">
          <p className="text-[14px] font-bold text-black">{name}</p>
          <p className="text-[10px] text-gray-400">{email}</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center text-[12px] gap-1 bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200">
            <XCircleIcon className="h-3 w-3" /> Reject
          </button>
          <button className="flex items-center gap-1 text-[12px]  bg-green-100 text-green-600 px-3 py-1 rounded hover:bg-green-200">
            <CheckCircleIcon className="h-3 w-3" /> Accept
          </button>
        </div>
      </div>
      <div className="flex mt-1 gap-1 flex-wrap">
        <InfoTag text="Product Designer" color="purple" />
        <InfoTag text="4years Experience" color="green" />
        <div className="flex items-center bg-blue-100 rounded-md ps-1">
          <Image
            src="/asset/nige.png"
            width={16}
            height={10}
            alt="Nigeria Flag"
            className="object-contain "
          />
          <InfoTag text="Lagos,Nigeria" color="blue" />
        </div>

        <InfoTag text="GMT +1" color="gray" />
      </div>
    </div>
  );
};

export default AppMentorCard2;
