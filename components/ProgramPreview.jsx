"use client";

import {
  Calendar,
  MapPin,
  PhoneCall,
  Group,
  NotepadText,
  BaggageClaim,
  ChartBar,
  Contact2,
} from "lucide-react";
import Image from "next/image";

const contentArray = [
  {
    icon: <NotepadText />,
    text: "Content",
  },
  {
    icon: <Group />,
    text: "Content",
  },
  {
    icon: <PhoneCall />,
    text: "Content",
  },
  {
    icon: <BaggageClaim />,
    text: "Content",
  },
  {
    icon: <ChartBar />,
    text: "Content",
  },
  {
    icon: <Contact2 />,
    text: "Content",
  },
];

export default function ProgramPreview() {
  return (
    <div>
      <h1 className="mb-14 text-gray-600 text-right">
        13th February 2024, 12:15 PM (Local time).
      </h1>
      <h1 className="text-4xl font-extrabold text-[#1f0954] mb-3">
        Mentorship Program
      </h1>
      <div className="max-w-3xl mx-auto border rounded-lg overflow-hidden ">
        {/* Hero Banner */}
        <div className="relative bg-[#1C1B3B] text-white p-6 rounded-t-lg overflow-hidden">
          <div className="relative  flex items-center gap-4">
            <Image
              src="/assets/mentor.png"
              alt="Speaker"
              width={80}
              height={80}
              className="rounded-xl"
            />
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-1">
                Mastering the work <br></br> life Equation
              </h1>
              <h1 className="text-sm font-light mb-1">
                <span className="">with</span> Nwachukwu Peculiar
              </h1>
              <button className="bg-red-500 text-white px-2 py-1 rounded-lg text-sm">
                Register Now
              </button>
            </div>
            <div className="text-base">
              <h1 className="font-semibold text-sm">
                20TH <br></br>OCT,
              </h1>
              <h1 className="font-semibold text-sm">2024</h1>
              <h1 className="mt-1 text-sm ">2PM</h1>
            </div>
          </div>
        </div>

        {/* Program Details */}
        <div className="p-6">
          <div className="flex gap-4">
            {" "}
            {/* Program Description */}
            <p className="text-gray-600 mb-8 w-72">
              UI/UX Design check ins with faith is a way for beginners in UI/UX
              Design to get advice about the fundamentals and how they can build
              a Design Career, share, document their progress on a weekly basis.
            </p>
            <div className="flex flex-col items-start gap-6 mb-8 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gray-500" />
                <span className="text-gray-600 font-medium">
                  Mentorship Program
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gray-500" />
                <span className="text-gray-600">21/4/2024-21/5/2024</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gray-500" />
                <span className="text-gray-600">In Person</span>
              </div>
            </div>
          </div>
          {/* Program Information Grid */}
          <div className="border bg-[#fcf1e0] rounded-lg p-4 mb-8">
            <h2 className="font-semibold mb-4 text-[#1f0954]">
              Program Information Text
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {contentArray.map((items, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-600">{items.icon}</span>
                  </div>
                  <span className="text-gray-600">{items.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Program Information Text 2 */}
          <div className="bg-[#fcf1e0] rounded-lg p-6">
            <h2 className="font-semibold mb-4 text-[#1f0954]">
              Program Information Text 2
            </h2>
            <ul className="space-y-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-600">
                  <span>•</span>
                  Content
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
