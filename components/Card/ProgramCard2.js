import Image from "next/image";

export default function ProgramCard2({ txt }) {
  return (
    <div className="bg-white rounded-xl shrink-0 shadow p-3  overflow-hidden max-w-md w-full">
      {/* Image with overlay badge */}
      <div className="relative h-24 w-full">
        <Image
          src="/asset/program2.png"
          alt="Colour Hack"
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
        <div className="absolute  flex flex-col justify-end p-3">
          <h3 className="text-white text-base font-semibold leading-tight">
            Fundamentals of User <br />
            interface & Experience
          </h3>
          <span className="text-[12px] bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full w-max mt-2">
            ● Group call
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="">
        <p className="text-[12.9px] py-1 leading-tight tracking-tight text-gray-600 mb-1 ">
          This program is a hands-on guide designed for designers who want to
          master color theory and confidently apply it to their designs. This
          practical approach
        </p>

        <div className="flex justify-between items-center">
          {/* Hosted by */}
          <div className="flex items-center text-xs text-gray-600 ">
            <Image
              src="/asset/man.png"
              alt="host"
              width={20}
              height={20}
              className="rounded-full mr-1"
            />
            <span className="text-[11px] truncate w-[70px]">Hosted By:Faith Okolo</span>
          </div>

          {/* Buttons */}
          <div className="flex space-x-2">
            <button className="text-[10px] font-semibold text-purple-600 border border-purple-600 px-3 py-1.5 rounded-lg hover:bg-purple-50">
              View Details
            </button>
            <button className="text-[10px] font-semibold text-white bg-purple-600 px-3 py-1.5 rounded-lg hover:bg-purple-700">
              {txt}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
