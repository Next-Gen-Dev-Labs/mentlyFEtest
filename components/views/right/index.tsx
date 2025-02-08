import Image from "next/image";
import lady from "@/public/lady.png";
import ProgramCard from "../../ProgramCard";
import {
  Briefcase,
  CallAdd,
  CardTick,
  Messages3,
  Notepad2,
  People,
} from "iconsax-react";
import Card from "./card";

const cardItems = [CardTick, Briefcase, People, Notepad2, CallAdd, Messages3];

export default function Right() {
  return (
    <div className="py-6 px-3 max-w-[695px]">
      <p className="float-right text-gray-400">
        13th February 2024, 12:15 PM (Local time).
      </p>
      <section className="border px-2 pb-10 rounded-sm mt-[80px] flex flex-col gap-8">
        <h2 className="font capitalize font-[900] text-mently-blue text-3xl">
          mentorship program
        </h2>

        <div className="relative w-full h-48 bg-gradient-to-tr from-[#0F1013] to-[rgb(93,99,121)] overflow-hidden rounded-lg flex justify-around items-center max-w-[668px]">
          <div className="z-0 w-[70%] h-[200px] rounded-[90%] bg-[#0F1013]/50 absolute"></div>

          <div className="z-20 flex items-stretch gap-4 justify-self-start relative">
            <Image src={lady} alt="event flier" width={74} height={116} />
            <div className="max-w-96 border-2c flex flex-col">
              <h3 className="text-white text-lg flex flex-col">
                <span className="capitalize">
                  mastering the work life equation
                </span>
              </h3>
              <span className="text-white">
                <small>with</small>
                <span className="ml-2">Nwachukwu Peculiar</span>
              </span>
              <span className="bg-gradient-to-tr from-gradient-pink to-gradient-yellow text-white text-center w-fit px-6 capitalize rounded-sm mt-auto">
                masterclass
              </span>
            </div>
          </div>

          {/* layer */}
          <div className="z-20 relative uppercase text-white max-w-12">
            <span>20th oct, 2024</span>
            <hr />
            <span>2pm</span>
          </div>
        </div>

        <div className="flex gap-8 items-center">
          <p className="w-full max-w-72 text-gray-600 text-[16px] leading-tight">
            UI/UX Design check ins with faith is a way for beginners in UI/UX
            Design to get started about the fundamentals and how they can build
            a Design Career, share, document their progress on a weekly basis.
          </p>
          <Card />
        </div>

        <div className="flex flex-col gap-4">
          <ProgramCard classname="grid grid-cols-2 gap-6" title="program information text">
            {cardItems.map((Icon, index) => (
              <li key={index} className="flex items-baseline gap-2">
                <span className="bg-icon-honey flex-center w-8 h-8 rounded-full">
                  <Icon
                    size={16}
                    variant="Linear"
                    className="stroke-mently-blue"
                  />
                </span>
                <span>Content</span>
              </li>
            ))}
          </ProgramCard>
          <ProgramCard classname="list-disc list-inside font-semibold" title="program information text 2">
            <li>Content</li>
            <li>Content</li>
            <li>Content</li>
            <li>Content</li>
            <li>Content</li>
            <li>Content</li>
          </ProgramCard>
        </div>
      </section>
    </div>
  );
}
