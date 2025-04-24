import Image from "next/image";

export default function FundamentalsCard() {
  return (
    <div className="bg-white rounded-xl shrink-0 shadow-lg  p-3  overflow-hidden max-w-md w-full">
      {/* Image with overlay */}
      <div className="relative h-24 w-full">
        <Image
          src="/asset/program1.png" // replace with correct path
          alt="Fundamentals Banner"
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
        <div className="absolute  flex flex-col justify-end p-3">
          <h3 className="text-white text-base font-semibold leading-tight">
            Fundamentals of User <br />
            interface & Experience
          </h3>
          <span className="text-[12px] bg-blue-100 text-blue-600 font-semibold px-2 py-0.5 rounded-full w-max mt-2">
            ● Bootcamp
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="py-1">
        <p className="text-[12.9px] text-gray-600 leading-tight tracking-tight mb-3">
          This program is a hands-on guide designed for designers who want to
          master color theory and confidently apply it to their designs. This
          practical approach
        </p>

        <div className="flex justify-between items-center">
          {/* Mentors */}
          <div className="flex items-center text-xs text-gray-600">
            <div className="flex -space-x-2">
              <Image
                src="/asset/R1.png"
                alt="mentor"
                width={20}
                height={20}
                className="rounded-full border-2 object-cover border-white"
              />
              <Image
                src="/asset/m2.png"
                alt="mentor"
                width={20}
                height={20}
                className="rounded-full border-2 object-cover border-white"
              />
              <Image
                src="/asset/m1.png"
                alt="mentor"
                width={20}
                height={20}
                className="rounded-full border-2 object-cover border-white"
              />
            </div>
            <span className="font-medium">Mentors</span>
          </div>

          {/* Buttons */}
          <div className="flex space-x-1">
            <button className="text-[10px] font-semibold text-purple-600 border border-purple-600 px-3 py-1.5 rounded-lg hover:bg-purple-50">
              View Details
            </button>
            <button className="text-[10px] font-semibold text-white bg-purple-600 px-3 py-1.5 rounded-lg hover:bg-purple-700">
              Analysis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
