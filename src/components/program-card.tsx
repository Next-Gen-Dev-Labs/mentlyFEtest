import img1 from "@/assets/images/program-card-img-1.png";
import img2 from "@/assets/images/program-card-img-2.png";
import img3 from "@/assets/images/program-card-img-3.png";
import bg1 from "@/assets/images/program-card-bg-1.jpg";
import bg2 from "@/assets/images/program-card-bg-2.jpg";
import hostedby from "@/assets/images/hosted-by.png";
import Image from "next/image";
import Settings from "@/assets/svg/settings";

export default function ProgramCard() {
  return (
    <>
      <div className="shadow-[#AFABAB4D] shadow-md border border-[#AFABAB4D] bg-white rounded-[10px] flex flex-col gap-2.5 p-3.5">
        <div className="min-h-[70px] rounded-[7px] relative p-2 flex justify-between overflow-hidden">
          <Image
            src={bg1}
            alt=""
            className="absolute inset-0 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r to-[#000] from-[#0C0C0CCC] opacity-70" />
          <div className="space-y-2 relative">
            <h4 className="text-white font-bold text-[16.42px]">
              Fundamentals of User interface & Experience
            </h4>
            <div className="flex">
              <div className="bg-[#D4E0F3] py-0.5 px-2 flex items-center justify-center gap-1 rounded-full">
                <span className="size-1 rounded-full bg-[#0077FF]" />
                <span className="text-[6.57px] tracking-[-2%] text-[#0077FF] font-bold">
                  Bootcamp
                </span>
              </div>
            </div>
          </div>
          <Settings className="size-3.5 stroke-white relative" />
        </div>
        <p className="text-[10px] text-[#A3A3A3] overflow-ellipsis tracking-[-2%]">
          This program is a hands-on guide designed for designers who want to
          master color theory and confidently apply it to their designs. This
          practical approach
        </p>
        <div className="flex items-end justify-between gap-4 flex-wrap xl:flex-nowrap">
          <div className="flex items-center gap-2">
            <div className="relative flex [&>*:nth-child(1)]:ml-0 [&>*]:-ml-1">
              <span className="relative z-0">
                <Image
                  src={img1}
                  alt=""
                  className="size-4 rounded-full object-fill object-center"
                />
              </span>
              <span className="relative z-10">
                <Image
                  src={img2}
                  alt=""
                  className="size-4 rounded-full object-fill object-center"
                />
              </span>
              <span className="relative z-20">
                <Image
                  src={img3}
                  alt=""
                  className="size-4 rounded-full object-fill object-center"
                />
              </span>
            </div>
            <p className="text-[#c6c6c6] text-[8.34px]/[9.73px] font-semibold">
              Mentors
            </p>
          </div>
          <div className="flex gap-2">
            <button className="border border-[var(--primary-light)] rounded-[3px] py-1.5 px-4 flex items-center justify-center text-[var(--primary-light)] text-[8px]">
              View Details
            </button>
            <button className="pri-btn rounded-[3px] py-1.5 px-4 flex items-center justify-center text-white text-[8px]">
              Analysis
            </button>
          </div>
        </div>
      </div>
      <div className="shadow-[#AFABAB4D] shadow-md border border-[#AFABAB4D] bg-white rounded-[10px] flex flex-col gap-2.5 p-3.5">
        <div className="min-h-[70px] rounded-[7px] relative p-2 flex justify-between overflow-hidden">
          <Image
            src={bg2}
            alt=""
            className="absolute inset-0 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r to-[#000] from-[#0C0C0CCC] opacity-70" />
          <div className="space-y-2 relative">
            <h4 className="text-white font-bold text-[16.42px]">
              Colour Hack Practical Group Call
            </h4>
            <div className="flex">
              <div className="bg-[#D4F3D4] py-0.5 px-2 flex items-center justify-center gap-1 rounded-full">
                <span className="size-1 rounded-full bg-[#008000]" />
                <span className="text-[6.57px] tracking-[-2%] text-[#008000] font-bold">
                  Group Call
                </span>
              </div>
            </div>
          </div>
          <Settings className="size-3.5 stroke-white relative" />
        </div>
        <p className="text-[10px] text-[#A3A3A3] overflow-ellipsis tracking-[-2%]">
          This program is a hands-on guide designed for designers who want to
          master color theory and confidently apply it to their designs. This
          practical approachh
        </p>
        <div className="flex items-end justify-between gap-4 flex-wrap xl:flex-nowrap">
          <div className="flex items-center gap-2">
            <Image
              src={hostedby}
              alt=""
              className="size-5 rounded-full object-fill object-center"
            />

            <p className="text-[#A3A3A3] text-[8.21px] tracking-[-2%]">
              Hosted By: Faith Okolo
            </p>
          </div>

          <div className="flex gap-2">
            <button className="border border-[var(--primary-light)] rounded-[3px] py-1.5 px-4 flex items-center justify-center text-[var(--primary-light)] text-[8px]">
              View Details
            </button>
            <button className="pri-btn rounded-[3px] py-1.5 px-4 flex items-center justify-center text-white text-[8px]">
              Analysis
            </button>
          </div>
        </div>
      </div>
      <div className="shadow-[#AFABAB4D] shadow-md border border-[#AFABAB4D] bg-white rounded-[10px] flex flex-col gap-2.5 p-3.5">
        <div className="min-h-[70px] rounded-[7px] relative p-2 flex justify-between overflow-hidden">
          <Image
            src={bg2}
            alt=""
            className="absolute inset-0 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r to-[#000] from-[#0C0C0CCC] opacity-70" />
          <div className="space-y-2 relative">
            <h4 className="text-white font-bold text-[16.42px]">
              Colour Hack Practical Group Call
            </h4>
            <div className="flex">
              <div className="bg-[#D4F3D4] py-0.5 px-2 flex items-center justify-center gap-1 rounded-full">
                <span className="size-1 rounded-full bg-[#008000]" />
                <span className="text-[6.57px] tracking-[-2%] text-[#008000] font-bold">
                  Group Call
                </span>
              </div>
            </div>
          </div>
          <Settings className="size-3.5 stroke-white relative" />
        </div>
        <p className="text-[10px] text-[#A3A3A3] overflow-ellipsis tracking-[-2%]">
          This program is a hands-on guide designed for designers who want to
          master color theory and confidently apply it to their designs. This
          practical approachh
        </p>
        <div className="flex items-end justify-between gap-4 flex-wrap xl:flex-nowrap">
          <div className="flex items-center gap-2">
            <Image
              src={hostedby}
              alt=""
              className="size-5 rounded-full object-fill object-center"
            />

            <p className="text-[#A3A3A3] text-[8.21px] tracking-[-2%]">
              Hosted By: Self
            </p>
          </div>

          <div className="flex gap-2">
            <button className="border border-[var(--primary-light)] rounded-[3px] py-1.5 px-4 flex items-center justify-center text-[var(--primary-light)] text-[8px]">
              View Details
            </button>
            <button className="pri-btn rounded-[3px] py-1.5 px-4 flex items-center justify-center text-white text-[8px]">
              Analysis
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
