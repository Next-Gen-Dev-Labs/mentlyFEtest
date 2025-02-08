import {
  Calendar1,
  Location,
  Book1,
  Teacher,
  Call,
  Messages3,
  Medal,
  Briefcase,
  People,
  CallAdd,
  Notepad2,
} from "iconsax-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Banner from "@/public/Banner Template.png";

export function ProgramDetails() {
  return (
    <>
      <div
        className="text-[12px] text-[#49454F] py-10 text-end hidden md:block"
        aria-label="Program date and time"
      >
        13th February 2024, 12:15 PM
        <span className="text-[#49454F] text-xs ml-1">(Local time)</span>
      </div>
      <Card role="article">
        <CardContent className="md:px-6 px-2">
            <header className="mb-8">
              <h1 className="text-[32px] text-[#1C1D4E] font-bold">
                Mentorship Program
              </h1>
              <Image
                src={Banner}
                alt="Mentorship Program Banner"
                width={668}
                height={206}
                priority
              />
            </header>
          <div className="space-y-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className=" bg-white rounded-lg" role="contentinfo">
                <p className="text-base text-gray-800">
                  UI/UX Design check ins with faith is a way for beginners in
                  UI/UX Design to get started about the fundamentals and how
                  they can build a Design Career, share, document their progress
                  on a weekly basis.
                </p>
              </div>

              <div
                className="space-y-1 bg-white rounded-lg shadow-md"
                role="list"
                aria-label="Program details"
              >
                <div className="flex items-center gap-4 p-4 ">
                  <div className="text-[#777795]">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <span className="text-[#49454F] text-[14px] font-medium">
                    Mentorship Program
                  </span>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                  <div className="text-[#777795]">
                    <Calendar1 className="h-5 w-5" />
                  </div>
                  <span className="text-[#49454F] text-[14px] font-medium">
                    21/4/2024-21/5/2024
                  </span>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                  <div className="text-[#777795]">
                    <Location className="h-5 w-5" />
                  </div>
                  <span className="text-[#49454F] text-[14px] font-medium">
                    In Person
                  </span>
                </div>
              </div>
            </div>

            <Card className="bg-[#FFFAF2] border-2 border-[#FEE0B1] rounded-2xl">
              <CardContent className="p-6">
                <h2 className="text-[#1D192B] text-xl font-semibold mb-6">
                  Program Information Text
                </h2>
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  role="list"
                  aria-label="Program features"
                >
                  <div className="flex items-center gap-3 p-4 rounded-xl">
                    <div className="p-2 bg-[#FEE0B1] rounded-full">
                      <Medal className="h-5 w-5 text-[#1D192B]" />
                    </div>
                    <span className="text-[#1D192B] text-sm">Content</span>
                  </div>
                  <div className="flex items-center gap-3 p-4  rounded-xl">
                    <div className="p-2 bg-[#FEE0B1] rounded-full">
                      <Briefcase className="h-5 w-5 text-[#1D192B]" />
                    </div>
                    <span className="text-[#1D192B] text-sm">Content</span>
                  </div>
                  <div className="flex items-center gap-3 p-4  rounded-xl">
                    <div className="p-2 bg-[#FEE0B1] rounded-full">
                      <People className="h-5 w-5 text-[#1D192B]" />
                    </div>
                    <span className="text-[#1D192B] text-sm">Content</span>
                  </div>
                  <div className="flex items-center gap-3 p-4  rounded-xl">
                    <div className="p-2 bg-[#FEE0B1] rounded-full">
                      <Notepad2 className="h-5 w-5 text-[#1D192B]" />
                    </div>
                    <span className="text-[#1D192B] text-sm">Content</span>
                  </div>
                  <div className="flex items-center gap-3 p-4  rounded-xl">
                    <div className="p-2 bg-[#FEE0B1] rounded-full">
                      <CallAdd className="h-5 w-5 text-[#1D192B]" />
                    </div>
                    <span className="text-[#1D192B] text-sm">Content</span>
                  </div>
                  <div className="flex items-center gap-3 p-4  rounded-xl">
                    <div className="p-2 bg-[#FEE0B1] rounded-full">
                      <Messages3 className="h-5 w-5 text-[#1D192B]" />
                    </div>
                    <span className="text-[#1D192B] text-sm">Content</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#FFFAF2] border-2 border-[#FEE0B1] rounded-2xl">
              <CardContent className="p-6">
                <h2 className="text-[#1D192B] text-xl font-semibold mb-6">
                  Program Information Text2
                </h2>
                <ul
                  className="space-y-2"
                  role="list"
                  aria-label="Program details list"
                >
                  {Array(6)
                    .fill(0)
                    .map((_, i) => (
                      <li
                        key={i}
                        className="text-[16px] text-[#595564] font-medium"
                        role="listitem"
                      >
                        • Content
                      </li>
                    ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
