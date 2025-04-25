"use client"

import { FaEllipsisV, FaFilter, FaChevronDown, FaCog } from "react-icons/fa"
import { FaBars } from 'react-icons/fa';
import firstImage from "../component/assets/first_image.svg"
import bannerImage from "../component/assets/program-banner.svg"
import Image from "next/image"
import users from "../component/assets/man.svg"

const ProgramsList = () => {
  const programs = [
    {
      id: 1,
      title: "Fundamentals of User interface & Experience",
      level: "Beginner",
      description:
        "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach...",
      mentors: 1,
      image: bannerImage,
      featured: true,
    },
    {
      id: 2,
      title: "Colour Hack Practical Group Call",
      level: "Group Call",
      description:
        "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach...",
      hostedBy: {
        name: "Faith Okolo",
        avatar: firstImage,
      },
      image: firstImage,
    },
    {
      id: 3,
      title: "Colour Hack Practical Group Call",
      level: "Group Call",
      description:
        "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach...",
      hostedBy: {
        name: "Gal",
        avatar: firstImage,
      },
      image: firstImage,
    },
  ]

  return (
    <div className="bg-white p-4 rounded-[2rem]">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <FaBars className="h-6 w-6 text-gray-500" />
          <h2 className="text-lg font-medium text-gray-500">Programs</h2>
        </div>
        <div className="flex items-center">
          <span className="text-purple-600 text-sm font-medium">See all</span>
          <button className="p-1 ml-2">
            <FaEllipsisV className="h-5 w-5 text-gray-500" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-end gap-4 mb-4">
        <div className="flex items-center gap-2">
          <FaFilter className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-500">Filter</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Active</span>
          <FaChevronDown className="h-4 w-4 text-gray-500" />
        </div>
      </div>

      <div className="space-y-4">
        {programs.map((program) => (
          <div key={program.id} className="relative rounded-xl overflow-hidden shadow-sm mb-4">
            <div className="relative h-24 w-full rounded-t-lg overflow-hidden">
              <Image
                src={program.image}
                alt="Program background"
                fill
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 p-3 flex flex-col justify-between z-10">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-white font-semibold text-base">{program.title}</h3>
                    <div className="bg-white text-xs px-2 py-0.5 rounded-full w-fit flex items-center">
                      <div
                        className={`rounded-full text-green-500 ${program.level === "Beginner" ? "bg-blue-500 text-blue-400" : "bg-green-500 text-green-400"} w-2 h-2 mr-1.5`}
                      ></div>
                      {program.level}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    {program.featured && (
                      <div className="bg-transparent rounded-full p-1">
                        <FaCog className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-black/40 z-[5]" />
            </div>

            <div className="p-3 bg-white border border-gray-100 rounded-b-lg">
              <p className="text-xs text-gray-600 mb-3 line-clamp-2">{program.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {program.mentors ? (
                    <div className="flex items-center gap-1">
                      <div className="flex -space-x-2">
                        {[...Array(program.mentors)].map((_, i) => (
                          <div className="h-5 w-5 rounded-full border border-white overflow-hidden" key={i}>
                            <Image src={users} alt="users" className="w-4 h-4" />
                          </div>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 ml-1">Mentors</span>
                    </div>
                  ) : program.hostedBy ? (
                    <div className="flex items-center gap-1">
                      <div className="h-5 w-5 rounded-full overflow-hidden">
                        <Image
                          src={program.hostedBy.avatar}
                          alt={program.hostedBy.name}
                          width={20}
                          height={20}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <span className="text-xs text-gray-500">Hosted By: {program.hostedBy.name}</span>
                    </div>
                  ) : null}
                </div>

                <div className="flex flex-wrap lg:flex-nowrap gap-2 justify-end">
                  <button className="w-32 sm:w-auto lg:w-20 px-2 py-1 text-xs font-semibold text-purple-600 border border-purple-600 rounded-[0.7rem]">
                    View Details
                  </button>
                  {program.hostedBy?.name === "Gal" ? (
                    <button className="w-32 sm:w-auto lg:w-20 px-2 py-1 text-xs font-semibold text-white bg-purple-600 rounded-[0.7rem]">
                      Assign Mentor
                    </button>
                  ) : (
                    <button className="w-32 sm:w-auto lg:w-20 px-2 py-1 text-xs font-semibold text-white bg-purple-600 rounded-[0.7rem]">
                      Analyze
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProgramsList
