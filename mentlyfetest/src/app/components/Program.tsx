import React from "react";
import Image from "next/image";
import { Menu, MoreVertical, Settings } from "lucide-react";

const Program = () => {
  return (
    <div className="p-4 w-full">
      {/* Sidebar */}
      <div className="w-full max-w-md md:max-w-lg lg:w-[329px] h-auto md:h-[604px] bg-white shadow-lg rounded-[10.21px] mx-auto">
        <div className="min-h-screen">
          {/* Header */}
          <header className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
              <button className="p-2">
                <Menu className="w-6 h-6 text-gray-700" />
              </button>
              <h1 className="text-sm font-light text-gray-500 md:text-base">Programs</h1>
            </div>
            <div className="flex items-center gap-2">
              <a href="#" className="text-purple-600 font-medium text-sm">
                See all
              </a>
              <button className="p-2">
                <MoreVertical className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </header>

          {/* Filter */}
          <div className="flex justify-end p-4 items-center">
            <span className="text-gray-500 mr-2 text-sm">Filter</span>
            <div className="relative">
              <select className="appearance-none border rounded-md px-4 py-2 pr-8 bg-white text-gray-700 w-32 text-sm">
                <option>Active</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Programs List with Scrollbar */}
          <div className="p-4 space-y-6 overflow-y-auto max-h-[440px] custom-scrollbar">
            {[1, 2, 3].map((program, index) => (
              <div
                key={index}
                className="rounded-xl border shadow-sm w-full h-auto overflow-hidden"
              >
                <div className="relative h-[90px]">
                  <Image
                    src="/bgImage1.jpg"
                    alt="UI/UX Course"
                    width={600}
                    height={90}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-2">
                    <h2 className="text-white text-xs font-semibold leading-snug line-clamp-2">
                      {index === 1 ? "Colour Hack Practical" : "Fundamentals of UI & UX"}
                    </h2>
                    <span className="bg-white text-blue-500 rounded-full px-2 py-0.5 text-[10px] font-medium flex items-center w-fit mt-1">
                      <span
                        className={`w-2 h-2 rounded-full mr-1 ${
                          index === 1 ? "bg-green-500" : "bg-blue-500"
                        }`}
                      ></span>
                      {index === 1 ? "Group Call" : "Bootcamp"}
                    </span>
                  </div>
                  <button className="absolute top-1.5 right-1.5 bg-white/20 p-1 rounded-full">
                    <Settings className="w-4 h-4 text-white" />
                  </button>
                </div>

                <div className="px-3 pt-2 pb-2">
                  <p className="text-[10px] text-gray-700 leading-tight line-clamp-2">
                    Master color theory and apply it confidently in your designs.
                  </p>

                  <div className="flex justify-between items-center mt-2">
                    {index === 1 ? (
                      <p className="text-[10px]">
                        Hosted by: <span>Self</span>
                      </p>
                    ) : (
                      <div className="flex items-center">
                        <div className="flex -space-x-1">
                          <Image
                            src="/avatar.avif"
                            width={24}
                            height={24}
                            className="w-6 h-6 rounded-full border-2 border-white object-cover"
                            alt="Mentor 1"
                          />
                          <Image
                            src="/avatar2.png"
                            width={24}
                            height={24}
                            className="w-6 h-6 rounded-full border-2 border-white object-cover"
                            alt="Mentor 2"
                          />
                          <Image
                            src="/avatar.avif"
                            width={24}
                            height={24}
                            className="w-6 h-6 rounded-full border-2 border-white object-cover"
                            alt="Mentor 3"
                          />
                        </div>
                        <span className="ml-1 text-[10px] text-gray-600">Mentors</span>
                      </div>
                    )}

                    <div className="flex gap-1">
                      <button className="px-2 py-0.5 border border-purple-600 text-purple-600 rounded-md text-[10px]">
                        View
                      </button>
                      <button className="px-2 py-0.5 bg-purple-600 text-white rounded-md text-[10px]">
                        Analyze
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
