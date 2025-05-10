import React from "react";
import { boxes } from "@/data/dashboard.json";
import Image from "next/image";

const ApplicationBox = () => {
  return (
    <div>
      {/* top */}
      <div className="flexBetween ">
        <div className="flexBetween gap-4 ">
          <Image
            className="cursor-pointer"
            src={boxes.applications.top.outline}
            alt="outline icon"
            width={16}
            height={16}
            loading="lazy"
          />
          <button className="font-Chivo font-bold text-base text-neutral-900 ">
            {" "}
            {boxes.applications.top.title}{" "}
          </button>
        </div>
        <div className="flexBetween gap-4 ">
          <button className="font-Chivo font-semibold text-[12.27px] text-purple-700">
            {" "}
            {boxes.applications.top.btn}{" "}
          </button>
          <Image
            className="cursor-pointer"
            src={boxes.applications.top.more}
            alt="more icon"
            width={16}
            height={16}
            loading="lazy"
          />
        </div>
      </div>
      {/* mentors */}
      <div className="">
        <h5 className="font-Chivo font-normal text-[10px] text-gray-903 mt-[20px] ">
          {" "}
          {boxes.applications.mentors.h5}{" "}
        </h5>
        {/* show mentors */}
        <div className="w-full h-[102px] mx-auto grid grid-cols-[14px_1fr] gap-4  border-b-[1px] border-b-[#DBDBDB] pb-[22.15px] ">
          <input type="checkbox" name="check" id="check" className="w-[14px] h-[13px] mt-[11.5px] " />
          <div className="flexColStart">
            {boxes.applications.mentors.data.map((each, i) => (
              <div key={i} className="">
                <div className="flexBetween">
                  <div className="flexStart gap-4">
                    <Image
                      className="cursor-pointer w-[32px] h-[32px] rounded-full "
                      src={each.avater}
                      alt={each.name}
                      width={32}
                      height={32}
                      loading="lazy"
                    />
                    <div className="flexColStart gap-[2px] ">
                        <span className="font-Chivo font-bold text-[14.4px] text-gray-900 "> {each.name} </span>
                        <span className="font-Chivo font-[400] text-[10px] text-gray-904 "> {each.email} </span>
                    </div>
                  </div>
                  <div className="flexBetween gap-[6.11px]  ">
                    <button className={`w-[78.83px] h-[31.53px] rounded-[6.11px] flexCenter ${each.btns.accept.bg} ${each.btns.accept.text} `}>
                        {each.btns.accept.text1}
                    </button>
                    <button className={`w-[78.83px] h-[31.53px] rounded-[6.11px] flexCenter ${each.btns.reject.bg} ${each.btns.reject.text} `}>
                        {each.btns.reject.text1}
                    </button>
                  </div>
                </div>
                <div className="flexBetween gap-[6.11px] mt-[10.5px] ">
                    <button className={`flexCenter font-Chivo font-[500] text-[8.65px] text-nowrap h-[19.3px] px-[10.23px] rounded-[5.1px] border-[0.86px] border-[#DDCEEE] ${each.profession.bg} ${each.profession.text}`}> {each.profession.text1} </button>

                    <button className={`flexCenter font-Chivo font-[500] text-[8.65px] text-nowrap h-[19.3px] px-[10.23px] rounded-[5.1px] border-[0.86px] border-[#DDCEEE] ${each.experience.bg} ${each.experience.text}`}> {each.experience.text1} </button>

                    <button className={`flexCenter font-Chivo font-[500] text-[8.65px] text-nowrap h-[19.3px] px-[10.23px] rounded-[5.1px] border-[0.86px] border-[#DDCEEE] ${each.location.bg} ${each.location.text}`}> 
                    <Image
                      className="cursor-pointer w-[12.78px] h-[7.78px]  "
                      src={each.location.icon}
                      alt="flag Nigeria"
                      width={12.78}
                      height={7.78}
                      loading="lazy"
                    />
                         <span>{each.location.text1}</span>
                          </button>

                    <button className={`flexCenter font-Chivo font-[500] text-[8.65px] text-nowrap h-[19.3px] px-[10.23px] rounded-[5.1px] border-[0.86px] border-[#DDCEEE] ${each.timezone.bg} ${each.timezone.text}`}> {each.timezone.text1} </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* students */}
      <div className="">
        <h5 className="font-Chivo font-normal text-[10px] text-gray-903 mt-[20px] ">
          {" "}
          {boxes.applications.students.h5}{" "}
        </h5>
         {/* show students */}
            {boxes.applications.students.data.map((each, i) => (
              <div key={i} className=" border-b-[1px] border-b-[#DBDBDB] pb-[22.15px] w-full  mx-auto grid grid-cols-[14px_1fr] gap-[22.15px] mb-[22.15px] ">
          <input type="checkbox" name="check" id="check" className="w-[14px] h-[13px] mt-[11.5px] " />
          <div className="flexColStart   ">
                <div className="flexBetween gap-2 w-full">
                  <div className="flexStart gap-4 w-full ">
                    <Image
                      className="cursor-pointer w-[32px] h-[32px] rounded-full block "
                      src={each.avater}
                      alt={each.name}
                      width={32}
                      height={32}
                      loading="lazy"
                    />
                    <div className="flexColStart gap-[2px] ">
                        <span className="font-Chivo font-bold text-[14.4px] text-gray-900 "> {each.name} </span>
                        <span className="font-Chivo font-[400] text-[10px] text-gray-904 "> {each.email} </span>
                    </div>
                  </div>
                  <div className="flexBetween gap-[6.11px]   ">
                    <button className={`w-[78.83px] h-[31.53px] rounded-[6.11px] flexCenter ${each.btns.accept.bg} ${each.btns.accept.text} `}>
                        {each.btns.accept.text1}
                    </button>
                    <button className={`w-[78.83px] h-[31.53px] rounded-[6.11px] flexCenter ${each.btns.reject.bg} ${each.btns.reject.text} `}>
                        {each.btns.reject.text1}
                    </button>
                  </div>
                </div>
                
              </div>
          </div>
            ))}
      </div>
    </div>
  );
};

export default ApplicationBox;
