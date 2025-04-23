"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import { groupCallData } from "./components/data/data";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import "aos/dist/aos.css";
import AOS from "aos";
import Widget from "./components/widget/widget";

const Page = () => {
  const [showWidget, setShowWidget] = useState(false);

  const toggleWidget = () => {
    setShowWidget((prev) => !prev);
  };

  const data = [
    { name: "Students", value: 200, color: "#4f46e5" },
    { name: "Mentors", value: 8, color: "#22c55e" },
    { name: "Programs", value: 22, color: "#f59e0b" },
    { name: "Others", value: 10, color: "#6366f1" },
  ];

  const Slideshow = ({ images }: { images: string[] }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 2000);
      return () => clearInterval(timer);
    }, [images.length]);

    return (
      <Image
        src={images[index]}
        alt="slideshow"
        layout="fill"
        objectFit="cover"
        className="transition duration-500"
      />
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.init({
        duration: 500,
        easing: "ease-in-out",
        once: true,
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar />

      <div className="flex-1 ml-0">
        <Navbar />

        {/* Image Buttons to Trigger Widget */}
        <div className="flex justify-end p-4">
          <div className="flex gap-3 items-center">
            <Image
              src="/assets/mater.png"
              alt="Mentor"
              width={24}
              height={24}
              onClick={toggleWidget}
              className="object-cover cursor-pointer"
            />

            <Image
              src="/assets/mat.png"
              alt="Mentor"
              width={24}
              height={24}
              onClick={toggleWidget}
              className="object-cover cursor-pointer"
            />

            <p className="text-[#1F0954] font-bold">Manage Widgets</p>
          </div>
        </div>

        {showWidget && (
          <div className="absolute right-4 top-20 z-50">
            <div className="bg-white shadow-lg p-4 rounded-lg max-w-md w-full relative">
              {/* Close Button */}
              <button
                onClick={toggleWidget}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
              >
                &times;
              </button>
              <Widget />
            </div>
          </div>
        )}

        {/* Welcome Message */}
        <div
          data-aos="fade-left"
          className="bg-[#6F01D0] shadow-md pt-6 pb-6 px-6 flex items-center justify-between border-b border-[#F7F7F7] mt-5 mx-12 rounded-[10px] gap-6 flex-wrap"
        >
          <p className="text-white text-[20px] font-bold">
            Welcome Aboard, Blessing 👋
          </p>
          <p className="text-[#BDBDBD] text-[20px] font-semibold">
            We’re thrilled to have you join Techrity Team!
          </p>
          <button className="bg-white text-black text-[16px] font-bold shadow-md px-4 py-2 rounded-[10px] hover:bg-[#F0EBFF] transition duration-300 whitespace-nowrap">
            Update Profile
          </button>
        </div>

        {/* main */}
        <div className="flex flex-col lg:flex-row w-[90%] ] mx-auto gap-6 mt-10">
          {/* Left Column – Vertical, 40% */}
          <div className="lg:w-[40%] w-full space-y-6 bg-[#fff]">
            <div className="flex justify-between items-center ">
              <div className="flex gap-3">
                <div className="w-6">
                  <span className="block h-1 bg-[#B0B0B0] my-1"></span>
                  <span className="block h-1 bg-[#B0B0B0] my-1"></span>
                  <span className="block h-1 bg-[#B0B0B0] my-1"></span>
                </div>
                <h2 className="text-[18px] font-bold text-[#B0B0B0]">
                  Programs
                </h2>
              </div>

              <div className="flex items-center">
                <a
                  href="#"
                  className="text-sm text-[#6F01D0] font-medium hover:underline mr-2"
                >
                  See all
                </a>
                <div className="flex flex-col justify-start">
                  <div className="w-1 h-1 bg-gray-600 rounded-full mb-1"></div>
                  <div className="w-1 h-1 bg-gray-600 rounded-full mb-1"></div>
                  <div className="w-1 h-1 bg-gray-600 rounded-full mb-1"></div>
                </div>
              </div>
            </div>
            <div className="flex justify-end mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Filter:</span>
                <select className="text-sm px-2 py-1 border rounded-md">
                  <option>Active</option>
                  <option>Completed</option>
                </select>
              </div>
            </div>

            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="relative w-full h-32">
                <Image
                  src="/assets/hum1.jpg"
                  alt="UI UX"
                  fill
                  className="object-cover rounded-t-xl"
                />
                <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  Bootcamp
                </div>
                <div className="absolute bottom-2 left-2 flex items-center space-x-1 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-green-700" />
                  <span>Ongoing</span>
                </div>
              </div>

              <div className="p-4 space-y-2">
                <h3 className="text-base font-semibold">
                  Fundamentals of User Interface & Experience
                </h3>
                <p className="text-sm text-gray-600">
                  This program is a hands-on guide designed for designers who
                  want to master color theory and confidently apply it to their
                  designs.
                </p>

                <div className="flex justify-between">
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/assets/5.png"
                      alt="Mentor"
                      width={24}
                      height={24}
                      className="rounded-full object-cover"
                    />
                    <span className="text-sm text-gray-500">Mentors</span>
                  </div>

                  <div className="flex space-x-2">
                    <button className="text-sm px-3 py-1 border border-gray-300 rounded-md">
                      View Details
                    </button>
                    <button className="text-sm px-3 py-1 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                      Analysis
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="relative w-full h-32">
                <Image
                  src="/assets/user.avif"
                  alt="Full Stack"
                  fill
                  className="object-cover rounded-t-xl"
                />
                <div className="absolute bottom-2 left-2 flex items-center space-x-1 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-green-700" />
                  <span>Ongoing</span>
                </div>
              </div>

              <div className="p-4 space-y-2">
                <h3 className="text-base font-semibold">
                  Full Stack Development Program
                </h3>
                <p className="text-sm text-gray-600">
                  Build, deploy, and scale full-stack applications. Master
                  popular technologies such as React, Node.js, and PostgreSQL.
                </p>
                <div className="flex justify-between">
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/assets/4.png"
                      alt="Mentor"
                      width={24}
                      height={24}
                      className="rounded-full object-cover"
                    />
                    <span className="text-sm text-gray-500">Mentors</span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-sm px-3 py-1 border border-gray-300 rounded-md">
                      View Details
                    </button>
                    <button className="text-sm px-3 py-1 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                      Analysis
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="relative h-32">
                <Image
                  src="/assets/user1.webp"
                  alt="Full Stack"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 flex items-center space-x-1 bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-blue-700" />
                  <span>Bootcamp</span>
                </div>
              </div>

              <div className="p-4 space-y-2">
                <h3 className="text-base font-semibold">
                  Full Stack Development Program
                </h3>
                <p className="text-sm text-gray-600">
                  Build, deploy, and scale full-stack applications. Master
                  popular technologies such as React, Node.js, and PostgreSQL.
                </p>

                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">Mentors</span>
                </div>

                <div className="flex justify-between">
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/assets/1.png"
                      alt="Mentor"
                      width={24}
                      height={24}
                      className="rounded-full object-cover"
                    />
                    <span className="text-sm text-gray-500">Mentors</span>
                  </div>

                  <div className="flex space-x-2">
                    <button className="text-sm px-3 py-1 border border-gray-300 rounded-md">
                      View Details
                    </button>
                    <button className="text-sm px-3 py-1 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                      Analysis
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column – Horizontal, 60% */}
          <div className="lg:w-[60%] w-full">
            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-3">
                  <div className="w-6">
                    <span className="block h-1 bg-[#B0B0B0] my-1"></span>
                    <span className="block h-1 bg-[#B0B0B0] my-1"></span>
                    <span className="block h-1 bg-[#B0B0B0] my-1"></span>
                  </div>
                  <h2 className="text-[18px] font-bold text-[#B0B0B0]">
                    Group Calls
                  </h2>
                </div>
                <div className="flex items-center">
                  <a
                    href="#"
                    className="text-sm text-[#6F01D0] font-medium hover:underline mr-2"
                  >
                    See all
                  </a>
                  <div className="flex flex-col justify-start">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mb-1"></div>
                    <div className="w-1 h-1 bg-gray-600 rounded-full mb-1"></div>
                    <div className="w-1 h-1 bg-gray-600 rounded-full mb-1"></div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {groupCallData.map((call) => (
                  <div
                    key={call.id}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-3"
                  >
                    <div className="relative w-full h-36 rounded-lg overflow-hidden mb-2">
                      {call.images.length > 1 ? (
                        <Slideshow images={call.images} />
                      ) : (
                        <Image
                          src={call.images[0]}
                          alt="Call Banner"
                          layout="fill"
                          objectFit="cover"
                        />
                      )}
                    </div>

                    <span className="text-xs font-semibold px-2 py-1 rounded-full mb-1 inline-block bg-green-100">
                      <div className="flex items-center text-xs text-gray-500 mb-1">
                        <div className="w-2 h-2 bg-[#1F8B01] rounded-full mr-2"></div>
                        <div>{call.badge}</div>
                      </div>
                    </span>

                    <h3 className="text-[18px] font-normal text-[#595564] leading-snug mb-1">
                      {call.title}
                    </h3>
                    <hr className="border-t-0.5 border-gray-300 mb-3" />

                    <div className="flex justify-between">
                      <div className="text-xs text-gray-500 mb-1">
                        {call.date}
                      </div>
                      <div className="flex items-center text-xs text-gray-500 mb-1">
                        <Image
                          src="/assets/time.png"
                          alt="Icon"
                          width={16}
                          height={16}
                          className="mr-2"
                        />
                        <div>{call.time}</div>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <div className="flex-col justify-between items-center text-xs text-gray-500 mb-3">
                        <p className="text-[#A195C0]">Study Group</p>
                        <div className="flex items-center">
                          <Image
                            src="/assets/circle.png"
                            alt="Icon"
                            width={16}
                            height={16}
                            layout="intrinsic"
                            className="mr-2"
                          />
                          <span className="text-[#595564] font-semibold">
                            {call.group}
                          </span>
                        </div>
                      </div>

                      <div className="flex-col justify-between items-center text-xs text-gray-500 mb-3">
                        <p className="text-[#A195C0]">Mentors</p>
                        <div className="flex items-center">
                          <Image
                            src="/assets/mentor.png"
                            alt="Icon"
                            width={40}
                            height={40}
                            layout="intrinsic"
                            className="mr-2"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <button className="text-sm border border-gray-300 rounded-lg px-3 py-1 hover:bg-gray-100">
                        View Participants
                      </button>
                      <button className="text-sm bg-purple-600 text-white rounded-lg px-4 py-1 hover:bg-purple-700">
                        Join Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* next section */}
        <div className="flex flex-col lg:flex-row gap-6 w-full lg:w-[90%] mt-10 mx-auto">
          {/* Pie Chart Section */}
          <div className="bg-white rounded shadow-md p-4 w-full lg:w-[35%] max-h-[300px] overflow-y-auto">
            <div className="flex justify-between">
              <h2 className="font-bold text-xl text-[#595564] mb-2">Users</h2>

              <div className="relative">
                <div className="absolute right-0 top-0 bg-white border p-1 shadow-lg rounded-lg ">
                  <select className="cursor-pointer">
                    <option>Option</option>
                    <option>Students</option>
                    <option>Mentors</option>
                    <option>Programs</option>
                    <option>Others </option>
                  </select>
                </div>
              </div>
            </div>

            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  dataKey="value"
                  isAnimationActive
                  data={data}
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  label
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <p className="text-center text-sm mt-2">Total Users: 240</p>
          </div>

          {/* Applications Section */}
          <div className="bg-white rounded-2xl shadow-md p-6 w-full lg:w-[60%]">
            <div className="flex justify-between items-center ">
              <div className="flex gap-3">
                <div className="w-6">
                  <span className="block h-1 bg-[#B0B0B0] my-1"></span>
                  <span className="block h-1 bg-[#B0B0B0] my-1"></span>
                  <span className="block h-1 bg-[#B0B0B0] my-1"></span>
                </div>
                <h2 className="text-[18px] font-bold text-[#B0B0B0]">
                  Application
                </h2>
              </div>

              <div className="flex items-center">
                <a
                  href="#"
                  className="text-sm text-[#6F01D0] font-bold hover:underline mr-2"
                >
                  See all
                </a>
                <div className="flex flex-col justify-start">
                  <div className="w-1 h-1 bg-gray-600 rounded-full mb-1"></div>
                  <div className="w-1 h-1 bg-gray-600 rounded-full mb-1"></div>
                  <div className="w-1 h-1 bg-gray-600 rounded-full mb-1"></div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-2 w-full max-w-4xl mx-auto my-6">
              <p className="text-[#7D8DA6] font-normal p-4">Mentors</p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <input
                    type="checkbox"
                    className="w-5 h-5 accent-purple-600"
                  />
                  <Image
                    src="/assets/3.png"
                    alt="Profile"
                    width={40}
                    height={40}
                    unoptimized
                    className="rounded-full object-cover"
                  />

                  <div>
                    <p className="font-bold text-gray-800">Maxwell Smith</p>
                    <p className="text-sm text-gray-500">
                      maxwellsmith@gmail.com
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-row gap-2 w-full sm:w-auto justify-center">
                  <button className="px-4 py-2 text-sm bg-[#D09696] text-[#D83535] hover:bg-[#ba7e7e] hover:text-red-700 transition-colors duration-300 rounded-[10px] w-1/2 sm:w-auto">
                    Reject
                  </button>

                  <button className="px-4 py-2 text-sm bg-[#6F01D0] text-white hover:bg-[#5c00ad] transition-colors duration-300 rounded-[10px] w-1/2 sm:w-auto">
                    Accept
                  </button>
                </div>
              </div>

              {/* Tags Row */}
              <div className="mt-4 flex flex-wrap gap-3 text-xs sm:text-sm">
                <span className="bg-[#DDCEEE] text-[#9985A7] px-3 py-1 rounded-full">
                  Product Designer
                </span>
                <span className="bg-[#A1BDBA] text-[#58948E] px-3 py-1 rounded-full">
                  4 Years Experience
                </span>
                <span className="bg-[#ABBEE0] text-[#8196B5] px-3 py-1 rounded-full">
                  Lagos, Nigeria
                </span>
                <span className="bg-[#C8C8C8] text-[#000] px-3 py-1 rounded-full">
                  GMT +1
                </span>
              </div>
            </div>

            <hr className="border-t border-gray-300" />

            {/* Students Section */}
            <div className="mb-6">
              <p className="text-[#7D8DA6] font-normal p-4">Students</p>

              <div className="flex flex-col mt-5 gap-10">
                {/** Repeat for all students */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <input
                      type="checkbox"
                      className="w-5 h-5 accent-purple-600"
                    />
                    <Image
                      src="/assets/3.png"
                      alt="Profile"
                      width={40}
                      height={40}
                      unoptimized
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-gray-800">Maxwell Smith</p>
                      <p className="text-sm text-gray-500">
                        maxwellsmith@gmail.com
                      </p>
                    </div>
                  </div>

                  {/** Buttons */}
                  <div className="flex gap-2 w-full sm:w-auto justify-center">
                    <button className="px-6 py-3 text-sm bg-[#D09696] text-[#D83535] hover:bg-[#ba7e7e] hover:text-red-700 transition-colors duration-300 rounded-[10px] w-[40%] sm:w-auto">
                      Reject
                    </button>
                    <button className="px-6 py-3 text-sm bg-[#6F01D0] text-white hover:bg-[#5c00ad] transition-colors duration-300 rounded-[10px] w-[40%] sm:w-auto">
                      Accept
                    </button>
                  </div>
                </div>

                <hr className="border-t border-gray-300" />

                {/** Repeat for the rest of the students */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <input
                      type="checkbox"
                      className="w-5 h-5 accent-purple-600"
                    />
                    <Image
                      src="/assets/1.png"
                      alt="Profile"
                      width={40}
                      height={40}
                      unoptimized
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-gray-800">Adeati Samuel</p>
                      <p className="text-sm text-gray-500">
                        adeatisamuel@gmail.com
                      </p>
                    </div>
                  </div>

                  {/** Buttons */}
                  <div className="flex gap-2 w-full sm:w-auto justify-center">
                    <button className="px-6 py-3 text-sm bg-[#D09696] text-[#D83535] hover:bg-[#ba7e7e] hover:text-red-700 transition-colors duration-300 rounded-[10px] w-[40%] sm:w-auto">
                      Reject
                    </button>
                    <button className="px-6 py-3 text-sm bg-[#6F01D0] text-white hover:bg-[#5c00ad] transition-colors duration-300 rounded-[10px] w-[40%] sm:w-auto">
                      Accept
                    </button>
                  </div>
                </div>

                <hr className="border-t border-gray-300" />

                {/** Repeat for more students */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <input
                      type="checkbox"
                      className="w-5 h-5 accent-purple-600"
                    />
                    <Image
                      src="/assets/5.png"
                      alt="Profile"
                      width={40}
                      height={40}
                      unoptimized
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-gray-800">Edward Smith</p>
                      <p className="text-sm text-gray-500">
                        edwardsmith@gmail.com
                      </p>
                    </div>
                  </div>

                  {/** Buttons */}
                  <div className="flex gap-2 w-full sm:w-auto justify-center">
                    <button className="px-6 py-3 text-sm bg-[#D09696] text-[#D83535] hover:bg-[#ba7e7e] hover:text-red-700 transition-colors duration-300 rounded-[10px] w-[40%] sm:w-auto">
                      Reject
                    </button>
                    <button className="px-6 py-3 text-sm bg-[#6F01D0] text-white hover:bg-[#5c00ad] transition-colors duration-300 rounded-[10px] w-[40%] sm:w-auto">
                      Accept
                    </button>
                  </div>
                </div>

                <hr className="border-t border-gray-300" />

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <input
                      type="checkbox"
                      className="w-5 h-5 accent-purple-600"
                    />
                    <Image
                      src="/assets/4.png"
                      alt="Profile"
                      width={40}
                      height={40}
                      unoptimized
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-gray-800">Sandra Smith</p>
                      <p className="text-sm text-gray-500">
                        sandrasmith@gmail.com
                      </p>
                    </div>
                  </div>

                  {/** Buttons */}
                  <div className="flex gap-2 w-full sm:w-auto justify-center">
                    <button className="px-6 py-3 text-sm bg-[#D09696] text-[#D83535] hover:bg-[#ba7e7e] hover:text-red-700 transition-colors duration-300 rounded-[10px] w-[40%] sm:w-auto">
                      Reject
                    </button>
                    <button className="px-6 py-3 text-sm bg-[#6F01D0] text-white hover:bg-[#5c00ad] transition-colors duration-300 rounded-[10px] w-[40%] sm:w-auto">
                      Accept
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activities Section */}
          <div className="flex flex-col gap-8 items-center">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow p-4 w-full lg:max-w-[400px] max-h-[400px] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-3">
                  <div className="w-6">
                    <span className="block h-1 bg-[#B0B0B0] my-1"></span>
                    <span className="block h-1 bg-[#B0B0B0] my-1"></span>
                    <span className="block h-1 bg-[#B0B0B0] my-1"></span>
                  </div>
                  <h2 className="text-[18px] font-bold text-[#B0B0B0]">
                    Mentors
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/frame.png"
                    alt="KYC"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                  <div className="flex flex-col justify-start">
                    <div className="w-1 h-1 bg-gray-600 rounded-full mb-1"></div>
                    <div className="w-1 h-1 bg-gray-600 rounded-full mb-1"></div>
                    <div className="w-1 h-1 bg-gray-600 rounded-full mb-1"></div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                {/* Activity 1 */}
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <Image
                    src="/assets/3.png"
                    alt="Profile"
                    width={40}
                    height={40}
                    unoptimized
                    className="rounded-full object-cover"
                  />

                  <div>
                    <p className="font-bold text-gray-800">Maxwell Smith</p>
                    <p className="text-sm text-gray-500">Designer</p>
                  </div>
                </div>

                <hr className="border-t border-gray-300" />
                {/* Activity 2 */}
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <Image
                    src="/assets/1.png"
                    alt="Profile"
                    width={40}
                    height={40}
                    unoptimized
                    className="rounded-full object-cover"
                  />

                  <div>
                    <p className="font-bold text-gray-800">Adeati Samuel</p>
                    <p className="text-sm text-gray-500">Product Designer</p>
                  </div>
                </div>

                <hr className="border-t border-gray-300" />

                <div className="flex items-center justify-center">
                  <button className="w-full max-w-xs bg-purple-600 text-white p-2 rounded-full text-lg font-semibold hover:bg-purple-700 transition">
                    See all
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow p-4 w-full lg:max-w-[400px] max-h-[400px] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center justify-between w-full  mx-auto">
                  <div className="flex gap-3">
                    <div className="w-5">
                      <span className="block h-1 bg-[#B0B0B0] my-1"></span>
                      <span className="block h-1 bg-[#B0B0B0] my-1"></span>
                      <span className="block h-1 bg-[#B0B0B0] my-1"></span>
                    </div>
                    <h2 className="text-[18px] font-bold text-[#B0B0B0]">
                      Recent Activities
                    </h2>
                  </div>

                  <div className="flex items-center">
                    <div className="flex flex-col justify-start">
                      <div className="w-1 h-1 bg-gray-600 rounded-full mb-1"></div>
                      <div className="w-1 h-1 bg-gray-600 rounded-full mb-1"></div>
                      <div className="w-1 h-1 bg-gray-600 rounded-full mb-1"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                {/* Repeated Activity 1 */}
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <Image
                      src="/assets/4.png"
                      alt="KYC"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div>
                    <p className="font-semibold">KYC Verification</p>
                    <p className="text-gray-500">
                      45 new persons just signed up on Mently.
                    </p>
                    <p className="text-gray-400 text-xs mt-1">25 minutes Ago</p>
                  </div>
                </div>
                <hr className="border-t border-gray-300" />
                {/* Activity 2 */}
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <Image
                      src="/assets/2.png"
                      alt="Sign Up"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div>
                    <p className="font-semibold">New User Sign Up!</p>
                    <p className="text-gray-500">
                      45 new persons just signed up on Mently.
                    </p>
                    <p className="text-gray-400 text-xs mt-1">25 minutes Ago</p>
                  </div>
                </div>
                <hr className="border-t border-gray-300" />
                {/* Activity 3 */}
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <Image
                      src="/assets/1.png"
                      alt="Withdrawal"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Withdrawal Request</p>
                    <p className="text-gray-500">
                      Mardian requested a withdrawal.
                    </p>
                    <p className="text-gray-400 text-xs mt-1">25 minutes Ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
